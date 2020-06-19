<template>
    <v-container class=" mt-12 px-5 pt-12">
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

            <v-card flat width="900" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                <v-flex class="px-3" >
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">{{LOAD_TENDER.cargo_details}}</h1>
                <v-chip color="mainorange" small class="white--text ml-7 mt-1">{{LOAD_DASHBOARD.objects.bid_status}}</v-chip>
                </v-row>
                <p class="grey--text mb-0">{{LOAD_TENDER.description}}</p>
                </v-flex>
                 <v-flex row class="px-7 pt-2" >
                            <v-spacer></v-spacer>
                            <!-- Removed router to and added the 'listId' function that consologs the id passed from New tenders page
                                <v-btn color="#4169E1" @click="listId ()" large class="white--text" rauter to="/agent/biding">Bid on tender</v-btn> -->
                            <!-- <v-btn 
                            color="#4169E1" 
                            large class="white--text"
                            @click="terminatebid()">
                            termianate bid
                            </v-btn> -->
                        </v-flex>
                </v-flex>
            </v-card>

            <v-card flat width="900" class=" mx-auto px-5" color="#F5FAFF"  >
                <v-flex row >
                <v-flex sm12 md12 lg12 xlg12 >
                    <v-card width="" class="pt-6 pb-3 pl-8" >
                        <v-flex column>
                      
                        <v-flex row >
                            
                            <v-flex column >

                                <p class="primary--text body-1 mb-2"> TENDER ID </p>
                                <p class="body-1">{{LOAD_TENDER.tender_id}}</p>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                            <p class="body-1">{{LOAD_TENDER.cargo_size}}</p>
                            </v-flex>
                            

                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> DELIVERY DATE </p>
                            <p class="body-1">{{LOAD_TENDER.customer_delivery_timeline}}</p>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> AMOUNT </p>
                            <p class="body-1">{{customer_offer_amount}} {{LOAD_TENDER.currency}}</p>
                            </v-flex>

                        </v-flex>

                        <v-flex row >

                        <v-flex column class="mt-5 pr-4">
                            <p class="primary--text body-1  mb-2"> BILL OF LADING </p>
                            <p class="body-1">{{LOAD_TENDER.bill_of_lading_number}}</p>
                        </v-flex>

                        <v-flex column class="mt-7 pr-4">
                            <p class="primary--text body-1 mb-0"> TERMS AND CONDITIONS </p>
                            <p class="body-1">{{LOAD_TENDER.customer_terms_and_conditions}}</p>
                        </v-flex>

                         </v-flex>

                        <!-- <v-flex row class="mt-10 mb-4" >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> BILL OF LADING </p>
                            <v-card flat width="200" height="150" outlined>
                            <div 
                                v-show="(bill_of_lading_extension === 'jpg') || (bill_of_lading_extension === 'jpeg') || (bill_of_lading_extension === 'png')" 
                                @click="largePreview(bill_of_lading_url)"
                            >
                                
                                <v-img 
                                    :src="bill_of_lading_url"  
                                    class="mb-0 pb-0 oxoImg" 
                                    height="147" 
                                    width="200" >
                                </v-img>
                            </div>
                
                            <div v-show="bill_of_lading_extension === 'pdf'">

                                <v-btn 
                                    :block="true"
                                    icon class="mt-7" 
                                    @click="previewPdf(bill_of_lading_url)"
                                    >
                                    PREVIEW<v-icon x-large>mdi-file</v-icon>
                                </v-btn>
                                

                            </div>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> AUTHORITY LETTER </p>
                            <v-card flat width="200" height="150" outlined>
                                <div 
                                    v-show="(letter_extension === 'jpg') || (letter_extension === 'jpeg') || (letter_extension === 'png')" 
                                    @click="largePreview(letter_url)"
                                >
                                   
                                    <v-img 
                                        :src="letter_url"  
                                        class="mb-0 pb-0 oxoImg" 
                                        height="147" 
                                        width="200" >
                                    </v-img>
                                </div>
                    
                                <div v-show="letter_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(letter_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO PHOTO</p>
                            <v-card flat width="200" height="150" outlined>
                                <div 
                                    v-show="(photo_extension === 'jpg') || (photo_extension === 'jpeg') || (photo_extension === 'png')" 
                                    @click="largePreview(photo_url)"
                            >
                                   
                                    <v-img 
                                        :src="photo_url"  
                                        class="mb-0 pb-0 oxoImg" 
                                        height="147" 
                                        width="200" >
                                    </v-img>
                                </div>
                        
                                <div v-show="photo_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(photo_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                        </v-card>
                            </v-flex>
                        </v-flex> -->
                        </v-flex>

