<template >
    <div class=" pa-auto" >

           
            <v-container  class=" mt-12 mx-auto">

                 <Message/>

                <Alert v-if="alert" v-bind="{message,type}"/> 

                 <!-- loading -->
                <v-card width="300" 
                    v-show="loading" 
                    flat 
                    color="transparent" 
                    class="mb-3 mx-auto"
                >
                    <v-progress-circular
                        active="true"
                        indeterminate
                        absolute
                        :size="50"
                        class="mt-12"
                        color="#4169E1">
                    </v-progress-circular>
                </v-card>
                 
            <v-card flat width="1300" class=" mx-auto mt-12" color="#F5FAFF">
                <v-card flat width="750" class=" mx-auto mt-12" color="#F5FAFF">
            
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
                                         Welcome to ubalori, this is your working desk.
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
                                @click="editprofile()"
                            >
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
                                Your account has been registered, it will take few hours to be verified.
                            </p>
                        </v-flex>
                    </v-flex>
                </v-alert>

                </v-card>
            </v-card>

                <v-card v-show="verification" flat width="1300" class=" mx-auto mb-5" color="#F5FAFF">
                    <v-flex row class="mt-5">
                        <h3 style="color:#394361;" class="title mt-10 px-2">Dashboard</h3>
                        <v-spacer></v-spacer>
                        <v-btn class="primary mt-5" router to="/client/createtender">Add New</v-btn>
                    </v-flex>
                    
                </v-card>
          
                <v-card v-show="verification" flat width="1300" class=" mx-auto mb-5" color="#F5FAFF">
                    <v-tabs
                        right
                        background-color="transparent"
                        color="#394361"
                        class="mt-5"
                        v-model="tab"
                    >

                        
                        <v-tab v-for="tab in tabs" :key="tab.title" @change="fetch(tab.title)">
                            {{ tab.title}}
                        </v-tab>

                    </v-tabs> 

                    <v-tabs-items v-model="tab">
                        <v-tab-item
                            v-for="tab in tabs"
                            :key="tab.title"
                        >
                            
                            <v-divider class="mx-auto " ></v-divider>

                            <v-container fluid class="" style="background-color:#F5FAFF;"> 

                                <v-row fluid>

                                    
                                    <template v-if='tab.title === "All"'>

                                        <v-row v-if="checkIfNoTenders">
                                            <v-col cols=12>
                                                <v-card>
                                                    <v-card-title class="headline">No tenders. Click add new to create</v-card-title>
                                                </v-card>
                                            </v-col>
                                        </v-row>

<<<<<<< HEAD
                                        <v-flex xs12 sm4 md4 lg4 xl4 class="py-3 px-2" v-for="tender in AllClearingTenders" :key="tender.tender_id">
                                            <v-card column width="350"  elevation="3" class="px-4 py-3">
=======
                                        <v-flex xs12 sm6 md6 lg4 xl4 class="py-3 px-2" v-for="tender in AllClearingTenders" :key="tender.tender_id">
                                            <v-card column width="350"  elevation="3" class="px-1 py-1">
