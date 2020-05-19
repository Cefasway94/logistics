import Vue from 'vue'
import VueRouter from 'vue-router'

import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
import login from '../views/Login.vue';

//agent routes
import Agenteditprofile from '../components/agents/Agenteditprofile.vue';
import Tenders from '../components/agents/Tenders.vue';
import Abouttender from '../components/agents/Abouttender';
import ABiding from '../components/agents/Biding.vue';
import Agent  from '../components/agents/Agent.vue';
import AgentAboutbid from '../components/agents/Aboutbid.vue';
import AgentTenderprogress from '../components/agents/Tenderprogressagent.vue';

//transporter routes
import Teditprofile from '../components/atransporter/Teditprofile.vue';
import Ttenders from '../components/atransporter/Ttenders.vue'
import Tabouttender from '../components/atransporter/Tabouttender.vue'
import Tbiding from '../components/atransporter/Tbiding.vue'
import Transporter from '../components/atransporter/Transporter.vue'
import Taboutbid from '../components/atransporter/Taboutbid.vue'
import Tenderprogress from '../components/atransporter/Tenderprogress.vue'

//transpoter routes
// import Transpoter  from '../components/transporters/Transporter.vue';
// import Transpoterbiding from '../components/transporters/Transporterbiding.vue';
// import Abouttransportertender from '../components/transporters/Abouttransportertender.vue';
// import Tenderprogresstransporter from '../components/transporters/Tenderprogresstransporter.vue';
// import Transportertenders from '../components/transporters/Transportertenders.vue';
// import Transportereditprofile from '../components/transporters/Transportereditprofile.vue';

//client routs
import Client from '../components/client/Client.vue';
import Createtender from '../components/client/Createtender.vue';
import Clientupdateprofile from '../components/client/Clientupdateprofile.vue';
import Tenderprogressclient from '../components/client/Tenderprogressclient.vue'
import Tender from '../components/client/Tender.vue'
import editTender from '../components/client/editTender.vue'
import Payment from '../components/client/Payment.vue'
import Aboutbid from '../components/client/Aboutbid.vue'
import Profile from '../components/client/Profile.vue'
import Paymenthistory from '../components/Paymenthistory.vue';
import AboutTenderBids from '../components/client/AboutTenderBids.vue'
import Clientpaymenthistory from '../components/Clientpaymenthistory.vue'

import ClientEditProfile from '../components/client/ClientEditProfile.vue'
//admin routes
import AdminHome from '../components/admin/AdminHome.vue'
import CustomerVerifying from '../components/admin/CustomerVerifying'
import AgentVerifying from '../components/admin/AgentVerifying'
import PaymentVerifying from '../components/admin/PaymentVerifying'


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
    name: 'Paymenthistory',
    components:{Paymenthistory}
  },
  
  //---------------------------client
  {
    path:'/client',
    name:'Client',
    components: {Client}
  },
  {
    path:'/client/AboutTenderBids/:id/:tender_type',
    name:'AboutTenderBids',
    components: {AboutTenderBids}
  },
  {
    path:'/client/profile',
    name:'Profile',
    components: {Profile}
  },
  {
    path:'/client/updateprofile/:type',
    name:'ClientEditProfile',
    components: {ClientEditProfile}
  },
  {
    path:'/Client/editprofile/:id',
    name:'Clientupdateprofile',
    components:{Clientupdateprofile}
  },
  {
    path:'/client/Createtender',
    name:'Createtender',
    components:{Createtender}
  },
  {
    path:'/client/tenderprogress/:id/:tender_type',
    name:'Tenderprogressclient',
    components:{Tenderprogressclient}
  },
  {
    path:'/client/payment/:id/:tender_type',
    name:'Payment',
    components:{Payment}
  },
  {
    path:'/client/Aboutbid/:id/:tender_type',
    name:'Aboutbid',
    components:{Aboutbid}
  },
  {
    path:'/client/tender/:id/:tender_type',
    name:'Tender',
    components:{Tender}
  },
  {
    path:'/client/edittender/:id/:tender_type',
    name:'editTender',
    components:{editTender}
  },
  {
    path:'/client/payments/history',
    name:'Clientpaymenthistory',
    components:{Clientpaymenthistory}
  },
  

