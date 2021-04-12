<template>
    <div class='formgn'>
    <h1> Deleta Norma </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Id:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          required
          placeholder="Insira id"
        ></b-form-input>
      </b-form-group>

      <b-button type="delete" variant="primary">Deletar</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        id: '',
        name: '',
        obs: '',
        normafile: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      if (this.$root.$token !== '' && this.$root.$isValidToken) {
        let headers = {
          'Authorization': 'Bearer ' + this.$root.$token
        }

        this.$http.delete('http://sigoapp.southcentralus.azurecontainer.io:3000/sigo/gestaonormas/norma/' + this.form.id, {headers})
          .then(res => {
            alert('Norma deletada com sucesso')
          })
          .catch(res => {
            if (res.status === 404 || res.status === 401) {
              this.$root.$isValidToken = false
              console.log('token invalidado')
              alert('Sessão expirada, favor refazer o login')
              this.$router.push('/sigo/autenticacao')
            } else {
              alert('Norma não encontrada')
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
.formgn{
    width: 50%;
    margin: auto;
}

.mt-3{
    margin:50px 50px;
}
</style>