>>>>>>> cbc7e652b335816661ef900697cf175950fe80c2
                                                <v-card-text>


                                                    <h4  class="">{{ tender.cargo_details}}</h4>

                                                    <v-row  row class="">

                                                        <v-col cols=3>
                                                            <p>Status: </p>
                                                        </v-col>

                                                        <v-col cols=9>

                                                           
                                                            <v-chip 
                                                                v-if="tender.tender_status === 'rejected' || tender.tender_status === 'accepted'"
                                                                :small="true"
                                                                class="light-green white--text caption font-weight-bold mx-2" 
                                                            >
                                                                awarded

                                                            </v-chip>

                    
                                                            <v-tooltip right content-class="tooltip">

                                                                <template v-slot:activator="{ on }">
                                                                    <v-chip 
                                                                        :small="true"
                                                                        v-if="tender.tender_status !== 'rejected'  || tender.tender_status !=='accepted'" 
                                                                        v-on="on"
                                                                        class="light-green white--text caption font-weight-bold mx-3" 
                                                                        v-bind:class="{'red':tender.tender_status == 'rejected','teal darken-4':tender.tender_status === 'accepted'}"
                                                                    >
                                                                        {{ tender.tender_status}}

                                                                    </v-chip>
                                                                </template>
                                                                <span v-if="tender.tender_status === 'open'">Tender has not been awarded to any agent and it is open for agents to put offer on</span>
                                                                <span v-if="tender.tender_status === 'awarded'">Tender has already been awarded to an agent</span>
                                                                <span v-if="tender.tender_status === 'OnProgress'">The agent has started to work on this tender</span>
                                                                <span v-if="tender.tender_status === 'rejected'">Tender's award has been rejected. please click reset tender to republish</span>
                                                            </v-tooltip>
                                                        </v-col>

                                                        <v-spacer></v-spacer>
                                                    </v-row>
                                                
                                                    <v-row>
                                                        <v-col>
                                                            <p class=" title ">{{ Number(tender.customer_offer_amount).toLocaleString()}} {{ tender.currency}} </p>
                                                        </v-col>
                                                    </v-row>

                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-row class="px-3">
                                                        
                                                        <v-btn
                                                            small 
                                                            color="#4169E1" 
                                                            class="white--text ml-1"
                                                            elevation="flat"
                                                            v-show="tender.tender_status === 'rejected'"
                                                            :to="'/client/edittender/' + tender.id+'/'+tender.tender_type"  
                                                        >
                                                            Reset tender
                                                        </v-btn>

                                                        <v-spacer></v-spacer>
                                                        <!--<v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tender/'+tender.id">View Details</v-btn>-->
                                                        <v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tender/' + tender.id+'/'+tender.tender_type">View details</v-btn>
                                                    </v-row>
                                                </v-card-actions>

                                                
                                            </v-card>
                                        </v-flex> 

<<<<<<< HEAD
                                        <v-flex xs12 sm4 md4 lg4 xl4 class="py-3 px-2" v-for="tender in AllTransportingTenders" :key="tender.tender_id">
                                            <v-card column width="350"  elevation="3" class="px-4 py-3">
=======
                                        <v-flex xs12 sm6 md6 lg4 xl4 class="py-3 px-2" v-for="tender in AllTransportingTenders" :key="tender.tender_id">
                                            <v-card column width="350"  elevation="3" class="px-1 py-1">
