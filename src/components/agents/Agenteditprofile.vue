
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
                Welcome to ubalori, this your working desk.
                </p>
                <p class="text--text subtitle-1 mb-0">
                Please edit your profile to complete registration
                </p>
                </v-flex>
                </v-flex>
                <v-flex  xsm3 sm3 md3 lg3>
                <!-- <v-btn  
                width="200" 
                large="" 
                elevation="flat" 
                color="primary" 
                class="mx-5 mt-2"
                @click="editprofile()">
                edit profile
                </v-btn> -->
                </v-flex>
                </v-flex>
                </v-alert>    
                
                </v-dialog>   


                <!-- <v-alert
                text
                outlined
                class=""
                :value="verification"
                color="green"
                type="error"
                row
                clearable
                >
                <v-flex row>
                <v-flex xms11 sm11 md11 lg11 class="pl-3">
                <p class="text--text title mb-0">
                Your account has been registered, please stay put for it
                to be verified
                </p>
                </v-flex>
                </v-flex>
                </v-alert> -->
                                
                    <!-- alert ----------------------------- -->



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
                <v-btn
                color="#4169E1" 
                class="white--text" 
                width="100"
                v-show="editaccounts" 
                @click="editaccount()">EDIT</v-btn>
                <v-btn
                color="#4169E1" 
                class="white--text" 
                width="100"
                v-show="canceledits" 
                @click="canceledit()">CANCEL</v-btn>
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

            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5">ABOUT AGENT</h1>
            </v-flex>

             
                <v-flex row class="pb-5 pl-2" style="background-color:;">
                        <v-flex>
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
                        </v-flex>
                </v-flex> 
            

            <v-flex row class="">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Name</p>
                    <v-text-field
                    v-model="name" 
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1">
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
                    >
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
                    color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">Fax</p>
                    <v-text-field 
                    v-model="faxnumber"
                    outlined 
                    color="#4169E1" 
                    clearable ></v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Email</p>
                    <v-text-field
                    v-model="mail"
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">P.O.Box</p>
                    <v-text-field 
                    v-model="box"
                    outlined 
                    color="#4169E1" 
                    clearable ></v-text-field>
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
                    <v-text-field 
                    v-model="country"
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">City</p>
                    <v-text-field 
                    v-model="pcity"
                    outlined 
                    color="#4169E1" 
                    clearable ></v-text-field>
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
                    color="#4169E1"></v-text-field>
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
                <v-col>
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
                </v-col>

                <v-col>
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
                </v-col>

                <v-col>
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
                </v-col>         
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
            >
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
            color="#4169E1">
            </v-text-field>
            </v-flex>
            <v-flex column class="px-3">
            <p class="bondy-2 mb-0 mb-0">Account name</p>
            <v-text-field 
            v-model="aname"
            outlined 
            class="" 
            clearable 
            color="#4169E1">
            </v-text-field>
            </v-flex>
            <v-flex column class="px-3">
            <p class="bondy-2 mb-0 mb-0">Acount number</p>
            <v-text-field
            v-model="acnumber"
            outlined 
            class="" 
            clearable 
            color="#4169E1">
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
            @click="savechanges()">
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
           mail:'',
           box:'',
           country:'',
           pregion:'',
           terms_of_payment:[],
           bname:'',
           aname:'',
           acnumber:'',

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
           edit:true,
           payment_terms:['Full payment', 'Pay in 2 installments (50%, 50%)', 'Pay in 3 installments (30%, 40%, 30%)'],
          
          // fields
        //    certificates:'',
        //    insurances:'',
        //    others:'',
        //    company_name:'',
        //    tin_number:'',
        //    phone_number:'',
        //    fax:'',
        //    email:localStorage.client,
        //    pobox:'',
        //    city:'',
        //    region:'',
        //    terms_of_payment:[],
        //    bank_name:'',
        //    account_name:'',
        //    account_number:'',

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
        "GET_AGENT","POST_PAYMENT_TERMS"
      //'GET_TENDERSDETAIL'
    ]),
      
       editaccount(){
           console.log(this.terms_of_payment);
           this.editaccounts = false
           this.canceledits = true
           
               this.edit=false
               this.btnedit= "cancel"    
                // this.name = ''
                // this.faxnumber = ''
                // this.tin = ''
                // this.phone = ''
                // this.mail = ''
                // this.box = ''
                // this.nation = ''
                // this.pcity = ''
                // this.pregion = ''
                // this.bname = ''
                // this.aname = ''
                // this.acnumber = ''
               
           },

           canceledit(){

                 this.editaccounts = true
                 this.canceledits = false
                 this.edit = true
                
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
           },


           updateinsurance(){
               this.insurance.push(document.getElementById("insurance").files[0])
               },

           updatecertificate(){
               this.certificate.push(document.getElementById("certificate").files[0])
           },
            
            uploadother(){ 
               this.other.push(document.getElementById("other").files[0])
            },

            uploadprofile(){
                this.profile_image.push(document.getElementById("profile_image").files[0])
                //this.profile_image = 'profile image'
            },

            dataobject(){

                const formdata = new FormData()

                formdata.append('profile_image[0]',this.profile_image[0])
                formdata.append('certificate[0]', this.certificate[0])
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
                
            },

       

       savechanges(){

           this.loading = true

           console.log(this.terms_of_payment);

           const dataobject = this.dataobject()

           console.log(dataobject.get('profile_image'));
           

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
                                        this.edited= true;
                                        this.$router.push('/agent/tenders/open') 
                                        this.$router.go('/agent/tenders/open')
                                    },1000)

                                    console.log(this.email);
                                    console.log(this.LOAD_PROFILE);

                                }else{

                                    console.log('profile failed');
                                    
                                }
                                
                        }).catch((error)=>{

                            console.log(error);
                            
                        })                   
               }
               
               
           })
           
        
        console.log(this.company_name);
        
       }

   },

   computed: {
      ...mapGetters([
          'LOAD_AGENT','LOAD_PROFILE','LOAD_POST_PAYMENT_TERMS'
          //'LOAD_DIBTENDERS'
      ])
  }

}
</script>