<template>

        <v-container class=" mt-10 px-5">

            <AlertError v-if="display_alert" v-bind:message="alert"/>

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

            <v-card row flat width="1300" class="mt-10 mx-auto mb-5"  color="#F5FAFF">
                <v-flex row class="px-3">
                    <h3 class="headline mt-1 font-weight-regular">Profile info</h3>
                </v-flex>
            </v-card>

            <div>
                <v-card row flat width="1300" class="mt-10 mx-auto" color="#F5FAFF">
                    <v-flex row class="">
                        <v-icon color="grey" class="mb-4 ml-3 mr-5">person_outline</v-icon>
                        <p class="grey--text title ">Client details</p>
                    </v-flex>
                </v-card>
            
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
                

                <v-card row flat width="1300" class="mt-12 mx-auto" color="#F5FAFF">
                    <v-flex row class="">
                        <v-icon color="grey" large class=" ml-3 mr-5 pb-3">mdi-bank</v-icon>
                        <p class="grey--text title ">Bank Details</p>
                    </v-flex>
                </v-card>

                
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
            
        
            <div>

                <v-card row flat width="1300" class="mt-12 mx-auto" color="#F5FAFF">
                    <v-flex row class="">
                        <v-icon color="grey" large class=" ml-3 mr-5 pb-3">mdi-attachment</v-icon>
                        <p class="grey--text title ">Attachments</p>
                    </v-flex>
                </v-card>
            
                <v-card  class="mx-auto pa-3">

                    <v-row class="pa-3" v-show="client_type == 'Personal'">

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> COPY OF IDENTITY CARD </p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="copy_of_id" 
                                    @change="updateID()"
                                    prepend-icon ="mdi-cloud-upload"
                                >

                                </v-file-input>

                                <div v-show="id_extension === 'jpg' || id_extension === 'jpeg' || id_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('copy_of_id',id_url)">
                                        <img  id="copy_of_id_thumb" :src="id_url" class="preview">
                                    </v-card>
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

                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">

                            <p class="primary--text body-2 text-uppercase mb-0"> PROFILE PHOTO </p>

                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="profilePhoto" 
                                    @change="updateProfilePhoto()"
                                    prepend-icon ="mdi-cloud-upload"
                                
                                >

                                </v-file-input>

                                <div v-show="profile_photo_extension === 'jpg' || profile_photo_extension === 'jpeg' || profile_photo_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('profilePhoto',profile_photo_url)">
                                        <img  id="profilePhoto_thumb" :src="profile_photo_url" class="preview">
                                    </v-card>
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

                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> COPY OF TIN CERTIFICATE </p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="personal_tin"
                                    @change="personalTinUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>

                                <div v-show="tin_extension === 'jpg' || tin_extension === 'jpeg' || tin_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('personal_tin',tin_url)">
                                        <img  id="personal_tin_thumb" :src="tin_url" class="preview">
                                    </v-card>
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

                            </v-card>

                        
                    
                        </v-col>               
                    </v-row>

                    <v-row class="pa-3" v-show="client_type == 'Company'">
                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> COMPANY LOGO </p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="company_logo" 
                                    @change="companyLogoUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >

                                </v-file-input>

                            <div v-show="logo_extension === 'jpg' || logo_extension === 'jpeg' ||  logo_extension === 'png' ">
                                    <v-card height="200" width="250" outlined @click="handleClick('company_logo',logo_url)">
                                        <img  id="company_logo_thumb" :src="logo_url" class="preview">
                                    </v-card>
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
                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> CERTIFICATE OF REGISTRATION</p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="registration_certificate"
                                    @change="registrationCertificateUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>

                                <div v-show="copy_of_registration_extension === 'jpg' || copy_of_registration_extension === 'jpeg' || copy_of_registration_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('registration_certificate',copy_of_registration_url)">
                                        <img  id="registration_certificate_thumb" :src="copy_of_registration_url" class="preview">
                                    </v-card>
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

                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0">TIN DOCUMENT</p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="tin_document"
                                    @change="tinDocumentUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                  
                                
                                >
                                </v-file-input>
                                <div v-show="tax_payer_extension === 'jpg' || tax_payer_extension === 'jpeg' || tax_payer_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('tin_document',tax_payer_url)">
                                        <img  id="tin_document_thumb" :src="tax_payer_url" class="preview">
                                    </v-card>
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
                            </v-card>
                    
                        </v-col>              
                    </v-row>

                    <v-row class="pa-3" v-show="client_type == 'Company'">
                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> VAT CERTIFICATE </p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="vat_certificate" 
                                    @change="vatCertificateUploaded()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                >

                                </v-file-input>

                                <div v-show="vat_extension === 'jpg' || vat_extension === 'jpeg' || vat_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('vat_certificate',vat_url)">
                                        <img  id="vat_certificate_thumb" :src="vat_url" class="preview">
                                    </v-card>
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

                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> BUSINESS LICENCE </p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 

                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="business_licence"
                                    @change="businessLicenceUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                   
                                
                                >
                                </v-file-input>

                                <div v-show="licence_extension === 'jpg' || licence_extension === 'jpeg' || licence_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('business_licence',licence_url)">
                                        <img  id="business_licence_thumb" :src="licence_url" class="preview">
                                    </v-card>
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

                            </v-card>
                    
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> THREE MONTHS BANK STATEMENT</p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 

                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="bank_statement"
                                    @change="bankStatementUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>

                                <div v-show="bank_statement_extension === 'jpg' || bank_statement_extension === 'jpeg' || bank_statement_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('bank_statement',bank_statement_url)">
                                            <img  id="bank_statement_thumb" :src="bank_statement_url" class="preview">
                                    </v-card>
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

                            </v-card>
                    
                        </v-col>              
                    </v-row>
                </v-card>
            </div>
            
            
            
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
                   <v-btn color="primary white--text" :disabled="!isValid()" @click="save">Save</v-btn>
                </v-row>
            </v-card>

        </v-container>   
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import AlertError from '@/components/AlertError.vue'
import PDFDocument from '@/components/PDFDocument'
export default {

    data: ()=>({
        client_types:[],

        client_type:'',

        client_details: false,

        bank_details: false,

        documents: false,

        percentage: 0,

        customer:[],

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

        display_alert : false,

        alert:'',

        url:'',
        pdf:false,
        pdfOverlay:false

     }),

    components:{AlertError,PDFDocument},

    methods: {

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

            //eslint-disable-next-line no-console
                        console.log("source "+src);

            if(document.getElementById(id).files[0]){

                this.showLargeThumbnail(id);

            }else {
                
                this.largePreview(src);
            }
        },

        isValid(){
            
            if(this.client_type === "Personal"){

            
                if((this.first_name === '' || this.first_name === null)
                    || (this.last_name === '' || this.last_name === null)
                    || (this.mobile_number === '' || this.mobile_number === null)
                    || (this.country === '' || this.country === null)
                    || (this.city === '' || this.city === null)
                    || (this.address === '' || this.address === null)
                    || (this.bank_acount_name === '' ||  this.bank_acount_name === null)
                    || (this.bank_account_number === '' ||  this.bank_account_number === null)
                    || (this.bank_swift_code === ''||  this.bank_swift_code === null)
                    || (this.bank_address === '' ||  this.bank_address === null)
                )
                    return false
                else 
                    return true;

            } else if(this.client_type === "Company"){

                if((this.company_name === '' || this.company_name === null)
                || (this.company_sector === ''  || this.company_sector === null)
                || (this.mobile_number === '' || this.mobile_number === null)
                || (this.office_mobile === ''  || this.office_mobile === null)
                || (this.contact_person_names ==='' || this.contact_person_names === null)
                || (this.Contact_person_phone_number === ''  || this.Contact_person_phone_number === null)
                || (this.country === ''  || this.country === null)
                || (this.city === ''  || this.city === null)
                || (this.address === '' || this.address === null)
                || (this.bank_acount_name === '' ||  this.bank_acount_name === null)
                || (this.bank_account_number === '' ||  this.bank_account_number === null)
                || (this.bank_swift_code === ''||  this.bank_swift_code === null)
                || (this.bank_address === '' ||  this.bank_address === null)
                )

                    return false
                else 
                    return true;
                
            }
        },

        ...mapActions(['setAlert']),

        bankStatementUpdated(){
            

            if(document.getElementById("bank_statement").files[0]){


                this.three_months_bank_statement = [];

                this.three_months_bank_statement.push(document.getElementById("bank_statement").files[0]);

                let extension = this.getFileExtension(document.getElementById("bank_statement").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {
                    this.bank_statement_extension = extension;

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
                else if(extension === 'pdf')
                {
                    this.bank_statement_url = URL.createObjectURL(document.getElementById("bank_statement").files[0]);

                    this.previewPdf(this.bank_statement_url);
                }
   
            }
        },

        businessLicenceUpdated(){

            if(document.getElementById("business_licence").files[0]){

                this.business_licence_document = [];

                this.business_licence_document.push(document.getElementById("business_licence").files[0]);

                let extension = this.getFileExtension(document.getElementById("business_licence").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {
                    this.licence_extension = extension;

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
                else if(extension === 'pdf')
                {
                    this.licence_url = URL.createObjectURL(document.getElementById("business_licence").files[0]);

                    this.previewPdf(this.licence_url);
                }
                
            }

        },

        vatCertificateUploaded(){

            if(document.getElementById("vat_certificate").files[0]){

                this.vat_certificate = [];

                this.vat_certificate.push(document.getElementById("vat_certificate").files[0]);

                let extension = this.getFileExtension(document.getElementById("vat_certificate").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {
                    this.vat_extension = extension;

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
                else if(extension === 'pdf')
                {
                    this.vat_url = URL.createObjectURL(document.getElementById("vat_certificate").files[0]);

                    this.previewPdf(this.vat_url);
                }

                
            }
        },

        tinDocumentUpdated(){

            if(document.getElementById("tin_document").files[0]){

                this.tax_payer_identification_document = [];

                this.tax_payer_identification_document.push(document.getElementById("tin_document").files[0]);

                let extension = this.getFileExtension(document.getElementById("tin_document").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {
                    this.tax_payer_extension = extension;

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
                else if(extension === 'pdf')
                {
                    this.tax_payer_url = URL.createObjectURL(document.getElementById("tin_document").files[0]);

                    this.previewPdf(this.tax_payer_url);
                }
                
            }
        },

        registrationCertificateUpdated(){

            if(document.getElementById("registration_certificate").files[0]){

                this.certificate_of_registration = [];

                this.certificate_of_registration.push(document.getElementById("registration_certificate").files[0]);

                let extension = this.getFileExtension(document.getElementById("registration_certificate").files[0].name);

                if(extension === 'jpg' ||extension === 'jpeg' || extension === 'png')
                {

                    this.copy_of_registration_extension = extension;

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
                else if(extension === 'pdf')
                {
                    this.copy_of_registration_url = URL.createObjectURL(document.getElementById("registration_certificate").files[0]);

                    this.previewPdf(this.copy_of_registration_url);
                }
                
            }
        },

        companyLogoUpdated(){

            if(document.getElementById("company_logo").files[0]){

                this.company_logo = [];

               this.company_logo.push(document.getElementById("company_logo").files[0]);

               let extension = this.getFileExtension(document.getElementById("company_logo").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {
                    this.logo_extension = extension;

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
                else if(extension === 'pdf'){
                    this.logo_url = URL.createObjectURL(document.getElementById("company_logo").files[0]);

                    this.previewPdf(this.logo_url);
                }
                
            }
        },

        personalTinUpdated(){

           if(document.getElementById("personal_tin").files[0]){

               this.copy_of_tax_identification_number_certificate = [];

               this.copy_of_tax_identification_number_certificate.push(document.getElementById("personal_tin").files[0]);

               let extension = this.getFileExtension(document.getElementById("personal_tin").files[0].name);

               if(extension === 'jpg' || extension === 'jpeg' || extension === 'png' )
               {
                   this.tin_extension = extension;

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
               else if(extension === 'pdf'){

                   this.tin_url = URL.createObjectURL(document.getElementById("personal_tin").files[0]);

                   this.previewPdf(this.tin_url);

               }

                
            }
        },

        updateID(){
            if(document.getElementById("copy_of_id").files[0]){

                this.copy_of_identity_card = [];

                this.copy_of_identity_card.push(document.getElementById("copy_of_id").files[0]);
                
                let extension = this.getFileExtension(document.getElementById("copy_of_id").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {

                    this.id_extension = extension;

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
                else if(extension === 'pdf'){

                   this.id_url = URL.createObjectURL(document.getElementById("copy_of_id").files[0]);

                   this.previewPdf(this.id_url);
                }

                
            }
                
        },

        updateProfilePhoto(){

            if(document.getElementById("profilePhoto").files[0]){

                this.profile_photo = [];

                this.profile_photo.push(document.getElementById("profilePhoto").files[0]);


                let extension = this.getFileExtension(document.getElementById("profilePhoto").files[0].name);

                if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                {
                    this.profile_photo_extension = extension;

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

                } else if(extension === 'pdf'){

                    this.profile_photo_url = URL.createObjectURL(document.getElementById("profilePhoto").files[0]);

                    this.previewPdf(this.profile_photo_url);
                }
                
            }


        },

        createData(){

            if(this.client_type == "Personal"){

                let formData = new FormData();

                formData.append('email',localStorage.client);
                formData.append('first_name',this.first_name);
                formData.append('last_name',this.last_name);
                formData.append('country',this.country);
                formData.append('city',this.city);
                formData.append('mobile_number',this.mobile_number);
                formData.append('office_mobile',this.office_mobile);
                formData.append('address',this.address);
                formData.append('customer_type',this.client_type);
               
                formData.append('bank_acount_name',this.bank_acount_name);
                formData.append('bank_account_number',this.bank_account_number);
                formData.append('second_bank_account_name',this.second_bank_account_name);
                formData.append('second_bank_account_number',this.second_bank_account_number);
                formData.append('bank_swift_code',this.bank_swift_code);
                formData.append('bank_address',this.bank_address);

                if(this.copy_of_identity_card.length > 0)
                    formData.append('copy_of_identity_card[0]',this.copy_of_identity_card[0]);

                if(this.copy_of_tax_identification_number_certificate.length > 0)
                    formData.append('copy_of_tax_identification_number_certificate[0]',this.copy_of_tax_identification_number_certificate[0]);

                if(this.profile_photo.length > 0)
                    formData.append('profile_photo[0]',this.profile_photo[0]);
               
                return formData;

            } else if(this.client_type == "Company")
            {

                let formData = new FormData();

                formData.append('email',localStorage.client);
                formData.append('contact_person_names',this.contact_person_names);
                formData.append('Contact_person_phone_number',this.Contact_person_phone_number);
                formData.append('Contact_person_designation',this.Contact_person_designation);
                formData.append('company_sector',this.company_sector);
                formData.append('company_name',this.company_name);
                formData.append('country',this.country);
                formData.append('city',this.city);
                formData.append('mobile_number',this.mobile_number);
                formData.append('office_mobile',this.office_mobile);
                formData.append('address',this.address);
                formData.append('customer_type',this.client_type);

                formData.append('bank_acount_name',this.bank_acount_name);
                formData.append('bank_account_number',this.bank_account_number);
                formData.append('second_bank_account_name',this.second_bank_account_name);
                formData.append('second_bank_account_number',this.second_bank_account_number);
                formData.append('bank_swift_code',this.bank_swift_code);
                formData.append('bank_address',this.bank_address);

                if(this.certificate_of_registration.length > 0)
                    formData.append('certificate_of_registration[0]',this.certificate_of_registration[0]);

                if(this.tax_payer_identification_document.length > 0)
                    formData.append('tax_payer_identification_document[0]',this.tax_payer_identification_document[0]);
                
                if(this.vat_certificate.length > 0)
                    formData.append('vat_certificate[0]',this.vat_certificate[0]);
                
                if(this.business_licence_document.length > 0)
                    formData.append('business_licence_document[0]',this.business_licence_document[0]);
                  
                if(this.three_months_bank_statement.length > 0)
                    formData.append('three_months_bank_statement[0]',this.three_months_bank_statement[0]);

                if(this.company_logo.length > 0)
                    formData.append('company_logo[0]',this.company_logo[0]);

                return formData;
            }
        },

        save(){

            this.loading = true;

            let formData = this.createData();

            const url = "http://207.180.215.239:8181/api/v1/customers/editprofile";

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

                            this.alert = response.data.message;

                            this.display_alert = true;

                            document.getElementById('app').scrollIntoView();
                        }
                        else if(response.data.genralErrorCode == 8000){

                            this.setAlert(response.data.message);
                        
                            this.$router.push('/client/profile');

                        }else {

                            this.alert = response.data.message;

                            this.display_alert = true;

                            document.getElementById('app').scrollIntoView();
                        }

                        //eslint-disable-next-line no-console
                        //console.log(response.data);

                    }).catch(()=>{

                        this.alert = "Error occured. Please try again";

                        this.display_alert = true;

                        document.getElementById('app').scrollIntoView();
                    }); 

            
        }
    },


    beforeRouteEnter(to, from, next){
        next(vm => {

            vm.client_type = vm.$route.params.type;

            axios.get(`http://207.180.215.239:8181/api/v1/customers/fetch?email=${localStorage.client}`).then((response) => 
                            {

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

                            vm.customer = response.data.objects;

                            if(vm.$route.params.type === "Personal"){

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
                                
                                if(vm.customer.profile_photo !== null)
                                { 
                                    vm.profile_photo_extension = vm.getFileExtension(vm.customer.profile_photo[0]);
                                    vm.profile_photo_url = vm.customer.profile_photo[0];
                                }
                                             
                            } 
                            else if(vm.$route.params.type === "Company"){

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