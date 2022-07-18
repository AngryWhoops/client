<template>
  <PostListComponent/>
</template>

<script>
import PostListComponent from "@/components/PostListComponent.vue"

export default {
  data() {
    return {
    }
  },
  components: {
    PostListComponent,
  }, methods: {
      
    },
  }
</script>

<style scoped>
  .btn {
    background: none;
    border-radius: 6px;
    background-color: teal;
    color: white;
    height: 30px;
    width: 120px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
</style>