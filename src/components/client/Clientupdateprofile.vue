<template>

        <v-container class=" mt-10 px-5">

            <v-card row flat width="1300" class="mt-10 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3">
                    <h3 class="headline mt-1 font-weight-regular">Profile info</h3>

                    <!--<v-spacer></v-spacer>
                    <v-btn width="100" color="#4169E1" class="white--text">Edit</v-btn>-->

                </v-flex>
            </v-card>

             <v-card row flat width="1300" class="mt-10 mx-auto" color="#F5FAFF">
                <v-flex row class="">
                    <v-icon color="grey" class="mb-4 ml-3 mr-5">person_outline</v-icon>
                    <p class="grey--text title ">Client type</p>
                </v-flex>
            </v-card>

            <v-card width="1300" class="mx-auto mb-5 d-flex pa-3" color="">
                <v-flex row xs12>
                     <v-select 
                        class="mx-6" 
                        style="color:#4169E1;"
                        v-model = "client_type" 
                        :items="client_types" 
                        color="#4169E1" 
                        label="Select your type" 
                        clearable 
                    >
                    </v-select>
                </v-flex>
            </v-card>

             <v-card row flat width="1300" class="mt-10 mx-auto" color="#F5FAFF" v-if="client_details">
                <v-flex row class="">
                    <v-icon color="grey" class="mb-4 ml-3 mr-5">person_outline</v-icon>
                    <p class="grey--text title ">Client details</p>
                </v-flex>
            </v-card>
            
            <v-card class="mx-auto mb-5 d-flex pa-3" color="" v-if="client_details">
                
                <v-flex column>

                    <v-flex class="px-1 pt-3">
                        <p  style="color:#4169E1;" class=" body-1 font-weight-bold text-uppercase"> about client</p>
                    </v-flex>

                    <v-flex row class="pr-3 pl-5">

                        <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Personal'">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">First Name </p>
                            <v-text-field clearable  outlined v-model="first_name"></v-text-field>
                        </v-flex>

                        <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Personal'">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Last Name </p>
                            <v-text-field clearable outlined v-model="last_name"></v-text-field>
                        </v-flex>

                         <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Company'">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Company Name </p>
                            <v-text-field clearable outlined v-model="company_name"></v-text-field>
                        </v-flex>

                        <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Company'">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Company Sector </p>
                            <v-text-field clearable outlined v-model="company_sector"></v-text-field>
                        </v-flex>

                        <!--<v-flex column xs12 sm4 class="px-2">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> location </p>
                            <v-text-field clearable outlined></v-text-field>
                        </v-flex>-->

                        <!--<v-flex row xs12 sm4 md4 lg2 xl2 class="pl-3">

                            <v-flex column xs6 sm6 md6 class="px-1">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> gender </p>
                                <v-text-field clearableclearable  outlined></v-text-field>
                            </v-flex>

                            <v-flex column xs6 sm6 md6 class="px-1">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> age </p>
                                <v-text-field clearable outlined></v-text-field>
                            </v-flex>
                        </v-flex>-->

                    </v-flex>

                    <v-flex class="px-1 ">
                        <p  style="color:#4169E1;" class=" body-1 font-weight-bold text-uppercase"> contacts</p>
                    </v-flex>

                    <v-flex row class="pr-3 pl-5">
               
                        <v-flex row>
                            <v-flex column xs12 sm6 class="px-2">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Mobile number </p>
                                <v-text-field clearable outlined v-model="mobile_number"></v-text-field>
                            </v-flex>

                            <v-flex column xs12 sm6 class="px-2">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Office mobile</p>
                                <v-text-field clearable outlined v-model="office_mobile"></v-text-field>
                            </v-flex>
                        </v-flex>

                        <v-flex row>
                               <v-flex column xs12 sm4 class="px-2" v-show="client_type == 'Company'">
                                    <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Contact person name </p>
                                    <v-text-field clearable outlined v-model="contact_person_names"></v-text-field>
                                </v-flex>

                                <v-flex column xs12 sm4 class="px-2" v-show="client_type == 'Company'">
                                    <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Contact person number </p>
                                    <v-text-field clearable outlined v-model="Contact_person_phone_number"></v-text-field>
                                </v-flex>

                                 <v-flex column xs12 sm4 class="px-2" v-show="client_type == 'Company'">
                                    <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> contact person designation </p>
                                    <v-text-field clearable outlined v-model="Contact_person_designation"></v-text-field>
                                </v-flex>


                        </v-flex>
                    
                    </v-flex>

                    <v-flex class="px-1 pt-3">
                        <p  style="color:#4169E1;" class=" body-1 font-weight-bold text-uppercase"> location</p>
                    </v-flex>

                    <v-flex row class="pl-2">
               
                        <v-flex column xs12 sm4 class="px-2">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> country </p>
                            <v-text-field clearable outlined v-model="country"></v-text-field>
                        </v-flex>

                        <v-flex column xs12 sm4 class="px-2">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> city </p>
                            <v-text-field clearable outlined v-model="city"></v-text-field>
                        </v-flex>

                        <v-flex column xs12 sm4 class="px-2">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> region </p>
                            <v-text-field clearable outlined v-model="region"></v-text-field>
                        </v-flex>

                        <v-flex column xs12 class="px-2">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">P.o box </p>
                            <v-text-field clearable outlined v-model="address"></v-text-field>
                        </v-flex>
                                
                    </v-flex>

                </v-flex>
            </v-card>

            <v-card row flat width="1300" class="mt-12 mx-auto" color="#F5FAFF" v-if="bank_details">
                <v-flex row class="">
                    <v-icon color="grey" large class=" ml-3 mr-5 pb-3">supervisor_account</v-icon>
                    <p class="grey--text title ">Bank Details</p>
                </v-flex>
            </v-card>

            <v-card class="mx-auto mb-5 d-flex pa-3" color="" v-if="bank_details">
                
                <v-flex column>

                    <v-flex row class="pr-3 pl-5">

                        <v-flex column xs12 sm6 class="px-2">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Bank account name </p>
                            <v-text-field clearable outlined v-model="bank_acount_name"></v-text-field>
                        </v-flex>

                        <v-flex column xs12 sm6 class="px-2">
                            <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Bank account number </p>
                            <v-text-field clearable outlined v-model="bank_account_number"></v-text-field>
                        </v-flex>

                    </v-flex>

                    <v-flex row class="pr-3 pl-5">
               
                        <v-flex row>
                            <v-flex column xs12 sm6 class="px-2">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Second bank account name </p>
                                <v-text-field clearable outlined v-model="second_bank_account_name"></v-text-field>
                            </v-flex>

                            <v-flex column xs12 sm6 class="px-2">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Second bank account number</p>
                                <v-text-field clearable outlined v-model="second_bank_account_number"></v-text-field>
                            </v-flex>
                        </v-flex>

                    </v-flex>

                     <v-flex row class="pr-3 pl-5">
               
                        <v-flex row>
                            <v-flex column xs12 sm6 class="px-2">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Bank swift code</p>
                                <v-text-field clearable outlined v-model="bank_swift_code"></v-text-field>
                            </v-flex>

                            <v-flex column xs12 sm6 class="px-2">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Bank address</p>
                                <v-text-field clearable outlined v-model="bank_address"></v-text-field>
                            </v-flex>
                        </v-flex>

                    </v-flex>
                </v-flex>
            </v-card>

           <v-card row flat width="1300" class="mt-12 mx-auto" color="#F5FAFF" v-show="documents">
                <v-flex row class="">
                    <v-icon color="grey" large class=" ml-3 mr-5 pb-3">supervisor_account</v-icon>
                    <p class="grey--text title ">Attachments</p>
                </v-flex>
            </v-card>

            <v-card  class="mx-auto pa-3" v-show="documents">

                    <v-row class="pa-3" v-if="client_type == 'Personal'">
                        <v-col cols=12 sm=4 class="">

                            <p class="primary--text body-2 text-uppercase mb-0"> PROFILE PHOTO </p>

                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Photo input" 
                                    id="profilePhoto" 
                                    @change="updateProfilePhoto()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >

                                </v-file-input>
                            </v-card>
                       
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> COPY OF IDENTITY CARD </p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="ID" 
                                    id="copy_of_id" 
                                    @change="updateID()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >

                                </v-file-input>
                            </v-card>
                       
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> COPY OF TIN CERTIFICATE</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Tin certificate" 
                                    id="personal_tin"
                                    @change="personalTinUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col>               
                    </v-row>

                    <v-row class="pa-3" v-if="client_type == 'Company'">
                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> COMPANY LOGO </p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="company logo" 
                                    id="company_logo" 
                                    @change="companyLogoUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >

                                </v-file-input>
                            </v-card>
                       
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> CERTIFICATE OF REGISTRATION</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Registration certificate" 
                                    id="registration_certificate"
                                    @change="registrationCertificateUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0">TIN DOCUMENT</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Tin document" 
                                    id="tin_document"
                                    @change="tinDocumentUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col>              
                    </v-row>

                    <v-row class="pa-3" v-if="client_type == 'Company'">
                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> VAT CERTIFICATE </p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="vat certificate" 

                                    id="vat_certificate" 
                                    @change="vatCertificateUploaded()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >

                                </v-file-input>
                            </v-card>
                       
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> BUSINESS LICENCE</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Business licence" 
                                    id="business_licence"
                                    @change="businessLicenceUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> THREE MONTHS BANK STATEMENT</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Bank statement" 
                                    id="bank_statement"
                                    @change="bankStatementUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col>              
                    </v-row>

                </v-card>

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
                    <v-btn color="primary white--text" type="submit" @click="save" :disabled="loading">Save</v-btn>
                </v-row>
            </v-card>

        </v-container>   
