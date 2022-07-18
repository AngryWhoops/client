<template>
  <div class="post-item" v-for="post in posts" :key="post.id">
    <div>Заголовок <strong>{{post.title}}</strong></div>
    <div>Описание <strong>{{post.body}}</strong></div>
  </div>
</template>

<script>
import axios from 'axios';

    export default {
        created() {
            this.getAllPosts()
        },
        data() {
            return {
                posts: []
            }
        },
        components: {

        }, 
        methods: {
            getAllPosts() {
                axios
                .get('http://localhost:8001/api/getallcards', this.posts)
                .then(response => this.posts = response.data)
            }
        }

    }
</script>

<style scoped>
    .post-list {
    padding: 10px 10px;
    border: 3px solid teal;
    border-radius: 6px;
    margin: 10px 10px 10px;
  }

  .post-item {
    padding: 10px 10px;
    border: 3px solid teal;
    border-radius: 6px;
    margin: 10px 10px 10px;
  }
</style>
