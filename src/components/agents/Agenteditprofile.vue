
<template>
    <v-container class="my-12 px-5">

        
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
                    v-model="confirm_edit_profile"
                    max-width="450"
                    color="#2296f3"
                    transition="scale-transition"
                    :hide-overlay="true">
                        <v-card 
                    height="100" 
                    color="#2296f3" 
                    clas>
                  <v-alert
                  prominent
                    type="info"
                    >
                    <v-row align="center">
                        <v-col class="grow">
                            Confirm profile update
                        </v-col>
                        <v-col class="shrink">
                        <v-btn 
                        outlined
                        small
                         @click="savechanges()">
                            Confirm update
                            </v-btn>
                        </v-col>
                    </v-row>
                    </v-alert>
                        </v-card>
                    </v-dialog>

                 
                    <v-dialog
                    v-model="update_success"
                    max-width="430"
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
                        <v-col class="shrink">
                        <v-btn 
                        color="green"
                        small
                        flat
                        elevation="flat"
                        @click="previewprofile()">
                            profile
                            </v-btn>
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
                <h1 class=" font-weight-regular headline mb-0 ">Agents Profile info</h1>
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
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Agent details</h1>
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
                            <p class="primary--text body-2 text-uppercase mb-0"> PROFILE  <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="profile_image" 
                                    @change="uploadprofile()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'profile image is required']"
                                    required
                                
                                >

                                </v-file-input>

                                <div v-show="profile_image_extension === 'jpg' || profile_image_extension === 'jpeg' || profile_image_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('profile_image',profile_image_url)">
                                        <img  id="profile_image_thumb" :src="profile_image_url" class="preview">
                                    </v-card>
                                </div>

                                <div v-show="profile_image_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(profile_image_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                                

                            </v-card>
                    
                        </v-col>
                </v-flex> 
            

            <v-flex row class="">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Name</p>
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
                    <p class="bondy-2 mb-0">Tin No</p>
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
                    <v-card
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
                    </v-card>
                </v-flex>

                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">City</p>
                    <v-text-field 
                    v-model="pcity"
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
                
            </v-flex>
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

            <v-row class="pt-3">
                <!--<v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-0">Certificate</p>
                     <v-card 
                     flat 
                     color="#F5FAFF" 
                     width="200" 
                     height="150" 
                     outlined 
                     class="mx-3">
                         <v-flex class="" >
                            <v-file-input 
                            id="certificate"
                            ref="certificate"
                            type="file"
                            flat 
                            dropzone 
                            class="mb-0 pb-0" 
                            height="150" 
                            width="100" 
                            outlined 
                            prepend-icon=""
                            @change="updatecertificate()">
                            </v-file-input>
                         </v-flex>
                    </v-card>
                </v-col>-->
                <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> Certificate  <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="certificate" 
                                    @change="updatecertificate()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'identity card is required']"
                                    required
                                
                                >

                                </v-file-input>

                                <div v-show="certificate_extension === 'jpg' || certificate_extension === 'jpeg' || certificate_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('certificate',certificate_url)">
                                        <img  id="certificate_thumb" :src="certificate_url" class="preview">
                                    </v-card>
                                </div>

                                <div v-show="certificate_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(certificate_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-card>
                        </v-col> 

                <!--<v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-0">Insurance</p>
                     <v-card 
                     flat color="#F5FAFF" 
                     width="200" 
                     height="150" 
                     outlined 
                     class="mx-3">
                         <v-flex class="" >
                            <v-file-input 
                            id="insurance"
                            ref="insurance"
                            type="file"
                            flat 
                            dropzone 
                            class="mb-0 pb-0" 
                            height="150" 
                            width="100" 
                            outlined 
                            prepend-icon="" 
                            @change="updateinsurance()"
                            >
                            </v-file-input>
                         </v-flex>
                    </v-card>
                </v-col>-->

                <v-col cols=12 sm=4 class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> Insurance  <span class="red--text"><strong>* </strong></span></p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    :clearable="false"
                                    placeholder="Choose a file"
                                    id="insurance" 
                                    @change="updateinsurance()"
                                    prepend-icon ="mdi-cloud-upload"
                                    :rules="[v => !!v || 'Insurance is required']"
                                    required
                                >

                                </v-file-input>

                                <div v-show="insurance_extension === 'jpg' || insurance_extension === 'jpeg' || insurance_extension === 'png'">
                                    <v-card height="200" width="250" outlined @click="handleClick('insurance',insurance_url)">
                                        <img  id="insurance_thumb" :src="insurance_url" class="preview">
                                    </v-card>
                                </div>

                                <div v-show="insurance_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(insurance_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-card>
                        </v-col> 

                <!--<v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-0">Other</p>
                     <v-card 
                     flat color="#F5FAFF" 
                     width="200" 
                     height="150" 
                     outlined 
                     class="mx-3">
                         <v-flex class="" >
                            <v-file-input
                            id="other"
                            ref="other"
                            type="file" 
                            flat 
                            dropzone 
                            class="mb-0 pb-0" 
                            height="150" 
                            width="100" 
                            outlined 
                            prepend-icon=""
                            @change="uploadother()" 
                            ></v-file-input>
                         </v-flex>
                    </v-card>
                </v-col>-->     
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
             :rules="[rules.required]">
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
             :rules="[rules.required]">
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
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
/* eslint-disable no-console */
export default {
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
           terms_of_payment:[],
           bname:'',
           aname:'',
           acnumber:'',

           // temrs and condition field
           terms_required:'*',
           field_required:false,
           field:'',

           // connection error
           connectio_error:'',
           error:'',

           // Update success
           update_success:false,
           success_alert:'',

           // confirm edit profiile
           confirm_edit_profile:'',


           rules: {
            required: value => !!value || "Required",
            number: value => {
              const pattern = /^\d+$/;
              return pattern.test(value) || "Number only required"
            },

            min: v => v.length >= 8 || 'Min 8 characters',

            email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "invalid email";
            }
           },

           // files
           certificate:[],
           insurance:[],     
           other:[],
           profile_image:[],

           //others 
           edited:false,
           verification:false,
           loading:false,
           editaccounts:true,
           canceledits:false,
           edit:false,
           payment_terms:['Full payment', 'Pay in 2 installments (50%, 50%)', 'Pay in 3 installments (30%, 40%, 30%)'],
          
           // Priview thumb nails
           large_preview_url:'',
           overlay: false,

           startswith:false,
           
           profile_image_extension:'',
           profile_image_url:'',

           certificate_extension:'',
           certificate_url:'',

           insurance_extension:'',
           insurance_url:''
    }
   },


    created (){
         
        this.GET_AGENT(localStorage.client).then(()=>{

            console.log(this.LOAD_AGENT);

            if (
                !this.LOAD_AGENT.objects.agent_id == '' && 
                this.LOAD_AGENT.objects.is_verified == 0 ){

                this.verification = true
                
            }

            if (!this.LOAD_AGENT.objects.agent_id == ''){
                
                 if(this.LOAD_AGENT.objects.certificate !== null)
                {
                    
                    this.certificate_url = this.LOAD_AGENT.objects.certificate[0]

                    this.certificate_extension = this.getFileExtension(this.certificate_url);

                    console.log(this.certificate_extension);
                    

                }

                if(this.LOAD_AGENT.objects.profile_image !== null)
                {
                    
                    this.profile_image_url = this.LOAD_AGENT.objects.profile_image[0]

                    this.profile_image_extension = this.getFileExtension(this.profile_image_url);

                    console.log(this.certificate_extension);
                    

                }

                if(this.LOAD_AGENT.objects.insurance !== null)
                {
                    
                    this.insurance_url = this.LOAD_AGENT.objects.insurance[0]

                    this.insurance_extension = this.getFileExtension(this.insurance_url);

                    console.log(this.insurance_extension);
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
           }else{
                this.mail = localStorage.client
           }
        })

    },

   methods: {

       ...mapActions([
        "GET_AGENT",
        "POST_PAYMENT_TERMS"
    ]),
      
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

                }else if(this.rules.required(this.pregion) == 'Required'){

                        console.log(8);
                        this.field = 'Region field is required'
                        this.field_required = true
                        return false

                }else if((this.terms_of_payment) == '' || (this.terms_of_payment) == 'null'){

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

                }else if(this.rules.required(this.acnumber) == 'Required'){

                        console.log(13);
                        this.field = 'Account number field is required'
                        this.field_required = true
                        return false

                }else{

                    this.confirm_edit_profile = true
                    return true
                }
               
            },
               
           updateinsurance(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("insurance").files[0]){

                    this.insurance = [];

                    this.insurance.push(document.getElementById("insurance").files[0]);
                    
                    this.insurance_extension = this.getFileExtension(document.getElementById("insurance").files[0].name);

                    if(this.insurance_extension === 'jpg' || this.insurance_extension === 'jpeg' || this.insurance_extension === 'png')
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
                    } else {
                        this.insurance_extension = '';
                    }

                
                }
               },

           updatecertificate(){
                //this.certificate = []
               //this.certificate.push(document.getElementById("certificate").files[0])

                if(document.getElementById("certificate").files[0]){

                    this.certificate = [];

                    this.certificate.push(document.getElementById("certificate").files[0]);
                    
                    this.certificate_extension = this.getFileExtension(document.getElementById("certificate").files[0].name);

                    if(this.certificate_extension === 'jpg' || this.certificate_extension === 'jpeg' || this.certificate_extension === 'png')
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
                    else {
                        this.certificate_extension = '';
                    }

                
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

                    this.profile_image.push(document.getElementById("profile_image").files[0]);
                    
                    this.profile_image_extension = this.getFileExtension(document.getElementById("profile_image").files[0].name);

                    if(this.profile_image_extension === 'jpg' || this.profile_image_extension === 'jpeg' || this.profile_image_extension === 'png')
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
                    else {
                        this.profile_image_extension = '';
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

                    return formdata;
                    
                }
                
            },

       previewprofile(){
           
           this.$router.push('/agent/previewprofile')
           this.$router.go('/agent/previewprofile')
      
      },

       savechanges(){

           console.log(this.validate());        

            this.loading = true

            const dataobject = this.dataobject()

            console.log(dataobject.get('profile_image[0]'));                  

           if (this.validate()){

               this.$store.dispatch('POST_PAYMENT_TERMS',{

                    email : this.mail,
                    installment_desc:this.terms_of_payment,
               
            }).then(()=>{

               console.log('sent payment terms with email');


               if ( this.LOAD_POST_PAYMENT_TERMS){
                                    
                       this.$store.dispatch('EDIT_PROFILE',{dataobject, email: this.mail} ).then(() => {

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

               this.loading = false
               this.error = 'Cant update profile please check internet connection and try again'
                this.connectio_error = true

                console.log(error.response.data);
                
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
          'LOAD_POST_PAYMENT_TERMS'
          
      ])
  }

}
</script>

<style scoped>

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


</style>