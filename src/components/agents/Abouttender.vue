<template>
    <v-container class=" mt-12 px-5 pt-12">

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                <v-flex>
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">Used furniture</h1>
                <v-chip color="grey" small class="white--text ml-7 mt-1">Aavilable</v-chip>
                </v-row>
                <p class="grey--text">1 40 feet container of used furniture</p>
                </v-flex>
                </v-flex>
            </v-card>

            <v-card flat width="1300" class=" mx-auto mb-10 px-5" color="#F5FAFF" v-model="tender" >
                <v-flex row >
                <v-flex sm12 md9 lg9 xlg9 >
                    <v-card width="" class="pt-6 pb-3 pl-8" >
                        <v-flex column>
                        <v-flex row >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> DESTINATION </p>
                            <p class="body-1">Rwanda</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> ORIGIN </p>
                            <p class="body-1">Rwanda</p>
                            </v-flex>
                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                            <p class="body-1">40 feet</p>
                            </v-flex>
                        </v-flex>

                        <v-flex column class="mt-7 pr-4">
                            <p class="primary--text body-1 mb-0"> TERMS AND CONDITIIONS </p>
                            <p class="body-1">Lorem ipsum, dolor sit amet consectetur 
                                adipisicing elit.</p>
                        </v-flex>

                        <v-flex row class="mt-10 mb-4" >
                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> DESTINATION </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> ORIGIN </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
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

         
                <v-card width="1300" class=" mb-5 pl-8 pt-6 pb-5" 
                v-bind:style="{ visibility: computedVisibility }">
                        <v-flex>
                            <p class="body-1" style="color:#4169E1;" color="#4169E1">Biding details</p>
                        </v-flex>
                        <v-flex row class="pl-2 mt-10">
                        <v-flex column class="sm3 md3 px-2">
                            <v-text-field
                             color="#4169E1"
                             clearable
                             v-model="bid_amount"
                             label="Bid amount">
                            </v-text-field>
                        </v-flex>

                        <v-flex column class="sm3 md3 px-2">
                            <!-- <v-text-field 
                            color="#4169E1" 
                            clearable
                            v-model="bid_delivery_timeline"
                            label="Delivery time">
                            </v-text-field> -->

                            <!--  -->
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
                                <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                            <!--  -->
                        </v-flex>

                        <v-flex column class="sm6 md6 px-2">
                            <v-text-field 
                            color="#4169E1" 
                            clearable
                            v-model="bid_terms_and_conditions"
                            label="Terms and conditions">
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
                            @click="bidtender()"
                            >
                            bid tender
                            </v-btn>
                        </v-flex>
                    </v-card>

                </v-flex>

                <v-flex sm12 md3 lg3 xlg3 class="px-3">

                    <v-card color="#4169E1" width="" class="py-4 px-5">
                        <v-flex row >
                            <v-flex column class="px-3" >
                            <p  class="white--text body-1 font-weight-bold" > {{LOAD_TENDER.id}} </p>
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

    </v-container>
</template>

<script>
/* eslint-disable no-console */
import {mapGetters, mapActions} from 'vuex';
export default {
        
  
  data () {
      return{
          //date picker--------
          date: new Date().toISOString().substr(0, 10),
          menu: false,
          //rest of data--------
          btnvisibility:'visible',
          visibility: 'hidden',
           onbiding: 'false',         
           tender:'',
           agent_id:'',
           tender_id:'',
           bid_amount:'', // -------
           bid_delivery_timeline:new Date().toISOString().substr(0, 10), // ----------
           bid_terms_and_conditions:'',// -------

      }
  },

  mounted (tab){
            tab = this.$route.params.id;
      this.GET_TENDERSDETAILs(tab);
      //eslint-disable-next-line no-console
      console.log(tab);
      
  },
  
  methods:{
      ...mapActions([
          'GET_TENDERSDETAILs', 'BID_TENDER'

      ]),

      
      theid(id){
          // eslint-disable-next-line no-console
         // console.log(id);
         return id;
      },

      Showbid() {
            this.visibility = "visible";
            this.btnvisibility = "hidden";
        },

      cancelbid() {
            this.visibility = "hidden";
            this.btnvisibility = "visible";
        },
        
        bidtender() {
            this.BID_TENDER({
                agent_id:'12345',
                tender_id :this.LOAD_TENDER.id,
                 bid_terms_and_conditions:this.bid_terms_and_conditions,
                 bid_amount:this.bid_amount, 
                 bid_delivery_timeline:this.bid_delivery_timeline,
            })
            .then(({data, status})=>{
                console.log(data);
                console.log(status);
                console.log(this.LOAD_POST_BID);
                
            })
            .catch(error=>{
                console.log('error');
                console.log(error.response.data);
                console.log(this.LOAD_POST_BID);
                
            })           
               //console.log(this.LOAD_LOGIN);
               
        }
  },

  computed: {
      ...mapGetters([
          'LOAD_TENDER','LOAD_POST_BID','LOAD_LOGIN'
          //'LOAD_DIBTENDERS'
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


</style>