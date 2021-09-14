
<template>
    <v-container class="my-12 px-5">
<PDFDocument v-bind="{url,pdfOverlay}" @clicked="closePdfViewer" v-if="pdf"/>
        
                    <!-- alert ----------------------------- -->
                                
                <v-dialog
                v-model="edited"
                max-width="700"
                >
                
                <v-alert
                
                clearable
                class=""
                :value="edited"
                color="lblue"
                type="error"
                row
                >
                <v-flex row>
                <v-flex row xms9 sm9 md9 lg9 class="pl-4">
                <!-- <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                <v-icon large color="orange" class="">notification_important</v-icon>    
                </v-flex> -->
                <v-flex xms11 sm11 md11 lg11 class="pl-3">
                <p class="text--text title mb-0">
                Welcome to ubalori.
                </p>
                <p class="text--text subtitle-1 mb-0">
                Please edit your profile to complete registration
                </p>
                </v-flex>
                </v-flex>
                <v-flex  xsm3 sm3 md3 lg3>
                
                </v-flex>
                </v-flex>
                </v-alert>    
                
                </v-dialog>   


                <v-dialog
                    v-model="field_required"
                    max-width="400"
                    color="#f5faff"
                    transition="scale-transition"
                    :hide-overlay="true">
                    <v-card 
                    height="105" 
                    color="#f64f51" 
                    class="pt-2">
    
                    <v-alert  
                    prominent
                    height="" 
                    type="error">
                      <p class="font-weight-strong mb-0">{{field}}</p>
                    </v-alert>

                    </v-card>
                  </v-dialog>

                  <v-dialog
                    v-model="connection_error"
                    max-width="400"
                    color="#f5faff"
                    transition="scale-transition"
                    :hide-overlay="false">
                    <v-card 
                    height="105" 
                    color="#f64f51" 
                    class="pt-2">
    
                    <v-alert  
                    prominent
                    height="" 
                    type="warning">
                      <p class="font-weight-strong mb-0">{{error}}</p>
                    </v-alert>

                    </v-card>
                  </v-dialog>

                  <v-dialog
                    v-model="largefilesize"
                    max-width="400"
                    color="#f5faff"
                    transition="scale-transition"
                    :hide-overlay="true">
                    <v-card 
                    height="105" 
                    color="#f64f51" 
                    class="pt-2">
    
                    <v-alert  
                    prominent
                    height="" 
                    type="error">
                      <p class="font-weight-strong mb-0">File size is too large limit 2MB</p>
                    </v-alert>

                    </v-card>
                  </v-dialog>




                   <v-dialog
                    v-model="confirm_edit_profile"
                    color="#2296f3"
                    max-width="350"
                    transition="scale-transition"
                    >
                        <v-card 
                    height="130" 
                    color="#2296f3" 
                    clas>
                    <v-flex>
                        <v-alert
                        prominent
                            type="info"
                            >
                            <v-flex align="center" class=" px-3">
                                
                                  <p class="grow title mb-0">
                                      Confirm Profile Update
                                </p>   
                            </v-flex>
                            </v-alert>

                            <center>
                            <v-flex class="shrink px-5">
                                
                                    <v-btn 
                                    class="white--text"
                                    color="red"
                                    small
                                    @click=" confirm_edit_profile = false">
                                        NO
                                    </v-btn>
                                    <v-btn
                                    class="ml-10 white--text" 
                                    color="success"
                                    small
                                    @click="savechanges()">
                                        YES 
                                    </v-btn>
                                </v-flex>
                                </center>
                        </v-flex>
                        </v-card>
                    </v-dialog>

                 
                    <v-dialog
                    v-model="update_success"
                    max-width="330"
                    color="#f5faff"
                    transition="scale-transition">
                        <v-card 
                    height="100" 
                    color="#4bae50" 
                    clas>
                  <v-alert
                    prominent
                    type="success"
                    >
                    <v-row align="center">
                        <v-col class="grow">
                            {{success_alert}}
                        </v-col>
                    </v-row>
                    </v-alert>
                        </v-card>
                    </v-dialog>
                    
