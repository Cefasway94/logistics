<template>
    <v-container class=" mt-12 px-5">

        <v-card flat width="1300" class=" mx-auto mt-12" color="#F5FAFF">
                    
                <v-card flat width="700" class=" mx-auto mt-12" color="#F5FAFF">
                
                <!-- loading -->
                <v-card width="300" 
                v-show="loading" 
                flat 
                color="transparent" 
                class="mb-3 mx-auto">
                <v-progress-circular
                active="true"
                indeterminate
                absolute
                :size="50"
                class="mt-12"
                color="#4169E1">
                </v-progress-circular>
                </v-card>
                
    <!-- profile alert -->
                <v-alert
                text
                outlined
                class=""
                :value="profile"
                color="green"
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
                <v-btn  
                width="200" 
                large="" 
                elevation="flat" 
                color="primary" 
                class="mx-5 mt-2"
                @click="editprofile()">
                edit profile
                </v-btn>
                </v-flex>
                </v-flex>
                </v-alert>

        <!-- account verification alert -->
                <v-alert
                text
                outlined
                class=""
                :value="verify"
                color="green"
                type="error"
                row
                clearable
                >
                <v-flex row>
                <!-- <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                <v-icon large color="orange" class="">notification_important</v-icon>    
                </v-flex> -->
                <v-flex xms11 sm11 md11 lg11 class="pl-3">
                <p class="text--text title mb-0">
                Your account has been registered, please stay put for it
                to be verified
                </p>
                </v-flex>
                </v-flex>
                </v-alert>
                </v-card>
                </v-card>   
        
        <v-card
                v-show="history"
                color="transparent"
                flat=""
                class="mb-4 mx-auto mt-12 pa-1"
                max-width="1050" >
<!-- Header  -->
        <v-card
                color="transparent"
                flat=""
                class="mb-4">
         <v-layout row wrap  class=" px-2 ">
               <v-layout sm11 md11  class=" pt-5 " >       
                   <v-flex wrap xs12 sm4 md4 lg4  class="" >
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;"   >Transaction ID</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Date</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center " style="color:#4169E1;" >Client</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Description</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class=" ">
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Amount</h4>
                   </v-flex>
                   
                    <v-flex wrap xs12 sm4 md4 lg4 class=" justify-center"  >
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1; background-color:;" >Status</h4>                                             
                    </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class="pr-2">
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Invoices</h4>                        
                   </v-flex>

                </v-layout>
                
          </v-layout >
        </v-card>

<!-- Content card -->
        <v-hover class="">
        <template v-slot="{ hover }">

        <v-card
                class="mb-4 px-3"
                :elevation="hover ? 15 : 3">
          <v-layout row wrap  class=" pl-2 ">
               <v-layout sm11 md11   >       
                   <v-flex 
                   wrap xs12 sm4 md4 lg4 
                   class=" pt-5 pb-3 " >
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center"  >Cargo details</h4>
                   </v-flex>

                    <v-flex 
                    wrap xs12 sm4 md4 lg4  
                    class="pt-5 pb-3 ">
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center">Destination</h4>
                   </v-flex>

                   <v-flex 
                   wrap xs12 sm4 md4 lg4  
                   class=" pt-5 pb-3 ">
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center ">Destination</h4>
                   </v-flex>

                   <v-flex 
                   wrap xs12 sm4 md4 lg4  
                   class="  pt-5 pb-3">
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center">Destination</h4>
                   </v-flex>

                    <v-flex 
                    wrap xs12 sm4 md4 lg4 
                    class="  pt-5 pb-3">
                        <h4 class="subtitle-1 font-weight-regular mb-1 text-center">Client</h4>
                   </v-flex>
                   
                    <v-flex 
                    wrap xs12 sm4 md4 lg4 
                    class=" justify-center pt-5 pb-3">
                    <center>
                         <v-chip small class="light-green white--text  font-weight-light caption "  >2000 usd</v-chip>                    
                    </center>
                    </v-flex>

                    <v-flex 
                    wrap xs12 sm4 md4 lg4
                    class=""  style="background-color:white;">
                    <v-btn elevation="flat" height="50" class="mt-2 pt-3" color="transparent"  >
                        <h4  
                        class="font-weight-bold mb-3 text-center " 
                        style="color:#4169E1;">
                        View Invoice
                        </h4>
                    </v-btn>
                   </v-flex>

                </v-layout>
                
          </v-layout >
        </v-card>
        </template>
        </v-hover>
        </v-card>

        <v-card
                v-show="nopayments"
                color="transparent"
                flat=""
                class="mb-4 mx-auto mt-12 pa-1"
                max-width="1050" >
<!-- Header  -->
        <v-card
                color="transparent"
                flat=""
                class="mb-4">
         <v-layout row wrap  class=" px-2 ">
               <v-layout sm11 md11  class=" pt-5 " >       
                   <v-flex wrap xs12 sm4 md4 lg4  class="" >
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;"   >Transaction ID</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Date</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center " style="color:#4169E1;" >Client</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Description</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class=" ">
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Amount</h4>
                   </v-flex>
                   
                    <v-flex wrap xs12 sm4 md4 lg4 class=" justify-center"  >
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1; background-color:;" >Status</h4>                                             
                    </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class="pr-2">
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Invoices</h4>                        
                   </v-flex>

                </v-layout>
                
          </v-layout >
        </v-card>

