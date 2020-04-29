<template>
    <v-container class="mt-12 pa-3">
       
            <AlertError v-if="display_alert" v-bind:message="alert"/>
          

             <v-card flat width="900" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                <v-flex>
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">{{ tender.cargo_details }}</h1>
                </v-row>
                </v-flex>
                <v-spacer></v-spacer>
                <h2 style="color:#4169E1;">{{ tender.currency}} {{ tender.customer_offer_amount}}</h2>
                </v-flex>
            </v-card>

            <v-card row flat width="900" class="mt-10 mx-auto" color="#F5FAFF">
                <v-flex row class="">
                <v-icon class="mb-4 ml-3 mr-3" style="color:#4169E1;">person_outline</v-icon>
                <p class="title" style="color:#4169E1;" >Bank details</p>
                </v-flex>
            </v-card>

            <v-card width="900" class="mx-auto px-3 pt-3">
                <v-flex row class="mt-5">
                    <!--<v-flex column sm6 md6 class="pl-6 pr4">
                    <p class=" body-1 mb-0 text-capitalize"> Acc name </p>
                    <v-text-field clearable outlined></v-text-field>
                    </v-flex>-->

                    <v-flex row xs12 class="px-4">
                        <v-flex column xs12 class="px-2">
                            <p class=" body-1 mb-0 text-capitalize"> Acc number </p>
                            <v-text-field 
                                clearable outlined 
                                v-model="account_number"
                                :rules="[v => !!v || 'Account name is required']"
                                required>

                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>

                            </v-text-field>
                        </v-flex>
                    <!--<v-flex column sm6 md6 class="pl-2">
                    <p class=" body-1 mb-0 text-capitalize"> Swift code </p>
                    <v-text-field clearable outlined></v-text-field>
                    </v-flex>-->
                    </v-flex>

                    <!--<v-flex column class="px-6">
                    <p class=" body-1 mb-0 text-capitalize"> Select bank </p>
                    <v-select
                    outlined
                    class=""
                    style="color:#4169E1;"
                    :items="banks"
                    color="#4169E1"
                    clearable
                    ></v-select>
                    </v-flex>-->
                </v-flex>
            </v-card>

           

            <v-card row flat width="900" class="mt-10 mx-auto" color="#F5FAFF">
                <v-flex row class="">
                <v-icon class="mb-3 ml-2 mr-3" style="color:#4169E1;">payment</v-icon>
                <p class="title " style="color:#4169E1;" >Payment</p>
                </v-flex>
            </v-card>

            <v-card width="900" class="mx-auto px-4 pt-3">
                <v-flex column class="">

                <v-flex row class="pl-4 pr-2">
                    <!--
                    <v-flex column sm4 md4 class="pl-4 pr-2">
                    <p class=" body-1 mb-0 text-capitalize"> Payment option </p>
                    <v-select
                    outlined
                    class=""
                    style="color:#4169E1;"
                    :items="payment_options"
                    color="#4169E1"
                    clearable
                    ></v-select>
                    </v-flex> -->

                    <v-flex column xs12 sm6 class="px-2">
                        <p class=" body-1 mb-0 text-capitalize"> Currency </p>
                        <!--<v-text-field clearable outlined></v-text-field>-->

                         <v-select
                            outlined
                            class=""
                            v-model="currency"
                            style="color:#4169E1;"
                            :items="currencies"
                            color="#4169E1"
                            clearable
                            :rules="[v => !!v || 'Currency is required']"
                            required
                         >     
                            <template #label>
                                <span class="red--text"><strong>* </strong></span>
                            </template>

                         </v-select>
                    </v-flex>

                    <v-flex column xs12 sm6 class=" pl-2">
                         <p class=" body-1 mb-0 text-capitalize"> Amount</p>
                        <v-text-field 
                            clearable outlined 
                            v-model="amount"
                            :rules="[v => !!v || 'Amount is required']"
                            required>

                            <template #label>
                                <span class="red--text"><strong>* </strong></span>
                            </template>

                            </v-text-field>
                    
                    </v-flex> 
            
                </v-flex>

                <v-flex row class="pl-4 pr-2">
                    <!--
                    <v-flex column sm4 md4 class="pl-4 pr-2">
                    <p class=" body-1 mb-0 text-capitalize"> Payment option </p>
                    <v-select
                    outlined
                    class=""
                    style="color:#4169E1;"
                    :items="payment_options"
                    color="#4169E1"
                    clearable
                    ></v-select>
                    </v-flex> -->

                    <v-flex column xs12 sm6 class="px-2">
                        <p class=" body-1 mb-0 text-capitalize"> Depositor's name </p>
                        <v-text-field 
                            clearable outlined 
                            v-model="depositors_name"
                            :rules="[v => !!v || 'Name is required']"
                            required
                        >
                            <template #label>
                                <span class="red--text"><strong>* </strong></span>
                            </template>
                        </v-text-field>
                    </v-flex>

                    <v-flex column xs12 sm6 class=" pl-2">
                        <p class=" body-1 mb-0 text-capitalize"> Receipt </p>
                        
                         <v-file-input 
                                    label="Upload file here" 
                                    id="slip"
                                    @change="slipUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'Receipt is required']"
                                    required
                            >

                            <template #label>
                                <span class="red--text"><strong>* </strong></span>
                            </template>

                         </v-file-input>
                    
                    </v-flex> 
            
                </v-flex>

                </v-flex>
            </v-card>

            <v-card flat width="900" class="mx-auto mt-8 " color="#F5FAFF">
                <v-row
                    class="fill-height"
                    align-content="center"
                    justify="center"
                    v-if="loading"
                >
                    <v-col
                        class="subtitle-1 text-center"
                        cols="12"
                    >
                       <span class="font-weight-bold blue--text text--darken-2">Payment processing</span>
                    </v-col>

                    <v-col cols="6">
                        <v-progress-linear
                            color="deep-purple accent-4"
                            indeterminate
                            rounded
                            height="6"
                        >
                        </v-progress-linear>
                    </v-col>
                </v-row>

                <v-flex row align-self-center justify-center class="mt-3">
                    <v-btn elevation="flat" color="#F5FAFF"> 
                        <v-icon color="#4169E1">keyboard_arrow_left</v-icon>
                        <p class=" body-1 mb-0 text-upercase pt-1" style="color:#4169E1;"> go back </p>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary white--text" class="" @click="confirmPayment($event)" :disabled="!isValid()"> Confirm payment</v-btn>
                </v-flex>
            </v-card>

    </v-container>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'
