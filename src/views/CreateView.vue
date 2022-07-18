<template>
  <div class="create-post">
    <PostFormComponentVue @create="createPost"/>
  </div>
</template>

<script>
import PostFormComponentVue from '@/components/PostFormComponent.vue'
  export default {
    data() {
      return {
        posts: [],
      }
    },
    components: {
    PostFormComponentVue,
  },
}
</script>

<style scoped>
  
</style>