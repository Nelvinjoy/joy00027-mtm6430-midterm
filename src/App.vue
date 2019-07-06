<template>
  <div id="app">
<navigation/>
  <router-view/>
  <foot/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import navigation from './components/nav.vue';
import foot from './components/footer.vue';
export default {
  name: 'app',
  components: {
    HelloWorld, navigation, foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
