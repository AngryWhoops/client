<template>
  <form @submit.prevent>
    <input v-model="post.body" class="input" type="text" placeholder="Описание">
    <button class="btn" v-if="post.body.length <= 280" @click="createPost">Жмякай</button>
    <div v-else>Текст больше 280 элементов</div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: {
        body: '',
      },
      limit: 280,
    }
  },
  methods: {
    createPost() {
      axios
        .post('http://localhost:8001/api/createmypost', this.post)
        .catch(e => console.log(e.response))
      this.post = {
        body: ''
      }
    },
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