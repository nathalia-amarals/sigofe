<template>
    <div class='formca'>
    <h1> Deleta Contrato </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Identificador Contrato:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          required
          placeholder="Insira o identificador do contrato"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        id: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form))
      if (this.$root.$token !== '' && this.$root.$isValidToken) {
        let headers = {
          'Content-Type': 'application/json;',
          'Authorization': 'Bearer ' + this.$root.$token
        }

        this.$http.delete('http://localhost:3000/consultassessor/contrato/' + this.form.id, {headers})
          .then(res => {
            alert('Contrato deletado com sucesso')
          })
          .catch(function () {
            this.$root.$isValidToken = false
            console.log('token invalidado')
            alert('Sessão expirada, favor refazer o login')
            this.$router.push('/autenticacao')
          })
      }
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.id = ''
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
.formca{
    width: 50%;
    margin: auto;
}
</style>
