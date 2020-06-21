<template >
    <v-app class=" pa-auto"  style="background-color:#F5FAFF;">

            <v-container  class=" mt-10 mx-auto" style="background-color:#F5FAFF;">

                <v-card flat width="1300" class=" mx-auto mt-12" color="#F5FAFF">

                <v-card flat width="700" class=" mx-auto mt-12" color="#F5FAFF">
                
                <!-- loading -->
                <v-card width="300" 
                v-show="loading" 
                flat 
                color="transparent" 
                class="mb-3 mx-auto">
                <v-progress-circular
                active="true"
                indeterminate
                absolute
                :size="50"
                class="mt-12"
                color="#4169E1">
                </v-progress-circular>
                </v-card>
                
    <!-- profile alert -->
                <v-alert
                text
                outlined
                class=""
                :value="profile"
                color="green"
                type="error"
                row
                >
                <v-flex row>
                <v-flex row xms9 sm9 md9 lg9 class="pl-4">
                <!-- <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                <v-icon large color="orange" class="">notification_important</v-icon>    
                </v-flex> -->
                <v-flex xms11 sm11 md11 lg11 class="pl-3">
                <p class="text--text title mb-0">
                Welcome to ubalori.
                </p>
                <p class="text--text subtitle-1 mb-0">
                Please edit your profile to complete registration
                </p>
                </v-flex>
                </v-flex>
                <v-flex  xsm3 sm3 md3 lg3>
                <v-btn  
                width="200" 
                large="" 
                elevation="flat" 
                color="primary" 
                class="mx-5 mt-2"
                @click="editprofile()">
                edit profile
                </v-btn>
                </v-flex>
                </v-flex>
                </v-alert>

        <!-- account verification alert -->
                <v-alert
                text
                outlined
                class=""
                :value="verify"
                color="green"
                type="error"
                row
                clearable
                >
                <v-flex row>
                <!-- <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                <v-icon large color="orange" class="">notification_important</v-icon>    
                </v-flex> -->
                <v-flex xms11 sm11 md11 lg11 class="pl-3">
                <p class="text--text title mb-0">
               Your account has been registered, it will take few hours to be verified.
                </p>
                </v-flex>
                </v-flex>
                </v-alert>
                </v-card>
                </v-card>

<!-- dialogs --> 
                <v-dialog   background-color="primary" v-model="acceptDialog" max-width="500" >
                                    <v-card color="#2296f3">
                                        <v-card-title class="white--text">Are you sure you want to accept this tender?</v-card-title>
                                        <v-card-actions row>

                                             <v-spacer></v-spacer>
 
                                            <v-btn 
                                                color="error" 
                                                small 
                                                elevation="flat" 
                                                @click="acceptDialog = false" 
                                                class="mr-5 font-weight-bold" >
                                                NO
                                            </v-btn>                                          

                                            <v-btn 
                                                color="green"
                                                @click="acceptbid()" 
                                                class="white--text font-weight-bold mr-5"
                                                small 
                                                elevation="flat" 
                                             >
                                             YES
                                             </v-btn>
                                             
                                        </v-card-actions>
                                    </v-card>
                        </v-dialog>

                        <v-dialog   background-color="primary" v-model="rejectDialog" max-width="500" >
                                    <v-card color="error">
                                        <v-card-title class="white--text">Are you sure you want to Reject this tender?</v-card-title>
                                        <v-card-actions row>

                                             <v-spacer></v-spacer>
 
                                            <v-btn 
                                                color="white" 
                                                small 
                                                outlined
                                                elevation="" 
                                                @click="rejectDialog = false" 
                                                class="mr-5 font-weight-bold" >
                                                NO
                                            </v-btn>

                                            <v-btn 
                                                color="white"
                                                outlined
                                                @click="rejectbid()" 
                                                class="white--text font-weight-bold mr-5"
                                                small 
                                                elevation="" 
                                             >
                                             YES
                                             </v-btn>
                                             
                                        </v-card-actions>
                                    </v-card>
                        </v-dialog>    
                
            
            

