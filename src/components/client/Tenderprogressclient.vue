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

                            <v-flex row class="mt-6" v-show="clearing">

                                <v-flex row xs12 class="mb-4">
                                    <p class=" title font-weight-regular mb-0"> Clearing progress</p>
                                </v-flex> 

                                <v-flex row xs6 sm9 md12 class="">
                                    <v-card flat width="1200" class="px-5 py-3" outlined>
                                        <v-flex row xs6 sm9 md12 justify="center">
                                            <!--<v-flex column v-for="progress in transporting_progress" :key="progress.id">
                                                    
                                                <v-card flat height="150"  width="180" class="px-5 py-3" outlined :class="{ InProgress: InProgress}">

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                                <v-icon large color="white" v-if="InProgress">
                                                                    mdi-reload
                                                                </v-icon>
                                                            </v-card>
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <p>{{ progress.name}} </p>
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>-->
                                            <v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: clearing_started.InProgress, 
                                                                waiting: clearing_started.waiting, 
                                                                completed: clearing_started.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                               

                                                                <v-icon large color="white" v-show="clearing_started.completed">
                                                                    mdi-check-outline

                                                                </v-icon>

                                                                 <v-icon large color="white" v-show="clearing_started.InProgress">
                                                                    mdi-reload
                                                                </v-icon>
                                                                
                                                            </v-card>
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <!--<p>{{ transporting_progress[0].name}} </p>-->
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Clearing started</span></v-flex>
                                                        <v-flex row xs12>

                                                            <span v-show="!clearing_started.completed" class="font-weight-regular body-2">Expected on {{ clearing_started.expected_date}}</span>
                                                            <span v-show="clearing_started.completed" class="font-weight- body-2">Completed on {{ clearing_started.completed_date}}</span>
                                                            
                                                        </v-flex>
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>

                                            <v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: tcra_processing.InProgress, 
                                                                waiting: tcra_processing.waiting, 
                                                                completed: tcra_processing.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                                <v-icon large color="white" v-show="tcra_processing.completed">
                                                                    mdi-check-outline
                                                                </v-icon>

                                                                 <v-icon large color="white" v-show="tcra_processing.InProgress">
                                                                    mdi-reload
                                                                </v-icon>
                                                            </v-card>
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <!--<p>{{ transporting_progress[1].name}} </p>-->
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Tcra processing</span></v-flex>
                                                        <v-flex row xs12>

                                                           <span v-show="!tcra_processing.completed" class="font-weight-regular body-2">Expected on {{ tcra_processing.expected_date}}</span>
                                                            <span v-show="tcra_processing.completed" class="font-weight- body-2">Completed on {{ tcra_processing.completed_date}}</span>

                                                        </v-flex>
                                                        <!--<p class="font-weight-bold blue--text text--darken-2">Cargo in transit</p>-->
                                                       
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>

                                            <!--<v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: cargo_offloading.InProgress, 
                                                                waiting: cargo_offloading.waiting, 
                                                                completed: cargo_offloading.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                                
                                                                <v-icon large color="white" v-show="cargo_offloading.completed">
                                                                    mdi-check-outline
                                                                </v-icon>

                                                                 <v-icon large color="white" v-show="cargo_offloading.InProgress">
                                                                    mdi-reload
                                                                </v-icon>

                                                            </v-card>
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                      
                                                         <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Cargo offloading</span></v-flex>
                                                        <v-flex row xs12>

                                                            <span v-show ="!cargo_offloading.completed" class="font-weight-regular body-2">Expected on {{ cargo_offloading.expected_date}}</span>
                                                            <span v-show ="cargo_offloading.completed" class="font-weight- body-2">Completed on {{ cargo_offloading.completed_date}}</span>
                                                            
                                                        </v-flex>
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>-->

                                            <!--<v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: cargo_delivered.InProgress, 
                                                                waiting: cargo_delivered.waiting, 
                                                                completed: cargo_delivered.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            
                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                                
                                                            <v-icon large color="white" v-show ="cargo_delivered.completed">
                                                                    mdi-check-outline
                                                            </v-icon>

                                                            <v-icon large color="white" v-show ="cargo_delivered.InProgress">
                                                                    mdi-reload
                                                            </v-icon>

                                                            </v-card>
                                                                
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Cargo delivered</span></v-flex>
                                                        <v-flex row xs12>

                                                        <span v-show="!cargo_delivered.completed" class="font-weight-regular body-2">Expected on {{ cargo_delivered.expected_date}}</span>
                                                        <span v-show="cargo_delivered.completed" class="font-weight- body-2">Completed on {{ cargo_delivered.completed_date}}</span>
                                                            
                                                        </v-flex>
                                        
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>-->

                                        </v-flex>
                                    </v-card>
                                </v-flex> 
                                        
                            </v-flex>

                            <v-flex row class="mt-6" v-show="transporting">

                                <v-flex row xs12 class="mb-4">
                                    <p class=" title font-weight-regular mb-0"> Transporting progress</p>
                                </v-flex> 

                                <v-flex row xs6 sm9 md12 class="">
                                    <v-card flat width="1200" class="px-5 py-3" outlined>
                                        <v-flex row xs6 sm9 md12 justify="center">
                                            <!--<v-flex column v-for="progress in transporting_progress" :key="progress.id">
                                                    
                                                <v-card flat height="150"  width="180" class="px-5 py-3" outlined :class="{ InProgress: InProgress}">

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                                <v-icon large color="white" v-if="InProgress">
                                                                    mdi-reload
                                                                </v-icon>
                                                            </v-card>
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <p>{{ progress.name}} </p>
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>-->
                                            <v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: cargo_loading.InProgress, 
                                                                waiting: cargo_loading.waiting, 
                                                                completed: cargo_loading.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                               

                                                                <v-icon large color="white" v-show="cargo_loading.completed">
                                                                    mdi-check-outline

                                                                </v-icon>

                                                                 <v-icon large color="white" v-show="cargo_loading.InProgress">
                                                                    mdi-reload
                                                                </v-icon>
                                                                
                                                            </v-card>
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <!--<p>{{ transporting_progress[0].name}} </p>-->
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Cargo loading</span></v-flex>
                                                        <v-flex row xs12>

                                                            <span v-show="!cargo_loading.completed" class="font-weight-regular body-2">Expected on {{ cargo_loading.expected_date}}</span>
                                                            <span v-show="cargo_loading.completed" class="font-weight- body-2">Completed on {{ cargo_loading.completed_date}}</span>
                                                            
                                                        </v-flex>
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>

                                            <v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: cargo_in_transmit.InProgress, 
                                                                waiting: cargo_in_transmit.waiting, 
                                                                completed: cargo_in_transmit.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                                <v-icon large color="white" v-show="cargo_in_transmit.completed">
                                                                    mdi-check-outline
                                                                </v-icon>

                                                                 <v-icon large color="white" v-show="cargo_in_transmit.InProgress">
                                                                    mdi-reload
                                                                </v-icon>
                                                            </v-card>
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <!--<p>{{ transporting_progress[1].name}} </p>-->
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Cargo in transit</span></v-flex>
                                                        <v-flex row xs12>

                                                           <span v-show="!cargo_in_transmit.completed" class="font-weight-regular body-2">Expected on {{ cargo_in_transmit.expected_date}}</span>
                                                            <span v-show="cargo_in_transmit.completed" class="font-weight- body-2">Completed on {{ cargo_in_transmit.completed_date}}</span>

                                                        </v-flex>
                                                        <!--<p class="font-weight-bold blue--text text--darken-2">Cargo in transit</p>-->
                                                       
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>

                                            <v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: cargo_offloading.InProgress, 
                                                                waiting: cargo_offloading.waiting, 
                                                                completed: cargo_offloading.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                                
                                                                <v-icon large color="white" v-show="cargo_offloading.completed">
                                                                    mdi-check-outline
                                                                </v-icon>

                                                                 <v-icon large color="white" v-show="cargo_offloading.InProgress">
                                                                    mdi-reload
                                                                </v-icon>

                                                            </v-card>
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <!--<p>{{ transporting_progress[2].name}} </p>-->
                                                         <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Cargo offloading</span></v-flex>
                                                        <v-flex row xs12>

                                                            <span v-show ="!cargo_offloading.completed" class="font-weight-regular body-2">Expected on {{ cargo_offloading.expected_date}}</span>
                                                            <span v-show ="cargo_offloading.completed" class="font-weight- body-2">Completed on {{ cargo_offloading.completed_date}}</span>
                                                            
                                                        </v-flex>
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>

                                            <v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: cargo_delivered.InProgress, 
                                                                waiting: cargo_delivered.waiting, 
                                                                completed: cargo_delivered.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            
                                                            <v-card flat height="80"  width="100" class="px-5 py-3" color="#4169E1">
                                                                
                                                            <v-icon large color="white" v-show ="cargo_delivered.completed">
                                                                    mdi-check-outline
                                                            </v-icon>

                                                            <v-icon large color="white" v-show ="cargo_delivered.InProgress">
                                                                    mdi-reload
                                                            </v-icon>

                                                            </v-card>
                                                                
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <!--<p>{{ transporting_progress[3].name}} </p>-->
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Cargo delivered</span></v-flex>
                                                        <v-flex row xs12>

                                                        <span v-show="!cargo_delivered.completed" class="font-weight-regular body-2">Expected on {{ cargo_delivered.expected_date}}</span>
                                                        <span v-show="cargo_delivered.completed" class="font-weight- body-2">Completed on {{ cargo_delivered.completed_date}}</span>
                                                            
                                                        </v-flex>
                                        
                                                    </v-flex>

                                                </v-card>

                                            </v-flex>

                                        </v-flex>
                                    </v-card>
                                </v-flex> 
                                        
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

        tender:[],

        transporting_progress:[],

        clearing:false,

        transporting:false,

        cargo_loading:{
            
            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:''
        },

        cargo_in_transmit:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:''
        },

        cargo_offloading:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:''
        },

        cargo_delivered:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:''
        },



         tcra_processing:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:''
        },

        clearing_started:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:''
        },
    }),

    methods:{

        setProgress(tender_progress){
            

            for(let i=0; i< tender_progress.length; i++)
            {
                //eslint-disable-next-line no-console
                //console.log(tender_progress[i].progress_name);
                                                                                                          
                axios.get(`http://192.168.1.44:8000/api/v1/configurations/${tender_progress[i].progress_id}`).
                            then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                switch(response.data.objects.name){

                                    case "Cargo loading":

                                        this.cargo_loading.InProgress = tender_progress[i].InProgress;
                                        this.cargo_loading.completed = tender_progress[i].completed;
                                        this.cargo_loading.waiting = tender_progress[i].waiting;
                                        this.cargo_loading.expected_date = tender_progress[i].expected_date;
                                        this.cargo_loading.completed_date = tender_progress[i].completed_date;


                                        break;

                                    case "Cargo in transit":

                                        this.cargo_in_transmit.InProgress = tender_progress[i].InProgress;
                                        this.cargo_in_transmit.completed = tender_progress[i].completed;
                                        this.cargo_in_transmit.waiting = tender_progress[i].waiting;
                                        this.cargo_in_transmit.expected_date = tender_progress[i].expected_date;
                                        this.cargo_in_transmit.completed_date = tender_progress[i].completed_date;

                                        break;

                                    case "Cargo offloading":

                                        this.cargo_offloading.InProgress = tender_progress[i].InProgress;
                                        this.cargo_offloading.completed = tender_progress[i].completed;
                                        this.cargo_offloading.waiting = tender_progress[i].waiting;
                                        this.cargo_offloading.expected_date = tender_progress[i].expected_date;
                                        this.cargo_offloading.completed_date = tender_progress[i].completed_date;

                                        break;
                    
                                    case "Cargo delivered":

                                        this.cargo_delivered.InProgress = tender_progress[i].InProgress;
                                        this.cargo_delivered.completed = tender_progress[i].completed;
                                        this.cargo_delivered.waiting = tender_progress[i].waiting;
                                        this.cargo_delivered.expected_date = tender_progress[i].expected_date;
                                        this.cargo_delivered.completed_date = tender_progress[i].completed_date;

                                        break;

                            }}).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });

            }
            
        },

        setClearingProgress(tender_progress){
            
            for(let i=0; i< tender_progress.length; i++)
            {
                //eslint-disable-next-line no-console
                //console.log(tender_progress[i].progress_name);
                                                                                                          
                axios.get(`http://192.168.1.44:8000/api/v1/configurations/${tender_progress[i].clearing_progress_id}`).
                            then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                                switch(response.data.objects.name){

                                    case "Clearing started":

                                        this.clearing_started.InProgress = tender_progress[i].InProgress;
                                        this.clearing_started.completed = tender_progress[i].completed;
                                        this.clearing_started.waiting = tender_progress[i].waiting;
                                        this.clearing_started.expected_date = tender_progress[i].expected_date;
                                        this.clearing_started.completed_date = tender_progress[i].completed_date;


                                        break;

                                    case "TRA process":

                                        this.tcra_processing.InProgress = tender_progress[i].InProgress;
                                        this.tcra_processing.completed = tender_progress[i].completed;
                                        this.tcra_processing.waiting = tender_progress[i].waiting;
                                        this.tcra_processing.expected_date = tender_progress[i].expected_date;
                                        this.tcra_processing.completed_date = tender_progress[i].completed_date;

                                        break;

                                    case "Cargo offloading":

                                        this.cargo_offloading.InProgress = tender_progress[i].InProgress;
                                        this.cargo_offloading.completed = tender_progress[i].completed;
                                        this.cargo_offloading.waiting = tender_progress[i].waiting;
                                        this.cargo_offloading.expected_date = tender_progress[i].expected_date;
                                        this.cargo_offloading.completed_date = tender_progress[i].completed_date;

                                        break;
                    
                                    case "Cargo delivered":

                                        this.cargo_delivered.InProgress = tender_progress[i].InProgress;
                                        this.cargo_delivered.completed = tender_progress[i].completed;
                                        this.cargo_delivered.waiting = tender_progress[i].waiting;
                                        this.cargo_delivered.expected_date = tender_progress[i].expected_date;
                                        this.cargo_delivered.completed_date = tender_progress[i].completed_date;

                                        break;

                            }}).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });

            }
            
        }
    },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

            let url = `http://192.168.1.44:8000/api/v1/tenders/${vm.$route.params.id}`;

            //let transporting = `http://192.168.1.44:8000/api/v1/transport-progress/tender/${vm.$route.params.id}`;

            let clearing = `http://192.168.1.44:8000/api/v1/clearing-progress/tender/${vm.$route.params.id}`;
        
            axios.get(url).then((response) => 
                            {
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                                vm.tender = response.data.objects;

                                axios.get(`http://192.168.1.44:8000//api/v1/agent-industries/${response.data.objects.tender_type}`).then((response) => 
                                    {   
                                        if(response.data.objects.industry_name === "Transporting")
                                            vm.transporting = true;
                                        else 
                                            vm.clearing = true;

                                        //eslint-disable-next-line no-console
                                        //console.log(response.data.objects);

                                    }).catch(()=>{

                                    // response = null;
                                    //commit('setOnProgressTenders',response)
                                    });

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });

            axios.get(clearing).then((response) => 
                            {
                                //vm.setProgress(response.data.objects);
                                
                                vm.setClearingProgress(response.data.objects);
                                 //eslint-disable-next-line no-console
                                 //console.log(response.data.objects);
                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                            });
            next();
        }) 
    },
}
</script>

<style scoped>

    .InProgress {
        opacity: 1.0;

    }
    
     .waiting {
        opacity: 0.3 ;
        
    }

     .completed {
        opacity: 0.3 ;
    }

</style>