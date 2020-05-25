<template>

    <v-container class="mt-12 px-5" color="#F5FAFF" fluid>

        <Alert v-if="alert" v-bind:message="alert"/>
        <Message/>

        <!--<canvas id="canvas">

        </canvas>-->
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

        <AlertError v-if="display_alert" v-bind:message="alert"/>

        <v-card flat class="mt-10 mx-auto mb-2" color="#F5FAFF">

            <v-row  class="px-3">

                <p class="grey--text title ">Profile Info</p>
               
            </v-row>

        </v-card>

        <v-card flat class="mt-3 mx-auto mb-3" color="white">

            <v-flex row class="">
                <v-icon color="grey" class="mb-4 ml-3 mr-5">person_outline</v-icon>
                <p class="grey--text title ">Client details</p>
            </v-flex>

            <v-row class="mt-0 mx-auto mb-3">
               
                <v-col cols=6 md=3>
                     <p class="primary--text body-1 mb-2">CUSTOMER TYPE</p>
                     <p class="body-1">{{ customer_type }}</p>
                </v-col>

                <v-col cols=6 md=3 v-show="customer_type === 'Personal'">
                    <p class="primary--text body-1 mb-2">FIRST NAME</p>
                    <p class="body-1">{{ customer.first_name}}</p>
                </v-col>

                <v-col cols=6 md=3 v-show="customer_type === 'Personal'">
                    <p class="primary--text body-1 mb-2">LAST NAME</p>
                    <p class="body-1">{{ customer.last_name }}</p>
                </v-col>

                 <v-col cols=6 md=3 v-show="customer_type === 'Company'">
                    <p class="primary--text body-1 mb-2">COMPANY NAME</p>
                    <p class="body-1">{{ customer.company_name }}</p>
                </v-col>

                 <v-col cols=6 md=3 v-show="customer_type === 'Company'">
                    <p class="primary--text body-1 mb-2">COMPANY SECTOR</p>
                    <p class="body-1">{{ customer.company_sector }}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">MOBILE NUMBER</p>
                    <p class="body-1">{{ customer.mobile_number}}</p>
                </v-col>
            </v-row>

            <v-row class="mt-3 mx-auto mb-3">

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">VERIFICATION</p>
                    <p class="body-1" v-show="customer.is_verified === 1">Verified</p>
                    <p class="body-1" v-show="customer.is_verified === 0">Awaiting</p>
                </v-col>

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">COUNTRY</p>
                    <p class="body-1">{{ customer.country}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">STATE/CITY/REGION</p>
                    <p class="body-1">{{ customer.city}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">ADDRESS</p>
                    <p class="body-1">{{ customer.address}}</p>
                </v-col>
            </v-row>
    
            <v-flex row class="">
                <v-icon color="grey" class="mb-4 ml-3 mr-5">mdi-bank</v-icon>
                <p class="grey--text title ">Bank details</p>
            </v-flex>

            <v-row  class="mt-2 mx-auto mb-3" v-show="customer_type === 'Company'">
                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">CONTACT PERSON NAME</p>
                    <p class="body-1">{{ customer.contact_person_names}}</p>
                </v-col>

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">CONTACT PERSON NUMBER</p>
                    <p class="body-1">{{ customer.Contact_person_phone_number}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">CONTACT PERSON DESIGNATION</p>
                    <p class="body-1">{{ customer.Contact_person_designation}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">OFFICE MOBILE</p>
                    <p class="body-1">{{ customer.office_mobile}}</p>
                </v-col>
            </v-row>

            <v-row  class="mt-3 mx-auto mb-3">
                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">BANK ACCOUNT NAME</p>
                    <p class="body-1">{{ customer.bank_acount_name}}</p>
                </v-col>

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">BANK ACCOUNT NUMBER</p>
                    <p class="body-1">{{ customer.bank_account_number}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">BANK SWIFT CODE</p>
                    <p class="body-1">{{ customer.bank_swift_code}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">BANK ADDRESS(CITY/REGION)</p>
                    <p class="body-1">{{ customer.bank_address}}</p>
                </v-col>
            </v-row>
        </v-card>

       <v-flex row class="">
            <v-icon color="grey" class="mb-4 ml-3 mr-5">mdi-attachment</v-icon>
            <p class="grey--text title ">Attachments</p>
        </v-flex>

        <v-card flat class="mt-3 mx-auto mb-3" color="white">

            <v-row v-show="customer_type === 'Personal'">

                <v-col cols=12 md=4>
                    <p class="primary--text body-1 mb-2">PROFILE PHOTO</p>
                    <v-card width="200" height="150" outlined>
                        <v-row>
                            <v-col>

                                    <div 
                                        v-show="(profile_photo_extension === 'jpg') || (profile_photo_extension === 'jpeg') || (profile_photo_extension === 'png')"
                                        @click="largePreview(profile_photo_url)"
                                    >
                                        <img :src="profile_photo_url" width=200 height=150/>
                                    </div>
                               
                                    <div v-show="profile_photo_extension === 'pdf'">

                                        <v-btn 
                                            :block="true"
                                            icon class="mt-7" 
                                            @click="previewPdf(profile_photo_url)"
                                        >
                                            PREVIEW<v-icon x-large>mdi-file</v-icon>
                                        </v-btn>

                                    </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4>
                    <p class="primary--text body-1 mb-2">IDENTITY CARD</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col>
                                <div 
                                    v-show="(id_extension === 'jpg') || (id_extension === 'jpeg') || (id_extension === 'png')" 
                                    @click="largePreview(id_url)"
                                >
                                    <img :src="id_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="id_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(id_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4>

                    <p class="primary--text body-1 mb-2"> TIN CERTIFICATE</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col>
                                <div 
                                    v-show="(tin_extension === 'jpg') || (tin_extension === 'jpeg')|| (tin_extension === 'png')" 
                                    @click="largePreview(tin_url)"
                                >
                                    <img :src="tin_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="tin_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(tin_url)"
                                        >
                                        Preview<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                   
                    </v-card>

                </v-col>
            </v-row>

            <v-row v-show="customer_type === 'Company'">

                <v-col cols=12 md=4 >
                    <p class="primary--text body-1 mb-2">CERTIFICATE OF REGISTRATION</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col>
                                <div 
                                    v-show="(copy_of_registration_extension === 'jpg') || (copy_of_registration_extension === 'jpeg')|| (copy_of_registration_extension === 'png')" 
                                    @click="largePreview(copy_of_registration_url)"
                                >
                                    <img :src="copy_of_registration_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="copy_of_registration_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(copy_of_registration_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4>

                    <p class="primary--text body-1 mb-2"> TAX PAYER IDENTIFICATION DOCUMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col >
                                <div 
                                    v-show="(tax_payer_extension === 'jpg') || (tax_payer_extension === 'jpeg') || (tax_payer_extension === 'png')" 
                                    @click="largePreview(tax_payer_url)"
                                >
                                    <img :src="tax_payer_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="tax_payer_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(tax_payer_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-col>
                        </v-row>
                   
                    </v-card>

                </v-col>

                <v-col cols=12 md=4>

                    <p class="primary--text body-1 mb-2"> BUSINESS LICENCE DOCUMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col >
                                <div 
                                    v-show="(licence_extension === 'jpg') || (licence_extension === 'jpeg') || (licence_extension === 'png')" 
                                    @click="largePreview(licence_url)"
                                >
                                    <img :src="licence_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="licence_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(licence_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-col>
                        </v-row>
                   
                    </v-card>

                </v-col>
            </v-row>

            <v-row v-show="customer_type === 'Company'">

                <v-col cols=12 md=4 >
                    <p class="primary--text body-1 mb-2">VAT CERTIFICATE</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col >
                                <div 
                                    v-show="(vat_extension === 'jpg') || (vat_extension === 'jpeg') || (vat_extension === 'png')" 
                                    @click="largePreview(vat_url)"
                                >
                                    <img :src="vat_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="vat_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(vat_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols=12 md=4 >
                    <p class="primary--text body-1 mb-2">COMPANY LOGO</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col >
                                <div 
                                    v-show="(logo_extension === 'jpg') || (logo_extension === 'jpeg') || (logo_extension === 'png')" 
                                    @click="largePreview(logo_url)"
                                >
                                    <img :src="vat_url" width=200 height=150/>
                                </div>
                            
                                <div v-show="logo_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(logo_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4>

                    <p class="primary--text body-1 mb-2"> BANK STATEMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col >
                                <div 
                                    v-show="(bank_statement_extension === 'jpg') || (bank_statement_extension === 'jpeg') || (bank_statement_extension === 'png')" 
                                    @click="largePreview(bank_statement_url)"
                                >
                                    <img :src="bank_statement_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="bank_statement_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(bank_statement_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-col>
                        </v-row>
                    </v-card>

                </v-col>

            </v-row>

        </v-card>
        <v-card col flat width="1000" class="mx-auto mb-10" color="#F5FAFF">
            <v-row justify="center">
                <v-spacer></v-spacer>
                <v-btn
                    small 
                    elevation="flat" 
                    color="#4169E1" 
                    class="white--text"
                    :to="'/client/updateprofile/'+customer_type"
                 >
                    EDIT
                </v-btn>
            
                <!--<v-btn color="primary white--text">VERIFY</v-btn>-->
            
            </v-row>
        </v-card>
        
    </v-container>
  
</template>

<script>
import axios from 'axios'
import AlertError from '@/components/AlertError.vue'
import Alert from '@/components/Alert.vue'
import Message from '@/components/Message.vue'
import {mapGetters} from 'vuex'
import PDFDocument from '@/components/PDFDocument.vue'
 /*import('pdfjs-dist/webpack').then(pdfjs=>{

        pdfjs.getDocument('http://oxobucket.s3-us-west-1.amazonaws.com/1590166088_0357-microsoft-excel-2010-level-2.pdf').then(doc=>{
          doc.getPage(1).then(page=>{

            var viewport = page.getViewport(1);
          
            const canvas =document.getElementById('canvas');
            canvas.height = viewport.height
            canvas.width = viewport.width

            const context = canvas.getContext('2d');

            page.render({
                canvasContext: context,
                viewport: viewport
              });

    });
  }

  );
});*/


export default {
    name: 'Profile',

    components:{AlertError,Alert,PDFDocument,Message},

    data () {
        return {
           
           customer:[],

           display_alert: false,

           customer_type:'',

           alert:'',

           has_photo: false,

           dialog: false,

           overlay:false,

           large_preview_url:'',

           tin_extension:'',
           profile_photo_extension:'',
           id_extension:'',

           copy_of_registration_extension:'',
           tax_payer_extension:'',
           vat_extension:'',
           licence_extension:'',
           bank_statement_extension:'',
           logo_extension:'',

           tin_url:'',
           logo_url:'',
           profile_photo_url:'',
           id_url:'',
           copy_of_registration_url:'',
           tax_payer_url:'',
           vat_url:'',
           licence_url:'',
           bank_statement_url:'',

           url:'',
           pdf:false,
           pdfOverlay:false
      }
      
    },

    computed:{

        ...mapGetters(['getAlert'])    
    },

    methods:{

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

        getFileName(url){

            let position = url.lastIndexOf('/');

            let extracted_string = url.slice(position + 1, url.length + 1);

            return extracted_string;

        },

        /*forceFileDownload(response){

            let filename = this.getFileName(this.url);

            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', filename) //or any other extension
            document.body.appendChild(link)
            link.click()
      },

      downloadIdentityCard(){
          
        axios({
            //url: this.agent.profile_image[0],
            url: this.url,
            method: 'GET',
            responseType: 'blob' // important

        }).then((response) => {

            this.forceFileDownload(response);
        });
    },

    downloadVATCertificate(){
          
        axios({
            //url: this.agent.profile_image[0],
            url: this.url,
            method: 'GET',
            responseType: 'blob' // important

        }).then((response) => {

            this.forceFileDownload(response);
        });
    },

    downloadBusinessLicence(){
          
        axios({
            //url: this.agent.profile_image[0],
            url: this.url,
            method: 'GET',
            responseType: 'blob' // important

        }).then((response) => {

            this.forceFileDownload(response);
        });
    },

    downloadTaxPayerDocument(){
          
        axios({
            //url: this.agent.profile_image[0],
            url: this.url,
            method: 'GET',
            responseType: 'blob' // important

        }).then((response) => {

            this.forceFileDownload(response);
        });
    },
    
    downloadCertificate(){
          
        axios({
            //url: this.agent.certificate[0],
            url: this.url,
            method: 'GET',
            responseType: 'blob' // important

        }).then((response) => {

            this.forceFileDownload(response);
        });
    },

    downloadRegistrationCertificate(){
          
        axios({
            //url: this.agent.certificate[0],
            url: this.url,
            method: 'GET',
            responseType: 'blob' // important

        }).then((response) => {

            this.forceFileDownload(response);
        });
    },
    
    downloadBankStatement(){
          
        axios({
             url: this.url,
            //url: this.agent.insurance[0],

            method: 'GET',

            responseType: 'blob' // important

        }).then((response) => {
            this.forceFileDownload(response);
        });
    },*/
},

    beforeRouteEnter(to,from,next){
        next(vm=>{

             let customer = "http://207.180.215.239:8181/api/v1/customers/fetch";

             axios.get(customer,{
                            params: {
                                email: localStorage.client
                        }
                    }).
                    then((response) =>{

                        if(response.data.genralErrorCode === 8000){

                            //eslint-disable-next-line no-console
                            //console.log(response.data.objects);

                            vm.customer = response.data.objects;

                             //eslint-disable-next-line no-console
                            //console.log(vm.customer.copy_of_identity_card[0]);

                            const customer_type = `http://207.180.215.239:8181/api/v1/customer_types/${vm.customer.customer_type}`;

                            axios.get(customer_type).then((response)=>{

                                if(response.data.genralErrorCode === 8000){

                                    vm.display_alert = false;

                                    vm.customer_type = response.data.objects.customer_type;

                                    if(vm.customer_type === "Personal"){

                                         if(vm.customer.profile_photo !== null)
                                         {
                                             vm.profile_photo_extension = vm.getFileExtension(vm.customer.profile_photo[0]);
                                             vm.profile_photo_url = vm.customer.profile_photo[0];
                                         }

                                         if(vm.customer.copy_of_identity_card !== null)
                                         {
                                             vm.id_extension = vm.getFileExtension(vm.customer.copy_of_identity_card[0]);
                                             vm.id_url = vm.customer.copy_of_identity_card[0];
                                         }
                                            

                                         if(vm.customer.copy_of_tax_identification_number_certificate !== null)
                                         {
                                             vm.tin_extension = vm.getFileExtension(vm.customer.copy_of_tax_identification_number_certificate[0]);
                                             vm.tin_url = vm.customer.copy_of_tax_identification_number_certificate[0];
                                         }
                                            
                                    } 
                                    else if(vm.customer_type === "Company"){

                                        if(vm.customer.certificate_of_registration !== null)
                                        {
                                            vm.copy_of_registration_extension = vm.getFileExtension(vm.customer.certificate_of_registration[0]);
                                            vm.copy_of_registration_url = vm.customer.certificate_of_registration[0];
                                        }
                                            
                                         if(vm.customer.tax_payer_identification_document !== null)
                                         {
                                             vm.tax_payer_extension = vm.getFileExtension(vm.customer.tax_payer_identification_document[0]);
                                             vm.tax_payer_url = vm.customer.tax_payer_identification_document[0];
                                         }
                                            
                                         if(vm.customer.vat_certificate !== null)
                                         {
                                             vm.vat_extension = vm.getFileExtension(vm.customer.vat_certificate[0]);
                                             vm.vat_url = vm.customer.vat_certificate[0];
                                         }
                                             
                                        
                                        if(vm.customer.business_licence_document !== null)
                                        {
                                            vm.licence_extension = vm.getFileExtension(vm.customer.business_licence_document[0]);

                                            vm.licence_url = vm.customer.business_licence_document[0];
                                        }
                                            
                                        if(vm.customer.company_logo !== null)
                                        {
                                            vm.logo_extension = vm.getFileExtension(vm.customer.company_logo[0]);

                                            vm.logo_url = vm.customer.business_licence_document[0];
                                        }

                                         if(vm.customer.three_months_bank_statement !== null)
                                         {
                                             vm.bank_statement_url = vm.customer.three_months_bank_statement[0];
                                             vm.bank_statement_extension = vm.getFileExtension(vm.customer.three_months_bank_statement[0]);
                                         }
                                            

                                    }

                                } else if(response.data.genralErrorCode === 8004){

                                    vm.display_alert = false;

                                    vm.alert = response.data.message;

                                    vm.display_alert = true;

                                    document.getElementById('app').scrollIntoView();
                                }
                            }).catch(()=>{

                            });

                        } else if(response.data.genralErrorCode === 8004){

                             //eslint-disable-next-line no-console
                            //console.log("*****8004****"+response.data);
                        }
                    }).catch();
              
            vm.alert = vm.$store.getters.getAlert;
            
            document.getElementById('app').scrollIntoView();

            next();
        });
    }
}
</script>

<style scope>

 .large-preview{

    /*width: 500px;
    height: 500px;*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    
 }
 
</style>