<!-- ----------------------------------------------------------------------------------------------
     ---------------------------------------------------------------------------------------------- 
-->
    <v-card 
    flat 
    width="1300" 
    class=" mx-auto mt-12 mb-5" 
    color="#F5FAFF" 
    v-show="verification">

    <h3  class="title text--text px-2 ">Dashboard</h3>

    <v-tabs
      background-color="#F5FAFF"
      color="deep-purple accent-4"
      right
      :key="componemtkey"
    >
      <v-tab @contextmenu="load()" @click="get_dashboard(tab)"  class="">Biding</v-tab>
      <v-tab @click="get_onprogress()">On Progress</v-tab>
             

      <v-tab-item v-for="n in 3" :key="n"  style="background-color:#F5FAFF;">
          
      <v-divider class="mx-auto " ></v-divider>

      <v-card 
      width="300" 
      v-show="loadingbiding" 
      flat color="transparent" 
      class="mb-3 mx-auto">
                
                <v-progress-circular
                active="true"
                indeterminate
                absolute
                :size="50"
                class="mt-12"
                color="#4169E1">
                </v-progress-circular>
      </v-card>


<!-- ----------------- Biding card------------- -->

            <!-------- No new Bids ----------->
                <v-card 
                width="300" 
                flat 
                color="transparent" 
                class="mb-3">
                <v-container 
                    v-show="notender" 
                    row 
                    fluid 
                    class="pt-5" 
                    style="background-color:#F5FAFF;" >

                        <v-alert
                        :value="notender"
                        dense
                        outlined
                        prominent
                        type="info"
                        >
                            No Bids
                        </v-alert>
                        
                    </v-container>
                </v-card>

      <v-container 
      v-show="bidlist" 
      row 
      fluid 
      class="pt-5" 
      style="background-color:#F5FAFF;" >
            
             <v-flex xs12 sm6 md4 lg4 xl4 class="py-3 px-1 justify-center" 
                 v-for="(tender, i) in LOAD_DASHBOARDS.objects" :key="i"  >

                <v-hover 
                class=""
                v-show="accept">
                <template v-slot="{ hover }">
                <v-card 
                column 
                width="350" 
                class="pl-3 pr-2 pb-2 pt-1 mx-auto"
                :elevation="hover ? 15 : 3">
                   
                    <v-row  row class="pl-3 pt-3 mb-1 justify-space-between">
                        <v-flex class="mb-1" wrap xs7 sm8>
                        <h4  class="subtitle-1 font-weight-bold mb-0">{{tender.bid_id}}</h4>
                        </v-flex>
                        <v-flex xs5 sm4 class="pl-3">
                        <!-- <v-icon color="#E9E9F0" class="" @click="true">clear</v-icon> -->
                        <v-chip 
                        small
                        :color="tender.bid_status"
                        class="mainorange white--text px-2 font-weight-regular">
                        {{tender.bid_status}}
                        </v-chip>
                        </v-flex>
                    </v-row>
                    
                    <v-row class="pl-3">
                        <p xs12 sm7 md7 class=" body-2 grey--text mb-1">{{tender.bid_terms_and_conditions}}</p>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row class="px-3">
                        <p class="body-1  pt-2 mb-2">Time line</p>
                        
                         <!-- <v-icon small color="#4169E1" class="px-2 pb-2">
                        remove
                        </v-icon>  -->
                
                        <p  class="  pt-2 primary--text mx-3 mb-2">{{tender.bid_delivery_timeline}}</p>
                    </v-row>

                    <v-row row class="mb-1 "> 
                            <v-flex xsm12 sm12 md12 lg12 class="px-3 ">
                                <p  class=" title mb-0 ">{{(tender.bid_amount).toLocaleString('en')}} {{tender.currency}}</p>
                            </v-flex>
                    </v-row>

                    <v-row row class="mb-1 ">

                    <v-flex xsm12 sm12 md4 lg4 class="px-3 pt-2">
                        <!-- <p  class=" title mb-0 ">20000000 {{tender.currency}}</p> -->
                    </v-flex>

                    <v-flex row xsm12 sm12 md8 lg8 class="px-1 pt-1" >

                        <v-flex xsm4 sm4 md4 class="px-1 pb-1">
                            <center>
                            <v-btn v-if="showaccept == LOAD_DASHBOARDS.objects[i].bid_status" 
                            small 
                            elevation="flat" 
                            color="error"
                            class="white--text" 
                            @click.prevent="rejectbtn(tender.id)">
                            reject
                            </v-btn>
                            </center>
                        </v-flex>

                        <v-flex xsm4 sm4 md4 class="px-1 pb-1">
                            <center>
                            <v-btn v-if="showaccept == LOAD_DASHBOARDS.objects[i].bid_status" 
                            small 
                            elevation="flat" 
                            color="success"
                            class="white--text" 
                            @click.prevent="acceptbtn(tender.id)">
                            accept
                            </v-btn>
                            </center>
                        </v-flex>

                        <v-flex xsm4 sm4 md4 class="px-1">
                            <v-btn
                            :to="{name:'Taboutbid', params: {id:tender.id}}"
                            small 
                            elevation="flat" 
                            color="#4169E1" class="white--text" >
                            view bid
                            </v-btn>
                        </v-flex>

                    </v-flex>
                        
                    </v-row>
                    
                </v-card>
                </template>
                </v-hover>
            </v-flex>               
        </v-container>

