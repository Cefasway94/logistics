<template>
    <v-container class=" mt-12 px-5">

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                    <v-flex>
                        <v-row class="pl-2 mb-1">
                            <h1 class=" font-weight-regular headline ">{{ tender.cargo_details }}</h1>
                            <!--<v-chip color="green" small class="white--text ml-7 mt-1">Inprogress</v-chip>-->
                            <v-chip color="green" small class="white--text ml-7 mt-1">{{ tender.tender_progress }}</v-chip>
                        </v-row>
                        <p class="grey--text">{{ tender.description }} </p>
                    </v-flex>

                    <v-spacer></v-spacer>
                    <h2 >{{ tender.currency }} {{tender.customer_offer_amount}}</h2>
                </v-flex>

            </v-card>

            <v-card flat width="1300" class="mx-auto mb-10 px-5" color="#F5FAFF">
                <v-flex row>
                <v-flex sm12 md9 lg9 xlg9 >
                    <v-card width="" class="pt-6 pb-3 pl-8">
                        <v-flex column>
                            <v-flex row >
                                <v-flex column class="pl-3">
                                    <p class=" body-1 mb-2" style="color:#4169E1;"> DESTINATION </p>
                                    <p class="body-1">{{ tender.destination }}</p>
                                </v-flex>
                                <v-flex column >
                                    <p class=" body-1 mb-2" style="color:#4169E1;"> ORIGIN </p>
                                    <p class="body-1">{{ tender.destination }}</p>
                                </v-flex>
                                <v-flex column >
                                    <p class=" body-1 mb-2" style="color:#4169E1;"> CARGO SIZE </p>
                                    <p class="body-1">{{ tender.cargo_size }}</p>
                                </v-flex>
                            </v-flex>

                        <v-flex column class="mt-7 pr-4">
                            <p class=" body-1 mb-1" style="color:#4169E1;"> TERMS AND CONDITIIONS </p>
                            <p class="body-1">{{ tender.customer_terms_and_conditions }}</p>
                        </v-flex>

                        <v-flex row class="mt-10 mb-4" >

                            <v-flex column class="pl-3">
                                <p class=" body-1 mb-2" style="color:#4169E1;"> CARGO PHOTO </p>
                                <v-card flat width="200" height="150" outlined>
                                    <v-img 
                                        class="ma-auto"
                                        :src="`${tender.cargo_photo}`"
                                        height="148"
                                        width= "198">
                                    </v-img>
                                </v-card>
                            </v-flex>

                            <v-flex column >
                                <p class=" body-1 mb-2" style="color:#4169E1;"> BILL OF LADING </p>
                                <v-card flat width="200" height="150" outlined>
                                    <v-img class="ma-auto">
                                        <v-icon x-large class="mx-12 mt-12">
                                            cloud_upload
                                        </v-icon>
                                    </v-img>
                                </v-card>
                            </v-flex>

                            <v-flex column >
                                <p class=" body-1 mb-2" style="color:#4169E1;"> AUTHORIZATION LETTER </p>
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

                </v-flex>

                <!--<v-flex sm12 md3 lg3 xlg3 class="px-3">
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
                </v-flex>-->
                </v-flex>
            </v-card>

            <v-card flat width="1300" class="mx-auto mb-5" color="transparent">
            <v-tabs 
                background-color="transparent"
                color="#4169E1">
                
                <v-tab class="text-capitalize body-1">Tender progress</v-tab>
                <v-tab class="text-capitalize body-1">Negotiation history</v-tab>
                <v-tab class="text-capitalize body-1" >Despute</v-tab>

                
                
                <v-tab-item style="background-color:#F5FAFF;">

                    <v-divider></v-divider>

                    <v-card row flat width="1300" class="mt-7 mx-auto" color="#F5FAFF">
                        <v-flex row class="">
                            <v-icon color="grey" large class="mb-4 ml-3 mr-5">timeline</v-icon>
                                <p class="grey--text headline ">Timeline</p>
                        </v-flex>
                    </v-card>

                    <v-card width="1300" class="mx-auto mb-10 d-flex pa-3" color="">
                        <v-col>
                            <v-flex row class="px-3">
                                <v-col class="">
                                    <v-card flat  width="1200" class="px-5 py-3" >
                                        <v-flex column>
                                            <v-alert type="info" color="#4169E1"> 
                                                <p class=" title font-weight-regular mb-0"> Delivery extension required </p>
                                                <p class=" font-weight-regular "> Oxo would like 3 days of extension </p>
                                            </v-alert>
                                        </v-flex>

                                        <v-flex row justify-end>
                                            <v-btn elevation="false" large class="error mx-2">Reject</v-btn>
                                            <v-btn elevation="false" color="#4169E1" large class="white--text mx-2">Accept</v-btn>
                                        </v-flex>
                                    </v-card>
                                </v-col>            
                            </v-flex>

                            <v-flex row class="">
                                <v-col class="">
                                    <v-card flat height="100"  width="1200" class="px-5 py-3" outlined >
                                        
                                    </v-card>
                                </v-col>            
                            </v-flex>

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
                        <p class=" body-2 text-uppercase" style="color:#4169E1;"> oxoafrica commented</p>
                        <v-card flat height="100" width="1200" class="px-5 py-3" outlined>
                            <p class=" body-2 ">
                               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt praesentium laudantium quibusdam sint odit repellendus consectetur commodi si
                               t nihil minima, molestiae culpa saepe? Reiciendis soluta, voluptates obcaecati eaque provident magni!
                            </p>
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
                        <p class=" body-2 text-uppercase" style="color:#4169E1;"> BILL OF LADING </p>
                        <v-card flat width="200" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        </v-card>
                        </v-col>  
                                      
                    </v-row>
                </v-card>
            </v-card>

            
                </v-tab-item>
            </v-tabs>
            </v-card>

    </v-container>
</template>

<script>
import axios from 'axios'
export default {

    data: ()=>({
        tender:[]
    }),

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created.           

        let url = `http://192.168.1.44:8000/api/v1/tenders/${vm.$route.params.id}`;
        
        axios.get(url).then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                vm.tender = response.data.objects;

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });
            next();
        }) 
    },
}
</script>