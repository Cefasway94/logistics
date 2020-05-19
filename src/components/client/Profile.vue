<template>

    <v-container class="mt-12 px-5" color="#F5FAFF" fluid>

        <div v-if="overlay" class="large-preview">
                
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

        <AlertError v-if="display_alert" v-bind:message="alert"/>

        <v-card flat class="mt-10 mx-auto mb-2" color="#F5FAFF">

            <v-row  class="px-3">

                <p class="grey--text title ">Profile Info</p>
               
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

            <v-row v-show="customer_type === 'Personal'">

                <v-col cols=12 md=4>
                    <p class="primary--text body-1 mb-2">PROFILE PHOTO</p>
                    <v-card width="200" height="150" outlined>
                        <v-row>
                            <v-col>

                                    <div 
                                        v-show="(profile_photo_extension === 'jpg') || (profile_photo_extension === 'png')"
                                        @click="largePreview(profile_photo_url)"
                                    >
                                        <img :src="profile_photo_url" width=200 height=150/>
                                    </div>
                               
                                    <div v-show="profile_photo_extension === 'pdf'">

                                        <v-btn 
                                            :block="true"
                                            icon class="mt-7" 
                                            @click="openTab(profile_photo_url)"
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
                                    v-show="(id_extension === 'jpg') || (id_extension === 'png')" 
                                    @click="largePreview(id_url)"
                                >
                                    <img :src="id_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="id_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(id_url)"
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
                                    v-show="(tin_extension === 'jpg') || (tin_extension === 'png')" 
                                    @click="largePreview(tin_url)"
                                >
                                    <img :src="tin_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="tin_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(tin_url)"
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
                    <p class="primary--text body-1 mb-2">CERTIFICATE OF REGISTRATION</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col>
                                <div 
                                    v-show="(copy_of_registration_extension === 'jpg') || (copy_of_registration_extension === 'png')" 
                                    @click="largePreview(copy_of_registration_url)"
                                >
                                    <img :src="copy_of_registration_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="copy_of_registration_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(copy_of_registration_url)"
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
                                    v-show="(tax_payer_extension === 'jpg') || (tax_payer_extension === 'png')" 
                                    @click="largePreview(tax_payer_url)"
                                >
                                    <img :src="tax_payer_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="tax_payer_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(tax_payer_url)"
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
                                    v-show="(licence_extension === 'jpg') || (licence_extension === 'png')" 
                                    @click="largePreview(licence_url)"
                                >
                                    <img :src="licence_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="licence_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(licence_url)"
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

                <v-col cols=12 md=6 >
                    <p class="primary--text body-1 mb-2">VAT CERTIFICATE</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col >
                                <div 
                                    v-show="(vat_extension === 'jpg') || (vat_extension === 'png')" 
                                    @click="largePreview(vat_url)"
                                >
                                    <img :src="vat_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="vat_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(vat_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=6>

                    <p class="primary--text body-1 mb-2"> BANK STATEMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col >
                                <div 
                                    v-show="(bank_statement_extension === 'jpg') || (bank_statement_extension === 'png')" 
                                    @click="largePreview(bank_statement_url)"
                                >
                                    <img :src="bank_statement_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="bank_statement_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(bank_statement_url)"
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
                    :to="'/client/updateprofile'"
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

export default {
    name: 'Profile',

    components:{AlertError},

    data () {
        return {
           
           customer:[],

           display_alert: false,

           customer_type:'',

           alert:'',

           has_photo: false,

           dialog: false,

           overlay:false,

           tin_extension:'',
           profile_photo_extension:'',
           id_extension:'',

           copy_of_registration_extension:'',
           tax_payer_extension:'',
           vat_extension:'',
           licence_extension:'',
           bank_statement_extension:'',

           tin_url:'',
           profile_photo_url:'',
           id_url:'',
           copy_of_registration_url:'',
           tax_payer_url:'',
           vat_url:'',
           licence_url:'',
           bank_statement_url:''
      }
      
    },

    methods:{

        openTab(url){

            window.open(url);
        },

        largePreview(src){

            this.overlay = !this.overlay

            var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var large_thumbnail = document.getElementById('large_thumbnail');
               
                    large_thumbnail.src = dataURL;
                   
                }

            reader.readAsDataURL(src);
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

                                         if(vm.customer.copy_of_identity_card !== null || vm.customer.copy_of_identity_card !== "null")
                                         {
                                             vm.id_extension = vm.getFileExtension(vm.customer.copy_of_identity_card[0]);
                                             vm.id_url = vm.customer.copy_of_identity_card[0];
                                         }
                                            

                                         if(vm.customer.copy_of_tax_identification_number_certificate !== null ||  vm.customer.copy_of_tax_identification_number_certificate !== "null")
                                         {
                                             vm.tin_extension = vm.getFileExtension(vm.customer.copy_of_tax_identification_number_certificate[0]);
                                             vm.tin_url = vm.customer.copy_of_tax_identification_number_certificate[0];
                                         }
                                            

                                         if(vm.customer.profile_photo !== null ||  vm.customer.profile_photo !== "null")
                                         {
                                             vm.profile_photo_extension = vm.getFileExtension(vm.customer.profile_photo[0]);
                                             vm.profile_photo_url = vm.customer.profile_photo[0];
                                         }
                                             

                                    } 
                                    else if(vm.customer_type === "Company"){

                                        if(vm.customer.certificate_of_registration !== null || vm.customer.certificate_of_registration !== "null")
                                        {
                                            vm.copy_of_registration_extension = vm.getFileExtension(vm.customer.certificate_of_registration[0]);
                                            vm.copy_of_registration_url = vm.customer.certificate_of_registration[0];
                                        }
                                            
                                         if(vm.customer.tax_payer_identification_document !== null ||  vm.customer.tax_payer_identification_document !== "null")
                                         {
                                             vm.tax_payer_extension = vm.getFileExtension(vm.customer.tax_payer_identification_document[0]);
                                             vm.tax_payer_url = vm.customer.tax_payer_identification_document[0];
                                         }
                                            
                                         if(vm.customer.vat_certificate !== null ||  vm.customer.vat_certificate !== "null")
                                         {
                                             vm.vat_extension = vm.getFileExtension(vm.customer.vat_certificate[0]);
                                             vm.vat_url = vm.customer.vat_certificate[0];
                                         }
                                             
                                        
                                        if(vm.customer.business_licence_document !== null || vm.customer.business_licence_document !== "null")
                                        {
                                            vm.licence_extension = vm.getFileExtension(vm.customer.business_licence_document[0]);

                                            vm.licence_url = vm.customer.business_licence_document[0];
                                        }
                                            

                                         if(vm.customer.three_months_bank_statement !== null ||  vm.customer.three_months_bank_statement !== "null")
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