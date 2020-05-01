<template>

    <v-container class="mt-12 px-5" color="#F5FAFF" fluid>

        <AlertError v-if="display_alert" v-bind:message="alert"/>

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
                    <p class="primary--text body-1 mb-2">BANK ADDRESS</p>
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
                            <v-col offset="4">
                                <v-btn x-large icon class="mt-7" @click="downloadIdentityCard()">
                                    <v-icon x-large>mdi-file-download</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4 v-show="customer_type === 'Personal'">

                    <p class="primary--text body-1 mb-2"> TIN CERTIFICATE</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col offset="4">
                                <v-btn x-large icon class="mt-7" @click="downloadCertificate()">
                                    <v-icon x-large>mdi-file-download</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                   
                    </v-card>

                </v-col>

                <v-col cols=12 md=4 v-show="customer_type === 'Company'">
                    <p class="primary--text body-1 mb-2">CERTIFICATE OF REGISTRATION</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col offset="4">
                                <v-btn x-large icon class="mt-7" @click="downloadRegistrationCertificate()">
                                    <v-icon x-large>mdi-file-download</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4 v-show="customer_type === 'Company'">

                    <p class="primary--text body-1 mb-2"> TAX PAYER IDENTIFICATION DOCUMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col offset="4">
                                <v-btn x-large icon class="mt-7" @click="downloadTaxPayerDocument()">
                                    <v-icon x-large>mdi-file-download</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                   
                    </v-card>

                </v-col>

                <v-col cols=12 md=4>

                    <p class="primary--text body-1 mb-2"> BANK STATEMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col offset="4">
                                <v-btn x-large icon class="mt-7" @click ="downloadBankStatement()">
                                    <v-icon x-large>mdi-file-download</v-icon>
                                </v-btn>
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
                            <v-col offset="4">
                                <v-btn x-large icon class="mt-7" @click="downloadVATCertificate()">
                                    <v-icon x-large>mdi-file-download</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols=12 md=4>

                    <p class="primary--text body-1 mb-2"> BUSINESS LICENCE DOCUMENT</p>
                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col offset="4">
                                <v-btn x-large icon class="mt-7" @click="downloadBusinessLicence()">
                                    <v-icon x-large>mdi-file-download</v-icon>
                                </v-btn>
                            </v-col>
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
import AlertError from '@/components/AlertError.vue'

export default {
    name: 'AgentVerifying',

    components:{AlertError},

    data () {
        return {
           
           customer:[],

           display_alert: false,

           customer_type:'',

           alert:'',

           has_photo: false,

           dialog: false,

           url:'https://78.media.tumblr.com/tumblr_m39nv7PcCU1r326q7o1_500.png',

      }
      
    },

    methods:{

        getFileName(url){

            let position = url.lastIndexOf('/');

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
                       this.display_alert = false;

                       this.$router.push('/admin');

                       this.$router.go('/admin');

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

                    if(response.data.genralErrorCode === 8000)
                    {
                        vm.customer = response.data.objects;

                        const customer_type = `http://207.180.215.239:8181/api/v1/customer_types/${vm.customer.customer_type}`;

                        axios.get(customer_type).then((response)=>{

                            if(response.data.genralErrorCode === 8000){

                                vm.display_alert = false;

                                vm.customer_type = response.data.objects.customer_type;

                            } else if(response.data.genralErrorCode === 8004){

                                vm.display_alert = false;

                                vm.alert = response.data.message;

                                vm.display_alert = true;

                                document.getElementById('app').scrollIntoView();
                            }

                        }).catch(()=>{

                        });
                       

                        if(vm.customer_type == "Personal")
                        {
                            if(vm.customer.profile_photo.length > 0)
                                vm.has_photo = true;
                        }
                        else if(vm.customer_type == "Company")
                        {
                            if(vm.agent.company_logo.length > 0)
                                vm.has_photo = true;
                        }

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