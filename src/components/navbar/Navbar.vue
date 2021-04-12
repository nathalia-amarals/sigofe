<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">SIGO</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Pesquisar"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Pesquisar</b-button>
        </b-nav-form>
      </b-navbar-nav>
        <div>
        <router-link to="/sigo/autenticacao">
            Login
        </router-link>
        </div>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style>

</style>
