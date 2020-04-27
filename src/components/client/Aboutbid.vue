<template>
    <v-container class=" mt-12 px-5">

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                    <v-flex>
                        <v-row class="pl-2 mb-1">
                            <h1 class=" font-weight-regular headline ">Agent: {{ bid.agent_id}}</h1>
                            <v-chip color="grey" small class="white--text ml-7 mt-1">{{ bid.bid_status}}</v-chip>
                        </v-row>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <h2 style="color:#4169E1;" class="headline font-weight-bold mr-7">{{ bid.bid_id}}</h2>
                </v-flex>
            </v-card>

            <v-card flat width="100%" class="mx-auto mb-10 px-5" color="#F5FAFF">
                <v-flex row>
                    <v-flex sm12 md10 lg10 >
                        <v-card width="" class="pt-6 pb-3 pl-8">
                            <v-flex column>
                                <v-flex row >
                                    <v-flex column sm6 xs12 class="pl-3">
                                        <p class=" body-1 mb-2" style="color:#4169E1;"> TERMS AND CONDITIONS: </p>
    
                                    </v-flex>
                                    <v-flex column sm6 xs12 class="pl-3">
                                        <p class="body-1">{{bid.bid_terms_and_conditions}}</p>
                                    </v-flex>
                                </v-flex>

                                <!--<v-flex row class="mt-11">
                                    <v-flex column class="pl-3">
                                        <p class=" body-1 mb-2" style="color:#4169E1;">DELIVERY TIMELINE</p>
                                        <v-date-picker
                                            v-model="bid.bid_delivery_timeline"
                                        >
                                        </v-date-picker>
                                    </v-flex>

                                     <v-flex column class="pl-3">
                                        <p class=" body-1 mb-2" style="color:#4169E1;">PAYMENT METHOD</p>
                                        <p class="body-1 mb-10">INSTALLMENT TYPE: {{ payment.installment_desc}}</p>
                                       
                                        <p class=" body-1 mb-2" style="color:#4169E1;">BID AMOUNT</p>
                                         <p class="body-1 mb-10">$ {{ bid.bid_amount}}</p>
                                    </v-flex>
                                </v-flex>-->
                                <v-flex row class="mt-10">
                                    <v-flex column sm6 xs12  class="pl-3">
                                        <p class=" body-1 mb-2" style="color:#4169E1;"> BID AMOUNT: </p>
    
                                    </v-flex>
                                    <v-flex column sm6 xs12  class="pl-3">
                                        <p class="body-1">{{bid.bid_amount}}</p>
                                    </v-flex>
                                </v-flex>

                                <v-flex row class="mt-10">
                                    <v-flex column sm6 xs12  md6 class="pl-3">
                                        <p class=" body-1 mb-2" style="color:#4169E1;"> PAYMENT TERM: </p>
    
                                    </v-flex>
                                    <v-flex column sm6 xs12  class="pl-3">
                                        <p class="body-1">{{ payment.installment_desc}}</p>
                                    </v-flex>
                                </v-flex>

                                 <v-flex row class="mt-10">
                                    <v-flex column sm6 xs12  class="pl-3">
                                        <p class=" body-1 mb-2" style="color:#4169E1;"> DELIVERY TIMELINE: </p>
    
                                    </v-flex>
                                    <v-flex column md6 xs12  class="pl-3">
                                        <v-date-picker
                                            v-model="bid.bid_delivery_timeline"
                                            full-width
                                        >
                                        </v-date-picker>
                                    </v-flex>
                                </v-flex>

                                



                            </v-flex>
                        </v-card>
                    
                        <v-card flat width="1300" class="mt-5 mb-5" color="#F5FAFF">
                            <v-flex row class="">
                            
                                <v-btn @click.stop="dialog = true" color="#4169E1" outlined  disabled large class="ml-3">REVISE TERMS</v-btn>
                                    <!-- dialog -->
                                <v-dialog v-model="dialog" max-width="500" >
                                    <v-card>
                                        <v-card-title class="title">Edit bid</v-card-title>
                                        <v-text-field class="mx-6" label="bid amnount"></v-text-field>
                                        <v-select 
                                            class="mx-6" 
                                            style="color:#4169E1;" 
                                            :items="payment_terms" 
                                            color="#4169E1" 
                                            label="Payment terms" 
                                            clearable 
                                        >
                                        </v-select>
                                        <v-text-field class="mx-6" label="delivery time"></v-text-field>
                                        <v-card-actions row>

                                            <v-btn color="#4169E1" text @click="dialog = false" class="mt-2 ml-2">YES</v-btn>
                                            <v-btn color="#4169E1" text @click="dialog = false" class="mt-2 ml-2">NO</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <!--Award dialog -->
                                 <v-dialog v-model="awardDialog" max-width="500" >
                                    <v-card>
                                        <v-card-title>Are you sure you want to award this agent?</v-card-title>
                                        <v-card-actions row>

                                            <v-btn color="#4169E1" text @click="awardTender()" class="mt-2 ml-2">YES</v-btn>
                                            <v-spacer></v-spacer>
                                            <v-btn color="#4169E1" text @click="awardDialog = false" class="mt-2 ml-2">NO</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                 <!--Award dialog -->
                                 <v-dialog v-model="dropDialog" max-width="500" >
                                    <v-card>
                                        <v-card-title>Are you sure you want to drop this agent?</v-card-title>
                                        <v-card-actions row>

                                            <v-btn color="#4169E1" text @click="dropAward()" class="mt-2 ml-2">YES</v-btn>
                                            <v-spacer></v-spacer>
                                            <v-btn color="#4169E1" text @click="dropDialog = false" class="mt-2 ml-2">NO</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <v-spacer></v-spacer>
                                <v-btn color="#4169E1" v-if="bid.bid_status == 'awarded'" elevation="flat" @click.stop="dropDialog = true" large class="white--text">Drop award</v-btn>
                                <v-btn color="#4169E1" v-if="bid.bid_status == 'Not-awarded'" elevation="flat" @click.stop="awardDialog = true" large class="white--text">Award tender</v-btn>
                                <v-btn 
                                    color="#4169E1" 
                                    v-if="bid.bid_status == 'accepted'" 
                                    elevation="flat"  
                                    large class="white--text"
                                    :to="'/client/payment/'+bid.tender_id+'/'+tender_type"
                                   
                                >
                                    Pay Agent
                                </v-btn>
                            </v-flex>
                        </v-card>

                </v-flex>

                <!--<v-flex sm12 md3 lg3 xlg3 class="px-3">

                    <v-card color="#4169E1" width="" class="py-4 px-5">
                        <v-flex row >
                            <v-flex column class="px-3">
                            <p class="white--text body-1 font-weight-bold"> ABC FURNITURE </p>
                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text" >mail_outline</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Lorem@gamil.com</p>
                            </v-flex>
                            </v-flex>

                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text"  >room</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Street location, st</p>
                            </v-flex>
                            </v-flex>

                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text" >local_phone</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Lorem@gamil.com</p>
                            </v-flex>
                            </v-flex>
                            </v-flex>

                        </v-flex>

                    </v-card>
                </v-flex>-->
                </v-flex>
            </v-card>

    </v-container>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        dialog: false,
        awardDialog: false,
        dropDialog:false,
        payment_terms:['Full payment', 'Pay by installments (30%, 40%, 30%)'],
        bid:[],
        payment:[],

        tender_type:''
      
      }
    },

    methods:{

        //allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,

        ...mapActions(['setAlert']),

        awardTender(){

            this.awardDialog = false;

             //eslint-disable-next-line no-console
                               //console.log(this.bid.id);

            if(this.$route.params.tender_type == "Transporting"){

                let url = `http://207.180.215.239:9000/api/v1/bids/award/${this.bid.id}`;

                axios.put(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                               this.setAlert(response.data.message);

                               this.$router.push('/client');
     

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                this.setAlert("There is error during awarding a tender, Try again later");

                                this.$router.push('/client');
                            });

            } else if(this.$route.params.tender_type == "Clearing"){

                let url = `http://207.180.215.239:8000/api/v1/bids/award/${this.bid.id}`;

                axios.put(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                               this.setAlert(response.data.message);

                               this.$router.push('/client');
     

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                this.setAlert("There is error during awarding a tender, Try again later");

                                this.$router.push('/client');
                            });

            }

            

        },

        dropAward(){

            this.dropDialog = false;

            if(this.$route.params.tender_type == "Transporting"){

                let url = `http://207.180.215.239:9000/api/v1/bids/drop/${this.bid.id}`;

                axios.put(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                               this.setAlert(response.data.message);

                               this.$router.push('/client');
     

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                this.setAlert("There is error during droping award for a tender , Try again later");

                                this.$router.push('/client');
                            });

            } else if(this.$route.params.tender_type == "Clearing"){

                let url = `http://207.180.215.239:8000/api/v1/bids/drop/${this.bid.id}`;

                axios.put(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                               this.setAlert(response.data.message);

                               this.$router.push('/client');
     

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                this.setAlert("There is error during droping award for a tender , Try again later");

                                this.$router.push('/client');
                            });
            }

            

        },

    },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created.           
        vm.tender_type = vm.$route.params.tender_type;

        if(vm.$route.params.tender_type == 'Transporting' )
        {
            let url = `http://207.180.215.239:9000/api/v1/bids/show/${vm.$route.params.id}`;
        

            axios.get(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                vm.bid = response.data.objects;

                                let url2 = `http://207.180.215.239:9000/api/v1/payment-terms/${response.data.objects.payment_id}`;

                                axios.get(url2).then((response)=>{

                                                
                                             //eslint-disable-next-line no-console
                                            //console.log(response.data.objects);
                                            vm.payment = response.data.objects;
                                });

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });

        } else if(vm.$route.params.tender_type == 'Clearing'){

            let url = `http://207.180.215.239:8000/api/v1/bids/show/${vm.$route.params.id}`;
        

            axios.get(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                              // console.log(response.data.objects);
                                vm.bid = response.data.objects;

                                let url2 = `http://207.180.215.239:8000/api/v1/payment-terms/${response.data.objects.payment_id}`;

                                axios.get(url2).then((response)=>{

                                                
                                             //eslint-disable-next-line no-console
                                            //console.log(response.data.objects);
                                            vm.payment = response.data.objects;
                                });

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });
            }
         next();
        }) 
    },
  }
</script>