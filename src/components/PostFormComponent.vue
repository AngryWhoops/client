<template>
    <form @submit.prevent>
    <h4>Создать</h4>
    <input 
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Заголовок">
    <input 
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Описание">
    <button class="btn" @click="createPost">Жмякай</button>
  </form>
</template>

<script>
import axios from 'axios';

    export default {
    data(){
      return {
        post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      axios
      .post('http://localhost:8001/api/createcard', this.post)
      .catch(e => console.log("Ошибка CreatePost"))
      this.post = {
        title: '',
        body: ''
      }
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
</style>