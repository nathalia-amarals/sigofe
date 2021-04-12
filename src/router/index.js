import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import CadastraNorma from '@/components/genormas/CadastraNorma'
import AtualizaNorma from '@/components/genormas/AtualizaNorma'
import DeletaNorma from '@/components/genormas/DeletaNorma'
import CadastraEmpresa from '@/components/conasse/CadastraEmpresa'
import CadastraContrato from '@/components/conasse/CadastraContrato'
import CarregaContrato from '@/components/conasse/CarregaContrato'
import AtualizaEmpresa from '@/components/conasse/AtualizaEmpresa'
import AtualizaContrato from '@/components/conasse/AtualizaContrato'
import DeletaEmpresa from '@/components/conasse/DeletaEmpresa'
import DeletaContrato from '@/components/conasse/DeletaContrato'
import CadastraProduto from '@/components/gesprocind/CadastraProduto'
import AtualizaProduto from '@/components/gesprocind/AtualizaProduto'
import DeletaProduto from '@/components/gesprocind/DeletaProduto'
import LoginForm from '@/components/autenticacao/LoginForm'
import CadastraPlanejamento from '@/components/genormas/CadastraPlanejamento'
import AtualizaPlanejamento from '@/components/genormas/AtualizaPlanejamento'
import DeletaPlanejamento from '@/components/genormas/DeletaPlanejamento'
import CarregaPlanejamento from '@/components/genormas/CarregaPlanejamento'
import CarregaNorma from '@/components/genormas/CarregaNorma'
// import HelloWorld from '@/components/HelloWorld'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './custom.scss'
// import Navbar from '@/components/navbar/Navbar'

Vue.use(Router)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sistema de Integração de Gestão Industrial',
      component: Home
    },
    {
      path: '/sigo/cadastranorma',
      name: 'Gestão de Normas - Cadastra Norma',
      component: CadastraNorma
    },
    {
      path: '/sigo/atualizanorma',
      name: 'Gestão de Normas - Atualiza Norma',
      component: AtualizaNorma
    },
    {
      path: '/sigo/deletanorma',
      name: 'Gestão de Normas - Deleta Norma',
      component: DeletaNorma
    },
    {
      path: '/sigo/carreganorma',
      name: 'Gestão de Normas - Carrega Norma',
      component: CarregaNorma
    },
    {
      path: '/sigo/cadastraplaneja',
      name: 'Gestão de Normas - Cadastra Planejamento',
      component: CadastraPlanejamento
    },
    {
      path: '/sigo/atualizaplaneja',
      name: 'Gestão de Normas - Atualiza Planejamento',
      component: AtualizaPlanejamento
    },
    {
      path: '/sigo/deletaplaneja',
      name: 'Gestão de Normas - Deleta Planejamento',
      component: DeletaPlanejamento
    },
    {
      path: '/sigo/carregaplanejamento',
      name: 'Gestão de Normas - Carrega Planejamento',
      component: CarregaPlanejamento
    },
    {
      path: '/sigo/conasse/cadcontrato',
      name: 'Consultorias e Assessorias - Cadastra Contrato',
      component: CadastraContrato
    },
    {
      path: '/sigo/conasse/carregacontrato',
      name: 'Consultorias e Assessorias - Carrega Contrato',
      component: CarregaContrato
    },
    {
      path: '/sigo/conasse/cadempresa',
      name: 'Consultorias e Assessorias - Cadastra Empresa',
      component: CadastraEmpresa
      // beforeEnter: (to, from, next) => {
      //   alert(this.$root.$isValidToken)
      //   if (!this.$root.$isValidToken) {
      //     next(false)
      //   }
      // }
    },
    {
      path: '/sigo/conasse/atucontrato',
      name: 'Consultorias e Assessorias - Atualiza Contrato',
      component: AtualizaContrato
    },
    {
      path: '/sigo/conasse/atuempresa',
      name: 'Consultorias e Assessorias - Atualiza Empresa',
      component: AtualizaEmpresa
    },
    {
      path: '/sigo/conasse/delcontrato',
      name: 'Consultorias e Assessorias - Deleta Contrato',
      component: DeletaContrato
    },
    {
      path: '/sigo/conasse/delempresa',
      name: 'Consultorias e Assessorias - Delete Empresa',
      component: DeletaEmpresa
    },
    {
      path: '/sigo/gesprocind/cadprod',
      name: 'Gestão de Processo Industrial - Cadastra Produto',
      component: CadastraProduto
    },
    {
      path: '/sigo/gesprocind/atuprod',
      name: 'Gestão de Processo Industrial - Atualiza Produto',
      component: AtualizaProduto
    },
    {
      path: '/sigo/gesprocind/delprod',
      name: 'Gestão de Processo Industrial - Deleta Produto',
      component: DeletaProduto
    },
    {
      path: '/sigo/autenticacao',
      name: 'Login',
      component: LoginForm
    }
  ],
  mode: 'history'
})