<!-- display other files -->
            <!-- <v-row class="mt-5" v-if="otherFiles.length > 0">

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
            </v-row>  -->

            </v-card>

            </v-flex>

                <!-- <v-flex sm12 md3 lg3 xlg3 class="px-3 ">

                    <v-card color="#4169E1" width="" class="py-4 px-5">
                        <v-flex row >
                            <v-flex column class="px-3" >
                            <p  class="white--text body-1 font-weight-bold" > {{LOAD_DASHBOARD.objects.bid_id}} </p>
                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text" >mail_outline</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Lorem@gamil.com</p>
                            </v-flex>
                            </v-flex>

                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text"  >room</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Street location, st</p>
                            </v-flex>
                            </v-flex>

                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text" >local_phone</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                             <v-flex class="pl-8">
                            <p class="white--text ">Lorem@gamil.com</p>
                            </v-flex>
                            </v-flex>
                            </v-flex>

                        </v-flex>

                    </v-card>
                </v-flex> -->
                </v-flex>
            </v-card>

<!-- biding---------------------------- -->

        

         <v-card flat width="900" class=" mx-auto px-2 mt-10" color="#F5FAFF" >
          <v-flex>
          <p class="title mb-0 primary--text font-weight-regular" color="#4169E1">Biding details</p>
          </v-flex>
            <v-card width="870" class="mt-5 mb-5 pl-8 pb-5 mt-0">
                <v-flex class="pt-5">
                        <v-flex column>
                        <v-flex row >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> BID ID </p>
                            <p class="body-1">{{LOAD_DASHBOARD.objects.bid_id}}</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> DELIVER ON </p>
                            <p class="body-1">{{LOAD_DASHBOARD.objects.bid_delivery_timeline}}</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> BID AMOUNT </p>
                            <p class="body-1 ">{{ Number(LOAD_DASHBOARD.objects.bid_amount).toLocaleString()}}  {{LOAD_TENDER.currency}}</p>
                            </v-flex>
                        </v-flex>

                        <v-flex column class="mt-7 pr-4">
                            <p class="primary--text body-1 mb-0">BID TERMS AND CONDITIONS </p>
                            <p class="body-1">{{LOAD_DASHBOARD.objects.bid_terms_and_conditions}}</p>
                        </v-flex>
                        </v-flex>
                </v-flex>

                        <!-- <v-flex row class="">
                            <v-spacer></v-spacer>
                            <v-btn  
                            elevation="flat" 
                            color="white" 
                            class="mx-3" 
                            style="color:#4169E1;"
                            @click="cancelbid()">cancel</v-btn>
                            <v-btn 
                            color="#4169E1" 
                            class="white--text"
                            elevation="flat"
                            @click="bidtender()"
                            >
                            bid tender
                            </v-btn>
                        </v-flex> -->
                    </v-card>
         </v-card>

    </v-container>
</template>

