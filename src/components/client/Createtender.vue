<template>
    <v-container class="pa-3 mt-10 mx-auto">

        <Alert v-if="alert" v-bind="{message,type}"/>

        <PDFDocument v-bind="{url,pdfOverlay}" @clicked="closePdfViewer" v-if="pdf"/>
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

            <v-overlay
                :value="choose_tender"
                >

                <v-card color="white">
                    <v-card-title>
                        <p class="primary--text font-weight-bold">Choose the tender category you wish to create</p>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <!-- <v-col cols=6 v-for="category in tender_categories" :key="category.id">
                                    <v-card class="pl-5" :hover="true" @click="setTenderCategory(category.industry_name)">
                                        <v-card-title>{{ category.id }}</v-card-title>
                                        <v-btn 
                                            height="60"
                                            width="70"
                                            elevation="10"
                                            color="primary"
                                            class="white--text pb-2"
                                        >
                                            <v-img
                                                :src="require('../../assets/truck.png')"
                                                class="mt-2"
                                                contain
                                                width=""
                                                height="43"
                                            >
                                            </v-img>
                                       </v-btn>
                                    </v-card>
                                    <p class="mt-3 ml-3 body-1 font-weight-bold primary--text">To Transport goods </p>
                                </v-col> -->
                                <v-col class="categorySel" cols=6>
                                    <v-card class="pl-5" :hover="true" @click="setTenderCategory('Transporting')">
                                        <v-card-title>Transporting</v-card-title>
                                        <v-btn 
                                            height="60"
                                            width="70"
                                            style="margin-bottom:20px;"
                                            elevation="10"
                                            color="primary"
                                            class="white--text pb-2"
                                        >
                                            <v-img
                                                :src="require('../../assets/truck.png')"
                                                class="mt-2"
                                                contain
                                                width=""
                                                height="43"
                                            >
                                            </v-img>
                                       </v-btn>
                                    </v-card>
                                    
                                </v-col>

                                <v-col class="categorySel" cols=6 >
                                    <v-card class="pl-5" style="margin-left:16px;" :hover="true" @click="setTenderCategory('Clearing')">
                                        <v-card-title>Clearing</v-card-title>
                                        <v-btn 
                                            height="60"
                                            width="70"
                                            style="margin-bottom:20px;"
                                            elevation="10"
                                            color="primary"
                                            class="white--text pb-2"
                                        >
                                            <v-img
                                                :src="require('../../assets/box.png')"
                                                class="mt-2"
                                                contain
                                                width=""
                                                height="43"
                                            >
                                            </v-img>
                                       </v-btn>
                                    </v-card>
                                    
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>

            </v-overlay>
            
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
                                <!--<v-select 
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
                                </v-select>-->
                                 <p class="primary--text mb-1 body-2 text-uppercase mb-0">TENDER CATEGORY</p>
                                <v-text-field 
                                    v-model="tender_category" 
                                    outlined
                                    @click="choose_tender = true"
                                >
                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                </v-text-field>

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

                    <v-flex class="pt-3" >
                             <center>
                             <p class="mb-0 body-1 red--text">
                                Supported file types : <span class="font-weight-bold">.PDF .JPG .PNG .JPEG</span>
                             </p>
                             </center>
                    </v-flex>

                    <v-row class="pa-3">
                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> CARGO PHOTO </p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="Photo input" 
                                    id="files" 
                                    :clearable="false"
                                    @change="updateFilesUploaded()"
                                    prepend-icon ="mdi-cloud-upload"
                                    @click:clear="removeFile()"
                                >

                                </v-file-input>

                                 <div v-show="photo_extension === 'jpg' || photo_extension === 'jpeg' ||  photo_extension === 'png' ">
                                    <v-card height="200" width="250" outlined @click="showLargeThumbnail('files')">
                                        <img  id="files_thumb" :src="photo_url" class="preview">
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

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> BILL OF LADING</p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input  
                                    id="bill"
                                    :rules="[v => !!v || 'Bill of lading is required']"
                                    required
                                    :clearable="false"
                                    @change="billUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >
                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span> Bill of lading
                                    </template>

                                </v-file-input>

                                <div v-show="bill_of_lading_extension === 'jpg' || bill_of_lading_extension === 'jpeg' ||  bill_of_lading_extension === 'png' ">
                                    <v-card height="200" width="250" outlined @click="showLargeThumbnail('bill')">
                                        <img  id="bill_thumb" class="preview">
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

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> AUTHORIZATION LETTER</p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    id="letter"
                                    :rules="[v => !!v || 'Authorization letter is required']"
                                    required
                                    @change="letterUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :clearable="false"
                                >
                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span> Authorization letter
                                    </template>

                                </v-file-input>

                                <div v-show="letter_extension === 'jpg' || letter_extension === 'jpeg' ||  letter_extension === 'png' ">
                                    <v-card height="200" width="250" outlined @click="showLargeThumbnail('letter')">
                                        <img  id="letter_thumb" class="preview">
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
                </v-card>
            </v-card>

            

           
            <v-card col flat width="1000" class="mx-auto mb-10" color="#F5FAFF">
                <v-row class=" pa-3">
                    <v-spacer></v-spacer>
            
                    <v-btn outlined color="primary" class="mx-4"  @click="cancel">Cancel</v-btn>
                    <v-btn color="primary white--text"  @click.prevent="publishTender()" :disabled="!isValid()">Publish tender</v-btn>
                </v-row>
            </v-card>

        </v-layout>

    </v-container>
    
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import Alert from '@/components/Alert.vue'
import PDFDocument from '@/components/PDFDocument'
import axios from 'axios'

