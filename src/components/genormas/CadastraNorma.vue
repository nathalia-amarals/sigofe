<template>
    <div class='formgn'>
    <h1> Cadastro de Normas </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Insira nome"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Observação:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.obs"
          required
          placeholder="Insira observação"
        ></b-form-input>
      </b-form-group>

      <b-form-file
         v-model="form.file"
        :state="Boolean(form.file)"
        placeholder="Escolha um arquivo ou solte ele aqui..."
        drop-placeholder="Solte o arquivo aqui..."
      ></b-form-file>
      <div class="mt-3">Arquivo selecionado: {{ form.file ? form.file.name : '' }}</div>

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
        name: '',
        obs: '',
        file: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      if (this.$root.$token !== '' && this.$root.$isValidToken) {
        let formData = this.gatherFormData()

        let headers = {
          'Content-Type': 'multipart/form-data; boundary=' + formData._boundary,
          'Authorization': 'Bearer ' + this.$root.$token
        }

        // for (var value of formData.entries()) {
        // console.log(value)
        // }

        this.$http.post('http://sigoapp.southcentralus.azurecontainer.io:3000/sigo/gestaonormas/norma', formData, {headers})
          .then(res => {
            alert('Norma cadastrada com sucesso')
          })
          .catch(res => {
            if (res.status === 404 || res.status === 401) {
              this.$root.$isValidToken = false
              console.log('token invalidado')
              alert('Sessão expirada, favor refazer o login')
              this.$router.push('/sigo/autenticacao')
            } else {
              alert('Norma não cadastrada, verifique os dados')
            }
          })
      }
    },
    gatherFormData () {
      const data = new FormData()
      data.append('file', this.form.file)
      data.append('name', this.form.name)
      data.append('obs', this.form.obs)
      return data
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.id = ''
      this.form.name = ''
      this.form.obs = ''
      this.form.normafile = ''
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
