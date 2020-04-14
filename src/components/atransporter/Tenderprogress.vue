<template>
    <v-container id="scrolling-techniques" class=" mt-12 px-5">

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                <v-flex>
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">{{LOAD_TENDER.cargo_details}}</h1>
                <v-chip color="green" small class="white--text ml-7 mt-1">Inprogress</v-chip>
                </v-row>
                <p class="grey--text">{{LOAD_TENDER.description}}</p>
                </v-flex>
                <v-spacer></v-spacer>
                <h2 >$ 500.0</h2>
                </v-flex>
            </v-card>
            <v-card flat width="1300" class="mx-auto mb-10 px-5" color="#F5FAFF">
                <v-flex row>
                <v-flex sm12 md9 lg9 xlg9 >
                    <v-card width="" class="pt-6 pb-3 pl-8">
                        <v-flex column>
                        <v-flex row >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> DESTINATION </p>
                            <p class="body-1">{{LOAD_TENDER.destination}}</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> ORIGIN </p>
                            <p class="body-1">{{LOAD_TENDER.origin}}</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                            <p class="body-1">{{LOAD_TENDER.cargo_size}}</p>
                            </v-flex>
                        </v-flex>

                        <v-flex column class="mt-5 pr-4">
                            <p class="primary--text body-1 mb-0"> TERMS AND CONDITIIONS </p>
                            <p class="body-1 ">{{LOAD_TENDER.customer_terms_and_conditions}}</p>
                        </v-flex>

                        <v-flex row class="mt-7 mb-4" >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> BILL OF LADING </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> LETTER </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> OTEHER </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                            </v-flex>
                        </v-flex>
                        </v-flex>
                    </v-card>
                </v-flex>

                <v-flex sm12 md3 lg3 xlg3 class="px-3 pt-2">
                    <v-card color="#4169E1" width="" class="py-4 px-5">
                        <v-flex row >
                            <v-flex column class="px-3">
                            <p class="white--text body-1 font-weight-bold"> ABC FURNITURE </p>
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
                </v-flex>
                </v-flex>
            </v-card>

            <v-card flat width="1300" class="mx-auto mb-5" color="transparent">
            <v-tabs 
                background-color="transparent"
                color="#4169E1">
                
                <v-tab class="text-capitalize body-1">Tender progress</v-tab>
                <!-- <v-tab class="text-capitalize body-1">Negotiation history</v-tab>
                <v-tab class="text-capitalize body-1" >Despute</v-tab> -->

                
                
                <v-tab-item style="background-color:#F5FAFF;">
                    <v-divider></v-divider>

                <v-card row flat width="1300" class="mt-7 mx-auto" color="#F5FAFF">
                <v-flex row class="">
                <v-icon color="grey"  class="ml-3 mr-5" >credit_card</v-icon>
                <p class="grey--text title mb-0" >Payment</p>
                </v-flex>
                </v-card>

                <v-card row width="1300" class=" mx-auto" color="#F5FAFF">
                <v-alert
                :value="extension"
                text
                outlined
                color="primary"
                border="left"
                row
                >
                <v-flex row>
                <v-flex row xms10 sm8 md10 lg10 class="pl-4">
                <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                <v-icon large color="orange" class="">notification_important</v-icon>    
                </v-flex>
                <v-flex xms11 sm11 md11 lg11>
                <p class="text--text title mb-0">
                Payment confirmation
                </p>
                <p class="text--text subtitle-1 mb-0">
                Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, 
                purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in 
                dolor. Curabitur at lacus ac velit ornare lobortis.
                </p>
                </v-flex>
                </v-flex>
                <v-flex  xsm2 sm2 md2 lg2>
                <v-card color="primary" width="100" class="my-6 mx-auto">
                <v-btn  color="primary">
                confirm
                </v-btn>
                </v-card>
                </v-flex>
                </v-flex>
                </v-alert>
                </v-card>

<!-- INSTALMENT CARDS SECTION-------------------------------------------------------------------- -->
                <v-card row flat width="1300" class="mx-auto" color="#F5FAFF">
                <v-flex row fluid class="pt-5" style="background-color:#F5FAFF;" >
                <v-flex 
                xs12 sm6 md6 lg6 xl6 
                row
                class="py-3 pl-6 pr-7"
                v-for="(tender, i) in placeholder" 
                :key="i" >
