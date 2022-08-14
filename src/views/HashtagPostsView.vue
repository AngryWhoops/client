<template>
    <h3>Список постов по хэштегу</h3>
    <HashtagPostsList />
</template>

<script>
import HashtagPostsList from '@/components/HashtagPostsListComponent.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        HashtagPostsList,
    }
}
</script>

<style>
</style>