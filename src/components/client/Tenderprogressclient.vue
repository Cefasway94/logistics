<template>
    <v-container class=" mt-12 px-5">

            <Alert v-if="alert" v-bind="{message,type}"/>

            <Message/>

            <v-card flat class="mt-12 mx-auto mb-5" color="#F5FAFF">

                <v-row class="px-3 ">
                  
                    <v-col cols=12 md=5 style="background: white">
                        
                        <v-row>
                            <v-col><h1 class=" font-weight-regular headline ">{{ tender.cargo_details }}</h1></v-col>
                            <v-col>
                                <v-tooltip right content-class="tooltip">
                                    <template v-slot:activator="{ on }">
                                        <v-chip 
                                            small 
                                            v-on="on"
                                            color="green"
                                            class="white--text ml-7 mt-1"
                                        >
                                            {{ tender.tender_progress}}

                                        </v-chip>
                                    </template>
                                    <span v-if="tender.tender_progress === 'onProgress'">The agent has started to work on this tender</span>
                                    <span v-if="tender.tender_progress === 'awaiting'">Tender has not yet been started to be processed</span>
                                </v-tooltip>
                            </v-col>

                           
                        </v-row>

                    </v-col>

                    <v-col md=1>
                       
                    </v-col>

                    <v-col cols=12 md=3 style="background: white">
    
                        <v-row>

                            <v-col v-if="tender.tender_type == 'Clearing'"><span class=" font-weight-regular">AGENT: </span></v-col>
                            <v-col v-if="tender.tender_type == 'Transporting'"><span class=" font-weight-regular">TRANSPORTER: </span></v-col>
                            <v-col><span class=" font-weight-regular">{{ tender.awarded_agent_id}}</span></v-col>
                           
                        </v-row>
                    </v-col >

                    <v-col md=1>
                        
                    </v-col>

                    <v-col cols=12 md=2 style="background: white">

                        <v-row>
                          
                            <v-col><span class=" font-weight-regular">{{Number(tender.customer_offer_amount).toLocaleString()}} {{ tender.currency }}</span></v-col>
                        </v-row>

                    </v-col>

                </v-row>

            </v-card>

            <v-card flat width="1300" class="mx-auto mb-5" color="transparent">
            <v-tabs 
                background-color="transparent"
                color="#4169E1">
                
                <v-tab class="text-capitalize body-1">Tender progress</v-tab>
                <!--<v-tab class="text-capitalize body-1">Negotiation history</v-tab>
                <v-tab class="text-capitalize body-1" >Despute</v-tab>-->

                
                
                <v-tab-item style="background-color:#F5FAFF;">

                    <v-divider></v-divider>

                    <!--<v-card row flat width="1300" class="mt-7 mx-auto" color="#F5FAFF">
                        <v-flex row class="">
                            <v-icon color="grey" large class="mb-4 ml-3 mr-5">timeline</v-icon>
                                <p class="grey--text headline ">Timeline</p>
                        </v-flex>
                    </v-card>-->

                    <v-card width="1300" class="mx-auto mb-10 d-flex pa-3" color="">
                        <v-col>
                            <!--<v-flex row class="px-3">
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
                            </v-flex>-->

                            <v-flex row class="mt-6" v-show="clearing">

                                <v-row class="mb-4">
                                    <v-col cols="12">
                                        <p class=" title font-weight-bold blue--text text--darken-2 mb-0"> Clearing progress</p>
                                    </v-col>
                                </v-row> 

                                <v-flex row xs6 sm9 md12 class="">
                                    <v-card flat width="1200" class="px-5 py-3" outlined>
                                        <v-flex row xs6 sm9 md12 justify="center">
                                           
                                            <!-- <v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: port_processing.InProgress, 
                                                                waiting: port_processing.waiting, 
                                                                completed: port_processing.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>
                                                           
                                                        <v-card flat height="80" width="100" class="px-5 py-3" color="#4169E1">
                                                    

                                                            <v-icon large color="white" v-show="port_processing.completed">
                                                                mdi-check-outline

                                                            </v-icon>

                                                            <v-icon large color="white" v-show="port_processing.InProgress">
                                                                mdi-reload
                                                            </v-icon>
                                                    
                                                        </v-card>

                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Port processing</span></v-flex>
                                                        <v-flex row xs12>

                                                            <span v-show="!port_processing.completed" class="font-weight-regular body-2">Started on {{ port_processing.expected_date}}</span>
                                                            <span v-show="port_processing.completed" class="font-weight- body-2">Completed on {{ port_processing.completed_date}}</span>
                                                            
                                                        </v-flex>
                                                    </v-flex>

                                                </v-card>

                                            </v-flex> -->

                                            <!-- <v-flex column>
                                                    
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

                                                           

                                                        <v-card flat height="80" width="100" class="px-5 py-3" color="#4169E1">
                                                            <v-icon large color="white" v-show="tcra_processing.completed">
                                                                mdi-check-outline
                                                            </v-icon>

                                                            <v-icon large color="white" v-show="tcra_processing.InProgress">
                                                                mdi-reload
                                                            </v-icon>
                                                        </v-card>
                                                               
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                       
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">TRA</span></v-flex>
                                                        <v-flex row xs12>

                                                           <span v-show="!tcra_processing.completed" class="font-weight-regular body-2">Started on {{ tcra_processing.expected_date}}</span>
                                                            <span v-show="tcra_processing.completed" class="font-weight- body-2">Completed on {{ tcra_processing.completed_date}}</span>

                                                        </v-flex>
                                                       
                                                    </v-flex>

                                                </v-card>

                                            </v-flex> -->

                                            <!-- <v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: other_processes.InProgress, 
                                                                waiting: other_processes.waiting, 
                                                                completed: other_processes.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                        <v-card flat height="80" width="100" class="px-5 py-3" color="#4169E1">
                                                            <v-icon large color="white" v-show="other_processes.completed">
                                                                mdi-check-outline
                                                            </v-icon>

                                                            <v-icon large color="white" v-show="other_processes.InProgress">
                                                                mdi-reload
                                                            </v-icon>
                                                        </v-card>

                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                       
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Other processes</span></v-flex>
                                                        <v-flex row xs12>

                                                        <span v-show="!other_processes.completed" class="font-weight-regular body-2">Started on {{ other_processes.expected_date}}</span>
                                                        <span v-show="other_processes.completed" class="font-weight- body-2">Completed on {{ other_processes.completed_date}}</span>

                                                    </v-flex>
                                                        
                                                       
                                                    </v-flex>

                                                </v-card>

                                            </v-flex> -->

                                            <!-- <v-flex column>
                                                    
                                                <v-card 
                                                    flat height="150"  
                                                    width="210" 
                                                    class="px-5 py-3" 
                                                    outlined 
                                                    :class="{   InProgress: completion.InProgress, 
                                                                waiting: completion.waiting, 
                                                                completed: completion.completed
                                                            }"
                                                >

                                                    <v-flex row xs12 class="mb-3" offset-1>

                                                            

                                                        <v-card flat height="80" width="100" class="px-5 py-3" color="#4169E1">
                                                            <v-icon large color="white" v-show="completion.completed">
                                                                mdi-check-outline
                                                            </v-icon>

                                                            <v-icon large color="white" v-show="completion.InProgress">
                                                                mdi-reload
                                                            </v-icon>
                                                        </v-card>

                                                              
                                                    </v-flex>
                                                   
                                                    <v-flex row xs12 class="">
                                                      
                                                        <v-flex row xs12 offset-1><span class="font-weight-bold blue--text text--darken-2">Completion</span></v-flex>
                                                        <v-flex row xs12>

                                                           <span v-show="!completion.completed" class="font-weight-regular body-2">Started on {{ completion.expected_date}}</span>
                                                           <span v-show="completion.completed" class="font-weight- body-2">Completed on {{ completion.completed_date}}</span>

                                                        </v-flex>
                                                       
                                                       
                                                    </v-flex>

                                                </v-card>

                                            </v-flex> -->
                                            <v-flex class="progress">
                                                <ul class="text-center">

                                                    <li style="" class="steps">
                                                        <template>

                                                            <v-card
                                                                flat
                                                                :class="{   
                                                                    InProgress: port_processing.InProgress, 
                                                                    waiting: port_processing.waiting, 
                                                                    completed: port_processing.completed
                                                                }"
                                                            >
                                                                <v-icon color="primary" size="50">archive</v-icon><br>
                                                                <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                                                    <v-icon class="x-large " v-show="port_processing.InProgress">cached</v-icon>
                                                                    <v-icon class="x-large " v-show="port_processing.completed">done</v-icon>
                                                                </v-btn>
                            
                                                                <p class="mb-0">Port processing</p>
                                        
                                                                <p></p>
                                                                <p v-show="!port_processing.completed" class="font-weight-regular body-2">Started on {{ port_processing.expected_date}}</p>
                                                                <p v-show="port_processing.completed" class="font-weight- body-2">Completed on {{ port_processing.completed_date}}</p>
                                                            </v-card>
                                                    
                                                        </template>
                                                    </li>
                                                

                                                    <li class="divider" >
                                                        <v-divider color="" width="100" size="20"></v-divider>
                                                        <v-divider v-if="tcra_processing.InProgress" color="blue" width="100" size="20"></v-divider>
                                                        <v-divider v-else-if="tcra_processing.completed" color="lightblue" width="100" size="20"></v-divider>
                                                    </li>

                                                    <li style="" class="steps">
                                                        <template>

                                                            <v-card
                                                                flat
                                                                :class="{   
                                                                    InProgress: tcra_processing.InProgress, 
                                                                    waiting: tcra_processing.waiting, 
                                                                    completed: tcra_processing.completed
                                                                }"
                                                            >
                                                                <v-icon color="primary" size="50">local_shipping</v-icon><br>
                                                                <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                                                    <v-icon class="x-large " v-show="tcra_processing.InProgress">cached</v-icon>
                                                                    <v-icon class="x-large " v-show="tcra_processing.completed">done</v-icon>
                                                                </v-btn>
                                                            
                                                                <p class="mb-0">TRA</p>
                                        
                                                                <p></p>
                                                                <p v-show="!tcra_processing.completed" class="font-weight-regular body-2">Started on {{ tcra_processing.expected_date}}</p>
                                                                <p v-show="tcra_processing.completed" class="font-weight- body-2">Completed on {{ tcra_processing.completed_date}}</p>
                                                            </v-card>
                                                    
                                                        </template>
                                                    </li>

                                                    <li class="divider" >
                                                        <v-divider color="" width="100" size="20"></v-divider>
                                                        <v-divider v-if="other_processes.InProgress" color="blue" width="100" size="20"></v-divider>
                                                        <v-divider v-else-if="other_processes.completed" color="lightblue" width="100" size="20"></v-divider>
                                                    </li>
                                                    

                                                    <li style="" class="steps">
                                                        <template>

                                                        <v-card
                                                            flat
                                                            :class="{   
                                                                InProgress: other_processes.InProgress, 
                                                                waiting: other_processes.waiting, 
                                                                completed: other_processes.completed
                                                            }"
                                                        >
                                                            <v-icon color="primary" size="50">unarchive</v-icon><br>
                                                            <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                                                <v-icon class="x-large " v-show="other_processes.InProgress">cached</v-icon>
                                                                <v-icon class="x-large " v-show="other_processes.completed">done</v-icon>
                                                            </v-btn>
                                                        
                                                            <p class="mb-0">Other processes</p>
                                    
                                                            <p></p>
                                                            <p v-show="!other_processes.completed" class="font-weight-regular body-2">Started on {{ other_processes.expected_date}}</p>
                                                            <p v-show="other_processes.completed" class="font-weight- body-2">Completed on {{ other_processes.completed_date}}</p>
                                                        </v-card>
                                                    
                                                        </template>
                                                    </li>

                                                    <li class="divider" >
                                                        <v-divider color="" width="100" size="20"></v-divider>
                                                        <v-divider v-if="completion.InProgress" color="blue" width="100" size="20"></v-divider>
                                                        <v-divider v-else-if="completion.completed" color="lightblue" width="100" size="20"></v-divider>
                                                    </li>
                                                    

                                                    <li style="" class="steps">
                                                        <template>

                                                            <v-card
                                                                flat
                                                                :class="{   
                                                                    InProgress: completion.InProgress, 
                                                                    waiting: completion.waiting, 
                                                                    completed: completion.completed
                                                                }"
                                                            >
                                                                <v-icon color="primary" size="50">assignment_turned_in</v-icon><br>
                                                                <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                                                    <v-icon class="x-large " v-show="completion.InProgress">cached</v-icon>
                                                                    <v-icon class="x-large " v-show="completion.completed">done</v-icon>
                                                                </v-btn>
                                                                
                                                                <p class="mb-0">Completion</p>
                                        
                                                                <p></p>
                                                                <p v-show="!completion.completed" class="font-weight-regular body-2">Started on {{ completion.expected_date}}</p>
                                                                <p v-show="completion.completed" class="font-weight- body-2">Completed on {{ completion.completed_date}}</p>
                                                            </v-card>
                                                    
                                                        </template>
                                                    </li>
                                                </ul>
                                            </v-flex>
                                        </v-flex>
                                    </v-card>
                                </v-flex> 
                                        
                            </v-flex>

                            <v-flex row class="mt-6" v-show="transporting">

                                <v-row class="mb-4">
                                    <v-col cols="12">
                                        <p class=" title font-weight-bold blue--text text--darken-2 mb-0"> Transporting progress</p>
                                    </v-col>
                                </v-row> 

                                <v-flex row xs6 sm9 md12 class="">
                                    <v-card flat width='100%' class="px-5 py-3" outlined>

                                        <v-flex class="progress">
                                            <ul class="text-center">

                                                <li style="" class="steps">
                                                     <template>

                                                         <v-card
                                                            flat
                                                            :class="{   
                                                                InProgress: cargo_loading.InProgress, 
                                                                waiting: cargo_loading.waiting, 
                                                                completed: cargo_loading.completed
                                                            }"
                                                        >
                                                            <v-icon color="primary" size="50">archive</v-icon><br>
                                                            <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                                                <v-icon class="x-large " v-show="cargo_loading.InProgress">cached</v-icon>
                                                                <v-icon class="x-large " v-show="cargo_loading.completed">done</v-icon>
                                                            </v-btn>
                        
                                                            <p class="mb-0">Cargo loading</p>
                                    
                                                            <p></p>
                                                            <p v-show="!cargo_loading.completed" class="font-weight-regular body-2">Started on {{ cargo_loading.expected_date}}</p>
                                                            <p v-show="cargo_loading.completed" class="font-weight- body-2">Completed on {{ cargo_loading.completed_date}}</p>
                                                        </v-card>
                                                
                                                    </template>
                                                </li>
                                               

                                                <li class="divider" >
                                                    <v-divider color="" width="100" size="20"></v-divider>
                                                    <v-divider v-if="cargo_in_transmit.InProgress" color="blue" width="100" size="20"></v-divider>
                                                    <v-divider v-else-if="cargo_in_transmit.completed" color="lightblue" width="100" size="20"></v-divider>
                                                </li>

                                                <li style="" class="steps">
                                                    <template>

                                                        <v-card
                                                            flat
                                                            :class="{   
                                                                InProgress: cargo_in_transmit.InProgress, 
                                                                waiting: cargo_in_transmit.waiting, 
                                                                completed: cargo_in_transmit.completed
                                                            }"
                                                        >
                                                            <v-icon color="primary" size="50">local_shipping</v-icon><br>
                                                            <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                                                <v-icon class="x-large " v-show="cargo_in_transmit.InProgress">cached</v-icon>
                                                                <v-icon class="x-large " v-show="cargo_in_transmit.completed">done</v-icon>
                                                            </v-btn>
                                                        
                                                            <p class="mb-0">Cargo in transit</p>
                                    
                                                            <p></p>
                                                            <p v-show="!cargo_in_transmit.completed" class="font-weight-regular body-2">Started on {{ cargo_in_transmit.expected_date}}</p>
                                                            <p v-show="cargo_in_transmit.completed" class="font-weight- body-2">Completed on {{ cargo_in_transmit.completed_date}}</p>
                                                        </v-card>
                                                
                                                    </template>
                                                </li>

                                                 <li class="divider" >
                                                    <v-divider color="" width="100" size="20"></v-divider>
                                                    <v-divider v-if="cargo_offloading.InProgress" color="blue" width="100" size="20"></v-divider>
                                                    <v-divider v-else-if="cargo_offloading.completed" color="lightblue" width="100" size="20"></v-divider>
                                                </li>
                                                

                                                <li style="" class="steps">
                                                    <template>

                                                    <v-card
                                                        flat
                                                        :class="{   
                                                            InProgress: cargo_offloading.InProgress, 
                                                            waiting: cargo_offloading.waiting, 
                                                            completed: cargo_offloading.completed
                                                        }"
                                                    >
                                                        <v-icon color="primary" size="50">unarchive</v-icon><br>
                                                        <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                                            <v-icon class="x-large " v-show="cargo_offloading.InProgress">cached</v-icon>
                                                            <v-icon class="x-large " v-show="cargo_offloading.completed">done</v-icon>
                                                        </v-btn>
                                                    
                                                        <p class="mb-0">Cargo offloading</p>
                                
                                                        <p></p>
                                                        <p v-show="!cargo_offloading.completed" class="font-weight-regular body-2">Started on {{ cargo_offloading.expected_date}}</p>
                                                        <p v-show="cargo_offloading.completed" class="font-weight- body-2">Completed on {{ cargo_offloading.completed_date}}</p>
                                                    </v-card>
                                                
                                                    </template>
                                                </li>

                                                 <li class="divider" >
                                                    <v-divider color="" width="100" size="20"></v-divider>
                                                    <v-divider v-if="cargo_delivered.InProgress" color="blue" width="100" size="20"></v-divider>
                                                    <v-divider v-else-if="cargo_delivered.completed" color="lightblue" width="100" size="20"></v-divider>
                                                </li>
                                                

                                                <li style="" class="steps">
                                                    <template>

                                                        <v-card
                                                            flat
                                                            :class="{   
                                                                InProgress: cargo_delivered.InProgress, 
                                                                waiting: cargo_delivered.waiting, 
                                                                completed: cargo_delivered.completed
                                                            }"
                                                        >
                                                            <v-icon color="primary" size="50">assignment_turned_in</v-icon><br>
                                                            <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                                                <v-icon class="x-large " v-show="cargo_delivered.InProgress">cached</v-icon>
                                                                <v-icon class="x-large " v-show="cargo_delivered.completed">done</v-icon>
                                                            </v-btn>
                                                            
                                                            <p class="mb-0">Cargo delivered</p>
                                    
                                                            <p></p>
                                                            <p v-show="!cargo_delivered.completed" class="font-weight-regular body-2">Started on {{ cargo_delivered.expected_date}}</p>
                                                            <p v-show="cargo_delivered.completed" class="font-weight- body-2">Completed on {{ cargo_delivered.completed_date}}</p>
                                                        </v-card>
                                                
                                                    </template>
                                                </li>
                                            </ul>
                                        </v-flex>

                                    </v-card>
                                </v-flex> 
                                        
                            </v-flex>

                            <v-flex row xs12 class="mt-12">
                                <p class="title font-weight-bold blue--text text--darken-2"> Payment Progress</p>
                                <v-container>
                                    <v-progress-linear
                                        :active="true"
                                        :value= payment_value
                                        :height="20"
                                        :background-opacity="0.2"
                                        :striped="true"
                                        :buffer-value="100"
                                        color="light-blue"

                                    ></v-progress-linear>

                                    <v-row
                                    >
                                        <v-col :offset="5">
                                            <span class="font-weight-regular black--text text--darken-2">You have paid {{ payment_value }}% </span><v-chip v-show="is_verified == false" class="green white--text">Waiting for payment verification</v-chip>
                                        </v-col>
                                       
                                        <v-col :offset="10">
                                            <v-btn
                                                color="#4169E1"
                                                elevation="flat"
                                                class="white--text"
                                                :to="'/client/payment/'+tender.id+'/'+tender.tender_type"
                                                :disabled="full_paid"
                                            >
                                                Pay
                                            </v-btn>
                                        </v-col>

                                    </v-row>
                                    
                                </v-container>
                                


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
                                <p class=" body-2 text-uppercase" style="color:#4169E1;"> {{ tender.awarded_agent_id}} commented</p>
                                <v-card flat height="100" width="1200" class="px-5 py-3" outlined>
                                    <p class=" body-2 ">
                                    
                                    {{ this.comments}}
                                    </p>
                                </v-card>
                                </v-col>  
                                            
                            </v-row>
                        </v-card>
                    </v-card>

                    <!--<v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
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
                    </v-card>-->

            
                </v-tab-item>
            </v-tabs>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios'
