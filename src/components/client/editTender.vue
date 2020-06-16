<template>
    <v-container class="pa-3 mt-10 mx-auto">

        <Alert v-if="alert" v-bind="{message,type}"/>

        <PDFDocument v-bind="{url,pdfOverlay}" @clicked="closePdfViewer" v-if="pdf"/>

        <DOCDocument v-bind="{docType, docValue, docOverlay}" @clicked="closeDocViewer" v-if="doc"/>

        <v-overlay :value="overlay">
            <div class="large-preview">

                <v-row justify= "center">
                    <v-col cols=12>
                        <img  id="large_thumbnail" width="500px" :src="large_preview_url" height="500px">
                    </v-col>

                    <v-col class="mt-0" offset="4">
                        <v-btn
                            largedoc
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

        <v-layout class="pa-3 mt-10">
            <v-card row flat class="mx-auto" width="1300" color="#F5FAFF" >
                <v-row>
                <h3 class="headline mt-1 font-weight-regular">Edit Tender</h3>
                <v-spacer></v-spacer>
                <v-btn outlined color="primary" class="mx-4" router to="/client">Cancel</v-btn>
                </v-row>
            </v-card>
        </v-layout>

    
        <v-layout column class="pa-3 px-auto" justify-center>
            <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
                <v-row>
                <v-icon color="grey" class="mb-4 ml-3 mr-5">list_alt</v-icon>
                <p class="grey--text title">Cargo details</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-form>
                    <v-container>
                        <v-row>                         
                        <v-col cols="12" md="6">
                            <p class="primary--text body-2 text-uppercase mb-0">TENDER NAME</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.cargo_details"
                            :rules="[v => !!v || 'Tender name is required']"
                            required
                            >
                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>

                            </v-text-field>
                        </v-col>
                        

                        <v-col cols="12" md="6">
                                    <p class="primary--text body-2 text-uppercase mb-0"> CARGO SIZE </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.cargo_size">
                                    </v-text-field>
                                </v-col>
                        </v-row>

                        <v-row class="px-3">
                            <v-col cols="12" md="6" v-if="tender.tender_type == 'Transporting'">
                            <p class="primary--text body-2 text-uppercase mb-0">ORIGIN</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.origin"
                            :rules="[v => !!v || 'Origin is required']"
                            required>

                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" md="6" v-if="tender.tender_type == 'Transporting'">
                            <p class="primary--text body-2 text-uppercase mb-0">DESTINATION</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.destination"
                            :rules="[v => !!v || 'Destination is required']"
                            required
                            >
                                <template #label>
                                    <span class="red--text"><strong>* </strong></span>
                                </template>

                            </v-text-field>
                        </v-col>
                        </v-row>
                        <v-row class="px-3">
                            
                            <v-row wrap>
                                <v-col cols="12" md="4">
                                    <p class="primary--text body-2 text-uppercase mb-0"> CURRENCY</p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.currency"
                                        :rules="[v => !!v || 'Currency is required']"
                                        required>

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <p class="primary--text body-2 text-uppercase mb-0"> OFFER AMOUNT </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.customer_offer_amount"
                                        @change="isValid()"
                                        :rules="[v => !!v || 'Amount is required']"
                                        required>

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                    </v-text-field>
                                </v-col>

                                <v-col
                                    cols='12' 
                                    md="4" 
                                >
                                    <p class="primary--text body-2 text-uppercase mb-0"> DELIVERY TIMELINE</p>

                                    <v-text-field 
                                        v-model="tender.customer_delivery_timeline"
                                        :rules="[v => !!v || 'Date is required']"
                                        required
                                        @click="date_clicked = true"
                                        >

                                        <template #label>
                                            <span class="red--text"><strong>* </strong></span>
                                        </template>

                                    </v-text-field>

                                    <v-date-picker 
                                        v-model="tender.customer_delivery_timeline"
                                        v-show="date_clicked"
                                        :min="timeline"
                                        full-width
                                        @change="date_clicked = false">
                                    </v-date-picker>

                                </v-col>
                            </v-row>
                        </v-row>

                        <v-row>
                            <v-col cols=12>
                                <p class="primary--text body-2 text-uppercase mb-0"> DESCRIPTION ON CARGO </p>
                                <v-textarea
                                    outlined 
                                    clearable
                                    :auto-grow = "true"
                                    v-model="tender.description">
                                </v-textarea>
                            </v-col>
                        </v-row>

                         <v-row>
                            <v-col cols=12>
                                <p class="primary--text body-2 text-uppercase mb-0"> TERMS AND CONDITION </p>
                                <v-textarea
                                    outlined 
                                    clearable
                                    :auto-grow = "true"
                                    v-model="tender.customer_terms_and_conditions"
                                    :rules="[v => !!v || 'Terms required']"
                                    required>

                                    <template #label>
                                        <span class="red--text"><strong>* </strong></span>
                                    </template>

                                </v-textarea>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols=12>
                                <v-flex class="pt-3" >
                                    <center>
                                    <p class="mb-0 body-1 red--text">
                                        Supported file types : <span class="font-weight-bold">.PDF .JPG .PNG .JPEG</span>
                                    </p>
                                    </center>
                                </v-flex>
                            </v-col>
                            

                            <v-col cols=12 md=4>
                                <p class="primary--text body-2 text-uppercase mb-0">CARGO PHOTO </p>
                                <v-card flat width="250" height="270" outlined >
                                    <v-file-input 

                                        :clearable="true"
                                        placeholder="Choose a file"
                                        id="photo"
                                        @change="photoUpdated()"
                                        prepend-icon ="mdi-cloud-upload"
                                    
                                    
                                    >
                                    </v-file-input>

                                    <div v-show="photo_extension === 'jpg' || photo_extension === 'jpeg' || photo_extension === 'png'">
                                        <v-card height="200" width="250" outlined @click="handleClick('photo',photo_url)">
                                            <img  id="photo_thumb" :src="photo_url" class="preview">
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

                            <v-col cols=12 md=4>
                                <p class="primary--text body-2 text-uppercase mb-0">BILL OF LADING </p>

                                <v-tooltip bottom content-class="tooltip">
                                    <template v-slot:activator="{ on }">
                                        
                                        <v-card flat width="250" v-on="on" height="270" outlined >
                                            <v-file-input 

                                                :clearable="true"
                                                placeholder="Choose a file"
                                                id="bill"
                                                @change="billOfLadingUpdated()"
                                                prepend-icon ="mdi-cloud-upload"
                                            
                                            
                                            >
                                            </v-file-input>

                                            <div v-show="(bill_of_lading_extension === 'jpg' || bill_of_lading_extension === 'jpeg' || bill_of_lading_extension === 'png')">
                                                <v-card height="200" width="250" outlined @click="handleClick('bill',bill_of_lading_url)">
                                                    <img  id="bill_thumb" :src="bill_of_lading_url" class="preview">
                                                </v-card>
                                            </div>

                                            <div v-show="(bill_of_lading_extension === 'pdf')">

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

                            <v-col cols=12 md=4>
                                <p class="primary--text body-2 text-uppercase mb-0">AUTHORIZATION LETTER </p>

                                <v-tooltip bottom content-class="tooltip">
                                    <template v-slot:activator="{ on }">

                                        <v-card flat width="250" v-on="on" height="270" outlined >
                                            <v-file-input 

                                                :clearable="false"
                                                placeholder="Choose a file"
                                                id="letter"
                                                @change="letterUpdated()"
                                                prepend-icon ="mdi-cloud-upload"
                                            
                                            
                                            >
                                            </v-file-input>

                                            <div v-show="letter_extension === 'jpg' || letter_extension === 'jpeg' || letter_extension === 'png'">
                                                <v-card height="200" width="250" outlined @click="handleClick('letter',letter_url)">
                                                    <img  id="letter_thumb" :src="letter_url" class="preview">
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
                                            <div v-show="letter_extension === 'doc' || letter_extension === 'docx' || letter_extension === 'xlsx' || letter_extension === 'pptx' || letter_extension === 'ppt' || letter_extension === 'xls' ">
                                                <v-btn 
                                                    :block="true"
                                                    icon class="mt-7" 
                                                    @click="previewDoc(letter_url)"
                                                    >
                                                    PREVIEW<v-icon x-large>mdi-download</v-icon>
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


                        <v-row class="mt-5" v-if="currentFiles.length > 0">

                        <v-col cols=12><p class="primary--text body-1 mb-2"> OTHER DOCUMENTS</p></v-col>

                        <v-col cols=12 md=4 v-for="(file,key) in currentFiles" :key="key">

                            <p><span class="red--text" style="cursor:pointer" v-on:click="removeCurrentFile( key )">Remove</span></p>

                             <p class="mt-3 ml-3 body-1">{{file.name}}</p>
                            <v-card flat width="200" height="150" outlined>

                                <v-row>
                                    <v-col >

                                        <div 
                                            v-show="(getFileExtension(file.url) === 'jpg') || (getFileExtension(file.url) === 'jpeg') || (getFileExtension(file.url) === 'png')" 
                                            @click="largePreview(file.url)"
                                        >
                                
                                            <v-img 
                                                :src="file.url"  
                                                class="mb-0 pb-0 oxoImg" 
                                                height="147" 
                                                width="200" >
                                            </v-img>
                                        </div>
                                    
                                        <div v-show="getFileExtension(file.url) === 'pdf'">

                                            <v-btn 
                                                :block="true"
                                                icon class="mt-7" 
                                                @click="previewPdf(file.url)"
                                                >
                                                PREVIEW<v-icon x-large>mdi-file</v-icon>
                                            </v-btn>

                                        </div>
                                        <div v-show="getFileExtension(file.url) === 'doc' || getFileExtension(file.url) === 'docx' || getFileExtension(file.url) === 'ppt' || getFileExtension(file.url) === 'pptx' || getFileExtension(file.url) === 'xlsx' || getFileExtension(file.url) === 'xls'">

                                            <v-btn 
                                                :block="true"
                                                icon class="mt-7" 
                                                @click="previewDoc(file.url)"
                                                >
                                                PREVIEW<v-icon x-large>mdi-file</v-icon>
                                            </v-btn>

                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols=12>

                           
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
                    </v-container>
                    </v-form>

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
                            <p class="primary--text body-2 text-uppercase mb-0"> CARGO PHOTO </p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Photo input" 
                                    id="files" 
                                    @change="updateFilesUploaded()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col> 

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> BILL OF LADING</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Bill of lading" 
                                    id="bill"
                                    @change="billUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col>   

                        <v-col class="">
                            <p class="primary--text body-2 text-uppercase mb-0"> AUTHORIZATION LETTER</p>
                            <v-card flat width="200" height="150" outlined >

                                <v-file-input 
                                    label="Authorization letter" 
                                    id="letter"
                                    @change="letterUpdated()"
                                    prepend-icon ="mdi-cloud-upload"
                                >
                                </v-file-input>
                            </v-card>
                       
                        </v-col>   
                                      
                    </v-row>
                </v-card>

            </v-card>-->

            <!--<v-card col flat width="1300" class="mx-auto mb-5" color="#F5FAFF">
                <v-row>
                 <v-icon color="grey" class="mb-4 ml-3 mr-5">person_outline</v-icon> 
                <p class="grey--text title ">Client details</p>
                </v-row>
                <v-card width="1300" class="mx-auto pa-3">
                    <v-form>
                    <v-container>
                        <v-row>
                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0"> NAME </p>
                            <v-text-field 
                            outlined 
                            clearable>
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0">LOCATION</p>
                            <v-text-field 
                            outlined 
                            clearable>
                            </v-text-field>
                        </v-col>
                        </v-row>

                        <v-row>
                            <v-row >
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> PHONE NUMBER </p>
                                <v-text-field 
                                outlined 
                                clearable>
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> FAX </p>
                                <v-text-field 
                                outlined 
                                clearable>
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> EMAIL  </p>
                                <v-text-field 
                                outlined 
                                clearable>
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> P.O.BOX </p>
                                <v-text-field 
                                outlined 
                                clearable>
                                </v-text-field>
                            </v-col>
                        </v-row>                        
                    </v-container>
                    </v-form>
                </v-card>
            </v-card>-->

            <v-card col flat width="1300" class="mx-auto mb-10" color="#F5FAFF">
                <v-row class=" pa-3">
                    <v-col cols="6"
                        class="fill-height"
                        align-content="center"
                        justify="center"
                        v-show="loading"
                    >
                        <v-progress-linear
                            color="deep-purple accent-4"
                            indeterminate
                            rounded
                            height="6"
                        >
                        </v-progress-linear>
                    </v-col>

                    <v-spacer></v-spacer>
                    <v-btn outlined color="primary" class="mx-4" router to="/client">Cancel</v-btn>
                    <v-btn color="primary white--text"  @click="editTender()" :disabled="!isValid()"><span v-show="tender.tender_status !== 'rejected'">SAVE</span><span v-show="tender.tender_status === 'rejected'">PUBLISH</span></v-btn>
                </v-row>
            </v-card>
        </v-layout>

    </v-container>
    
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import Alert from '@/components/Alert.vue'
import axios from 'axios'
import PDFDocument from '@/components/PDFDocument'
import DOCDocument from '@/components/DOCDocument'

