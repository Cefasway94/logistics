<template>
    <v-container class=" mt-5 px-5 pt-12">

            <v-card flat width="900" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-1">
                <v-flex>
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">{{LOAD_TENDER.cargo_details}}</h1>
                <v-chip color="green" small class="white--text ml-7 mt-1">Aavilable</v-chip>
                </v-row>
                <p class="grey--text mb-0">{{LOAD_TENDER.description}}</p>
                </v-flex>
                </v-flex>
            </v-card>

            <v-card flat width="900" class=" mx-auto " color="#F5FAFF" v-model="tender" >
                
                <v-flex row >
                <v-flex sm12 md12 lg12 xlg12 >
                    <v-card width="" class="pt-6 pb-3 pl-8" >
                        <v-flex column>
                        <v-flex row >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> DESTINATION </p>
                            <p class="body-1">{{LOAD_TENDER.destination}}</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> ORIGIN </p>
                            <p class="body-1">{{LOAD_TENDER.origin}}</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                            <p class="body-1">{{LOAD_TENDER.cargo_size}}</p>
                            </v-flex>
                        </v-flex>

                        <v-flex column class="mt-7 pr-4">
                            <p class="primary--text body-1 mb-0"> TERMS AND CONDITIIONS </p>
                            <p class="body-1">{{LOAD_TENDER.customer_terms_and_conditions}}</p>
                        </v-flex>

                        <v-flex row class="mt-10 mb-4" >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> BILL OF LADING </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-img
                            class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> AUTHORITY LETTER </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> OTHER </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        </v-card>
                            </v-flex>
                        </v-flex>
                        </v-flex>
                    </v-card>
                    
                    <v-card flat width="1300" class="mt-5" color="#F5FAFF">
                        <v-flex row class="">
                            <v-spacer></v-spacer>
                            <!-- Removed router to and added the 'listId' function that consologs the id passed from New tenders page
                                <v-btn color="#4169E1" @click="listId ()" large class="white--text" rauter to="/agent/biding">Bid on tender</v-btn> -->
                            <v-btn 
                            color="#4169E1" 
                            large class="white--text"
                            v-bind:style="{ visibility: buttonVisibility }"
                            @click="Showbid()">
                            Bid on tender
                            </v-btn>
                        </v-flex>
                    </v-card>

                </v-flex>

                </v-flex>
            </v-card>

<!--  Alerts shown after bid -->

              <v-card flat width="700" class=" mt-5 mx-auto px-3" color="#F5FAFF" v-model="tender" >

                <v-alert
                    text
                    outlined
                    class=""
                    :value="bided"
                    color="orange"
                    type="error"
                    row
                    clearable
                    >
                    <v-flex row>
                    <!-- <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                    <v-icon large color="orange" class="">notification_important</v-icon>    
                    </v-flex> -->
                    <v-flex xms11 sm11 md11 lg11 class="pl-3">
                    <p class="text--text body-1 mb-0">
                    You have already bided this tender before, click the button bellow to view list of
                    active tenders
                    </p>

                    <v-flex row>
                        <v-spacer></v-spacer>
                         <v-btn 
                         elevation="falt"
                         color="#4169E1" 
                         small
                         class="white--text mt-1"
                         @click="activetenders()">
                         Active tenders
                         </v-btn>
                    </v-flex>

                    </v-flex>
                    </v-flex>
                </v-alert>

                <v-alert
                    text
                    outlined
                    class=""
                    :value="bidsent"
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
                    <p class="text--text body-1 mb-0">
                    Your bid have been sent succefully, click the button bellow to
                     view list of active tenders
                    </p>

                    <v-flex row>
                        <v-spacer></v-spacer>
                         <v-btn
                         elevation="falt" 
                         color="#4169E1" 
                         small
                         class="white--text mt-1"
                         @click="activetenders()">
                         Active tenders
                         </v-btn>
                    </v-flex>

                    </v-flex>
                    </v-flex>
                </v-alert>

             </v-card>

            

<!-- biding---------------------------- -->
            <v-card 
            width="900" 
            class=" mb-5 mx-auto pl-4 pb-5" 
            v-show="showbid">

            <v-flex sm12 md12 lg12 xlg12 >
            
            <!-- loading -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>
            <!-- loading -->
                        <v-flex class="pt-5">
                            <p class="body-1" style="color:#4169E1;" color="#4169E1">Biding on tender</p>
                        </v-flex>
                        <v-flex row class="pl-2">
                        <v-flex column class="sm3 md3 px-2">
                            <v-text-field
                             color="#4169E1"
                             clearable
                             v-model="bid_amount"
                             label="Bid amount">
                            </v-text-field>
                        </v-flex>

                        <v-flex column class="sm3 md3 px-2">
                            
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="bid_delivery_timeline"
                                transition="scale-transition"
                                offset-y
                                min-width="290px">
                                <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="date"
                                    label="Delivery time"
                                    readonly
                                    v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker 
                                v-model="date"
                                :min="notless" 
                                no-title 
                                scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                            <!--  -->
                        </v-flex>

                        <v-flex column class="sm6 md6 px-2">
                        <v-select
                            v-model="payment_terms_and_conditions"
                            :items="items"
                            attach
                            chips 
                            color="#4169E1" 
                            clearable
                            label="Select payment terms">
                            </v-select>
                        </v-flex>
                        </v-flex>

                        <v-flex>
                        <v-flex column class="pl-2 mt-3 pr-5">
                        <v-text-field 
                            color="#4169E1" 
                            clearable
                            v-model="bid_terms_and_conditions"
                            label="Terms and conditions">
                            </v-text-field>
                        </v-flex>    
                        </v-flex>

                        <v-flex row class="">
                            <v-spacer></v-spacer>
                            <v-btn  
                            elevation="flat" 
                            color="white" 
                            class="mx-3" 
                            style="color:#4169E1;"
                            @click="cancelbid()">cancel</v-btn>
                            <v-btn 
                            color="#4169E1" 
                            class="white--text"
                            elevation="flat"
                            @click="bidtender()"
                            >
                            bid tender
                            </v-btn>
                        </v-flex>
                    </v-flex>
                </v-card>

    </v-container>
