<template>
    <v-container class=" mt-12 px-5 pt-12">

             <Alert v-if="alert" v-bind="{message,type}"/>

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

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                    <v-flex>
                        <v-row class="pl-2 mb-1">
                            <h1 class=" font-weight-regular headline ">{{ tender.cargo_details }}</h1>

                            <v-tooltip right content-class="tooltip">
                                <template v-slot:activator="{ on }">
                                    <v-chip 
                                        small 
                                        v-on="on"
                                        color="grey"
                                        class="white--text ml-7 mt-1"
                                    >
                                        {{ tender.tender_progress}}

                                    </v-chip>
                                </template>
                                <span v-if="tender.tender_progress === 'onProgress'">The agent has started to work on this tender</span>
                                <span v-if="tender.tender_progress === 'awaiting'">Tender has not yet been started to be processed</span>
                            </v-tooltip>
                        </v-row>
                        <p class="grey--text">{{ tender.description }}</p>
                    </v-flex>
                </v-flex>
            </v-card>

            <v-card flat width="1300" class=" mx-auto mb-10 px-5" color="#F5FAFF">
                <v-flex row >
                    <v-flex sm12>
                        <v-card width="" class="pt-6 pb-3 pl-8" >
                            <v-flex column>
                                <v-flex row >
                                    <v-flex column xs6 sm6 md4 class="pl-3">

                                        <p class="primary--text body-1 mb-2"> TENDER TYPE </p>
                                        <p class="body-1">{{ tender.tender_type}}</p>

                                    </v-flex>

                                    <v-flex column xs6 sm6 md4 class="pl-3">
                                        <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                                        <p class="body-1">{{ tender.cargo_size}}</p>
                                    </v-flex>

                                    <v-flex column xs6 sm6 md4  class="pl-3">

                                         <p class="primary--text body-1 mb-2"> AMOUNT </p>
                                         <p class="body-1">{{ Number(tender.customer_offer_amount).toLocaleString()}} {{tender.currency}} </p>

                                    </v-flex>
                                </v-flex>

                                <v-flex row class="mt-7 pr-4" v-show="tender.tender_type == 'Transporting'">

                                     <v-flex column xs6  md6 class="pl-3" >

                                        <p class="primary--text body-1 mb-2"> ORIGIN COUNTRY</p>
                                        <p class="body-1">{{ tender.origin}}</p>

                                    </v-flex>

                                     <v-flex column xs6 md6 class="pl-3">

                                         <p class="primary--text body-1 mb-2"> DESTINATION COUNTRY</p>
                                         <p class="body-1">{{ tender.destination }}</p>

                                    </v-flex>

                                    <v-flex column xs6  md6 class="pl-3" >

                                        <p class="primary--text body-1 mb-2"> ORIGIN REGION/STATE</p>
                                        <p class="body-1">{{ tender.origin_region}}</p>

                                    </v-flex>

                                     <v-flex column xs6 md6 class="pl-3">

                                         <p class="primary--text body-1 mb-2"> DESTINATION REGION/STATE</p>
                                         <p class="body-1">{{ tender.destination }}</p>

                                    </v-flex>

                                </v-flex>

                                
                                <v-flex row class="mt-7 pr-4">

                                     <v-flex column xs6 class="pl-3" >

                                        <p class="primary--text body-1 mb-0"> BILL OF LADING NUMBER </p>
                                        <p class="body-1">{{ tender.bill_of_lading_number}}</p>
                                    </v-flex>

                                     <v-flex column xs6 class="pl-3">

                                        <p class="primary--text body-1 mb-0"> TERMS AND CONDITIIONS </p>
                                        <p class="body-1">{{ tender.customer_terms_and_conditions}}</p>

                                    </v-flex>

                                </v-flex>

                                <v-flex row class="mt-10 mb-4" >
                                    <v-flex column class="pl-3" v-if="tender.cargo_photo != null">
                                        <p class="primary--text body-1 mb-2"> CARGO PHOTO </p>

                                        <v-card flat width="200" height="155" outlined>
                                            <div 
                                                v-show="(photo_extension === 'jpg') || (photo_extension === 'jpeg') || (photo_extension === 'png')" 
                                                @click="largePreview(photo_url)"
                                            >
                                                

                                                <v-img 
                                                    :src="photo_url"  
                                                    class="mb-0 pb-0 oxoImg" 
                                                    height="147" 
                                                    width="200" 
                                                    >
                                                    
                                                    </v-img>
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
                                    </v-flex>

                                    <v-flex column >
                                        <p class="primary--text body-1 mb-2"> BILL OF LADING </p>
                                        <v-card flat width="200" height="150" outlined>
                                            <div 
                                                v-show="(bill_of_lading_extension === 'jpg') || (bill_of_lading_extension === 'jpeg') || (bill_of_lading_extension === 'png')" 
                                                @click="largePreview(bill_of_lading_url)"
                                            >
                                                <!-- <img :src="bill_of_lading_url" width=200 height=150/> -->
                                                <v-img 
                                                    :src="bill_of_lading_url"  
                                                    class="mb-0 pb-0 oxoImg" 
                                                    height="147" 
                                                    width="200" 
                                                    >
                                                    
                                                    </v-img>
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
                                    </v-flex>

                                    <v-flex column >
                                        <p class="primary--text body-1 mb-2"> AUTHORIZATION LETTER </p>
                                            <v-card flat width="200" height="150" outlined>
                                                
                                                <div 
                                                    v-show="(letter_extension === 'jpg') || (letter_extension === 'jpeg') || (letter_extension === 'png')" 
                                                    @click="largePreview(letter_url)"
                                                >
                                                    <!-- <img :src="letter_url" width=200 height=150/> -->
                                                    <v-img 
                                                    :src="letter_url"  
                                                    class="mb-0 pb-0 oxoImg" 
                                                    height="147"
                                                    width="200" 
                                                    >
                                                    
                                                    </v-img>
                                                    
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
                                    </v-flex>
                                </v-flex>

                                <v-row class="mt-5" v-if="otherFiles.length > 0">

                                    <v-col cols=12><p class="primary--text body-1 mb-2"> OTHER DOCUMENTS</p></v-col>

                                    <v-col cols=12 md=4 v-for="(file,key) in otherFiles" :key="key">

                                        <p class="mb-3 ml-3 body-1">{{file.name}}</p>

                                        <v-card flat width="200" height="150" outlined>
                                            <v-row>
                                                <v-col >
                                                    <div 
                                                        v-show="(getFileExtension(file['url']) === 'jpg') || (getFileExtension(file['url']) === 'jpeg') || (getFileExtension(file['url']) === 'png')" 
                                                        @click="largePreview(file['url'])"
                                                    >
                                                        <v-img 
                                                            :src="file['url']"  
                                                            class="mb-0 pb-0 oxoImg" 
                                                            height="147" 
                                                            width="200" >
                                                        </v-img>
                                                    </div>
                                                
                                                    <div v-show="getFileExtension(file['url']) === 'pdf'">

                                                        <v-btn 
                                                            :block="true"
                                                            icon class="mt-7" 
                                                            @click="previewPdf(file['url'])"
                                                            >
                                                            PREVIEW<v-icon x-large>mdi-file</v-icon>
                                                        </v-btn>

                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-flex>
                        </v-card>
                    
                        <v-card flat width="1300" class="mt-5 mb-5" color="#F5FAFF">
                            <v-flex row class="">
                                <v-spacer></v-spacer>
                                    <!-- Removed router to and added the 'listId' function that consologs the id passed from New tenders page
                                    <v-btn color="#4169E1" @click="listId ()" large class="white--text" rauter to="/agent/biding">Bid on tender</v-btn> -->
                                    <v-btn 
                                        :disabled="editValid" 
                                        color="#4169E1" 
                                        large class="white--text"
                                        :to="'/client/edittender/'+tender.id+'/'+tender.tender_type"
                                        v-show ="tender.tender_progress !== 'onProgress'">
                                        Edit
                                    </v-btn>

                                     <v-btn 
                                        :disabled="editValid" 
                                        color="#4169E1" 
                                        large class="white--text"
                                        :to="'/client/tenderprogress/'+tender.id+'/'+tender.tender_type"
                                        v-show ="tender.tender_progress === 'onProgress'">
                                        Show progress
                                    </v-btn>
                            </v-flex>
                        </v-card>

         
                        <!--<v-card width="1300" 
                                class="mt-5 mb-5 pl-8 pt-6 pb-5" 
                                v-bind:style="{ visibility: computedVisibility }"
                        >
                            <v-flex>
                                <p class="body-1" style="color:#4169E1;" color="#4169E1">Biding detail</p>
                            </v-flex>
                            <v-flex row class="pl-2 mt-10">

                                <v-flex column class="sm3 md3 px-2">
                                    <v-text-field 
                                        color="#4169E1" 
                                        clearable
                                        label="Bid amount">
                                    </v-text-field>
                                </v-flex>

                                <v-flex column class="sm3 md3 px-2">
                                    <v-text-field 
                                        color="#4169E1" 
                                        clearable
                                        label="Delivery time">
                                    </v-text-field>
                                </v-flex>

                                <v-flex column class="sm6 md6 px-2">
                                    <v-text-field color="#4169E1" clearable
                                        label="Terms and conditions"></v-text-field>
                                </v-flex>
                            </v-flex>

                            <v-flex row class="">
                                <v-spacer></v-spacer>
                                <v-btn  elevation="flat" color="white" class="mx-3" style="color:#4169E1;">cancel</v-btn>
                                <v-btn color="#4169E1" class="white--text">confirm bid</v-btn>
                            </v-flex>
                        </v-card>-->

                    </v-flex>
                </v-flex>
            </v-card>

    </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios'
