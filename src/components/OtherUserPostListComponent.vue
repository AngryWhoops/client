<template>
  <form @submit.prevent>
    <input
    type="text"
    class="input"
    placeholder="Введи имя пользователя"
    v-model="user_login">
    <button class="btn"
    @click="userPostsRequest">Жмякай</button>
  </form>
  <div class="post-item" v-for="post in posts" :key="post.id">
    <div class="datefield">
      Создан: {{post.created_at}} | Автор: {{post.user.login}}
    </div>
    <div>{{post.body}}</div>
    <button class="btn" @click="subscribeOnPost(post.user.login)">Подписаться</button>
  </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
          return {
            posts: [],
            user_login: '',
          }
        },
        methods: {
          userPostsRequest() {
            axios
            .get('http://localhost:8001/api/getpostsbyuser/'+this.user_login)
            .then(response => this.posts = response.data)
            .catch(e => console.log(e.response))

            this.user_login = ''

          },
          subscribeOnPost(login) {
            axios
            .get('http://localhost:8001/api/subscribeonpost/'+login)
            .then(e => console.log(e.response))
          }
        }

    }
</script>

<style scoped>
  .post-item {
    padding: 10px 10px;
    border: 3px solid teal;
    border-radius: 6px;
    margin: 10px 10px 10px;
  }

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
