<template>
    <v-container class="mt-12 pa-3">
       
            <!-- <AlertError v-if="display_alert" v-bind:message="alert"/> -->
            <PDFDocument v-bind="{url,pdfOverlay}" @clicked="closePdfViewer" v-if="pdf"/>

            <Alert v-if="alert" v-bind="{message,type}"/>
          
            <v-overlay :value="overlay">

                <div class="large-preview">
                    
                    <v-row justify= "center">
                        <v-col cols=12>
                            <img  id="large_thumbnail" width="500px" height="500px">
                        </v-col>

                        <v-col class="mt-0" offset="4">
                            <v-btn
                                large
                                color="primary white--text"
                                @click="overlay = false"
                            >
                                <v-icon large class="font-weight-bold">mdi-close</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
                
            </v-overlay>

            <v-dialog
                v-model="low_amount"
                max-width="400"
                color="#f5faff"
                transition="scale-transition"
                :hide-overlay="true"
            >
            <v-card 
                height="105" 
                color="#f64f51" 
                class="pt-2"
            >

                <v-alert  
                    prominent
                    height="" 
                    type="error">
                    <p class="font-weight-strong mb-0">{{low_amount_message}}</p>
                </v-alert>

            </v-card>
        </v-dialog>

            <v-dialog
                v-model="display_file_size_error"
                max-width="400"
                color="#F5FAFF"
                transition="scale-transition"
                :hide-overlay="true"
            >
                <v-card
                    height="105"
                    color="#F64F51"
                    class="pt-2"
                >
                    
                    <v-alert
                        prominent
                        height=""
                        type="error"
                    >
                        <p class="font-weight-strong mb-0">File size is too large limit 2MB</p>
                    </v-alert>
                    
                </v-card>

            </v-dialog>

             <v-card flat width="900" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                    <v-flex>
                        <v-row class="pl-2 mb-1">
                            <h1 class=" font-weight-regular headline ">{{ tender.cargo_details }}</h1>
                        </v-row>
                    </v-flex>

                    <v-spacer></v-spacer>
                    <h2 style="color:#4169E1;">{{ tender.currency}} {{ Number(tender.customer_offer_amount).toLocaleString()}}</h2>
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

            <v-card width="900" height="500" class="mx-auto px-4 pt-3">
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

                    <v-flex column xs12 sm6 class="pl-10">
                        
                        <p class=" body-1 mb-0 text-capitalize"> Receipt </p>
                         <v-card flat width="358" height="270"  outlined >
                             <center>
                             <p class="mb-0 body-1 red--text">
                                Supported file types : <span class="font-weight-bold">.PDF .JPG .PNG .JPEG</span>
                             </p>
                             </center>
                            <v-file-input 
                                label="upload a slip" 
                                id="slip" 
                                :clearable="false"
                                @change="slipUpdated()"
                                prepend-icon ="mdi-cloud-upload"
                                :rules="[v => !!v || 'Receipt is required']"
                                required
                            >
                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>
                            </v-file-input>

                            <!-- <div v-show="slip_extension === 'jpg' || slip_extension === 'jpeg' ||  slip_extension === 'png' ">
                                <v-card height="200" width="358" outlined @click="showLargeThumbnail('slip')">
                                    <img  id="slip_thumb" class="preview">
                                </v-card>
                            </div> -->
                            <div v-show="slip_extension === 'jpg' || slip_extension === 'jpeg' || slip_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('slip',slip_url)">
                                        <img  id="slip_thumb" :src="slip_url" class="preview">
                                    </v-card>
                            </div>

                             <div v-show="slip_extension === 'pdf'">

                                <v-btn 
                                    :block="true"
                                    icon class="mt-7" 
                                    @click="previewPdf(slip_url)"
                                    >
                                    PREVIEW<v-icon x-small>mdi-file</v-icon>
                                </v-btn>
                            </div>

                            <div v-show="slip_extension === 'error' ">
                                <v-card height="200" width="250" outline class="pt-10 largefile" >
                                    <p class="fontweight-bold red--text title text-center mt-10 "> file size too large </p>
                                </v-card>
                            </div>

                        </v-card>
                    
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
                    <!--<v-btn elevation="flat" color="#F5FAFF"> 
                        <v-icon color="#4169E1">keyboard_arrow_left</v-icon>
                        <p class=" body-1 mb-0 text-upercase pt-1" style="color:#4169E1;"> go back </p>
                    </v-btn>-->
                    <v-spacer></v-spacer>
                    <v-btn color="primary white--text" class="" @click="confirmPayment($event)" :disabled="!isValid()"> Confirm payment</v-btn>
                </v-flex>
            </v-card>

    </v-container>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'
