<template>
    <div class='formgn'>
    <h1> Carrega Norma </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Id:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          required
          placeholder="Insira id"
        ></b-form-input>
        <b-card class="mt-3" header="Norma">
        <pre class="m-0">{{ formRes }}</pre>
        </b-card>
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

      if (this.$root.$token !== '' && this.$root.$isValidToken) {
        // let formData = this.gatherFormData()

        let headers = {
          'Authorization': 'Bearer ' + this.$root.$token
        }

        // for (var value of formData.entries()) {
        // console.log(value)
        // }

        this.$http.get('http://sigoapp.southcentralus.azurecontainer.io:3000/sigo/gestaonormas/norma/' + this.form.id, {headers})
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
              alert('Norma não encontrada')
            }
          })
      }
    },
    // gatherFormData () {
    //   const data = new FormData()
    //   data.append('file', this.form.file)
    //   data.append('name', this.form.name)
    //   data.append('obs', this.form.obs)
    //   return data
    // },
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
.formgn{
    width: 50%;
    margin: auto;
}

.mt-3{
    margin:50px 50px;
}
</style>
