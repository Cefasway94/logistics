
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

        <v-card flat width="900" class="mt-12 mx-auto mb-7" color="#F5FAFF">
            <v-flex row class="px-3 ">
                <h1 class=" font-weight-regular headline mb-0 ">Agents Profile</h1>
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
                width="130"
                @click="editaccount()">
                EDIT PROFILE
                </v-btn>
                
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
                             <div 
                                    v-show="(profile_image_extension === 'jpg') || (profile_image_extension === 'jpeg')|| (profile_image_extension === 'png')" 
                                    @click="largePreview(profile_image_url)"
                                >
                                    <img :src="profile_image_url" width=200 height=150/>
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
                    <p class="bondy-2 mb-0 ml-3 mb-2 primary--text">Certificate</p>
                     <v-card 
                     flat 
                     width="200" 
                     height="150" 
                     outlined 
                     class="mx-3">

                         <v-flex 
                         class="" 
                         style="background-color:#F5FAFF;" 
                         v-show="(certificate_extension === 'jpg') || (certificate_extension === 'jpeg') || (certificate_extension === 'png')" 
                         @click="largePreview(certificate_url)">
                            
                            <v-tooltip right color="#1565C0">
                                <template v-slot:activator="{ on }">
                                    <v-img 
                                    :src="certificate_url"  
                                    class="mb-0 pb-0 oxoImg" 
                                    height="147" 
                                    width="200"
                                    v-on="on">
                                    </v-img>
                                </template>
                                <span> click to view image </span>
                            </v-tooltip>

                         </v-flex>

                         <v-flex v-show="certificate_extension === 'pdf'">
                             <v-tooltip right color="#1565C0">
                                <template v-slot:activator="{ on }">
                                    <v-card 
                                        flat
                                        color=""
                                        height="148"
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
                        </v-flex>
                    </v-card>
                </v-col>

                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-2 primary--text">Insurance</p>

                            <v-card 
                            flat 
                            width="200" 
                            height="150" 
                            outlined 
                            class="mx-3">
                                <v-flex 
                                class="" 
                                style="background-color:#F5FAFF;" 
                                v-show="(insurance_extension === 'jpg') || (insurance_extension === 'jpeg') || (insurance_extension === 'png')" 
                                @click="largePreview(insurance_url)">

                                    <v-tooltip right color="#1565C0">
                                        <template v-slot:activator="{ on }">
                                            <v-img 
                                            :src="insurance_url"  
                                            class="mb-0 pb-0 oxoImg" 
                                            height="147" 
                                            width="200" 
                                            v-on="on">
                                            </v-img>
                                        </template>
                                        <span> click to view image </span>
                                    </v-tooltip>
                                </v-flex>

                                <v-flex v-show="insurance_extension === 'pdf'">

                                    <v-tooltip right color="#1565C0">
                                        <template v-slot:activator="{ on }">
                                            <v-card 
                                                flat
                                                color=""
                                                height="148"
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

                                </v-flex>
                            </v-card>
                </v-col>

                <!--<v-col>
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
                </v-col> -->        

            </v-row>

            <v-row class="mt-5" v-if="otherFiles.length > 0">

                <v-col cols=12><p class="primary--text body-1 mb-2"> OTHER DOCUMENTS</p></v-col>

                <v-col cols=12 md=4 v-for="(file,key) in otherFiles" :key="key">

                    <v-card flat width="200" height="150" outlined>
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


            <v-flex  column class=" pt-4">
            <v-flex class="">
            <p class="bondy-2  nb-2 ml-3">Payment terms</p>
            </v-flex>
            <v-row class="pb-2">
            <v-flex row xs12 sm4 md4 lg4 xl4 class="  justify-center" 
             v-for="(tender, i) in payment_terms" :key="i"  >
             <v-chip
            class="ma-2"
            >
            {{tender}}
            </v-chip>

            </v-flex>
            </v-row>
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
import PDFDocument from '@/components/PDFDocument'
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
           profileimage:[],

           //others 
           edited:false,
           verification:false,
           loading:false,
           edit:false,
           payment_terms:[],

           //preview urls:
           profile_image_url:'',
           profile_image_extension:'',
           insurance_url:'',
           insurance_extension:'',
           certificate_url:'',
           certificate_extension:'',
           large_preview_url:'',
           overlay: false,
           url:'',
            pdf:false,
            pdfOverlay:false,

            //call other files
            otherFiles:[],
          
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


                if(this.LOAD_AGENT.objects.profile_image !== null)
                {
                    this.profile_image_url = this.LOAD_AGENT.objects.profile_image[0];
                    this.profile_image_extension = this.getFileExtension(this.profile_image_url);
                }

                 if(this.LOAD_AGENT.objects.insurance !== null)
                {
                    this.insurance_url = this.LOAD_AGENT.objects.insurance[0];
                    this.insurance_extension = this.getFileExtension(this.insurance_url);
                }

                 if(this.LOAD_AGENT.objects.certificate !== null)
                {
                    this.certificate_url = this.LOAD_AGENT.objects.certificate[0];
                    this.certificate_extension = this.getFileExtension(this.certificate_url);
                }

                //other files
                if(this.LOAD_AGENT.objects.files !== null)
                    {
                        this.otherFiles = this.LOAD_AGENT.objects.files;
                    }
                
                this.name = this.LOAD_AGENT.objects.company_name
                this.faxnumber = this.LOAD_AGENT.objects.fax
                this.tin = this.LOAD_AGENT.objects.tin_number
                this.phone = this.LOAD_AGENT.objects.phone
                this.mail = this.LOAD_AGENT.objects.email
                this.box = this.LOAD_AGENT.objects.p_o_box
                this.countrys = this.LOAD_AGENT.objects.country
                this.pcity = this.LOAD_AGENT.objects.city
                this.pregion = this.LOAD_AGENT.objects.city
                this.bname = this.LOAD_AGENT.objects.bank_name
                this.aname = this.LOAD_AGENT.objects.account_name
                this.acnumber = this.LOAD_AGENT.objects.account_number
                

           }else{
                this.mail = localStorage.client
           }
        }).then(()=>{
            console.log("its me agent")
            this.GET_AGENT_PAYMENT_TERMS(localStorage.client).then(()=>{

                  console.log('transporter payment terms');
                  console.log(this.LOAD_AGENT_PAYMENT_TERMS.length);

                  for (let index = 0; index < this.LOAD_AGENT_PAYMENT_TERMS.length; index++) {

                      this.payment_terms.push( this.LOAD_AGENT_PAYMENT_TERMS[index].installment_desc)                      
                  }
                  console.log(this.payment_terms);
                  
              })
        })

    },
    components:{PDFDocument},

   methods: {

       ...mapActions([
        "GET_AGENT",
        "POST_PAYMENT_TERMS",
        "GET_AGENT_PAYMENT_TERMS"
    ]),
      
       editaccount(){
                console.log(this.terms_of_payment);
                this.$router.push('/agent/editprofile')
                   
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


</style>
<style scoped>

.large-preview{

    /*width: 500px;
    height: 500px;*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    
 }

  .insurance_preview:hover {
  border-color: #F5FAFF;
  color: #4169E1;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0%;
  background-color: #F5FAFF;
}

</style>
