<template>
  <div class="post-item" v-for="post in posts">
    <div class="datefield">
      Создан: {{post.created_at}} | Автор: {{post.user.login}}
    </div>
    <div>{{post.body}}</div>
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
                .get('http://localhost:8001/api/getallmyposts', this.posts)
                .then(response => this.posts = response.data)
                .catch(e => console.log("Ошибка GetAllCards"))
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

  .datefield {
    font-size: 10px;
    color: dimgray;
  }

</style>
