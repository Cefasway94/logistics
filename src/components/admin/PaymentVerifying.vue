<template>
  <v-container>

      <v-card class="mx-auto mt-12" color="#F5FAFF">

        <Alert v-if="alert" v-bind="{message,type}"/> 

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

        <v-row>
        
          <v-col cols=8>

            <div class="mt-3 ml-2">
              <span class="black--text font-weight-bold title">Payments </span>  
              <v-btn 
                small 
                elevation="flat" 
                color="#4169E1" 
                class="white--text ml-4"
                :to="'/admin/payment-settings/'"
              >
              <v-icon >mdi-cog</v-icon></v-btn>
            </div>
            
            
          </v-col>
          <v-col cols=4 class="mb-0">
             <v-tabs
              right
              background-color="transparent"
              color="#394361"
              class="mb-0"
              v-model="tab"
          >
            <v-tab v-for="tab in tabs" :key="tab.title" @change="fetch(tab.title)">
            <span class="primary--text text-capitalize ">{{ tab.title}}</span>
            </v-tab>
          </v-tabs>
          </v-col>
         
        </v-row>

        <v-tabs-items v-model="tab">

            <v-tab-item v-for="tab in tabs" :key="tab.title">

              <v-divider class="mx-auto " ></v-divider>

              <v-container fluid class="" style="background-color:#F5FAFF;">

                <template v-if="tab.title == 'All payments'">

                  <v-data-table
                    :items="payments"
                    :headers="headers"
                  >
                    
                    <template v-slot:item.verify="{item}">

                      <v-chip v-if="!item.verify" class="orange lighten-4">Pending</v-chip>

                      <v-chip v-if="item.verify" class="teal lighten-4">Verified</v-chip>

                    </template>

                    <template v-slot:item.actions="{item}">


                       <v-btn 
                        small 
                        @click="previewReceipt(item)"
                        color="#4169E1" 
                        class="white--text mr-2"
                      >
                        Preview
                      </v-btn>

                      <v-dialog              
                              v-model="Denydialog"
                              :retain-focus="false"
                              width="550"
                            >
                              <template v-slot:activator="{ on }">
                                <v-btn
                                    small 
                                    color="#4169E1" 
                                    class="white--text"
                                    :disabled="item.verify == 0"
                                     @click="setItem(item)"
                                    v-on="on"
                                >
                                  Deny
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title
                                  class="body-3 grey lighten-2"
                              
                                  >
                                  Are you sure you want to cancel payment verification?
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="Denydialog = false"
                                    >
                                    No
                                  </v-btn>
                                  <v-btn
                                      color="primary"
                                      text
                                      @click="DenyCustomerPayment()"
                                    >
                                    Yes
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>

                      <v-dialog              
                              v-model="Verydialog"
                              :retain-focus="false"
                              width="550"
                            >
                        <template v-slot:activator="{ on }">
                          <v-btn
                              small 
                              color="#4169E1" 
                              class="white--text ml-1"
                              :disabled="item.verify == 1"
                               @click="setItem(item)"
                              v-on="on"
                          >
                            Verify
                          </v-btn>
                        </template>

                          <v-card>
                            <v-card-title
                              class="body-3 grey lighten-2"
                          
                              >
                              Are you sure you want to verify this payment?
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  text
                                  @click="Verydialog = false"
                                >
                                No
                              </v-btn>
                              <v-btn
                                  color="primary"
                                  text
                                  @click="VerifyCustomerPayment()"
                                >
                                Yes
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                     
                    </template>

                  </v-data-table>

                </template>

                <template v-if="tab.title == 'Complete'">

                  <v-data-table
                    :items="completedPayments"
                    :headers="headers"
                  >
                    
                    <template v-slot:item.verify="{item}">

                      <v-chip v-if="!item.verify" class="orange lighten-4">Pending</v-chip>

                      <v-chip v-if="item.verify" class="teal lighten-4">Verified</v-chip>

                    </template>

                    <template v-slot:item.actions="{item}">


                       <v-btn 
                        small 
                        @click="previewReceipt(item)"
                        color="#4169E1" 
                        class="white--text mr-2"
                      >
                        Preview
                      </v-btn>

                      <v-dialog              
                              v-model="Denydialog"
                              :retain-focus="false"
                              width="550"
                            >
                              <template v-slot:activator="{ on }">
                                <v-btn
                                    small 
                                    color="#4169E1" 
                                    class="white--text"
                                    :disabled="item.verify == 0"
                                    @click="setItem(item)"
                                    v-on="on"
                                >
                                  Deny
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title
                                  class="body-3 grey lighten-2"
                              
                                  >
                                  Are you sure you want to cancel payment verification?
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="Denydialog = false"
                                    >
                                    No
                                  </v-btn>
                                  <v-btn
                                      color="primary"
                                      text
                                      @click="DenyCustomerPayment()"
                                    >
                                    Yes
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>

                      <v-dialog              
                              v-model="Verydialog"
                              :retain-focus="false"
                              width="550"
                            >
                        <template v-slot:activator="{ on }">
                          <v-btn
                              small 
                              color="#4169E1" 
                              class="white--text ml-1"
                              :disabled="item.verify == 1"
                              @click="setItem(item)"
                              v-on="on"
                          >
                            Verify
                          </v-btn>
                        </template>

                          <v-card>
                            <v-card-title
                              class="body-3 grey lighten-2"
                          
                              >
                              Are you sure you want to verify this payment?
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  text
                                  @click="Verydialog = false"
                                >
                                No
                              </v-btn>
                              <v-btn
                                  color="primary"
                                  text
                                  @click="VerifyCustomerPayment()"
                                >
                                Yes
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                     
                    </template>

                  </v-data-table>

                </template>

                <template v-if="tab.title == 'Pending'">

                  <v-data-table
                    :items="pendingPayments"
                    :headers="headers"
                  >
                    
                    <template v-slot:item.verify="{item}">

                      <v-chip v-if="!item.verify" class="orange lighten-4">Pending</v-chip>

                      <v-chip v-if="item.verify" class="teal lighten-4">Verified</v-chip>

                    </template>

                    <template v-slot:item.actions="{item}">


                       <v-btn 
                        small 
                        @click="previewReceipt(item)"
                        color="#4169E1" 
                        class="white--text mr-2"
                      >
                        Preview
                      </v-btn>

                      <v-dialog              
                              v-model="Denydialog"
                              :retain-focus="false"
                              width="550"
                            >
                              <template v-slot:activator="{ on }">
                                <v-btn
                                    small 
                                    color="#4169E1" 
                                    class="white--text"
                                    :disabled="item.verify == 0"
                                    @click="setItem(item)"
                                    v-on="on"
                                >
                                  Deny
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title
                                  class="body-3 grey lighten-2"
                              
                                  >
                                  Are you sure you want to cancel payment verification?
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="Denydialog = false"
                                    >
                                    No
                                  </v-btn>
                                  <v-btn
                                      color="primary"
                                      text
                                      @click="DenyCustomerPayment()"
                                    >
                                    Yes
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>

                      <v-dialog              
                              v-model="Verydialog"
                              :retain-focus="false"
                              width="550"
                            >
                        <template v-slot:activator="{ on }">
                          <v-btn
                              small 
                              color="#4169E1" 
                              class="white--text ml-1"
                              :disabled="item.verify == 1"
                              @click="setItem(item)"

                              v-on="on"
                          >
                            Verify
                          </v-btn>
                        </template>

                          <v-card>
                            <v-card-title
                              class="body-3 grey lighten-2"
                          
                              >
                              Are you sure you want to verify this payment?
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  text
                                  @click="Verydialog = false"
                                >
                                No
                              </v-btn>
                              <v-btn
                                  color="primary"
                                  text
                                  @click="VerifyCustomerPayment()"
                                >
                                Yes
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                     
                    </template>

                  </v-data-table>
                </template>

              </v-container>

            </v-tab-item>

          </v-tabs-items>
          
        
      </v-card>
     
  </v-container>
