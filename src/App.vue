<template>
    <div id="app">
        <h1>componente test</h1>
        <nav>
            <ul>
                <li><router-link to="/test"> Test </router-link></li>
                <li><router-link to="/"> User </router-link></li>
            </ul>
        </nav>
        <router-view/>
    </div>
</template>

<script>
// import test from './components/test.vue';
// import user from './components/user.vue';
export default {
  name: 'App',
  components: {
    // test,
    // user
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