export default {
    name: "createtender",

    components: {Alert, PDFDocument},

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
        tender_categories:[],
        tender_category:'',

        customer:[],
        
        photo_extension:'',
        photo_url:'',
        bill_of_lading_extension:'',
        bill_of_lading_url:'',
        letter_extension:'',
        letter_url:'',

        overlay:false,
        large_preview_url:'',

        url:'',
        pdf:false,
        pdfOverlay:false,

        choose_tender:true,

        alert: false,
        message:'',
        type:'',

    }),

    computed:{
      ...mapGetters(['tenderCreated','getCurrencies'])
    },



    methods: {

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

        setTenderCategory(name){

            this.choose_tender = false;

            if(name === 'Transporting')
                this.tender_category = 'Transporting';

            else if(name === 'Clearing')
                this.tender_category = 'Clearing';

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

            /*let uploadedfiles = document.getElementById("files").files;

            for(var i=0; i < uploadedfiles.length; i++){

                this.photos.push(uploadedfiles[i]); 

                 //eslint-disable-next-line no-console
                 //console.log(response.data); 
            }*/

            if(document.getElementById("files").files[0]){

                this.photos = [];
                
                this.photos.push(document.getElementById("files").files[0]);

                this.photo_extension = this.getFileExtension(document.getElementById("files").files[0].name);

                if(this.photo_extension === 'jpg' || this.photo_extension === 'jpeg' || this.photo_extension === 'png')
                {
                    var reader = new FileReader();

                    reader.onload = function(){

                        var dataURL = reader.result;

                        var output = document.getElementById('files_thumb');

                        var large_thumbnail = document.getElementById('large_thumbnail');
                        
                        if(output !== null)
                            output.src = dataURL;

                        if(large_thumbnail !== null)
                            large_thumbnail.src = dataURL;
                    
                    }

                    reader.readAsDataURL(document.getElementById("files").files[0]);
                }
                else if(this.photo_extension === 'pdf')
                {
                    this.photo_url = URL.createObjectURL(document.getElementById("files").files[0]);

                    this.previewPdf(this.photo_url);
                }

            }
        },

        removeFile(){
            this.photos = [];
        },

        billUpdated(){
            //this.bill_of_lading.push(document.getElementById("bill").files[0]);
            if(document.getElementById("bill").files[0]){

                this.bill_of_lading = [];
                
                this.bill_of_lading.push(document.getElementById("bill").files[0]);

                this.bill_of_lading_extension = this.getFileExtension(document.getElementById("bill").files[0].name);

                if(this.bill_of_lading_extension === 'jpg' || this.bill_of_lading_extension === 'jpeg' || this.bill_of_lading_extension === 'png')
                {
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
                else if(this.bill_of_lading_extension === 'pdf')
                {
                    this.bill_of_lading_url = URL.createObjectURL(document.getElementById("bill").files[0]);

                    this.previewPdf(this.bill_of_lading_url);
                }

            }
        },

        letterUpdated(){
            //this.authorization_letter.push(document.getElementById("letter").files[0]);

            if(document.getElementById("letter").files[0]){

                this.authorization_letter = [];
                
                this.authorization_letter.push(document.getElementById("letter").files[0]);

                this.letter_extension = this.getFileExtension(document.getElementById("letter").files[0].name);

                if(this.letter_extension === 'jpg' || this.letter_extension === 'jpeg' || this.letter_extension === 'png')
                {
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

                 else if(this.letter_extension === 'pdf')
                {
                    this.letter_url = URL.createObjectURL(document.getElementById("letter").files[0]);

                    this.previewPdf(this.letter_url);
                }

            }

            
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
            formData.append('customer_id',this.customer.id);
        
            return formData;
        },

        publishTender(){

            this.loading = true;

            let formData = this.createData();

            if(this.tender_category === 'Transporting')
            {
                const url = "http://207.180.215.239:9000/api/v1/tenders";
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

                                if(response.data.genralErrorCode === 8004){

                                    //this.$router.push({path:'//client/createtender',query:{alert:response.data.message}});
                                    this.alert = false;

                                    this.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();
                                }
                                else if(response.data.genralErrorCode === 8000){

                                    //this.AddTender(response.data.objects);
                                    this.alert = false;

                                     this.$store.dispatch('setSnackbar',{
                                        text: response.data.message,
                                        color: 'success'
                                    });

                                    this.$router.push('/client');
                                }

                                //eslint-disable-next-line no-console
                                //console.log(response.data);

                            }).catch(()=>{

                                //eslint-disable-next-line no-console
                                this.loading = false;
                                this.alert = false;

                                /*this.alert = "Error occured. Please try again";

                                this.display_alert = true;

                                document.getElementById('app').scrollIntoView();*/
            
                                 this.$store.dispatch('setSnackbar',{
                                        text: "There is a server error, Refresh a page to see your tender otherwise please create again",
                                        color: 'error'
                                    });

                                this.$router.push('/client');
                            }); 

            } else if(this.tender_category === 'Clearing')

            {
                const url = "http://207.180.215.239:8000/api/v1/tenders";
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

                                if(response.data.genralErrorCode === 8004){

                                    //this.$router.push({path:'//client/createtender',query:{alert:response.data.message}});
                                    this.alert = false;

                                    this.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();
                                }
                                else if(response.data.genralErrorCode === 8000){

                                    //this.AddTender(response.data.objects);

                                     //this.setAlert(response.data.message);

                                     this.alert = false;

                                     this.$store.dispatch('setSnackbar',{
                                        text: response.data.message,
                                        color: 'error'
                                    });

                                    this.$router.push('/client');
                                }

                                //eslint-disable-next-line no-console
                                //console.log(response.data);

                            }).catch(()=>{

                                //eslint-disable-next-line no-console
                                this.loading = false;

                                this.alert = false;

                                //this.setAlert("There is a server error, if you don't see your tender please create again");

                                //this.setAlert(response.data.message);

                                this.$store.dispatch('setSnackbar',{
                                    text: "There is a server error, if you don't see your tender please create again",
                                    color: 'error'
                                });

                                this.$router.push('/client');
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

                               if(response.data.genralErrorCode === 8000){

                                   vm.alert = false;

                                   for(let i=0; i< response.data.objects.length; i++)
                                    vm.tender_categories.push(response.data.objects[i].industry_name);

                               }else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    vm.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();
                               }

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)

                                vm.setAlert("Failed to fetch industries, There is an internal server error","error");

                                document.getElementById('app').scrollIntoView();
                            });
                          

            let url1 = "http://207.180.215.239:8181/api/v1/customers/fetch?email="+localStorage.client;

            axios.get(url1).then((response) => 
                            {
                               
                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects[i].industry_name);

                               if(response.data.genralErrorCode === 8000){

                                    vm.alert = false;
                                    vm.customer = response.data.objects;

                               } else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    vm.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();

                               }

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                vm.setAlert("Failed to fetch customer, There is internal server error","error");

                                document.getElementById('app').scrollIntoView();
                            });
            next();
        }) 
    },
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

 img.preview:hover{
     cursor: pointer;
 }

</style>