</template>

<script>
import axios from 'axios'
import Alert from '@/components/Alert.vue'

export default {
  
  name: 'PaymentVerifying',

  data (){

    return{

      dialog: false,

      alert: false,
      message:'',
      type:'',

      overlay:false,
      large_preview_url:'',
      url:'',
      pdf:false,
      pdfOverlay:false,

      Denydialog:false,
      Verydialog:false,

      item:[],

      payments:[],
      completedPayments:[],
      pendingPayments:[],

      tabs:[ {title:'All payments'}, {title:'Complete'}, {title:'Pending'} ],
      tab: null,

      headers:[
        {
          text: 'ID',
          align: 'start',
          value: 'id',
          class:'primary--text body-1 font-weight-bold', 
        },
        { text: 'Date', class:'primary--text body-1 font-weight-bold', value: 'created_at' },
        { text: 'Client',  class:'primary--text body-1 font-weight-bold', value: 'service_account_name' },
        { text: 'Order ID',  class:'primary--text body-1 font-weight-bold', value: 'order_ID' },
        { text: 'Amount',  class:'primary--text body-1 font-weight-bold', value: 'amount' },
        { text: 'Acc No',  class:'primary--text body-1 font-weight-bold', value: 'service_account_number' },
        { text: 'Status',  class:'primary--text body-1 font-weight-bold', value: 'verify'},
        { text: 'Actions',  class:'primary--text body-1 font-weight-bold', value: 'actions' },

      ]

    }
  },

  components: {Alert},

  methods: {

  setItem(item){

    this.item = item;

  },

    DenyCustomerPayment(){

      this.Denydialog = false;

      const dening_url = "http://207.180.215.239:8002/api/oxopayment/deny/"+this.item.id+"/"+this.item.order_ID;

      axios.post(dening_url).then((response) => 
      {
                               
            //eslint-disable-next-line no-console
            //console.log(response.data.objects[i].industry_name);

          if(response.data.genralErrorCode === 8000)
          {
              /*this.$store.dispatch('setSnackbar',{
                  text: response.data.message,
                  color: 'success'
              });*/
              
              this.alert = false;

              this.setAlert("payment verification cancelled successfully");

              this.$router.push('/admin/verify-payment');

              this.$router.go('/admin/verify-payment');


          } else if(response.data.genralErrorCode === 8004){

              this.alert = false;

              this.setAlert(response.data.message,"error");

              document.getElementById('app').scrollIntoView();
          }

        }).catch(()=>
      
        {

            this.setAlert("There is an internal error","error");

            document.getElementById('app').scrollIntoView();                       
        });

      
    },

    VerifyCustomerPayment(){

      this.Verydialog = false;

      const verifing_url = "http://207.180.215.239:8002/api/oxopayment/verify/"+this.item.id+"/"+this.item.order_ID;

      axios.post(verifing_url).then((response) => 
      {
                               
            //eslint-disable-next-line no-console
            //console.log(response.data.objects[i].industry_name);

          if(response.data.genralErrorCode === 8000)
          {
              /*this.$store.dispatch('setSnackbar',{
                  text: response.data.message,
                  color: 'success'
              });*/
              
              this.alert = false;

              this.setAlert("payment verification done successfully");

              this.$router.push('/admin/verify-payment');

              this.$router.go('/admin/verify-payment');


          } else if(response.data.genralErrorCode === 8004){

              this.alert = false;

              this.setAlert(response.data.message,"error");

              document.getElementById('app').scrollIntoView();
          }

        }).catch(()=>
      
        {

            this.setAlert("There is an internal error","error");

            document.getElementById('app').scrollIntoView();                       
        });

      
    },

    previewReceipt(item){

      let receipt_file_extension;

      if(item.deposit_slip.length > 0)
        receipt_file_extension = this.getFileExtension(item.deposit_slip[0]);

      if(receipt_file_extension === 'jpg' || receipt_file_extension === 'jpeg' || receipt_file_extension === 'png')

        this.largePreview(item.deposit_slip[0]);

      else if(receipt_file_extension === 'pdf')

        this.previewPdf(item.deposit_slip[0]);

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

        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

        },

        getFileExtension(url){

            let position = url.lastIndexOf('.');

            let extracted_string = url.slice(position + 1, url.length + 1);

            return extracted_string;

        },

    fetch(title)
    {
      switch(title)
      {
        case 'All payments':

          this.fetchAllPayments();

          break;

        case 'Complete':

          this.fetchCompletePayments();
        
          break;

        case 'Pending':

          this.fetchPendingPayments();
           
          break;

        default:
          break;
      }
    },

    fetchAllPayments(){
      //getting all transporters
      const payments = "http://207.180.215.239:8002/api/oxopayment/index"

       axios.get(payments).then((response) => 
        {
                               
            //eslint-disable-next-line no-console
            //console.log(response.data.objects[i].industry_name);

          if(response.data.genralErrorCode === 8000)
          {
            this.payments = response.data.objects;

            //eslint-disable-next-line no-console
            console.log(this.payments);

          } else if(response.data.genralErrorCode === 8004){

            this.alert = false;

            this.setAlert(response.data.message,"error");

            document.getElementById('app').scrollIntoView();
          }

        }).catch(()=>
      
        {

            this.setAlert("There is an internal error","error");

            document.getElementById('app').scrollIntoView();                       
        });
    },

    fetchCompletePayments(){

      //getting all complete payments
      const payments = "http://207.180.215.239:8002/api/oxopayment/oxopayment_by_verify_true"

       axios.get(payments).then((response) => 
        {
                               
            //eslint-disable-next-line no-console
            //console.log(response.data.objects[i].industry_name);

          if(response.data.genralErrorCode === 8000)
          {
            this.completedPayments = response.data.objects;

            //eslint-disable-next-line no-console
            console.log(this.completedPayments);

          } else if(response.data.genralErrorCode === 8004){

            this.alert = false;

            this.setAlert(response.data.message,"error");

            document.getElementById('app').scrollIntoView();
          }

        }).catch(()=>
      
        {

            this.setAlert("There is an internal error","error");

            document.getElementById('app').scrollIntoView();                       
        });

    },

    fetchPendingPayments(){

      //getting all pending payments
      const payments = "http://207.180.215.239:8002/api/oxopayment/oxopayment_by_verify_false"

       axios.get(payments).then((response) => 
        {
                               
            //eslint-disable-next-line no-console
            //console.log(response.data.objects[i].industry_name);

          if(response.data.genralErrorCode === 8000)
          {
            this.pendingPayments = response.data.objects;

            //eslint-disable-next-line no-console
            console.log(this.pendingPayments);

          } else if(response.data.genralErrorCode === 8004){

            this.alert = false;

            this.setAlert(response.data.message,"error");

            document.getElementById('app').scrollIntoView();
          }

        }).catch(()=>
      
        {

            this.setAlert("There is an internal error","error");

            document.getElementById('app').scrollIntoView();                       
        });
    },

    setAlert(message,type){

      this.alert = true;
      this.message = message;
      this.type = type;
    },
    
    /*verifyPayment(){

      this.dialog = false;

      //getting all transporters
      const payments = "http://207.180.215.239:8002/api/customerpayment/verify/"+this.payments[0].transaction_ID;

      axios.post(payments).then((response) => 
      {
                               
            //eslint-disable-next-line no-console
            //console.log(response.data.objects[i].industry_name);

          if(response.data.genralErrorCode === 8000)
          {
              this.$store.dispatch('setSnackbar',{
                  text: response.data.message,
                  color: 'success'
              });  

              this.$router.push('/admin/verify-payment');

              this.$router.go('/admin/verify-payment');


          } else if(response.data.genralErrorCode === 8004){

              this.alert = false;

              this.setAlert(response.data.message,"error");

              document.getElementById('app').scrollIntoView();
          }

        }).catch(()=>
      
        {

            this.setAlert("There is an internal error","error");

            document.getElementById('app').scrollIntoView();                       
        });
    }*/

  },


  beforeRouteEnter(to, from, next){
    next(vm => {
        
    
      vm.fetchAllPayments();
      vm.fetchCompletePayments();
      vm.fetchPendingPayments();
       
 
      next();
    })

  }
}
</script>

<style>

</style>