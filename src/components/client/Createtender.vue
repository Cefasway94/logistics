<template>
    <v-container class="pa-3 mt-10 mx-auto">

        <Alert v-if="alert" v-bind:message= "alert"/>

        <v-layout class="pa-3 mt-10">
            

            <v-card row flat class="mx-auto" width="1300" color="#F5FAFF" >
                <v-row>
                <h3 class="headline mt-1 font-weight-regular">Create new tender</h3>
                <v-spacer></v-spacer>
                <v-btn outlined color="primary" class="mx-4" router to="/client">Cancel</v-btn>
                </v-row>
            </v-card>
        </v-layout>

         <!--<v-container style="height: 400px;">
            <v-row
                class="fill-height"
                align-content="center"
                justify="center"
            >
                <v-col
                    class="subtitle-1 text-center"
                    cols="12"
                >
                    Getting your files
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
        </v-container>-->

        <v-layout column class="pa-3 px-auto" justify-center>
            <v-card col flat width="1000" class="mx-auto mb-10" color="#F5FAFF">
                <v-row>
                <v-icon color="grey" class="mb-4 ml-3 mr-5">list_alt</v-icon>
                <p class="grey--text title">Tender name</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-form>
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-select 
                                    class="mx-6" 
                                    style="color:#4169E1;"
                                    v-model = "tender_category" 
                                    :items="tender_categories" 
                                    :rules="[v => !!v || 'Category is required']"
                                    required
                                    color="#4169E1" 
                                    clearable 
                                >
                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>Tender category
                                    </template>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <!--<v-col>
                                <v-select 
                                    class="mx-6" 
                                    style="color:#4169E1;"
                                    v-model = "tender_category" 
                                    :items="tender_categories" 
                                    color="#4169E1" 
                                    label="Tender category" 
                                    clearable 
                                >
                                </v-select>
                            </v-col>-->
                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0">TENDER NAME</p>
                            <v-text-field 
                                outlined 
                                clearable
                                :rules="[v => !!v || 'Tender name is required']"
                                required
                                v-model="details">
                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>
                            </v-text-field>
                        </v-col>

                         <v-col xs12 sm6 md4 lg4 xl4>
                                    <p class="primary--text body-2 text-uppercase mb-0"> CARGO SIZE </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="size">
                                    </v-text-field>
                        </v-col>
                        
                       
                        </v-row>

                        <v-row class="px-3">
                            <v-row wrap v-if="tender_category === 'Transporting'">
                                <!--<v-col xs12 sm6 md4 lg4 xl4>
                                    <p class="primary--text body-2 text-uppercase mb-0"> DELIVERY TIMELINE </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="timeline">
                                    </v-text-field>-->
                                    <!--<v-date-picker
                                        v-model="timeline"
                                        :allowed-dates="allowedDates"
                                        class="mt-4"
                                        min="2016-06-15"
                                        max="2018-03-20"
                                     >                              
                                    </v-date-picker>
                                    <v-date-picker v-model="timeline"></v-date-picker>

                                </v-col>-->

                                <v-col>
                                    <p class="primary--text body-2 text-uppercase mb-0">ORIGIN</p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        :rules="[v => !!v || 'Origin is required']"
                                        required
                                        v-model="origin"
                                    >
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>

                                <v-col>
                                    <p class="primary--text body-2 text-uppercase mb-0">DESTINATION</p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        :rules="[v => !!v || 'Destination is required']"
                                        required
                                        v-model="destination"
                                    >

                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                    </v-text-field>
                                </v-col>
                                

                                <!--<v-col xs12 sm6 md4 lg4 xl4>
                                    <p class="primary--text body-2 text-uppercase mb-0"> OFFER AMOUNT </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="offer_amount">
                                    </v-text-field>
                                </v-col>-->
                            </v-row>
                        </v-row>

                        <v-row>
                            <!--<v-col
                                offset="2"
                                align-self="center"
                                cols='3'
                               
                            >
                                <p class="primary--text body-2 text-uppercase mb-0"> DELIVERY TIMELINE </p>
                            </v-col>
                            <v-col
                                col="9"
                                
                            >
                                <v-date-picker 
                                    v-model="timeline"
                                    :allowed-dates="allowedDates"
                                    full-width>
                                </v-date-picker>
                            </v-col>-->

                            <v-col xs12 sm6 md4 lg4 xl4>
                                    <!--<v-text-field 
                                        outlined 
                                        clearable
                                        v-model="currency">
                                    </v-text-field>-->
                                    <v-select 
                                        class="mx-6" 
                                        style="color:#4169E1;"
                                        v-model = "currency" 
                                        :items="currencies" 
                                        color="#4169E1" 
                                        :rules="[v => !!v || 'Currency is required']"
                                        required
                                        clearable 
                                    >
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span> Currency
                                        </template>

                                    </v-select>
                                </v-col>

                            <v-col xs12 sm6 md4 lg4 xl4>
                                    <p class="primary--text body-2 text-uppercase mb-0"> OFFER AMOUNT </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        :rules="[v => !!v || 'Amout is required']"
                                        required
                                        v-model="offer_amount">

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template><template #label>

                                    <span class="red--text"><strong>* </strong></span>
                                </template>
                                    </v-text-field>
                            </v-col>

                            <v-col  xs12 sm6 md4 lg4 xl4>
                                <p class="primary--text body-2 text-uppercase mb-0"> DELIVERY TIMELINE  <span class="red--text"><strong>* </strong></span> </p>
                                <v-date-picker 
                                    v-model="timeline"
                                    :rules="[v => !!v || 'Date is required']"
                                    :min= time
                                    required
                                    full-width>


                                </v-date-picker>
                             
                            </v-col>

                        </v-row>

                        <v-row>
                            <v-col xs12>
                                <p class="primary--text body-2 text-uppercase mb-0"> DESCRIPTION ON CARGO </p>
                                <v-textarea
                                    outlined 
                                    clearable
                                    :auto-grow = "true"
                                    v-model="description">
                                </v-textarea>
                            </v-col>
                        </v-row>

                         <v-row>
                            <v-col xs12>
                                <p class="primary--text body-2 text-uppercase mb-0"> TERMS AND CONDITION </p>
                                <v-textarea
                                    outlined 
                                    clearable
                                    :auto-grow = "true"
                                    :rules="[v => !!v || 'Terms and conditions is required']"
                                    
                                    required
                                    v-model="terms">

                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                </v-textarea>
                            </v-col>
                        </v-row>
                        
                    </v-container>
                    </v-form>

                </v-card>
            </v-card>

        
            <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
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
                        Creating a tender
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

                <v-row>
                <v-icon color="grey" class="mb-4 ml-3 ">attachments</v-icon>
                <p class="grey--text title">Attachments</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-row class="pa-3">
                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> CARGO PHOTO </p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Photo input" 
                                    multiple
                                    id="files" 
                                    @change="updateFilesUploaded()"
                                    prepend-icon ="mdi-cloud-upload"
                                    @click:clear="removeFile()"
                                >

                                </v-file-input>
                            </v-card>
                       
                        </v-col> 

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> BILL OF LADING</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input  
                                    id="bill"
                                    :rules="[v => !!v || 'Bill of lading is required']"
                                    required
                                    @change="billUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >
                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span> Bill of lading
                                    </template>

                                </v-file-input>
                            </v-card>
                       
                        </v-col>   

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> AUTHORIZATION LETTER</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    id="letter"
                                    :rules="[v => !!v || 'Authorization letter is required']"
                                    required
                                    @change="letterUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span> Authorization letter
                                    </template>

                                </v-file-input>
                            </v-card>
                       
                        </v-col>   
                                      
                    </v-row>
                </v-card>
            </v-card>

            

           
            <v-card col flat width="1000" class="mx-auto mb-10" color="#F5FAFF">
                <v-row class=" pa-3">
                    <v-spacer></v-spacer>
            
                    <v-btn outlined color="primary" class="mx-4"  @click="cancel">Cancel</v-btn>
                    <v-btn color="primary white--text"  @click="publishTender($event)" :disabled="!isValid()">Publish tender</v-btn>
                </v-row>
            </v-card>

        </v-layout>

    </v-container>
    
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import Alert from '@/components/Alert.vue'
import axios from 'axios'

