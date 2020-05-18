<template>

        <v-container class=" mt-10 px-5">

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

            <v-progress-linear
                :value="percentage"
                class="mt-5 teal lighten-5 progress"
                :rounded="true"
                height="40"
                
            >
            <v-row>
                <v-col 
                    cols="12"
                    md=5 
                    class="white--text font-weight-bold  pr-3 pl-5" 
                > 
                <v-row justify="center">
                     <span>Step 1 </span>
                        <div class="ml-10">
                            <v-btn
                                small
                                rounded
                                color="teal lighten-3"
                            >
                                <v-icon small color="white" v-show="percentage == stage1_percent || percentage > stage1_percent">
                                    mdi-check-outline
                                </v-icon>

                                <v-icon small color="red" v-show="percentage == initial_percent">
                                    mdi-close
                                </v-icon>
                            </v-btn>
                        </div>

                </v-row>
                   
                </v-col>

                <v-col 
                    md=3
                    cols=12
                    class="white--text font-weight-bold pr-3 pl-5"
                > 
                     <v-row justify="center">
                        <span>Step 2 </span>
                        <div class="ml-10">
                            <v-btn
                                small
                                rounded
                                color="teal lighten-3"
                            >
                                <v-icon small color="white" v-show="percentage == stage2_percent || percentage > stage2_percent">
                                    mdi-check-outline
                                </v-icon>

                                <v-icon small color="red" v-show="percentage < stage2_percent">
                                    mdi-close
                                </v-icon>
                            </v-btn>
                        </div>
                    </v-row>
                </v-col>

                <v-col 
                    md=4
                    cols=12 
                    class="white--text font-weight-bold pr-3 pl-5"
                >
                     <v-row justify="center">
                        <span>Step 3 </span>
                        <div class="ml-10">
                            <v-btn
                                small
                                rounded
                                color="teal lighten-3"
                            >
                                <v-icon small color="white" v-show="percentage === stage3_percent">
                                    mdi-check-outline
                                </v-icon>

                                <v-icon small color="red" v-show="percentage < stage3_percent">
                                    mdi-close
                                </v-icon>
                            </v-btn>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
               
            </v-progress-linear>

            <div v-show="showStageOne()">

                <v-card row flat width="1300" class="mt-10 mx-auto mb-5"  color="#F5FAFF">
                    <v-flex row class="px-3">
                        <h3 class="headline mt-1 font-weight-regular">Profile info</h3>

                        <!--<v-spacer></v-spacer>
                        <v-btn width="100" color="#4169E1" class="white--text">Edit</v-btn>-->

                    </v-flex>
                </v-card>
            </div>

            <div v-show="showStageOne()">
                <v-card row flat width="1300" class="mt-10 mx-auto" color="#F5FAFF">
                    <v-flex row class="">
                        <v-icon color="grey" class="mb-4 ml-3 mr-5">person_outline</v-icon>
                        <p class="grey--text title ">Client type  <span class="red--text"><strong>* </strong></span></p>
                    </v-flex>
                </v-card>
            </div>

            <div v-show="showStageOne()">
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
                            :rules="[v => !!v || 'Client type is required']"
                            required
                        >
                        </v-select>
                    </v-flex>
                </v-card>
            </div>

            <div v-show="showStageOne()">
                <v-card row flat width="1300" class="mt-10 mx-auto" color="#F5FAFF">
                    <v-flex row class="">
                        <v-icon color="grey" class="mb-4 ml-3 mr-5">person_outline</v-icon>
                        <p class="grey--text title ">Client details</p>
                    </v-flex>
                </v-card>
            </div>
            
            <div v-show="showStageOne()">
                <v-card class="mx-auto mb-5 d-flex pa-3" color="">
                    
                    <v-flex column>

                        <v-flex class="px-1 pt-3">
                            <p  style="color:#4169E1;" class=" body-1 font-weight-bold text-uppercase"> about client</p>
                        </v-flex>

                        <v-flex row class="pr-3 pl-5">

                            <v-flex row>
                            <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Personal'">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">First Name </p>
                                <v-text-field 
                                    clearable  
                                    outlined v-model="first_name"
                                    :rules="[v => !!v || 'First name is required']"
                                    required
                                >
                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                </v-text-field>
                            </v-flex>

                            <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Personal'">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Last Name </p>
                                <v-text-field 
                                    clearable outlined 
                                    v-model="last_name"
                                    :rules="[v => !!v || 'Last name is required']"
                                    required>

                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                </v-text-field>
                            </v-flex>

                            <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Company'">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Company Name </p>
                                <v-text-field 
                                    clearable 
                                    outlined 
                                    v-model="company_name"
                                    :rules="[v => !!v || 'Company name is required']"
                                    required
                                    >
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                            </v-flex>

                            <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Company'">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Company Sector </p>
                                <v-text-field 
                                    clearable 
                                    outlined 
                                    v-model="company_sector"
                                    :rules="[v => !!v || 'Company sector is required']"
                                    required
                                    >
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>
                                </v-text-field>
                            </v-flex>
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
                                    <v-text-field 
                                        clearable outlined 
                                        v-model="mobile_number"
                                        :rules="[v => !!v || 'Mobile number is required']"
                                        required
                                        >

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                    </v-text-field>
                                </v-flex>

                                <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Company'">
                                    <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Office mobile</p>
                                    <v-text-field 
                                    clearable outlined 
                                    v-model="office_mobile"
                                    :rules="[v => !!v || 'office mobile is required']"
                                    required
                                    >
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                    </v-text-field>
                                </v-flex>

                                <v-flex column xs12 sm6 class="px-2" v-show="client_type == 'Personal'">
                                    <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Office mobile</p>
                                    <v-text-field 
                                    clearable outlined 
                                    v-model="office_mobile"
                                    >

                                    </v-text-field>
                                </v-flex>
                            </v-flex>

                            <v-flex row>
                                <v-flex column xs12 sm4 class="px-2" v-show="client_type == 'Company'">
                                        <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Contact person name </p>
                                        <v-text-field 
                                            clearable outlined 
                                            v-model="contact_person_names"
                                            :rules="[v => !!v || 'Contact person name is required']"
                                            required>

                                                <template #label>
                                                    <span class="red--text"><strong>* </strong></span>
                                                </template>
                                        </v-text-field>
                                    </v-flex>

                                    <v-flex column xs12 sm4 class="px-2" v-show="client_type == 'Company'">
                                        <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Contact person number </p>
                                        <v-text-field 
                                            clearable 
                                            outlined 
                                            v-model="Contact_person_phone_number"
                                            :rules="[v => !!v || 'Contact person number is required']"
                                            required
                                            >

                                                <template #label>
                                                    <span class="red--text"><strong>* </strong></span>
                                                </template>

                                        </v-text-field>
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
                                <!--<v-text-field 
                                    clearable 
                                    outlined 
                                    v-model="country"
                                    :rules="[v => !!v || 'country is required']"
                                    required
                                    >

                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                </v-text-field>-->
                                <v-card :outlined="true" height="57">

                                    <template>
                                        <country-select v-model="country" :countryName="true" :country="country" topCountry="US" className="pl-3 select-control"/>
                                        <!--<region-select v-model="region" :country="country" :region="region" />-->
                                    </template>

                                </v-card>
                            
                            </v-flex>

                            <v-flex column xs12 sm4 class="px-2">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> state/region/city </p>
                                <v-text-field 
                                    clearable 
                                    outlined 
                                    v-model="city"
                                    :rules="[v => !!v || 'city is required']"
                                    required>

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>
                                </v-text-field>
                            </v-flex>

                            <v-flex column xs12 sm4 class="px-2">
                                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">P.o box </p>
                                <v-text-field 
                                    clearable 
                                    outlined 
                                    v-model="address"
                                    :rules="[v => !!v || 'P.o box is required']"
                                    required>

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>
                                </v-text-field>
                            </v-flex>
                                    
                        </v-flex>

                    </v-flex>
                </v-card>
            </div>

            <v-card row flat width="1300" class="mt-12 mx-auto" color="#F5FAFF" v-show="showStageTwo()">
                <v-flex row class="">
                    <v-icon color="grey" large class=" ml-3 mr-5 pb-3">supervisor_account</v-icon>
                    <p class="grey--text title ">Bank Details</p>
                </v-flex>
            </v-card>

            <div v-show="showStageTwo()">
                <v-card class="mx-auto mb-5 d-flex pa-3">
                    
                    <v-flex column>

                        <v-flex row class="pr-3 pl-5">
                            
                            <v-flex row>
                                <v-flex column xs12 sm6 class="px-2">
                                    <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Bank account name </p>
                                    <v-text-field 
                                        clearable 
                                        outlined 
                                        v-model="bank_acount_name"
                                        :rules="[v => !!v || 'account name is required']"
                                        required>

                                            <template #label>
                                                <span class="red--text"><strong>* </strong></span>
                                            </template>

                                    </v-text-field>
                                </v-flex>

                                <v-flex column xs12 sm6 class="px-2">
                                        <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0">Bank account number </p>
                                    <v-text-field 
                                        clearable 
                                        outlined 
                                        v-model="bank_account_number"
                                        :rules="[v => !!v || 'account number is required']"
                                        required
                                    >
                                        <template #label>
                                                <span class="red--text"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-flex>
                            </v-flex>
                            
                        </v-flex>

                        <v-flex row class="pr-3 pl-5">
                
                            <v-flex row>
                                <v-flex column xs12 sm6 class="px-2">
                                    <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> Second bank account name </p>
                                    <v-text-field  clearable outlined v-model="second_bank_account_name"></v-text-field>
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
                                    <v-text-field 
                                        clearable 
                                        outlined 
                                        v-model="bank_swift_code"
                                        :rules="[v => !!v || 'swift code is required']"
                                        required>

                                            <template #label>
                                                <span class="red--text"><strong>* </strong></span>
                                            </template>
                                    </v-text-field>
                                </v-flex>

                                <v-flex column xs12 sm6 class="px-2">
                                    <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> BANK ADDRESS(CITY/REGION)</p>
                                    <v-text-field 
                                        clearable 
                                        outlined 
                                        placeholder="Enter city or region for this bank"
                                        v-model="bank_address"
                                        :rules="[v => !!v || 'address is required']"
                                        required
                                    >
                                        <template #label>
                                                <span class="red--text"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-flex>
                            </v-flex>

                        </v-flex>
                    </v-flex>
                </v-card>
            </div>

            <div v-show="bank_details">
                <v-card row flat width="1300" class="mt-12 mx-auto" color="#F5FAFF">
                        <v-flex row class="">
                            <v-icon color="grey" large class=" ml-3 mr-5 pb-3">supervisor_account</v-icon>
                            <p class="grey--text title ">Attachments</p>
                        </v-flex>
                    </v-card>
            </div>
            
            <div v-show="bank_details">
                <v-card  class="mx-auto pa-3">

                    <v-row class="pa-3" v-show="client_type == 'Personal'">

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> COPY OF IDENTITY CARD  <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="ID" 
                                    id="copy_of_id" 
                                    @change="updateID()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'identity card is required']"
                                    required
                                
                                >

                                </v-file-input>

                                <v-card height="200" width="250" outlined @click="showLargeThumbnail('copy_of_id')">
                                    <img  id="copy_of_id_thumb" class="preview">
                                </v-card>

                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">

                            <p class="primary--text body-2 text-uppercase mb-0"> PROFILE PHOTO </p>

                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="Photo input" 
                                    id="profilePhoto" 
                                    @change="updateProfilePhoto()"
                                    prepend-icon ="mdi-cloud-upload"
                                
                                >

                                </v-file-input>

                                <v-card height="200" width="250" outlined @click="showLargeThumbnail('profilePhoto')">
                                    <img  id="profilePhoto_thumb" class="preview">
                                </v-card>

                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> COPY OF TIN CERTIFICATE </p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="Tin certificate" 
                                    id="personal_tin"
                                    @change="personalTinUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>

                                <v-card height="200" width="250" outlined @click="showLargeThumbnail('personal_tin')">
                                    <img  id="personal_tin_thumb" class="preview">
                                </v-card>
                            </v-card>

                        
                    
                        </v-col>               
                    </v-row>

                    <v-row class="pa-3" v-show="client_type == 'Company'">
                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> COMPANY LOGO </p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="company logo" 
                                    id="company_logo" 
                                    @change="companyLogoUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >

                                </v-file-input>

                                <v-card height="200" width="250" outlined @click="showLargeThumbnail('company_logo')">
                                    <img  id="company_logo_thumb" class="preview">
                                </v-card>
                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> CERTIFICATE OF REGISTRATION <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="Registration certificate" 
                                    id="registration_certificate"
                                    @change="registrationCertificateUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'Registration certificate is required']"
                                    required
                                
                                >
                                </v-file-input>

                                <v-card height="200" width="250" outlined @click="showLargeThumbnail('registration_certificate')">
                                    <img  id="registration_certificate_thumb" class="preview">
                                </v-card>

                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0">TIN DOCUMENT <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="Tin document" 
                                    id="tin_document"
                                    @change="tinDocumentUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'Tin document is required']"
                                    required
                                
                                >
                                </v-file-input>
                                <v-card height="200" width="250" outlined @click="showLargeThumbnail('tin_document')">
                                    <img  id="tin_document_thumb" class="preview">
                                </v-card>
                            </v-card>
                    
                        </v-col>              
                    </v-row>

                    <v-row class="pa-3" v-show="client_type == 'Company'">
                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> VAT CERTIFICATE <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="vat certificate" 

                                    id="vat_certificate" 
                                    @change="vatCertificateUploaded()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'vat certificate is required']"
                                    required
                                
                                >

                                </v-file-input>

                                <v-card height="200" width="250" outlined @click="showLargeThumbnail('vat_certificate')">
                                    <img  id="vat_certificate_thumb" class="preview">
                                </v-card>
                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> BUSINESS LICENCE <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="Business licence" 
                                    id="business_licence"
                                    @change="businessLicenceUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'Business licence is required']"
                                    required
                                
                                >
                                </v-file-input>

                                <v-card height="200" width="250" outlined @click="showLargeThumbnail('business_licence')">
                                    <img  id="business_licence_thumb" class="preview">
                                </v-card>
                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> THREE MONTHS BANK STATEMENT <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="Bank statement" 
                                    id="bank_statement"
                                    @change="bankStatementUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'statement is required']"
                                    required
                                
                                >
                                </v-file-input>
                                <v-card height="200" width="250" outlined @click="showLargeThumbnail('bank_statement')">
                                    <img  id="bank_statement_thumb" class="preview">
                                </v-card>
                            </v-card>
                    
                        </v-col>              
                    </v-row>
                </v-card>
            </div>

            <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
                <v-row class=" pa-3">

                    <v-col cols="3">
                        <v-btn color="primary white--text" :disabled="showStageOne()" @click="setStages()">BACK</v-btn>
                    </v-col>

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
                    <v-btn color="primary white--text" :disabled="!isValid()" @click="save"><span v-show="bank_details">Save</span><span v-show="!bank_details">Next</span></v-btn>
                </v-row>
            </v-card>

        </v-container>   
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default {

    data: ()=>({
        client_types:[],

        client_type:'Personal',

        client_details: false,

        bank_details: false,

        documents: false,

        percentage: 0,

        have_customer_id: false,

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
        overlay: false,

        stage1: false,
        stage2: false,
        stage3: false,

        initial_percent: 0,
        stage1_percent: 40,
        stage2_percent: 70,
        stage3_percent: 100,

     }),

    methods: {

        showStageTwo(){
            if((this.client_details && this.percentage === this.stage1_percent) || this.stage2)
                return true;
            else 
                return false;
        },

        showStageOne(){
            if((this.client_details && this.percentage === this.initial_percent) || this.stage1)
                return true;
            else 
                return false;
        },

        setStages(){

            if(this.bank_details){

                this.stage2 = true;

                this.bank_details = false;

                this.stage1 = false;

                this.stage3 = false;

            } else if(this.stage2 || (this.client_details && this.percentage == this.stage1_percent)){

                this.stage1 = true;

                this.stage2 = false;

                this.client_details = false;

            }
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
            
            if(this.client_type === "Personal"){

                if((this.client_details && this.percentage == this.initial_percent) || this.stage1){

                    if((this.first_name === '' || this.first_name === null)
                        || (this.last_name === '' || this.last_name === null)
                        || (this.mobile_number === '' || this.mobile_number === null)
                        || (this.country === '' || this.country === null)
                        || (this.city === '' || this.city === null)
                        || (this.address === '' || this.address === null)
                    )

                        return false
                    else 
                        return true;

                } else if((this.client_details && this.percentage == this.stage1_percent) || this.stage2)
                {
                    if((this.bank_acount_name === '' ||  this.bank_acount_name === null)
                        || (this.bank_account_number === '' ||  this.bank_account_number === null)
                        || (this.bank_swift_code === ''||  this.bank_swift_code === null)
                        || (this.bank_address === '' ||  this.bank_address === null)
                    )

                        return false
                    else 
                        return true;

                } else if(this.bank_details){

                     //eslint-disable-next-line no-console
                        console.log("length "+this.copy_of_identity_card.length);

                    if(this.copy_of_identity_card.length == 0)

                        return false
                    else 
                        return true;
                }

            } else if(this.client_type === "Company"){

                 if(this.client_details && this.percentage == this.initial_percent){

                     if((this.company_name === '' || this.company_name === null)
                        || (this.company_sector === ''  || this.company_sector === null)
                        || (this.mobile_number === '' || this.mobile_number === null)
                        || (this.office_mobile === ''  || this.office_mobile === null)
                        || (this.contact_person_names ==='' || this.contact_person_names === null)
                        || (this.Contact_person_phone_number === ''  || this.Contact_person_phone_number === null)
                        || (this.country === ''  || this.country === null)
                        || (this.city === ''  || this.city === null)
                        || (this.address === '' || this.address === null)
                        )

                        return false
                    else 
                        return true;

                } else if(this.client_details && this.percentage == this.stage1_percent)
                {
                    if((this.bank_acount_name === '' ||  this.bank_acount_name === null)
                        || (this.bank_account_number === '' ||  this.bank_account_number === null)
                        || (this.bank_swift_code === ''||  this.bank_swift_code === null)
                        || (this.bank_address === '' ||  this.bank_address === null)
                    )

                        return false
                    else 
                        return true;

                } else if(this.bank_details){

                    if(this.certificate_of_registration.length === 0 || this.tax_payer_identification_document.length === 0
                        || this.vat_certificate.length === 0 || this.business_licence_document === 0 
                        || this.three_months_bank_statement ===0)

                        return false
                    else 
                        return true;
                }
            }
        },

        ...mapActions(['setAlert']),

        bankStatementUpdated(){
            

            if(document.getElementById("bank_statement").files[0]){


                this.three_months_bank_statement = [];

                this.three_months_bank_statement.push(document.getElementById("bank_statement").files[0]);

                var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var output = document.getElementById('bank_statement_thumb');

                    var large_thumbnail = document.getElementById('large_thumbnail');
                    
                    if(output !== null)
                        output.src = dataURL;

                    if(large_thumbnail !== null)
                        large_thumbnail.src = dataURL;
                   
                }

                reader.readAsDataURL(document.getElementById("bank_statement").files[0]);
            }
        },

        businessLicenceUpdated(){

            if(document.getElementById("business_licence").files[0]){

                this.business_licence_document = [];

                this.business_licence_document.push(document.getElementById("business_licence").files[0]);

                var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var output = document.getElementById('business_licence_thumb');

                    var large_thumbnail = document.getElementById('large_thumbnail');
                    
                    if(output !== null)
                        output.src = dataURL;

                    if(large_thumbnail !== null)
                        large_thumbnail.src = dataURL;
                   
                }

                reader.readAsDataURL(document.getElementById("business_licence").files[0]);
            }
        },

        vatCertificateUploaded(){

            if(document.getElementById("vat_certificate").files[0]){

                this.vat_certificate = [];

                this.vat_certificate.push(document.getElementById("vat_certificate").files[0]);

                var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var output = document.getElementById('vat_certificate_thumb');

                   var large_thumbnail = document.getElementById('large_thumbnail');
                    
                    if(output !== null)
                        output.src = dataURL;

                    if(large_thumbnail !== null)
                        large_thumbnail.src = dataURL;
                   
                }

                reader.readAsDataURL(document.getElementById("vat_certificate").files[0]);
            }
        },

        tinDocumentUpdated(){

            if(document.getElementById("tin_document").files[0]){

                this.tax_payer_identification_document = [];

                this.tax_payer_identification_document.push(document.getElementById("tin_document").files[0]);

                var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var output = document.getElementById('tin_document_thumb');

                    var large_thumbnail = document.getElementById('large_thumbnail');
                    
                    if(output !== null)
                        output.src = dataURL;

                    if(large_thumbnail !== null)
                        large_thumbnail.src = dataURL;
                   
                }

                reader.readAsDataURL(document.getElementById("tin_document").files[0]);
            }
        },

        registrationCertificateUpdated(){

            if(document.getElementById("registration_certificate").files[0]){

                this.certificate_of_registration = [];

                this.certificate_of_registration.push(document.getElementById("registration_certificate").files[0]);

                var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var output = document.getElementById('registration_certificate_thumb');

                    var large_thumbnail = document.getElementById('large_thumbnail');
                    
                    if(output !== null)
                        output.src = dataURL;

                    if(large_thumbnail !== null)
                        large_thumbnail.src = dataURL;
                   
                }

                reader.readAsDataURL(document.getElementById("registration_certificate").files[0]);
            }
        },

        companyLogoUpdated(){

            if(document.getElementById("company_logo").files[0]){

                this.company_logo = [];

               this.company_logo.push(document.getElementById("company_logo").files[0]);

                var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var output = document.getElementById('company_logo_thumb');

                    var large_thumbnail = document.getElementById('large_thumbnail');
                    
                    if(output !== null)
                        output.src = dataURL;

                    if(large_thumbnail !== null)
                        large_thumbnail.src = dataURL;
                   
                }

                reader.readAsDataURL(document.getElementById("company_logo").files[0]);
            }
        },

        personalTinUpdated(){

           if(document.getElementById("personal_tin").files[0]){

               this.copy_of_tax_identification_number_certificate = [];

               this.copy_of_tax_identification_number_certificate.push(document.getElementById("personal_tin").files[0]);

                var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var output = document.getElementById('personal_tin_thumb');

                    var large_thumbnail = document.getElementById('large_thumbnail');
                    
                    if(output !== null)
                        output.src = dataURL;

                    if(large_thumbnail !== null)
                        large_thumbnail.src = dataURL;
                   
                }

                reader.readAsDataURL(document.getElementById("personal_tin").files[0]);
            }
        },

        updateID(){
            if(document.getElementById("copy_of_id").files[0]){

                this.copy_of_identity_card = [];

                this.copy_of_identity_card.push(document.getElementById("copy_of_id").files[0]);

                var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var output = document.getElementById('copy_of_id_thumb');

                    var large_thumbnail = document.getElementById('large_thumbnail');
                    
                    if(output !== null)
                        output.src = dataURL;

                    if(large_thumbnail !== null)
                        large_thumbnail.src = dataURL;
                   
                }

                reader.readAsDataURL(document.getElementById("copy_of_id").files[0]);
            }
                
        },

        updateProfilePhoto(){

            if(document.getElementById("profilePhoto").files[0]){

                this.profile_photo = [];

                this.profile_photo.push(document.getElementById("profilePhoto").files[0]);

                var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var output = document.getElementById('profilePhoto_thumb');

                    var large_thumbnail = document.getElementById('large_thumbnail');
                    
                    if(output !== null)
                        output.src = dataURL;

                    if(large_thumbnail !== null)
                        large_thumbnail.src = dataURL;
                   
                }

                reader.readAsDataURL(document.getElementById("profilePhoto").files[0]);
            }


        },

        updatePercentage(percent){

            let formData = new FormData();

            //let updated = false;

            formData.append('email',this.$route.params.id);
            formData.append('percentage',percent);

            let url = "http://207.180.215.239:8181/api/v1/customers/update-percentage";

            axios.post(url,
                formData
               ).
                then((response) => {

                    if(response.data.genralErrorCode == 8004){

                        //this.$router.push({path:'//client/createtender',query:{alert:response.data.message}});
                        //this.alert = response.data.message;
                        //eslint-disable-next-line no-console

                            console.log(response.data.message);

                       
                    }
                    else if(response.data.genralErrorCode == 8000){

                        //this.AddTender(response.data.objects);

                        //this.setAlert(response.data.message);

                        //this.$router.push('/client');

                        //eslint-disable-next-line no-console
                        console.log(response.data);

                        this.percentage = response.data.objects.percentage;

                        
                       
                    }

                    //eslint-disable-next-line no-console
                    //console.log(response.data);

                }).catch(()=>{

                    //eslint-disable-next-line no-console
                    console.log("Error occured, please try again");

                    /*this.setAlert("Erro occured. Please try again");

                    this.alert = this.getAlert();

                    this.$router.push('/client/createtender');*/
                }); 

            
        },

        createData(){

            if((this.client_details && this.percentage == this.stage1_percent) || this.stage2){

                let formData = new FormData();

                if(this.have_customer_id == false)
                    formData.append('percentage',this.percentage);

                formData.append('customer_type',this.client_type);

                formData.append('bank_acount_name',this.bank_acount_name);
                formData.append('bank_account_number',this.bank_account_number);
                formData.append('second_bank_account_name',this.second_bank_account_name);
                formData.append('second_bank_account_number',this.second_bank_account_number);
                formData.append('bank_swift_code',this.bank_swift_code);
                formData.append('bank_address',this.bank_address);
               
                return formData;

            } else if((this.client_details && this.percentage == this.initial_percent) || this.stage1){

                let formData = new FormData();

                if(this.client_type == "Personal"){

                    formData.append('first_name',this.first_name);
                    formData.append('last_name',this.last_name);
                }
                
                formData.append('country',this.country);
                formData.append('city',this.city);
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
              

            } else if(this.bank_details){

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

            if(this.bank_details){
                console.log("Document is here");

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

                                   
                                    this.updatePercentage(30);

                                    this.setAlert("Profile updating is completed");
                                
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

                console.log("Not document");

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

                                    if(response.data.objects.client_details && this.percentage == this.initial_percent){

                
                                        this.updatePercentage(40);

                                            
                                        this.client_details = response.data.objects.client_details;

                                        document.getElementById('app').scrollIntoView();
                                         
                                    } 
                                    else if((response.data.objects.client_details && this.percentage == this.stage1_percent) && this.stage1 == false){


                                        this.updatePercentage(30)

                                        this.bank_details = response.data.objects.bank_details;

                                        document.getElementById('app').scrollIntoView();
         
                                         
                                    } else if(this.stage2){

                                         //eslint-disable-next-line no-console
                                         //console.log("STAGE22222222222222222"+response.data.objects.bank_details);

                                        this.bank_details = response.data.objects.bank_details;

                                        this.stage2 = false;

                                        this.stage1 = false;

                                        document.getElementById('app').scrollIntoView();

                                    } else if(this.stage1){

                                        this.client_details = response.data.objects.client_details;

                                        this.stage1 = false;

                                        this.stage2 = true;

                                        document.getElementById('app').scrollIntoView();
                                    }
                                           
                                    /*if(this.client_details){

                                        this.client_details = false;

                                        this.bank_details = true;

                                        this.updatePercentage(40);

                                    } else if(this.bank_details){

                                        this.bank_details = false;

                                        this.documents = true;

                                        this.updatePercentage(30);

                                    }*/
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
                              
                               vm.percentage = response.data.objects.percentage;

                               vm.client_details = response.data.objects.client_details;
                               vm.bank_details = response.data.objects.bank_details;
                               vm.documents = response.data.objects.documents;

                               /*if(response.data.objects.client_details == 1)
                                vm.client_details = true;*/

                                //eslint-disable-next-line no-console
                                console.log("Bank details " + vm.bank_details);

                               vm.have_customer_id = response.data.objects.customer_id == null? false:true;

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
<style scoped>

 .select-control{
     width:100%;
     height:100%;
     cursor: pointer;
     
 }
 
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