<template>
    <v-container class=" mt-12 px-5">

            <Alert v-if="alert" v-bind="{message,type}"/>

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                    <v-flex>
                        <v-row class="pl-2 mb-1">
                            <h1 class=" font-weight-regular headline ">{{ tender.cargo_details}}</h1>
                            <v-chip color="green" small class="white--text ml-7 mt-1">{{ tender.tender_progress}}</v-chip>
                        </v-row>
                        <p class="grey--text">{{ tender.description}}</p>
                    </v-flex>

                    <v-spacer></v-spacer>
                    <h2 > {{ Number(tender.customer_offer_amount).toLocaleString()}} {{tender.currency}} </h2>
                </v-flex>
            </v-card>

            <v-card flat width="1300" class="mx-auto mb-10 px-5" color="#F5FAFF">
                <v-flex row>
                    <v-flex sm12 md9 lg9 xlg9>
                        <v-card width="" class="pt-6 pb-3 pl-8">
                            <v-flex column>
                                <v-flex row >

                                    <v-flex column class="pl-3" v-show="tender.tender_type == 'Clearing'">
                                        <p class="primary--text body-1 mb-0"> TERMS AND CONDITIIONS </p>
                                        <p class="body-1">{{ tender.customer_terms_and_conditions}}</p>
                                    </v-flex>
                                    
                                    <v-flex column class="pl-3" v-show="tender.tender_type == 'Transporting'">
                                        <p class="primary--text body-1 mb-2"> DESTINATION </p>
                                        <p class="body-1">{{ tender.destination}}</p>
                                    </v-flex>
                                    <v-flex column v-show="tender.tender_type == 1">
                                        <p class="primary--text body-1 mb-2"> ORIGIN </p>
                                        <p class="body-1">{{ tender.origin}}</p>
                                    </v-flex>
                                    <v-flex column >
                                        <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                                        <p class="body-1">{{ tender.cargo_size}}</p>
                                    </v-flex>

                                </v-flex>   

                                <v-flex column class="mt-7 pr-4" v-show="tender.tender_type == 'Transporting'">
                                    <p class="primary--text body-1 mb-0"> TERMS AND CONDITIIONS </p>
                                    <p class="body-1">{{ tender.customer_terms_and_conditions}}</p>
                                </v-flex>
                            </v-flex>
                        </v-card>
                    </v-flex>
            </v-flex>
        </v-card>

        <v-card row flat width="1300" class="mx-auto" color="#F5FAFF">

                    <v-card-title>TENDER BIDS</v-card-title>

                    <v-flex row fluid class="pt-5" style="background-color:#F5FAFF;" >
                        <v-flex 
                            xs12 sm6 md6 lg6 xl6 
                            row
                            class="py-3 pl-6 pr-7"
                            v-for="bid in this.bids" 
                            :key="bid.id" >

                            <!--<v-hover class="">
                                <template v-slot="{ hover }">
                                    <v-card 
                                        width="550"
                                        class=" py-2 pb-3 " 
                                        :elevation="hover ? 15 : 3"
                                    >
                                        <v-flex row class="px-1 py-2" >

                                             <v-flex xsm10 sm10 md10 lg7 class="px-6 pt-1" style="background-color:;">

                                                <v-flex row class="px-1" >
                                                    <P xsm6 sm6 md6 lg6 class="text--text body-1 font-weight-medium mb-0">First instalment</P>
                                                     <v-chip color="primary" small xsm6 sm6 md6 lg6 class="ml-4 ">not received</v-chip>
                                                </v-flex>

                                                <v-flex row>
                                                    <p class="text--text mb-0 px-1">Received on Date...</p>
                                                </v-flex>
                                            </v-flex>

                                            <v-flex xsm12 sm12 md12 lg3 class="">
                                                <p class="title text--text text-center mb-0 my-4">100000 USD</p>
                                            </v-flex>
                                        </v-flex>
                                    </v-card>
                                </template>
                            </v-hover>-->

                                    <v-card 
                                        width="550"
                                        class=" py-2 pb-3" 
                                        elevation="5" 
                                    >
                                        <v-flex row class="px-1 py-2" >
                                                <v-flex xsm10 sm10 md10 lg7 class="px-6 pt-1" style="background-color:;">

                                                    <v-flex row  class="px-6 pt-1 mb-3">
                                                        <v-flex column><p class="primary--text body-1 font-weight-medium mb-0">AGENT: </p></v-flex>
                                                       
                                                        <v-flex column>{{bid.agent_id}}</v-flex>
                                                    </v-flex>

                                                    <v-flex row  class="px-6 pt-1">
                                                        <v-flex column><p class="primary--text body-1 font-weight-medium mb-0">BID AMOUNT: </p></v-flex>
            
                                                        <v-flex column>{{Number(bid.bid_amount).toLocaleString()}} {{tender.currency}}</v-flex>
                                                    </v-flex>

                                                    <v-flex row  class="px-6 pt-1">

                                                         <v-flex column class="px-6 pt-1 mt-5" v-if="bid.bid_status != 'Not awarded'">
                                                            <v-chip color="green" small class="white--text ml-7 mt-1">{{ bid.bid_status}}</v-chip>
                                                        </v-flex>
                                                        <v-flex column class="px-6 pt-1 mt-5">
                                                            <v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/Aboutbid/' + bid.id+'/'+tender.tender_type">View Bid</v-btn>
                                                        </v-flex>

                                                    </v-flex>
                                                    
                                        
                                                
                                                       

                                                </v-flex>
                                        </v-flex>
                                    </v-card>
                        </v-flex>
                    </v-flex>
                </v-card>
    </v-container>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import Alert from '@/components/Alert.vue'
import axios from 'axios'
export default {

    data(){
        return{
            placeholder: 3,
            value:80,
            bids:[],
            tender:[],

            alert: false,
            message:'',
            type:'',
        }
    },

    computed:{
        ...mapGetters(['fetchTenderById','getTender'])
    },

    components: {Alert},

    methods:{
        ...mapActions(['setTender']),

        setAlert(message,type){

            this.alert = true;
            this.message = message;
            this.type = type;
        },
    },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created.           
        //vm.tender_type = vm.getTender.tender_type;
        if(vm.$route.params.tender_type == "Transporting"){

            //fetching the tender
            axios.get(`http://207.180.215.239:9000/api/v1/tenders/${vm.$route.params.id}`).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                vm.tender = response.data.objects;

                            }).catch(()=>{

                                this.setAlert("There is an internal error","error");

                                document.getElementById('app').scrollIntoView();
                            });

            let url = `http://207.180.215.239:9000/api/v1/bids/${vm.$route.params.id}`;

            axios.get(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                vm.bids = response.data.objects;

                            }).catch(()=>{

                                this.setAlert("There is an internal error","error");

                                document.getElementById('app').scrollIntoView();
                            });

        } else if(vm.$route.params.tender_type == "Clearing" ){

            //fetching the tender
            axios.get(`http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                vm.tender = response.data.objects;

                            }).catch(()=>{

                                this.setAlert("There is an internal error","error");

                                document.getElementById('app').scrollIntoView();
                            });

            //fetching tender bids
            let url = `http://207.180.215.239:8000/api/v1/bids/${vm.$route.params.id}`;

            axios.get(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                vm.bids = response.data.objects;

                            }).catch(()=>{

                                this.setAlert("There is an internal error","error");

                                document.getElementById('app').scrollIntoView();
                            });
        }
         next();
        }) 
    },
   
}
</script>