//----------------------------------------- Agent routes  
  { // Agent editing profile
    path:'/agent/editprofile',
    name:'AgentProfile',
    components: {Agenteditprofile}
  },
  { // Agent list of open tenders
    path:'/agent/tenders/:id',
    name:'AgentTenders',
    components: {Tenders}
  },
  { // Agent About open tender
    path:'/agent/Abouttender/:id',
    name:'AgentAbouttender',
    components:{Abouttender}
  },
  { // Agent Biding
    path:'/agent/biding/:id',
    name:'AgentBiding',
    components: {ABiding}
  },
  { // Agent list of active tenders
    path:'/agent/active/:id',
    name:'Agent',
    components:{Agent}
  },
  { // Agent Aboutbid
    path:'/agent/AgentAboutbid/:id',
    name:'AgentAboutbid',
    components:{AgentAboutbid}
  },
  { // Agent Tender progress
    path:'/agent/tenderprogress/:id',
    name:'AgentTenderprogress',
    components:{AgentTenderprogress}
  },
  //-------------------- Transporter routes not active
  // {
  //   path:'/transpoters/:id',
  //   name:'Transpoter',
  //   components:{Transpoter}
  // },
  // {
  //   path:'/transpoter/editprofile',
  //   name:'Transporterprofile',
  //   component: Transportereditprofile
  // },
  // {
  //   path:'/transpoter/tenders/:id',
  //   name:'Transportertenders',
  //   components: {Transportertenders}
  // },
  // {
  //   path:'/transpoter/biding/:id',
  //   name:'Transporterbiding',
  //   components: {Transpoterbiding}
  // },
  // {
  //   path:'/transpoter/Abouttender/:id',
  //   name:'Abouttransportertender',
  //   components:{Abouttransportertender}
  // },
  // {
  //   path:'/transpoter/tenderprogress',
  //   name:'Tenderprogresstransporter',
  //   component:Tenderprogresstransporter
  // },

//---------------------------------------- Transporter routes
  { // Transporter editing profile
    path:'/transporter/editprofile',
    name:'Teditprofile',
    components: {Teditprofile}
  },
  { // Agent list of open tenders
    path:'/transporter/tenders/:id',
    name:'Ttenders',
    components: {Ttenders}
  },
  { // Agent About open tender
    path:'/transporter/Abouttender/:id',
    name:'Tabouttender',
    components:{Tabouttender}
  },
  { // Agent Biding
    path:'/transporter/biding/:id',
    name:'Tbiding',
    components: {Tbiding}
  },
  { // Transporter list of open tenders
    path:'/transporter/active/:id',
    name:'Transporter',
    components:{Transporter}
  },
  { // Agent Aboutbid
    path:'/transporter/aboutbid/:id',
    name:'Taboutbid',
    components:{Taboutbid}
  },
  { // Agent Tender progress
    path:'/transporter/tenderprogress/:id',
    name:'Tenderprogress',
    components:{Tenderprogress}
  },

  //---------------------------------------- Admin routes
  { 
    path:'/admin',
    name:'AdminHome',
    components:{AdminHome}
  },
  { 
    path:'/admin/verify/:id',
    name:'CustomerVerifying',
    components:{CustomerVerifying}
  },
  { 
    path:'/admin/verify/:type/:id',
    name:'AgentVerifying',
    components:{AgentVerifying}
  },
  { 
    path:'/admin/verify-payment',
    name:'PaymentVerifying',
    components:{PaymentVerifying}
  },


]

const router = new VueRouter({
  
  base:process.env.BASE_UR,
  routes
})

export default router
