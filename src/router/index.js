import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
import login from '../views/Login.vue';

//agent routes
import Agent  from '../components/agents/Agent.vue';
import Biding from '../components/agents/Biding.vue';
import Abouttender from '../components/agents/Abouttender';
import Tenderprogressagent from '../components/agents/Tenderprogressagent.vue';
import Tenders from '../components/agents/Tenders.vue';
import Agenteditprofile from '../components/agents/Agenteditprofile.vue';

//client routs
import Client from '../components/client/Client.vue';
import Createtender from '../components/client/Createtender.vue';
import Clienteditprofile from '../components/client/Clienteditprofile.vue';
import Tenderprogressclient from '../components/client/Tenderprogressclient.vue'
import Payment from '../components/client/Payment.vue';
import Aboutbid from '../components/client/Aboutbid.vue'

Vue.use(VueRouter)

const routes = [

  // general routes
  {
    path: '/login',
    name: 'login',
    component:login,
    children:[
      
    ]
  },
  {
    path:'/signin',
    name:'signin',
    component: Signin
  },
  {
    path:'/signup',
    name:'signup',
    component: Signup
  },
  
  //---------------------------client
  {
    path:'/client',
    name:'client',
    component: Client
  },
  {
    path:'/Client/editprofile',
    name:'Clienteditprofile',
    component:Clienteditprofile
  },
  {
    path:'/client/Createtender',
    name:'Createtender',
    component:Createtender
  },
  {
    path:'/client/tenderprogress',
    name:'Tenderprogressclient',
    component:Tenderprogressclient
  },
  {
    path:'/client/payment',
    name:'Payment',
    component:Payment
  },
  {
    path:'/client/Aboutbid',
    name:'Aboutbid',
    component:Aboutbid
  },

  //-------------------- Agent routes
  {
    path:'/agents',
    name:'agent',
    component: Agent
  },
  {
    path:'/agent/editprofile',
    name:'Agentprofile',
    component: Agenteditprofile
  },
  {
    path:'/agent/tenders',
    name:'tenders',
    component: Tenders
  },
  {
    path:'/agent/biding',
    name:'biding',
    component: Biding
  },
  {
    path:'/agent/Abouttender',
    name:'Abouttender',
    component:Abouttender
  },
  {
    path:'/agent/tenderprogress',
    name:'Tenderprogressagent',
    component:Tenderprogressagent
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
