<template>
    <v-container class="pa-3 mt-10 mx-auto">

        <PDFDocument v-bind="{url,pdfOverlay}" @clicked="closePdfViewer" v-if="pdf"/>

        <v-overlay :value="overlay">
            <div class="large-preview">

                <v-row justify= "center">
                    <v-col cols=12>
                        <img  id="large_thumbnail" width="500px" :src="large_preview_url" height="500px">
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

        <v-layout class="pa-3 mt-10">
            <v-card row flat class="mx-auto" width="1300" color="#F5FAFF" >
                <v-row>
                <h3 class="headline mt-1 font-weight-regular">Edit Tender</h3>
                <v-spacer></v-spacer>
                <v-btn outlined color="primary" class="mx-4" router to="/client">Cancel</v-btn>
                </v-row>
            </v-card>
        </v-layout>

    
        <v-layout column class="pa-3 px-auto" justify-center>
            <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
                <v-row>
                <v-icon color="grey" class="mb-4 ml-3 mr-5">list_alt</v-icon>
                <p class="grey--text title">Cargo details</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-form>
                    <v-container>
                        <v-row>                         
                        <v-col cols="12" md="6">
                            <p class="primary--text body-2 text-uppercase mb-0">TENDER NAME</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.cargo_details"
                            :rules="[v => !!v || 'Tender name is required']"
                            required
                            >
                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>

                            </v-text-field>
                        </v-col>
                        

                        <v-col cols="12" md="6">
                                    <p class="primary--text body-2 text-uppercase mb-0"> CARGO SIZE </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.cargo_size">
                                    </v-text-field>
                                </v-col>
                        </v-row>

                        <v-row class="px-3">
                            <v-col cols="12" md="6" v-if="tender.tender_type == 'Transporting'">
                            <p class="primary--text body-2 text-uppercase mb-0">ORIGIN</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.origin"
                            :rules="[v => !!v || 'Origin is required']"
                            required>

                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" md="6" v-if="tender.tender_type == 'Transporting'">
                            <p class="primary--text body-2 text-uppercase mb-0">DESTINATION</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.destination"
                            :rules="[v => !!v || 'Destination is required']"
                            required
                            >
                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>

                            </v-text-field>
                        </v-col>
                        </v-row>
                        <v-row class="px-3">
                            
                            <v-row wrap>
                                <v-col cols="12" md="6">
                                    <p class="primary--text body-2 text-uppercase mb-0"> CURRENCY</p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.currency"
                                        :rules="[v => !!v || 'Currency is required']"
                                        required>

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <p class="primary--text body-2 text-uppercase mb-0"> OFFER AMOUNT </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.customer_offer_amount"
                                        @change="isValid()"
                                        :rules="[v => !!v || 'Amount is required']"
                                        required>

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>

                        <v-row>
                            <v-col
                                offset="2"
                                align-self="center"
                                cols='12' 
                                md="3" 
                            >
                                <p class="primary--text body-2 text-uppercase mb-0"> DELIVERY TIMELINE  <span class="red--text"><strong>* </strong></span></p>
                            </v-col>
                            <v-col
                                cols="12" 
                                md="9" 
                            >
                                <v-date-picker 
                                    v-model="tender.customer_delivery_timeline"
                                    :min="timeline"
                                    full-width>
                                </v-date-picker>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols=12>
                                <p class="primary--text body-2 text-uppercase mb-0"> DESCRIPTION ON CARGO </p>
                                <v-textarea
                                    outlined 
                                    clearable
                                    :auto-grow = "true"
                                    v-model="tender.description">
                                </v-textarea>
                            </v-col>
                        </v-row>

                         <v-row>
                            <v-col cols=12>
                                <p class="primary--text body-2 text-uppercase mb-0"> TERMS AND CONDITION </p>
                                <v-textarea
                                    outlined 
                                    clearable
                                    :auto-grow = "true"
                                    v-model="tender.customer_terms_and_conditions"
                                    :rules="[v => !!v || 'Terms required']"
                                    required>

                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                </v-textarea>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols=12 md=4>
                                <p class="primary--text body-2 text-uppercase mb-0">CARGO PHOTO </p>
                                <v-card flat width="250" height="270" outlined >
                                    <v-file-input 

                                        :clearable="false"
                                        placeholder="Choose a file"
                                        id="photo"
                                        @change="photoUpdated()"
                                        prepend-icon ="mdi-cloud-upload"
                                    
                                    
                                    >
                                    </v-file-input>

                                    <div v-show="photo_extension === 'jpg' || photo_extension === 'jpeg' || photo_extension === 'png'">
                                        <v-card height="200" width="250" outlined @click="handleClick('photo',photo_url)">
                                            <img  id="photo_thumb" :src="photo_url" class="preview">
                                        </v-card>
                                    </div>

                                    <div v-show="photo_extension === 'pdf'">

                                        <v-btn 
                                            :block="true"
                                            icon class="mt-7" 
                                            @click="previewPdf(photo_url)"
                                            >
                                            PREVIEW<v-icon x-large>mdi-file</v-icon>
                                        </v-btn>

                                    </div>
                                </v-card>
                            </v-col>

                            <v-col cols=12 md=4>
                                <p class="primary--text body-2 text-uppercase mb-0">BILL OF LADING </p>
                                <v-card flat width="250" height="270" outlined >
                                    <v-file-input 

                                        :clearable="false"
                                        placeholder="Choose a file"
                                        id="bill"
                                        @change="billOfLadingUpdated()"
                                        prepend-icon ="mdi-cloud-upload"
                                    
                                    
                                    >
                                    </v-file-input>

                                    <div v-show="bill_of_lading_extension === 'jpg' || bill_of_lading_extension === 'jpeg' || bill_of_lading_extension === 'png'">
                                        <v-card height="200" width="250" outlined @click="handleClick('bill',bill_of_lading_url)">
                                            <img  id="bill_thumb" :src="bill_of_lading_url" class="preview">
                                        </v-card>
                                    </div>

                                    <div v-show="bill_of_lading_extension === 'pdf'">

                                        <v-btn 
                                            :block="true"
                                            icon class="mt-7" 
                                            @click="previewPdf(bill_of_lading_url)"
                                            >
                                            PREVIEW<v-icon x-large>mdi-file</v-icon>
                                        </v-btn>

                                    </div>
                                </v-card>
                            </v-col>

                            <v-col cols=12 md=4>
                                <p class="primary--text body-2 text-uppercase mb-0">AUTHORIZATION LETTER </p>
                                <v-card flat width="250" height="270" outlined >
                                    <v-file-input 

                                        :clearable="false"
                                        placeholder="Choose a file"
                                        id="letter"
                                        @change="letterUpdated()"
                                        prepend-icon ="mdi-cloud-upload"
                                    
                                    
                                    >
                                    </v-file-input>

                                    <div v-show="letter_extension === 'jpg' || letter_extension === 'jpeg' || letter_extension === 'png'">
                                        <v-card height="200" width="250" outlined @click="handleClick('letter',letter_url)">
                                            <img  id="letter_thumb" :src="letter_url" class="preview">
                                        </v-card>
                                    </div>

                                    <div v-show="letter_extension === 'pdf'">

                                        <v-btn 
                                            :block="true"
                                            icon class="mt-7" 
                                            @click="previewPdf(letter_url)"
                                            >
                                            PREVIEW<v-icon x-large>mdi-file</v-icon>
                                        </v-btn>

                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                        
                    </v-container>
                    </v-form>

                </v-card>
            </v-card>

            <!--<v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
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
                                    id="files" 
                                    @change="updateFilesUploaded()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col> 

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> BILL OF LADING</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Bill of lading" 
                                    id="bill"
                                    @change="billUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col>   

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> AUTHORIZATION LETTER</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Authorization letter" 
                                    id="letter"
                                    @change="letterUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col>   
                                      
                    </v-row>
                </v-card>

            </v-card>-->

            <!--<v-card col flat width="1300" class="mx-auto mb-5" color="#F5FAFF">
                <v-row>
                 <v-icon color="grey" class="mb-4 ml-3 mr-5">person_outline</v-icon> 
                <p class="grey--text title ">Client details</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-form>
                    <v-container>
                        <v-row>
                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0"> NAME </p>
                            <v-text-field 
                            outlined 
                            clearable>
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0">LOCATION</p>
                            <v-text-field 
                            outlined 
                            clearable>
                            </v-text-field>
                        </v-col>
                        </v-row>

                        <v-row>
                            <v-row >
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> PHONE NUMBER </p>
                                <v-text-field 
                                outlined 
                                clearable>
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> FAX </p>
                                <v-text-field 
                                outlined 
                                clearable>
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> EMAIL  </p>
                                <v-text-field 
                                outlined 
                                clearable>
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> P.O.BOX </p>
                                <v-text-field 
                                outlined 
                                clearable>
                                </v-text-field>
                            </v-col>
                        </v-row>                        
                    </v-container>
                    </v-form>
                </v-card>
            </v-card>-->

            <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
                <v-row class=" pa-3">
                    <v-col cols="6"
                        class="fill-height"
                        align-content="center"
                        justify="center"
                        v-show="loading"
                    >
                        <v-progress-linear
                            color="deep-purple accent-4"
                            indeterminate
                            rounded
                            height="6"
                        >
                        </v-progress-linear>
                    </v-col>

                    <v-spacer></v-spacer>
                    <v-btn outlined color="primary" class="mx-4" router to="/client">Cancel</v-btn>
                    <v-btn color="primary white--text"  @click="editTender($event)" :disabled="!isValid()">SAVE</v-btn>
                </v-row>
            </v-card>

        </v-layout>

    </v-container>
    
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import axios from 'axios'
import PDFDocument from '@/components/PDFDocument'