import AlertError from '@/components/AlertError.vue'


export default {
    data () {
        return{
            banks:['CRDB', 'NMB', 'NBC', 'KCB', 'EXIM', 'ECO BANK', 'DTB', 'ABC','BARCLAYS'],
            tender:[],
            payment_options:['Bank Transfer', 'Other'],
            currencies:[],

            alert:'',

            currency_object:[],

            amount:'',
            account_number:'',
            depositors_name:'',
            currency:'',
            depositors_slip:[],
            currency_id:'',

            no_of_installment:'',
            response_message:'',

            loading: false,
            display_alert: false,

        }
    },

    components: {AlertError},

    computed:{
        ...mapGetters(['getCurrencies']),
 
    },

    methods:{

        ...mapActions(['fetchCurrencies']),

        /*setCurrencies(){
    
            for(let i = 0; i< this.getCurrencies.length; i++)
                this.currencies.push(this.getCurrencies[i].name)      
        },*/

         slipUpdated(){
            this.depositors_slip.push(document.getElementById("slip").files[0]);
        },

        isValid(){

           if(this.amount == '' || this.account_number == '' || this.depositors_name == '' 
                || this.currency == '' || this.depositors_slip.length == 0)

                    return false
                else 
                    return true;

                
        },

        createData(){

            //eslint-disable-next-line no-console
                               

            for(let i = 0; i< this.currency_object.length; i++)
            {

                if(this.currency_object[i].name === this.currency)
                {
                     this.currency_id = this.currency_object[i].id;

                     break;
                }
            }
                
          
            let formData = new FormData();
            
            formData.append('amount',this.amount);
            formData.append('deposit_slip[0]',this.depositors_slip[0]);
            formData.append('customers_acct_number',this.account_number);
            formData.append('depositors_name',this.depositors_name);
            formData.append('currency_ID',this.currency_id);
            
            return formData;
            
        },

        checkIfPaymentIsValid(){

               return this.tender.customer_offer_amount == this.amount;
            
        },

        confirmPayment(event){

            

            if(event)
                event.preventDefault();

            this.loading = true;

        
              this.alert = "Error occured. Please try again";

                                this.display_alert = true;

                                document.getElementById('app').scrollIntoView();

        }
    },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created. 

        //vm.fetchCurrencies();

        //vm.setCurrencies();

        if(vm.$route.params.tender_type == "Transporting")
        {

            let url = `http://207.180.215.239:9000/api/v1/tenders/${vm.$route.params.id}`;

            axios.get(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                vm.tender = response.data.objects;

                                let get_payment_term = `http://207.180.215.239:9000/api/v1/payment-terms/${vm.tender.payment_terms_id}`;

                                axios.get(get_payment_term).then((response) => 
                                {

                                    //commit('setOnProgressTenders',response.data.objects)
                                    //eslint-disable-next-line no-console
                                    //console.log(response.data.objects);

                                    vm.no_of_installment = response.data.objects.no_of_installment;
                               

                                }).catch(()=>{

                                    //eslint-disable-next-line no-console
                                    console.log("There is an error during fetching");
                                    // response = null;
                                    //commit('setOnProgressTenders',response)
                                });

                            }).catch(()=>{

                                  //eslint-disable-next-line no-console
                               console.log("There is an error during fetching");
                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });


            const currency = "http://207.180.215.239:8000/api/v1/configurations/currency";

            axios.get(currency).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                               
                                vm.currency_object = response.data.objects;

                                for(let i = 0; i< response.data.objects.length; i++)
                                    vm.currencies.push(response.data.objects[i].name) 

                            }).catch(()=>{

                                  //eslint-disable-next-line no-console
                               console.log("There is an error during fetching");
                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });


        } else if(vm.$route.params.tender_type == "Clearing"){

            const currency = "http://207.180.215.239:8000/api/v1/configurations/currency";

             axios.get(currency).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                for(let i = 0; i< response.data.objects.length; i++)
                                    vm.currencies.push(response.data.objects[i].name) 

                            }).catch(()=>{

                                  //eslint-disable-next-line no-console
                               console.log("There is an error during fetching");
                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });

            

            let url = `http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`;

            axios.get(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                vm.tender = response.data.objects;

                                let get_payment_term = `http://207.180.215.239:8000/api/v1/payment-terms/${vm.tender.payment_terms_id}`;

                                axios.get(get_payment_term).then((response) => 
                                {

                                    //commit('setOnProgressTenders',response.data.objects)
                                    //eslint-disable-next-line no-console
                                    //console.log(response.data.objects);

                                    vm.no_of_installment = response.data.objects.no_of_installment;
                               

                                }).catch(()=>{

                                    //eslint-disable-next-line no-console
                                    console.log("There is an error during fetching");
                                    // response = null;
                                    //commit('setOnProgressTenders',response)
                                });

                            }).catch(()=>{

                                  //eslint-disable-next-line no-console
                               console.log("There is an error during fetching");
                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });
        }

    
         next();
        }) 
    },

}
</script>