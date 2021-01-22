<template>
    <div class='formca'>
    <h1> Atualização de Empresa </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Identificador Empresa:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          required
          placeholder="Insira a razão social da empresa"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Razão Social Empresa:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.razaoSocial"
          placeholder="Insira a razão social da empresa"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="CNPJ:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.cnpj"
          placeholder="Insira o CNPJ da empresa"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Área de Atuação:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.areaDeAtuacao"
          placeholder="Insira a Área de Atuação da empresa"
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
        id: '',
        razaoSocial: '',
        cnpj: '',
        areaDeAtuacao: ''
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

        this.$http.put('http://localhost:3000/consultassessor/empresa', JSON.stringify(this.form), {headers})
          .then(res => {
            alert('Empresa atualizada com sucesso')
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
      this.form.razaoSocial = ''
      this.form.cnpj = ''
      this.form.areaDeAtuacao = ''
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
