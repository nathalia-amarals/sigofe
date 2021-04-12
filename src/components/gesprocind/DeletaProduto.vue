<template>
    <div class='formgpi'>
    <h1> Deleta Produto </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-8" label="Identificador Produto:" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="form.id"
          required
          placeholder="Insira o id do produto"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Deletar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
      if (this.$root.$token !== '' && this.$root.$isValidToken) {
        let headers = {
          'Content-Type': 'application/json;',
          'Authorization': 'Bearer ' + this.$root.$token
        }

        this.$http.delete('http://sigoapp.southcentralus.azurecontainer.io:3000/sigo/gestaoprocind/' + this.form.id, {headers})
          .then(res => {
            alert('Produto deletado com sucesso')
          })
          .catch(res => {
            if (res.status === 404 || res.status === 401) {
              this.$root.$isValidToken = false
              console.log('token invalidado')
              alert('Sessão expirada, favor refazer o login')
              this.$router.push('/sigo/autenticacao')
            } else {
              alert('Produto não encontrado')
            }
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
.formgpi{
    width: 50%;
    margin: auto;
}
</style>