import Alert from '@/components/Alert.vue'
import PDFDocument from '@/components/PDFDocument'
// import AlertError from '@/components/AlertError.vue'


export default {
    data () {
        return{
            banks:['CRDB', 'NMB', 'NBC', 'KCB', 'EXIM', 'ECO BANK', 'DTB', 'ABC','BARCLAYS'],
            tender:[],
            payment_options:['Bank Transfer', 'Other'],
            currencies:[],

            alert: false,
            message:'',
            type:'',

            display_file_size_error:false,

            currency_object:[],

            amount:'',
            account_number:'',
            depositors_name:'',
            currency:'',
            depositors_slip:[],
            currency_id:'',

            no_of_installment:'',
            response_message:'',

            slip_url:'',

            loading: false,
            display_alert: false,
            overlay:false,
            slip_extension:'',

            url:'',
            pdf:false,
            pdfOverlay:false,

            low_amount_message:'',
            low_amount:false,

        }
    },

   components:{Alert,PDFDocument},


    computed:{
        ...mapGetters(['getCurrencies']),
 
    },

    methods:{

        ...mapActions(['fetchCurrencies']),

    previewPdf(url){

            this.url = url;
            this.pdfOverlay = true;
            this.pdf = true;
            
        },

        setAlert(message,type){

            this.alert = true;
            this.message = message;
            this.type = type;
        },

        closePdfViewer(){
            this.pdf = false;
            this.pdfOverlay = false;
        },

        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

        },
        
         slipUpdated(){
            //this.depositors_slip.push(document.getElementById("slip").files[0]);

             if(document.getElementById("slip").files[0].size > 2097152){

                this.slip_extension = 'error';

            }
            else{

                this.slip_extension = '';

                 if(document.getElementById("slip").files[0]){

                    this.depositors_slip = [];
                    
                    this.depositors_slip.push(document.getElementById("slip").files[0]);

                    this.slip_extension = this.getFileExtension(document.getElementById("slip").files[0].name);

                    if(this.slip_extension === 'jpg' || this.slip_extension === 'jpeg' || this.slip_extension === 'png')
                    {
                        var reader = new FileReader();

                        reader.onload = function(){

                            var dataURL = reader.result;

                            var output = document.getElementById('slip_thumb');

                            var large_thumbnail = document.getElementById('large_thumbnail');
                            
                            if(output !== null)
                                output.src = dataURL;

                            if(large_thumbnail !== null)
                                large_thumbnail.src = dataURL;
                        
                        }

                        reader.readAsDataURL(document.getElementById("slip").files[0]);
                    }

                }
                
            }

           
        },

         getFileExtension(url){

            let position = url.lastIndexOf('.');

            let extracted_string = url.slice(position + 1, url.length + 1);

            return extracted_string;

        },

        showLargeThumbnail(id){

            this.overlay = !this.overlay

            var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var large_thumbnail = document.getElementById('large_thumbnail');
               
                    large_thumbnail.src = dataURL;
                   
                }

            reader.readAsDataURL(document.getElementById(id).files[0]);
        },

        isValid(){

           if(this.amount == '' || this.account_number == '' || this.depositors_name == '' 
                || this.currency == '' || this.depositors_slip.length == 0)

                    return false
                else 
                    return true;

                
        },

        createData(){

            let formData = new FormData();
            
            formData.append('amount',this.amount);
            formData.append('deposit_slip[0]',this.depositors_slip[0]);
            formData.append('customers_acct_number',this.account_number);
            formData.append('depositors_name',this.depositors_name);
            formData.append('currency_ID',this.currency);
            
            return formData;
            
        },

        checkIfPaymentIsValid(){

               return this.tender.customer_offer_amount == this.amount;
            
        },

        confirmPayment(event){

            if(this.slip_extension === 'error'){

                this.display_file_size_error = true;
            }
            else
            {
                if(event)
                    event.preventDefault();

                this.loading = true;

                let formData = this.createData();

                let url = `http://207.180.215.239:8002/api/customerpayment/create/${this.tender.id}/${this.tender.tender_type}`;

               

                if(this.no_of_installment === "1"){

                    if(this.amount >= this.tender.customer_offer_amount){

                       
                    axios.post(url,
                                formData,
                                {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                }).
                                then((response) => {

                                    
                                    console.log(response.data);
                                   

                                    if(response.data.genralErrorCode === 8000){

                                        this.loading = false;

                                        this.alert = false;

                                        let status = response.data.objects.is_full_amount_paid === 1 ? 1:0;
                                        
                                        let port = this.tender.tender_type === 'Clearing' ? 8000: 9000;


                                        axios.post(`http://207.180.215.239:${port}/api/v1/tenders/set-payment-status/${this.tender.id}`,{

                                            'payment_status': status
                                        })
                                        .then((response)=>{

                                            if(response.data.genralErrorCode === 8004){

                                                this.alert = false;

                                                setTimeout(()=>{

                                                    this.setAlert(response.data.message,"error");
                                                },500);

                                                this.$router.push('/client/tenderprogress/'+this.tender.id+'/'+this.tender.tender_type);

                                            }

                                        })
                                        .catch(()=>{


                                            this.loading = false;

                                            setTimeout(()=>{

                                                this.setAlert("There is internal server error during updating tender payment status","error");

                                            },500);

                                            this.$router.push('/client/tenderprogress/'+this.tender.id+'/'+this.tender.tender_type);

                                        });


                                        this.$router.push('/client/tenderprogress/'+this.tender.id+'/'+this.tender.tender_type);

                                    } else if(response.data.genralErrorCode === 8004){

                                        this.alert = false;

                                        setTimeout(()=>{

                                            this.setAlert(response.data.message,"error");
                                        },1000)
                                    }

                                    

                                }).catch(()=>{

                                
                                    this.loading = false;

                                    setTimeout(()=>{

                                        this.setAlert("There is internal server error","error");

                                    },1000)

                                });  

                    }
                    else {

                        this.loading = false;
                        this.low_amount_message = "Payment for this tender is single installment, you need to put the required amount";
                        this.low_amount = true;

                    }

                } else {

                    axios.post(url,
                                formData,
                                {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                }).
                                then((response) => {

                                    if(response.data.genralErrorCode === 8000){

                                        this.loading = false;

                                        this.alert = false;

                                        let status = response.data.objects.is_full_amount_paid === 1 ? 1:0;
                                        
                                        let port = this.tender.tender_type === 'Clearing' ? 8000: 9000;


                                        axios.post(`http://207.180.215.239:${port}/api/v1/tenders/set-payment-status/${this.tender.id}`,{

                                            'payment_status': status
                                        })
                                        .then((response)=>{

                                            if(response.data.genralErrorCode === 8004){

                                                this.alert = false;

                                                setTimeout(()=>{

                                                    this.setAlert(response.data.message,"error");
                                                },500);

                                                this.$router.push('/client/tenderprogress/'+this.tender.id+'/'+this.tender.tender_type);

                                            }

                                        })
                                        .catch(()=>{


                                            this.loading = false;

                                            setTimeout(()=>{

                                                this.setAlert("There is internal server error during updating tender payment status","error");

                                            },500);

                                            this.$router.push('/client/tenderprogress/'+this.tender.id+'/'+this.tender.tender_type);

                                        });


                                        this.$router.push('/client/tenderprogress/'+this.tender.id+'/'+this.tender.tender_type);
                                    }
                                    else if(response.data.genralErrorCode === 8004){

                                        this.loading = false;

                                        this.alert = false;

                                        setTimeout(()=>{

                                            this.setAlert(response.data.message,"error");
                                        },1000)
                                    }
                                    

                                }).catch(()=>{

                                    this.loading = false;

                                    setTimeout(()=>{

                                        this.setAlert("There is internal server error","error");

                                    },1000)
                                });  

                }
            }
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
                               if(response.data.genralErrorCode === 8000){

                                   vm.alert = false;

                                   vm.tender = response.data.objects;

                                    let get_payment_term = `http://207.180.215.239:9000/api/v1/payment-terms/${vm.tender.payment_terms_id}`;

                                    axios.get(get_payment_term).then((response) => 
                                    {

                                        //commit('setOnProgressTenders',response.data.objects)
                                        //eslint-disable-next-line no-console
                                        //console.log(response.data.objects);

                                        if(response.data.genralErrorCode === 8000){

                                            vm.alert = false;

                                            vm.no_of_installment = response.data.objects.no_of_installment;
                                        }
                                        else if(response.data.genralErrorCode === 8004){

                                            vm.alert = false;

                                            setTimeout(()=>{

                                                vm.setAlert(response.data.message,"error");

                                            },1000)
                                        }

                                        }).catch(()=>{

                                            vm.alert = false;

                                            setTimeout(()=>{

                                                vm.setAlert(response.data.message,"error");

                                            },1000)
                                    });
                               }
                               else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    setTimeout(()=>{

                                        vm.setAlert(response.data.message,"error");

                                    },1000)
                               }
                                
                            }).catch(()=>{

                                setTimeout(()=>{

                                    vm.setAlert("There is an internal error","error");

                                },1000)
                            });


            const currency = "http://207.180.215.239:9000/api/v1/configurations/currency";

            axios.get(currency).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                                if(response.data.genralErrorCode === 8000){

                                    vm.alert = false;

                                    vm.currency_object = response.data.objects;

                                    for(let i = 0; i< response.data.objects.length; i++)
                                        vm.currencies.push(response.data.objects[i].name) 
                               }
                               else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    setTimeout(()=>{

                                        vm.setAlert(response.data.message,"error");

                                    },1000)
                               }

                            }).catch(()=>{

                                setTimeout(()=>{

                                    vm.setAlert("There is an internal error","error");

                                },1000)
                            });


        } else if(vm.$route.params.tender_type == "Clearing"){

            const currency = "http://207.180.215.239:9000/api/v1/configurations/currency";

             axios.get(currency).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                                if(response.data.genralErrorCode === 8000){

                                    vm.alert = false;

                                    vm.currency_object = response.data.objects;

                                    for(let i = 0; i< response.data.objects.length; i++)
                                        vm.currencies.push(response.data.objects[i].name) 
                               }
                               else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    setTimeout(()=>{

                                        vm.setAlert(response.data.message,"error");

                                    },1000)
                               }

                            }).catch(()=>{

                                setTimeout(()=>{

                                    vm.setAlert("There is an internal error","error");

                                },1000)
                            });

            

            let url = `http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`;

            axios.get(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                if(response.data.genralErrorCode === 8000){
                                   
                                   vm.tender = response.data.objects;

                                    let get_payment_term = `http://207.180.215.239:8000/api/v1/payment-terms/${vm.tender.payment_terms_id}`;

                                    axios.get(get_payment_term).then((response) => 
                                    {

                                        //commit('setOnProgressTenders',response.data.objects)
                                        //eslint-disable-next-line no-console
                                        //console.log(response.data.objects);

                                        if(response.data.genralErrorCode === 8000){

                                            vm.alert = false;

                                            vm.no_of_installment = response.data.objects.no_of_installment;
                                        }
                                        else if(response.data.genralErrorCode === 8004){

                                            vm.alert = false;

                                            setTimeout(()=>{

                                                vm.setAlert(response.data.message,"error");

                                            },1000)

                                        }

                                    }).catch(()=>{

                                        setTimeout(()=>{

                                            vm.setAlert("There is an internal error","error");

                                        },1000)
                                    });
                               }
                               else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    setTimeout(()=>{

                                        vm.setAlert(response.data.message,"error");

                                    },1000)
                               }
                                

                            }).catch(()=>{

                                setTimeout(()=>{

                                    vm.setAlert("There is an internal error","error");

                                },1000)
                            });
        }

    
         next();
        }) 
    },

}
</script>
<style scoped>

    img.preview{
     width: 358px;
     height: 200px
     }

 .large-preview{

    /*width: 500px;
    height: 500px;*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    
 }

 .largefile{
  border-color: red;
  color: red;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0%;
  background-color: #F5FAFF;
}

 img.preview:hover{
     cursor: pointer;
 }
</style>