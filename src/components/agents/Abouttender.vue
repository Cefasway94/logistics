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
                    
                    <v-card flat width="1300" class="mt-5 mb-5" color="#F5FAFF">
                        <v-flex row class="">
                            <v-spacer></v-spacer>
                            <!-- Removed router to and added the 'listId' function that consologs the id passed from New tenders page
                                <v-btn color="#4169E1" @click="listId ()" large class="white--text" rauter to="/agent/biding">Bid on tender</v-btn> -->
                            <v-btn color="#4169E1" large class="white--text"
                            @click="Bid">
                            Bid on tender</v-btn>
                        </v-flex>
                    </v-card>

         
                <v-card width="1300" class="mt-5 mb-5 pl-8 pt-6 pb-5" 
                v-bind:style="{ visibility: computedVisibility }">
                        <v-flex>
                            <p class="body-1" style="color:#4169E1;" color="#4169E1">Biding detail</p>
                        </v-flex>
                        <v-flex row class="pl-2 mt-10">
                        <v-flex column class="sm3 md3 px-2">
                            <v-text-field color="#4169E1" clearable
                            label="Bid amount"></v-text-field>
                        </v-flex>
                        <v-flex column class="sm3 md3 px-2">
                            <v-text-field color="#4169E1" clearable
                            label="Delivery time"></v-text-field>
                        </v-flex>
                        <v-flex column class="sm6 md6 px-2">
                            <v-text-field color="#4169E1" clearable
                            label="Terms and conditions"></v-text-field>
                        </v-flex>
                        </v-flex>
                        <v-flex row class="">
                            <v-spacer></v-spacer>
                            <v-btn  elevation="flat" color="white" class="mx-3" style="color:#4169E1;">cancel</v-btn>
                            <v-btn color="#4169E1" class="white--text">confirm bid</v-btn>
                        </v-flex>
                    </v-card>

                </v-flex>

                <v-flex sm12 md3 lg3 xlg3 class="px-3">

                    <v-card color="#4169E1" width="" class="py-4 px-5">
                        <v-flex row >
                            <v-flex column class="px-3" >
                            <p class="white--text body-1 font-weight-bold" > {{LOAD_TENDER.username}} </p>
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
import {mapGetters, mapActions} from 'vuex';
export default {
        
  
  data () {
      return{
          visibility: 'hidden',
           tender:'',
           onbiding: 'false'         
      }
  },

  mounted (tab){
             tab = this.$route.params.id;
      this.GET_TENDERSDETAILs(tab);
  },
  
  methods:{
      ...mapActions([
          'GET_TENDERSDETAILs'

      ]),

      
      theid(id){
          // eslint-disable-next-line no-console
          console.log(id);
      },

      Bid: function() {
            this.visibility = 'visible';
           
        }

     

    //   listId (id)
    //   {
    //     id= this.LOAD_TENDERS
    //       id.map(data=>{
    //            // eslint-disable-next-line no-console
    //             console.log(data.name);
    //           return this.tender = data
    //       });       
    //   }           
  },

  computed: {
      ...mapGetters([
          'LOAD_TENDER',
          //'LOAD_DIBTENDERS'
      ]),

      computedVisibility: function() {
            return this.visibility;
        }
      
  }

    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>