<template>
    <v-container id="scrolling-techniques" class=" mt-12 px-5">
            <PDFDocument v-bind="{url,pdfOverlay}" @clicked="closePdfViewer" v-if="pdf"/>
            <v-overlay :value="overlay">
                <div class="large-preview">
                        
                        <v-row justify= "center">
                            <v-col cols=12>
                                <img  id="large_thumbnail" width="500px" :src="large_preview_url" height="500px">
                            </v-col>

                            <v-col class="mt-0" offset="4">
                                <v-btn
                                    large
                                    color="primary white--text"
                                    @click="overlay = false"
                                >
                                    <v-icon large class="font-weight-bold">mdi-close</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        
                </div>
            </v-overlay>

            <v-card flat width="1200" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                <v-flex>
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">{{LOAD_TENDER.cargo_details}}</h1>
                <v-chip color="onProgress" small class="white--text ml-7 mt-1">onProgress</v-chip>
                </v-row>
                <p class="grey--text">{{LOAD_TENDER.description}}</p>
                </v-flex>
                <v-spacer></v-spacer>
                <!-- <h2 style="colo:#4169E1;">--- {{LOAD_TENDER.currency}}</h2> -->
                </v-flex>
            </v-card>

            <v-card flat width="1200"  class="mx-auto mb-10 px-5" color="#F5FAFF">
                <v-flex row >
                <v-flex sm12 md8 lg8 xlg8 >
                    <v-card width="" class="pt-6 pb-3 pl-8">
                        <v-flex column>
                        <v-flex row >

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> ORIGIN </p>
                            <p class="body-1">{{LOAD_TENDER.origin}}</p>
                            </v-flex>

                            <v-flex column class="pl-3">
                            <p class="primary--text body-1 mb-2"> DESTINATION </p>
                            <p class="body-1">{{LOAD_TENDER.destination}}</p>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO SIZE </p>
                            <p class="body-1">{{LOAD_TENDER.cargo_size}}</p>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> AMOUNT </p>
                            <p class="body-1">{{customer_offer_amount}} {{LOAD_TENDER.currency}}</p>
                            </v-flex>

                        </v-flex>

                        <v-flex row >

                        <v-flex column class="mt-5 pr-4">
                            <p class="primary--text body-1  mb-2"> BILL OF LADING </p>
                            <p class="body-1">{{LOAD_TENDER.bill_of_lading_number}}</p>
                        </v-flex>

                        <v-flex column class="mt-5 pr-4">
                            <p class="primary--text body-1 mb-0"> TERMS AND CONDITIONS </p>
                            <p class="body-1 ">{{LOAD_TENDER.customer_terms_and_conditions}}</p>
                        </v-flex>

                        <v-flex column class="mt-5 pl-3">
                            <p class="primary--text body-1 mb-2"> DELIVERY DATE </p>
                            <p class="body-1">{{LOAD_TENDER.customer_delivery_timeline}}</p>
                        </v-flex>

                        </v-flex>

                        

                        <v-flex row class="mt-7 mb-4" >

                            <v-flex column class="pl-3" v-if="documents == true">
                            <p class="primary--text body-1 mb-2"> BILL OF LADING </p>
                            <v-card color="lblue" flat width="150" height="130" outlined>
                            <div 
                                v-show="(bill_of_lading_extension === 'jpg') || (bill_of_lading_extension === 'jpeg') || (bill_of_lading_extension === 'png')" 
                                @click="largePreview(bill_of_lading_url)"
                            >
                                <!-- <img :src="bill_of_lading_url" width=200 height=150/> -->
                                <v-img 
                                        :src="bill_of_lading_url"  
                                        class="mb-0 pb-0 oxoImg" 
                                        height="147" 
                                        width="200" >
                                    </v-img>
                            </div>
                
                            <div v-show="bill_of_lading_extension === 'pdf'">

                                <v-btn 
                                    :block="true"
                                    icon class="mt-7" 
                                    @click="previewPdf(bill_of_lading_url)"
                                    >
                                    PREVIEW<v-icon x-large>mdi-file</v-icon>
                                </v-btn>

                            </div>
                        </v-card>
                            </v-flex>

                            <v-flex column  v-if="documents == true">
                            <p class="primary--text body-1 mb-2"> LETTER </p>
                            <v-card color="lblue" flat width="150" height="130" outlined>
                            <div 
                                    v-show="(letter_extension === 'jpg') || (letter_extension === 'jpeg') || (letter_extension === 'png')" 
                                    @click="largePreview(letter_url)"
                                >
                                    <!-- <img :src="letter_url" width=200 height=150/> -->
                                    <v-img 
                                        :src="letter_url"  
                                        class="mb-0 pb-0 oxoImg" 
                                        height="147" 
                                        width="200" >
                                    </v-img>
                                </div>
                    
                                <div v-show="letter_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(letter_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class="primary--text body-1 mb-2"> CARGO PHOTO </p>
                            <v-card color="lblue" flat width="200" height="150" outlined>
                            <div 
                                    v-show="(photo_extension === 'jpg') || (photo_extension === 'jpeg') || (photo_extension === 'png')" 
                                    @click="largePreview(photo_url)"
                            >
                                    <!-- <img :src="photo_url" width=200 height=150/> -->
                                    <v-img 
                                        :src="photo_url"  
                                        class="mb-0 pb-0 oxoImg" 
                                        height="147" 
                                        width="200" >
                                    </v-img>
                                </div>
                        
                                <div v-show="photo_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(photo_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                        </v-card>
                            </v-flex>
                        </v-flex>
                        </v-flex>

                <!-- display other files -->
                <v-flex v-if="documents == true">
                <v-row class="mt-5" v-if="otherFiles.length > 0">

                <v-col cols=12><p class="primary--text body-1 mb-2"> OTHER DOCUMENTS</p></v-col>

                <v-col cols=12 md=4 v-for="(file,key) in otherFiles" :key="key">

                    <v-card flat width="200" height="150" outlined>
                        <v-row>
                            <v-col >
                                <div 
                                    v-show="(getFileExtension(file['url']) === 'jpg') || (getFileExtension(file['url']) === 'jpeg') || (getFileExtension(file['url']) === 'png')" 
                                    @click="largePreview(file['url'])"
                                >
                        
                                    <v-img 
                                        :src="file['url']"  
                                        class="mb-0 pb-0 oxoImg" 
                                        height="147" 
                                        width="200" >
                                    </v-img>
                                </div>
                            
                                <div v-show="getFileExtension(file['url']) === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(file['url'])"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            </v-flex>
           </v-card>
          </v-flex>

                <v-flex sm12 md3 lg3 xlg3 class="px-3 pt-2 ml-2" v-if="documents == true">
                    <v-card color="#4169E1" width="" class="py-4 px-5">
                        <v-flex row >
                            <v-flex column class="px-3">
                            <p class="white--text body-1 font-weight-bold"> ABC FURNITURE 3</p>
                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text" >mail_outline</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Lorebagiazadengudsfm@gamil.com</p>
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


            <v-card 
            flat width="1300" 
            class="mx-auto mb-5" 
            color="transparent">

            <v-tabs 
                background-color="transparent"
                color="#4169E1">
                
                <v-tab class="text-capitalize body-1">Tender progress</v-tab>
                <!-- <v-tab class="text-capitalize body-1">Negotiation history</v-tab>
                <v-tab class="text-capitalize body-1" >Despute</v-tab> -->

                
                
                <v-tab-item style="background-color:#F5FAFF;">
                    <v-divider></v-divider>

                 <!-------- Alert before main progress -->
                <v-card row width="500" class=" mx-auto mt-5 mb-5" color="#F5FAFF">
                <v-alert
                :value="wait"
                elevation="7"
                prominent
                type="warning"
                border="left"
                row
                >
                <v-flex row class="pl-4">
                <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                <!-- <v-icon large color="orange" class="">notification_important</v-icon>     -->
                </v-flex>
                <v-flex xms11 sm11 md11 lg11>
                <p class="white--text body-1 mb-3">
                Waiting on payment for tender to start 
                <v-chip v-show="wait == true"  class="green mt-1 white--text">Waiting for payment Verification</v-chip>
                </p>
                </v-flex>
                </v-flex>
                </v-alert>
                </v-card>
        <!-------------  --> 

        <v-card 
        v-show="show"
        flat 
        width="1300" 
        class="mx-auto mb-5" 
        color="transparent">             

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
                confirme Payment
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
                <center>
                <v-flex row class="pl-1 py-2" >

                <v-flex xsm3 sm3 md3 lg3 class="pl-6 pt-1" >
                <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="5"
                :value="value"
                color="primary">
                <p class="mt-4 ml-1 caption text--text">
                {{ value }}%
                </p>
                </v-progress-circular>
                </v-flex>

                <v-flex xsm8 sm8 md8 lg8 class="pl-10 pt-4" >

                <v-flex row class="px-1" >
                <P xsm6 sm6 md6 lg6 
                class="text--text body-1 font-weight-medium mb-0">Instalment status</P>
                <v-chip color="primary" small xsm6 sm6 md6 lg6 class="ml-4 ">{{chip1}}</v-chip>
                </v-flex>

                 <v-flex row class="px-1 pt-2" >
                <P xsm6 sm6 md6 lg6 
                class="text--text body-1  mb-0">Amount :</P>
               <p 
               color="primary"  
               xsm6 
               sm6 
               md6 
               lg6 
               class="text--text body-1 ml-2 font-weight-bold mb-0"> 
               {{amount}}  {{LOAD_TENDER.currency}}
               </p>
                </v-flex>

                 <v-flex row class="px-1 pt-2" >
                <P xsm4 sm4 md4 lg4 
                class="text--text body-1  mb-0">Date received :</P>
                <p color="primary"  xsm8 sm8 md8 lg8 
                class="text--text body-1 pl-1 font-weight-bold mb-0"> 
                {{created_at}} 
                </p>

                </v-flex>
               
                </v-flex>

                </v-flex>
                </center>
                </v-card>
                </template>
                </v-hover>

                </v-flex>
                </v-flex>
                </v-card>
