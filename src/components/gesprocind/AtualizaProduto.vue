<template>
    <div class='formgpi'>
    <h1> Atualização de Produto </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-8" label="Identificador Produto:" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="form.id"
          required
          placeholder="Insira o id do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Nome Produto:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.nome"
          placeholder="Insira o nome do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Referência Produto:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.referencia"
          placeholder="Insira a referência do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Altura do Produto:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.altura"
          placeholder="Insira a altura do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Largura do Produto:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.largura"
          placeholder="Insira a largura do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Composição do Produto:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.composicao"
          placeholder="Insira a composição do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Cor:" label-for="input-6">
        <b-form-select
          id="input-6"
          v-model="form.cor"
          :options="cor"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-7" label="Estado:" label-for="input-7">
        <b-form-select
          id="input-7"
          v-model="form.estado"
          :options="estado"
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        id: '',
        nome: '',
        referencia: '',
        altura: '',
        largura: '',
        composicao: '',
        cor: null,
        estado: ''
      },
      cor: [{ text: 'Selecione uma', value: null }, 'Branco', 'Azul', 'Vermelho', 'Amarelo', 'Verde', 'Preto'],
      estado: [{ text: 'Selecione um', value: null }, 'Processamento', 'Teagem', 'Tingimento', 'Lavagem', 'Passar', 'Dobra'],
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

        this.$http.put('http://localhost:3000/gestaoprocind', JSON.stringify(this.form), {headers})
          .then(res => {
            alert('Produto Atualizado Com Sucesso')
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
      this.form.nome = ''
      this.form.referencia = ''
      this.form.altura = ''
      this.form.largura = ''
      this.form.composicao = ''
      this.form.cor = null
      this.form.estado = ''
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
