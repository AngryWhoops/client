<template>
  <h4>Список моих постов, постов, где меня отметили и посты, на пользователей которых подписан</h4>
  <PostListComponent />
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