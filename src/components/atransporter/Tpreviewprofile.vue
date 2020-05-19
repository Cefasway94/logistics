
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
                
                </v-flex>
                </v-flex>
                </v-alert>    
                
                </v-dialog>   


                
        <v-card flat width="900" class="mt-12 mx-auto mb-7" color="#F5FAFF">
            <v-flex row class="px-3 ">
                <h1 class=" font-weight-regular headline mb-0 ">Transporter Profile</h1>
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
                
                <v-btn
                color="#4169E1" 
                class="white--text" 
                width="100"
                @click="editaccount()">
                EDIT
                </v-btn>
                
            </v-flex>
        </v-card>

        <v-card 
        width="900" 
        class="mt-5 mx-auto mb-5 pl-3 pb-3 pr-3">

        <!-- loading -->
                
                <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>
               

            <v-flex column class="pt-5">

           
             
                <v-flex row class="pb-7 pl-2" style="background-color:;">
                        <v-flex>
                        <p class="bondy-2 mb-0 ml-3 mb-2">Profile Image</p>
                        <v-card
                        flat  
                        width="200" 
                        height="150" 
                        outlined 
                        class="mx-3"
                        style="bo">
                            <v-flex class="" style="background-color:#F5FAFF;" >
                            <v-img 
                            :src="profileimage"
                            class="mb-0 pb-0" 
                            height="147" 
                            width="100" 
                            >
                            </v-img>
                         </v-flex>
                        </v-card>
                        </v-flex>
                </v-flex> 

            </v-flex>

        <v-card flat  width="900 " class="pl-5" color="" outlined="">           
            
            <v-flex column class="pt-3">
            <v-flex row class="">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 primary--text mb-0">Name</p>
                    <p 
                    class=" mt-3" 
                    color="#4169E1">{{name}}
                    </p>
                </v-flex>

                <v-flex row sm4 mb4 justify-center>
              
                <v-flex column class="">
                    <p class="bondy-2 primary--text mb-0">Tin No</p>
                    <p 
                    class=" mt-3" 
                    color="#4169E1">{{tin}}
                    </p>
                </v-flex>
                </v-flex>
            </v-flex>
            </v-flex>

            <v-flex column>
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 mt-5 mb-2">CONTACTS</h1>
            <v-divider class="mb-5"></v-divider>
            </v-flex>

            <v-flex row class="mt-4">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 primary--text mb-0">Phone number</p>
                    <p 
                    class=" mt-2" 
                    color="#4169E1">{{phone}}
                    </p>
                </v-flex>

                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 primary--text mb-0">Fax</p>
                    <p 
                    class=" mt-2" 
                    color="#4169E1">{{faxnumber}}
                    </p>
                </v-flex>
                </v-flex>
            </v-flex>

            <v-flex row class="mt-3">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 primary--text mb-0">Email</p>
                    <p 
                    class=" mt-2" 
                    color="#4169E1">{{mail}}
                    </p>
                </v-flex>
                
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                     <p class="bondy-2 primary--text mb-0">P.O.Box</p>
                    <p 
                    class=" mt-2" 
                    color="#4169E1">{{box}}
                    </p>
                </v-flex>
                </v-flex>
            </v-flex>

            </v-flex>


            <v-flex column>
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 mt-5 mb-2">LOCATION</h1>
            <v-divider class="mb-4"></v-divider>
            </v-flex>

            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 primary--text mb-0">Country</p>
                    <p 
                    class=" mt-2" 
                    color="#4169E1">{{country}}
                    </p>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 primary--text mb-0">City/Region/County</p>
                    <p 
                    class=" mt-2" 
                    color="#4169E1">{{pcity}}
                    </p>
                </v-flex>
                </v-flex>
            </v-flex>

            </v-flex>
            </v-card>
        </v-card>
    
        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="">attachments</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Attachments</h1>
            </v-flex>
        </v-card>

    
        <v-card 
         width="900" 
         class="mt-5 mx-auto mb-5 pb-3 pl-3 pr-3">

        <!-- loading -----  -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>

            <v-row class="pt-3">
                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-2">Certificate</p>
                     <v-card 
                     flat 
                     width="200" 
                     height="150" 
                     outlined 
                     class="mx-3">
                         <v-flex class="" style="background-color:#F5FAFF;" >
                            <v-img 
                            :src="certificate"
                            class="mb-0 pb-0" 
                            height="147" 
                            width="100" 
                            >
                            </v-img>
                         </v-flex>
                    </v-card>
                </v-col>

                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-2">Insurance</p>
                     <v-card 
                     flat
                     width="200" 
                     height="150" 
                     outlined 
                     class="mx-3 ">
                         <v-flex class="" style="background-color:#F5FAFF;" >
                            <v-img 
                            :src="insurance"
                            class="mb-0 pb-0" 
                            height="147" 
                            width="100" 
                            >
                            </v-img>
                         </v-flex>
                    </v-card>
                </v-col>

                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-2">Other</p>
                     <v-card 
                     flat
                     width="200" 
                     height="150" 
                     outlined 
                     class="mx-3">
                         <v-flex class="" style="background-color:#F5FAFF;" >
                            <v-img 
                            :src="other"
                            class="mb-0 pb-0" 
                            height="147" 
                            width="100" 
                            >
                            </v-img>
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

        <v-card
          width="900" 
          class="mt-5 mx-auto px-3 " >

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

        <v-card   width="900" class=" mt-5 mx-auto px-3 ">

             <!-- loading -----  -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>
                

             <v-card flat  width="900 " class="my-5 py-3 " >     

                <v-flex row class="mt-4">
                <v-flex column xs6 sm4 mb4 lg4 class="px-6">
                    <center>
                    <p class="bondy-2 primary--text mb-0">Bank name</p>
                    <p 
                    class=" mt-2" 
                    color="#4169E1">{{bname}}
                    </p>
                    </center>
                </v-flex>

                <v-flex row xs6 sm4 mb4 lg4 justify-center>
                <v-flex>
                    <center>
                    <p class="bondy-2 primary--text mb-0">Account name</p>
                    <p 
                    class=" mt-2" 
                    color="#4169E1">{{aname}}
                    </p>
                    </center>
                </v-flex>
                </v-flex>

                <v-flex row xs6 sm4 mb4 lg4 justify-center>
                <v-flex>
                    <center>
                    <p class="bondy-2 primary--text mb-0">Acount number</p>
                    <p 
                    class=" mt-2" 
                    color="#4169E1">{{acnumber}}
                    </p>
                    </center>
                </v-flex>
                </v-flex>
            </v-flex>
             </v-card>
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
           certificate:'',
           insurance:'',     
           other:'',
           profileimage:'',

           //others 
           edited:false,
           verification:false,
           loading:false,
           payment_terms:['Full payment', 'Pay in 2 installments (50%, 50%)', 'Pay in 3 installments (30%, 40%, 30%)'],
          
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
        "T_GET_AGENT","T_POST_PAYMENT_TERMS"
    ]),
      
            editaccount(){
                console.log(this.terms_of_payment);
                this.$router.push('/transporter/editprofile')
                //this.$router.go('/transporter/editprofile')   
              },

            
   },

   computed: {
      ...mapGetters([
          'LOAD_AGENT','LOAD_PROFILE','LOAD_POST_PAYMENT_TERMS'
          //'LOAD_DIBTENDERS'
      ])
  }

}
</script>