<!--  -->

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
                        class="px-3 py-3" 
                        outlined>

                       <v-flex class="progress">
                           <ul class="text-center">
                               <li style="" class="steps">

                                <!-- state card-->
                                <template v-if="stage1 === 'A'">
                                   <v-card  flat disabled >
                                   <v-icon :disabled="true" size="50">archive</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="true"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">cached</v-icon>
                                    </v-btn>
                                   <p class="mb-0">1. Port processing</p>
                                   <p class="mt-1">Date : {{expected_date1}}</p>
                                   </v-card>
                                </template>

                                <!-- state card -->
                                <template v-else-if="stage1 === 'B'">
                                   <v-card flat >
                                   <v-icon color="primary" :disabled="false" size="50">archive</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">cached</v-icon>
                                    </v-btn>
                                   <p class="mb-0">1. Port processing</p>
                                   <p class="mt-1">Date : {{expected_date1}}</p>
                                   </v-card>
                                </template>

                                <!-- state card -->
                                <template v-else-if="stage1 === 'C'">
                                   <v-card flat disabled  >
                                   <v-icon color="primary" :disabled="true" size="50">archive</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">done</v-icon>
                                    </v-btn>
                                   <p class="mb-0">1. Port processed</p>
                                   <p class="mt-1">Date : {{expected_date1}}</p>
                                   </v-card>
                                </template>
                               </li>
                    <!--------   ----------------->

                               <li class="divider" >
                                <v-divider v-if="stage2 === 'A'" color="" width="100" size="20"></v-divider>
                                <v-divider v-else-if="stage2 === 'B'" color="blue" width="100" size="20"></v-divider>
                                <v-divider v-else-if="stage2 === 'C'" color="lightblue" width="100" size="20"></v-divider>
                               </li>

                                <li style="" class="steps">

                            <!-- state card-->
                                <template v-if="stage2 === 'A'">
                                   <v-card  flat disabled >
                                   <v-icon :disabled="true" size="50">local_shipping</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="true"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">cached</v-icon>
                                    </v-btn>
                                   <p class="mb-0">2. TRA</p>
                                   <p class="mt-1">Date : {{expected_date2}}</p>
                                   </v-card>
                                </template>

                                <!-- state card -->
                                <template v-else-if="stage2 === 'B'">
                                   <v-card flat >
                                   <v-icon color="primary" :disabled="false" size="50">local_shipping</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">cached</v-icon>
                                    </v-btn>
                                   <p class="mb-0">2. TRA</p>
                                   <p class="mt-1">Date : {{expected_date2}}</p>
                                   </v-card>
                                </template>

                                <!-- state card -->
                                <template v-else-if="stage2 === 'C'">
                                   <v-card flat disabled  >
                                   <v-icon color="primary" :disabled="true" size="50">local_shipping</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">done</v-icon>
                                    </v-btn>
                                   <p class="mb-0">2. TRA complited</p>
                                   <p class="mt-1">Date : {{expected_date2}}</p>
                                   </v-card>
                                </template>
                               </li>
                    <!--------  ----------------->

                               <li class="divider" >
                                <v-divider v-if="stage3 === 'A'" color="" width="100" size="20"></v-divider>
                                <v-divider v-else-if="stage3 === 'B'" color="blue" width="100" size="20"></v-divider>
                                <v-divider v-else-if="stage3 === 'C'" color="lightblue" width="100" size="20"></v-divider>
                               </li>

                                <li style="" class="steps">
                            <!-- state card-->
                                <template v-if="stage3 === 'A'">
                                   <v-card  flat disabled >
                                   <v-icon :disabled="true" size="50">unarchive</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="true"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">cached</v-icon>
                                    </v-btn>
                                   <p class="mb-0">3. Other processes</p>
                                   <p class="mt-1">Date : {{expected_date3}}</p>
                                   </v-card>
                                </template>
                                <!-- state card -->
                                <template v-else-if="stage3 === 'B'">
                                   <v-card flat >
                                   <v-icon color="primary" :disabled="false" size="50">unarchive</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">cached</v-icon>
                                    </v-btn>
                                   <p class="mb-0">3. Other processes</p>
                                   <p class="mt-1">Date : {{expected_date3}}</p>
                                   </v-card>
                                </template>
                                <!-- state card -->
                                <template v-else-if="stage3 === 'C'">
                                   <v-card flat disabled  >
                                   <v-icon color="primary" :disabled="true" size="50">unarchive</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">done</v-icon>
                                    </v-btn>
                                   <p class="mb-0">3. Other processes</p>
                                   <p class="mt-1">Date : {{expected_date3}}</p>
                                   </v-card>
                                </template>
                               </li>
                    <!--------  ----------------->

                               <li class="divider" >
                                <v-divider v-if="stage4 === 'A'" color="" width="100" size="20"></v-divider>
                                <v-divider v-else-if="stage4 === 'B'" color="blue" width="100" size="20"></v-divider>
                                <v-divider v-else-if="stage4 === 'C'" color="lightblue" width="100" size="20"></v-divider>
                               </li>

                               <li style="" class="steps">
                            <!-- state card-->
                                <template v-if="stage4 === 'A'">
                                   <v-card  flat disabled >
                                   <v-icon :disabled="true" size="50">assignment_turned_in</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="true"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">cached</v-icon>
                                    </v-btn>
                                   <p class="mb-0">4. Completion</p>
                                   <p class="mt-1">Date : {{expected_date4}}</p>
                                   </v-card>
                                </template>
                                <!-- state card -->
                                <template v-else-if="stage4 === 'B'">
                                   <v-card flat >
                                   <v-icon color="primary" :disabled="false" size="50">assignment_turned_in</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">cached</v-icon>
                                    </v-btn>
                                   <p class="mb-0">4. Completion</p>
                                   <p class="mt-1">Date : {{expected_date4}}</p>
                                   </v-card>
                                </template>
                                <!-- state card -->
                                <template v-else-if="stage4 === 'C'">
                                   <v-card flat disabled  >
                                   <v-icon color="primary" :disabled="true" size="50">assignment_turned_in</v-icon><br>
                                   <v-btn class="my-2" color="primary" :disabled="false"  elevation="flat" fab x-small>
                                    <v-icon class="x-large ">done</v-icon>
                                    </v-btn>
                                   <p class="mb-0">4. Cargo cleared</p>
                                   <p class="mt-1">Date : {{expected_date4}}</p>
                                   </v-card>
                                </template>
                               </li>
                    <!--------  ----------------->

                           </ul>
                       </v-flex>
                        </v-card>
                    
                    <v-card 
                        flat                           
                        width="1200" 
                        class="px-3" 
                        outlined>
                                <v-progress-linear
                                :active="loading"
                                indeterminate
                                absolute
                                color="#4169E1">
                                </v-progress-linear>
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
                        <v-card flat height="160"  width="1000" class="px-5 mx-auto ">
                       <v-flex column>
                                <v-flex row class="">
                                    <v-flex column sm4 mb4 class="">
                                        <p class="bondy-2 mb-0">Select stage</p>
                                        <v-select 
                                        dense
                                        v-model="feedstage"
                                        :items="stageitems"
                                        outlined 
                                        color="#4169E1" 
                                        clearable >
                                        </v-select>
                                    </v-flex>

                                    <v-flex row sm4 mb4 justify-center class="pl-5 pr-2">
                                    <v-flex>
                                        <p class="bondy-2 mb-0">Select state</p>
                                        <v-select 
                                        dense
                                        v-model="feedstate"
                                        :items="stateitems"
                                        outlined 
                                        color="#4169E1" 
                                        clearable 
                                        @change="checkstate()">
                                        </v-select>
                                    </v-flex>
                                    </v-flex>

                                    <v-flex row sm4 mb4 justify-center class="pl-6">
                                    <v-flex>
                                        <p class="bondy-2 mb-0">{{datetitle}}</p>
                                        <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="delivery_time"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px">
                                        <template v-slot:activator="{ on }">
                                        <v-text-field
                                            dense
                                            v-model="date"
                                            readonly
                                            v-on="on"
                                            outlined
                                            clearable>
                                        </v-text-field>
                                        </template>
                                        <v-date-picker 
                                        v-model="date"
                                        :min="notless" 
                                        no-title 
                                        scrollable
                                        >
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                    </v-flex>
                                    </v-flex>
                                    </v-flex>
                                    <v-btn
                                    small 
                                    elevation="flat" 
                                    class=" primary "
                                    @click="submiteProgress()" > 
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
                        <p class="primary--text body-2 text-uppercase"> comments </p>
                        <v-card flat height="100" width="1200" class="px-5 py-3" outlined>
                            <p class="" outlined>
                               No comment
                            </p>
                        </v-card>
                        </v-col>  
                                      
                    </v-row>
                </v-card>
            </v-card>

            <!-- <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
                <v-row>
                <v-icon color="grey" class="mb-4 ml-3 ">attachments</v-icon>
                <p class="grey--text title">Attachments</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-row class="pa-3">
                        <v-col class="">
                        <p class="primary--text body-2 text-uppercase"> BILL OF LADING </p>
                        <v-card color="lblue" flat width="140" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon color="primary" x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        </v-card>
                        </v-col>  

                        <v-col class="">
                        <p class="primary--text body-2 text-uppercase"> AUTHORITY LATTER </p>
                        <v-card color="lblue" flat width="140" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon color="primary" x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        </v-card>
                        </v-col>  

                        <v-col class="">
                        <p class="primary--text body-2 text-uppercase"> OTHER </p>
                        <v-card color="lblue" flat width="140" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon color="primary" x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        </v-card>
                        </v-col>  

                        <v-col class="">
                        <p class="primary--text body-2 text-uppercase"> OTHER </p>
                        <v-card color="lblue" flat width="140" height="150" outlined>
                            <v-img class="ma-auto">
                                <v-icon color="primary" x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-img>
                        </v-card>
                        </v-col>  
                                      
                    </v-row>
                </v-card>
            </v-card>  -->
        
        </v-card>
            
                </v-tab-item>
            </v-tabs>

            <v-card 
            v-show="show" 
            flat 
            width="1300" 
            class=" mb-5" 
            color="#F5FAFF">
                <v-flex row class="">
                       <v-spacer></v-spacer>
                       <v-btn disabled large class="primary" rauter >complete tender</v-btn>
                </v-flex>
            </v-card>

            </v-card>

    </v-container>
