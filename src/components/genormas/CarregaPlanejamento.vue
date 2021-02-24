<template>
    <div class='formgn'>
    <h1> Cadastro de Normas </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Id:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          required
          placeholder="Insira id"
        ></b-form-input>

        <b-card class="mt-3" header="Form Data Result">
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
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$root.$token
        }

        // for (var value of formData.entries()) {
        // console.log(value)
        // }

        this.$http.get('http://localhost:3000/gestaonormas/planeja/' + this.form.id, {headers})
          .then(res => {
            this.formRes = res.data
            alert('Planejamento cadastrado com sucesso')
          })
          .catch(function () {
            this.$root.$isValidToken = false
            console.log('token invalidado')
            alert('Sessão expirada, favor refazer o login')
            this.$router.push('/autenticacao')
          })
      }
    },
    // gatherFormData () {
    //   const data = new FormData()
    //   data.append('id', this.form.id)
    //   data.append('nomeDoPlan', this.form.nomeDoPlan)
    //   data.append('planoDeAcao', this.form.planoDeAcao)
    //   const etapa = new FormData()
    //   etapa.append(this.form.acao1, this.form.data1)
    //   etapa.append(this.form.acao2, this.form.data2)
    //   etapa.append(this.form.acao3, this.form.data3)
    //   data.append('etapaData', etapa)
    //   return data
    // },
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