<!-- CARDS --------------------------------------------------->
                <v-hover class="">
                <template v-slot="{ hover }">
                <v-card 
                width="550"
                class=" py-2 pb-3 " 
                :elevation="hover ? 15 : 3">
                <v-flex row class="px-1 py-2" >
                <v-flex xsm2 sm2 md2 lg2 class="pl-5 pt-1">
                <v-progress-circular
                :rotate="-90"
                :size="50"
                :width="5"
                :value="value"
                color="primary">
                <p class="mt-4 ml-1 caption text--text">
                {{ value }}%
                </p>
                </v-progress-circular>
                </v-flex>
                <v-flex xsm10 sm10 md10 lg7 class="px-6 pt-1" style="background-color:;">
                <v-flex row class="px-1" >
                <P xsm6 sm6 md6 lg6 
                class="text--text body-1 font-weight-medium mb-0">First instalment</P>
                <v-chip color="primary" small xsm6 sm6 md6 lg6 class="ml-4 ">not received</v-chip>
                </v-flex>
                <v-flex row>
                <p class="text--text mb-0 px-1">Received on Date...</p>
                </v-flex>
                </v-flex>
                <v-flex xsm12 sm12 md12 lg3 class="">
                <p class="title text--text text-center mb-0 my-4">
                100000 USD
                </p>
                </v-flex>
                </v-flex>
                </v-card>
                </template>
                </v-hover>
                </v-flex>
                </v-flex>
                </v-card>

                <v-card row flat width="1300" class="mt-7 mx-auto" color="#F5FAFF">
                <v-flex row class="">
                <v-icon color="grey" class="mb-4 ml-3 mr-5">timeline</v-icon>
                <p class="grey--text title ">Timeline</p>
                </v-flex>
                </v-card>

                <v-card width="1300" class="mx-auto mb-10 d-flex pa-3" color="">
                    <v-col>
                    
                    <v-flex>
                    <v-flex class="px-3">
                    <h1 style="color:#4169E1;" 
                    class=" font-weight-bold text-center body-1 my-3 mb-0">
                    progress timeline
                    </h1>
                    </v-flex>
                    <v-flex row class="">
                        <v-col class="">
                        <v-card 
                        flat                           
                        width="1200" 
                        class="px-5 py-3" 
                        outlined >

                        <!-- STEPPPER -->
                        <v-stepper
                        flat
                        v-model="e1"
                        :vertical="vertical"
                        :alt-labels="altLabels"
                        >

                        <template>
                        <v-stepper-header>
                        <template v-for="n in steps">
                            <v-card 
                            :key="`${n}-step`" 
                            flat
                            width="80" 
                            outlined >
                            <v-icon 
                            class="center-text mx-auto mb-0"
                            size="50">
                            local_shipping
                            </v-icon>   
                            <v-stepper-step
                            :key="`${n}-step`"
                            :complete="e1 > n"
                            :step="n"
                            :editable="editable" 
                            >
                            <p class="body-2">
                            Step {{ n }}
                            </p>
                            </v-stepper-step>
                             </v-card>
                            <v-card 
                            :key="n"
                            width="120" 
                            color="red"
                            class="py-12" >
                            <v-divider
                            v-if="n !== steps"
                            :key="n"
                            class="ml-1"
                            ></v-divider>
                            </v-card>
                        </template>
                        </v-stepper-header>

                        <v-stepper-items>
                        <v-stepper-content
                            v-for="n in steps"
                            :key="`${n}-content`"
                            :step="n"
                        >
                            <v-card
                            class="mb-12"
                            color="grey lighten-1"
                            height="200px"
                            ></v-card>

                            <v-btn
                            color="primary"
                            @click="nextStep(n)"
                            >
                            Continue
                            </v-btn>

                            <v-btn text>Cancel</v-btn>
                        </v-stepper-content>
                        </v-stepper-items>
                    </template>

                        </v-stepper>
                        <!--  -->
                        
                        </v-card>
                        </v-col>            
                    </v-flex>
                    </v-flex>

                    <v-flex class="px-3">
                    <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5 mb-0">
                    update timeline
                    </h1>
                    </v-flex>
                    
                        <v-col class="">
                        <v-card flat height="160"  width="1200" class="px-5 ">
                       <v-flex column>
                                <v-flex row class="">
                                    <v-flex column sm6 mb6 class="px-6">
                                        <p class="bondy-2 mb-0">Select stage</p>
                                        <v-text-field 
                                        v-model="stages"
                                        outlined 
                                        class="" 
                                        clearable 
                                        color="#4169E1"></v-text-field>
                                    </v-flex>
                                    <v-flex row sm6 mb6 justify-center>
                                    <v-flex>
                                        <p class="bondy-2 mb-0">comment</p>
                                        <v-text-field 
                                        v-model="comment"
                                        outlined 
                                        color="#4169E1" 
                                        clearable >
                                        </v-text-field>
                                    </v-flex>
                                    </v-flex>
                                    </v-flex>
                                    <v-btn elevation="flat" 
                                    class="mx-3 primary " > 
                                    Submite progress
                                    </v-btn>
                                </v-flex>
                        </v-card>
                        </v-col>            
                    

                    <!-- <v-flex>
                    <v-card class="mx-auto" width="700" flat >
                    <v-flex column class="mt-7 pr-4 ">
                        <p class="primary--text body-1 mb-1" > EXTEND DELIVERY TIME </p>                                DELIVERY TIME EXTENSION
                        <v-flex row class="mx-auto">
                            <v-text-field outlined="" clearable ></v-text-field>
                            <v-btn elevation="0" class="mx-2 primary" height="55"> SUBMITE REQUEST</v-btn>
                        </v-flex>
                        </v-flex>
                    </v-card>
                    </v-flex> -->

                    </v-col>                    
                </v-card>

            <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
                <v-row>
                <v-icon color="grey" class="mb-4 ml-3 ">message</v-icon>
                <p class="grey--text title ml-6">Comment and updates</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-row class="pa-3">
                        <v-col class="">
                        <p class="primary--text body-2 text-uppercase"> oxoafrica commented </p>
                        <v-card flat height="100" width="1200" class="px-5 py-3" outlined>
                            <v-text class="" outlined>
                               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt praesentium laudantium quibusdam s
                            </v-text>
                        </v-card>
                        </v-col>  
                                      
                    </v-row>
                </v-card>
            </v-card>

            <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
                <v-row>
                <v-icon color="grey" class="mb-4 ml-3 ">attachments</v-icon>
                <p class="grey--text title">Attachments</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-row class="pa-3">
                        <v-col class="">
                        <p class="primary--text body-2 text-uppercase"> BILL OF LADING </p>
                        <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                        </v-col>  
                                      
                    </v-row>
                </v-card>
            </v-card>

            
                </v-tab-item>
            </v-tabs>

            <v-card flat width="1300" class=" mb-5" color="#F5FAFF">
                        <v-flex row class="">
                            <v-spacer></v-spacer>
                            <v-btn large class="primary" rauter >complete tender</v-btn>
                        </v-flex>
                    </v-card>
            </v-card>

    </v-container>