export default {
    name: "createtender",

    data: ()=>({

        tender:[],

        customer:[],

        timeline:new Date().toISOString().substr(0, 10),
       
        photo_extension:'',
        photo_url:'',
        bill_of_lading_extension:'',
        bill_of_lading_url:'',
        letter_extension:'',
        letter_url:'',

        overlay:false,
        loading: false,

        photo:[],
        bill_of_lading:[],
        letter:[],

        large_preview_url:'',

        url:'',
        pdf:false,
        pdfOverlay:false
       
    }),

     components:{PDFDocument},

    computed:{
        ...mapGetters(['getTender','getAlert']),
 
    },

    methods:{
        ...mapActions(['updateTender','fetchAllTenders','setAlert']),

        setCustomerDetails(){
            //this.tender = this.getTender;
        },

        previewPdf(url){

            this.url = url;
            this.pdfOverlay = true;
            this.pdf = true;
            
        },

        closePdfViewer(){
            this.pdf = false;
            this.pdfOverlay = false;
        },

        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

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

        handleClick(id,src){

            if(document.getElementById(id).files[0]){

                this.showLargeThumbnail(id);

            }else {
                
                this.largePreview(src);
            }
        },

        //allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,

        isValid(){

            if(this.$route.params.tender_type == "Transporting"){

                if(this.tender.cargo_details == '' || this.tender.origin == '' || this.tender.destination == '' || this.tender.customer_delivery_timeline == ''
                    || this.tender.currency == '' || this.tender.customer_offer_amount == '' || this.tender.customer_terms_and_conditions =='')

                    return false
                else 
                    return true;

            } else if(this.$route.params.tender_type == "Clearing"){

                if(this.tender.cargo_details == '' || this.tender.customer_delivery_timeline == '' || this.tender.currency == '' || 
                    this.tender.customer_offer_amount == '' || this.tender.customer_terms_and_conditions =='')

                    return false

                else 

                    return true;
            }     
        },
        
        letterUpdated()
        {
            if(document.getElementById("letter").files[0]){


                this.letter = [];

                this.letter.push(document.getElementById("letter").files[0]);

                let extension = this.getFileExtension(document.getElementById("letter").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {
                    this.letter_extension = extension;

                    var reader = new FileReader();

                    reader.onload = function(){

                        var dataURL = reader.result;

                        var output = document.getElementById('letter_thumb');

                        var large_thumbnail = document.getElementById('large_thumbnail');
                        
                        if(output !== null)
                            output.src = dataURL;

                        if(large_thumbnail !== null)
                            large_thumbnail.src = dataURL;
                    
                    }

                    reader.readAsDataURL(document.getElementById("letter").files[0]);
                } 
                else if(extension === 'pdf')
                {
                    this.letter_extension = extension;

                    this.letter_url = URL.createObjectURL(document.getElementById("letter").files[0]);

                    this.previewPdf(this.letter_url);
                }
   
            }
        }, 

        photoUpdated()
        {
            if(document.getElementById("photo").files[0]){


                this.photo = [];

                this.photo.push(document.getElementById("photo").files[0]);

                let extension = this.getFileExtension(document.getElementById("photo").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {
                    this.photo_extension = extension;

                    var reader = new FileReader();

                    reader.onload = function(){

                        var dataURL = reader.result;

                        var output = document.getElementById('photo_thumb');

                        var large_thumbnail = document.getElementById('large_thumbnail');
                        
                        if(output !== null)
                            output.src = dataURL;

                        if(large_thumbnail !== null)
                            large_thumbnail.src = dataURL;
                    
                    }

                    reader.readAsDataURL(document.getElementById("photo").files[0]);

                } 
                else if(extension === 'pdf')
                {
                     this.photo_extension = extension;

                    this.photo_url= URL.createObjectURL(document.getElementById("photo").files[0]);

                    this.previewPdf(this.photo_url);
                }
   
            }
        },

        billOfLadingUpdated()
        {
            if(document.getElementById("bill").files[0]){


                this.bill_of_lading = [];

                this.bill_of_lading.push(document.getElementById("bill").files[0]);

                let extension = this.getFileExtension(document.getElementById("bill").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {
                    this.bill_of_lading_extension = extension;

                    var reader = new FileReader();

                    reader.onload = function(){

                        var dataURL = reader.result;

                        var output = document.getElementById('bill_thumb');

                        var large_thumbnail = document.getElementById('large_thumbnail');
                        
                        if(output !== null)
                            output.src = dataURL;

                        if(large_thumbnail !== null)
                            large_thumbnail.src = dataURL;
                    
                    }

                    reader.readAsDataURL(document.getElementById("bill").files[0]);

                } 
                else if(extension === 'pdf')
                {
                     this.bill_of_lading_extension = extension;


                    this.bill_of_lading_url= URL.createObjectURL(document.getElementById("bill").files[0]);

                    this.previewPdf(this.bill_of_lading_url);
                }
   
            }
        },

        createData(tender_type){

            let formData = new FormData();
            
            if(tender_type === "Transporting")
            {
                formData.append('origin',this.tender.origin);
                formData.append('destination',this.tender.destination);
            }

            formData.append('cargo_details',this.tender.cargo_details);
            formData.append('currency',this.tender.currency);
            formData.append('cargo_size',this.tender.cargo_size);
            formData.append('description',this.tender.description);
            formData.append('customer_offer_amount',this.tender.customer_offer_amount);
            formData.append('customer_terms_and_conditions',this.tender.customer_terms_and_conditions);
            formData.append('customer_delivery_timeline',this.tender.customer_delivery_timeline);
            formData.append('customer_id',this.customer.id);

            if(this.photo.length > 0)
                formData.append('cargo_photo[0]',this.photo[0]);
                
            if(this.letter.length > 0)
                formData.append('bill_of_lading[0]',this.letter[0]);

            if(this.bill_of_lading.length > 0)
                formData.append('authorization_letter[0]',this.bill_of_lading[0]);

           return formData;
        },

        editTender(event){

            this.loading = true;

            if(event)
                event.preventDefault();

            if(this.$route.params.tender_type === "Transporting") {

                let formData = this.createData("Transporting")

                axios.post(`http://207.180.215.239:9000/api/v1/tenders/${this.tender.id}`,formData,
                        {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                        }).
                    then((response)=>{
                  
                        //eslint-disable-next-line no-console
                        //console.log(res.data);

                        //this.$router.push('/client');
                        
                        //this.$router.push({path:'/client',query:{alert:'Customer has been edited'}});//then(window.location.load);

                        //this.$router.push({path:'/client',query:{alert:response.data.message}});

                        if(response.data.genralErrorCode === 8000)
                        {
                            //this.setAlert(response.data.message);

                            this.$store.dispatch('setSnackbar',{
                                text: response.data.message,
                                color: 'success'
                            });

                            this.$router.push('/client');
                          

                        } else if(response.data.genralErrorCode === 8004){

                            //eslint-disable-next-line no-console
                            console.log("operation failed");

                            this.loading = false;
                        }

                      

                    }).catch(()=>{

                        //eslint-disable-next-line no-console
                        console.log("Error occured");

                        this.loading = false;
                    });

            } else if(this.$route.params.tender_type == "Clearing"){

                let formData = this.createData("Clearing");

                axios.post(`http://207.180.215.239:8000/api/v1/tenders/${this.tender.id}`,

                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }
                       ).
                    then((response)=>{
                  
                        //eslint-disable-next-line no-console
                        //console.log(res.data);

                        //this.$router.push('/client');
                        
                        //this.$router.push({path:'/client',query:{alert:'Customer has been edited'}});//then(window.location.load);

                        //this.$router.push({path:'/client',query:{alert:response.data.message}});

                        if(response.data.genralErrorCode === 8000)
                        {
                             this.$store.dispatch('setSnackbar',{
                                text: response.data.message,
                                color: 'success'
                            });

                            this.$router.push('/client');
                            
                        } else if(response.data.genralErrorCode === 8004){

                            //eslint-disable-next-line no-console
                            console.log("operation failed");

                             this.loading = false;
                        }

                    }).catch(()=>{

                        //eslint-disable-next-line no-console
                        console.log("Error occured");

                         this.loading = false;
                    });
            }
            
                    
        }
   },

   mounted(){
       //this.setCustomerDetails();
   },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created.           
        //vm.setCustomerDetails();

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

        

        if(vm.$route.params.tender_type == "Transporting"){

             //eslint-disable-next-line no-console
                        console.log("Tender type is 1");
                        
            axios.get(`http://207.180.215.239:9000/api/v1/tenders/${vm.$route.params.id}`).
                    then((response)=>{
                  
                         //eslint-disable-next-line no-console
                        //console.log(response.data.objects);

                        //this.$router.push('/client');
                        
                        //this.$router.push({path:'/client',query:{alert:'Customer has been edited'}});//then(window.location.load);

                        //this.$router.push({path:'/client',query:{alert:response.data.message}});

                        //this.setAlert(response.data.message);

                        //this.$router.push('/client');
                        //vm.tender = response.data.objects;
                        if(response.data.genralErrorCode === 8000)
                        {
                            vm.tender = response.data.objects;

                            if(vm.tender.cargo_photo !== null)
                            {
                                vm.photo_extension = vm.getFileExtension(vm.tender.cargo_photo[0]);

                                vm.photo_url = vm.tender.cargo_photo[0];
                            }

                                if(vm.tender.bill_of_lading !== null)
                            {
                                vm.bill_of_lading_extension = vm.getFileExtension(vm.tender.bill_of_lading[0]);

                                vm.bill_of_lading_url = vm.tender.bill_of_lading[0];
                            }

                                if(vm.tender.authorization_letter !== null)
                            {
                                vm.letter_extension = vm.getFileExtension(vm.tender.authorization_letter[0]);

                                vm.letter_url = vm.tender.authorization_letter[0];
                            }

                        }

                     

                    }).catch(()=>{

                        //eslint-disable-next-line no-console
                        console.log("Error occured");
                    });
        } else if(vm.$route.params.tender_type == "Clearing" ){

                    //eslint-disable-next-line no-console
                        console.log("CLEARING::::::::::");

            axios.get(`http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`).
                    then((response)=>{
                  
                       
                        //this.$router.push('/client');
                        
                        //this.$router.push({path:'/client',query:{alert:'Customer has been edited'}});//then(window.location.load);

                        //this.$router.push({path:'/client',query:{alert:response.data.message}});

                        //this.setAlert(response.data.message);

                        //this.$router.push('/client');

                         //eslint-disable-next-line no-console
                        //console.log(response.data.objects);

                        if(response.data.genralErrorCode === 8000)
                        {
                            vm.tender = response.data.objects;

                            if(vm.tender.cargo_photo !== null)
                            {
                                vm.photo_extension = vm.getFileExtension(vm.tender.cargo_photo[0]);

                                vm.photo_url = vm.tender.cargo_photo[0];
                            }

                                if(vm.tender.bill_of_lading !== null)
                            {
                                vm.bill_of_lading_extension = vm.getFileExtension(vm.tender.bill_of_lading[0]);

                                vm.bill_of_lading_url = vm.tender.bill_of_lading[0];
                            }

                                if(vm.tender.authorization_letter !== null)
                            {
                                vm.letter_extension = vm.getFileExtension(vm.tender.authorization_letter[0]);

                                vm.letter_url = vm.tender.authorization_letter[0];
                            }

                        }

                         

                    }).catch(()=>{

                        //eslint-disable-next-line no-console
                        console.log("Error occured");
                    });
        }

        next();
  }) 
} 

}
</script>
<style scoped>

 img.preview{
     width: 248px;
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

 .progress { z-index: 1;}

 img.preview:hover{
     cursor: pointer;
 }

</style>