export default {
    name: "createtender",

    components: {Alert},

    data: ()=>({
        details:'',
        origin:'',
        destination:'',
        timeline:new Date().toISOString().substr(0, 10),
        time: new Date().toISOString().substr(0, 10),
        size:'',
        currency:'',
        offer_amount:'',
        description:'',
        photos:[],
        terms:'',
        bill_of_lading:[],
        authorization_letter:[],

        loading:false,
        currencies:['TZS','USD'],
        alert:'',
        tender_categories:[],
        tender_category:'',

        customer:[]

    }),

    computed:{
      ...mapGetters(['tenderCreated','getAlert','getCurrencies'])
    },

    methods: {

        isValid(){

            if(this.tender_category == "Transporting"){

                if(this.details == '' || this.origin == '' || this.destination == '' || this.timeline == ''
                    || this.currency == '' || this.offer_amount == '' || this.terms =='' || this.tender_category == ''
                    || this.bill_of_lading.length == 0 || this.authorization_letter.length == 0)

                    return false
                else 
                    return true;

            } else if(this.tender_category == "Clearing"){

                if(this.details == '' || this.timeline == '' || this.currency == '' || this.offer_amount == '' || this.terms =='' 
                    || this.tender_category == '' || this.bill_of_lading.length == 0 || this.authorization_letter.length == 0)

                    return false

                else 

                    return true;
            }     
        },

        ...mapActions(['AddTender','setAlert','fetchCurrencies']),

        cancel(){

            this.loading = false;

            this.$router.push('/client');
        },

        allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,

        updateFilesUploaded(){

            let uploadedfiles = document.getElementById("files").files;

            for(var i=0; i < uploadedfiles.length; i++){

                this.photos.push(uploadedfiles[i]); 

                 //eslint-disable-next-line no-console
                 //console.log(response.data); 
            }
        },

        removeFile(){
            this.photos = [];
        },

        billUpdated(){
            this.bill_of_lading.push(document.getElementById("bill").files[0]);
        },

        letterUpdated(){
            this.authorization_letter.push(document.getElementById("letter").files[0]);
        },

        createData(){

            let formData = new FormData();

            if(this.photos.length > 0){

                for( var i = 0; i < this.photos.length; i++){

                    let file = this.photos[i];

                    formData.append('cargo_photo['+i+']',file);

                }
            }
            
            formData.append('cargo_size',this.size);
            formData.append('bill_of_lading[0]',this.bill_of_lading[0]);
            formData.append('authorization_letter[0]',this.authorization_letter[0]);
            formData.append('cargo_details',this.details);
            formData.append('customer_offer_amount',this.offer_amount);
            formData.append('customer_terms_and_conditions',this.terms);
            formData.append('customer_delivery_timeline',this.timeline);

            if(this.tender_category === 'Transporting'){

                formData.append('origin',this.origin);
                
                formData.append('destination',this.destination);
            }
            
            formData.append('currency',this.currency);
            formData.append('description',this.description);
            formData.append('tender_category',this.tender_category);
            formData.append('customer_verification',this.customer.is_verified);

            return formData;
        },

        publishTender(event){

            if(event)
                event.preventDefault();

            
            this.loading = true;

            let formData = this.createData();

            if(this.tender_category === 'Transporting')
            {
                const url = "http://207.180.215.239:9000/api/v1/tenders?customer_id="+this.customer.id;
                //const url = "http://192.168.43.27:8000/api/v1/tenders?customer_id=10";

         
                axios.post(url,
                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).
                            then((response) => {

                             
                                this.loading = false;

                                if(response.data.genralErrorCode == 8004){

                                    //this.$router.push({path:'//client/createtender',query:{alert:response.data.message}});
                                    this.alert = response.data.message;
                                }
                                else if(response.data.genralErrorCode == 8000){

                                    //this.AddTender(response.data.objects);

                                    this.setAlert(response.data.message);

                                    this.$router.push('/client');
                                }

                                //eslint-disable-next-line no-console
                                //console.log(response.data);

                            }).catch(()=>{

                                //eslint-disable-next-line no-console
                                console.log("error occured");

                                this.setAlert("Erro occured. Please try again");

                                this.alert = this.getAlert();

                                this.$router.push('/client/createtender');
                            }); 

            } else if(this.tender_category === 'Clearing')

            {
                const url = "http://207.180.215.239:8000/api/v1/tenders?customer_id="+this.customer.id;
                //const url = "http://192.168.43.27:8000/api/v1/tenders?customer_id=10";

                axios.post(url,
                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).
                            then((response) => {

                             
                                this.loading = false;

                                if(response.data.genralErrorCode == 8004){

                                    //this.$router.push({path:'//client/createtender',query:{alert:response.data.message}});
                                    this.alert = response.data.message;
                                }
                                else if(response.data.genralErrorCode == 8000){

                                    //this.AddTender(response.data.objects);

                                    this.setAlert(response.data.message);

                                    this.$router.push('/client');
                                }

                                //eslint-disable-next-line no-console
                                //console.log(response.data);

                            }).catch(()=>{

                                //eslint-disable-next-line no-console
                                console.log("error occured");

                                this.setAlert("Erro occured. Please try again");

                                this.alert = this.getAlert();

                                this.$router.push('/client/createtender');
                            }); 
            }
              
        }
    },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

            let url = "http://207.180.215.239:8000/api/v1/agent-industries";

            axios.get(url).then((response) => 
                            {
                               
                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects[i].industry_name);

                               for(let i=0; i< response.data.objects.length; i++)
                                    vm.tender_categories.push(response.data.objects[i].industry_name);

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });
                          

            let url1 = "http://207.180.215.239:8181/api/v1/customers/fetch?email="+localStorage.client;

            axios.get(url1).then((response) => 
                            {
                               
                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects[i].industry_name);

                               vm.customer = response.data.objects;

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });
            next();
        }) 
    },
}
</script>