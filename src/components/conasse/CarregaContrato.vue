<template>
    <div class='formca'>
    <h1> Carrega Contrato </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Identificador Contrato:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          required
          placeholder="Insira o identificador do Contrato"
        ></b-form-input>
        <b-card class="mt-3" header="Contrato">
        <pre class="m-0">{{ formRes }}</pre>
        </b-card>
      </b-form-group>

      <b-button type="submit" variant="primary">Buscar</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formRes: '',
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

        this.$http.get('http://sigoapp.southcentralus.azurecontainer.io:3000/sigo/consultassessor/contrato/' + this.form.id, {headers})
          .then(res => {
            this.formRes = res.data
            // alert('Norma cadastrada com sucesso')
          })
          .catch(res => {
            if (res.status === 404 || res.status === 401) {
              this.$root.$isValidToken = false
              console.log('token invalidado')
              alert('Sessão expirada, favor refazer o login')
              this.$router.push('/sigo/autenticacao')
            } else {
              alert('Contrato não encontrado')
            }
          })
      }
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.id = ''
      this.formRes = ''
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
