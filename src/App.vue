<template>
  <div id="app">
    <Navbar/>
    <Sidebar :routes="Routes"></Sidebar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Sidebar from './components/sidebar/Sidebar.vue'
import Router from './router/index'
console.log('exibindo routes ', Router.options.routes)
export default {
  name: 'App',
  components: { Navbar, Sidebar },
  data () {
    return {
      Routes: Router.options.routes
    }
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
  margin-top: 0px;
}

#router-view {
  padding: 20px 0px;
  margin: 0 auto;
}
</style>
