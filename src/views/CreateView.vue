<template>
  <h3>Создать мой пост</h3>
  <div class="create-post">
    <PostFormComponentVue @create="createPost" />
  </div>
</template>

<script>
import PostFormComponentVue from '@/components/PostFormComponent.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    PostFormComponentVue,
  },
}
</script>

<style scoped>
</style>