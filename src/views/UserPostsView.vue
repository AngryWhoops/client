<template>
    <h3>Список постов пользователя, где он автор и где отмечен на других постах</h3>
    <UserPostsList/>
</template>

<script>
import UserPostsList from '@/components/OtherUserPostListComponent.vue'
    export default {
        components: {
            UserPostsList,
        }
    }
</script>

<style scoped>

</style>