</template>

<script>
import axios from 'axios'
export default {

    data: ()=>({
        client_types:[],

        client_type:'Personal',

        client_details: true,

        bank_details: false,

        documents: false,

        first_name:'',
        last_name:'',
        country:'',
        mobile_number:'',
        office_mobile:'',
        address:'',
        bank_acount_name:'',
        bank_account_number:'',
        second_bank_account_name:'',
        second_bank_account_number:'',
        bank_swift_code:'',
        bank_address:'',
        customer_type:'',
        contact_person_names:'',
        Contact_person_phone_number:'',
        Contact_person_designation:'',
        company_sector:'',
        company_name:'',
        city:'',
        region:'',

        company_logo:[],
        certificate_of_registration:[],
        tax_payer_identification_document:[],
        vat_certificate:[],
        business_licence_document:[],
        three_months_bank_statement:[],
        
        profile_photo:[],
        copy_of_identity_card:[],
        copy_of_tax_identification_number_certificate:[],

        loading: false,

    }),

    methods: {


        bankStatementUpdated(){
            this.three_months_bank_statement.push(document.getElementById("bank_statement").files[0]);
        },

        businessLicenceUpdated(){
            this.business_licence_document.push(document.getElementById("business_licence").files[0]);
        },

        vatCertificateUploaded(){
            this.vat_certificate.push(document.getElementById("vat_certificate").files[0]);
        },

        tinDocumentUpdated(){
            this.tax_payer_identification_document.push(document.getElementById("tin_document").files[0]);
        },

        registrationCertificateUpdated(){
            this.certificate_of_registration.push(document.getElementById("registration_certificate").files[0]);
        },

        companyLogoUpdated(){
            this.company_logo.push(document.getElementById("company_logo").files[0]);
        },

        personalTinUpdated(){

            this.copy_of_tax_identification_number_certificate.push(document.getElementById("personal_tin").files[0]);
        },

        updateID(){

            this.copy_of_identity_card.push(document.getElementById("copy_of_id").files[0]);
        },

        updateProfilePhoto(){

            this.profile_photo.push(document.getElementById("profilePhoto").files[0]);
        },

        createData(){

            if(this.bank_details){

                let formData = new FormData();

                if(this.client_type == "Personal"){

                    formData.append('first_name',this.first_name);
                    formData.append('last_name',this.last_name);
                }
                
                formData.append('country',this.country);
                formData.append('city',this.city);
                formData.append('region',this.region);
                formData.append('mobile_number',this.mobile_number);
                formData.append('office_mobile',this.office_mobile);
                formData.append('address',this.address);
                formData.append('customer_type',this.client_type);

                if(this.client_type == "Company"){

                    formData.append('contact_person_names',this.contact_person_names);
                    formData.append('Contact_person_phone_number',this.Contact_person_phone_number);
                    formData.append('Contact_person_designation',this.Contact_person_designation);
                    formData.append('company_sector',this.company_sector);
                    formData.append('company_name',this.company_name);
                }

                formData.append('customer_type',this.client_type);
                formData.append('bank_acount_name',this.bank_acount_name);
                formData.append('bank_account_number',this.bank_account_number);
                formData.append('second_bank_account_name',this.second_bank_account_name);
                formData.append('second_bank_account_number',this.second_bank_account_number);
                formData.append('bank_swift_code',this.bank_swift_code);
                formData.append('bank_address',this.bank_address);
               
                return formData;

            } else if(this.client_details){

                let formData = new FormData();

                if(this.client_type == "Personal"){

                    formData.append('first_name',this.first_name);
                    formData.append('last_name',this.last_name);
                }
                
                formData.append('country',this.country);
                formData.append('city',this.city);
                formData.append('region',this.region);
                formData.append('mobile_number',this.mobile_number);
                formData.append('office_mobile',this.office_mobile);
                formData.append('address',this.address);
                formData.append('customer_type',this.client_type);

                if(this.client_type == "Company"){

                    formData.append('contact_person_names',this.contact_person_names);
                    formData.append('Contact_person_phone_number',this.Contact_person_phone_number);
                    formData.append('Contact_person_designation',this.Contact_person_designation);
                    formData.append('company_sector',this.company_sector);
                    formData.append('company_name',this.company_name);
                }
               
               return formData;
              

            } else if(this.documents){

                let formData = new FormData();

                if(this.client_type == "Company"){

                   
                    formData.append('certificate_of_registration[0]',this.certificate_of_registration[0]);
                    formData.append('tax_payer_identification_document[0]',this.tax_payer_identification_document[0]);
                    formData.append('vat_certificate[0]',this.vat_certificate[0]);
                    formData.append('business_licence_document[0]',this.business_licence_document[0]);
                    formData.append('three_months_bank_statement[0]',this.three_months_bank_statement[0]);
                    formData.append('company_logo[0]',this.company_logo[0]);


                } else if(this.client_type == "Personal"){

                    formData.append('copy_of_identity_card[0]',this.copy_of_identity_card[0]);
                    formData.append('copy_of_tax_identification_number_certificate[0]',this.copy_of_tax_identification_number_certificate[0]);
                    formData.append('profile_photo[0]',this.profile_photo[0]);
   
                }

                 

                return formData;

            }
        },

        save(){

            this.loading = true;

            let formData = this.createData();

            if(this.documents){

                const url = `http://207.180.215.239:8181/api/v1/customers/upload/${this.$route.params.id}`;

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
                                    //this.alert = response.data.message;
                                    //eslint-disable-next-line no-console
                                        console.log("There is an error");
                                }
                                else if(response.data.genralErrorCode == 8000){

                                    //this.AddTender(response.data.objects);

                                    //this.setAlert(response.data.message);

                                    this.$router.push('/client');

                                    //eslint-disable-next-line no-console
                                    console.log(response.data);

                                    
                                }

                                //eslint-disable-next-line no-console
                                //console.log(response.data);

                            }).catch(()=>{

                                //eslint-disable-next-line no-console
                                console.log("error occured");

                                /*this.setAlert("Erro occured. Please try again");

                                this.alert = this.getAlert();

                                this.$router.push('/client/createtender');*/
                            }); 

            } else {

                const url = `http://207.180.215.239:8181/api/v1/customers/${this.$route.params.id}`;
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
                                    //this.alert = response.data.message;
                                    //eslint-disable-next-line no-console
                                        console.log("There is an error");
                                }
                                else if(response.data.genralErrorCode == 8000){

                                    //this.AddTender(response.data.objects);

                                    //this.setAlert(response.data.message);

                                    //this.$router.push('/client');

                                    //eslint-disable-next-line no-console
                                    console.log(response.data);

                                    if(this.client_details){

                                        this.client_details = false;

                                        this.bank_details = true;

                                    } else if(this.bank_details){

                                        this.bank_details = false;

                                        this.documents = true;

                                    } 
                                }

                                //eslint-disable-next-line no-console
                                //console.log(response.data);

                            }).catch(()=>{

                                //eslint-disable-next-line no-console
                                console.log("error occured");

                                /*this.setAlert("Erro occured. Please try again");

                                this.alert = this.getAlert();

                                this.$router.push('/client/createtender');*/
                            }); 

            }
            


        }

    },


    beforeRouteEnter(to, from, next){
        next(vm => {

             axios.get(`http://207.180.215.239:8181/api/v1/customer_types/`).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                               //vm.client_types = response.data.objects;

                                for(let i=0; i< response.data.objects.length; i++)
                                     vm.client_types.push(response.data.objects[i].customer_type);
                                     //vm.client_types = response.data.objects;

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)

                            });

            axios.get(`http://207.180.215.239:8181/api/v1/customers/fetch?email=${vm.$route.params.id}`).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)

                               //eslint-disable-next-line no-console
                               //console.log(vm.$route.params.id);

                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                              
                               //vm.client_types = response.data.objects;

                               vm.first_name = response.data.objects.first_name;
                               vm.last_name = response.data.objects.last_name;
                               vm.country = response.data.objects.country;
                               vm.mobile_number = response.data.objects.mobile_number;
                               vm.office_mobile = response.data.objects.office_mobile;
                               vm.address = response.data.objects.address;
                               vm.bank_acount_name = response.data.objects.bank_acount_name;
                               vm.bank_account_number = response.data.objects.bank_account_number;
                               vm.second_bank_account_name = response.data.objects.second_bank_account_name;
                               vm.second_bank_account_number = response.data.objects.second_bank_account_number;
                               vm.bank_swift_code = response.data.objects.bank_swift_code;
                               vm.bank_address = response.data.objects.bank_address;
                               vm.customer_type = response.data.objects.customer_type;
                               vm.contact_person_names = response.data.objects.contact_person_names;
                               vm.Contact_person_phone_number  = response.data.objects.Contact_person_phone_number;
                               vm.Contact_person_designation = response.data.objects.Contact_person_designation;
                               vm.company_sector = response.data.objects.company_sector;
                               vm.company_name = response.data.objects.company_name;
                               vm.city = response.data.objects.city;
                               vm.region = response.data.objects.region;

                               /*vm.company_logo = response.data.objects.company_logo;
                               vm.certificate_of_registration = response.data.objects.certificate_of_registration;
                               vm.tax_payer_identification_document = response.data.objects.tax_payer_identification_document;
                               vm.vat_certificate = response.data.objects.vat_certificate;
                               vm.business_licence_document = response.data.objects.business_licence_document;
                               vm.three_months_bank_statement = response.data.objects.three_months_bank_statement;
                               vm.profile_photo = response.data.objects.profile_photo;
                               vm.copy_of_identity_card = response.data.objects.copy_of_identity_card;
                               vm.copy_of_tax_identification_number_certificate = response.data.objects.copy_of_tax_identification_number_certificate;*/
                               
                               //vm.client_types = response.data.objects;

                            }).catch(()=>{

                                //eslint-disable-next-line no-console
                                console.log("request failed");


                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });

                            

            next();
        });
    }
}
</script>