<template>
    <v-container class="pa-3 mt-10 mx-auto">

        <Alert v-if="alert" v-bind="{message,type}"/>

        <PDFDocument v-bind="{url,pdfOverlay}" @clicked="closePdfViewer" v-if="pdf"/>
            <v-overlay :value="overlay">

                <div class="large-preview">
                    
                    <v-row justify= "center">
                        <v-col cols=12>
                            <img  id="large_thumbnail" width="500px" height="500px">
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

            <v-dialog
                v-model="largefilesize"
                max-width="400"
                color="#f5faff"
                transition="scale-transition"
                :hide-overlay="true"
            >
                <v-card 
                    height="105" 
                    color="#f64f51" 
                    class="pt-2">
            
                    <v-alert  
                        prominent
                        height="" 
                        type="error"
                    >
                            <p class="font-weight-strong mb-0">File size is too large limit 2MB</p>
                    </v-alert>

                </v-card>
            </v-dialog>

            <v-dialog
                v-model="field_required"
                max-width="400"
                color="#f5faff"
                transition="scale-transition"
                :hide-overlay="true"
            >
                <v-card 
                    height="105" 
                    color="#f64f51" 
                    class="pt-2"
                >

                    <v-alert  
                        prominent
                        height="" 
                        type="error">
                        <p class="font-weight-strong mb-0">{{field}}</p>
                    </v-alert>

                </v-card>
            </v-dialog>

            <v-dialog
            v-model="display_file_size_error"
            max-width="400"
            color="#F5FAFF"
            transition="scale-transition"
            :hide-overlay="true"
        >
            <v-card
                height="105"
                color="#F64F51"
                class="pt-2"
            >
                
                <v-alert
                    prominent
                    height=""
                    type="error"
                >
                      <p class="font-weight-strong mb-0">File size is too large limit 2MB</p>
                </v-alert>
                
            </v-card>

        </v-dialog>

            <v-overlay
                :value="choose_tender"
                >

                <v-card color="white">
                    <v-card-title>
                        <p class="primary--text font-weight-bold">Choose the tender category you wish to create</p>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <!-- <v-col cols=6 v-for="category in tender_categories" :key="category.id">
                                    <v-card class="pl-5" :hover="true" @click="setTenderCategory(category.industry_name)">
                                        <v-card-title>{{ category.id }}</v-card-title>
                                        <v-btn 
                                            height="60"
                                            width="70"
                                            elevation="10"
                                            color="primary"
                                            class="white--text pb-2"
                                        >
                                            <v-img
                                                :src="require('../../assets/truck.png')"
                                                class="mt-2"
                                                contain
                                                width=""
                                                height="43"
                                            >
                                            </v-img>
                                       </v-btn>
                                    </v-card>
                                    <p class="mt-3 ml-3 body-1 font-weight-bold primary--text">To Transport goods </p>
                                </v-col> -->
                                <v-col class="categorySel" cols=6>
                                    <v-card class="pl-5" :hover="true" @click="setTenderCategory('Transporting')">
                                        <v-card-title>Transporting</v-card-title>
                                        <v-btn 
                                            height="60"
                                            width="70"
                                            style="margin-bottom:20px;"
                                            elevation="10"
                                            color="primary"
                                            class="white--text pb-2"
                                        >
                                            <v-img
                                                :src="require('../../assets/truck.png')"
                                                class="mt-2"
                                                contain
                                                width=""
                                                height="43"
                                            >
                                            </v-img>
                                       </v-btn>
                                    </v-card>
                                    
                                </v-col>

                                <v-col class="categorySel" cols=6 >
                                    <v-card class="pl-5" style="margin-left:16px;" :hover="true" @click="setTenderCategory('Clearing')">
                                        <v-card-title>Clearing</v-card-title>
                                        <v-btn 
                                            height="60"
                                            width="70"
                                            style="margin-bottom:20px;"
                                            elevation="10"
                                            color="primary"
                                            class="white--text pb-2"
                                        >
                                            <v-img
                                                :src="require('../../assets/box.png')"
                                                class="mt-2"
                                                contain
                                                width=""
                                                height="43"
                                            >
                                            </v-img>
                                       </v-btn>
                                    </v-card>
                                    
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>

            </v-overlay>
            
        <v-layout class="pa-3 mt-10">
            

            <v-card row flat class="mx-auto" width="1300" color="#F5FAFF" >
                <v-row>
                <h3 class="headline mt-1 font-weight-regular">Create new tender</h3>
                <v-spacer></v-spacer>
                <v-btn outlined color="primary" class="mx-4" router to="/client">Cancel</v-btn>
                </v-row>
            </v-card>
        </v-layout>



         <!--<v-container style="height: 400px;">
            <v-row
                class="fill-height"
                align-content="center"
                justify="center"
            >
                <v-col
                    class="subtitle-1 text-center"
                    cols="12"
                >
                    Getting your files
                </v-col>

                <v-col cols="6">
                    <v-progress-linear
                        color="deep-purple accent-4"
                        indeterminate
                        rounded
                        height="6"
                >
                </v-progress-linear>
                </v-col>
            </v-row>
        </v-container>-->

        <v-layout column class="pa-3 px-auto" justify-center>
            <v-card col flat width="1000" class="mx-auto mb-10" color="#F5FAFF">
                <v-row>
                <v-icon color="grey" class="mb-4 ml-3 mr-5">list_alt</v-icon>
                <p class="grey--text title">Tender name</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-form>
                    <v-container>
                        <v-row>
                            <v-col>
                                <!--<v-select 
                                    class="mx-6" 
                                    style="color:#4169E1;"
                                    v-model = "tender_category" 
                                    :items="tender_categories" 
                                    :rules="[v => !!v || 'Category is required']"
                                    required
                                    color="#4169E1" 
                                    clearable 
                                >
                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>Tender category
                                    </template>
                                </v-select>-->
                                 <p class="primary--text mb-1 body-2 text-uppercase mb-0">TENDER CATEGORY</p>
                                <v-text-field 
                                    v-model="tender_category" 
                                    outlined
                                    @click="choose_tender = true"
                                >
                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                </v-text-field>

                            </v-col>
                        </v-row>
                        <v-row>
                            <!--<v-col>
                                <v-select 
                                    class="mx-6" 
                                    style="color:#4169E1;"
                                    v-model = "tender_category" 
                                    :items="tender_categories" 
                                    color="#4169E1" 
                                    label="Tender category" 
                                    clearable 
                                >
                                </v-select>
                            </v-col>-->
                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0">TENDER NAME</p>
                            <v-text-field 
                                outlined 
                                clearable
                                :rules="[v => !!v || 'Tender name is required']"
                                required
                                v-model="details">
                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>
                            </v-text-field>
                        </v-col>

                         <v-col xs12 sm6 md4 lg4 xl4>
                                    <p class="primary--text body-2 text-uppercase mb-0"> CARGO SIZE </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="size">
                                    </v-text-field>
                        </v-col>
                        
                       
                        </v-row>

                        <v-row class="px-3" v-if="tender_category === 'Transporting'">
                            <v-row wrap >
                                <v-col>
                                    <p class="primary--text body-2 text-uppercase mb-0">COUNTRY OF ORIGIN</p>
                                    <v-select
                                        outlined
                                        v-model="origin"
                                        :items="available_countries"
                                        @change="fetchOriginRegions(origin)"
                                        :rules="[v => !!v || 'Origin is required']"
                                        required
                                    >     
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                    </v-select>
                                </v-col>

                                <v-col>
                                    <p class="primary--text body-2 text-uppercase mb-0">COUNTRY OF DESTINATION</p>
                                    <v-select
                                        outlined
                                        v-model="destination"
                                        :items="available_countries"
                                        @change="fetchDestinationRegions(destination)"
                                        :rules="[v => !!v || 'Destination country is required']"
                                        required
                                    >     
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                </v-select>
                                </v-col>
                            </v-row>
                        </v-row>

                        <v-row class="px-3" v-if="tender_category === 'Transporting'">
                            <v-row wrap >
                                <v-col>
                                    <p class="primary--text body-2 text-uppercase mb-0">REGION OF ORIGIN</p>

                                    <v-select
                                        outlined
                                        v-model="origin_region"
                                        :items="origin_regions"
                                        :rules="[v => !!v || 'Origin region is required']"
                                        required
                                    >     
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                    </v-select>
                                </v-col>

                                <v-col>
                                    <p class="primary--text body-2 text-uppercase mb-0">REGION OF DESTINATION</p>
                                    <v-select
                                        outlined
                                        v-model="destination_region"
                                        :items="destination_regions"
                                        :rules="[v => !!v || 'Destinaton region is required']"
                                        required
                                    >     
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                </v-select>
                                </v-col>
                            </v-row>
                        </v-row>

                        <v-row>
                            
                            <v-col xs12 sm6 md4 lg4 xl4>
                                    <v-select 
                                        class="mx-6" 
                                        style="color:#4169E1;"
                                        v-model = "currency" 
                                        :items="currencies" 
                                        color="#4169E1" 
                                        :rules="[v => !!v || 'Currency is required']"
                                    >
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span> Currency
                                        </template>

                                    </v-select>
                                </v-col>

                            <v-col xs12 sm6 md4 lg4 xl4>
                                    <p class="primary--text body-2 text-uppercase mb-0"> OFFER AMOUNT </p>
                                    <v-text-field 
                                        outlined 
                                        type="number"
                                        v-model="offer_amount"
                                        :rules="[rules.number]">
                                    </v-text-field>
                            </v-col>

                            <v-col  xs12 sm6 md4 lg4 xl4>
                                <p class="primary--text body-2 text-uppercase mb-0"> DELIVERY TIMELINE </p>
                                <v-text-field 
        
                                    :rules="[v => !!v || 'Date is required']"
                                    required
                                    v-model="timeline"
                                    @click="date_clicked = true"
                                >

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                            </template><template #label>

                                            <span class="red--text"><strong>* </strong></span>
                                        </template>
                                </v-text-field>

                                
                                <v-date-picker 
                                    v-model="timeline"
                                    v-show="date_clicked"
                                    @change="date_clicked = false"
                                    :rules="[v => !!v || 'Date is required']"
                                    :min= time
                                    required
                                    full-width>
                                </v-date-picker>

                            </v-col>

                        </v-row>

                        <v-row>
                             <v-col cols=4>
                                <p class="primary--text body-2 text-uppercase mb-0"> BILL OF LADING NUMBER </p>
                                <v-text-field
                                    outlined 
                                    type="number"
                                    :rules="[v => !!v || 'bill of lading number  is required']"
                                    v-model="bill_of_lading_number"
                                >

                                     <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                    </template>
                                </v-text-field>
                            </v-col>

                            <v-col cols=8>
                                <p class="primary--text body-2 text-uppercase mb-0"> DESCRIPTION ON CARGO </p>
                                <v-textarea
                                    outlined 
                                    clearable
                                    :auto-grow = "true"
                                    v-model="description">
                                </v-textarea>
                            </v-col>
                        </v-row>

                         <v-row>
                            <v-col xs12>
                                <p class="primary--text body-2 text-uppercase mb-0"> TERMS AND CONDITION </p>
                                <v-textarea
                                    outlined 
                                    clearable
                                    :auto-grow = "true"
                                    :rules="[v => !!v || 'Terms and conditions is required']"
                                    
                                    required
                                    v-model="terms">

                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                </v-textarea>
                            </v-col>
                        </v-row>
                        
                    </v-container>
                    </v-form>

                </v-card>
            </v-card>

        
            <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
                 

                <v-row>
                    <v-icon color="grey" class="mb-4 ml-3 ">attachments</v-icon>
                    <p class="grey--text title">Attachments</p>
                </v-row>

                <v-card width="1300" class="mx-auto pa-3">

                    <v-flex class="pt-3" >
                             <center>
                             <p class="mb-0 body-1 red--text">
                                Supported file types : <span class="font-weight-bold">.PDF .JPG .PNG .JPEG</span>
                             </p>
                             </center>
                    </v-flex>

                    <v-row class="pa-3">
                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> CARGO PHOTO </p>
                            <v-card flat width="250" height="270" outlined >

                                <v-file-input 
                                    label="Photo input" 
                                    id="files" 
                                    :clearable="false"
                                    @change="updateFilesUploaded()"
                                    prepend-icon ="mdi-cloud-upload"
                                    @click:clear="removeFile()"
                                >

                                </v-file-input>

                                 <div v-show="photo_extension === 'jpg' || photo_extension === 'jpeg' ||  photo_extension === 'png' ">
                                    <v-card height="200" width="250" outlined @click="showLargeThumbnail('files')">
                                        <img  id="files_thumb" :src="photo_url" class="preview">
                                    </v-card>
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

                                <div v-show="photo_extension === 'error' ">
                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large </p>
                                    </v-card>
                                </div>

                            </v-card>
                       
                        </v-col> 

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> BILL OF LADING</p>

                            <v-tooltip bottom content-class="tooltip">

                                <template v-slot:activator="{ on }">

                                    <v-card flat width="250" height="270" outlined v-on="on">

                                    <v-file-input  
                                        id="bill"
                                        :rules="[v => !!v || 'Bill of lading is required']"
                                        required
                                        :clearable="false"
                                        @change="billUpdated()"
                                        prepend-icon ="mdi-cloud-upload"
                                    
                                    >
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span> Bill of lading
                                        </template>

                                    </v-file-input>

                                    <div v-show="bill_of_lading_extension === 'jpg' || bill_of_lading_extension === 'jpeg' ||  bill_of_lading_extension === 'png' ">
                                        <v-card height="200" width="250" outlined @click="showLargeThumbnail('bill')">
                                            <img  id="bill_thumb" class="preview">
                                        </v-card>
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

                                    <div v-show="bill_of_lading_extension === 'error' ">
                                        <v-card height="200" width="250" outline class="pt-10 largefile" >
                                            <p class="fontweight-bold red--text title text-center mt-10 "> file size too large </p>
                                        </v-card>
                                    </div>

                                    </v-card>
                                </template>
                                <span>
                                    is a document issued by a carrier to acknowledge receipt of cargo for shipment.
                                </span>

                            </v-tooltip>
                            
                       
                        </v-col>   

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> AUTHORIZATION LETTER</p>

                            <v-tooltip top content-class="tooltip">
                                <template v-slot:activator="{ on }">

                                    <v-card flat width="250" height="270" outlined v-on="on">

                                    <v-file-input 
                                        id="letter"
                                        :rules="[v => !!v || 'Authorization letter is required']"
                                        required
                                        @change="letterUpdated()"
                                        prepend-icon ="mdi-cloud-upload"
                                        :clearable="false"
                                    >
                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span> Authorization letter
                                        </template>

                                    </v-file-input>

                                    <div v-show="letter_extension === 'jpg' || letter_extension === 'jpeg' ||  letter_extension === 'png' ">
                                        <v-card height="200" width="250" outlined @click="showLargeThumbnail('letter')">
                                            <img  id="letter_thumb" class="preview">
                                        </v-card>
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

                                     <div v-show="letter_extension === 'error' ">
                                        <v-card height="200" width="250" outline class="pt-10 largefile" >
                                            <p class="fontweight-bold red--text title text-center mt-10 "> file size too large </p>
                                        </v-card>
                                    </div>
                                </v-card>

                                </template>
                                <span>This is letter which authorize you as the owner of this cargo</span>
                            </v-tooltip>
                                
                       
                        </v-col>   
                                      
                    </v-row>

                    <v-row>
                        <v-col cols=12>

                            <v-file-input 

                                :clearable="false"
                                placeholder="Choose a file"
                                class="fileinput"
                                id="otheFiles"
                                @change="otherAttachmentsUpdated()"
                                prepend-icon ="mdi-cloud-upload"
                            >
                            </v-file-input>

                           <!--Expansion pannel to add other documents  -->
                <v-row>
                    <v-card flat width="850" class="mx-auto">
                    
                            <v-expansion-panels 
                            
                            v-model="panel"
                            :accordion="true"
                            :hover="true"
                            :flat="true"
                            >

                            <v-expansion-panel
                            
                            >
                                <v-expansion-panel-header>
                                    <v-flex class="">
                                    <p class="font-weight-regular text-uppercase text-center body-1 primary--text pt-1">
                                        add other files
                                    </p> 
                                     </v-flex>
                                </v-expansion-panel-header>

                                <v-expansion-panel-content>
                                     
                                     <v-divider color="" class="mb-4"></v-divider>
                                    
                                        <v-row>
                                        
                                        <!-- pannel content -->
                                            <v-col cols=12 sm=4 class="">

                                                <v-row class="ml-9 mb-3">
                                                    <!-- <v-icon class="font-weight-regular">attachment</v-icon> -->

                                                    <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                        Attachment 1
                                                    </p> 
                                                </v-row>

                                                <v-text-field 
                                                v-model="otherdocument_title"
                                                outlined 
                                                class="" 
                                                clearable 
                                                color="#4169E1"
                                                label="title"
                                                dense
                                                >
                                                        
                                                </v-text-field>
                                                
                                                <v-card flat width="250"  >

                                                    <v-file-input 
                                                        dense
                                                        :clearable="false"
                                                        placeholder="Choose a file"
                                                        id="otherdocument" 
                                                        @change="expansionpannelfiles()"
                                                        prepend-inner-icon="mdi-cloud-upload"
                                                        prepend-icon=""
                                                        
                                                        outlined
                                                    >

                                                    </v-file-input>

                                                    <div v-show="otherdocument_extension === 'jpg' || otherdocument_extension === 'jpeg' || otherdocument_extension === 'png'">
                                                        <v-card height="200" width="250" outlined @click="handleClick('otherdocument',otherdocument_url)">
                                                            <img  id="otherdocument_thumb" :src="otherdocument_url" class="preview">
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument_extension === 'largefile' ">
                                                        <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                            <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument_extension === 'pdf'">                                            
                                                    <v-tooltip right color="#1565C0">
                                                    <template v-slot:activator="{ on }">
                                                        <v-card 
                                                            flat
                                                            color=""
                                                            height="198"
                                                            :block="true"
                                                            icon 
                                                            class="py-12 px-12 insurance_preview"
                                                            @click="previewPdf(otherdocument_url)"
                                                            v-on="on">
                                                            <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                        </v-card>
                                                    </template>
                                                    <span>Click to view document</span>
                                                </v-tooltip>
                                                    
                                                <!--  -->
                                            </div>
                                        </v-card>
                                    </v-col> 

                                    <!-- <v-divider color="" :vertical="true"></v-divider> -->

                                    <!-- pannel content 1-->
                                            <v-col cols=12 sm=4 class="">

                                                <v-row class="ml-9 mb-3">
                                                    <!-- <v-icon class="">attachment</v-icon> -->

                                                    <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                        Attachment 2
                                                    </p> 
                                                </v-row>

                                                <v-text-field 
                                                v-model="otherdocument1_title"
                                                outlined 
                                                class="" 
                                                clearable 
                                                color="#4169E1"
                                                label="title"
                                                dense
                                                >
                                                        
                                                </v-text-field>
                                                
                                                <v-card flat width="250"  >

                                                    <v-file-input 
                                                        dense
                                                        :clearable="false"
                                                        placeholder="Choose a file"
                                                        id="otherdocument1" 
                                                        @change="expansionpannelfiles1()"
                                                        prepend-inner-icon="mdi-cloud-upload"
                                                        prepend-icon=""
                                                        
                                                        outlined
                                                    >

                                                    </v-file-input>

                                                    <div v-show="otherdocument1_extension === 'jpg' || otherdocument1_extension === 'jpeg' || otherdocument1_extension === 'png'">
                                                        <v-card height="200" width="250" outlined @click="handleClick('otherdocument1',otherdocument1_url)">
                                                            <img  id="otherdocument1_thumb" :src="otherdocument1_url" class="preview">
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument1_extension === 'largefile' ">
                                                        <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                            <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument1_extension === 'pdf'">                                            
                                                    <v-tooltip right color="#1565C0">
                                                    <template v-slot:activator="{ on }">
                                                        <v-card 
                                                            flat
                                                            color=""
                                                            height="198"
                                                            :block="true"
                                                            icon 
                                                            class="py-12 px-12 insurance_preview"
                                                            @click="previewPdf(otherdocument1_url)"
                                                            v-on="on">
                                                            <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                        </v-card>
                                                    </template>
                                                    <span>Click to view document</span>
                                                </v-tooltip>
                                                    
                                                <!--  -->
                                            </div>
                                        </v-card>
                                        
                                    </v-col> 

                                    <!-- <v-divider color="" :vertical="true"></v-divider> -->

                                    <!-- pannel content 2-->
                                            <v-col cols=12 sm=4 class="">

                                                <v-row class="ml-9 mb-4">
                                                    <!-- <v-icon class="">attachment</v-icon> -->

                                                    <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                        Attachment 3
                                                    </p> 
                                                </v-row>

                                                <v-text-field 
                                                v-model="otherdocument2_title"
                                                outlined 
                                                class="" 
                                                clearable 
                                                color="#4169E1"
                                                label="title"
                                                
                                                dense
                                                >
                                                        
                                                </v-text-field>
                                                
                                                <v-card flat width="250"  >

                                                    <v-file-input 
                                                        dense
                                                        :clearable="false"
                                                        placeholder="Choose a file "
                                                        id="otherdocument2" 
                                                        @change="expansionpannelfiles2()"
                                                        prepend-inner-icon="mdi-cloud-upload"
                                                        prepend-icon=""
                                                    
                                                    
                                                        outlined
                                                    >

                                                    </v-file-input>

                                                    <div v-show="otherdocument2_extension === 'jpg' || otherdocument2_extension === 'jpeg' || otherdocument2_extension === 'png'">
                                                        <v-card height="200" width="250" outlined @click="handleClick('otherdocument2',otherdocument2_url)">
                                                            <img  id="otherdocument2_thumb" :src="otherdocument2_url" class="preview">
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument2_extension === 'largefile' ">
                                                        <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                            <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                        </v-card>
                                                    </div>

                                                    <div v-show="otherdocument2_extension === 'pdf'">                                            
                                                    <v-tooltip right color="#1565C0">
                                                    <template v-slot:activator="{ on }">
                                                        <v-card 
                                                            flat
                                                            color=""
                                                            height="198"
                                                            :block="true"
                                                            icon 
                                                            class="py-12 px-12 insurance_preview"
                                                            @click="previewPdf(otherdocument2_url)"
                                                            v-on="on">
                                                            <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                        </v-card>
                                                    </template>
                                                    <span>Click to view document</span>
                                                </v-tooltip>
                                                    
                                                <!--  -->
                                            </div>
                                        </v-card>
                                    </v-col> 

                                    </v-row>

                                </v-expansion-panel-content>

                                <v-expansion-panel-content>

                                    <v-divider color="" class="mb-4" ></v-divider> 
                                    
                                    <v-row>
                                    
                                    <!-- pannel content 3-->
                                        <v-col cols=12 sm=4 class="">

                                            <v-row class="ml-9 mb-3">
                                                <!-- <v-icon class="font-weight-regular">attachment</v-icon> -->

                                                <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                    Attachment 4
                                                </p> 
                                            </v-row>

                                            <v-text-field 
                                            v-model="otherdocument3_title"
                                            outlined 
                                            class="" 
                                            clearable 
                                            color="#4169E1"
                                            label="title"
                                            dense
                                             >
                                                    
                                            </v-text-field>
                                            
                                            <v-card flat width="250"  >

                                                <v-file-input 
                                                    dense
                                                    :clearable="false"
                                                    placeholder="Choose a file"
                                                    id="otherdocument3" 
                                                    @change="expansionpannelfiles3()"
                                                    prepend-inner-icon="mdi-cloud-upload"
                                                    prepend-icon=""
                                                    
                                                    outlined
                                                >

                                                </v-file-input>

                                                <div v-show="otherdocument3_extension === 'jpg' || otherdocument3_extension === 'jpeg' || otherdocument3_extension === 'png'">
                                                    <v-card height="200" width="250" outlined @click="handleClick('otherdocument3',otherdocument3_url)">
                                                        <img  id="otherdocument3_thumb" :src="otherdocument3_url" class="preview">
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument3_extension === 'largefile' ">
                                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument3_extension === 'pdf'">                                            
                                                <v-tooltip right color="#1565C0">
                                                <template v-slot:activator="{ on }">
                                                    <v-card 
                                                        flat
                                                        color=""
                                                        height="198"
                                                        :block="true"
                                                        icon 
                                                        class="py-12 px-12 insurance_preview"
                                                        @click="previewPdf(otherdocument3_url)"
                                                        v-on="on">
                                                        <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                    </v-card>
                                                </template>
                                                <span>Click to view document</span>
                                            </v-tooltip>
                                                
                                            <!--  -->
                                        </div>
                                    </v-card>
                                </v-col> 

                                 <!-- <v-divider color="" :vertical="true"></v-divider> -->

                                 <!-- pannel content 4-->
                                        <v-col cols=12 sm=4 class="">

                                            <v-row class="ml-9 mb-3">
                                                <!-- <v-icon class="">attachment</v-icon> -->

                                                <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                    Attachment 5
                                                </p> 
                                            </v-row>

                                            <v-text-field 
                                            v-model="otherdocument4_title"
                                            outlined 
                                            class="" 
                                            clearable 
                                            color="#4169E1"
                                            label="title"
                                            dense
                                             >
                                                    
                                            </v-text-field>
                                            
                                            <v-card flat width="250"  >

                                                <v-file-input 
                                                    dense
                                                    :clearable="false"
                                                    placeholder="Choose a file"
                                                    id="otherdocument4" 
                                                    @change="expansionpannelfiles4()"
                                                    prepend-inner-icon="mdi-cloud-upload"
                                                    prepend-icon=""
                                                    
                                                    outlined
                                                >

                                                </v-file-input>

                                                <div v-show="otherdocument4_extension === 'jpg' || otherdocument4_extension === 'jpeg' || otherdocument4_extension === 'png'">
                                                    <v-card height="200" width="250" outlined @click="handleClick('otherdocument4',otherdocument4_url)">
                                                        <img  id="otherdocument4_thumb" :src="otherdocument4_url" class="preview">
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument4_extension === 'largefile' ">
                                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument4_extension === 'pdf'">                                            
                                                <v-tooltip right color="#1565C0">
                                                <template v-slot:activator="{ on }">
                                                    <v-card 
                                                        flat
                                                        color=""
                                                        height="198"
                                                        :block="true"
                                                        icon 
                                                        class="py-12 px-12 insurance_preview"
                                                        @click="previewPdf(otherdocument4_url)"
                                                        v-on="on">
                                                        <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                    </v-card>
                                                </template>
                                                <span>Click to view document</span>
                                            </v-tooltip>
                                                
                                            <!--  -->
                                        </div>
                                    </v-card>
                                    
                                </v-col> 

                                  <!-- <v-divider color="" :vertical="true"></v-divider> -->

                                <!-- pannel content 5-->
                                        <v-col cols=12 sm=4 class="">

                                            <v-row class="ml-9 mb-4">
                                                <!-- <v-icon class="">attachment</v-icon> -->

                                                <p class="font-weight-bold text-center body-1 grey_text--text mb-0 ml-5">
                                                    Attachment 6
                                                </p> 
                                            </v-row>

                                            <v-text-field 
                                            v-model="otherdocument5_title"
                                            outlined 
                                            class="" 
                                            clearable 
                                            color="#4169E1"
                                            label="title"
                                            
                                            dense
                                             >
                                                    
                                            </v-text-field>
                                            
                                            <v-card flat width="250"  >

                                                <v-file-input 
                                                    dense
                                                    :clearable="false"
                                                    placeholder="Choose a file "
                                                    id="otherdocument5" 
                                                    @change="expansionpannelfiles5()"
                                                    prepend-inner-icon="mdi-cloud-upload"
                                                    prepend-icon=""
                                                   
                                                   
                                                    outlined
                                                >

                                                </v-file-input>

                                                <div v-show="otherdocument5_extension === 'jpg' || otherdocument5_extension === 'jpeg' || otherdocument5_extension === 'png'">
                                                    <v-card height="200" width="250" outlined @click="handleClick('otherdocument5',otherdocument5_url)">
                                                        <img  id="otherdocument5_thumb" :src="otherdocument5_url" class="preview">
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument5_extension === 'largefile' ">
                                                    <v-card height="200" width="250" outline class="pt-10 largefile" >
                                                        <p class="fontweight-bold red--text title text-center mt-10 "> file size too large <br> (select another file) </p>
                                                    </v-card>
                                                </div>

                                                <div v-show="otherdocument5_extension === 'pdf'">                                            
                                                <v-tooltip right color="#1565C0">
                                                <template v-slot:activator="{ on }">
                                                    <v-card 
                                                        flat
                                                        color=""
                                                        height="198"
                                                        :block="true"
                                                        icon 
                                                        class="py-12 px-12 insurance_preview"
                                                        @click="previewPdf(otherdocument5_url)"
                                                        v-on="on">
                                                        <span style="color:#757575;" class="mb-0 title">PDF</span> <v-icon x-large>description</v-icon>
                                                    </v-card>
                                                </template>
                                                <span>Click to view document</span>
                                            </v-tooltip>
                                                
                                            <!--  -->
                                        </div>
                                    </v-card>
                                </v-col> 

                                </v-row>

                                </v-expansion-panel-content>

                            </v-expansion-panel>
                            
                            </v-expansion-panels>
                    
                    </v-card>
                </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="mt-5">
                        <v-col cols=12 md=3 v-for="(file,key) in otherFiles" :key="key">

                            <p>{{ file.file.name }} <span class="remove-file" v-on:click="removeFile( key )">Remove</span></p>

                            <div v-show="file.file.type === 'image/jpeg' || file.file.type === 'image/png'">
                               
                                <v-card height="200" width="250" outlined @click="largePreview(file.source)">
                                        <img  id="bank_statement_thumb" :src="file.source" class="preview">
                                </v-card>
                            </div>

                            <div v-show="file.file.type === 'application/pdf'">

                                    <v-card height="200" width="250" outlined >

                                        <v-btn 
                                            :block="true"
                                            icon class="mt-7" 
                                            @click="previewPdf(file.source)"
                                            >
                                            PREVIEW<v-icon x-large>mdi-file</v-icon>
                                        </v-btn>
                                        
                                    </v-card>
                            </div>

                        </v-col>
                    </v-row>

                </v-card>
            </v-card>

            

           
            <v-card col flat width="1000" class="mx-auto mb-10" color="#F5FAFF">
                <v-row class=" pa-3">

                    <v-row
                        class="fill-height"
                        align-content="center"
                        justify="center"
                        v-if="loading"          
                    >
                        <v-col
                            class="subtitle-1 text-center"
                            cols="12"
                        >
                            Creating a tender
                        </v-col>

                        <v-col cols="6">
                            <v-progress-linear
                                color="deep-purple accent-4"
                                indeterminate
                                rounded
                                height="6"
                            >
                            </v-progress-linear>
                        </v-col>
                    </v-row>
                    
                    <v-spacer></v-spacer>
            
                    <v-btn outlined color="primary" class="mx-4"  @click="cancel">Cancel</v-btn>
                    <v-btn color="primary white--text"  @click.prevent="publishTender()" :disabled="!isValid()">Publish tender</v-btn>
                </v-row>
            </v-card>

        </v-layout>

    </v-container>
    
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import Alert from '@/components/Alert.vue'
import PDFDocument from '@/components/PDFDocument'
import axios from 'axios'
import {projectMixin} from '@/mixins/mixings.js'

