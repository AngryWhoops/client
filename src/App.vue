<template>
  <nav>
    <router-link to="/">Лента</router-link> |
    <router-link to="/create">Создать пост</router-link>
  </nav>
  <router-view/>
</template>

<script>

  export default {
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