<!-- Content card -->
        <v-hover class="">
        <template v-slot="{ hover }">

        <!-- no payment made yet card  -->
        <v-card
                v-show="nopayments"
                flat
                outlined
                color="transparent"
                class="mb-4 px-3"
                :elevation="hover ? 15 : 0">
          <v-layout row wrap  class=" pl-2 ">
               <v-layout sm11 md11>

                   <v-flex 
                   wrap 
                   class=" pt-5 pb-3 " >
                   <center>
                        <h4 
                        class=" subtitle-1 font-weight-regular text--text mb-1 text-center"  > 
                          NO PAYMENT MADE YET   
                        </h4>
                   </center>
                   </v-flex>

                </v-layout>
                
          </v-layout >
        </v-card>

        </template>
        </v-hover>
        </v-card>


    </v-container>
</template>

<script>
/* eslint-disable no-console */

import {mapGetters, mapActions} from 'vuex';
export default {
        
  
  data () {
      return{

          loading: false,
          verify: false,
          profile:false,
          history: false,
          nopayments:false,
          history2:false
          
      }
  },

  beforeRouteEnter (to, from, next){
      next( vm =>{

          vm.loading = true

// Agent payment history
          if (localStorage.category == 1) {  

            console.log('Agent payment history')
            
              vm.GET_AGENT(localStorage.client).then(()=>{

                  console.log(vm.LOAD_AGENT)

                            if (!vm.LOAD_AGENT.objects.agent_id == '') {

                                        if (vm.LOAD_AGENT.objects.is_verified == 0) {

                                                setTimeout(()=>{
                                                    vm.loading = false
                                                    vm.verify = true;
                                                    vm.history = false
                                                }, 500)

                                        }else{

                                            vm.GET_PAYMENT_HISTORY(vm.LOAD_AGENT.objects.agent_id).then(()=>{
                                                        
                                                        console.log(vm.LOAD_PAYMENT_HISTORY);

                                                        if (vm.LOAD_PAYMENT_HISTORY.data.objects.length == 0) {

                                                            console.log('no payment made yeat');

                                                              setTimeout(()=>{
                                                                    vm.loading = false
                                                                    vm.verify = false
                                                                    vm.nopayments = true
                                                                }, 500)
                                                            
                                                            
                                                        } else {

                                                            setTimeout(()=>{
                                                                    vm.loading = false
                                                                    vm.verify = false;
                                                                    vm.history = true
                                                                }, 500)
                                                            
                                                        }
                                                
                                                    })

                                        }

                        }else{
                            setTimeout(()=>{
                                vm.loading = false
                                vm.profile = true;
                                vm.history = false
                            }, 500) 
                        }
                 })

          } else if(localStorage.category == 2){
// Transporter payment history

            console.log('Transporter payment history');
            
              vm.T_GET_AGENT(localStorage.client).then(()=>{

                  console.log(vm.LOAD_AGENT.objects.agent_id)

                                if (!vm.LOAD_AGENT.objects.agent_id == '') {

                                                if (vm.LOAD_AGENT.objects.is_verified == 0) {

                                                        setTimeout(()=>{
                                                            vm.loading = false
                                                            vm.verify = true;
                                                            vm.history = false
                                                        }, 500)

                                                }else{

                                                    vm.T_GET_PAYMENT_HISTORY(vm.LOAD_AGENT.objects.agent_id).then(()=>{
                                                        
                                                        console.log(vm.LOAD_PAYMENT_HISTORY);

                                                        if (vm.LOAD_PAYMENT_HISTORY.data.objects.length == 0) {

                                                            console.log('no payment made yeat');

                                                              setTimeout(()=>{
                                                                    vm.loading = false
                                                                    vm.verify = false
                                                                    vm.nopayments = true
                                                                }, 500)
                                                            
                                                            
                                                        } else {

                                                            setTimeout(()=>{
                                                                    vm.loading = false
                                                                    vm.verify = false;
                                                                    vm.history = true
                                                                }, 500)
                                                            
                                                        }
                                                
                                                    })

                                                }

                                }else{

                                    setTimeout(()=>{
                                        vm.loading = false
                                        vm.profile = true;
                                        vm.history = false 
                                    }, 500) 
                                
                                }
                  
                    })

          }      
                           
      })

  },

//   created (){
          
    
//     console.log();
//     console.log();
//     console.log();
    
    
    
    
     

//           this.T_GET_AGENT(localStorage.client).then(()=>{

//               console.log('transporter details below');
//               console.log(this.LOAD_AGENT);

//               this.T_GET_PAYMENT_HISTORY(this.LOAD_AGENT.objects.agent_id).then(()=>{

//                   console.log('transporter payment terms');
//                   console.log(this.LOAD_PAYMENT_HISTORY);
                 
//               })
//           })

//           this.GET_AGENT(localStorage.client).then(()=>{

//               console.log('Agent details below');
//               console.log(this.LOAD_AGENT);

//               this.GET_PAYMENT_HISTORY(this.LOAD_AGENT.objects.agent_id).then(()=>{

//                   console.log('Agent payment histoiry');
//                   console.log(this.LOAD_PAYMENT_HISTORY);
                  
//               })
//           })

//           this.GET_CUSTOMER(localStorage.client).then(()=>{

//               console.log('Agent details below');
//               console.log(this.LOAD_AGENT);

//               this.C_GET_PAYMENT_HISTORY(this.LOAD_AGENT.objects.agent_id).then(()=>{

//                   console.log('Agent payment histoiry');
//                   console.log(this.LOAD_PAYMENT_HISTORY);
                  
//               })
//           })
     
      
//       //eslint-disable-next-line no-console

      
//   },
  
  methods:{
      ...mapActions([
          'T_GET_PAYMENT_HISTORY',
          'GET_PAYMENT_HISTORY',
          'C_GET_PAYMENT_HISTORY',
          'T_GET_AGENT',
          'GET_AGENT', 
          'GET_CUSTOMER'
      ]),

  },

  computed: {
      ...mapGetters([
          'LOAD_PAYMENT_HISTORY', 'LOAD_AGENT', 
      ]),

  }

    
}
                                   
</script>