</template>

<script>
/* eslint-disable no-console */
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {

    data(){
        return{
            //-----------stepper
            e1: 1,
            steps: 5,
            vertical: false,
            altLabels: true,
            editable: false,
            //----------------
            extension:false,
            placeholder: 3,
            value:80,
        }
    },

     beforeRouteEnter (to, from, next){
    next(vm =>{  vm.T_GET_TENDERSDETAILs(to.params.id).then(()=>{
          // eslint-disable-next-line no-console
              console.log('the onprogress outpost');
              // eslint-disable-next-line no-console
              console.log(to.params.id);
              // eslint-disable-next-line no-console
              console.log(vm.LOAD_TENDER);
          vm.T_GET_AGENT(localStorage.client).then(()=>{
              console.log(vm.LOAD_AGENT);
          })
      })
      })
      
    //   //eslint-disable-next-line no-console
    //   console.log(tab);
    // console.log(to);
    // console.log(from);
    // console.log(next);
    },

    //  watch: {
    //   steps (val) {
    //     if (this.e1 > val) {
    //       this.e1 = val
    //     }
    //   },
    //   vertical () {
    //     this.e1 = 2
    //     requestAnimationFrame(() => this.e1 = 1) // Workarounds
    //   },
    // },
    
    computed: {
    ...mapGetters([
      "LOAD_LOGIN",'LOAD_AGENT','LOAD_TENDER'
      ])
  },
    methods :{
    ...mapActions([
      "T_GET_AGENT",
      'T_GET_TENDERSDETAILs'
    ]),

    // ------------stepper method
    onInput (val) {
        this.steps = parseInt(val)
      },
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },

    }
}
</script>