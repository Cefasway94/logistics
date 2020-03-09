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

//transpoter routes
import Transpoter  from '../components/transporters/Transporter.vue';
import Transpoterbiding from '../components/transporters/Transporterbiding.vue';
import Abouttransportertender from '../components/transporters/Abouttransportertender.vue';
import Tenderprogresstransporter from '../components/transporters/Tenderprogresstransporter.vue';
import Transportertenders from '../components/transporters/Transportertenders.vue';
import Transportereditprofile from '../components/transporters/Transportereditprofile.vue';

//client routs
import Client from '../components/client/Client.vue';
import Createtender from '../components/client/Createtender.vue';
import Clienteditprofile from '../components/client/Clienteditprofile.vue';
import Tenderprogressclient from '../components/client/Tenderprogressclient.vue'
import Tender from '../components/client/Tender.vue'
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
    path:'/signin',
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
    name:'Client',
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
    component:Payment
  },
  {
    path:'/client/Aboutbid',
    name:'Aboutbid',
    component:Aboutbid
  },
  {
    path:'/client/tender/:id',
    name:'Tender',
    props:true,
    components:{Tender}
  },

  //-------------------- Agent routes
  {
    path:'/agents/:id',
    name:'agent',
    components:{Agent}
  },
  {
    path:'/agent/editprofile',
    name:'Agentprofile',
    component: Agenteditprofile
  },
  {
    path:'/agent/tenders/:id',
    name:'tenders',
    components: {Tenders}
  },
  {
    path:'/agent/biding/:id',
    name:'Biding',
    components: {Biding}
  },
  {
    path:'/agent/Abouttender/:id',
    name:'Abouttender',
    components:{Abouttender}
  },
  {
    path:'/agent/tenderprogress',
    name:'Tenderprogressagent',
    component:Tenderprogressagent
  },
  //-------------------- Transporter routes
  {
    path:'/transpoters/:id',
    name:'Transpoter',
    components:{Transpoter}
  },
  {
    path:'/transpoter/editprofile',
    name:'Transporterprofile',
    component: Transportereditprofile
  },
  {
    path:'/transpoter/tenders/:id',
    name:'Transportertenders',
    components: {Transportertenders}
  },
  {
    path:'/transpoter/biding/:id',
    name:'Transporterbiding',
    components: {Transpoterbiding}
  },
  {
    path:'/transpoter/Abouttender/:id',
    name:'Abouttransportertender',
    components:{Abouttransportertender}
  },
  {
    path:'/transpoter/tenderprogress',
    name:'Tenderprogresstransporter',
    component:Tenderprogresstransporter
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