import Alert from '@/components/Alert.vue'
import Message from '@/components/Message.vue'
export default {

    components:{Alert,Message},

    data: ()=>({

        tender:[],

        full_paid:false,

        InProgress:[],

        comments:'',

        transporting_progress:[],

        clearing:false,

        transporting:false,

        payment_value:0,

        alert: false,
        message:'',
        type:'',

        is_verified:'',

        cargo_loading:{
            
            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:'',
            comments:''
        },

        cargo_in_transmit:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:'',
            comments:''
        },

        cargo_offloading:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:'',
            comments:''
        },

        cargo_delivered:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:'',
            comments:''
        },


         tcra_processing:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:'',
            comments:''
        },

        port_processing:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:'',
            comments:''
        },

        other_processes:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:'',
            comments:''
        },

        completion:{

            InProgress:false,
            completed:false,
            waiting: true,
            expected_date:'',
            completed_date:'',
            comments:''
        },
    }),

    methods:{

        setAlert(message,type){

            this.alert = true;
            this.message = message;
            this.type = type;
        }, 

        fullPaid(){

            return (this.payment_value >= "100.00");
        },

        setTransportingProgress(tender_progress){
            

            for(let i=0; i< tender_progress.length; i++)
            {
                //eslint-disable-next-line no-console
                //console.log(tender_progress[i].progress_name);
                                                                                                          
                axios.get(`http://207.180.215.239:9000/api/v1/configurations/${tender_progress[i].progress_id}`).
                            then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);
                               if(response.data.genralErrorCode === 8000)
                               {
                                   this.Alert = false;

                                   switch(response.data.objects.name){

                                        case "Cargo loading":

                                            this.cargo_loading.InProgress = tender_progress[i].InProgress;
                                            this.cargo_loading.completed = tender_progress[i].delivered;
                                            this.cargo_loading.waiting = tender_progress[i].waiting;
                                            this.cargo_loading.expected_date = tender_progress[i].expected_date;
                                            this.cargo_loading.completed_date = tender_progress[i].completed_date;
                                            this.cargo_loading.comments = tender_progress[i].comments;

                                            if(tender_progress[i].comments !== null){
                                                
                                                this.comments = tender_progress[i].comments;
                                            }


                                            break;

                                        case "Cargo in transit":

                                            this.cargo_in_transmit.InProgress = tender_progress[i].InProgress;
                                            this.cargo_in_transmit.completed = tender_progress[i].delivered;
                                            this.cargo_in_transmit.waiting = tender_progress[i].waiting;
                                            this.cargo_in_transmit.expected_date = tender_progress[i].expected_date;
                                            this.cargo_in_transmit.completed_date = tender_progress[i].completed_date;
                                            this.cargo_in_transmit.comments = tender_progress[i].comments;
                                            
                                            if(tender_progress[i].comments !== null){
                                                
                                                this.comments = tender_progress[i].comments;
                                            }

                                            break;

                                        case "Cargo offloading":

                                            this.cargo_offloading.InProgress = tender_progress[i].InProgress;
                                            this.cargo_offloading.completed = tender_progress[i].delivered;
                                            this.cargo_offloading.waiting = tender_progress[i].waiting;
                                            this.cargo_offloading.expected_date = tender_progress[i].expected_date;
                                            this.cargo_offloading.completed_date = tender_progress[i].completed_date;
                                            this.cargo_offloading.comments = tender_progress[i].comments;

                                            if(tender_progress[i].comments !== null){
                                                
                                                this.comments = tender_progress[i].comments;
                                            }

                                            break;
                        
                                        case "Cargo delivered":

                                            this.cargo_delivered.InProgress = tender_progress[i].InProgress;
                                            this.cargo_delivered.completed = tender_progress[i].delivered;
                                            this.cargo_delivered.waiting = tender_progress[i].waiting;
                                            this.cargo_delivered.expected_date = tender_progress[i].expected_date;
                                            this.cargo_delivered.completed_date = tender_progress[i].completed_date;
                                            this.cargo_delivered.comments = tender_progress[i].comments;

                                            if(tender_progress[i].comments !== null){

                                                this.comments = tender_progress[i].comments;
                                            }

                                            break;

                                    }

                               }
                               else if(response.data.genralErrorCode === 8004){

                                    this.alert = false;

                                    this.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();
                               }
                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                this.setAlert("There is internal server error","error");

                                document.getElementById('app').scrollIntoView();
                            });

            }
            
        },

        setClearingProgress(tender_progress){
            
            for(let i=0; i< tender_progress.length; i++)
            {
                //eslint-disable-next-line no-console
                //console.log(tender_progress[i].progress_name);
                                                                                                          
                axios.get(`http://207.180.215.239:8000/api/v1/configurations/${tender_progress[i].clearing_progress_id}`).
                            then((response) => 
                            {

                               //commit('setOnProgressTenders',response.data.objects)
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                               if(response.data.genralErrorCode === 8000)
                               {
                                   this.alert = false;

                                   switch(response.data.objects.name){

                                        case "Port processing":

                                            this.port_processing.InProgress = tender_progress[i].InProgress;
                                            this.port_processing.completed = tender_progress[i].completed;
                                            this.port_processing.waiting = tender_progress[i].waiting;
                                            this.port_processing.expected_date = tender_progress[i].expected_date;
                                            this.port_processing.completed_date = tender_progress[i].completed_date;
                                            this.port_processing.comments = tender_progress[i].comments;

                                            if(tender_progress[i].comments !== null){

                                                this.comments = tender_progress[i].comments;
                                            }

                                            break;

                                        case "TRA":

                                            this.tcra_processing.InProgress = tender_progress[i].InProgress;
                                            this.tcra_processing.completed = tender_progress[i].completed;
                                            this.tcra_processing.waiting = tender_progress[i].waiting;
                                            this.tcra_processing.expected_date = tender_progress[i].expected_date;
                                            this.tcra_processing.completed_date = tender_progress[i].completed_date;
                                            this.tcra_processing.comments = tender_progress[i].comments;

                                            if(tender_progress[i].comments !== null){

                                                this.comments = tender_progress[i].comments;
                                            }

                                            break;
                                        case "Other processes":

                                            this.other_processes.InProgress = tender_progress[i].InProgress;
                                            this.other_processes.completed = tender_progress[i].completed;
                                            this.other_processes.waiting = tender_progress[i].waiting;
                                            this.other_processes.expected_date = tender_progress[i].expected_date;
                                            this.other_processes.completed_date = tender_progress[i].completed_date;
                                            this.other_processes.comments = tender_progress[i].comments;

                                            if(tender_progress[i].comments !== null){

                                                this.comments = tender_progress[i].comments;
                                            }
                                            

                                            break;

                                        case "Completion":

                                            this.completion.InProgress = tender_progress[i].InProgress;
                                            this.completion.completed = tender_progress[i].completed;
                                            this.completion.waiting = tender_progress[i].waiting;
                                            this.completion.expected_date = tender_progress[i].expected_date;
                                            this.completion.completed_date = tender_progress[i].completed_date;
                                            this.completion.comments = tender_progress[i].comments;

                                            if(tender_progress[i].comments !== null){

                                                this.comments = tender_progress[i].comments;
                                            }

                                            break;
                                        default:
                                            break;

                                }
                               }
                               else if(response.data.genralErrorCode === 8004){

                                    this.alert = false;

                                    this.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();
                               }
                                }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                this.setAlert("There is internal server error","error");

                                document.getElementById('app').scrollIntoView();
                            });

            }
            
        },

        setClearingInProgress(progresses){

            for(let i=0; i< progresses.length; i++)
            {
                if(progresses[i].InProgress){
                    this.InProgress = progresses[i];
                    break;
                }
            }
        },

         setTransportingInProgress(progresses){

            for(let i=0; i< progresses.length; i++)
            {
                if(progresses[i].InProgress){
                    this.InProgress = progresses[i];
                    break;
                }
            }
        }
    },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

            if(vm.$route.params.tender_type == "Transporting"){

                let url = `http://207.180.215.239:9000/api/v1/tenders/${vm.$route.params.id}`;

                let transporting = `http://207.180.215.239:9000/api/v1/transport-progress/tender/${vm.$route.params.id}`;

                vm.transporting = true;
        
                axios.get(url).then((response) => 
                            {
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                               if(response.data.genralErrorCode === 8000)
                               {
                                   vm.alert = false;

                                   vm.tender = response.data.objects;

                               }
                               else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    vm.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();
                               }
                                

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                vm.setAlert("There is internal server error","error");

                                document.getElementById('app').scrollIntoView();
                            });

                axios.get(transporting).then((response) => 
                            {
                                //vm.setProgress(response.data.objects);


                                if(response.data.genralErrorCode === 8000)
                                {
                                     vm.alert = false;

                                     vm.setTransportingProgress(response.data.objects);
                                }
                                else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    vm.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();

                                }
                               
                                //vm.setTransportingInProgress(response.data.objects);
                                 //eslint-disable-next-line no-console
                                 //console.log(response.data.objects);
                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                vm.setAlert("There is internal server error","error");

                                document.getElementById('app').scrollIntoView();
                            });

                axios.get(`http://207.180.215.239:8002/api/oxopayment/oxopayment_by_orderID/${vm.$route.params.id}`)
                        .then((response) => 
                            {

                                if(response.data.genralErrorCode === 8000){
                                  
                                    let verified;
                                        
                                    for(let i=0; i< response.data.objects.length; i++)
                                    {
                                        if(response.data.objects[i].verify === true)
                                        {
                                            verified  = true;
                                        }
                                        else if(response.data.objects[i].verify === false){

                                            verified = false;

                                            return;
                                        }
                                    }

                                    vm.is_verified = verified;


                                }
                                else if(response.data.genralErrorCode === 8001){

                                    vm.is_verified = true;
                                }

                            }).catch(()=>{

                                 console.log("There is an error");
                            });

                            
                 axios.get(`http://207.180.215.239:8002/api/customerpayment/customerpayment_by_orderID/${vm.$route.params.id}`)
                        .then((response) => 
                            {

                                if(response.data.genralErrorCode === 8000){
                                  
                                    if(response.data.objects.is_full_amount_paid == 1)
                                    {
                                        vm.full_paid = true;

                                        vm.payment_value = 100;
                                    }
                                        
                                    else
                                    {
                                            
                                        vm.payment_value = response.data.objects.percentage_deposited;
                                    }         
                                }
                            }).catch(()=>{

                                 console.log("There is an error");
                            });

            } else if(vm.$route.params.tender_type == "Clearing"){

                
                let url = `http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`;

                let clearing = `http://207.180.215.239:8000/api/v1/clearing-progress/tender/${vm.$route.params.id}`;

                vm.clearing = true;
        
                axios.get(url).then((response) => 
                            {
                               //eslint-disable-next-line no-console
                               //console.log(response.data.objects);

                               if(response.data.genralErrorCode === 8000){

                                   vm.alert = false;

                                   vm.tender = response.data.objects;
                               }
                               else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    vm.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();
                               }

                                

                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                vm.setAlert("There is internal server error","error");

                                document.getElementById('app').scrollIntoView();

                            });

                axios.get(clearing).then((response) => 
                            {
                                //vm.setProgress(response.data.objects);

                                if(response.data.genralErrorCode === 8000){

                                    vm.alert = false;

                                    vm.setClearingProgress(response.data.objects);
                                }
                                else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    vm.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();
                                }
                                
                                //vm.setClearingInProgress(response.data.objects);

                                 //eslint-disable-next-line no-console
                                 //console.log(response.data.objects);
                            }).catch(()=>{

                                // response = null;
                                //commit('setOnProgressTenders',response)
                                vm.setAlert("There is internal server error","error");

                                document.getElementById('app').scrollIntoView();
                            });


                 axios.get(`http://207.180.215.239:8002/api/oxopayment/oxopayment_by_orderID/${vm.$route.params.id}`)
                        .then((response) => 
                            {

                                if(response.data.genralErrorCode === 8000)
                                {

                                   let verified;
                                        
                                    for(let i=0; i< response.data.objects.length; i++)
                                    {
                                        if(response.data.objects[i].verify === true)
                                        {
                                            verified  = true;
                                        }
                                        else if(response.data.objects[i].verify === false){

                                            verified = false;

                                            return;
                                        }
                                    }

                                    vm.is_verified = verified;           
                                }
                                else if(response.data.genralErrorCode === 8001){

                                    vm.is_verified = true;
                                }

                                console.log("is_verified status... "+vm.is_verified);

                            }).catch(()=>{

                                 console.log("There is an error");
                            });

                            
                 axios.get(`http://207.180.215.239:8002/api/customerpayment/customerpayment_by_orderID/${vm.$route.params.id}`)
                        .then((response) => 
                            {

                                if(response.data.genralErrorCode === 8000){
                                  
                                    if(response.data.objects.is_full_amount_paid == 1)
                                    {
                                        vm.full_paid = true;

                                        vm.payment_value = 100;
                                    }
                                        
                                    else
                                    {
                                            
                                        vm.payment_value = response.data.objects.percentage_deposited;
                                    }         
                                }
                            }).catch(()=>{

                                 console.log("There is an error");
                            });
            }

            
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
        opacity: 0.3;
        
    }

     .completed {
        opacity: 0.6;
    }

    .tooltip{

    width:auto;
    max-width: 150px;
    background-color: #4169E1;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
 }

 .progress{
  margin: 20px 20px;
}
ul{
    text-align: center;
    
}

ul li{
    display: inline-block;
}

.steps{
    width: 150px;
}
.divider{
    margin-bottom: 70px;
}

</style>