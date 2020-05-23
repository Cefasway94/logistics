<template>
    <v-container class=" mt-5 px-5 pt-12">

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
                prominent=""
                height="" 
                type="error">
                    <p class="font-weight-strong mb-0">{{field}}</p>
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
                                      Confirm Biding tender
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
                                    @click="bidtender()">
                                        YES 
                                    </v-btn>
                                </v-flex>
                                </center>
                        </v-flex>
                        </v-card>
                </v-dialog>

            <v-card flat width="900" class="mt-12 mx-auto mb-5 " color="#F5FAFF">
                <v-flex row class="px-5 ">
                <v-flex>
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">{{LOAD_TENDER.cargo_details}}</h1>
                <v-chip color="green" small class="white--text ml-7 mt-1">Aavilable</v-chip>
                </v-row>
                <p class="grey--text mb-0">{{LOAD_TENDER.description}}</p>
                </v-flex>
                </v-flex>
            </v-card>

            <v-card flat width="900" class=" mx-auto px-5" color="#F5FAFF" v-model="tender" >
                
                <v-flex row >
                <v-flex sm12 md12 lg12 xlg12 >
                    <v-card width="" class="pt-6 pb-3 pl-8" >
                        <v-flex column>
                        <v-flex row >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> TENDER ID </p>
                            <p class="body-1">{{LOAD_TENDER.tender_id}}</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> TENDER TYPE </p>
                            <p class="body-1">{{LOAD_TENDER.tender_type}}</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                            <p class="body-1">{{LOAD_TENDER.cargo_size}}</p>
                            </v-flex>
                        </v-flex>

                        <v-flex row>
                        <v-flex column class="mt-7 pl-3 pr-4">
                            <p class="primary--text body-1 mb-2"> TERMS AND CONDITIIONS </p>
                            <p class="body-1">{{LOAD_TENDER.customer_terms_and_conditions}}</p>
                        </v-flex>

                         <v-flex column class=" mt-7 pl-3">
                            <p class="primary--text body-1 mb-2"> AMOUNT </p>
                            <p class="body-1">{{customer_offer_amount}} {{LOAD_TENDER.currency}}</p>
                            </v-flex>
                        </v-flex>

                        <v-flex row class="mt-10 mb-4" >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> BILL OF LADING </p>
                            <v-card flat width="200" height="150" outlined>
                            <div 
                                v-show="(bill_of_lading_extension === 'jpg') || (bill_of_lading_extension === 'jpeg') || (bill_of_lading_extension === 'png')" 
                                @click="largePreview(bill_of_lading_url)"
                            >
                                <img :src="bill_of_lading_url" width=200 height=150/>
                            </div>
                
                            <div v-show="bill_of_lading_extension === 'pdf'">

                                <v-btn 
                                    :block="true"
                                    icon class="mt-7" 
                                    @click="openTab(bill_of_lading_url)"
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
                                    <img :src="letter_url" width=200 height=150/>
                                </div>
                    
                                <div v-show="letter_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(letter_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO PHOTO </p>
                            <v-card flat width="200" height="150" outlined>
                             <div 
                                    v-show="(photo_extension === 'jpg') || (photo_extension === 'jpeg') || (photo_extension === 'png')" 
                                    @click="largePreview(photo_url)"
                                >
                                    <img :src="photo_url" width=200 height=150/>
                                </div>
                    
                                <div v-show="photo_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="openTab(photo_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                        </v-card>
                            </v-flex>
                        </v-flex>
                        </v-flex>
                    </v-card>
                    
                    <v-card flat width="1300" class="mt-5" color="#F5FAFF">
                        <v-flex row class="">
                            <v-spacer></v-spacer>
                            <!-- Removed router to and added the 'listId' function that consologs the id passed from New tenders page
                                <v-btn color="#4169E1" @click="listId ()" large class="white--text" rauter to="/agent/biding">Bid on tender</v-btn> -->
                            <v-btn 
                            color="#4169E1" 
                            large class="white--text"
                            v-bind:style="{ visibility: buttonVisibility }"
                            @click="Showbid()">
                            Bid on tender
                            </v-btn>
                        </v-flex>
                    </v-card>

                </v-flex>
                </v-flex>
            </v-card>

<!-- Alert shown after bid -->
            <v-card flat width="700" class=" mt-5 mx-auto px-3" color="#F5FAFF" v-model="tender" >

                 <v-dialog
                 v-model="bided"
                max-width="600"
                color="#fb8d28"
                transition="scale-transition">
                <v-card color="#fb8d28" width="600" height="130">
                <v-alert
                     prominent
                    class=""
                    :value="bided"
                    type="warning"
                    row
                    clearable
                    >
                    <v-flex row>
                    <!-- <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                    <v-icon large color="orange" class="">notification_important</v-icon>    
                    </v-flex> -->
                   <v-flex xms12 sm12 md12 lg12 class="pl-3 ">
                    <p class="white--text body-1 font-weight-strong mb-0">
                    You have already bided this tender, click the button bellow to view list of
                    active tenders
                    </p>
                    </v-flex>
                     <v-flex row xms12 sm12 md12 lg12 class="" >
                        <v-spacer></v-spacer>
                         <v-btn 
                        outlined
                         elevation="falt"
                         color="#4169E1" 
                         small
                         class="white--text  "
                         @click="activetenders()">
                         Active tenders
                         </v-btn>
                    </v-flex>
                    </v-flex>
                </v-alert>
                 </v-card>
                </v-dialog>

                 <v-dialog
                 v-model="bidsent"
                max-width="500"
                color="#fb8d28"
                transition="scale-transition">
                <v-card color="#4bae50" width="500" height="130">
                <v-alert
                     prominent
                    class=""
                    :value="bidsent"
                    type="success"
                    row
                    clearable
                    >
                    <v-flex >
                    <!-- <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;"  >
                    <v-icon large color="orange" class="">notification_important</v-icon>    
                    </v-flex> -->
                    <v-flex xms12 sm12 md12 lg12 class="pl-3 ">
                    <p class="white--text body-1 font-weight-strong mb-0">
                     Your bid have been sent succefully, click the button to
                     view list of active tenders
                    </p>
                    </v-flex>
                    <v-flex row xms12 sm12 md12 lg12 class="" >
                        <v-spacer></v-spacer>
                        <v-btn
                         elevation="falt" 
                         color="#4169E1" 
                         small
                         outlined
                         class="white--text mt-1 "
                         @click="activetenders()">
                         Active tenders
                         </v-btn>
                    </v-flex>
                    </v-flex>
                </v-alert>
                 </v-card>
                </v-dialog>

             </v-card>

            

<!-- biding---------------------------- -->
            <v-card 
            width="900" 
            class=" mb-5 mx-auto pl-8 pb-5" 
            v-show="showbid">

            <v-flex sm12 md12 lg12 xlg12 >
            <!-- loading -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>
            <!-- loading -->
                        <v-flex class="pt-5">
                            <p class="body-1 mb-0" style="color:#4169E1;" color="#4169E1">Bidi on tender</p>
                        </v-flex>
                        <v-flex row class="pl-2">
                        <v-flex column class="sm4 md4 px-2 mt-3">
                            <v-text-field
                             color="#4169E1"
                             clearable
                             v-model="bid_amount"
                             :suffix="currency"
                             label="Bid amount"
                             type="number"
                             :rules="[rules.required]">
                            </v-text-field>
                        </v-flex>

                        <v-flex column class="sm3 md3 px-2 mt-3">
                            
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="bid_delivery_timeline"
                                transition="scale-transition"
                                offset-y
                                min-width="290px">
                                <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="date"
                                    label="Delivery time"
                                    readonly
                                    v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker 
                                v-model="date"
                                :min="notless" 
                                no-title 
                                scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                            <!--  -->
                        </v-flex>

                        <v-flex column class="sm5 md5 px-2">
                        <v-select
                            v-model="payment_terms_and_conditions"
                            :items="items"
                            attach
                            chips 
                            color="#4169E1" 
                            clearable
                            label="Select payment terms"
                            :rules="[rules.required]">

                                        <template #label>
                                            <span class="red--text"><strong>{{terms_required}}</strong></span>
                                        </template>
                            </v-select>
                        </v-flex>
                        </v-flex>

                        <v-flex>
                        <v-flex column class="pl-2 mt-3 pr-5">
                        <v-text-field 
                            color="#4169E1" 
                            clearable
                            v-model="bid_terms_and_conditions"
                            label="Terms and conditions"
                            :rules="[rules.required]">
                            </v-text-field>
                        </v-flex>    
                        </v-flex>

                        <v-flex row class="">
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
                            @click="validate()"
                            >
                            bid tender
                            </v-btn>
                        </v-flex>
                    </v-flex>
                </v-card>

    </v-container>
</template>

<script>
/* eslint-disable no-console */
import {mapGetters, mapActions} from 'vuex';
export default {
        
  
  data () {
      return{
          bided: false,
          bidsent: false,
          loading: false,
          currency:'',
          payment_terms_and_conditions:'',
          //bid terms
          items:[],
          //date picker--------
          date: new Date().toISOString().substr(0, 10),
          notless: new Date().toISOString().substr(0, 10),
          menu: false,
          //rest of data--------
          showbid:false,
          btnvisibility:'visible',
          visibility: 'hidden',
           onbiding: 'false',         
           tender:'',
           agent_id:'',
           tender_id:'',
           bid_amount:'', // -------
           bid_delivery_timeline:new Date().toISOString().substr(0, 10), // ----------
           bid_terms_and_conditions:'',// -------

           // tender detail fields -----
           customer_offer_amount:'',

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

             // Validation aletrs
           field_required:false,
           field:'',
           terms_required:'*',

           // Confirm bid 
           confirm_edit_profile:false,

           //preview 
            photo_extension:'',
            photo_url:'',
            bill_of_lading_extension:'',
            bill_of_lading_url:'',
            letter_extension:'',
            letter_url:'',

            overlay:false,
            large_preview_url:''

      }
  },

  created (tab){
    
            tab = this.$route.params.id;
    
      this.GET_TENDERSDETAILs(tab).then(()=>{

          console.log('tender details bellowwwwwwww');
          console.log(this.LOAD_TENDER.currency)

           if(this.LOAD_TENDER.cargo_photo !== null)
           {
                this.photo_extension = this.getFileExtension(this.LOAD_TENDER.cargo_photo[0]);

                this.photo_url = this.LOAD_TENDER.cargo_photo[0];
           }

            if(this.LOAD_TENDER.bill_of_lading !== null)
           {
               this.bill_of_lading_extension = this.getFileExtension(this.LOAD_TENDER.bill_of_lading[0]);

               this.bill_of_lading_url = this.LOAD_TENDER.bill_of_lading[0];
           }

            if(this.LOAD_TENDER.authorization_letter !== null)
           {
               this.letter_extension = this.getFileExtension(this.LOAD_TENDER.authorization_letter[0]);

               this.letter_url = this.LOAD_TENDER.authorization_letter[0];
           }

           if (!this.LOAD_TENDER.customer_offer_amount == '') {

                     this.customer_offer_amount =this.LOAD_TENDER.customer_offer_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                        
                } else {
                         this.customer_offer_amount;
                }

           this.currency = this.LOAD_TENDER.currency

          this.GET_AGENT(localStorage.client).then(()=>{

              console.log('Agent details below');
              console.log(this.LOAD_AGENT);

              this.GET_AGENT_PAYMENT_TERMS(this.LOAD_AGENT.objects.email).then(()=>{
                  
                  console.log('transporter payment terms');
                  console.log(this.LOAD_AGENT_PAYMENT_TERMS.length);
                  for (let index = 0; index < this.LOAD_AGENT_PAYMENT_TERMS.length; index++) {
                      this.items.push( this.LOAD_AGENT_PAYMENT_TERMS[index].installment_desc)                      
                  }
              })
          })
      })
      
      //eslint-disable-next-line no-console
      console.log('tab');
      
  },
  
  methods:{
      ...mapActions([
          'GET_TENDERSDETAILs', 'BID_TENDER', 
          'GET_AGENT_PAYMENT_TERMS',
          'GET_AGENT'

      ]),

      //preview
       getFileExtension(url){

        let position = url.lastIndexOf('.');

        let extracted_string = url.slice(position + 1, url.length + 1);

        return extracted_string;

        },

         openTab(url){

            window.open(url);
        },


        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

        },
      //
      theid(id){
          // eslint-disable-next-line no-console
         // console.log(id);
         return id;
      },

      validate(){

          if(this.rules.required(this.bid_amount) == 'Required'){
        
                        console.log(3);
                        this.field = 'Biding amount is required'
                        this.field_required = true
                    // this.requiredemail = true  
                    // this.invalidemail = false
                        return false

                }else if (this.rules.required(this.bid_terms_and_conditions) == 'Required') {

                        console.log(2);
                        this.field = 'Biding terms and condition is required'
                        this.field_required = true
                        return false

                }else if (this.rules.required(this.payment_terms_and_conditions) == 'Required') {

                        console.log(2);
                        this.field = 'Kindly select payment terms'
                        this.field_required = true
                        this.terms_required = 'Requied'
                        return false

                }else{

                    this.confirm_edit_profile = true
                    return true
                }

      },

      Showbid() {
            this.visibility = "visible"
            this.btnvisibility = "hidden"
            this.showbid = true
        },

      cancelbid() {
            this.visibility = "hidden"
            this.btnvisibility = "visible"
            this.showbid = false
        },

        activetenders(){
            this.$router.push('/agent/active/' + this.LOAD_AGENT.objects.agent_id) 
            this.$router.go('/agent/active/' + this.LOAD_AGENT.objects.agent_id)
        },
        
        bidtender() {           

            this.loading = true
            this.confirm_edit_profile = false


            this.BID_TENDER({
                agent_id:this.LOAD_AGENT.objects.agent_id,
                email : this.LOAD_AGENT.objects.email,
                tender_id :this.LOAD_TENDER.id,
                payment_terms_and_conditions:this.payment_terms_and_conditions,
                 bid_terms_and_conditions:this.bid_terms_and_conditions,
                 bid_amount:this.bid_amount, 
                 bid_delivery_timeline:this.bid_delivery_timeline,
            })
            .then(()=>{
                
                console.log(this.LOAD_POST_BID);
                if(this.LOAD_POST_BID.genralErrorCode == 8004 ) {

                    this.loading = false
                    this.showbid = false
                    this.bided = true

                }else{

                     setTimeout(()=>{
                         this.loading = false
                         this.showbid = false
                         this.bidsent = true
                     },600)
                    
                }
                
            })
            .catch(error=>{
                
                console.log('error');
                console.log(error.response.data);
                console.log(this.LOAD_POST_BID);
                
            })                        
               
        }
  },

  computed: {
      ...mapGetters([
          'LOAD_TENDER',
          'LOAD_POST_BID',
          'LOAD_LOGIN',
          'LOAD_AGENT_PAYMENT_TERMS',
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