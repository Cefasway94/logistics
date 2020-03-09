<template>
    <v-container class=" mt-12 px-5 pt-12">

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                    <v-flex>
                        <v-row class="pl-2 mb-1">
                            <h1 class=" font-weight-regular headline ">{{ getTender.cargo_details }}</h1>
                            <v-chip color="grey" small class="white--text ml-7 mt-1">Aavilable</v-chip>
                        </v-row>
                        <p class="grey--text">{{ getTender.description }}</p>
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
                                        <p class="primary--text body-1 mb-2"> ORIGIN </p>
                                        <p class="body-1">{{ getTender.origin}}</p>
                                    </v-flex>

                                    <v-flex column >
                                         <p class="primary--text body-1 mb-2"> DESTINATION </p>
                                         <p class="body-1">{{ getTender.destination }}</p>
                                    </v-flex>

                                    <v-flex column >
                                        <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                                        <p class="body-1">40 feet</p>
                                    </v-flex>
                                </v-flex>

                                <v-flex column class="mt-7 pr-4">
                                    <p class="primary--text body-1 mb-0"> TERMS AND CONDITIIONS </p>
                                    <p class="body-1">{{ getTender.customer_terms_and_conditions}}</p>
                                </v-flex>

                                <v-flex row class="mt-10 mb-4" >
                                    <v-flex column class="pl-3">
                                        <p class="primary--text body-1 mb-2"> CARGO PHOTO </p>
                                        <v-card flat width="200" height="155" outlined>
                                            <v-img 
                                                class="ma-auto" 
                                                :src="`${getTender.cargo_photo[0]}`"
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
                                        large class="white--text">
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

export default {
  
    data: ()=>({
        
    }),

    computed: {

    ...mapGetters(['getTender']),

        /*getTender(){
            return this.$store.getters.fetchTenderById(2);
        }*/
     editValid(){

         return ((this.getTender.awarded_agent_id == null && this.getTender.tender_progress == 'accepted'))
     }
    },
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>