<!-- overlay -->
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
                

                  <!-- <v-dialog
                    v-model="field_required"
                    max-width="350"
                    color="#f5faff"
                    transition="scale-transition"
                    :hide-overlay="true">
                    <v-card 
                    height="80" 
                    color="#f64f51" 
                    class="pt-2">
    
                    <v-alert  
                    height="" 
                    prominent
                    type="error">
                      <p class="font-weight-strong mb-0">{{field}}</p>
                    </v-alert>

                    </v-card>
                  </v-dialog> -->

        <v-card flat width="900" class="mt-12 mx-auto mb-7" color="#F5FAFF">
            <v-flex row class="px-3 ">
                <h1 class=" font-weight-regular headline mb-0 ">Transporter Profile info</h1>
                <v-chip 
                color="orange" 
                class="mx-auto" 
                v-show="verification"> 
                Account waiting for verification
                </v-chip>
                </v-flex>
        </v-card>

        <v-card flat width="900" class="mt-5 mx-auto " color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="mr-5">person_outline</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Transporter details</h1>
             <v-spacer></v-spacer>
                <!-- <v-btn
                color="#4169E1" 
                class="white--text" 
                width="100"
                v-show="editaccounts" 
                @click="editaccount()">
                EDIT
                </v-btn>
                <v-btn
                color="#4169E1" 
                class="white--text" 
                width="100"
                v-show="canceledits" 
                @click="canceledit()">
                CANCEL
                </v-btn> -->
            </v-flex>
        </v-card>

        <v-card 
        :disabled="edit" 
        width="900" 
        class="mt-5 mx-auto mb-5 pl-3 pb-3 pr-3">

        <!-- loading -->
                
                <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>
               

            <v-flex column class="pt-3">
           
                <v-flex row class="pb-5 pl-2 mt-3" style="background-color:;">
                        <!--<v-flex>
                        <p class="bondy-2 mb-0 ml-3 mb-1">Profile Image</p>
                        <v-card
                        flat 
                        color="#F5FAFF" 
                        width="200" 
                        height="150" 
                        outlined 
                        class="mx-3"
                        style="bo">
                            <v-flex class="" >
                                <v-file-input
                                id="profile_image"
                                ref="other"
                                type="file" 
                                flat 
                                dropzone 
                                class="mb-0 pb-0" 
                                height="150" 
                                width="100" 
                                outlined 
                                prepend-icon=""
                                @change="uploadprofile()" 
                                ></v-file-input>
                            </v-flex>
                        </v-card>
                        </v-flex>-->
                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 mb-0"> Profile image  <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="profile_image" 
                                    ref="profile_upload"
                                    @change="uploadprofile()"
                                    prepend-icon =""
                                    prepend-inner-icon="mdi-cloud-upload"
                                    :rules="[v => !!v || 'profile image is required']"
                                    required     
                                    dense
                                    outlined                          
                                >

                                </v-file-input>

                                <div v-show="profile_image_extension === 'jpg' || profile_image_extension === 'jpeg' || profile_image_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('profile_image',profile_image_url)">
                                        <img  id="profile_image_thumb" :src="profile_image_url" class="preview">
                                    </v-card>
                                </div>

                                <div v-show="profile_image_extension === 'largefile' ">
                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                    </v-card>
                                </div>

                                <div v-show="profile_image_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(profile_image_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                                

                            </v-card>
                    
                        </v-col>
                </v-flex> 
            

            <v-flex row class="">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Company Name</p>
                    <v-text-field
                    v-model="name" 
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"
                    :rules="[rules.required]">
                        <template #label>
                            <span class="deep-orange--text"><strong>* </strong></span>
                        </template>
                    </v-text-field>
                </v-flex>
                <v-flex row sm4 mb4 justify-center>
                <!-- <v-flex column sm6 mb6>
                    <p class="bondy-2 mb-0">Category</p>
                    <v-select
                    outlined
                    class=""
                    style="color:#4169E1;"
                    :items="service_type"
                    color="#4169E1"
                    clearable
                    ></v-select>
                </v-flex> -->
                <v-flex column class="">
                    <p class="bondy-2 mb-0">Tin number</p>
                    <v-text-field 
                    sm3 md3
                    v-model="tin"
                    outlined 
                    color="#4169E1" 
                    clearable 
                    :rules="[rules.required]">
                         <template #label>
                            <span class="deep-orange--text"><strong>* </strong></span>
                        </template>
                    </v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            </v-flex>

            <v-flex column>
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5">CONTACTS</h1>
            </v-flex>
            <v-flex row class="px">

                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Phone number</p>
                    <v-text-field 
                    v-model="phone"
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"
                    :rules="[rules.required, rules.number]" >
                            <template #label>
                              <span class="deep-orange--text"><strong>* </strong></span>
                            </template>
                    </v-text-field>
                </v-flex>

                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">Fax</p>
                    <v-text-field 
                    v-model="faxnumber"
                    outlined 
                    color="#4169E1" 
                    clearable 
                     :rules="[rules.required]">
                            <template #label>
                                <span class="deep-orange--text"><strong>* </strong></span>
                            </template>
                     </v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>


            <v-flex row class="px">
                <!-- <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Email</p>
                    <v-text-field
                    v-model="mail"
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"
                    :rules="[rules.required, rules.email]">
                            <template #label>
                                <span class="deep-orange--text"><strong>* </strong></span>
                            </template>
                    </v-text-field>
                </v-flex> -->

                 <v-flex column sm6 mb6 class="px-6">
                <v-flex>
                    <p class="bondy-2 mb-0">P.O.Box</p>
                    <v-text-field 
                    v-model="box"
                    outlined 
                    color="#4169E1" 
                    clearable 
                    :rules="[rules.required]">
                            <template #label>
                                <span class="deep-orange--text"><strong>* </strong></span>
                            </template>
                    </v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            </v-flex>

            <v-flex column>
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5">LOCATION</h1>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Country</p>

                    <!-- <v-card
                    outlined
                    color="" 
                    height="55" 
                    class="card "
                    style="border-color:#babdc2;">
                    
                      <country-select 
                      v-model="country" 
                      :country="country" 
                      topCountry="Tanzania, United Republic of" 
                      height="55"
                      :countryName="true"
                      :removePlaceholder="true"
                      class="selectcountry"/>
                    </v-card> -->

                    <v-select
                        outlined
                        v-model="country"
                        :items="available_countries"
                        @change="fetchRegions(country)"
                        :rules="[v => !!v || 'Country is required']"
                        required>     
                        <template #label>
                            <span class="red--text"><strong>* </strong></span>
                        </template>

                     </v-select>

                </v-flex>

                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">City</p>

                    <!-- <v-text-field 
                    v-model="pcity"
                    outlined 
                    color="#4169E1" 
                    clearable 
                     :rules="[rules.required]">
                            <template #label>
                                <span class="deep-orange--text"><strong>* </strong></span>
                            </template>
                    </v-text-field> -->

                    <v-select
                        outlined
                        v-model="pcity"
                        :items="regions"
                        :rules="[v => !!v || 'staste/region is required']"
                        required
                    >     
                        <template #label>
                            <span class="red--text"><strong>* </strong></span>
                        </template>

                </v-select>

                </v-flex>
                </v-flex>
            </v-flex>

            <!-- <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Region</p>
                    <v-text-field 
                    v-model="pregion"
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"
                     :rules="[rules.required]">
                            <template #label>
                                <span class="deep-orange--text"><strong>* </strong></span>
                            </template>
                     </v-text-field>
                </v-flex>
                
            </v-flex> -->

            </v-flex>
        </v-card>
    
        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="">attachments</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Attachments</h1>
            </v-flex>
        </v-card>

    
        <v-card :disabled="edit"  width="900" class="mt-5 mx-auto mb-5 pb-3 pl-3 pr-3">

        <!-- loading -----  -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>

                 <v-flex class="pt-3" >
                             <center>
                             <p class="mb-0 body-1 red--text">
                                Supported file types : <span class="font-weight-bold">.PDF .JPG .PNG .JPEG</span>
                             </p>
                             </center>
                 </v-flex>

                 <v-col cols=12>
                            <p class="primary--text body-1 mb-1 ml-2 mt-3 text-center">
                                 ESSENTIAL DOCUMENTS
                            </p>
                            <v-divider color="" class="mb-0 mt-2"></v-divider>
                 </v-col>

            <v-row class="pt-3">
                
                <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> Copy of Registration Certificate  <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="certificate" 
                                    @change="updatecertificate()"
                                    prepend-icon =""
                                    prepend-inner-icon="mdi-cloud-upload"
                                    :rules="[v => !!v || 'Certificate is required']"
                                    required
                                    dense
                                    outlined
                                    >

                                </v-file-input>

                                <div v-show="certificate_extension === 'jpg' || certificate_extension === 'jpeg' || certificate_extension === 'png'">
                                    <v-card flat  height="200" width="250" outlined @click="handleClick('certificate',certificate_url)">

                                        <img  id="certificate_thumb" :src="certificate_url" class="preview">

                                    </v-card>
                                </div>

                                <div v-show="certificate_extension === 'largefile' ">
                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                    </v-card>
                                </div>

                                <div v-show="certificate_extension === 'pdf'">

                                    <!-- <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(certificate_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn> -->
                                <v-tooltip left color="#1565C0">
                                  <template v-slot:activator="{ on }">
                                    <v-card 
                                        flat
                                        color=""
                                        height="198"
                                        :block="true"
                                        icon 
                                        class="py-12 px-12 insurance_preview"
                                        @click="previewPdf(certificate_url)"
                                        v-on="on">
                                        <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                    </v-card>
                                  </template>
                                  <span>Click to view document</span>
                                </v-tooltip>

                                </div>
                            </v-card>
                        </v-col> 

              
                <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> Insurance Transporter  <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="insurance" 
                                    @change="updateinsurance()"
                                    prepend-icon =""
                                    prepend-inner-icon="mdi-cloud-upload"
                                    :rules="[v => !!v || 'Insurance is required']"
                                    required
                                    outlined
                                    dense
                                >

                                </v-file-input>

                                <div v-show="insurance_extension === 'jpg' || insurance_extension === 'jpeg' || insurance_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('insurance',insurance_url)">
                                        <img  id="insurance_thumb" :src="insurance_url" class="preview">
                                    </v-card>
                                </div>

                                <div v-show="insurance_extension === 'largefile' ">
                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                    </v-card>
                                </div>

                                <div v-show="insurance_extension === 'pdf'">

                                    <!-- <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(insurance_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn> -->

                                     <!--  -->
                                     
                                        <v-tooltip right color="#1565C0">
                                        <template v-slot:activator="{ on }">
                                            <v-card 
                                                flat
                                                color=""
                                                height="198"
                                                :block="true"
                                                icon 
                                                class="py-12 px-12 insurance_preview"
                                                @click="previewPdf(insurance_url)"
                                                v-on="on">
                                                <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                            </v-card>
                                        </template>
                                        <span>Click to view document</span>
                                    </v-tooltip>
                                        
                                    <!--  -->
                                </div>
                            </v-card>
                        </v-col> 

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-1"> Tin certificate  <span class="red--text ml-2 mb-0" ><strong>*</strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="tin_certificate" 
                                    @change="updatetin_certificate()"
                                    prepend-icon =""
                                    prepend-inner-icon="mdi-cloud-upload"
                                    :rules="[v => !!v || 'Tin certificate is required']"
                                    required
                                    dense
                                    outlined
                                >

                                </v-file-input>

                                <div v-show="tin_certificate_extension === 'jpg' || tin_certificate_extension === 'jpeg' || tin_certificate_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('tin_certificate',tin_certificate_url)">
                                        <img  id="tin_certificate_thumb" :src="tin_certificate_url" class="preview">
                                    </v-card>
                                </div>

                                <div v-show="tin_certificate_extension === 'largefile' ">
                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                    </v-card>
                                </div>

                                <div v-show="tin_certificate_extension === 'pdf'">

                                        <v-tooltip right color="#1565C0">
                                        <template v-slot:activator="{ on }">
                                            <v-card 
                                                flat
                                                color=""
                                                height="198"
                                                :block="true"
                                                icon 
                                                class="py-12 px-12 insurance_preview"
                                                @click="previewPdf(tin_certificate_url)"
                                                v-on="on">
                                                <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                            </v-card>
                                        </template>
                                        <span>Click to view document</span>
                                    </v-tooltip>
                                        
                                    
                                </div>
                            </v-card>
                        </v-col>

                        <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-1"> Business License  <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="business_license" 
                                    @change="updatebusiness_license()"
                                    prepend-icon =""
                                    prepend-inner-icon="mdi-cloud-upload"
                                    :rules="[v => !!v || 'Insurance is required']"
                                    required
                                    dense
                                    outlined
                                >

                                </v-file-input>

                                <div v-show="business_license_extension === 'jpg' || business_license_extension === 'jpeg' || business_license_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('business_license',business_license_url)">
                                        <img  id="business_license_thumb" :src="business_license_url" class="preview">
                                    </v-card>
                                </div>

                                <div v-show="business_license_extension === 'largefile' ">
                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                    </v-card>
                                </div>

                                <div v-show="business_license_extension === 'pdf'">

                                        <v-tooltip right color="#1565C0">
                                        <template v-slot:activator="{ on }">
                                            <v-card 
                                                flat
                                                color=""
                                                height="198"
                                                :block="true"
                                                icon 
                                                class="py-12 px-12 insurance_preview"
                                                @click="previewPdf(business_license_url)"
                                                v-on="on">
                                                <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                            </v-card>
                                        </template>
                                        <span>Click to view document</span>
                                    </v-tooltip>
                                        
                                    
                                </div>
                            </v-card>
                        </v-col>

            </v-row>

            <v-row class="mt-5" v-if="currentFiles.length > 0">

                        <v-col cols=12>
                            <p class="primary--text body-1 mb-0 ml-2 mt-3 text-center"> 
                                OTHER DOCUMENTS
                            </p>
                            <v-divider color="" class="mb-0 mt-2"></v-divider>
                        </v-col>

                        <v-col cols=12 md=4 v-for="(file,key) in currentFiles" :key="key">

                            <p class="mb-2 text-center body-1"> 
                                {{ file.name }} 
                                <span class="red--text ml-6 "   style="cursor:pointer" v-on:click="removeCurrentFile( key )">
                                    Remove
                                </span>
                            </p>

                            <v-card flat width="200" height="150" outlined class="mx-auto">

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

                    <!-- <v-row>
                        <v-col cols=12>

                            <v-file-input 

                                :clearable="false"
                                placeholder="Choose a file"
                                class="fileinput"
                                id="otheFiles"
                                @change="otherAttachmentsUpdated()"
                                prepend-icon ="mdi-cloud-upload"
                            >
                            </v-file-input>

                            <v-btn elevation="flat" outlined color="primary" class="ml-1 mt-3" @click="addFiles()">
                                Add other documents
                            </v-btn>
                        </v-col>
                    </v-row>

                    <v-row class="mt-3 ">
                        <v-col cols=12 md=3 v-for="(file,key) in otherFiles" :key="key" class="mr-10">

                           
                            <p class="ml-1">{{ file.file.name }} <span class="remove-file" v-on:click="removeFile( key )"> <v-btn elevation="flat" outlined color="red" small class="white--text"> Remove </v-btn> </span></p>

                            <div v-show="file.file.type === 'image/jpeg' || file.file.type === 'image/png'" >
                               
                                <v-card height="200" width="250"  flat @click="largePreview(file.source)" >
                                        <img  id="bank_statement_thumb" :src="file.source" class="preview "  >
                                </v-card>
                            </div>

                            <div v-show="file.file.type === 'application/pdf'">

                                    <v-card height="200" width="250" outlined >

                                        <v-btn 
                                            :block="true"
                                            icon class="mt-7" 
                                            @click="previewPdf(file.source)"
                                            >
                                            PREVIEW<v-icon x-large>mdi-file</v-icon>
                                        </v-btn>
                                        
                                    </v-card>
                            </div>
                        

                        </v-col>
                    </v-row> -->

            <!--Expansion pannel to add other documents  -->
                <v-row class="mt-10">
                    <v-card outlined width="850" class="mx-auto mb-2">
                    
                            <v-expansion-panels 
                            
                            v-model="panel"
                           
                            :hover="true"
                            :flat="true"
                            class="elevation-0"
                            >

                            <v-expansion-panel  class="elevation-0">

                                <v-expansion-panel-header class="pt-5 pb-1">

                                    <v-flex class="">
                                    <p class="font-weight-regular text-uppercase text-center body-1 primary--text pt-1">
                                        add other files
                                    </p> 
                                     </v-flex>

                                    <template v-slot:actions>
                                        <v-icon color="primary" class="mb-5"> $expand </v-icon>
                                    </template>
                     
                                </v-expansion-panel-header>

                                <v-expansion-panel-content>
                                     
                                     <v-divider color="" class="mb-4"></v-divider>
                                    
                                        <v-row>
                                        
                                        <!-- pannel content -->
                                            <v-col cols=12 sm=4 class="">

                                                <v-row class="ml-9 mb-3">
                                                    <!-- <v-icon class="font-weight-regular">attachment</v-icon> -->

                                                    <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                        Attachment 1
                                                    </p> 
                                                </v-row>

                                                <v-text-field 
                                                v-model="otherdocument_title"
                                                outlined 
                                                class="" 
                                                clearable 
                                                color="#4169E1"
                                                label="title"
                                                dense
                                                >
                                                        
                                                </v-text-field>
                                                
                                                <v-card flat width="250"  >

                                                    <v-file-input 
                                                        dense
                                                        :clearable="false"
                                                        placeholder="Choose a file"
                                                        id="otherdocument" 
                                                        @change="expansionpannelfiles()"
                                                        prepend-inner-icon="mdi-cloud-upload"
                                                        prepend-icon=""
                                                        
                                                        outlined
                                                    >

                                                    </v-file-input>

                                                    <div v-show="otherdocument_extension === 'jpg' || otherdocument_extension === 'jpeg' || otherdocument_extension === 'png'">
                                                        <v-card height="200" width="250" outlined @click="handleClick('otherdocument',otherdocument_url)">
                                                            <img  id="otherdocument_thumb" :src="otherdocument_url" class="preview">
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument_extension === 'largefile' ">
                                                        <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                            <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument_extension === 'pdf'">                                            
                                                    <v-tooltip right color="#1565C0">
                                                    <template v-slot:activator="{ on }">
                                                        <v-card 
                                                            flat
                                                            color=""
                                                            height="198"
                                                            :block="true"
                                                            icon 
                                                            class="py-12 px-12 insurance_preview"
                                                            @click="previewPdf(otherdocument_url)"
                                                            v-on="on">
                                                            <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                        </v-card>
                                                    </template>
                                                    <span>Click to view document</span>
                                                </v-tooltip>
                                                    
                                                <!--  -->
                                            </div>
                                        </v-card>
                                    </v-col> 

                                    <!-- <v-divider color="" :vertical="true"></v-divider> -->

                                    <!-- pannel content 1-->
                                            <v-col cols=12 sm=4 class="">

                                                <v-row class="ml-9 mb-3">
                                                    <!-- <v-icon class="">attachment</v-icon> -->

                                                    <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                        Attachment 2
                                                    </p> 
                                                </v-row>

                                                <v-text-field 
                                                v-model="otherdocument1_title"
                                                outlined 
                                                class="" 
                                                clearable 
                                                color="#4169E1"
                                                label="title"
                                                dense
                                                >
                                                        
                                                </v-text-field>
                                                
                                                <v-card flat width="250"  >

                                                    <v-file-input 
                                                        dense
                                                        :clearable="false"
                                                        placeholder="Choose a file"
                                                        id="otherdocument1" 
                                                        @change="expansionpannelfiles1()"
                                                        prepend-inner-icon="mdi-cloud-upload"
                                                        prepend-icon=""
                                                        
                                                        outlined
                                                    >

                                                    </v-file-input>

                                                    <div v-show="otherdocument1_extension === 'jpg' || otherdocument1_extension === 'jpeg' || otherdocument1_extension === 'png'">
                                                        <v-card height="200" width="250" outlined @click="handleClick('otherdocument1',otherdocument1_url)">
                                                            <img  id="otherdocument1_thumb" :src="otherdocument1_url" class="preview">
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument1_extension === 'largefile' ">
                                                        <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                            <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument1_extension === 'pdf'">                                            
                                                    <v-tooltip right color="#1565C0">
                                                    <template v-slot:activator="{ on }">
                                                        <v-card 
                                                            flat
                                                            color=""
                                                            height="198"
                                                            :block="true"
                                                            icon 
                                                            class="py-12 px-12 insurance_preview"
                                                            @click="previewPdf(otherdocument1_url)"
                                                            v-on="on">
                                                            <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                        </v-card>
                                                    </template>
                                                    <span>Click to view document</span>
                                                </v-tooltip>
                                                    
                                                <!--  -->
                                            </div>
                                        </v-card>
                                        
                                    </v-col> 

                                    <!-- <v-divider color="" :vertical="true"></v-divider> -->

                                    <!-- pannel content 2-->
                                            <v-col cols=12 sm=4 class="">

                                                <v-row class="ml-9 mb-4">
                                                    <!-- <v-icon class="">attachment</v-icon> -->

                                                    <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                        Attachment 3
                                                    </p> 
                                                </v-row>

                                                <v-text-field 
                                                v-model="otherdocument2_title"
                                                outlined 
                                                class="" 
                                                clearable 
                                                color="#4169E1"
                                                label="title"
                                                
                                                dense
                                                >
                                                        
                                                </v-text-field>
                                                
                                                <v-card flat width="250"  >

                                                    <v-file-input 
                                                        dense
                                                        :clearable="false"
                                                        placeholder="Choose a file "
                                                        id="otherdocument2" 
                                                        @change="expansionpannelfiles2()"
                                                        prepend-inner-icon="mdi-cloud-upload"
                                                        prepend-icon=""
                                                    
                                                    
                                                        outlined
                                                    >

                                                    </v-file-input>

                                                    <div v-show="otherdocument2_extension === 'jpg' || otherdocument2_extension === 'jpeg' || otherdocument2_extension === 'png'">
                                                        <v-card height="200" width="250" outlined @click="handleClick('otherdocument2',otherdocument2_url)">
                                                            <img  id="otherdocument2_thumb" :src="otherdocument2_url" class="preview">
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument2_extension === 'largefile' ">
                                                        <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                            <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument2_extension === 'pdf'">                                            
                                                    <v-tooltip right color="#1565C0">
                                                    <template v-slot:activator="{ on }">
                                                        <v-card 
                                                            flat
                                                            color=""
                                                            height="198"
                                                            :block="true"
                                                            icon 
                                                            class="py-12 px-12 insurance_preview"
                                                            @click="previewPdf(otherdocument2_url)"
                                                            v-on="on">
                                                            <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                        </v-card>
                                                    </template>
                                                    <span>Click to view document</span>
                                                </v-tooltip>
                                                    
                                                <!--  -->
                                            </div>
                                        </v-card>
                                    </v-col> 

                                    </v-row>

                                </v-expansion-panel-content>

                                <v-expansion-panel-content>

                                    <v-divider color="" class="mb-4" ></v-divider> 
                                    
                                    <v-row>
                                    
                                    <!-- pannel content 3-->
                                        <v-col cols=12 sm=4 class="">

                                            <v-row class="ml-9 mb-3">
                                                <!-- <v-icon class="font-weight-regular">attachment</v-icon> -->

                                                <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                    Attachment 4
                                                </p> 
                                            </v-row>

                                            <v-text-field 
                                            v-model="otherdocument3_title"
                                            outlined 
                                            class="" 
                                            clearable 
                                            color="#4169E1"
                                            label="title"
                                            dense
                                             >
                                                    
                                            </v-text-field>
                                            
                                            <v-card flat width="250"  >

                                                <v-file-input 
                                                    dense
                                                    :clearable="false"
                                                    placeholder="Choose a file"
                                                    id="otherdocument3" 
                                                    @change="expansionpannelfiles3()"
                                                    prepend-inner-icon="mdi-cloud-upload"
                                                    prepend-icon=""
                                                    
                                                    outlined
                                                >

                                                </v-file-input>

                                                <div v-show="otherdocument3_extension === 'jpg' || otherdocument3_extension === 'jpeg' || otherdocument3_extension === 'png'">
                                                    <v-card height="200" width="250" outlined @click="handleClick('otherdocument3',otherdocument3_url)">
                                                        <img  id="otherdocument3_thumb" :src="otherdocument3_url" class="preview">
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument3_extension === 'largefile' ">
                                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument3_extension === 'pdf'">                                            
                                                <v-tooltip right color="#1565C0">
                                                <template v-slot:activator="{ on }">
                                                    <v-card 
                                                        flat
                                                        color=""
                                                        height="198"
                                                        :block="true"
                                                        icon 
                                                        class="py-12 px-12 insurance_preview"
                                                        @click="previewPdf(otherdocument3_url)"
                                                        v-on="on">
                                                        <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                    </v-card>
                                                </template>
                                                <span>Click to view document</span>
                                            </v-tooltip>
                                                
                                            <!--  -->
                                        </div>
                                    </v-card>
                                </v-col> 

                                 <!-- <v-divider color="" :vertical="true"></v-divider> -->

                                 <!-- pannel content 4-->
                                        <v-col cols=12 sm=4 class="">

                                            <v-row class="ml-9 mb-3">
                                                <!-- <v-icon class="">attachment</v-icon> -->

                                                <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                    Attachment 5
                                                </p> 
                                            </v-row>

                                            <v-text-field 
                                            v-model="otherdocument4_title"
                                            outlined 
                                            class="" 
                                            clearable 
                                            color="#4169E1"
                                            label="title"
                                            dense
                                             >
                                                    
                                            </v-text-field>
                                            
                                            <v-card flat width="250"  >

                                                <v-file-input 
                                                    dense
                                                    :clearable="false"
                                                    placeholder="Choose a file"
                                                    id="otherdocument4" 
                                                    @change="expansionpannelfiles4()"
                                                    prepend-inner-icon="mdi-cloud-upload"
                                                    prepend-icon=""
                                                    
                                                    outlined
                                                >

                                                </v-file-input>

                                                <div v-show="otherdocument4_extension === 'jpg' || otherdocument4_extension === 'jpeg' || otherdocument4_extension === 'png'">
                                                    <v-card height="200" width="250" outlined @click="handleClick('otherdocument4',otherdocument4_url)">
                                                        <img  id="otherdocument4_thumb" :src="otherdocument4_url" class="preview">
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument4_extension === 'largefile' ">
                                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument4_extension === 'pdf'">                                            
                                                <v-tooltip right color="#1565C0">
                                                <template v-slot:activator="{ on }">
                                                    <v-card 
                                                        flat
                                                        color=""
                                                        height="198"
                                                        :block="true"
                                                        icon 
                                                        class="py-12 px-12 insurance_preview"
                                                        @click="previewPdf(otherdocument4_url)"
                                                        v-on="on">
                                                        <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                    </v-card>
                                                </template>
                                                <span>Click to view document</span>
                                            </v-tooltip>
                                                
                                            <!--  -->
                                        </div>
                                    </v-card>
                                    
                                </v-col> 

                                  <!-- <v-divider color="" :vertical="true"></v-divider> -->

                                <!-- pannel content 5-->
                                        <v-col cols=12 sm=4 class="">

                                            <v-row class="ml-9 mb-4">
                                                <!-- <v-icon class="">attachment</v-icon> -->

                                                <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                    Attachment 6
                                                </p> 
                                            </v-row>

                                            <v-text-field 
                                            v-model="otherdocument5_title"
                                            outlined 
                                            class="" 
                                            clearable 
                                            color="#4169E1"
                                            label="title"
                                            
                                            dense
                                             >
                                                    
                                            </v-text-field>
                                            
                                            <v-card flat width="250"  >

                                                <v-file-input 
                                                    dense
                                                    :clearable="false"
                                                    placeholder="Choose a file "
                                                    id="otherdocument5" 
                                                    @change="expansionpannelfiles5()"
                                                    prepend-inner-icon="mdi-cloud-upload"
                                                    prepend-icon=""
                                                   
                                                   
                                                    outlined
                                                >

                                                </v-file-input>

                                                <div v-show="otherdocument5_extension === 'jpg' || otherdocument5_extension === 'jpeg' || otherdocument5_extension === 'png'">
                                                    <v-card height="200" width="250" outlined @click="handleClick('otherdocument5',otherdocument5_url)">
                                                        <img  id="otherdocument5_thumb" :src="otherdocument5_url" class="preview">
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument5_extension === 'largefile' ">
                                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument5_extension === 'pdf'">                                            
                                                <v-tooltip right color="#1565C0">
                                                <template v-slot:activator="{ on }">
                                                    <v-card 
                                                        flat
                                                        color=""
                                                        height="198"
                                                        :block="true"
                                                        icon 
                                                        class="py-12 px-12 insurance_preview"
                                                        @click="previewPdf(otherdocument5_url)"
                                                        v-on="on">
                                                        <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                    </v-card>
                                                </template>
                                                <span>Click to view document</span>
                                            </v-tooltip>
                                                
                                            <!--  -->
                                        </div>
                                    </v-card>
                                </v-col> 

                                </v-row>

                                </v-expansion-panel-content>

                            </v-expansion-panel>
                            
                            </v-expansion-panels>
                    
                    </v-card>
                </v-row>
        </v-card>


        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="mr-5">announcement</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Bid terms</h1>
            </v-flex>
        </v-card>

       <v-card :disabled="edit"  width="900" class="mt-5 mx-auto px-3 " >
             <!-- loading -----  -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>

            <v-flex column class="px-3 pt-5">
            <p class="bondy-2 mb-0  mb-0">Payment terms</p>
            <v-select
              attach
              chips
              multiple
              class=""
              style="color:#4169E1;"
              :items="payment_terms"
              color="#4169E1"
              clearable
              v-model="terms_of_payment"
               :rules="[rules.required]">

                    <template #label>
                    <span class="red--text"><strong>{{terms_required}}</strong></span>
                    </template>

            </v-select>
            </v-flex>
        </v-card>

        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="mr-5">account_balance</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Bank account details</h1>
            </v-flex>
        </v-card>

       <v-card :disabled="edit"  width="900" class="mt-5 mx-auto px-3 ">

             <!-- loading -----  -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
            </v-progress-linear>

            <v-flex column class="px-3 pt-7">
            <p class="bondy-2 mb-0 mb-0">Bank name</p>
            <v-text-field 
            v-model="bname"
            outlined 
            class="" 
            clearable 
            color="#4169E1"
             :rules="[rules.required]">
                        <template #label>
                        <span class="deep-orange--text"><strong>* </strong></span>
                        </template>
            </v-text-field>
            </v-flex>

            <v-flex column class="px-3">
            <p class="bondy-2 mb-0 mb-0">Account name</p>
            <v-text-field 
            v-model="aname"
            outlined 
            class="" 
            clearable 
            color="#4169E1"
             :rules="[rules.required, rules.letters]">
                        <template #label>
                        <span class="deep-orange--text"><strong>* </strong></span>
                        </template>
            </v-text-field>
            </v-flex>

            <v-flex column class="px-3">
            <p class="bondy-2 mb-0 mb-0">Acount number</p>
            <v-text-field
            v-model="acnumber"
            outlined 
            class="" 
            clearable 
            color="#4169E1"
             :rules="[rules.required, rules.number]">
                        <template #label>
                        <span class="deep-orange--text"><strong>* </strong></span>
                        </template>
            </v-text-field>
            </v-flex>
        </v-card>

        <v-card flat width="900" class="mt-5 mx-auto" color="#F5FAFF">
            <v-flex row class="">
            <v-spacer></v-spacer>
            <v-btn 
            :disabled="edit" 
            class="primary" 
            flat 
            @click="validate()">
            save changes
            </v-btn>
            </v-flex>
        </v-card>
    </v-container>
</template>

<script>

import {projectMixin} from '@/mixins/mixings.js'
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import PDFDocument from '@/components/PDFDocument'

/* eslint-disable no-console */

export default {

   mixins: [projectMixin],

   data() {
       return{
           //place holders
           name:'',
           faxnumber:'',
           pcity:'',
           tin:'',
           phone:'',
           box:'',
           country:'',
           pregion:'',
           regions:[],
           terms_of_payment:[],
           bname:'',
           aname:'',
           acnumber:'',

           // temrs and condition field
           terms_required:'*',
           field_required:false,
           field:'',

           // connection error
           connection_error:'',
           error:'',

           // Update success
           update_success:false,
           success_alert:'',

           // confirm edit profiile
           confirm_edit_profile:false,

           url:'',
            pdf:false,
            pdfOverlay:false,


           rules: {
            required: value => !!value || "Required",

            number: value => {
              const pattern = /^\d+$/;
              return pattern.test(value) || "Number only required"
            },

            letters: value => {
              const pattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
              return pattern.test(value) || "Letters only required"
            },

            min: v => v.length >= 8 || 'Min 8 characters',

            email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "invalid email";
            }
           },

           // files
           profile_image:[],
           certificate:[],
           insurance:[], 
           business_license:[], 
           tin_certificate:[],     
           
           otherdocument:[],
           otherdocument1:[],
           otherdocument2:[],
           otherdocument3:[],
           otherdocument4:[],
           otherdocument5:[],

           other:[],
           
           //others 
           edited:false,
           verification:false,
           loading:false,
           editaccounts:true,
           canceledits:false,
           edit:false,
           payment_terms:['Full payment', 'Pay in 2 installments (50%, 50%)', 'Pay in 3 installments (30%, 40%, 30%)'],
           agent_payment_terms:[],
          
           // Priview thumb nails
           large_preview_url:'',
           overlay: false,

           startswith:false,
           
           profile_image_extension:'',
           profile_image_url:'',

           certificate_extension:'',
           certificate_url:'',

           insurance_extension:'',
           insurance_url:'',

           business_license_extension:'',
           business_license_url:'',

           tin_certificate_extension:'',
           tin_certificate_url:'',

           // expansion pannel
            panel: [0, 1],

            // other document in expansion pannel
            otherdocument_extension:'',
            otherdocument_url:'',
            otherdocument_title:'',

            // other document in expansion pannel 1
            otherdocument1_extension:'',
            otherdocument1_url:'',
            otherdocument1_title:'',
 

            // other document in expansion pannel 2
            otherdocument2_extension:'',
            otherdocument2_url:'',
            otherdocument2_title:'',

            // other document in expansion pannel 3
            otherdocument3_extension:'',
            otherdocument3_url:'',
            otherdocument3_title:'',

            // other document in expansion pannel 4
            otherdocument4_extension:'',
            otherdocument4_url:'',
            otherdocument4_title:'',

            // other document in expansion pannel 5
            otherdocument5_extension:'',
            otherdocument5_url:'',
            otherdocument5_title:'',

           otherFiles:[],

           currentFiles:[],
            
           files:[],

           largefilesize: false
    }
   },


    created (){
         
        this.T_GET_AGENT(localStorage.client).then(()=>{

            console.log(this.LOAD_AGENT);

            if (
                !this.LOAD_AGENT.objects.agent_id == '' && 
                this.LOAD_AGENT.objects.is_verified == 0 ){

                this.verification = true
                
            }

            if(this.LOAD_AGENT.objects.files !== null)
                {
                    this.currentFiles = this.LOAD_AGENT.objects.files;
                }

            if (!this.LOAD_AGENT.objects.agent_id == ''){
                
                if(this.LOAD_AGENT.objects.profile_image !== null)
                    {
                        
                        this.profile_image_url = this.LOAD_AGENT.objects.profile_image[0]

                        this.profile_image_extension = this.getFileExtension(this.profile_image_url);

                        console.log(this.certificate_extension);
                        
                    }

                 if(this.LOAD_AGENT.objects.certificate !== null)
                    {
                        
                        this.certificate_url = this.LOAD_AGENT.objects.certificate[0]

                        this.certificate_extension = this.getFileExtension(this.certificate_url);

                        console.log(this.certificate_extension);
                        
                    }

                if(this.LOAD_AGENT.objects.insurance !== null)
                    {
                        
                        this.insurance_url = this.LOAD_AGENT.objects.insurance[0]

                        this.insurance_extension = this.getFileExtension(this.insurance_url);

                        console.log(this.insurance_url);
                    }

                if(this.LOAD_AGENT.objects.tin_certificate !== null)
                    {
                        
                        this.tin_certificate_url = this.LOAD_AGENT.objects.tin_certificate[0]

                        this.tin_certificate_extension = this.getFileExtension(this.tin_certificate_url);

                        console.log(this.tin_certificate_extension);
                        
                    }

                if(this.LOAD_AGENT.objects.business_license !== null)
                    {
                        
                        this.business_license_url = this.LOAD_AGENT.objects.business_license[0]

                        this.business_license_extension = this.getFileExtension(this.business_license_url);

                        console.log(this.business_license_extension);
                        
                    }

                 /*if(this.LOAD_AGENT.objects.insurance !== null)
                {
                    
                    this.insurance_url = this.LOAD_AGENT.objects.insurance[0]

                    this.insurance_extension = this.getFileExtension(this.insurance_url);

                    console.log(this.insurance_extension);
                }*/

                    this.name = this.LOAD_AGENT.objects.company_name
                    this.faxnumber = this.LOAD_AGENT.objects.fax
                    this.tin = this.LOAD_AGENT.objects.tin_number
                    this.phone = this.LOAD_AGENT.objects.phone
                    this.mail = this.LOAD_AGENT.objects.email
                    this.box = this.LOAD_AGENT.objects.p_o_box
                    this.country = this.LOAD_AGENT.objects.country
                    this.pcity = this.LOAD_AGENT.objects.city
                    this.pregion = this.LOAD_AGENT.objects.city
                    this.bname = this.LOAD_AGENT.objects.bank_name
                    this.aname = this.LOAD_AGENT.objects.account_name
                    this.acnumber = this.LOAD_AGENT.objects.account_number

                    this.fetchRegions(this.country)

           }else{

                this.mail = localStorage.client

           }

        }).then(()=>{

             console.log('entering here');

            this.T_GET_AGENT_PAYMENT_TERMS(localStorage.client).then(()=>{

                  console.log('transporter payment terms');
                  console.log(this.LOAD_AGENT_PAYMENT_TERMS.length);

                  for (let index = 0; index < this.LOAD_AGENT_PAYMENT_TERMS.length; index++) {

                      this.agent_payment_terms.push( this.LOAD_AGENT_PAYMENT_TERMS[index].installment_desc)                      
                  }
                  console.log(this.payment_terms);
                  this.terms_of_payment = this.agent_payment_terms;
                  
              })
        })

    },

   components:{PDFDocument},
   
   methods: {

       ...mapActions([
        "T_GET_AGENT",
        "T_POST_PAYMENT_TERMS",
        "T_GET_AGENT_PAYMENT_TERMS"
    ]),

     fetchRegions(country){

            this.regions = this.getRegions(country);
        },

     addFiles(){

            document.getElementById("otheFiles").click();
        },

        removeFile( key ){
            this.otherFiles.splice( key, 1 );
        },

     removeCurrentFile(key){

            this.currentFiles.splice( key, 1 );
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

      handlePdfClick(){

          alert('test pdf clicking');
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


        validate(){

                if(this.rules.required(this.name) == 'Required'){
        
                        console.log(3);
                        this.field = 'name field is required'
                        this.field_required = true
                    // this.requiredemail = true  
                    // this.invalidemail = false
                        return false

                }else if (this.rules.required(this.tin) == 'Required') {

                        console.log(2);
                        this.field = 'Tin number field is required'
                        this.field_required = true
                        return false

                }else if(this.rules.required(this.phone) == 'Required'){

                        console.log(1);
                        this.field = 'Phone number field is required'
                        this.field_required = true
                        return false

                }else if(this.rules.number(this.phone) === 'Number only required'){

                        console.log(1);
                        this.field = 'Phone number field accept numbers only'
                        this.field_required = true
                        return false

                }else if (this.rules.required(this.faxnumber) == 'Required') {

                        console.log(4);
                        this.field = 'fax number is required'
                        this.field_required = true
                        return false

                }else if(this.rules.required(this.pcity) == 'Required'){

                        console.log(7);
                        this.field = 'City name field is required'
                        this.field_required = true
                        return false

                }/*else if(this.rules.required(this.pregion) == 'Required'){

                        console.log(8);
                        this.field = 'Region field is required'
                        this.field_required = true
                        return false

                }*/else if((this.terms_of_payment) == '' || (this.terms_of_payment) == 'null'){

                        console.log(9);
                        this.terms_required = "Required"
                        this.field = 'Payment terms field is required'
                        this.field_required = true
                        return false

                }else if(this.rules.required(this.bname) == 'Required'){

                        console.log(10);
                        this.field = 'Bank name field is required'
                        this.field_required = true
                        return false

                }else if(this.rules.required(this.aname) == 'Required'){

                        console.log(11);
                        this.field = 'Account name field is required'
                        this.field_required = true
                        return false

                }else if (this.rules.letters(this.aname) == 'Letters only required') {         

                        console.log(2);
                        this.field = 'Account name should be letters only'
                        this.field_required = true
                        return false

                }else if(this.rules.required(this.acnumber) == 'Required'){

                        console.log(12);
                        this.field = 'Account number field is required'
                        this.field_required = true
                        return false

                }else if(this.rules.number(this.acnumber) == 'Number only required'){       // ----------------------------------

                        console.log(12);
                        this.field = 'Account number should be numbers only with no space.'
                        this.field_required = true
                        return false

                }else if(this.certificate_url == '' && this.certificate == ''){

                        console.log(13);
                        this.field = 'kindly attach certificate'
                        this.field_required = true
                        return false

                }else if(this.certificate_url == '' && this.certificate.length == 0){

                        console.log(14);
                        this.field = 'kindly attach certificate'
                        this.field_required = true
                        return false

                }else if(this.insurance_url == '' && this.insurance == ''){

                        console.log(15);
                        this.field = 'kindly attach Insurance'
                        this.field_required = true
                        return false

                }else if(this.insurance_url == '' && this.insurance.length == 0){

                        console.log(16);
                        console.log(this.insurance_url);
                        
                        this.field = 'kindly attach Insurance'
                        this.field_required = true
                        return false

                }else if(this.tin_certificate_url == '' && this.tin_certificate == ''){

                        console.log(15);
                        this.field = 'kindly attach Tin certifiacte'
                        this.field_required = true
                        return false

                }else if(this.tin_certificate_url == '' && this.tin_certificate.length == 0){

                        console.log(16);
                        this.field = 'kindly attach Tin certifiacte'
                        this.field_required = true
                        return false  //-------

                }else if(this.business_license_url == '' && this.business_license == ''){

                        console.log(15);
                        this.field = 'kindly attach Business license'
                        this.field_required = true
                        return false

                }else if(this.business_license_url == '' && this.business_license.length == 0){

                        console.log(16);
                        this.field = 'kindly attach Business license'
                        this.field_required = true
                        return false

                }else if(this.otherdocument.length > 0 && (this.otherdocument_title == '' || this.otherdocument_title == null)){

                        console.log(17);
                        this.field = 'Please fill title on attachment 1 '
                        this.field_required = true
                        return false

                }else if(this.otherdocument.length == 0 && (!this.otherdocument_title == '' || !this.otherdocument_title == null)){

                        console.log(18);
                        this.field = 'Please attach file on attachment 1'
                        this.field_required = true
                        return false

                }else if(this.otherdocument1.length > 0 && (this.otherdocument1_title == '' || this.otherdocument1_title == null)){

                        console.log(19);
                        this.field = 'Please fill title on attachment 2'
                        this.field_required = true
                        return false

                }else if(this.otherdocument1.length == 0 && (!this.otherdocument1_title == '' || !this.otherdocument1_title == null)){

                        console.log(20);
                        this.field = 'Please attach file on attachment 2'
                        this.field_required = true
                        return false

                }else if(this.otherdocument2.length > 0 && (this.otherdocument2_title == '' || this.otherdocument2_title == null)){

                        console.log(21);
                        this.field = 'Please fill title on attachment 3'
                        this.field_required = true
                        return false

                }else if(this.otherdocument2.length == 0 && (!this.otherdocument2_title == '' || !this.otherdocument2_title == null)){

                        console.log(22);
                        this.field = 'Please attach file on attachment 3'
                        this.field_required = true
                        return false

                }else if(this.otherdocument3.length > 0 && (this.otherdocument3_title == '' || this.otherdocument3_title == null)){

                        console.log(23);
                        this.field = 'Please fill title on attachment 4'
                        this.field_required = true
                        return false

                }else if(this.otherdocument3.length == 0 && (!this.otherdocument3_title == '' || !this.otherdocument3_title == null)){

                        console.log(24);
                        this.field = 'Please attach file on attachment 4'
                        this.field_required = true
                        return false

                }else if(this.otherdocument4.length > 0 && (this.otherdocument4_title == '' || this.otherdocument4_title == null)){

                        console.log(25);
                        this.field = 'Please fill title on attachment 5'
                        this.field_required = true
                        return false

                }else if(this.otherdocument4.length == 0 && (!this.otherdocument4_title == '' || !this.otherdocument4_title == null)){

                        console.log(26);
                        this.field = 'Please attach file on attachment 5'
                        this.field_required = true
                        return false

                }else if(this.otherdocument5.length > 0 && (this.otherdocument5_title == '' || this.otherdocument5_title == null)){

                        console.log(27);
                        this.field = 'Please fill title on attachment 6'
                        this.field_required = true
                        return false

                }else if(this.otherdocument5.length == 0 && (!this.otherdocument5_title == '' || !this.otherdocument5_title == null)){

                        console.log(28);
                        this.field = 'Please attach file on attachment 6'
                        this.field_required = true
                        return false

                }else{

                    this.confirm_edit_profile = true
                    return true
                }
               
            },


        uploadother(){ 
                this.other = []
               this.other.push(document.getElementById("other").files[0])
            },

        uploadprofile(){
                //this.profile_image = []
                //this.profile_image.push(document.getElementById("profile_image").files[0])
                //this.profile_image = 'profile image'

                //console.log(this.profile_image);
                if(document.getElementById("profile_image").files[0]){

                    this.profile_image = [];

                    this.profile_image.push(document.getElementById("profile_image").files[0])

                  //  console.log( this.profile_image[0].size);
                                    
                    this.profile_image_extension = this.getFileExtension(document.getElementById("profile_image").files[0].name);

                if ( this.profile_image[0].size < 2024000){

                    
                        if(this.profile_image_extension === 'jpg' 
                            || this.profile_image_extension === 'jpeg' 
                            || this.profile_image_extension === 'png')
                        {
                            
                            var reader = new FileReader();

                            reader.onload = function(){

                                var dataURL = reader.result;

                                var output = document.getElementById('profile_image_thumb');

                                var large_thumbnail = document.getElementById('large_thumbnail');
                                
                                if(output !== null)
                                    output.src = dataURL;

                                if(large_thumbnail !== null)
                                    large_thumbnail.src = dataURL;
                            
                            }

                            reader.readAsDataURL(document.getElementById("profile_image").files[0]);
                        }
                        else if(this.profile_image_extension === 'pdf') {
                            this.profile_image_url = URL.createObjectURL(document.getElementById("profile_image").files[0]);

                            this.previewPdf(this.profile_image_url);
                        }
                }else{
                    
                    this.largefilesize = true
                    this.profile_image_extension = 'largefile'
                    this.profile_image = []
                                      
                }

                
                }
                
                
            },

               
           updateinsurance(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("insurance").files[0]){

                    this.insurance = [];

                    this.insurance.push(document.getElementById("insurance").files[0]);
                    
                    this.insurance_extension = this.getFileExtension(document.getElementById("insurance").files[0].name);

                    
                    if ( this.insurance[0].size < 2024000){

                            if(this.insurance_extension === 'jpg' 
                                || this.insurance_extension === 'jpeg' 
                                || this.insurance_extension === 'png')
                            {

                                var reader = new FileReader();

                                reader.onload = function(){

                                    var dataURL = reader.result;

                                    var output = document.getElementById('insurance_thumb');

                                    var large_thumbnail = document.getElementById('large_thumbnail');
                                    
                                    if(output !== null)
                                        output.src = dataURL;

                                    if(large_thumbnail !== null)
                                        large_thumbnail.src = dataURL;
                                
                                }

                                reader.readAsDataURL(document.getElementById("insurance").files[0]);
                            } else if(this.insurance_extension === 'pdf') {

                                this.insurance_url = URL.createObjectURL(document.getElementById("insurance").files[0]);

                                this.previewPdf(this.insurance_url);


                                /*console.log(src);
                                console.log(output);*/

                            
                                //this.insurance_extension = '';
                            }
                    }else{

                            this.largefilesize = true
                            this.insurance_extension = 'largefile'
                            this.insurance = []

                            }
                
                }
               },

           updatecertificate(){
                //this.certificate = []
               //this.certificate.push(document.getElementById("certificate").files[0])

               this.largefilesize = false
               

                        if(document.getElementById("certificate").files[0]){

                            this.certificate = [];

                            this.certificate.push(document.getElementById("certificate").files[0]);
                            
                            this.certificate_extension = this.getFileExtension(document.getElementById("certificate").files[0].name);

                            if ( this.certificate[0].size < 2024000){

                                    if(this.certificate_extension === 'jpg'
                                    || this.certificate_extension === 'jpeg' 
                                        || this.certificate_extension === 'png')
                                    {


                                        var reader = new FileReader();

                                        reader.onload = function(){

                                            var dataURL = reader.result;

                                            var output = document.getElementById('certificate_thumb');

                                            var large_thumbnail = document.getElementById('large_thumbnail');
                                            
                                            if(output !== null)
                                                output.src = dataURL;

                                            if(large_thumbnail !== null)
                                                large_thumbnail.src = dataURL;
                                        
                                        }

                                        reader.readAsDataURL(document.getElementById("certificate").files[0]);
                                    }
                                    else if(this.certificate_extension === 'pdf'){
                                        this.certificate_url = URL.createObjectURL(document.getElementById("certificate").files[0]);

                                        this.previewPdf(this.certificate_url);
                                    }
                            }else{

                            this.largefilesize = true
                            this.certificate_extension = 'largefile'
                            this.certificate = []
                           // console.log(this.certificate);
                            

                            }

                        
                        }
           },

           updatetin_certificate(){
                //this.certificate = []
               //this.certificate.push(document.getElementById("certificate").files[0])

                if(document.getElementById("tin_certificate").files[0]){

                    this.tin_certificate = [];

                    this.tin_certificate.push(document.getElementById("tin_certificate").files[0]);
                    
                    this.tin_certificate_extension = this.getFileExtension(document.getElementById("tin_certificate").files[0].name);

                    if ( this.tin_certificate[0].size < 2024000){

                            if(this.tin_certificate_extension === 'jpg' 
                                || this.tin_certificate_extension === 'jpeg' 
                                || this.tin_certificate_extension === 'png')
                            {


                                var reader = new FileReader();

                                reader.onload = function(){

                                    var dataURL = reader.result;

                                    var output = document.getElementById('tin_certificate_thumb');

                                    var large_thumbnail = document.getElementById('large_thumbnail');
                                    
                                    if(output !== null)
                                        output.src = dataURL;

                                    if(large_thumbnail !== null)
                                        large_thumbnail.src = dataURL;
                                
                                }

                                reader.readAsDataURL(document.getElementById("tin_certificate").files[0]);
                            }
                            else if(this.tin_certificate_extension === 'pdf'){
                                this.tin_certificate_url = URL.createObjectURL(document.getElementById("tin_certificate").files[0]);

                                this.previewPdf(this.tin_certificate_url);
                            }
                    }else{

                            this.largefilesize = true
                            this.tin_certificate_extension = 'largefile'
                            this.tin_certificate = []
                            console.log(this.tin_certificate);

                    }

                
                }
           },

           updatebusiness_license(){
                //this.certificate = []
               //this.certificate.push(document.getElementById("certificate").files[0])

                if(document.getElementById("business_license").files[0]){

                    this.business_license = [];

                    this.business_license.push(document.getElementById("business_license").files[0]);
                    
                    this.business_license_extension = this.getFileExtension(document.getElementById("business_license").files[0].name);

                    if ( this.business_license[0].size < 2024000){

                            if(this.business_license_extension === 'jpg' 
                                || this.business_license_extension === 'jpeg' 
                                || this.business_license_extension === 'png')
                            {


                                var reader = new FileReader();

                                reader.onload = function(){

                                    var dataURL = reader.result;

                                    var output = document.getElementById('business_license_thumb');

                                    var large_thumbnail = document.getElementById('large_thumbnail');
                                    
                                    if(output !== null)
                                        output.src = dataURL;

                                    if(large_thumbnail !== null)
                                        large_thumbnail.src = dataURL;
                                
                                }

                                reader.readAsDataURL(document.getElementById("business_license").files[0]);
                            }
                            else if(this.business_license_extension === 'pdf'){
                                this.business_license_url = URL.createObjectURL(document.getElementById("business_license").files[0]);

                                this.previewPdf(this.business_license_url);
                            }
                    }else{

                            this.largefilesize = true
                            this.business_license_extension = 'largefile'
                            this.business_license = []
                            console.log(this.business_license);

                    }

                
                }
           },

           otherAttachmentsUpdated(){

                    if(document.getElementById("otheFiles").files[0]){

                       // console.log(document.getElementById("otheFiles").files[0].size);

                        if (document.getElementById("otheFiles").files[0].size < 2024000) {

                                for(var i=0; i< document.getElementById("otheFiles").files.length; i++)
                                    {
                                        /*this.otherFiles.push(
                                            document.getElementById("otheFiles").files[i]);*/
                                        
                                        /*let extension = this.getFileExtension(document.getElementById("otheFiles").files[i].name);

                                        if(extension === 'jpg' || extension === 'jpeg' || extension === 'png' )
                                        {

                                        }
                                        else if(extension === 'pdf'){

                                        }*/
                                        var file = {
                                            file:[],
                                            source:''
                                        }

                                        if(document.getElementById("otheFiles").files[i].type === 'image/jpeg' 
                                                || document.getElementById("otheFiles").files[i].type === 'image/png' )
                                        {
                                        

                                            var reader = new FileReader();

                                            reader.onload = function(){

                                                var dataURL = reader.result;

                                                file.source = dataURL;

                                                var large_thumbnail = document.getElementById('large_thumbnail');
                                                
                                                if(large_thumbnail !== null)
                                                    large_thumbnail.src = dataURL;
                                        
                                            }

                                            reader.readAsDataURL(document.getElementById("otheFiles").files[i]);

                                            file.file = document.getElementById("otheFiles").files[i];

                                            this.otherFiles.push(file);

                                        }
                                        else if(document.getElementById("otheFiles").files[i].type === 'application/pdf')
                                        {
                                            file.source = URL.createObjectURL(document.getElementById("otheFiles").files[i]);

                                            this.previewPdf(file.source);

                                            file.file = document.getElementById("otheFiles").files[i];

                                            this.otherFiles.push(file);

                                            
                                        }
                                    }
                            
                        } else {

                             this.largefilesize = true
                            
                        }
                        

                    }
                },

            
        expansionpannelfiles(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument").files[0]){

                    this.otherdocument = [];

                    this.otherdocument.push(document.getElementById("otherdocument").files[0]);
                    
                    this.otherdocument_extension = this.getFileExtension(document.getElementById("otherdocument").files[0].name);

                    if ( this.otherdocument[0].size < 2024000){

                                if(this.otherdocument_extension === 'jpg' 
                                    || this.otherdocument_extension === 'jpeg' 
                                    || this.otherdocument_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument").files[0]);
                                } else if(this.otherdocument_extension === 'pdf') {

                                    this.otherdocument_url = URL.createObjectURL(document.getElementById("otherdocument").files[0]);

                                    this.previewPdf(this.otherdocument_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument_extension = 'largefile'
                        this.otherdocument = []

                    }                
                }
               },

        
         expansionpannelfiles1(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument1").files[0]){

                    this.otherdocument1 = [];

                    this.otherdocument1.push(document.getElementById("otherdocument1").files[0]);
                    
                    this.otherdocument1_extension = this.getFileExtension(document.getElementById("otherdocument1").files[0].name);

                    if ( this.otherdocument1[0].size < 2024000){

                                if(this.otherdocument1_extension === 'jpg' 
                                    || this.otherdocument1_extension === 'jpeg' 
                                    || this.otherdocument1_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument1_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument1").files[0]);
                                } else if(this.otherdocument1_extension === 'pdf') {

                                    this.otherdocument1_url = URL.createObjectURL(document.getElementById("otherdocument1").files[0]);

                                    this.previewPdf(this.otherdocument1_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument1_extension = 'largefile'
                        this.otherdocument1 = []

                    }                
                }
               },

        
         expansionpannelfiles2(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument2").files[0]){

                    this.otherdocument2 = [];

                    this.otherdocument2.push(document.getElementById("otherdocument2").files[0]);
                    
                    this.otherdocument2_extension = this.getFileExtension(document.getElementById("otherdocument2").files[0].name);

                    if ( this.otherdocument2[0].size < 2024000){

                                if(this.otherdocument2_extension === 'jpg' 
                                    || this.otherdocument2_extension === 'jpeg' 
                                    || this.otherdocument2_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument2_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument2").files[0]);
                                } else if(this.otherdocument2_extension === 'pdf') {

                                    this.otherdocument2_url = URL.createObjectURL(document.getElementById("otherdocument2").files[0]);

                                    this.previewPdf(this.otherdocument2_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument2_extension = 'largefile'
                        this.otherdocument2 = []

                    }                
                }
               },

        expansionpannelfiles3(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument3").files[0]){

                    this.otherdocument3 = [];

                    this.otherdocument3.push(document.getElementById("otherdocument3").files[0]);
                    
                    this.otherdocument3_extension = this.getFileExtension(document.getElementById("otherdocument3").files[0].name);

                    if ( this.otherdocument3[0].size < 2024000){

                                if(this.otherdocument3_extension === 'jpg' 
                                    || this.otherdocument3_extension === 'jpeg' 
                                    || this.otherdocument3_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument3_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument3").files[0]);
                                } else if(this.otherdocument3_extension === 'pdf') {

                                    this.otherdocument3_url = URL.createObjectURL(document.getElementById("otherdocument3").files[0]);

                                    this.previewPdf(this.otherdocument3_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument3_extension = 'largefile'
                        this.otherdocument3 = []

                    }                
                }
               },

        expansionpannelfiles4(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument4").files[0]){

                    this.otherdocument4 = [];

                    this.otherdocument4.push(document.getElementById("otherdocument4").files[0]);
                    
                    this.otherdocument4_extension = this.getFileExtension(document.getElementById("otherdocument4").files[0].name);

                    if ( this.otherdocument4[0].size < 2024000){

                                if(this.otherdocument4_extension === 'jpg' 
                                    || this.otherdocument4_extension === 'jpeg' 
                                    || this.otherdocument4_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument4_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument4").files[0]);
                                } else if(this.otherdocument4_extension === 'pdf') {

                                    this.otherdocument4_url = URL.createObjectURL(document.getElementById("otherdocument4").files[0]);

                                    this.previewPdf(this.otherdocument4_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument4_extension = 'largefile'
                        this.otherdocument4 = []

                    }                
                }
               },
               
        expansionpannelfiles5(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument5").files[0]){

                    this.otherdocument5 = [];

                    this.otherdocument5.push(document.getElementById("otherdocument5").files[0]);
                    
                    this.otherdocument5_extension = this.getFileExtension(document.getElementById("otherdocument5").files[0].name);

                    if ( this.otherdocument5[0].size < 2024000){

                                if(this.otherdocument5_extension === 'jpg' 
                                    || this.otherdocument5_extension === 'jpeg' 
                                    || this.otherdocument5_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument5_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument5").files[0]);
                                } else if(this.otherdocument5_extension === 'pdf') {

                                    this.otherdocument5_url = URL.createObjectURL(document.getElementById("otherdocument5").files[0]);

                                    this.previewPdf(this.otherdocument5_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument5_extension = 'largefile'
                        this.otherdocument5 = []

                    }                
                }
               },
            

            dataobject(){

                if (this.validate()){

                    const formdata = new FormData()

                    if(this.profile_image.length > 0)
                         formdata.append('profile_image[0]',this.profile_image[0]);

                    if(this.certificate.length > 0)
                        formdata.append('certificate[0]', this.certificate[0]);

                    if(this.insurance.length > 0)
                        formdata.append('insurance[0]', this.insurance[0])

                    if(this.tin_certificate.length > 0)
                        formdata.append('tin_certificate[0]', this.tin_certificate[0])

                    if(this.business_license.length > 0)
                        formdata.append('business_license[0]', this.business_license[0])

                    if(this.otherdocument.length > 0){
                        formdata.append('otherfiles[0][file]', this.otherdocument[0])
                        formdata.append('otherfiles[0][name]', this.otherdocument_title)
                        }

                    if(this.otherdocument1.length > 0){
                        formdata.append('otherfiles[1][file]', this.otherdocument1[0])
                        formdata.append('otherfiles[1][name]', this.otherdocument1_title)
                        }

                    if(this.otherdocument2.length > 0){
                        formdata.append('otherfiles[2][file]', this.otherdocument2[0])
                        formdata.append('otherfiles[2][name]', this.otherdocument2_title)
                        }//--

                    if(this.otherdocument3.length > 0){
                        formdata.append('otherfiles[3][file]', this.otherdocument3[0])
                        formdata.append('otherfiles[3][name]', this.otherdocument3_title)
                        }

                    if(this.otherdocument4.length > 0){
                        formdata.append('otherfiles[4][file]', this.otherdocument4[0])
                        formdata.append('otherfiles[4][name]', this.otherdocument4_title)
                        }

                    if(this.otherdocument5.length > 0){
                        formdata.append('otherfiles[5][file]', this.otherdocument5[0])
                        formdata.append('otherfiles[5][name]', this.otherdocument5_title)
                        }

                    formdata.append('company_name', this.name)
                    formdata.append('email', this.mail)
                    formdata.append('tin_number', this.tin)
                    formdata.append('phone', this.phone)
                    formdata.append('fax', this.faxnumber)
                    formdata.append('p_o_box', this.box)
                    formdata.append('country', this.country)
                    formdata.append('city', this.pcity)
                    formdata.append('region', this.pregion)
                    formdata.append('terms_of_payment', this.terms_of_payment) 
                    formdata.append('bank_name', this.bname)
                    formdata.append('account_name', this.aname)
                    formdata.append('account_number', this.acnumber)

                    if(this.otherFiles.length > 0){

                        for( var i = 0; i < this.otherFiles.length; i++ ){

                            let file = this.otherFiles[i].file;

                            formdata.append('files[' + i + ']', file);  
                        }
                    }

                    if(this.currentFiles.length > 0){

                        for( var h = 0; h < this.currentFiles.length; h++ ){
                            
                            let file_path = this.currentFiles[h]['url'];
                            let file_name = this.currentFiles[h]['name'];
                            formdata.append('currentFiles[' + h + '][url]', file_path);
                            formdata.append('currentFiles[' + h + '][name]', file_name);

                        }
                    }
                    else if(this.currentFiles.length === 0)
                    {
                        formdata.append('currentFiles[0][url]','');
                    }

                    return formdata;
                    
                }
                
            },

       previewprofile(){

           setTimeout(()=>{
                this.update_success = false
                this.$router.push('/transporter/previewprofile')
                this.$router.go('/transporter/previewprofile')
            },1000)
       },


       savechanges(){

           console.log(this.validate());  
           
           this.confirm_edit_profile = false

            this.loading = true

            const dataobject = this.dataobject()

            console.log(dataobject.get('profile_image[0]'));                  

           if (this.validate()){
               

               this.confirm_edit_profile = false

               this.$store.dispatch('T_POST_PAYMENT_TERMS',{

                    email : this.mail,
                    installment_desc:this.terms_of_payment,
               
            }).then(()=>{

               console.log('sent payment terms with email');


               if ( this.LOAD_POST_PAYMENT_TERMS){
                                    
                       this.$store.dispatch('T_EDIT_PROFILE',{dataobject, email: this.mail} ).then(() => {

                                    console.log('load profile....');           
                                    console.log(this.LOAD_PROFILE);
                                
                                if (this.LOAD_PROFILE.errorCount == 0 && this.LOAD_PROFILE.genralErrorCode == 8000) {

                                    //console.log(this.LOAD_PROFILE);
                                    this.loading = true;
                                    
                                    setTimeout(()=>{
                                        this.loading= false;
                                        this.update_success = true,
                                        this.confirm_edit_profile = false
                                        this.success_alert = 'Profile Updated successfully'
                                        this.previewprofile()
                                    },1000)

                                    console.log(this.email);
                                    console.log(this.LOAD_PROFILE);

                                }else{

                                    console.log('profile failed');
                                    
                                }
                                
                        }).catch((error)=>{

                            console.log(error.response.status);
                            
                        })                   
               }
               
               
           }).catch((error)=>{

                console.log(error.response.status);

                if (error.response.status == 500) {

                     this.loading = false
                     this.error = 'can not serve you currently, Plese try again later'
                     this.connection_error = true
                    
                }else{

                    this.loading = false
                    this.error = 'Cant update profile please check internet connection and try again'
                    this.connectio_error = true

                    console.log(error.response.data);

                }
                
           })

           }else {
               this.loading = false
           }
                    
        
        console.log(this.company_name);
        
       }

   },

   computed: {
      ...mapGetters([
          'LOAD_AGENT',
          'LOAD_PROFILE',
          'LOAD_POST_PAYMENT_TERMS',
          'LOAD_AGENT_PAYMENT_TERMS'
          
      ])
  }

}
</script>

<style scoped>

 .fileinput{
    position: absolute;
    left: -2000px;
 }

.selectcountry{
          height:103%; 
          width:100%; 
          padding-left: 2%;
          border-color: black ;
          margin-bottom: 0%;
           
  }

.selectcountry:hover {
  border-color:black;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0%;
}

.selectcountry{
          height:103%; 
          width:100%; 
          padding-left: 2%;
          border-color: black ;
          margin-bottom: 0%;
           
  }

.selectcountry:hover {
  border-color:black;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0%;
}


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

.insurance_preview:hover {
  border-color: #F5FAFF;
  color: #4169E1;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0%;
  background-color: #F5FAFF;
}

.largefile{
  border-color: red;
  color: red;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0%;
  background-color: #F5FAFF;
}

.v-expansion-panel::before {
   box-shadow: none !important;
}


</style>