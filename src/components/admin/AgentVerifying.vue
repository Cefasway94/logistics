<template>

    <v-container class="mt-12 px-5" color="#F5FAFF" fluid>

        <PDFDocument v-bind="{url,pdfOverlay}" @clicked="closePdfViewer" v-if="pdf"/>

         <v-overlay :value="overlay">
            <div class="large-preview">
                    
                    <v-row justify= "center">
                        <v-col cols=12>
                            <img  id="large_thumbnail" :src="large_preview_url" style="width:auto;height:auto;max-width:500px;max-height:500px;" >
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

        <AlertError v-if="display_alert" v-bind:message="alert"/>

        <v-card flat class="mt-10 mx-auto mb-2" color="#F5FAFF">

            <v-row  class="px-3">

                <p class="grey--text title " v-show="clearer">Agent Info</p>
                <p class="grey--text title " v-show="transporter">Transporter Info</p>
               
            </v-row>

        </v-card>

        <v-card flat class="mt-3 mx-auto mb-3" color="white">
            <v-row class="mt-3 mx-auto mb-3">
                <v-col cols=6 md=3>
                     <p class="primary--text body-1 mb-2">COMPANY NAME</p>
                     <p class="body-1">{{ agent.company_name}}</p>
                </v-col>

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">TIN NUMBER</p>
                    <p class="body-1">{{ agent.tin_number}}</p>
                </v-col>

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">P.O BOX</p>
                    <p class="body-1">{{ agent.p_o_box}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">FAX</p>
                    <p class="body-1">{{ agent.fax}}</p>
                </v-col>
            </v-row>

            <v-row class="mt-3 mx-auto mb-3">

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">COUNTRY</p>
                    <p class="body-1">{{ agent.country}}</p>
                </v-col>

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">REGION</p>
                    <p class="body-1">{{ agent.region}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">CITY</p>
                    <p class="body-1">{{ agent.city}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">BANK NAME</p>
                    <p class="body-1">{{ agent.bank_name}}</p>
                </v-col>

                
            </v-row>
    
            <v-row  class="mt-3 mx-auto mb-3">
                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">ACCOUNT NAME</p>
                    <p class="body-1">{{ agent.account_name}}</p>
                </v-col>

                <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">ACCOUNT NUMBER</p>
                    <p class="body-1">{{ agent.account_number}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">SCHEMA</p>
                    <p class="body-1">{{ agent.payment_scheme_ID}}</p>
                </v-col>

                 <v-col cols=6 md=3>
                    <p class="primary--text body-1 mb-2">CLASSIFIRCATION</p>
                    <p class="body-1">{{ agent.payment_classification_ID}}</p>
                </v-col>
            </v-row>
        </v-card>

        <v-card flat class="mt-3 mx-auto mb-3" color="#F5FAFF">
            <v-row  class="px-3">
                <p class="grey--text title ">Attachments</p>
            </v-row>
        </v-card>

        <v-card flat class="mt-3 mx-auto mb-3" color="white">

            <v-row>
                <!-- <v-col cols=12 md=4>
                <p class="primary--text body-1 mb-2"> PROFILE PHOTO</p>
                <v-card flat width="200" height="150" outlined>
                    <v-row>
                        <div 
                                    v-show="( === 'jpg') || (id_extension === 'jpeg')|| (id_extension === 'png')" 
                                    @click="largePreview(id_url)"
                                >
                                    <img :src="id_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="id_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(id_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                    </v-row>
                </v-card>
            </v-col> -->

            <v-col cols=12 md=4>

                <p class="primary--text body-1 mb-2"> CERTIFICATE</p>
                <v-card flat width="200" height="150" outlined>
                    <v-row>
                        <div 
                                    v-show="(certificate_extension === 'jpg') || (certificate_extension === 'jpeg')|| (certificate_extension === 'png')" 
                                    @click="largePreview(certificate_url)"
                                >
                                    <img :src="certificate_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="certificate_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(certificate_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                    </v-row>
                   
                </v-card>

            </v-col>
            <v-col cols=12 md=4>

                <p class="primary--text body-1 mb-2"> INSURANCE</p>
                <v-card flat width="200" height="150" outlined>
                   <v-row>
                        <div 
                                    v-show="(insurance_extension === 'jpg') || (insurance_extension === 'jpeg')|| (insurance_extension === 'png')" 
                                    @click="largePreview(insurance_url)"
                                >
                                    <img :src="insurance_url" width=200 height=150/>
                                </div>
                               
                                <div v-show="insurance_extension === 'pdf'">

                                    <v-btn 
                                        :block="true"
                                        icon class="mt-7" 
                                        @click="previewPdf(insurance_url)"
                                        >
                                        PREVIEW<v-icon x-large>mdi-file</v-icon>
                                    </v-btn>

                                </div>
                    </v-row>
                </v-card>

            </v-col>
            </v-row>
        </v-card>
        <v-card col flat width="1000" class="mx-auto mb-10" color="#F5FAFF">
            <v-row justify="center">
                <v-spacer></v-spacer>
            
                <!--<v-btn color="primary white--text">VERIFY</v-btn>-->
                <v-dialog v-model="dialog" max-width="600" persistent>
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark v-on="on">VERIFY</v-btn>
                    </template>

                    <v-card>
                        <v-card-title>
                            <span class="headline">Provide Payment Class</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols=12>
                                        <v-select
                                            required
                                            :items="payment_classes"
                                            label="Payment Class"
                                            v-model="payment_class"
                                            @change="controlSelectionChange()"
                                        >

                                        </v-select>
                                    </v-col>
                                </v-row>

                                <v-row v-show="payment_class === 'Payment Scheme'">
                                    <v-col>
                                        <v-radio-group column v-model="scheme_value">
                                            <v-radio 
                                                v-for="scheme in scheme_values" 
                                                :key="scheme.id"
                                                :label="scheme.name"
                                                :value="scheme.id"

                                            >
                                                
                                            </v-radio>
                                        </v-radio-group>
                                    </v-col>
                                </v-row>

                                <v-row v-show="payment_class === 'Payment Classification'">
                                    <v-col>
                                        <v-radio-group column v-model="class_value">
                                             <v-radio 
                                                v-for="classification in class_values" 
                                                :key="classification.id"
                                                :label="classification.name"
                                                :value="classification.id"
                                            >
                                                
                                            </v-radio>
                                        </v-radio-group>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="verifyAgent()" :disabled="!isValid()">Verify</v-btn>
                        </v-card-actions>
                    </v-card>

                </v-dialog>



            </v-row>
        </v-card>
        
    </v-container>
  
</template>

<script>
import axios from 'axios'
import AlertError from '@/components/AlertError.vue'
import PDFDocument from '@/components/PDFDocument'
export default {
    name: 'AgentVerifying',

    components:{AlertError, PDFDocument},

    data () {
        return {
           
           agent:[],

           payment_classes: ['Payment Scheme','Payment Classification'],

           scheme_values:[
               {
                   id:1,
                   name:'Percent'
               },

               {
                   id:2,
                   name:'Range'
               }
           ],

           class_values:[
               {
                   id:1,
                   name:'Starter'
               },

               {
                   id:2,
                   name:'Middle level'
               }
           ],

           payment_class:'',

           display_alert: false,
           alert:'',

           transporter:false,
           clearer: false,

           has_photo: false,

           dialog: false,

           scheme_value:'',
           class_value:'',

           url:'',
            pdf:false,
            pdfOverlay:false,

            overlay:false,

            large_preview_url:'',

            certificate_extension:'',
            insurance_extension:'',
            certificate_url:'',
            insurance_url:'',
      }
      
    },

    methods:{

        getFileName(url){

            let position = url.lastIndexOf('/');

            let extracted_string = url.slice(position + 1, url.length + 1);

            return extracted_string;

        },

        largePreview(src){

            this.large_preview_url = src;

            this.overlay = !this.overlay;

        },

        previewPdf(url){

            this.url = url;
            this.pdfOverlay = true;
            this.pdf = true;
            
        },

        closePdfViewer(){
            this.pdf = false;
            this.pdfOverlay = false;
        },

          getFileExtension(url){

            let position = url.lastIndexOf('.');

            let extracted_string = url.slice(position + 1, url.length + 1);

            return extracted_string;

        },

        controlSelectionChange(){

            if(this.payment_class == "Payment Scheme")
            {
                this.class_value = '';

            }else if(this.payment_class == "Payment Classification"){
                this.scheme_value = '';
            }
        },

        isValid(){

            if(this.payment_class == '' || (this.scheme_value == '' && this.class_value ==''))
                return false;
            else 
                return true;
        },

        verifyAgent(){

            this.dialog = false;

            if(this.$route.params.type === 'Clearing'){

                let formData = new FormData();

                if(this.scheme_value != '')
                    formData.append('scheme',this.scheme_value);
                else if(this.class_value !='' )
                    formData.append('class',this.class_value);

                const url = `http://207.180.215.239:8000/api/v1/agents/verify/${this.agent.email}`;

                axios.post(url,formData).then((response) => 
                {
                               
                    //eslint-disable-next-line no-console
                    //console.log(response.data.objects[i].industry_name);

                    if(response.data.genralErrorCode === 8000)
                    {
                       this.display_alert = false;

                       this.$router.push('/admin');

                    } else if(response.data.genralErrorCode === 8004){

                        this.display_alert = false;

                        this.alert = response.data.message;

                        this.display_alert = true;

                        document.getElementById('app').scrollIntoView();
                    }

                }).catch(()=>
      
                {

                    /*vm.alert = "Error occured. Please try again";

                    vm.display_alert = true;

                    document.getElementById('app').scrollIntoView();*/                      
                });

            } else if(this.$route.params.type === 'Transporting'){

                const url = `http://207.180.215.239:9000/api/v1/transporters/verify/${this.agent.email}`;

                let formData = new FormData();

                if(this.scheme_value != '')
                    formData.append('scheme',this.scheme_value);
                else if(this.class_value !='' )
                    formData.append('class',this.class_value);

              
                axios.post(url,formData).then((response) => 
                {
                               
                    //eslint-disable-next-line no-console
                    //console.log(response.data.objects[i].industry_name);

                    
                    if(response.data.genralErrorCode === 8000)
                    {
                        this.display_alert = false;

                        this.$router.push('/admin');

                    } else if(response.data.genralErrorCode === 8004){

                        this.display_alert = false;

                        this.alert = response.data.message;

                        this.display_alert = true;

                        document.getElementById('app').scrollIntoView();
                    }

                }).catch(()=>
      
                {

                    /*vm.alert = "Error occured. Please try again";

                    vm.display_alert = true;

                    document.getElementById('app').scrollIntoView();*/                      
                });



            }


        },

        forceFileDownload(response){

            let filename = this.getFileName(this.url);

            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', filename) //or any other extension
            document.body.appendChild(link)
            link.click()
      },

      downloadPhoto(){
          
        axios({
            //url: this.agent.profile_image[0],
            url: this.url,
            method: 'GET',
            responseType: 'blob' // important

        }).then((response) => {

            let filename = this.getFileName(this.url);

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
        });
    },

    downloadCertificate(){
          
        axios({
            //url: this.agent.certificate[0],
            url: this.url,
            method: 'GET',
            responseType: 'blob' // important

        }).then((response) => {

            this.forceFileDownload(response);
        });
    },

     downloadInsurance(){
          
        axios({
             url: this.url,
            //url: this.agent.insurance[0],

            method: 'GET',

            responseType: 'blob' // important

        }).then((response) => {
            this.forceFileDownload(response);
        });
    },
},

    beforeRouteEnter(to,from,next){
        next(vm=>{

            if(vm.$route.params.type === 'Clearing'){

                vm.clearer = true;

                const agent = `http://207.180.215.239:8000/api/v1/agents/${vm.$route.params.id}`;

                 axios.get(agent).then((response) => 
                {
                               
                    //eslint-disable-next-line no-console
                    //console.log(response.data.objects[i].industry_name);

                    if(response.data.genralErrorCode === 8000)
                    {
                        /*vm.display_alert = false;

                        vm.agent = response.data.objects;

                        if(vm.agent.profile_image.length > 0)
                            vm.has_photo = true;*/

                        vm.agent = response.data.objects;

                        if(vm.agent.certificate !== null)
                        {
                            vm.certificate_extension = vm.getFileExtension(vm.agent.certificate[0]);

                            vm.certificate_url = vm.agent.certificate[0];
                        }

                         if(vm.agent.insurance !== null)
                        {
                            vm.insurance_extension = vm.getFileExtension(vm.agent.insurance[0]);

                            vm.insurance_url = vm.agent.insurance[0];
                        }

                    } else if(response.data.genralErrorCode === 8004){

                        vm.display_alert = false;

                        vm.alert = response.data.message;

                        vm.display_alert = true;

                        document.getElementById('app').scrollIntoView();
                    }

                }).catch(()=>
      
                {

                    /*vm.alert = "Error occured. Please try again";

                    vm.display_alert = true;

                    document.getElementById('app').scrollIntoView();*/                      
                });

            } else if(vm.$route.params.type === 'Transporting'){

                vm.transporter = true;

                const transporter = `http://207.180.215.239:9000/api/v1/transporters/${vm.$route.params.id}`;

                axios.get(transporter).then((response) => 
                {
                               
                    //eslint-disable-next-line no-console
                    //console.log(response.data.objects[i].industry_name);

                    if(response.data.genralErrorCode === 8000)
                    {
                        vm.display_alert = false;

                        vm.agent = response.data.objects;

                        if(vm.agent.certificate !== null)
                        {
                            vm.certificate_extension = vm.getFileExtension(vm.agent.certificate[0]);

                            vm.certificate_url = vm.agent.certificate[0];
                        }

                        if(vm.agent.insurance !== null)
                        {
                            vm.insurance_extension = vm.getFileExtension(vm.agent.insurance[0]);

                            vm.insurance_url = vm.agent.insurance[0];
                        }

                    } else if(response.data.genralErrorCode === 8004){

                        vm.display_alert = false;

                        vm.alert = response.data.message;

                        vm.display_alert = true;

                        document.getElementById('app').scrollIntoView();
                    }

                    }).catch(()=>
      
                    {

                        
                       /*vm.alert = "Error occured. Please try again";

                        vm.display_alert = true;

                        document.getElementById('app').scrollIntoView();  */                     
                    });
            }
            next();
        });
    }
}
</script>

<style>

</style>