</template>

<script>
/* eslint-disable no-console */
import {mapGetters, mapActions} from 'vuex';
export default {
        
  
  data () {
      return{
          bided: false,
           bidsent: false,
          loading: false,
          payment_terms_and_conditions:'',
          //bid terms
          items:[],
          //date picker--------
          date: new Date().toISOString().substr(0, 10),
          notless: new Date().toISOString().substr(0, 10),
          menu: false,
          //rest of data--------
          showbid: false,
          btnvisibility:'visible',
          visibility: 'hidden',
           onbiding: 'false',         
           tender:'',
           agent_id:'',
           tender_id:'',
           bid_amount:'', // -------
           bid_delivery_timeline:new Date().toISOString().substr(0, 10), // ----------
           bid_terms_and_conditions:'',// -------

      }
  },

  created (tab){

            tab = this.$route.params.id;
    
      this.T_GET_TENDERSDETAILs(tab).then(()=>{

          console.log('tender details bellowww');
          console.log(this.LOAD_TENDER.bill_of_lading[0]);

          this.T_GET_AGENT(localStorage.client).then(()=>{

              console.log('transporter details below');
              console.log(this.LOAD_AGENT);

              this.T_GET_AGENT_PAYMENT_TERMS(this.LOAD_AGENT.objects.email).then(()=>{

                  console.log('transporter payment terms');
                  console.log(this.LOAD_AGENT_PAYMENT_TERMS.length);
                  for (let index = 0; index < this.LOAD_AGENT_PAYMENT_TERMS.length; index++) {
                      this.items.push( this.LOAD_AGENT_PAYMENT_TERMS[index].installment_desc)                      
                  }
              })
          })
      })
      
      //eslint-disable-next-line no-console
      console.log('tab');
      
  },
  
  methods:{
      ...mapActions([
          'T_GET_TENDERSDETAILs', 'T_BID_TENDER', 
          'T_GET_AGENT_PAYMENT_TERMS',
          'T_GET_AGENT'

      ]),

      
      theid(id){
          // eslint-disable-next-line no-console
         // console.log(id);
         return id;
      },

      Showbid() {
            this.visibility = "visible"
            this.btnvisibility = "hidden"
            this.showbid = true
        },

      cancelbid() {
            this.visibility = "hidden"
            this.btnvisibility = "visible"
            this.showbid = false
        },

      activetenders(){
            this.$router.push('/transporter/active/' + this.LOAD_AGENT.objects.agent_id)
            this.$router.go('/transporter/active/' + this.LOAD_AGENT.objects.agent_id)
        },
        
      bidtender() {
  
            this.loading = true

            this.T_BID_TENDER({
                agent_id:this.LOAD_AGENT.objects.agent_id,
                email : this.LOAD_AGENT.objects.email,
                tender_id :this.LOAD_TENDER.id,
                payment_terms_and_conditions:this.payment_terms_and_conditions,
                 bid_terms_and_conditions:this.bid_terms_and_conditions,
                 bid_amount:this.bid_amount, 
                 bid_delivery_timeline:this.bid_delivery_timeline,
            })
            .then(()=>{
                
                console.log(this.LOAD_POST_BID);
                if(this.LOAD_POST_BID.genralErrorCode == 8004  ) {

                    this.loading = false
                    this.showbid = false
                    this.bided = true

                }else{

                     setTimeout(()=>{
                         this.loading = false
                         this.showbid = false
                         this.bidsent = true
                     },600)
                    
                }
                
            })
            .catch(error=>{
                
                console.log('error');
                console.log(error.response.data);
                console.log(this.LOAD_POST_BID);
                
            })                        
               
        }
  },

  computed: {
      ...mapGetters([
          'LOAD_TENDER',
          'LOAD_POST_BID',
          'LOAD_LOGIN',
          'LOAD_AGENT_PAYMENT_TERMS',
          'LOAD_AGENT'
          //'LOAD_BIDTENDERS'
      ]),

      computedVisibility: function() {
            return this.visibility;
        },

        buttonVisibility: function() {
            return this.btnvisibility;
        },
  }

    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>