<!-- ----------------- On progress cards------------- -->
            <v-card 
            width="300" 
            flat 
            color="transparent" 
            class="mb-3">
            <v-container 
                v-show="notenderonprogress" 
                row 
                fluid 
                class="pt-5" 
                style="background-color:#F5FAFF;" >

                        <v-alert
                        :value="notenderonprogress"
                        dense
                        outlined
                        prominent
                        type="info"
                        >
                        No Tender on progress
                    </v-alert>
                    
                </v-container>
            </v-card>

        <v-container 
        v-show="onprogressliast" 
        row fluid class="pt-5" 
        style="background-color:#F5FAFF;" >
            
             <v-flex xs12 sm6 md4 lg4 xl4 class="py-3 px-1 justify-center" 
             v-for="(tender, i) in LOAD_DASHBOARDS.objects" :key="i"  >

                <v-hover class="">
                <template v-slot="{ hover }">
                <v-card 
                column 
                width="360" 
                class="px-4 pb-3 pt-1 mx-auto"
                :to="{name:'Tenderprogress', params: {id:tender.id}}"
                :elevation="hover ? 15 : 3">
                   
                    <v-row  row class="pl-2 pt-2 justify-space-between mb-2 mt-1">
                        <v-flex wrap xs12 sm4 md4 lg4 >
                        <h4  class="body-1 font-weight-bold mb-0  ">{{tender.cargo_details}}</h4>
                        </v-flex>
                        
                        <v-flex row xs12 sm8 md8 lg8 class=" pr-4 mb-1" >
                            <v-spacer></v-spacer>
                                <v-chip 
                                v-if="tender.payment_status !== null && tender.payment_status !== '' "
                                small
                                color="green" 
                                class="mainorange white--text  font-weight-regular">
                                paid
                               </v-chip>

                               <v-chip 
                                v-else
                                small
                                color="orange" 
                                class="mainorange white--text  font-weight-regular ">
                                wait payment
                               </v-chip>
                            
                            
                                <v-chip 
                                small
                                :color="tender.tender_progress" 
                                class="white--text   font-weight-regular ml-2">
                                {{tender.tender_progress}}
                            </v-chip>

                           
                        <!-- <v-icon color="#E9E9F0" class="" @click="true">clear</v-icon> -->
                        
                        </v-flex>
                    </v-row>

                    <v-row class="pl-3 mt-2 mb-2">
                        <v-flex xs4 sm4 md4 lg4>
                        <p class=" body-2 mb-0">Description </p>
                        </v-flex>
                        <v-flex xs8 sm8 md8 lg8>
                        <p  class=" body-2 primary--text mb-0 mx-3">{{tender.description}}</p>
                        </v-flex>
                    </v-row>

                    <v-row class="pl-3 mt-1 mb-3">
                        <v-flex xs4 sm4 md4 lg4>
                        <p class=" body-2 mb-0">Time line </p>
                        </v-flex>
                        <v-flex xs8 sm8 md8 lg8>
                        <p  class=" body-2 primary--text mb-0 mx-3">{{tender.customer_delivery_timeline}}</p>
                        </v-flex>
                    </v-row>


                    <v-row row class="px-3 ">
                        <!-- <p  class=" title mb-0 ">{{Number(tender.customer_offer_amount).toLocaleString()}} {{tender.currency}}</p> -->
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" 
                        color="#4169E1" 
                        class="white--text" 
                        @click="getbiddetails(tender.bid_id)" 
                        :to="{name:'Tenderprogress', 
                        params: {id:tender.id}}" >
                        View Details
                        </v-btn>
                        
                    </v-row>
                    
                </v-card>
                </template>
                </v-hover>
            </v-flex>               
        </v-container>

      </v-tab-item>
    </v-tabs>
  </v-card>
