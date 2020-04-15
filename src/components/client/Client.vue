<template >
    <div class=" pa-auto" >

           
            <v-container  class=" mt-12 mx-auto">

                 <Alert v-if="alert" v-bind:message="alert"/>

                <v-card flat width="1300" class=" mx-auto mb-5" color="#F5FAFF">
                    <v-flex row class="mt-5">
                        <h3 style="color:#394361;" class="title mt-10 px-2">Dashboard</h3>
                        <v-spacer></v-spacer>
                        <v-btn class="primary mt-5" router to="/client/createtender">Add New</v-btn>
                    </v-flex>
                    
                </v-card>
          
                <v-card flat width="1300" class=" mx-auto mb-5" color="#F5FAFF">
                    <v-tabs
                        right
                        background-color="transparent"
                        color="#394361"
                        class="mt-5"
                        v-model="tab"
                    >

                        <v-tab v-for="tab in tabs" :key="tab.title" @change="fetch(tab.title)">
                            {{ tab.title}}
                        </v-tab>

                    </v-tabs> 

                    <v-tabs-items v-model="tab">
                        <v-tab-item
                            v-for="tab in tabs"
                            :key="tab.title"
                        >
                            
                            <v-divider class="mx-auto " ></v-divider>

                            <v-container fluid class="" style="background-color:#F5FAFF;"> 

                                <v-row fluid>

                                    <template v-if='tab.title === "All"'>


                                    <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2" v-for="tender in AllClearingTenders" :key="tender.tender_id">
                                        <v-card column width="350"  elevation="3" class="px-4 py-3">
                                            <v-row  row class="px-3 pt-1">
                                                <h4  class="">{{ tender.cargo_details}}</h4>
                                                <v-chip 
                                                    small class="light-green white--text caption font-weight-bold mx-3" >
                                                    {{ tender.tender_status}}
                                                </v-chip>
                                                <v-spacer></v-spacer>
                                            </v-row>
                   
                                            <p class=" body-2 grey--text">{{ tender.description}}</p>
                    
                                            <v-row class="px-3" v-show="tender.tender_type == 2">
                                                <p class="body-2  pt-1 ">{{  tender.origin }}</p>
                        
                                                <v-icon small color="#4169E1" class="px-2 pb-3">
                                                    arrow_forward
                                                </v-icon>
                                                <p  class="body-2  pt-1 ">{{ tender.destination }}</p>
                                            </v-row>

                                            <v-row row class="px-3">
                                                <h4  class=" title ">{{ tender.currency}} {{ tender.customer_offer_amount}} </h4>
                                                    <v-spacer></v-spacer>
                                                    <!--<v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tender/'+tender.id">View Details</v-btn>-->
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tender/' + tender.id+'/'+tender.tender_type">View Details</v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-flex> 

                                    <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2" v-for="tender in AllTransportingTenders" :key="tender.tender_id">
                                        <v-card column width="350"  elevation="3" class="px-4 py-3">
                                            <v-row  row class="px-3 pt-1">
                                                <h4  class="">{{ tender.cargo_details}}</h4>
                                                <v-chip 
                                                    small class="light-green white--text caption font-weight-bold mx-3" >
                                                    {{ tender.tender_status}}
                                                </v-chip>
                                                <v-spacer></v-spacer>
                                            </v-row>
                   
                                            <p class=" body-2 grey--text">{{ tender.description}}</p>
                    
                                            <v-row class="px-3" v-show="tender.tender_type == 2">
                                                <p class="body-2  pt-1 ">{{  tender.origin }}</p>
                        
                                                <v-icon small color="#4169E1" class="px-2 pb-3">
                                                    arrow_forward
                                                </v-icon>
                                                <p  class="body-2  pt-1 ">{{ tender.destination }}</p>
                                            </v-row>

                                            <v-row row class="px-3">
                                                <h4  class=" title ">{{ tender.currency}} {{ tender.customer_offer_amount}} </h4>
                                                    <v-spacer></v-spacer>
                                                    <!--<v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tender/'+tender.id">View Details</v-btn>-->
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tender/' + tender.id+'/'+tender.tender_type">View Details</v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-flex>  

                                    </template>

                                     <template v-if='tab.title === "Biding"'>

                                    <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2" v-for="tender in ClearingBidedTenders" :key="tender.tender_id">
                                        <v-card column width="350"  elevation="3" class="px-4 py-3">
                                            <v-row  row class="px-3 pt-1">
                                                <h4  class="">{{ tender.cargo_details}}</h4>
                                                <v-chip 
                                                    small class="orange white--text caption font-weight-bold mx-3" >
                                                    {{ tender.bids_count }} bids
                                                </v-chip>
                                                <v-spacer></v-spacer>

                                                <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                                            </v-row>

                                            <v-row class="px-3 mt-4">

                                                <p class="body-2  pt-1 ">status: </p>

                                                 <v-chip 
                                                    small class="green white--text caption font-weight-bold mx-3" >
                                                    {{ tender.tender_status}}
                                                </v-chip>
                                            </v-row>
                   
                                            <p class=" body-2 grey--text">{{ tender.description}}</p>
                    
                                            <v-row class="px-3">
                                                <p class="body-2  pt-1 ">{{ tender.origin }}</p>
                        
                                                <v-icon small color="#4169E1" class="px-2 pb-3">
                                                    arrow_forward
                                                </v-icon>
                                                <p  class="body-2  pt-1 ">{{ tender.destination }}</p>
                                            </v-row>

                                            <v-row row class="px-3">
                                                <h4  class=" title ">{{ tender.currency}} {{ tender.customer_offer_amount}} </h4>
                                                    <v-spacer></v-spacer>
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text"  @click="set(tender)" :to="'/client/AboutTenderBids/'+ tender.id+'/'+tender.tender_type">View Details</v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-flex>  

                                    <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2" v-for="tender in TransportingBidedTenders" :key="tender.tender_id">
                                        <v-card column width="350"  elevation="3" class="px-4 py-3">
                                            <v-row  row class="px-3 pt-1">
                                                <h4  class="">{{ tender.cargo_details}}</h4>
                                                <v-chip 
                                                    small class="orange white--text caption font-weight-bold mx-3" >
                                                    {{ tender.bids_count }} bids
                                                </v-chip>
                                                <v-spacer></v-spacer>

                                                <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                                            </v-row>

                                            <v-row class="px-3 mt-4">

                                                <p class="body-2  pt-1 ">status: </p>

                                                 <v-chip 
                                                    small class="green white--text caption font-weight-bold mx-3" >
                                                    {{ tender.tender_status}}
                                                </v-chip>
                                            </v-row>
                   
                                            <p class=" body-2 grey--text">{{ tender.description}}</p>
                    
                                            <v-row class="px-3">
                                                <p class="body-2  pt-1 ">{{ tender.origin }}</p>
                        
                                                <v-icon small color="#4169E1" class="px-2 pb-3">
                                                    arrow_forward
                                                </v-icon>
                                                <p  class="body-2  pt-1 ">{{ tender.destination }}</p>
                                            </v-row>

                                            <v-row row class="px-3">
                                                <h4  class=" title ">{{ tender.currency}} {{ tender.customer_offer_amount}} </h4>
                                                    <v-spacer></v-spacer>
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text"  @click="set(tender)" :to="'/client/AboutTenderBids/'+ tender.id+'/'+tender.tender_type">View Details</v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-flex>

                                    </template>

                                     <template v-if='tab.title === "Progress"'>

                                    <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2" v-for="tender in ClearingTendersOnProgress" :key="tender.tender_id">
                                        <v-card column width="350"  elevation="3" class="px-4 py-3">
                                            <v-row  row class="px-3 pt-1">
                                                <h4  class="">{{ tender.cargo_details}}</h4>
                                                <v-chip 
                                                    small class="light-green white--text caption font-weight-light mx-3" >
                                                    {{ tender.tender_progress}}
                                                </v-chip>
                                                <v-spacer></v-spacer>

                                                <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                                            </v-row>
                   
                                            <p class=" body-2 grey--text">{{ tender.description}}</p>

                                           
                                            <v-row class="px-3">
                                                <p class="body-2  pt-1 ">{{ tender.origin }}</p>
                        
                                                <v-icon small color="#4169E1" class="px-2 pb-3">
                                                    arrow_forward
                                                </v-icon>
                                                <p  class="body-2  pt-1 ">{{ tender.destination }}</p>
                                            </v-row>

                                            <v-row row class="px-3">
                                                <h4  class=" title ">{{ tender.currency}} {{ tender.customer_offer_amount}} </h4>
                                                    <v-spacer></v-spacer>
                                                    <!--<v-btn small elevation="flat" color="#4169E1" class="white--text" router to="/client/aboutbid">View Details</v-btn>-->
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tender/'+tender.id+'/'+tender.tender_type">View Details</v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-flex> 

                                    <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2" v-for="tender in TransportingOnProgressTenders" :key="tender.tender_id">
                                        <v-card column width="350"  elevation="3" class="px-4 py-3">
                                            <v-row  row class="px-3 pt-1">
                                                <h4  class="">{{ tender.cargo_details}}</h4>
                                                <v-chip 
                                                    small class="light-green white--text caption font-weight-light mx-3" >
                                                    {{ tender.tender_progress}}
                                                </v-chip>
                                                <v-spacer></v-spacer>

                                                <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                                            </v-row>
                   
                                            <p class=" body-2 grey--text">{{ tender.description}}</p>

                                           
                                            <v-row class="px-3">
                                                <p class="body-2  pt-1 ">{{ tender.origin }}</p>
                        
                                                <v-icon small color="#4169E1" class="px-2 pb-3">
                                                    arrow_forward
                                                </v-icon>
                                                <p  class="body-2  pt-1 ">{{ tender.destination }}</p>
                                            </v-row>

                                            <v-row row class="px-3">
                                                <h4  class=" title ">{{ tender.currency}} {{ tender.customer_offer_amount}} </h4>
                                                    <v-spacer></v-spacer>
                                                    <!--<v-btn small elevation="flat" color="#4169E1" class="white--text" router to="/client/aboutbid">View Details</v-btn>-->
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tender/'+tender.id+'/'+tender.tender_type">View Details</v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-flex>  

                                    </template>


                                   
                                </v-row>
                            </v-container> 
                        </v-tab-item>
                   </v-tabs-items>

                </v-card>
        </v-container>
    </div>
