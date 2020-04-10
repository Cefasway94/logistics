<template>
    <v-container class=" mt-12 px-5 pt-12">

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                    <v-flex>
                        <v-row class="pl-2 mb-1">
                            <h1 class=" font-weight-regular headline ">{{ tender.cargo_details }}</h1>
                            <v-chip color="grey" small class="white--text ml-7 mt-1">Available</v-chip>
                        </v-row>
                        <p class="grey--text">{{ tender.description }}</p>
                    </v-flex>
                </v-flex>
            </v-card>

            <v-card flat width="1300" class=" mx-auto mb-10 px-5" color="#F5FAFF">
                <v-flex row >
                    <v-flex sm12 md9 lg9 xlg9 >
                        <v-card width="" class="pt-6 pb-3 pl-8" >
                            <v-flex column>
                                <v-flex row >
                                    <v-flex column class="pl-3">

                                        <p class="primary--text body-1 mb-2"> TENDER TYPE </p>
                                        <p class="body-1">{{ tender.tender_type}}</p>

                                    </v-flex>

                                    <v-flex column >
                                        <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                                        <p class="body-1">40 feet</p>
                                    </v-flex>

                                    <v-flex column class="pl-3">

                                         <p class="primary--text body-1 mb-2"> AMOUNT </p>
                                         <p class="body-1">{{tender.currency}} {{ tender.customer_offer_amount }}</p>

                                    </v-flex>
                                </v-flex>

                                <v-flex row class="mt-7 pr-4" v-show="tender.tender_type == 'Transporting'">

                                     <v-flex column class="pl-3" >

                                        <p class="primary--text body-1 mb-2"> ORIGIN </p>
                                        <p class="body-1">{{ tender.origin}}</p>

                                    </v-flex>

                                     <v-flex column class="pl-3">

                                         <p class="primary--text body-1 mb-2"> DESTINATION </p>
                                         <p class="body-1">{{ tender.destination }}</p>

                                    </v-flex>

                                </v-flex>

                                <v-flex column class="mt-7 pr-4">
                                    <p class="primary--text body-1 mb-0"> TERMS AND CONDITIIONS </p>
                                    <p class="body-1">{{ tender.customer_terms_and_conditions}}</p>
                                </v-flex>

                                <v-flex row class="mt-10 mb-4" >
                                    <v-flex column class="pl-3">
                                        <p class="primary--text body-1 mb-2"> CARGO PHOTO </p>
                                        <v-card flat width="200" height="155" outlined>
                                            <v-img 
                                                class="ma-auto" 
                                                :src="`${tender.cargo_photo[0]}`"
                                                height="148"
                                                width= "198"
                                            >
                                            </v-img>
                        
                                        </v-card>
                                    </v-flex>

                                    <v-flex column >
                                        <p class="primary--text body-1 mb-2"> BILL OF LADING </p>
                                        <v-card flat width="200" height="150" outlined>
                                            <v-img class="ma-auto">
                                                
                                            </v-img>
                                        </v-card>
                                    </v-flex>

                                    <v-flex column >
                                        <p class="primary--text body-1 mb-2"> AUTHORIZATION LETTER </p>
                                            <v-card flat width="200" height="150" outlined>
                                                <v-img class="ma-auto">
                                                    
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
                                    <v-btn 
                                        :disabled="editValid" 
                                        color="#4169E1" 
                                        large class="white--text"
                                        :to="'/client/edittender/'+tender.id+'/'+tender.tender_type">
                                        Edit
                                    </v-btn>
                            </v-flex>
                        </v-card>

         
                        <!--<v-card width="1300" 
                                class="mt-5 mb-5 pl-8 pt-6 pb-5" 
                                v-bind:style="{ visibility: computedVisibility }"
                        >
                            <v-flex>
                                <p class="body-1" style="color:#4169E1;" color="#4169E1">Biding detail</p>
                            </v-flex>
                            <v-flex row class="pl-2 mt-10">

                                <v-flex column class="sm3 md3 px-2">
                                    <v-text-field 
                                        color="#4169E1" 
                                        clearable
                                        label="Bid amount">
                                    </v-text-field>
                                </v-flex>

                                <v-flex column class="sm3 md3 px-2">
                                    <v-text-field 
                                        color="#4169E1" 
                                        clearable
                                        label="Delivery time">
                                    </v-text-field>
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
                        </v-card>-->

                    </v-flex>
                </v-flex>
            </v-card>

    </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios'

export default {
  
    data: ()=>({
        
        tender:[],
       
    }),
    computed: {

    ...mapGetters(['getTender']),

        /*getTender(){
            return this.$store.getters.fetchTenderById(2);
        }*/
     editValid(){

         return ((this.tender.awarded_agent_id == null && this.tender.tender_progress == 'accepted'))
     }
    },

     beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created.           
        vm.alert = vm.$store.getters.getAlert;

         //eslint-disable-next-line no-console
          //console.log(vm.$route.params.tender_type);

          if(vm.$route.params.tender_type == "Transporting") // Transporting tender
          {
              let url = `http://207.180.215.239:9000/api/v1/tenders/${vm.$route.params.id}`;

              axios.get(url).then((response) => 
                            {
                               
                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects[i].industry_name);
                               vm.tender = response.data.objects;

                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects);


                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });


          } else if(vm.$route.params.tender_type == "Clearing") //Clearing tender
          {

              let url = `http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`;

              axios.get(url).then((response) => 
                            {
                               
                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects[i].industry_name);

                                vm.tender = response.data.objects;

                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects);


                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });

          }

        next();
        }) 
    },
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>