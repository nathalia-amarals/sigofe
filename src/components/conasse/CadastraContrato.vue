<template>
    <div class='formca'>
    <h1> Cadastro de Contrato </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Identificador Contrato:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          required
          placeholder="Insira o identificador do contrato"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Identificador Empresa:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.idEmpresa"
          required
          placeholder="Insira o identificador da Empresa"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Valor:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.valor"
          required
          placeholder="Insira o valor do contrato"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Descrição:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.descricao"
          required
          placeholder="Insira a descrição"
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
        idEmpresa: '',
        valor: '',
        descricao: ''
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

        this.$http.post('http://localhost:3000/consultassessor/contrato', JSON.stringify(this.form), {headers})
          .then(res => {
            alert('Contrato cadastrado com sucesso')
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
.formca{
    width: 50%;
    margin: auto;
}
</style>