export default {
    name: "createtender",

    components: {Alert, PDFDocument},

    mixins: [projectMixin],

    data: ()=>({
        details:'',
        
        origin:'',
        destination:'',
        origin_region:'',
        destination_region:'',

        countries:[],
        origin_regions:[],
        destination_regions:[],

        bill_of_lading_number:'',
       
        timeline:new Date().toISOString().substr(0, 10),
        time: new Date().toISOString().substr(0, 10),
        size:'',
        currency:'',
        offer_amount:'',
        description:'',
        photos:[],
        terms:'',
        bill_of_lading:[],
        authorization_letter:[],


        otherdocument:[],
        otherdocument1:[],
        otherdocument2:[],
        otherdocument3:[],
        otherdocument4:[],
        otherdocument5:[],

        // expansion pannel
        panel: [0, 1],

        // other document in expansion pannel
        otherdocument_extension:'',
        otherdocument_url:'',
        otherdocument_title:'',

        // other document in expansion pannel 1
        otherdocument1_extension:'',
        otherdocument1_url:'',
        otherdocument1_title:'',


        // other document in expansion pannel 2
        otherdocument2_extension:'',
        otherdocument2_url:'',
        otherdocument2_title:'',

        // other document in expansion pannel 3
        otherdocument3_extension:'',
        otherdocument3_url:'',
        otherdocument3_title:'',

        // other document in expansion pannel 4
        otherdocument4_extension:'',
        otherdocument4_url:'',
        otherdocument4_title:'',

        // other document in expansion pannel 5
        otherdocument5_extension:'',
        otherdocument5_url:'',
        otherdocument5_title:'',

        field_required:false,
        field:'',
        largefilesize: false,

        loading:false,
        currencies:['USD'],
        tender_categories:[],
        tender_category:'',

        customer:[],
        
        photo_extension:'',
        photo_url:'',
        bill_of_lading_extension:'',
        bill_of_lading_url:'',
        letter_extension:'',
        letter_url:'',

        date_clicked:false,

        overlay:false,
        large_preview_url:'',

        url:'',
        pdf:false,
        pdfOverlay:false,

        choose_tender:true,

        display_file_size_error:false,

        alert: false,
        message:'',
        type:'',

        otherFiles:[],

        currentFiles:[],

        rules: {
            required: value => !!value || "Required",
            separator: value => {
                const pattern = /[1-9]?\.[0-9]*/;
                return pattern(value)
            },
            number: value => {
            const pattern = /^\d+$/;
            return pattern.test(value) || "Number only required"
            },

            min: v => v.length >= 8 || 'Min 8 characters',

            email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "invalid email";
            }
           },

    }),

    computed:{
      ...mapGetters(['tenderCreated','getCurrencies'])
    },



    methods: {

        addFiles(){

            document.getElementById("otheFiles").click();
        },

        removeFile( key ){

            this.otherFiles.splice( key, 1 );
        },

        previewPdf(url){

            this.url = url;
            this.pdfOverlay = true;
            this.pdf = true;
            
        },

        fetchOriginRegions(origin_country){

          this.origin_regions = this.getRegions(origin_country);

        },

         fetchDestinationRegions(origin_country){

          this.destination_regions = this.getRegions(origin_country);
                         
        },

        setAlert(message,type){

            this.alert = true;
            this.message = message;
            this.type = type;
        },

        closePdfViewer(){
            this.pdf = false;
            this.pdfOverlay = false;
        },

        setTenderCategory(name){

            this.choose_tender = false;

            if(name === 'Transporting')
                this.tender_category = 'Transporting';

            else if(name === 'Clearing')
                this.tender_category = 'Clearing';

        },

        getFileExtension(url){

            let position = url.lastIndexOf('.');

            let extracted_string = url.slice(position + 1, url.length + 1);

            return extracted_string;

        },

        showLargeThumbnail(id){

            this.overlay = !this.overlay

            var reader = new FileReader();

                reader.onload = function(){

                    var dataURL = reader.result;

                    var large_thumbnail = document.getElementById('large_thumbnail');
               
                    large_thumbnail.src = dataURL;
                   
                }

            reader.readAsDataURL(document.getElementById(id).files[0]);
        },

        isValid(){

            if(this.tender_category == "Transporting"){

                if(this.details == '' || this.origin == '' || this.destination == '' || this.bill_of_lading_number == ''
                    || this.timeline == '' || this.origin_region == '' || this.destination_region == '' 
                    || this.currency == ''  || this.terms =='' || this.tender_category == ''
                    || this.bill_of_lading.length == 0 || this.authorization_letter.length == 0)

                    return false
                else 
                    return true;

            } else if(this.tender_category == "Clearing"){

                if(this.details == '' || this.timeline == '' || this.currency == '' || this.terms =='' || this.bill_of_lading_number == ''
                    || this.tender_category == '' || this.bill_of_lading.length == 0 || this.authorization_letter.length == 0)

                    return false

                else 

                    return true;
            }     
        },

        ...mapActions(['AddTender','setAlert','fetchCurrencies']),

        cancel(){

            this.loading = false;

            this.$router.push('/client');
        },

        allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,

        updateFilesUploaded(){

            /*let uploadedfiles = document.getElementById("files").files;

            for(var i=0; i < uploadedfiles.length; i++){

                this.photos.push(uploadedfiles[i]); 

                 //eslint-disable-next-line no-console
                 //console.log(response.data); 
            }*/
            if(document.getElementById("files").files[0].size > 2097152){

                this.photo_extension = 'error';

            } else {

                this.photo_extension = '';

                if(document.getElementById("files").files[0])
                {

                    this.photos = [];
                    
                    this.photos.push(document.getElementById("files").files[0]);

                    this.photo_extension = this.getFileExtension(document.getElementById("files").files[0].name);

                    if(this.photo_extension === 'jpg' || this.photo_extension === 'jpeg' || this.photo_extension === 'png')
                    {
                        var reader = new FileReader();

                        reader.onload = function(){

                            var dataURL = reader.result;

                            var output = document.getElementById('files_thumb');

                            var large_thumbnail = document.getElementById('large_thumbnail');
                            
                            if(output !== null)
                                output.src = dataURL;

                            if(large_thumbnail !== null)
                                large_thumbnail.src = dataURL;
                        
                        }

                        reader.readAsDataURL(document.getElementById("files").files[0]);
                    }
                    else if(this.photo_extension === 'pdf')
                    {
                        this.photo_url = URL.createObjectURL(document.getElementById("files").files[0]);

                        this.previewPdf(this.photo_url);
                    }

                }
            }

            
        },

        /*removeFile(){
            this.photos = [];
        },*/

        validate(){

            if(this.rules.number(this.offer_amount) == 'Number only required'){

                this.field = 'Amount should be number only'
                this.field_required = true
                return false
            }
            else if(this.otherdocument.length > 0 && (this.otherdocument_title == '' || this.otherdocument_title == null)){

                    console.log(17);
                    this.field = 'Please fill title on attachment 1 '
                    this.field_required = true
                    return false

            }else if(this.otherdocument.length == 0 && (!this.otherdocument_title == '' || !this.otherdocument_title == null)){

                    console.log(18);
                    this.field = 'Please attach file on attachment 1'
                    this.field_required = true
                    return false

            }else if(this.otherdocument1.length > 0 && (this.otherdocument1_title == '' || this.otherdocument1_title == null)){

                    console.log(17);
                    this.field = 'Please fill title on attachment 2'
                    this.field_required = true
                    return false

            }else if(this.otherdocument1.length == 0 && (!this.otherdocument1_title == '' || !this.otherdocument1_title == null)){

                    console.log(18);
                    this.field = 'Please attach file on attachment 2'
                    this.field_required = true
                    return false

            }else if(this.otherdocument2.length > 0 && (this.otherdocument2_title == '' || this.otherdocument2_title == null)){

                    console.log(17);
                    this.field = 'Please fill title on attachment 3'
                    this.field_required = true
                    return false

            }else if(this.otherdocument2.length == 0 && (!this.otherdocument2_title == '' || !this.otherdocument2_title == null)){

                    console.log(18);
                    this.field = 'Please attach file on attachment 3'
                    this.field_required = true
                    return false

            }else if(this.otherdocument3.length > 0 && (this.otherdocument3_title == '' || this.otherdocument3_title == null)){

                    console.log(17);
                    this.field = 'Please fill title on attachment 4'
                    this.field_required = true
                    return false

            }else if(this.otherdocument3.length == 0 && (!this.otherdocument3_title == '' || !this.otherdocument3_title == null)){

                    console.log(18);
                    this.field = 'Please attach file on attachment 4'
                    this.field_required = true
                    return false

            }else if(this.otherdocument4.length > 0 && (this.otherdocument4_title == '' || this.otherdocument4_title == null)){

                    console.log(17);
                    this.field = 'Please fill title on attachment 5'
                    this.field_required = true
                    return false

            }else if(this.otherdocument4.length == 0 && (!this.otherdocument4_title == '' || !this.otherdocument4_title == null)){

                    console.log(18);
                    this.field = 'Please attach file on attachment 5'
                    this.field_required = true
                    return false

            }else if(this.otherdocument5.length > 0 && (this.otherdocument5_title == '' || this.otherdocument5_title == null)){

                    console.log(17);
                    this.field = 'Please fill title on attachment 6'
                    this.field_required = true
                    return false

            }else if(this.otherdocument5.length == 0 && (!this.otherdocument5_title == '' || !this.otherdocument5_title == null)){

                    console.log(18);
                    this.field = 'Please attach file on attachment 6'
                    this.field_required = true
                    return false

            }else{

                
                return true
            }
               
        },

        expansionpannelfiles(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument").files[0]){

                    this.otherdocument = [];

                    this.otherdocument.push(document.getElementById("otherdocument").files[0]);
                    
                    this.otherdocument_extension = this.getFileExtension(document.getElementById("otherdocument").files[0].name);

                    if ( this.otherdocument[0].size < 2024000){

                                if(this.otherdocument_extension === 'jpg' 
                                    || this.otherdocument_extension === 'jpeg' 
                                    || this.otherdocument_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument").files[0]);
                                } else if(this.otherdocument_extension === 'pdf') {

                                    this.otherdocument_url = URL.createObjectURL(document.getElementById("otherdocument").files[0]);

                                    this.previewPdf(this.otherdocument_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument_extension = 'largefile'
                        this.otherdocument = []

                    }                
                }
               },

        expansionpannelfiles1(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument1").files[0]){

                    this.otherdocument1 = [];

                    this.otherdocument1.push(document.getElementById("otherdocument1").files[0]);
                    
                    this.otherdocument1_extension = this.getFileExtension(document.getElementById("otherdocument1").files[0].name);

                    if ( this.otherdocument1[0].size < 2024000){

                                if(this.otherdocument1_extension === 'jpg' 
                                    || this.otherdocument1_extension === 'jpeg' 
                                    || this.otherdocument1_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument1_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument1").files[0]);
                                } else if(this.otherdocument1_extension === 'pdf') {

                                    this.otherdocument1_url = URL.createObjectURL(document.getElementById("otherdocument1").files[0]);

                                    this.previewPdf(this.otherdocument1_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument1_extension = 'largefile'
                        this.otherdocument1 = []

                    }                
                }
               },

        
         expansionpannelfiles2(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument2").files[0]){

                    this.otherdocument2 = [];

                    this.otherdocument2.push(document.getElementById("otherdocument2").files[0]);
                    
                    this.otherdocument2_extension = this.getFileExtension(document.getElementById("otherdocument2").files[0].name);

                    if ( this.otherdocument2[0].size < 2024000){

                                if(this.otherdocument2_extension === 'jpg' 
                                    || this.otherdocument2_extension === 'jpeg' 
                                    || this.otherdocument2_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument2_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument2").files[0]);
                                } else if(this.otherdocument2_extension === 'pdf') {

                                    this.otherdocument2_url = URL.createObjectURL(document.getElementById("otherdocument2").files[0]);

                                    this.previewPdf(this.otherdocument2_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument2_extension = 'largefile'
                        this.otherdocument2 = []

                    }                
                }
               },

        expansionpannelfiles3(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument3").files[0]){

                    this.otherdocument3 = [];

                    this.otherdocument3.push(document.getElementById("otherdocument3").files[0]);
                    
                    this.otherdocument3_extension = this.getFileExtension(document.getElementById("otherdocument3").files[0].name);

                    if ( this.otherdocument3[0].size < 2024000){

                                if(this.otherdocument3_extension === 'jpg' 
                                    || this.otherdocument3_extension === 'jpeg' 
                                    || this.otherdocument3_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument3_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument3").files[0]);
                                } else if(this.otherdocument3_extension === 'pdf') {

                                    this.otherdocument3_url = URL.createObjectURL(document.getElementById("otherdocument3").files[0]);

                                    this.previewPdf(this.otherdocument3_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument3_extension = 'largefile'
                        this.otherdocument3 = []

                    }                
                }
               },

        expansionpannelfiles4(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument4").files[0]){

                    this.otherdocument4 = [];

                    this.otherdocument4.push(document.getElementById("otherdocument4").files[0]);
                    
                    this.otherdocument4_extension = this.getFileExtension(document.getElementById("otherdocument4").files[0].name);

                    if ( this.otherdocument4[0].size < 2024000){

                                if(this.otherdocument4_extension === 'jpg' 
                                    || this.otherdocument4_extension === 'jpeg' 
                                    || this.otherdocument4_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument4_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument4").files[0]);
                                } else if(this.otherdocument4_extension === 'pdf') {

                                    this.otherdocument4_url = URL.createObjectURL(document.getElementById("otherdocument4").files[0]);

                                    this.previewPdf(this.otherdocument4_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument4_extension = 'largefile'
                        this.otherdocument4 = []

                    }                
                }
               },
               
        expansionpannelfiles5(){
                //this.insurance = []
                //this.insurance.push(document.getElementById("insurance").files[0])
                if(document.getElementById("otherdocument5").files[0]){

                    this.otherdocument5 = [];

                    this.otherdocument5.push(document.getElementById("otherdocument5").files[0]);
                    
                    this.otherdocument5_extension = this.getFileExtension(document.getElementById("otherdocument5").files[0].name);

                    if ( this.otherdocument5[0].size < 2024000){

                                if(this.otherdocument5_extension === 'jpg' 
                                    || this.otherdocument5_extension === 'jpeg' 
                                    || this.otherdocument5_extension === 'png')
                                {

                                    var reader = new FileReader();

                                    reader.onload = function(){

                                        var dataURL = reader.result;

                                        var output = document.getElementById('otherdocument5_thumb');

                                        var large_thumbnail = document.getElementById('large_thumbnail');
                                        
                                        if(output !== null)
                                            output.src = dataURL;

                                        if(large_thumbnail !== null)
                                            large_thumbnail.src = dataURL;
                                    
                                    }

                                    reader.readAsDataURL(document.getElementById("otherdocument5").files[0]);
                                } else if(this.otherdocument5_extension === 'pdf') {

                                    this.otherdocument5_url = URL.createObjectURL(document.getElementById("otherdocument5").files[0]);

                                    this.previewPdf(this.otherdocument5_url);


                                    /*console.log(src);
                                    console.log(output);*/

                                
                                    //this.insurance_extension = '';
                                }
                    }else{

                        this.largefilesize = true
                        this.otherdocument5_extension = 'largefile'
                        this.otherdocument5 = []

                    }                
                }
            },

        handleClick(id,src){

            //eslint-disable-next-line no-console
                        console.log("source "+src);

            if(document.getElementById(id).files[0]){

                this.showLargeThumbnail(id);

            }else {
                
                this.largePreview(src);
            }
        },

        billUpdated(){
            //this.bill_of_lading.push(document.getElementById("bill").files[0]);

            if(document.getElementById("bill").files[0].size > 2097152){

                this.bill_of_lading_extension = 'error';

            } else {

                this.bill_of_lading_extension = '';

                if(document.getElementById("bill").files[0])
                {

                    this.bill_of_lading = [];
                    
                    this.bill_of_lading.push(document.getElementById("bill").files[0]);

                    this.bill_of_lading_extension = this.getFileExtension(document.getElementById("bill").files[0].name);

                    if(this.bill_of_lading_extension === 'jpg' || this.bill_of_lading_extension === 'jpeg' || this.bill_of_lading_extension === 'png')
                    {
                        var reader = new FileReader();

                        reader.onload = function(){

                            var dataURL = reader.result;

                            var output = document.getElementById('bill_thumb');

                            var large_thumbnail = document.getElementById('large_thumbnail');
                            
                            if(output !== null)
                                output.src = dataURL;

                            if(large_thumbnail !== null)
                                large_thumbnail.src = dataURL;
                        
                        }

                        reader.readAsDataURL(document.getElementById("bill").files[0]);
                    }
                    else if(this.bill_of_lading_extension === 'pdf')
                    {
                        this.bill_of_lading_url = URL.createObjectURL(document.getElementById("bill").files[0]);

                        this.previewPdf(this.bill_of_lading_url);
                    }

            }

            }
            
        },

        letterUpdated(){
            //this.authorization_letter.push(document.getElementById("letter").files[0]);

            if(document.getElementById("letter").files[0].size > 2097152){

                this.letter_extension = 'error';

            } else {


                this.letter_extension = '';

                 if(document.getElementById("letter").files[0]){

                    this.authorization_letter = [];
                    
                    this.authorization_letter.push(document.getElementById("letter").files[0]);

                    this.letter_extension = this.getFileExtension(document.getElementById("letter").files[0].name);

                    if(this.letter_extension === 'jpg' || this.letter_extension === 'jpeg' || this.letter_extension === 'png')
                    {
                        var reader = new FileReader();

                        reader.onload = function(){

                            var dataURL = reader.result;

                            var output = document.getElementById('letter_thumb');

                            var large_thumbnail = document.getElementById('large_thumbnail');
                            
                            if(output !== null)
                                output.src = dataURL;

                            if(large_thumbnail !== null)
                                large_thumbnail.src = dataURL;
                        
                        }

                        reader.readAsDataURL(document.getElementById("letter").files[0]);
                    }

                    else if(this.letter_extension === 'pdf')
                    {
                        this.letter_url = URL.createObjectURL(document.getElementById("letter").files[0]);

                        this.previewPdf(this.letter_url);
                    }

            }

            }
            
        },

        otherAttachmentsUpdated(){

            if(document.getElementById("otheFiles").files[0]){

                if(document.getElementById("otheFiles").files[0].size >  2097152){

                    this.display_file_size_error = true;

                } else {

                    for(var i=0; i< document.getElementById("otheFiles").files.length; i++)
                {
                    var file = {
                        file:[],
                        source:''
                    }

                    if(document.getElementById("otheFiles").files[i].type === 'image/jpeg' || document.getElementById("otheFiles").files[i].type === 'image/png' )
                    {
                       

                        var reader = new FileReader();

                        reader.onload = function(){

                            var dataURL = reader.result;

                            file.source = dataURL;

                            var large_thumbnail = document.getElementById('large_thumbnail');
                            
                            if(large_thumbnail !== null)
                                large_thumbnail.src = dataURL;
                    
                        }

                        reader.readAsDataURL(document.getElementById("otheFiles").files[i]);

                        file.file = document.getElementById("otheFiles").files[i];

                        this.otherFiles.push(file);

                    }
                    else if(document.getElementById("otheFiles").files[i].type === 'application/pdf')
                    {
                        file.source = URL.createObjectURL(document.getElementById("otheFiles").files[i]);

                        this.previewPdf(file.source);

                        file.file = document.getElementById("otheFiles").files[i];

                        this.otherFiles.push(file);

                        
                    }
                }
                }

            }
         },

        createData(){

            let formData = new FormData();

            if(this.photos.length > 0){

                for( var i = 0; i < this.photos.length; i++){

                    let file = this.photos[i];

                    formData.append('cargo_photo['+i+']',file);

                }
            }

            // if(this.otherFiles.length > 0){

            //     for( var j = 0; j < this.otherFiles.length; j++ ){

            //         let file = this.otherFiles[j].file;

            //         formData.append('files[' + j + ']', file);  
            //     }
            // }
            
            if(this.otherdocument.length > 0){
                formData.append('otherfiles[0][file]', this.otherdocument[0])
                formData.append('otherfiles[0][name]', this.otherdocument_title)
            }

            if(this.otherdocument1.length > 0){
                formData.append('otherfiles[1][file]', this.otherdocument1[0])
                formData.append('otherfiles[1][name]', this.otherdocument1_title)
                }

            if(this.otherdocument2.length > 0){
                formData.append('otherfiles[2][file]', this.otherdocument2[0])
                formData.append('otherfiles[2][name]', this.otherdocument2_title)
                }

            if(this.otherdocument3.length > 0){
                formData.append('otherfiles[3][file]', this.otherdocument3[0])
                formData.append('otherfiles[3][name]', this.otherdocument3_title)
            }

            if(this.otherdocument4.length > 0){
                formData.append('otherfiles[4][file]', this.otherdocument4[0])
                formData.append('otherfiles[4][name]', this.otherdocument4_title)
            }

            if(this.otherdocument5.length > 0){
                formData.append('otherfiles[5][file]', this.otherdocument5[0])
                formData.append('otherfiles[5][name]', this.otherdocument5_title)
            }

            if(this.cargo_size !== '')
                formData.append('cargo_size',this.size);

            formData.append('bill_of_lading[0]',this.bill_of_lading[0]);
            formData.append('authorization_letter[0]',this.authorization_letter[0]);
            formData.append('cargo_details',this.details);

            if(this.offer_amount !== '')
                formData.append('customer_offer_amount',this.offer_amount);

            formData.append('customer_terms_and_conditions',this.terms);
            formData.append('customer_delivery_timeline',this.timeline);

            if(this.tender_category === 'Transporting'){

                formData.append('origin',this.origin);
                
                formData.append('destination',this.destination);

                formData.append('origin_region',this.origin_region);
                
                formData.append('destination_region',this.destination_region);

                
            }
            
            formData.append('currency',this.currency);
            formData.append('description',this.description);
            formData.append('tender_category',this.tender_category);
            formData.append('customer_verification',this.customer.is_verified);
            formData.append('customer_id',this.customer.id);
            formData.append('bill_of_lading_number',this.bill_of_lading_number);
            

            if(this.currentFiles.length > 0){

                for( var h = 0; h < this.currentFiles.length; h++ ){
                    let file_path = this.currentFiles[h]['url'];
                    let file_name = this.currentFiles[h]['name'];
                    formData.append('currentFiles[' + h + '][url]', file_path);
                    formData.append('currentFiles[' + h + '][name]', file_name);

                }
            }
            else if(this.currentFiles.length === 0)
            {
                formData.append('currentFiles[0][url]','');
                formData.append('currentFiles[0][name]','');

            }
        
            return formData;
        },

        publishTender(){

            if(this.validate())
            {

                 if(this.letter_extension === 'error' || this.bill_of_lading_extension === 'error' || this.photo_extension === 'error'){

                this.display_file_size_error = true;
            } 
            else 
            {
                this.loading = true;

                let formData = this.createData();

                if(this.tender_category === 'Transporting')
                {
                    const url = "http://207.180.215.239:9000/api/v1/tenders";
                    //const url = "http://192.168.43.27:8000/api/v1/tenders?customer_id=10";

            
                    axios.post(url,
                                formData,
                                {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                }).
                                then((response) => {

                                
                                    this.loading = false;

                                    if(response.data.genralErrorCode === 8004){

                                        //this.$router.push({path:'//client/createtender',query:{alert:response.data.message}});
                                        this.alert = false;

                                        setTimeout(()=>{

                                            this.setAlert(response.data.message,"error");
                                        },1000)
                                    }
                                    else if(response.data.genralErrorCode === 8000){

                                        //this.AddTender(response.data.objects);
                                        this.alert = false;

                                        this.$store.dispatch('setSnackbar',{
                                            text: response.data.message,
                                            color: 'success'
                                        });

                                        this.$router.push('/client');

                                    }

                                    //eslint-disable-next-line no-console
                                    //console.log(response.data);

                                }).catch(()=>{

                                    //eslint-disable-next-line no-console
                                    this.loading = false;
                                    this.alert = false;

                                    /*this.alert = "Error occured. Please try again";

                                    this.display_alert = true;

                                    document.getElementById('app').scrollIntoView();*/
                
                                    this.$store.dispatch('setSnackbar',{
                                            text: "There is a server error, Refresh a page to see your tender otherwise please create again",
                                            color: 'error'
                                        });

                                    this.$router.push('/client');
                                }); 

                } else if(this.tender_category === 'Clearing')

                {
                    const url = "http://207.180.215.239:8000/api/v1/tenders";
                    //const url = "http://192.168.43.27:8000/api/v1/tenders?customer_id=10";

                    axios.post(url,
                                formData,
                                {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                }).
                                then((response) => {

                                
                                    this.loading = false;

                                    if(response.data.genralErrorCode === 8004){

                                        //this.$router.push({path:'//client/createtender',query:{alert:response.data.message}});
                                        this.alert = false;

                                        setTimeout(()=>{

                                            this.setAlert(response.data.message,"error");
                                        },1000)
                                    }
                                    else if(response.data.genralErrorCode === 8000){

                                        //this.AddTender(response.data.objects);

                                        //this.setAlert(response.data.message);

                                        this.alert = false;

                                        this.$store.dispatch('setSnackbar',{
                                            text: response.data.message,
                                            color: 'success'
                                        });

                                        this.$router.push('/client');
                                    }

                                    //eslint-disable-next-line no-console
                                    //console.log(response.data);

                                }).catch(()=>{

                                    //eslint-disable-next-line no-console
                                    this.loading = false;

                                    this.alert = false;

                                    //this.setAlert("There is a server error, if you don't see your tender please create again");

                                    //this.setAlert(response.data.message);

                                    this.$store.dispatch('setSnackbar',{
                                        text: "There is a server error, if you don't see your tender please create again",
                                        color: 'error'
                                    });

                                    this.$router.push('/client');
                                }); 
                }
            }

            }  
        }
    },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

            console.log("TEST MIXINIG IS ......................"+vm.testMixing);

            let url = "http://207.180.215.239:8000/api/v1/agent-industries";

            axios.get(url).then((response) => 
                            {
                               
                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects[i].industry_name);

                               if(response.data.genralErrorCode === 8000){

                                   vm.alert = false;

                                   for(let i=0; i< response.data.objects.length; i++)
                                    vm.tender_categories.push(response.data.objects[i].industry_name);

                               }else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    vm.setAlert(response.data.message,"error");

                                    document.getElementById('app').scrollIntoView();
                               }

                            }).catch(()=>{

                                setTimeout(()=>{

                                    vm.setAlert("Failed to fetch industries, There is an internal server error","error");

                                },1000)
                            });


            let countries_url = "http://164.68.113.159:2000/api/v1/countries/index";

            axios.get(countries_url).then((response) => 
                {
                                
                    if(response.data.genralErrorCode === 8000){

                        for(let i=0; i< response.data.objects.length; i++)
                        {
                            vm.countries.push(response.data.objects[i].name);

                        }

                    } else if(response.data.genralErrorCode === 8004){

                        vm.alert = false;

                        setTimeout(()=>{

                            vm.setAlert(response.data.message,"error");

                        },1000)
                    }

                }).catch(()=>{

                    setTimeout(()=>{

                        vm.setAlert("There is an internal error","error");

                    },1000)
                });
                          

            let url1 = "http://207.180.215.239:8181/api/v1/customers/fetch?email="+localStorage.client;

            axios.get(url1).then((response) => 
                            {
                               
                                //eslint-disable-next-line no-console
                               //console.log(response.data.objects[i].industry_name);

                               console.log(response.data);

                               if(response.data.genralErrorCode === 8000){

                                    vm.alert = false;
                                    vm.customer = response.data.objects;

                               } else if(response.data.genralErrorCode === 8004){

                                    vm.alert = false;

                                    setTimeout(()=>{

                                     vm.setAlert(response.data.message,"error");

                                    },1000)

                               }

                            }).catch(()=>{

                                setTimeout(()=>{

                                 vm.setAlert("Failed to fetch customer, There is internal server error","error");

                                },1000)
                            });
            next();
        }) 
    },
}
</script>

<style scoped>

img.preview{
     width: 248px;
     height: 200px
 }

 .large-preview{

    /*width: 500px;
    height: 500px;*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    
 }

 img.preview:hover{
     cursor: pointer;
 }

 .fileinput{
    position: absolute;
    left: -2000px;
 }

 .tooltip{

    width:auto;
    max-width: 250px;
    background-color: #4169E1;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
 }

 .largefile{
  border-color: red;
  color: red;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0%;
  background-color: #F5FAFF;
}

</style>