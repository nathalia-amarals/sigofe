<template>
    <div class='formlogin'>
    <h1> Login </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Usuário:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.usuario"
          required
          placeholder="Insira o seu usuário"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.senha"
          required
          placeholder="Insira a senha"
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        usuario: '',
        senha: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form))
      this.$http.post('http://localhost:3000/autenticacao/autenticar', JSON.stringify(this.form))
        .then(res => {
          this.$root.$token = res.body.token
          alert('Login realizado com sucesso')
          this.$root.$isValidToken = true
          console.log(this.$root.$isValidToken)
          this.$router.push('/sigo')
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.idEmpresa = ''
      this.form.valor = ''
      this.form.descricao = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
.formlogin{
    width: 50%;
    margin: auto;
}
</style>