<script>
/* eslint-disable no-console */
import {mapGetters, mapActions} from 'vuex';
import PDFDocument from '@/components/PDFDocument'
export default {
        
  
  data () {
      return{
          // tender datail fields
          customer_offer_amount:'',

            //preview 
            photo_extension:'',
            photo_url:'',
            bill_of_lading_extension:'',
            bill_of_lading_url:'',
            letter_extension:'',
            letter_url:'',

            overlay:false,
            large_preview_url:'',
            url:'',
            pdf:false,
            pdfOverlay:false,

            //call other files
            otherFiles:[],
         
  }

      
  },

   beforeRouteEnter (to, from, next){
    next(vm =>{  vm.GET_DASHBOARDDETAILs(to.params.id).then(()=>{
          // eslint-disable-next-line no-console
              console.log('the bid outpost');
              // eslint-disable-next-line no-console
              console.log(to.params.id);
              // eslint-disable-next-line no-console
              console.log(vm.LOAD_DASHBOARD);
          vm.GET_AGENT(localStorage.client).then(()=>{
              vm.GET_TENDERSDETAILs(vm.LOAD_DASHBOARD.objects.tender_id).then(()=>{
                    // eslint-disable-next-line no-console
              console.log('tender detail beloow');
              // eslint-disable-next-line no-console
              console.log(vm.LOAD_TENDER);

               if(vm.LOAD_TENDER.cargo_photo !== null)
                {
                    vm.photo_extension = vm.getFileExtension(vm.LOAD_TENDER.cargo_photo[0]);

                    vm.photo_url = vm.LOAD_TENDER.cargo_photo[0];
                }

                if(vm.LOAD_TENDER.bill_of_lading !== null)
                {
                    vm.bill_of_lading_extension = vm.getFileExtension(vm.LOAD_TENDER.bill_of_lading[0]);

                    vm.bill_of_lading_url = vm.LOAD_TENDER.bill_of_lading[0];
                }

                if(vm.LOAD_TENDER.authorization_letter !== null)
                {
                    vm.letter_extension = vm.getFileExtension(vm.LOAD_TENDER.authorization_letter[0]);

                    vm.letter_url = vm.LOAD_TENDER.authorization_letter[0];
                }

                //other files
                if(vm.LOAD_TENDER.files !== null)
                    {
                        vm.otherFiles = vm.LOAD_TENDER.files;
                    }

                if (!vm.LOAD_TENDER.customer_offer_amount == '') {

                    vm.customer_offer_amount = vm.LOAD_TENDER.customer_offer_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                        
                } else {
                        vm.customer_offer_amount;
                }

              next({name:'AgentAboutbid'})
              })
          })
      })
      })
      
    //   //eslint-disable-next-line no-console
    //   console.log(tab);
    console.log(to);
    console.log(from);
    console.log(next);
    },
  components:{PDFDocument},
  methods:{
      ...mapActions([
          'GET_TENDERSDETAILs', 'GET_DASHBOARDDETAILs',
          'GET_AGENT'

      ]),

      previewPdf(url){

            this.url = url;
            this.pdfOverlay = true;
            this.pdf = true;
            
        },

        closePdfViewer(){
            this.pdf = false;
            this.pdfOverlay = false;
        },

      //preview
       getFileExtension(url){

        let position = url.lastIndexOf('.');

        let extracted_string = url.slice(position + 1, url.length + 1);

        return extracted_string;

        },


        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

        },

      theid(id){
          // eslint-disable-next-line no-console
         // console.log(id);
         return id;
      },

    //   terminatebid() {
    //         this.visibility = "visible";
    //         this.btnvisibility = "hidden";
    //     },

    //   cancelbid() {
    //         this.visibility = "hidden";
    //         this.btnvisibility = "visible";
    //     },
        
        // bidtender() {
        //     this.BID_TENDER({
        //         agent_id:this.LOAD_AGENT.objects.agent_id,
        //         tender_id :this.LOAD_TENDER.id,
        //         payment_terms_and_conditions:this.payment_terms_and_conditions,
        //          bid_terms_and_conditions:this.bid_terms_and_conditions,
        //          bid_amount:this.bid_amount, 
        //          bid_delivery_timeline:this.bid_delivery_timeline,
        //     })
        //     .then(({data, status})=>{
        //         console.log(data);
        //         console.log(status);
        //         console.log(this.LOAD_POST_BID);
                
        //     })
        //     .catch(error=>{
        //         console.log('error');
        //         console.log(error.response.data);
        //         console.log(this.LOAD_POST_BID);
                
        //     })                        
               
        // }
  },

  computed: {
      ...mapGetters([
          'LOAD_TENDER',
          'LOAD_DASHBOARD',
          'LOAD_AGENT'
          //'LOAD_BIDTENDERS'
      ]),

      computedVisibility: function() {
            return this.visibility;
        },

        buttonVisibility: function() {
            return this.btnvisibility;
        },
  }

    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
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

 img:hover{
     cursor: pointer;
 }
</style>