export default {
    name: "createtender",

    data: ()=>({

        tender:[],

        customer:[],

        timeline:new Date().toISOString().substr(0, 10),
       
        photo_extension:'',
        photo_url:'',
        bill_of_lading_extension:'',
        bill_of_lading_url:'',
        letter_extension:'',
        letter_url:'',

        overlay:false,
        loading: false,

        date_clicked: false,

        photo:[],
        bill_of_lading:[],
        letter:[],

        large_preview_url:'',

        url:'',
        pdf:false,
        pdfOverlay:false,

        alert: false,
        message:'',
        type:'',

        display_file_size_error:false,

        file_size_error:false,

        otherFiles:[],

        currentFiles:[],
        
        files:[],

        docType:'',
        docValue:'',
        docOverlay: false,
        doc:false,

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

       
    }),

     components:{PDFDocument,Alert,DOCDocument},

    computed:{
        ...mapGetters(['getTender']),
 
    },

    methods:{
        ...mapActions(['updateTender','fetchAllTenders']),

        addFiles(){



            document.getElementById("otheFiles").click();
        },

        removeFile( key ){
            this.otherFiles.splice( key, 1 );
        },

        removeCurrentFile(key){

            this.currentFiles.splice( key, 1 );
        },

        setAlert(message,type){

            this.alert = true;
            this.message = message;
            this.type = type;
        },

        setCustomerDetails(){
            //this.tender = this.getTender;
        },

        previewPdf(url){

            this.url = url;
            this.pdfOverlay = true;
            this.pdf = true;
            
        },

        previewDoc(url){
            this.docValue = url;
            this.docOverlay = true;
            this.docType = 'office';
            this.doc =true;
        },

        closePdfViewer(){
            this.pdf = false;
            this.pdfOverlay = false;
        },

        closeDocViewer(){
            this.doc = false;
            this.docOverlay = false;
        },

        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

        },

        getFileExtension(url){

            let position = url.lastIndexOf('.');

            //let position = url.substr(0, url.lastIndexOf('.'));

            //console.log(position)

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

        handleClick(id,src){

            if(document.getElementById(id).files[0]){

                this.showLargeThumbnail(id);

            }else {
                
                this.largePreview(src);
            }
        },

        //allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,

        isValid(){

            if(this.$route.params.tender_type == "Transporting"){

                if(this.tender.cargo_details == '' || this.tender.origin == '' || this.tender.destination == '' || this.tender.customer_delivery_timeline == ''
                    || this.tender.currency == '' || this.tender.customer_offer_amount == '' || this.tender.customer_terms_and_conditions =='')

                    return false
                else 
                    return true;

            } else if(this.$route.params.tender_type == "Clearing"){

                if(this.tender.cargo_details == '' || this.tender.customer_delivery_timeline == '' || this.tender.currency == '' || 
                    this.tender.customer_offer_amount == '' || this.tender.customer_terms_and_conditions =='')

                    return false

                else 

                    return true;
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
        
        letterUpdated()
        {
            if(document.getElementById("letter").files[0].size > 2097152){

                this.letter_extension = 'error';

            }
            else{

                this.letter_extension = '';

                if(document.getElementById("letter").files[0]){


                    this.letter = [];

                    this.letter.push(document.getElementById("letter").files[0]);

                    let extension = this.getFileExtension(document.getElementById("letter").files[0].name);

                    if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                    {
                        this.letter_extension = extension;

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
                    else if(extension === 'pdf')
                    {
                        this.letter_extension = extension;

                        this.letter_url = URL.createObjectURL(document.getElementById("letter").files[0]);

                        this.previewPdf(this.letter_url);
                    }
                    else if(extension === 'doc' || extension === 'ppt' || extension === 'docx' || extension === 'xlsx' || extension === 'xls' || extension === 'pptx' )
                    {
                        this.letter_extension = extension;

                        this.letter_url = URL.createObjectURL(document.getElementById("letter").files[0]);

                        console.log(this.letter_url);

                        this.previewDoc('http://oxobucket.s3-us-west-1.amazonaws.com/1591859863_file-sample_100kB.doc');
                    }
   
                }
            }

            
        }, 

        photoUpdated()
        {
            if(document.getElementById("photo").files[0].size > 2097152){

                this.photo_extension = 'error';

            }
            else{

                this.photo_extension = '';

                if(document.getElementById("photo").files[0]){


                    this.photo = [];

                    this.photo.push(document.getElementById("photo").files[0]);

                    let extension = this.getFileExtension(document.getElementById("photo").files[0].name);

                    if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                    {
                        this.photo_extension = extension;

                        var reader = new FileReader();

                        reader.onload = function(){

                            var dataURL = reader.result;

                            var output = document.getElementById('photo_thumb');

                            var large_thumbnail = document.getElementById('large_thumbnail');
                            
                            if(output !== null)
                                output.src = dataURL;

                            if(large_thumbnail !== null)
                                large_thumbnail.src = dataURL;
                        
                        }

                        reader.readAsDataURL(document.getElementById("photo").files[0]);

                    } 
                    else if(extension === 'pdf')
                    {
                        this.photo_extension = extension;

                        this.photo_url= URL.createObjectURL(document.getElementById("photo").files[0]);

                        this.previewPdf(this.photo_url);
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

        billOfLadingUpdated()
        {
            if(document.getElementById("bill").files[0].size > 2097152){

                this.bill_of_lading_extension = 'error';

            }
            else{

                this.bill_of_lading_extension = ' ';

                 if(document.getElementById("bill").files[0]){


                    this.bill_of_lading = [];

                    this.bill_of_lading.push(document.getElementById("bill").files[0]);

                    let extension = this.getFileExtension(document.getElementById("bill").files[0].name);

                    if(extension === 'jpg' || extension === 'jpeg' || extension === 'png')
                    {
                        this.bill_of_lading_extension = extension;

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
                    else if(extension === 'pdf')
                    {
                        this.bill_of_lading_extension = extension;


                        this.bill_of_lading_url= URL.createObjectURL(document.getElementById("bill").files[0]);

                        this.previewPdf(this.bill_of_lading_url);
                    }
                }
            }
        },

        createData(tender_type){

            let formData = new FormData();
            
            if(tender_type === "Transporting")
            {
                formData.append('origin',this.tender.origin);
                formData.append('destination',this.tender.destination);
            }

            formData.append('cargo_details',this.tender.cargo_details);
            formData.append('currency',this.tender.currency);
            formData.append('cargo_size',this.tender.cargo_size);
            formData.append('description',this.tender.description);
            formData.append('customer_offer_amount',this.tender.customer_offer_amount);
            formData.append('customer_terms_and_conditions',this.tender.customer_terms_and_conditions);
            formData.append('customer_delivery_timeline',this.tender.customer_delivery_timeline);
            formData.append('customer_id',this.customer.id);

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

            if(this.photo.length > 0)
                formData.append('cargo_photo[0]',this.photo[0]);
                
            if(this.letter.length > 0)
                formData.append('bill_of_lading[0]',this.letter[0]);

            if(this.bill_of_lading.length > 0)
                formData.append('authorization_letter[0]',this.bill_of_lading[0]);


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

         validate(){

                if(this.otherdocument.length > 0 && (this.otherdocument_title == '' || this.otherdocument_title == null)){

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

        editTender(){


            if(this.validate())
            {

                if(this.letter_extension === 'error' || this.photo_extension === 'error' || this.bill_of_lading_extension === 'error'){

                this.display_file_size_error = true;
            }
            else {

                this.loading = true;

                if(this.$route.params.tender_type === "Transporting") {

                    let formData = this.createData("Transporting")

                    axios.post(`http://207.180.215.239:9000/api/v1/tenders/${this.tender.id}`,formData,
                            {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                            }).
                        then((response)=>{
                    
                            //eslint-disable-next-line no-console
                            //console.log(res.data);

                            //this.$router.push('/client');
                            
                            //this.$router.push({path:'/client',query:{alert:'Customer has been edited'}});//then(window.location.load);

                            //this.$router.push({path:'/client',query:{alert:response.data.message}});

                            if(response.data.genralErrorCode === 8000)
                            {
                                //this.setAlert(response.data.message);

                                this.alert = false;

                                this.$store.dispatch('setSnackbar',{
                                    text: response.data.message,
                                    color: 'success'
                                });

                                this.$router.push('/client');
                            

                            } else if(response.data.genralErrorCode === 8004){

                                this.loading = false;

                                this.alert = false;

                                setTimeout(()=>{

                                    this.setAlert(response.data.message,"error");
                                },1000)
                            }

                        

                        }).catch(()=>{

                            this.loading = false;

                            setTimeout(()=>{

                                this.setAlert("There is internal server error","error");

                            },1000)

                        });

                } else if(this.$route.params.tender_type == "Clearing"){

                    let formData = this.createData("Clearing");

                    axios.post(`http://207.180.215.239:8000/api/v1/tenders/${this.tender.id}`,

                                formData,
                                {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                }
                        ).
                        then((response)=>{
                    
                            //eslint-disable-next-line no-console
                            //console.log(res.data);

                            //this.$router.push('/client');
                            
                            //this.$router.push({path:'/client',query:{alert:'Customer has been edited'}});//then(window.location.load);

                            //this.$router.push({path:'/client',query:{alert:response.data.message}});

                            if(response.data.genralErrorCode === 8000)
                            {

                                this.alert = false;

                                this.$store.dispatch('setSnackbar',{
                                    text: response.data.message,
                                    color: 'success'
                                });

                                this.$router.push('/client');
                                
                            } else if(response.data.genralErrorCode === 8004){

                                this.loading = false;

                            this.alert = false;

                                setTimeout(()=>{

                                    this.setAlert(response.data.message,"error");
                                },1000)

                                
                            }

                        }).catch(()=>{

                            //eslint-disable-next-line no-console
                            console.log("Error occured");

                            this.loading = false;

                            setTimeout(()=>{

                                this.setAlert("There is internal server error","error");

                            },1000)
                        });
                }

            } 
            }

                   
        }
   },

   mounted(){
       //this.setCustomerDetails();
   },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created.           
        //vm.setCustomerDetails();

        let url1 = "http://207.180.215.239:8181/api/v1/customers/fetch?email="+localStorage.client;

        axios.get(url1).then((response) => 
            {
                               
                if(response.data.genralErrorCode === 8000){

                    vm.customer = response.data.objects;

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

        

        if(vm.$route.params.tender_type == "Transporting"){

                        
            axios.get(`http://207.180.215.239:9000/api/v1/tenders/${vm.$route.params.id}`).
                    then((response)=>{
                  
                        if(response.data.genralErrorCode === 8000)
                        {
                            vm.alert = false;

                            vm.tender = response.data.objects;

                            if(vm.tender.cargo_photo !== null)
                            {
                                vm.photo_extension = vm.getFileExtension(vm.tender.cargo_photo[0]);

                                vm.photo_url = vm.tender.cargo_photo[0];
                            }

                                if(vm.tender.bill_of_lading !== null)
                            {
                                vm.bill_of_lading_extension = vm.getFileExtension(vm.tender.bill_of_lading[0]);

                                vm.bill_of_lading_url = vm.tender.bill_of_lading[0];
                            }

                                if(vm.tender.authorization_letter !== null)
                            {
                                vm.letter_extension = vm.getFileExtension(vm.tender.authorization_letter[0]);

                                vm.letter_url = vm.tender.authorization_letter[0];
                            }

                            if(vm.tender.files !== null)
                            {
                                vm.currentFiles = vm.tender.files;
                            }

                        }
                        if(response.data.genralErrorCode === 8004){

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
        } else if(vm.$route.params.tender_type == "Clearing" ){

            axios.get(`http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`).
                    then((response)=>{
                  
                        if(response.data.genralErrorCode === 8000)
                        {
                            vm.alert = false;

                            vm.tender = response.data.objects;

                            if(vm.tender.cargo_photo !== null)
                            {
                                vm.photo_extension = vm.getFileExtension(vm.tender.cargo_photo[0]);

                                vm.photo_url = vm.tender.cargo_photo[0];
                            }

                                if(vm.tender.bill_of_lading !== null)
                            {
                                vm.bill_of_lading_extension = vm.getFileExtension(vm.tender.bill_of_lading[0]);

                                vm.bill_of_lading_url = vm.tender.bill_of_lading[0];
                            }

                            if(vm.tender.authorization_letter !== null)
                            {
                                vm.letter_extension = vm.getFileExtension(vm.tender.authorization_letter[0]);

                                vm.letter_url = vm.tender.authorization_letter[0];
                            }

                            if(vm.tender.files !== null)
                            {
                                vm.currentFiles = vm.tender.files;
                            }

                        }
                        else if(response.data.genralErrorCode === 8004){

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
        }

        next();
  }) 
} 

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

 .fileinput{
    position: absolute;
    left: -2000px;
 }

 .largefile{
  border-color: red;
  color: red;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0%;
  background-color: #F5FAFF;
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

 .progress { z-index: 1;}

 img.preview:hover{
     cursor: pointer;
 }

</style>