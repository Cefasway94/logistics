<template>
    <v-container class="mt-12 pa-3">
       

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
                            <v-text-field clearable outlined v-model="account_number"></v-text-field>
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
                         >     
                         </v-select>
                    </v-flex>

                    <v-flex column xs12 sm6 class=" pl-2">
                         <p class=" body-1 mb-0 text-capitalize"> Amount</p>
                        <v-text-field clearable outlined v-model="amount"></v-text-field>
                    
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
                        <v-text-field clearable outlined v-model="depositors_name"></v-text-field>
                    </v-flex>

                    <v-flex column xs12 sm6 class=" pl-2">
                        <p class=" body-1 mb-0 text-capitalize"> Receipt </p>
                        <v-file-input 
                            clearable outlined 
                            prepend-inner-icon="cloud_upload"
                            prepend-icon="" color="#4169E1" 
                            label="Upload file here"
                            id="slip"
                            @change="slipUpdated()">
                        
                        </v-file-input>
                    
                    </v-flex> 
            
                </v-flex>

                </v-flex>
            </v-card>

            <v-card flat width="900" class="mx-auto mt-8 " color="#F5FAFF">
                <v-flex row align-self-center justify-center>
                    <v-btn elevation="flat" color="#F5FAFF"> 
                        <v-icon color="#4169E1">keyboard_arrow_left</v-icon>
                        <p class=" body-1 mb-0 text-upercase pt-1" style="color:#4169E1;"> go back </p>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="#4169E1" class="" @click="confirmPayment" dark> Confirm payment</v-btn>
                </v-flex>
            </v-card>

    </v-container>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'

export default {
    data () {
        return{
            banks:['CRDB', 'NMB', 'NBC', 'KCB', 'EXIM', 'ECO BANK', 'DTB', 'ABC','BARCLAYS'],
            tender:[],
            payment_options:['Bank Transfer', 'Other'],
            currencies:[],
            alert:'',


            amount:'',
            account_number:'',
            depositors_name:'',
            currency:'',
            depositors_slip:[],
            currency_id:'',
        }
    },

    computed:{
        ...mapGetters(['getCurrencies']),
 
    },

    methods:{

        ...mapActions(['fetchCurrencies']),

        setCurrencies(){
    
            for(let i = 0; i< this.getCurrencies.length; i++)
                this.currencies.push(this.getCurrencies[i].name)      
        },

         slipUpdated(){
            this.depositors_slip.push(document.getElementById("slip").files[0]);
        },

        createData(){

            for(let i = 0; i< this.getCurrencies.length; i++)
            {
                if(this.getCurrencies[i].name === this.currency)
                {
                     this.currency_id = this.getCurrencies[i].id;

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

        confirmPayment(){

            let formData = this.createData();

            let url = `http://207.180.215.239:8002/api/customerpayment/create/${this.tender.id}`;

            axios.post(url,
                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).
                            then((response) => {


                                /*if(response.data.genralErrorCode == 8004){

                                    //this.$router.push({path:'//client/createtender',query:{alert:response.data.message}});
                                    //this.alert = response.data.message;
                                }
                                else if(response.data.genralErrorCode == 8000){

                                    //this.AddTender(response.data.objects);

                                    this.setAlert(response.data.message);

                                    this.$router.push('/client');
                                }*/

                                //eslint-disable-next-line no-console
                                console.log(response.data);

                            }).catch(()=>{

                                //eslint-disable-next-line no-console
                                console.log("error occured");

                                this.setAlert("Erro occured. Please try again");

                                this.alert = this.getAlert();

                                this.$router.push('/client');
                            });  

        }
    },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created. 

        //vm.fetchCurrencies();

        vm.setCurrencies();

        let url = `http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`;

        axios.get(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                vm.tender = response.data.objects;

                            }).catch(()=>{

                                  //eslint-disable-next-line no-console
                               console.log("There is an error during fetching");
                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });

         next();
        }) 
    },

}
</script>