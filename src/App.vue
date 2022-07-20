<template>
  <a href="/" class="logomaybe">Bitter</a>
  <nav>
    <router-link to="/">Своя лента</router-link> |
    <router-link to="/userposts">Посты пользователей</router-link> | 
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

nav {
  text-align: center;
}

.logomaybe {
  text-align: left;
  padding: 6px 6px 6px 6px;
  font-size: 32px;
}
</style>
