<template>
    <form @submit.prevent>
        <input
        type="text"
        class="input"
        placeholder="Введи имя автора"
        v-model="post.user_author">
        <input
        type="text"
        class="input"
        placeholder="Описание поста"
        v-model="post.body">
        <button class="btn"
        @click="userPostsRequest">Жмякай</button>
    </form>


    <div class="post-item" v-for="post in postsList" >
    <div class="datefield">
      Создан: {{post.created_at}} | Автор {{post.user_author}}
    </div>
    <div>{{post.body}}</div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            post: {
              user_author: '',
              body: ''
            }
        }
    },
    methods: {
        userPostsRequest() {
            axios
            .post('http://localhost:8001/api/createpostwithauthor')
            .catch(e => console.log(e.response))
            this.post = {
              body: '',
              user_author: ''
            }
        }
    },
    components: {
    }
}
</script>

<style scoped>
    .input {
    width: 100%;
    height: 25px;
    padding: 10px 10px;
    margin-top: 10px;
  }

  .btn {
    background-color: teal;
    border-radius: 6px;
    width: 90px;
    color: aliceblue;
  }

  .datefield {
    font-size: 10px;
    color: dimgray;
  }

  .post-item {
    padding: 10px 10px;
    border: 3px solid teal;
    border-radius: 6px;
    margin: 10px 10px 10px;
  }
</style>