>>>>>>> cbc7e652b335816661ef900697cf175950fe80c2

                                                <v-card-text>

                                                    <h4  class="">{{ tender.cargo_details}}</h4>

                                                    <v-row  row class="pt-1">
                                                        <v-col cols=3>
                                                            <p>Status: </p>
                                                        </v-col>

                                                        <v-col cols=9>

                                                            <v-chip 
                                                                v-if="tender.tender_status === 'rejected' || tender.tender_status === 'accepted'"
                                                                 :small="true"
                                                                class="light-green white--text caption font-weight-bold mx-2" 
                                                            >
                                                                awarded

                                                            </v-chip>

                                                            <v-tooltip right content-class="tooltip">
                                                                <template v-slot:activator="{ on }">
                                                                    <v-chip 
                                                                        :small="true" 
                                                                        v-show="tender.tender_status !== 'rejected'  || tender.tender_status !=='accepted'"
                                                                        v-on="on"
                                                                        class="light-green white--text caption font-weight-bold mx-3" 
                                                                        v-bind:class="{'red':tender.tender_status == 'rejected','teal darken-4':tender.tender_status === 'accepted'}"
                                                                    >
                                                                        {{ tender.tender_status}}

                                                                    </v-chip>
                                                                </template>
                                                                <span v-if="tender.tender_status === 'open'">Tender has not been awarded to any agent and it is open for agents to put offer on</span>
                                                                <span v-if="tender.tender_status === 'awarded'">Tender has already been awarded to an agent</span>
                                                                <span v-if="tender.tender_status === 'OnProgress'">The agent has started to work on this tender</span>
                                                            </v-tooltip>

                                                        </v-col>
                                                        
                                                        <v-spacer></v-spacer>
                                                    </v-row>
                    
                                                    <v-row class="px-3" v-show="tender.tender_type == 'Transporting'">
                                                        <p class="body-2  pt-1 ">{{  tender.origin }}</p>
                                
                                                        <v-icon small color="#4169E1" class="px-2 pb-3">
                                                            arrow_forward
                                                        </v-icon>
                                                        <p  class="body-2  pt-1 ">{{ tender.destination }}</p>
                                                    </v-row>

                                                    <v-row>

                                                       <v-col>
                                                           <p  class="title">{{ Number(tender.customer_offer_amount).toLocaleString()}} {{ tender.currency}} </p>
                                                       </v-col>

                                                    </v-row>

                                                    <v-row>

                                                        <v-btn
                                                            small 
                                                            color="#4169E1" 
                                                            class="white--text ml-1"
                                                            elevation="flat"
                                                            v-show="tender.tender_status === 'rejected'"
                                                            :to="'/client/edittender/' + tender.id+'/'+tender.tender_type"  
                                                        >
                                                            Reset tender
                                                        </v-btn>

                                                        <v-spacer></v-spacer>
                                                        <v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tender/' + tender.id+'/'+tender.tender_type">View details</v-btn>
                                                    </v-row>

                                                </v-card-text>
                                            </v-card>
                                        </v-flex>  

                                    </template>

                                     <template v-if='tab.title === "Biding"'>

                                        <v-flex xs12 sm6 md6 lg4 xl4 class="py-3 px-2" v-for="tender in ClearingBidedTenders" :key="tender.tender_id">
                                            <v-card column width="350"  elevation="3" class="px-1 py-1">

                                                <v-card-text>

                                                    <v-row  row class="px-3 pt-1">
                                                        <h4  class="">{{ tender.cargo_details}}</h4>
                                                    
                                                        <v-tooltip right content-class="tooltip">
                                                            <template v-slot:activator="{ on }">
                                                                <v-chip 
                                                                    :small="true" 
                                                                    v-on="on"
                                                                    class="orange white--text caption font-weight-bold mx-3" 
                                                                >
                                                                {{ tender.bids_count }} bids

                                                                </v-chip>
                                                            </template>
                                                            <span>Number of offers from different agents on this tender</span>
                                                        </v-tooltip>
                                                        <v-spacer></v-spacer>

                                                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                                                    </v-row>

                                                    <v-row class="mt-4">

                                                        <v-col cols=3>

                                                            <p class="body-2  pt-1 ">status: </p>
                                                        </v-col>
                                                        
                                                        <v-col cols=9>

                                                            <v-chip 
                                                            v-if="tender.tender_status === 'rejected' || tender.tender_status === 'accepted'"
                                                            :small="true"
                                                            class="light-green white--text caption font-weight-bold mx-2" 
                                                        >
                                                            awarded

                                                        </v-chip>

                                                       

                                                        <v-tooltip right content-class="tooltip">
                                                            <template v-slot:activator="{ on }">
                                                                <v-chip 
                                                                    :small="true" 
                                                                    v-show="tender.tender_status !== 'rejected'  || tender.tender_status !=='accepted'"
                                                                    v-on="on"
                                                                    class="green white--text caption font-weight-bold mx-3" 
                                                                    v-bind:class="{'red':tender.tender_status == 'rejected','teal darken-4':tender.tender_status === 'accepted'}"
                                                                >
                                                                    {{ tender.tender_status}}

                                                                </v-chip>
                                                            </template>
                                                            <span v-if="tender.tender_status === 'open'">Tender has not been awarded to any agent and it is open for agents to put offer on</span>
                                                            <span v-if="tender.tender_status === 'awarded'">Tender has already been awarded to an agent</span>
                                                            <span v-if="tender.tender_status === 'OnProgress'">The agent has started to work on this tender</span>
                                                        </v-tooltip>

                                                        </v-col>
                                                        

                                                    </v-row>
                    
    
                                                    <v-row>

                                                        <v-col>
                                                            <p class=" title ">{{Number(tender.customer_offer_amount).toLocaleString()}} {{ tender.currency}} </p>
                                                        </v-col>

                                                    </v-row>

                                                </v-card-text>
                                                

                                                <v-row row class="px-3">
                                                    
                                                        <v-spacer></v-spacer>
                                                        <v-btn small elevation="flat" color="#4169E1" class="white--text"  @click="set(tender)" :to="'/client/AboutTenderBids/'+ tender.id+'/'+tender.tender_type">View Bids</v-btn>
                                                </v-row>
                                            </v-card>
                                        </v-flex>  

                                        <v-flex xs12 sm6 md6 lg4 xl4 class="py-3 px-2" v-for="tender in TransportingBidedTenders" :key="tender.tender_id">
                                            <v-card column width="350"  elevation="3" class="px-1 py-1">

                                                <v-card-text>

                                                    <v-row  row class="px-3 pt-1">
                                                        <h4  class="">{{ tender.cargo_details}}</h4>
                                                    
                                                        <v-tooltip right content-class="tooltip">
                                                            <template v-slot:activator="{ on }">
                                                                <v-chip 
                                                                    :small="true"  
                                                                    v-on="on"
                                                                    class="orange white--text caption font-weight-bold mx-3" 
                                                                >
                                                                {{ tender.bids_count }} bids

                                                                </v-chip>
                                                            </template>
                                                            <span>Number of offers from different agents on this tender</span>
                                                        </v-tooltip>
                                                        <v-spacer></v-spacer>

                                                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                                                    </v-row>

                                                    <v-row class="mt-4">

                                                        <v-col cols=3>
                                                             <p class="body-2  pt-1 ">status: </p>
                                                        </v-col>

                                                        <v-col cols=9>
                                                            <v-chip 
                                                            v-if="tender.tender_status === 'rejected' || tender.tender_status === 'accepted'"
                                                            :small="true" 
                                                            class="light-green white--text caption font-weight-bold mx-2" 
                                                        >
                                                            awarded

                                                        </v-chip>

                                                       

                                                        <v-tooltip right content-class="tooltip">
                                                            <template v-slot:activator="{ on }">
                                                                <v-chip 
                                                                    :small="true"  
                                                                    v-show="tender.tender_status !== 'rejected'  || tender.tender_status !=='accepted'"
                                                                    v-on="on"
                                                                    class="green white--text caption font-weight-bold mx-3" 
                                                                    v-bind:class="{'red':tender.tender_status == 'rejected','teal darken-4':tender.tender_status === 'accepted'}"
                                                                >
                                                                    {{ tender.tender_status}}

                                                                </v-chip>
                                                            </template>
                                                            <span v-if="tender.tender_status === 'open'">Tender has not been awarded to any agent and it is open for agents to put offer on</span>
                                                            <span v-if="tender.tender_status === 'awarded'">Tender has already been awarded to an agent</span>
                                                            <span v-if="tender.tender_status === 'OnProgress'">The agent has started to work on this tender</span>
                                                        </v-tooltip>
                                                        </v-col>

                                                        

                                                    </v-row>
                    
                                                <v-row class="px-3">
                                                    <p class="body-2  pt-1 ">{{ tender.origin }}</p>
                            
                                                    <v-icon small color="#4169E1" class="px-2 pb-3">
                                                        arrow_forward
                                                    </v-icon>
                                                    <p  class="body-2  font-weight-bold pt-1 ">{{ tender.destination }}</p>
                                                </v-row>

                                                <v-row>

                                                    <v-col>
                                                        <p  class=" body-2 font-weight-bold">{{ Number(tender.customer_offer_amount).toLocaleString()}} {{ tender.currency}} </p>

                                                    </v-col>

                                                </v-row>

                                                <v-row>

                                                    <v-spacer></v-spacer>
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text"  @click="set(tender)" :to="'/client/AboutTenderBids/'+ tender.id+'/'+tender.tender_type">View Bids</v-btn>
                                                    
                                                </v-row>

                                                </v-card-text>
                                            </v-card>
                                        </v-flex>

                                    </template>

                                    <template v-if='tab.title === "Progress"'>