import PDFDocument from '@/components/PDFDocument'
import Alert from '@/components/Alert'

export default {
  
    data: ()=>({
        
        tender:[], 

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

        alert: false,
        message:'',
        type:'',

        otherFiles:[],

    }),

     components:{PDFDocument,Alert},

    computed: {

    ...mapGetters(['getTender']),

        /*getTender(){
            return this.$store.getters.fetchTenderById(2);
        }*/
     editValid(){

         return ((this.tender.awarded_agent_id == null && this.tender.tender_progress == 'accepted'))
     }
    },

    methods:
    {
         previewPdf(url){
            this.url = url;
            this.pdfOverlay = true;
            this.pdf = true;
            
        },

        closePdfViewer(){
            this.pdf = false;
            this.pdfOverlay = false;
        },

        getFileExtension(url){

        let position = url.lastIndexOf('.');

        let extracted_string = url.slice(position + 1, url.length + 1);

        return extracted_string;

        },

        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

        },
    },

     beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created.           
        vm.alert = vm.$store.getters.getAlert;

         //eslint-disable-next-line no-console
          //console.log(vm.$route.params.tender_type);

          if(vm.$route.params.tender_type == "Transporting") // Transporting tender
          {
              let url = `http://207.180.215.239:9000/api/v1/tenders/${vm.$route.params.id}`;

              axios.get(url).then((response) => 
                            {
                               
    
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

                                    if(vm.tender.files !== null)
                                    {
                                             vm.otherFiles = vm.tender.files;
                                    }

                                }

                                 

                              

                                //eslint-disable-next-line no-console
                                //console.log(vm.tender.tender_progress);


                            }).catch(()=>{

                                setTimeout(()=>{

                                    vm.setAlert("There is an internal error","error");

                                },1000)
                            });


          } else if(vm.$route.params.tender_type == "Clearing") //Clearing tender
          {

              let url = `http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`;

              axios.get(url).then((response) => 
                            {
                               
                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects[i].industry_name);

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

                                    if(vm.tender.files !== null)
                                    {
                                        vm.otherFiles = vm.tender.files;
                                    }

                                }

                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects);


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

.pa-auto{
    font-family :"Roboto",sans-serif !important;
}

.tooltip{

    width:30%;
    max-width: 150px;
    background-color: #4169E1;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
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

 img:hover{
     cursor: pointer;
 }
</style>