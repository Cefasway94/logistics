<template>

    <v-container class="mt-12 px-5" color="#F5FAFF" fluid>
        <PDFDocument v-bind="{url,pdfOverlay}" @clicked="closePdfViewer" v-if="pdf"/>

         <v-overlay :value="overlay">
            <div class="large-preview">
                    
                    <v-row justify= "center">
                        <v-col cols=12>
                            <img  id="large_thumbnail" :src="large_preview_url" style="width:auto;height:auto;max-width:500px;max-height:500px;" >
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
        
        <!-- <Message/> -->

        <v-card flat class="mt-10 mx-auto mb-2" color="#F5FAFF">

            <v-row  class="px-3">

                <p class="grey--text title ">Customer Info</p>
               
            </v-row>

        </v-card>

        <v-card flat class="mt-3 mx-auto mb-3" color="white">
            <v-row class="mt-3 mx-auto mb-3">
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
                    <p class="primary--text body-1 mb-2">ADDRESS</p>
                    <p class="body-1">{{ customer.address}}</p>
                </v-col>

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">COUNTRY</p>
                    <p class="body-1">{{ customer.country}}</p>
                </v-col>

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">REGION</p>
                    <p class="body-1">{{ customer.region}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">CITY</p>
                    <p class="body-1">{{ customer.city}}</p>
                </v-col>

            </v-row>
    
            <v-row  class="mt-3 mx-auto mb-3" v-show="customer_type === 'Company'">
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

        <v-card flat class="mt-3 mx-auto mb-3" color="#F5FAFF">
            <v-row  class="px-3">
                <p class="grey--text title ">Attachments</p>
            </v-row>
        </v-card>

        <v-card flat class="mt-3 mx-auto mb-3" color="white">

            <v-row>
                <v-col cols=12 md=4 v-show="customer_type === 'Personal'">
                    <p class="primary--text body-1 mb-2">IDENTITY CARD</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <div 
                                    v-show="(id_extension === 'jpg') || (id_extension === 'jpeg')|| (id_extension === 'png')" 
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
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4 v-show="customer_type === 'Personal'">

                    <p class="primary--text body-1 mb-2"> TIN CERTIFICATE</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
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
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                        </v-row>
                   
                    </v-card>

                </v-col>

                <v-col cols=12 md=4 v-show="customer_type === 'Company'">
                    <p class="primary--text body-1 mb-2">CERTIFICATE OF REGISTRATION</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
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
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4 v-show="customer_type === 'Company'">

                    <p class="primary--text body-1 mb-2"> TAX PAYER IDENTIFICATION DOCUMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <div 
                                    v-show="(tax_payer_extension === 'jpg') || (tax_payer_extension === 'jpeg')|| (tax_payer_extension === 'png')" 
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
                        </v-row>
                   
                    </v-card>

                </v-col>

                <v-col cols=12 md=4>

                    <p class="primary--text body-1 mb-2"> BANK STATEMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <div 
                                    v-show="(bank_statement_extension === 'jpg') || (bank_statement_extension === 'jpeg')|| (bank_statement_extension === 'png')" 
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
                        </v-row>
                    </v-card>

                </v-col>
            </v-row>

            <v-row v-show="customer_type === 'Company'">

                <v-col cols=12 md=4 >
                    <p class="primary--text body-1 mb-2">VAT CERTIFICATE</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <div 
                                    v-show="(vat_extension === 'jpg') || (vat_extension === 'jpeg')|| (vat_extension === 'png')" 
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
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4>

                    <p class="primary--text body-1 mb-2"> BUSINESS LICENCE DOCUMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <div 
                                    v-show="(licence_extension === 'jpg') || (licence_extension === 'jpeg')|| (licence_extension === 'png')" 
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
                        </v-row>
                   
                    </v-card>

                </v-col>
            </v-row>

        </v-card>
        <v-card col flat width="1000" class="mx-auto mb-10" color="#F5FAFF">
            <v-row justify="center">
                <v-spacer></v-spacer>
            
                <!--<v-btn color="primary white--text">VERIFY</v-btn>-->
                <v-dialog              
                    v-model="dialog"
                    width="600"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                            small 
                            elevation="flat" 
                            color="#4169E1" 
                            class="white--text"
                            v-on="on"
                        >
                                  Verify
                        </v-btn>
                    </template>

                    <v-card>

                        <v-card-title
                            class="body-3 grey lighten-2"
                              
                        >
                            Are you want to Verify this Customer?
                        </v-card-title>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                            >
                                No
                            </v-btn>
                            <v-btn
                                color="primary"
                                text
                                @click="verifyCustomer()"
                            >
                                Yes
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>



            </v-row>
        </v-card>
        
    </v-container>
  
</template>

<script>
import axios from 'axios'
// import Message from '@/components/Message.vue'
import PDFDocument from '@/components/PDFDocument'
import {mapActions} from 'vuex'

export default {
    name: 'AgentVerifying',

    //components:{Message},

    data () {
        return {
           
            customer:[],

            display_alert: false,

            customer_type:'',

            alert:'',

            has_photo: false,

            dialog: false,

            url:'',
            pdf:false,
            pdfOverlay:false,

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

      }
      
    },

    components:{PDFDocument},

    methods:{

        ...mapActions(['setAdminAlert']),

        getFileName(url){

            let position = url.lastIndexOf('/');

            let extracted_string = url.slice(position + 1, url.length + 1);

            return extracted_string;

        },

        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

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

          getFileExtension(url){

            let position = url.lastIndexOf('.');

            let extracted_string = url.slice(position + 1, url.length + 1);

            return extracted_string;

        },

        verifyCustomer(){

            this.dialog = false;

            const url = `http://207.180.215.239:8181/api/v1/customers/verify/${this.customer.email}`;

            axios.post(url).then((response) => 
            {
                               
                    //eslint-disable-next-line no-console
                    //console.log(response.data.objects[i].industry_name);

                    if(response.data.genralErrorCode === 8000)
                    {
                        this.$store.dispatch('setSnackbar',{
                            text: response.data.message,
                            color: 'success'
                        });

                       this.$router.push('/admin');

                       //this.$router.go('/admin');

                    } else if(response.data.genralErrorCode === 8004){

                        this.display_alert = false;

                        this.alert = response.data.message;

                        this.display_alert = true;

                        document.getElementById('app').scrollIntoView();
                    }

                }).catch(()=>
      
                {

                    /*vm.alert = "Error occured. Please try again";

                    vm.display_alert = true;

                    document.getElementById('app').scrollIntoView();*/                      
                });
        },

        forceFileDownload(response){

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
    },
},

    beforeRouteEnter(to,from,next){
        next(vm=>{

              

                const customer = `http://207.180.215.239:8181/api/v1/customers/${vm.$route.params.id}`;

                 axios.get(customer).then((response) => 
                {
                               
                    //eslint-disable-next-line no-console
                    //console.log(response.data.objects[i].industry_name);

                           //eslint-disable-next-line no-console
                    console.log("after searching customer");

                    if(response.data.genralErrorCode === 8000)
                    {
                         //eslint-disable-next-line no-console
                    console.log("operating successfully::::searching customer");

                        vm.customer = response.data.objects;

                        const customer_type = `http://207.180.215.239:8181/api/v1/customer_types/${vm.customer.customer_type}`;

                        axios.get(customer_type).then((response)=>{

                            if(response.data.genralErrorCode === 8000){

                                vm.display_alert = false;

                                vm.customer_type = response.data.objects.customer_type;


                                if(vm.customer_type == "Personal")
                                {

                                /*if(vm.customer.profile_photo.length > 0)
                                    vm.has_photo = true;*/

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

                                else if(vm.customer_type == "Company")
                                {
                                 /*if(vm.agent.company_logo.length > 0)
                                    vm.has_photo = true;*/

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

                            //eslint-disable-next-line no-console
                            console.log("operation failed::::searching customer_type");

                        });
                       
                       
                        } else if(response.data.genralErrorCode === 8004){

                            vm.display_alert = false;

                            vm.alert = response.data.message;

                            vm.display_alert = true;

                            document.getElementById('app').scrollIntoView();
                        }

                }).catch(()=>
      
                {

                    /*vm.alert = "Error occured. Please try again";

                    vm.display_alert = true;

                    document.getElementById('app').scrollIntoView();*/                      
                });

            
            next();
        });
    }
}
</script>

<style>

</style>