<<<<<<< HEAD
                                        <v-flex xs12 sm4 md4 lg4 xl4 class="py-3 px-2" v-for="tender in ClearingTendersOnProgress" :key="tender.tender_id">
                                            <v-card column width="350"  max-height="250" elevation="3" class="px-4 py-3">
=======
                                        <v-flex xs12 sm6 md6 lg4 xl4 class="py-3 px-2" v-for="tender in ClearingTendersOnProgress" :key="tender.tender_id">
                                            <v-card column width="350" elevation="3" class="px-1 py-1">
>>>>>>> cbc7e652b335816661ef900697cf175950fe80c2
                                                <v-card-text>

                                                    <h4 class="">{{ tender.cargo_details}}</h4>


                                                    <v-row  row class="">
                                                        
                                                        <v-col cols=4>
                                                            <p>Status: </p>
                                                        </v-col>
                                                        <v-col cols=8>

                                                            <v-tooltip right content-class="tooltip">
                                                            <template v-slot:activator="{ on }">

                                                                <v-chip 
                                                                    :small="true"  
                                                                    v-on="on"
                                                                    class="green white--text caption font-weight-bold mx-3"  
                                                                >
                                                                    {{ tender.tender_progress}}

                                                                </v-chip>

                                                            </template>
                                                            <span v-if="tender.tender_progress === 'onProgress'">The agent has started to work on this tender</span>
                                                        </v-tooltip>

                                                        </v-col>
                                                        
                                                        <!-- <v-spacer></v-spacer>

                                                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon> -->
                                                    </v-row>
                    
                                                    <v-row>

                                                        <v-col>

                                                            <p  class="title ">{{ Number(tender.customer_offer_amount).toLocaleString()}} {{ tender.currency}} </p>

                                                        </v-col>
                                                    </v-row>

                                                    <v-row row class="px-3">

                                                        <v-btn 
                                                            small elevation="flat" 
                                                            color="#4169E1" 
                                                            class="white--text" 
                                                            :to="'/client/payment/'+tender.id+'/'+tender.tender_type"
                                                        >
                                                            PAY
                                                        </v-btn>
                                                        
                                                        <v-spacer></v-spacer>
                                                        <!--<v-btn small elevation="flat" color="#4169E1" class="white--text" router to="/client/aboutbid">View Details</v-btn>-->
                                                        <v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tenderprogress/'+tender.id+'/'+tender.tender_type">Show progress</v-btn>
                                                    </v-row>

                                                </v-card-text>
                                            </v-card>
                                        </v-flex> 

                                        <v-flex xs12 sm4 md4 lg4 xl4 class="py-3 px-2" v-for="tender in TransportingOnProgressTenders" :key="tender.tender_id">
                                            <v-card column width="350" elevation="3" class="px-1 py-1">

                                                <v-card-text>

                                                   
                                                    <h4 class="">{{ tender.cargo_details}}</h4>

                                                    <v-row  row class="">
                                                        
                                                        <v-col cols=4>
                                                            <p>Status: </p>
                                                        </v-col>
                                                        <v-col cols=8>

                                                            <v-tooltip right content-class="tooltip">
                                                            <template v-slot:activator="{ on }">

                                                                <v-chip 
                                                                    :small="true"  
                                                                    v-on="on"
                                                                    class="green white--text caption font-weight-bold mx-3"  
                                                                >
                                                                    {{ tender.tender_progress}}

                                                                </v-chip>

                                                            </template>
                                                            <span v-if="tender.tender_progress === 'onProgress'">The agent has started to work on this tender</span>
                                                        </v-tooltip>

                                                        </v-col>
                                                        
                                                        <!-- <v-spacer></v-spacer>

                                                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon> -->
                                                    </v-row>
                    

                                                    <v-row class="px-3">
                                                        <p class="body-2  pt-1 ">{{ tender.origin }}</p>
                                
                                                        <v-icon small color="#4169E1" class="px-2 pb-3">
                                                            arrow_forward
                                                        </v-icon>
                                                        <p  class="body-2  pt-1 ">{{ tender.destination }}</p>
                                                    </v-row>

                                                    <v-row>
                                                        <v-col>
                                                            
                                                            <p class="body-2 font-weight-bold">{{ Number(tender.customer_offer_amount).toLocaleString()}} {{ tender.currency}} </p>

                                                        </v-col>
                                                    </v-row>
                                                    <v-row>

                                                        <v-btn 
                                                            small elevation="flat" 
                                                            color="#4169E1" 
                                                            class="white--text" 
                                                            :to="'/client/payment/'+tender.id+'/'+tender.tender_type"
                                                            :disabled="tender.payment_status === 'full'"
                                                        >
                                                            PAY
                                                        </v-btn>

                                                         <v-spacer></v-spacer>
                                                         
                                                        <v-btn small elevation="flat" color="#4169E1" class="white--text" :to="'/client/tenderprogress/'+tender.id+'/'+tender.tender_type">Show progress</v-btn>
                                                    </v-row>

                                                </v-card-text>
                                            </v-card>
                                        </v-flex>  

                                    </template>

                                </v-row>
                            </v-container> 
                        </v-tab-item>
                   </v-tabs-items>

                </v-card>
        </v-container>
    </div>
