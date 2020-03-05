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
import paymenthistory from '../components/Paymenthistory.vue';

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
    path:'/',
    name:'signin',
    component: Signin
  },
  {
    path:'/signup',
    name:'signup',
    component: Signup
  },
  {
    path: '/paymenthistory',
    name: 'paymenthistory',
    component:paymenthistory,
  },
  
  //---------------------------client
  {
    path:'/client',
    name:'client',
    components: {Client}
  },
  {
    path:'/Client/editprofile',
    name:'Clienteditprofile',
    components:{Clienteditprofile}
  },
  {
    path:'/client/Createtender',
    name:'Createtender',
    components:{Createtender}
  },
  {
    path:'/client/tenderprogress',
    name:'Tenderprogressclient',
    components:{Tenderprogressclient}
  },
  {
    path:'/client/payment',
    name:'Payment',
    components:{Payment}
  },
  {
    path:'/client/Aboutbid',
    name:'Aboutbid',
    component:Aboutbid
  },

  //-------------------- Agent routes
  {
    path:'/agents/:id',
    name:'Agent',
    components:{Agent}
  },
  {
    path:'/agent/editprofile',
    name:'AgentProfile',
    component: Agenteditprofile
  },
  {
    path:'/agent/tenders/:id',
    name:'AgentTenders',
    components: {Tenders}
  },
  {
    path:'/agent/biding/:id',
    name:'AgentBiding',
    components: {Biding}
  },
  {
    path:'/agent/Abouttender/:id',
    name:'AgentAbouttender',
    components:{Abouttender}
  },
  {
    path:'/agent/tenderprogress',
    name:'AgentTenderprogress',
    component:Tenderprogressagent
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
