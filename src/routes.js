import Inicial from './view/Inicial.vue'
import Formulario from './view/Formulario.vue'
import Relatorio from './view/Relatorio.vue'

export const routes = [
{path: '',component: Inicial},
{path: '/formulario', component: Formulario},
{path:'/relatorio', component: Relatorio}

];