</template>

<script>

import { mapGetters, mapActions} from 'vuex'
import Message from '@/components/Message.vue'
import Alert from '@/components/Alert.vue'
import axios from 'axios'

export default {
  
  name: 'Client',

  components: {Message,Alert},

  data () {
      return{

          profile:false,
          verify:false,
          loading:false,
          verification:true,
          tabs: [
              {title:'All'},
              {title:'Biding'},
              {title:'Progress'}
          ],

          tab: null,

          id: 10,
        
          customer:[],

          tenderResetDialog: false,

           alert: false,
            message:'',
            type:'',

      }

  },

  computed:{
      ...mapGetters(['AllClearingTenders','Tenders','ClearingBidedTenders','OnProgressTenders',
                        'ClearingTendersOnProgress','getAlert','AllTransportingTenders',
                        'TransportingBidedTenders','TransportingOnProgressTenders','BidedTenders', 'LOAD_AGENT'
                    ]),
        
        checkIfNoTenders(){

            if(this.AllClearingTenders.length == 0 && this.AllTransportingTenders.length == 0)
               return true;
            else
                return false;
        }


  },

  methods: {
      ...mapActions(['fetchAllClearingTenders','fetchCurrencies','fetchClearingBidedTenders',
                        'fetchClearingTendersOnProgress','setTender','setAlert',
                        'fetchAllTransportingTenders','setTenders','fetchTransportingBidedTenders',
                        'fetchTransportingOnProgressTenders','setOnProgressTenders','setBidedTenders', 'GET_CUSTOMER']),

        setAlert(message,type){

            this.alert = true;
            this.message = message;
            this.type = type;
        },

      set(tender){
          //eslint-disable-next-line no-console
          //console.log(tender);
          this.setTender(tender);
      },  

      resetTender(tender){

          this.tenderResetDialog = false;

          console.log("TENDER IS "+ tender);

        //   if(tender.tender_type === 'Clearing')
        //   {
        //       let url = "http://207.180.215.239:8000/api/v1/tenders/reset-tender/"+tender.id;

        //       axios.post(url)
        //         .then((response)=>{
            
        //             if(response.data.genralErrorCode === 8000)
        //             {

                        
        //                 this.alert = false;

        //                 this.setAlert(response.data.message);

        //                 //this.$router.push('/client');

        //                 //this.$router.go('/client');

        //             } else if(response.data.genralErrorCode === 8004){

        //                 this.alert = false;

        //                 this.setAlert(response.data.message,"error");
                        
        //             }

        //         }).catch(()=>{

        //             setTimeout(()=>{

        //                 this.setAlert("There is internal server error","error");

        //             },1000)
        //         });
        //   }
        //   else if(tender.tender_type === 'Transporting')
        //   {
        //       console.log("reseting transporting");
        //   }

          
      },

      editprofile(){
          this.verify = false
          this.$router.push('/Client/editprofile/'+localStorage.client)
      },  

      fetch(tab){

          switch(tab){

              case 'All':

                  this.fetchAllClearingTenders(this.customer.id);
                  this.fetchAllTransportingTenders(this.customer.id);

                  //this.setTenders();
                   
                  break;

              case 'Biding':

                  this.fetchClearingBidedTenders(this.customer.id);
                  this.fetchTransportingBidedTenders(this.customer.id);

                   //eslint-disable-next-line no-console
                                //console.log(this.TransportingBidedTenders);

                  //this.setBidedTenders()
                  
                  break;

              case 'Progress':

                  this.fetchClearingTendersOnProgress(this.customer.id);
                  this.fetchTransportingOnProgressTenders(this.customer.id);
                
                  break;
              default:
                  break;
          }
      }
  },

  created: function(){
       /*if(this.$route.query.alert){
          this.alert = this.$route.query.alert;
      }*/
      
      /*this.fetchAllClearingTenders(this.id),
      this.fetchClearingBidedTenders(this.id),
      this.fetchClearingTendersOnProgress(this.id)
     
      this.fetchAllTransportingTenders(this.id);
      this.fetchTransportingBidedTenders(this.id);
      this.fetchTransportingOnProgressTenders(this.id);

         //eslint-disable-next-line no-console
                        //console.log(this.ClearingBidedTenders);

      this.fetchCurrencies();*/
  },
    
    watch:{
      '$route' () {
        /*if(to !== from ) {

          if(this.$route.query.alert){
                this.alert = this.$route.query.alert;
            }

        }*/
        if(this.alert !== this.$route.query.alert){
            this.alert = this.$route.query.alert;
        } 
      }
    },  

    beforeRouteEnter (to, from, next) { 

        next(vm => { 

            // ---------------------------------------------------------------
            vm.loading = true
            // eslint-disable-next-line no-console
            console.log('44444444');
            let tab = localStorage.client
            vm.GET_CUSTOMER(tab).then(()=>{
            
            console.log(vm.LOAD_AGENT.objects);
            

                if (!vm.LOAD_AGENT.objects.customer_id == '') {
                    if (vm.LOAD_AGENT.objects.is_verified == 0) {
                        setTimeout(()=>{
                            vm.loading = false
                            vm.verify = true;
                            vm.verification = false
                        },1000)
                    }else{
                    setTimeout(()=>{
                         vm.loading = false
                        vm.verify = false;
                        vm.verification = true
                     },1000)
                    }
                } else{
                    setTimeout(()=>{
                        vm.loading = false
                        vm.profile = true;
                        vm.verification = false
                    },1000) 
                }
        })
            //----------------------------------------------------------------

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created. 
        
        let url1 = "http://207.180.215.239:8181/api/v1/customers/fetch?email="+localStorage.client;

            axios.get(url1).then((response) => 
                            {
                               
                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects[i].industry_name);

                                vm.customer = response.data.objects;

                                vm.fetchAllClearingTenders(response.data.objects.id),
                                vm.fetchClearingBidedTenders(response.data.objects.id),
                                vm.fetchClearingTendersOnProgress(response.data.objects.id)
     
                                vm.fetchAllTransportingTenders(response.data.objects.id);
                                vm.fetchTransportingBidedTenders(response.data.objects.id);
                                vm.fetchTransportingOnProgressTenders(response.data.objects.id);

                            }).catch(()=>{

                                setTimeout(()=>{

                                    vm.setAlert("There is an internal error","error");

                                },1000)
                            });

        vm.alert = vm.$store.getters.getAlert;

         //eslint-disable-next-line no-console
         //console.log(this.ClearingBidedTenders);

        vm.fetchCurrencies();

        next();
        }) 
    },
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}

.tooltip{

    width:30%;
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

</style>