</template>

<script>
/* eslint-disable no-console */
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import PDFDocument from '@/components/PDFDocument'
export default {

    data(){
        return{

            //tender details field
            customer_offer_amount:'',

            //files ------------
            bill_of_lading:'',
            authorization_letter:'',
            cargo_photo:'',

             //preview 
            photo_extension:'',
            photo_url:'',
            bill_of_lading_extension:'',
            bill_of_lading_url:'',
            letter_extension:'',
            letter_url:'',

            overlay:false,
            large_preview_url:'',

            //----date
            expected_date1:'',
            expected_date2:'',
            expected_date3:'',
            expected_date4:'',

            //---- stage 1 ---
            stage1:'A',
            //---- stage 2 ---
            stage2:'A',
            //--- stage 3 ---
            stage3:'A',
            //--- stage 4 ---
            stage4: 'A',

            
            //----- steper---
            icon:'',
            step:'',
            text:'',

            //------- STAGE COMMENTING------
            //---- Stages and states ---
            stageitems:['1. Port processing', '2. TRA', '3. Other processes', '4. Completion'],
            stateitems:['InProgress', 'completed'],
            feedstage:'',
            feedstate:'',
            progress_id:'',
            menu:'',
            date: new Date().toISOString().substr(0, 10),
            delivery_time:new Date().toISOString().substr(0, 10),
            notless:new Date().toISOString().substr(0, 10),

            //------ PAYMENT PROGRESS ------------
            payment_percentage:'',
            amount:'',
            created_at:'',

            //----------------
            loading:false,
            show:true,
            wait:false, 
            documents:false,
            chip1:'not received',
            comment:'',
            extension:false,
            placeholder: 1,
            value:'',

            state:'',

            datetitle:'Started on', //date field title

            complete_tender:true,
            url:'',
            pdf:false,
            pdfOverlay:false,

            //call other files
            otherFiles:[],
        }
    },

     beforeRouteEnter (to, from, next){
         
    next(vm =>{  vm.T_GET_TENDERSDETAILs(to.params.id).then(()=>{
        
            vm.bill_of_lading = vm.LOAD_TENDER.bill_of_lading[0]
           vm.authorization_letter = vm.LOAD_TENDER.authorization_letter[0]
           vm.authorization_letter = vm.LOAD_TENDER.cargo_photo
           

          // eslint-disable-next-line no-console
              console.log('the onprogress outpost');
              // eslint-disable-next-line no-console
              console.log(to.params.id);
              // eslint-disable-next-line no-console
              console.log(vm.LOAD_TENDER);
              
               if(vm.LOAD_TENDER.cargo_photo !== null)
                {
                    vm.photo_extension = vm.getFileExtension(vm.LOAD_TENDER.cargo_photo[0]);

                    vm.photo_url = vm.LOAD_TENDER.cargo_photo[0];
                }

                if(vm.LOAD_TENDER.bill_of_lading !== null)
                {
                    vm.bill_of_lading_extension = vm.getFileExtension(vm.LOAD_TENDER.bill_of_lading[0]);

                    vm.bill_of_lading_url = vm.LOAD_TENDER.bill_of_lading[0];
                }

                if(vm.LOAD_TENDER.authorization_letter !== null)
                {
                    vm.letter_extension = vm.getFileExtension(vm.LOAD_TENDER.authorization_letter[0]);

                    vm.letter_url = vm.LOAD_TENDER.authorization_letter[0];
                }

                //other files
                if(vm.LOAD_TENDER.files !== null)
                    {
                        vm.otherFiles = vm.LOAD_TENDER.files;
                    }

                if (!vm.LOAD_TENDER.customer_offer_amount == '') {

                    vm.customer_offer_amount = vm.LOAD_TENDER.customer_offer_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                        
                } else {
                        vm.customer_offer_amount;
                }

          vm.T_GET_AGENT(localStorage.client).then(()=>{

              console.log(vm.LOAD_AGENT)

            vm.T_GET_PAYMENT_PROGRESS(to.params.id).then(()=>{
                
                console.log(vm.LOAD_PAYMENT_PROGRESS.objects)

                if (vm.LOAD_PAYMENT_PROGRESS.objects.length === 0 && 
                        vm.LOAD_PAYMENT_PROGRESS.genralErrorCode == 8001 ) {

                    console.log(vm.LOAD_PAYMENT_PROGRESS);
                    vm.wait = true
                    vm.show = false
                    vm.value = 0
                    //console.log(data.message);

                }else{

                    console.log(vm.LOAD_PAYMENT_PROGRESS.objects.verify);

                    if (vm.LOAD_PAYMENT_PROGRESS.objects.verify == null){

                        vm.wait = true
                        vm.show = false
                        

                    }else{

                        vm.documents = true
                        
                        if(vm.LOAD_PAYMENT_PROGRESS.objects.percentage_deposited >= 100)
                        vm.value = 100;
                        else
                            vm.value = vm.LOAD_PAYMENT_PROGRESS.objects.percentage_deposited

                        vm.created_at = vm.LOAD_PAYMENT_PROGRESS.objects.created_at                
                        //vm.value = vm.LOAD_PAYMENT_PROGRESS.objects.percentage_deposited
                        
                        vm.amount = vm.LOAD_PAYMENT_PROGRESS.objects.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                        if ( vm.LOAD_PAYMENT_PROGRESS.objects.is_full_amount_paid == false){
                                vm.chip1 = 'partial payment'
                        }
                    }
                    
                    
                }
            })

              vm.T_GET_TIMELINE_STAGES().then(()=>{

                    console.log(vm.LOAD_TIMELINE_STAGES);

                    console.log(to.params.id);

                    console.log(vm.LOAD_TIMELINE_STAGES.objects[0].id);

                    
              vm.T_GET_PROGRESS_STAGES(to.params.id).then(()=>{

                  console.log(vm.LOAD_PROGRESS_STAGES.objects[1].progress_id)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for (let index = 0; index < vm.LOAD_PROGRESS_STAGES.objects.length; index++) {
                                

  // stage One --------------------------------
                if (vm.LOAD_PROGRESS_STAGES.objects[index].progress_id === vm.LOAD_TIMELINE_STAGES.objects[0].id && 
                         vm.LOAD_PROGRESS_STAGES.objects[index].InProgress === 1 ) {

                     vm.expected_date1 = vm.LOAD_PROGRESS_STAGES.objects[index].expected_date         
                    console.log('Stage 1 In progress');
                    vm.stage1 = 'B'
                    //vm.stage2 = 'A'
                    //vm.stage3 = 'A'
                    //vm.stage4 = 'A'

                } else if( vm.LOAD_PROGRESS_STAGES.objects[index].progress_id === vm.LOAD_TIMELINE_STAGES.objects[0].id &&
                             vm.LOAD_PROGRESS_STAGES.objects[index].delivered === 1 ) {
                    
                    vm.expected_date1 = vm.LOAD_PROGRESS_STAGES.objects[index].completed_date 
                    console.log('Stage 1.1 completed');
                    vm.stage1 = 'C'
                    //vm.stage2 = 'A'
                    //vm.stage3 = 'A'
                    //vm.stage4 = 'A'

                }

    // stage Two ----------------------------------

                if (vm.LOAD_PROGRESS_STAGES.objects[index].progress_id === vm.LOAD_TIMELINE_STAGES.objects[1].id && 
                         vm.LOAD_PROGRESS_STAGES.objects[index].InProgress === 1 ){
                    
                     vm.expected_date2 = vm.LOAD_PROGRESS_STAGES.objects[index].expected_date
                    console.log('Stage 2 In progress');
                    //vm.stage1 = 'C'
                    vm.stage2 = 'B'
                    //vm.stage3 = 'A'
                    //vm.stage4 = 'A'

                    }else if( vm.LOAD_PROGRESS_STAGES.objects[index].progress_id === vm.LOAD_TIMELINE_STAGES.objects[1].id &&
                             vm.LOAD_PROGRESS_STAGES.objects[index].delivered === 1 ){
                     
                      vm.expected_date2 = vm.LOAD_PROGRESS_STAGES.objects[index].completed_date
                     console.log('Stage 2.2 completed');
                     //vm.stage1 = 'C'
                     vm.stage2 = 'C'
                     //vm.stage3 = 'A'
                     //vm.stage4 = 'A'

                    }

    // stage Three -----------------------------------

                if (vm.LOAD_PROGRESS_STAGES.objects[index].progress_id === vm.LOAD_TIMELINE_STAGES.objects[2].id && 
                         vm.LOAD_PROGRESS_STAGES.objects[index].InProgress === 1 ){
                    
                    vm.expected_date3 = vm.LOAD_PROGRESS_STAGES.objects[index].expected_date
                    console.log('Stage 3 In progress');
                    //vm.stage1 = 'C'
                    //vm.stage2 = 'C'
                    vm.stage3 = 'B'
                    //vm.stage4 = 'A'

                    }else if( vm.LOAD_PROGRESS_STAGES.objects[index].progress_id === vm.LOAD_TIMELINE_STAGES.objects[2].id &&
                             vm.LOAD_PROGRESS_STAGES.objects[index].delivered === 1 ){
                     
                     vm.expected_date3 = vm.LOAD_PROGRESS_STAGES.objects[index].completed_date
                     console.log('Stage 3.3 completed');
                     //vm.stage1 = 'C'
                     //vm.stage2 = 'C'
                     vm.stage3 = 'C'
                     //vm.stage4 = 'A'

                    }

    // Stage Four -------------------------------------

                if (vm.LOAD_PROGRESS_STAGES.objects[index].progress_id === vm.LOAD_TIMELINE_STAGES.objects[3].id && 
                         vm.LOAD_PROGRESS_STAGES.objects[index].InProgress === 1 ){
                    
                     vm.expected_date4 = vm.LOAD_PROGRESS_STAGES.objects[index].expected_date
                    console.log('Stage 4 In progress');
                    //vm.stage1 = 'C'
                    //vm.stage2 = 'C'
                    //vm.stage3 = 'C'
                    vm.stage4 = 'B'

                    }else if( vm.LOAD_PROGRESS_STAGES.objects[index].progress_id === vm.LOAD_TIMELINE_STAGES.objects[3].id &&
                             vm.LOAD_PROGRESS_STAGES.objects[index].delivered === 1 ){
                     
                      vm.expected_date4 = vm.LOAD_PROGRESS_STAGES.objects[index].completed_date
                     console.log('Stage 4.4 completed');
                     //vm.stage1 = 'C'
                     //vm.stage2 = 'C'
                     //vm.stage3 = 'C'
                     vm.stage4 = 'C'


                    }
                                if ((vm.stage1 == 'c' && vm.stage2 == 'c') && (vm.stage3 == 'c' && vm.stage4=='c') ) {
                                    vm.complete_tender = false
                                } else {
                                    vm.complete_tender = true
                                }

                                if ((vm.LOAD_PROGRESS_STAGES.objects[index].InProgress === vm.state) &&
                                (vm.LOAD_PROGRESS_STAGES.objects[index].progress_id === vm.progress_id)  ) {
                                    
                                    console.log('sulition');
                                    
                                    console.log(vm.LOAD_PROGRESS_STAGES.objects);

                                    
                                    
                                }
                                console.log(vm.LOAD_PROGRESS_STAGES.objects[index].InProgress)
                                
                                
                            }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    // stage One --------------------------------
                if (vm.LOAD_PROGRESS_STAGES.objects[0].clearing_progress_id === vm.LOAD_TIMELINE_STAGES.objects[0].id && 
                         vm.LOAD_PROGRESS_STAGES.objects[0].InProgress === 1 ) {

                    console.log('Stage 1 In progress');
                    vm.stage1 = 'B'
                    vm.stage2 = 'A'
                    vm.stage3 = 'A'
                    vm.stage4 = 'A'

                } else if( vm.LOAD_PROGRESS_STAGES.objects[0].clearing_progress_id === vm.LOAD_TIMELINE_STAGES.objects[0].id &&
                             vm.LOAD_PROGRESS_STAGES.objects[0].delivered === 1 ) {
                    
                    console.log('Stage 1 completed');
                    vm.stage1 = 'C'
                    vm.stage2 = 'A'
                    vm.stage3 = 'A'
                    vm.stage4 = 'A'

                }

    // stage Two ----------------------------------

                if (vm.LOAD_PROGRESS_STAGES.objects[1].clearing_progress_id === vm.LOAD_TIMELINE_STAGES.objects[1].id && 
                         vm.LOAD_PROGRESS_STAGES.objects[1].InProgress === 1 ){
                    
                    console.log('Stage 1 In progress');
                    vm.stage1 = 'C'
                    vm.stage2 = 'B'
                    vm.stage3 = 'A'
                    vm.stage4 = 'A'


                    }else if( vm.LOAD_PROGRESS_STAGES.objects[1].clearing_progress_id === vm.LOAD_TIMELINE_STAGES.objects[1].id &&
                             vm.LOAD_PROGRESS_STAGES.objects[1].delivered === 1 ){
                    
                     console.log('Stage 1 completed');
                     vm.stage1 = 'C'
                     vm.stage2 = 'C'
                     vm.stage3 = 'A'
                     vm.stage4 = 'A'

                    }

    // stage Three -----------------------------------

                if (vm.LOAD_PROGRESS_STAGES.objects[2].clearing_progress_id === vm.LOAD_TIMELINE_STAGES.objects[2].id && 
                         vm.LOAD_PROGRESS_STAGES.objects[2].InProgress === 1 ){
                    
                    console.log('Stage 1 In progress');
                    vm.stage1 = 'C'
                    vm.stage2 = 'C'
                    vm.stage3 = 'B'
                    vm.stage4 = 'A'

                    }else if( vm.LOAD_PROGRESS_STAGES.objects[2].clearing_progress_id === vm.LOAD_TIMELINE_STAGES.objects[2].id &&
                             vm.LOAD_PROGRESS_STAGES.objects[2].delivered === 1 ){
                    
                     console.log('Stage 1 completed');
                     vm.stage1 = 'C'
                     vm.stage2 = 'C'
                     vm.stage3 = 'C'
                     vm.stage4 = 'A'

                    }

    // Stage Four -------------------------------------

                if (vm.LOAD_PROGRESS_STAGES.objects[3].clearing_progress_id === vm.LOAD_TIMELINE_STAGES.objects[3].id && 
                         vm.LOAD_PROGRESS_STAGES.objects[3].InProgress === 1 ){
                    
                    console.log('Stage 1 In progress');
                    vm.stage1 = 'C'
                    vm.stage2 = 'C'
                    vm.stage3 = 'C'
                    vm.stage4 = 'B'

                    }else if( vm.LOAD_PROGRESS_STAGES.objects[3].clearing_progress_id === vm.LOAD_TIMELINE_STAGES.objects[3].id &&
                             vm.LOAD_PROGRESS_STAGES.objects[3].delivered === 1 ){
                    
                     console.log('Stage 1 completed');
                     vm.stage1 = 'C'
                     vm.stage2 = 'C'
                     vm.stage3 = 'C'
                     vm.stage4 = 'C'

                    }
*/



                }) //--
              })
          })
      })
      })
      
       //eslint-disable-next-line no-console
    /*   console.log(tab);
     console.log(to);
     console.log(from);
     console.log(next);*/
    },

    
    computed: {
    ...mapGetters([
      "LOAD_LOGIN",
      'LOAD_AGENT',
      'LOAD_TENDER',
      'LOAD_PROGRESS_STAGES',
      'LOAD_PROGRESS_FEEDBACK',
      'LOAD_PAYMENT_PROGRESS',
      'LOAD_TIMELINE_STAGES'
      ])
  },
components:{PDFDocument},
   
methods :{
    ...mapActions([
      "T_GET_AGENT",
      'T_GET_TENDERSDETAILs',
      'T_GET_PROGRESS_STAGES',
      'T_UPGRADE_PROGRESS',
      'T_GET_PAYMENT_PROGRESS',
      'T_GET_TIMELINE_STAGES'
    ]),

    previewPdf(url){

            this.url = url;
            this.pdfOverlay = true;
            this.pdf = true;
            
        },

        closePdfViewer(){
            this.pdf = false;
            this.pdfOverlay = false;
        },

    //preview
       getFileExtension(url){

        let position = url.lastIndexOf('.');

        let extracted_string = url.slice(position + 1, url.length + 1);

        return extracted_string;

        },

       

        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

        },

        checkstate(){
            if (this.feedstate == "InProgress") {
                this.datetitle = "Started on"
            } else {
                 this.datetitle = "Completed on"
                
            }

        },

        submiteProgress(){

            this.loading = true

        if (this.feedstage === '1. Port processing') {
            this.progress_id = this.LOAD_TIMELINE_STAGES.objects[0].id
        } else if (this.feedstage === '2. TRA') {
            this.progress_id = this.LOAD_TIMELINE_STAGES.objects[1].id
        } else if (this.feedstage === '3. Other processes') {
            this.progress_id = this.LOAD_TIMELINE_STAGES.objects[2].id
        } else if (this.feedstage == '4. Completion') {
            this.progress_id = this.LOAD_TIMELINE_STAGES.objects[3].id
        }

        console.log(this.$route.params.id);
            
        //        const        agent_id = this.LOAD_AGENT.objects.agent_id
        //          const progress_status = this.feedstate
        //    const       tender_id = this.LOAD_TENDER.id
        //     const     progress_id = this.progress_id
        //        const   expected_date = this.date
            
            console.log(this.LOAD_AGENT.objects.agent_id);
            

           this.$store.dispatch('T_UPGRADE_PROGRESS',{
                                   
                    agent_id : this.LOAD_AGENT.objects.agent_id,
                    progress_status : this.feedstate,
                    tender_id : this.LOAD_TENDER.id,
                    progress_id : this.progress_id,
                    expected_date : this.date, 
                    completed_date : this.date, 

                }).then(()=>{

                    console.log(this.progress_id);
                    
                    console.log(this.LOAD_PROGRESS_FEEDBACK);
                    

                    this.T_GET_PROGRESS_STAGES(this.$route.params.id).then(()=>{
                            
                            this.loading = false

                            console.log(this.LOAD_PROGRESS_STAGES.objects)
////////////////////////////////////////////////////////////////////////////////////////////
        for (let index = 0; index < this.LOAD_PROGRESS_STAGES.objects.length; index++) {
                                
                                 console.log(this.feedstate);

                        if (this.feedstate == 'InProgress') {
                                         this.state =1
                                     
                                 } else {

                                      this.state = 0
                                     
                                 }
                                

                        // if ((this.LOAD_PROGRESS_STAGES.objects[index].InProgress === this.state) &&
                        //         (this.LOAD_PROGRESS_STAGES.objects[index].clearing_progress_id === this.progress_id)  ) {
                                    
                        //             console.log('sulition');
                                    
                        //             console.log(this.LOAD_PROGRESS_STAGES.objects);
                        //         }

// stage One --------------------------------

                if (this.LOAD_PROGRESS_STAGES.objects[index].progress_id === this.LOAD_TIMELINE_STAGES.objects[0].id && 
                         this.LOAD_PROGRESS_STAGES.objects[index].InProgress === 1 ) {
                    
                     this.expected_date1 = this.LOAD_PROGRESS_STAGES.objects[index].expected_date
                    console.log('Stage 1 In progress');
                    this.stage1 = 'B'
                    // this.stage2 = 'A'
                    // this.stage3 = 'A'
                    // this.stage4 = 'A'

                } else  if( this.LOAD_PROGRESS_STAGES.objects[index].progress_id === this.LOAD_TIMELINE_STAGES.objects[0].id &&
                             this.LOAD_PROGRESS_STAGES.objects[index].delivered === 1 ) {
                    
                     this.expected_date1 = this.LOAD_PROGRESS_STAGES.objects[index].expected_date
                    console.log('Stage 1 completed');
                    this.stage1 = 'C'
                    // this.stage2 = 'A'
                    // this.stage3 = 'A'
                    // this.stage4 = 'A'

                }

// stage Two ----------------------------------

                if (this.LOAD_PROGRESS_STAGES.objects[index].progress_id === this.LOAD_TIMELINE_STAGES.objects[1].id && 
                         this.LOAD_PROGRESS_STAGES.objects[index].InProgress === 1 ){
                    
                    this.expected_date2 = this.LOAD_PROGRESS_STAGES.objects[index].expected_date
                    console.log('Stage 1 In progress');
                    //this.stage1 = 'C'
                    this.stage2 = 'B'
                    //this.stage3 = 'A'
                    //this.stage4 = 'A'

                    }else if( this.LOAD_PROGRESS_STAGES.objects[index].progress_id === this.LOAD_TIMELINE_STAGES.objects[1].id &&
                             this.LOAD_PROGRESS_STAGES.objects[index].delivered === 1 ){
                    
                    this.expected_date2 = this.LOAD_PROGRESS_STAGES.objects[index].expected_date
                     console.log('Stage 1 completed');
                     //this.stage1 = 'C'
                     this.stage2 = 'C'
                     //this.stage3 = 'A'
                     //this.stage4 = 'A'

                    }

// stage Three -----------------------------------

                if (this.LOAD_PROGRESS_STAGES.objects[index].progress_id === this.LOAD_TIMELINE_STAGES.objects[2].id && 
                         this.LOAD_PROGRESS_STAGES.objects[index].InProgress === 1 ){
                    
                    this.expected_date3 = this.LOAD_PROGRESS_STAGES.objects[index].expected_date
                    console.log('Stage 1 In progress');
                    //this.stage1 = 'C'
                    //this.stage2 = 'C'
                    this.stage3 = 'B'
                    //this.stage4 = 'A'

                    }else if( this.LOAD_PROGRESS_STAGES.objects[index].progress_id === this.LOAD_TIMELINE_STAGES.objects[2].id &&
                             this.LOAD_PROGRESS_STAGES.objects[index].delivered === 1 ){
                    
                    this.expected_date3 = this.LOAD_PROGRESS_STAGES.objects[index].expected_date
                     console.log('Stage 1 completed');
                     //this.stage1 = 'C'
                     //this.stage2 = 'C'
                     this.stage3 = 'C'
                     this.stage4 = 'A'

                    }

// Stage Four -------------------------------------

                if (this.LOAD_PROGRESS_STAGES.objects[index].progress_id === this.LOAD_TIMELINE_STAGES.objects[3].id && 
                         this.LOAD_PROGRESS_STAGES.objects[index].InProgress === 1 ){
                    
                    this.expected_date4 = this.LOAD_PROGRESS_STAGES.objects[index].expected_date
                    console.log('Stage 1 In progress');
                    //this.stage1 = 'C'
                    //this.stage2 = 'C'
                    //this.stage3 = 'C'
                    this.stage4 = 'B'

                    }else if( this.LOAD_PROGRESS_STAGES.objects[index].progress_id === this.LOAD_TIMELINE_STAGES.objects[3].id &&
                             this.LOAD_PROGRESS_STAGES.objects[index].delivered === 1 ){
                    
                    this.expected_date4 = this.LOAD_PROGRESS_STAGES.objects[index].expected_date
                     console.log('Stage 1 completed');
                     //this.stage1 = 'C'
                     //this.stage2 = 'C'
                     //this.stage3 = 'C'
                     this.stage4 = 'C'


                    }

                    if ((this.stage1 == 'c' && this.stage2 == 'c') && (this.stage3 == 'c' && this.stage4=='c') ) {
                                    this.complete_tender = false
                                } else {
                                    this.complete_tender = true
                                }
                            
                                
                                
                            }
///////////////////////////////////////////////////////////////////////////////////////////

/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// stage One --------------------------------

                if (this.LOAD_PROGRESS_STAGES.objects[0].progress_id === this.LOAD_TIMELINE_STAGES.objects[0].id && 
                         this.LOAD_PROGRESS_STAGES.objects[0].InProgress === 1 ) {

                    console.log('Stage 1 In progress');
                    this.stage1 = 'B'
                    this.stage2 = 'A'
                    this.stage3 = 'A'
                    this.stage4 = 'A'

                } else if( this.LOAD_PROGRESS_STAGES.objects[0].progress_id === this.LOAD_TIMELINE_STAGES.objects[0].id &&
                             this.LOAD_PROGRESS_STAGES.objects[0].delivered === 1 ) {
                    
                    console.log('Stage 1 completed');
                    this.stage1 = 'C'
                    this.stage2 = 'A'
                    this.stage3 = 'A'
                    this.stage4 = 'A'

                }

// stage Two ----------------------------------

                if (this.LOAD_PROGRESS_STAGES.objects[1].progress_id === this.LOAD_TIMELINE_STAGES.objects[1].id && 
                         this.LOAD_PROGRESS_STAGES.objects[1].InProgress === 1 ){
                    
                    console.log('Stage 1 In progress');
                    this.stage1 = 'C'
                    this.stage2 = 'B'
                    this.stage3 = 'A'
                    this.stage4 = 'A'

                    }else if( this.LOAD_PROGRESS_STAGES.objects[1].progress_id === this.LOAD_TIMELINE_STAGES.objects[1].id &&
                             this.LOAD_PROGRESS_STAGES.objects[1].delivered === 1 ){
                    
                     console.log('Stage 1 completed');
                     this.stage1 = 'C'
                     this.stage2 = 'C'
                     this.stage3 = 'A'
                     this.stage4 = 'A'

                    }

// stage Three -----------------------------------

                if (this.LOAD_PROGRESS_STAGES.objects[2].progress_id === this.LOAD_TIMELINE_STAGES.objects[2].id && 
                         this.LOAD_PROGRESS_STAGES.objects[2].InProgress === 1 ){
                    
                    console.log('Stage 1 In progress');
                    this.stage1 = 'C'
                    this.stage2 = 'C'
                    this.stage3 = 'B'
                    this.stage4 = 'A'

                    }else if( this.LOAD_PROGRESS_STAGES.objects[2].progress_id === this.LOAD_TIMELINE_STAGES.objects[2].id &&
                             this.LOAD_PROGRESS_STAGES.objects[2].delivered === 1 ){
                    
                     console.log('Stage 1 completed');
                     this.stage1 = 'C'
                     this.stage2 = 'C'
                     this.stage3 = 'C'
                     this.stage4 = 'A'

                    }

// Stage Four -------------------------------------

                if (this.LOAD_PROGRESS_STAGES.objects[3].progress_id === this.LOAD_TIMELINE_STAGES.objects[3].id && 
                         this.LOAD_PROGRESS_STAGES.objects[3].InProgress === 1 ){
                    
                    console.log('Stage 1 In progress');
                    this.stage1 = 'C'
                    this.stage2 = 'C'
                    this.stage3 = 'C'
                    this.stage4 = 'B'

                    }else if( this.LOAD_PROGRESS_STAGES.objects[3].progress_id === this.LOAD_TIMELINE_STAGES.objects[3].id &&
                             this.LOAD_PROGRESS_STAGES.objects[3].delivered === 1 ){
                    
                     console.log('Stage 1 completed');
                     this.stage1 = 'C'
                     this.stage2 = 'C'
                     this.stage3 = 'C'
                     this.stage4 = 'C'

                    }
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/


              })
                    
                })

        //    console.log(agent_id, progress_status, tender_id, expected_date);           
        //    console.log(progress_id);
       
    }

    }
}
</script>

<style>
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

/*:is#line{
    
}
ul li .x-large{
    
    
}*/

.large-preview{

    /*width: 500px;
    height: 500px;*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    
 }

 img:hover{
     cursor: pointer;
 }
</style>

