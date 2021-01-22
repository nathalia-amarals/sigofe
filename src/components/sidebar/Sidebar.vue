<template>
<div class="sidebar">
    <b-button v-b-toggle.sidebar-1>Exibir menu</b-button>
    <b-sidebar id="sidebar-1" title="Menu" shadow>
      <nav v-for="route in routes" :key="route.name">
            <router-link  :to="route.path ? route.path: '/'">
            {{route.name}}
            </router-link>
      </nav>
    </b-sidebar>
  </div>
</template>

<script>
export default{
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
nav{
    margin:auto;
    width: 75%;
    padding: 10px;
}
</style>