</template>

<script>

import { mapGetters, mapActions} from 'vuex'
import Alert from '@/components/Alert.vue'

export default {
  
  name: 'Client',

  components: {Alert},

  data () {
      return{
          tabs: [
              {title:'All'},
              {title:'Biding'},
              {title:'Progress'}
          ],

          tab: null,

          id: 10,
          alert:'',

      }

  },

  computed:{
      ...mapGetters(['AllClearingTenders','Tenders','ClearingBidedTenders','OnProgressTenders',
                        'ClearingTendersOnProgress','getAlert','AllTransportingTenders',
                        'TransportingBidedTenders','TransportingOnProgressTenders','BidedTenders',
                    ])
  },

  methods: {
      ...mapActions(['fetchAllClearingTenders','fetchCurrencies','fetchClearingBidedTenders',
                        'fetchClearingTendersOnProgress','setTender','setAlert',
                        'fetchAllTransportingTenders','setTenders','fetchTransportingBidedTenders',
                        'fetchTransportingOnProgressTenders','setOnProgressTenders','setBidedTenders']),

      set(tender){
          //eslint-disable-next-line no-console
          //console.log(tender);
          this.setTender(tender);
      },    

      fetch(tab){

          switch(tab){

              case 'All':

                  this.fetchAllClearingTenders(this.id);
                  this.fetchAllTransportingTenders(this.id);

                  //this.setTenders();
                   
                  break;

              case 'Biding':

                  this.fetchClearingBidedTenders(this.id);
                  this.fetchTransportingBidedTenders(this.id);

                   //eslint-disable-next-line no-console
                                //console.log(this.TransportingBidedTenders);

                  //this.setBidedTenders()
                  
                  break;

              case 'Progress':

                  this.fetchClearingTendersOnProgress(this.id);
                  this.fetchTransportingOnProgressTenders(this.id);
                
                  break;
              default:
                  break;
          }
      }
  },

  created: function(){
       /*if(this.$route.query.alert){
          this.alert = this.$route.query.alert;
      }*/
      
      this.fetchAllClearingTenders(this.id),
      this.fetchClearingBidedTenders(this.id),
      this.fetchClearingTendersOnProgress(this.id)
     
      this.fetchAllTransportingTenders(this.id);
      this.fetchTransportingBidedTenders(this.id);
      this.fetchTransportingOnProgressTenders(this.id);

         //eslint-disable-next-line no-console
                        //console.log(this.ClearingBidedTenders);

      this.fetchCurrencies();
  },
    
    watch:{
      '$route' () {
        /*if(to !== from ) {

          if(this.$route.query.alert){
                this.alert = this.$route.query.alert;
            }

        }*/
        if(this.alert !== this.$route.query.alert){
            this.alert = this.$route.query.alert;
        } 
      }
    },  

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created.           
        vm.alert = vm.$store.getters.getAlert;

        next();
        }) 
    },
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}

</style>