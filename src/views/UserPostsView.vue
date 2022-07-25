<template>
    <h3>Список постов пользователя</h3>
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