<!-- ---------------------------------------------------------------------------- 
     -----------------------------------------------------------------------------
-->
        </v-container>
    </v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
        
  
  data () {
      return{
          showaccept:'awarded',
          accept: true,
          verify:false,
          profile:false,
          onprogressliast:false,
          bidlist:true,
          verification:false,
          loadingbiding:false,
          loading:false,
          tab: this.$route.params.id,
          componemtkey: 0,
          acceptDialog: false,
          rejectDialog: false,
          i:'',
         
         // no tender found
          notender:false,
          notenderonprogress:false
          
      }
  },

  created (tab){

                this.loading = true

                // eslint-disable-next-line no-console
                console.log('44444444');

             tab = localStorage.client
             
        this.T_GET_AGENT(tab).then(()=>{
            
            if (!this.LOAD_AGENT.objects.agent_id == '') {

                if (this.LOAD_AGENT.objects.is_verified == 0) {
                        
                        setTimeout(()=>{
                        this.loading = false
                        this.verify = true;
                        this.verification = false
                        },500)

                }else{

                     tab = this.tab

                    this.T_GET_DASHBOARD(tab).then(()=>{
                    // let status = this.$refs.accepted
                     
                         //document.getElementById()
                     // eslint-disable-next-line no-console
                     console.log(status);

                     if (this.LOAD_DASHBOARDS.objectsCount > 0) {

                         setTimeout(()=>{
                             this.loadingbiding = false
                             this.bidlist=true
                         },500)
                         
                     } else {

                         setTimeout(()=>{
                             this.loadingbiding = false
                             this.notender = true
                             this.notenderonprogress = false
                         },500)
                         
                     }

// Remove loadding ================================>>
                     setTimeout(()=>{
                         this.loading = false
                      this.verify = false;
                     this.verification = true
                     },500)
                     
                 })
                }

             }else{

                setTimeout(()=>{
                  this.loading = false
                  this.profile = true;
                  this.verification = false
                },500) 
             }
                   
        }).catch(error=>{

             // eslint-disable-next-line no-console
            console.log(error);
             // eslint-disable-next-line no-console
              console.log(this.LOAD_AGENT);   
        });

  },
  
  methods:{
      ...mapActions([
          'T_GET_DASHBOARD',
          'T_GET_DASHBOARDDETAILs', 
          'T_GET_AGENT',
          'T_GET_ONPROGRESS',
          'T_ACCEPT_BID',
          'T_REJECT_BID'
         
      ]),

      
    

      editprofile(){
          this.verify = false
          this.$router.push('/transporter/editprofile')
          this.$router.go('/transporter/editprofile')
      },

// get all dashboards (on bid tenders) ========================>>>>>>

     get_dashboard(tab){
         
         this.notender = false
         this.notenderonprogress = false

          this.onprogressliast = false
          this.bidlist = false
          this.loadingbiding = true


            // eslint-disable-next-line no-console
            console.log('44444444');
                     tab = this.tab

                 this.T_GET_DASHBOARD(tab).then(()=>{

                     // eslint-disable-next-line no-console
                     console.log('bidsss---');
                     // eslint-disable-next-line no-console
                     console.log(this.LOAD_DASHBOARDS);

                    if (this.LOAD_DASHBOARDS.objectsCount > 0) {

                         setTimeout(()=>{
                             this.loadingbiding = false
                             this.bidlist=true
                         },500)
                         
                    } else {

                         setTimeout(()=>{
                             this.loadingbiding = false
                             this.notender = true
                             this.notenderonprogress = false
                         },500)
                         
                    }
                     

                 }).catch(error=>{

                    // eslint-disable-next-line no-console
                    console.log(error);
                    // eslint-disable-next-line no-console
                    console.log(this.LOAD_AGENT);   

        });
      },



// get all awarded tenders     =============================>>>>
      get_onprogress(tab){

          this.notender = false
          this.notenderonprogress = false

          this.onprogressliast = false
          this.bidlist = false
          this.loadingbiding = true

           
                tab = this.tab

                 this.T_GET_ONPROGRESS(tab).then(()=>{

                     // eslint-disable-next-line no-console
                     console.log('bidsss---');

                     // eslint-disable-next-line no-console
                     console.log(this.LOAD_DASHBOARDS);
                     

                     if (this.LOAD_DASHBOARDS.objects.length > 0) {

                         setTimeout(()=>{
                             this.loadingbiding = false
                             this.onprogressliast=true
                         },500)
                         
                     } else {

                         setTimeout(()=>{
                             this.loadingbiding = false
                             this.notender = false
                             this.notenderonprogress = true
                         },500)
                         
                     }

                 }).catch(error=>{

                    // eslint-disable-next-line no-console
                    console.log(error);
                    // eslint-disable-next-line no-console
                    console.log(this.LOAD_AGENT);  

                 });
      },

// accept button from specific tender =============>>
      acceptbtn(tender_id){
          this.acceptDialog = true
          this.tender_id = tender_id
      },

// reject button from specific tender =============>>
      rejectbtn(tender_id){
          this.rejectDialog = true
          this.tender_id = tender_id
      },

// accept bid ============================>>>
    acceptbid(bid_id){ 

        this.acceptDialog = false;
        bid_id = this.tender_id
        console.log(bid_id);
        
        this.T_ACCEPT_BID(bid_id).then(()=>{

            console.log(this.LOAD_ACCEPT_BID)
            this.get_dashboard()
            
        })
    },

    rejectbid(bid_id){

          this.rejectDialog = false;
          bid_id = this.tender_id
        console.log(bid_id);

          this.T_REJECT_BID(bid_id).then(()=>{

              console.log(this.LOAD_REJECT_BID);
              this.get_dashboard()

          })
          

    },


// GEt bid detail ==============================>>>
      getbiddetails(tab){

          this.T_GET_DASHBOARDDETAILs(tab).then(()=>{

              // eslint-disable-next-line no-console
              console.log('the bid outpost');
              // eslint-disable-next-line no-console
              console.log(tab);
              // eslint-disable-next-line no-console
              console.log(this.LOAD_DASHBOARD)
                            
          })
      },
      
  },
  computed: {
      ...mapGetters([
          'LOAD_DASHBOARDS', 'LOAD_AGENT', 'LOAD_DASHBOARD'
          //'LOAD_DIBTENDERS'
      ])
  }

    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>