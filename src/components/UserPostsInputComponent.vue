<template>
    <form @submit.prevent>
        <input
        type="text"
        class="input"
        placeholder="Введи имя пользователя для поиска"
        v-model="user">
        <button class="btn"
        @click="userPostRequest">Жмякай</button>
    </form>
    <div class="post-item" v-for="post in postsList" :key="post.id">
    <div class="datefield">
      Создан: {{post.created_at}}
    </div>
    <div>{{post.body}}</div>
  </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                user: '',
                postsList: [],
            }
        },

        methods: {
            userPostsRequest() {
                axios
                .get('http://localhost:8000/api/getpostsbyuser/'+this.user)
                .then(response => this.postsList = response)
                .catch(console.log("Ошибка userPostsRequest"))
            }
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
</style>