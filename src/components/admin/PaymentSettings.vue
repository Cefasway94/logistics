<template>
    <center>
        <v-container class="mt-12 ml-0">

            <Alert v-if="alert" v-bind="{message,type}"/>

          
            <!-- <v-alert type="success" v-if="alert">
                {{ message }}
            </v-alert> -->
          
           

            <Message/>

            <v-row>
                <v-col>
                    <p class="black--text font-weight-bold title">Settings</p>
                </v-col>
                <v-col>
                    <router-link to="/admin/verify-payment">
                        <v-icon color="blue">mdi-chevron-left</v-icon>
                        <span class="primary--text">BACK TO ALL PAYMENTS</span>
                    </router-link>
                    
                </v-col>
            </v-row>

            <v-row class="ml-6">
                
                <v-row>
                    <div class="table">

                        <v-data-table
                            :headers="payment_settings_headers"
                            :items="payment_settings"
                            :disable-pagination="true"
                            :disable-sort="true"
                            :hide-default-footer="true"
                        >

                            <template v-slot:top>
                                <v-toolbar flat color="#f5f9ff">
                                    <v-toolbar-title>Payment Settings</v-toolbar-title>
                                    <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                    ></v-divider>

                                    <v-spacer></v-spacer>

                                    <v-dialog v-model="payment_setting_dialog" max-width="500px">
                                        <template v-slot:activator="{ on }">
                                            <v-btn color="primary" dark class="mb-2" v-on="on">ADD NEW</v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                            <span class="headline">{{ payment_settings_form_title }}</span>
                                            </v-card-title>

                                            <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="12">

                                                            <p class=" body-1 mb-0 text-capitalize">Setting Name </p>
                                                            <v-text-field  
                                                                v-model="payment_setting.setting_name" 
                                                                :rules="[v => !!v || 'Setting name is required']">

                                                                <template #label>
                                                                    <span class="red--text"><strong>* </strong></span>
                                                                </template>

                                                            </v-text-field>
                                                        </v-col>

                                                        <v-col cols="12" sm="6" md="6">

                                                            <p class=" body-1 mb-0 text-capitalize">Setting Value </p>
                                                            <v-select

                                                                v-model="payment_setting.setting_value"
                                                                style="color:#4169E1;"
                                                                :items="payment_scheme_names"
                                                                color="#4169E1"
                                                                :rules="[v => !!v || 'Setting value is required']"
                                                                required
                                                            >     
                                                                <template #label>
                                                                    <span class="red--text"><strong>* </strong></span>
                                                                </template>

                                                            </v-select>

                                                        </v-col>

                                                        <v-col cols="12" sm="6" md="6">

                                                            <p class=" body-1 mb-0 text-capitalize">Setting Group </p>

                                                            <v-select
                                                            
                                                                v-model="payment_setting.group_ID"
                                                                style="color:#4169E1;"
                                                                :items="classification_names"
                                                                color="#4169E1"
                                                                :rules="[v => !!v || 'Setting group is required']"
                                                                required
                                                            >     
                                                                <template #label>
                                                                    <span class="red--text"><strong>* </strong></span>
                                                                </template>

                                                            </v-select>

                                                        </v-col>
                                                        
                                                    </v-row>
                                                </v-container>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="blue darken-1" text @click="closePaymentSettingDialog">Cancel</v-btn>
                                                <v-btn color="blue darken-1" text :disabled="paymentSettingValidation" @click="savePaymentSetting">Save</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>

                            <template v-slot:item.actions="{ item }">
                                
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editPaymentSetting(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <!--<v-icon
                                    small
                                    @click="deletePaymentSetting(item)"
                                >
                                    mdi-delete
                                </v-icon>-->
                            </template>

                        </v-data-table>
                        
                    </div>
                </v-row>

            </v-row>


            <v-row class="ml-6 mt-8">
                <v-row>
                    <div class="table">

                        <v-data-table
                            :headers="payment_scheme_headers"
                            :items="payment_schemes"
                            :disable-pagination="true"
                            :disable-sort="true"
                            :hide-default-footer="true"
                        >

                            <template v-slot:top>
                                <v-toolbar flat color="#f5f9ff">
                                    <v-toolbar-title>Payment Schemes</v-toolbar-title>
                                    <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                    ></v-divider>
                                    <v-spacer></v-spacer>
                                    <v-dialog v-model="payment_scheme_dialog" max-width="500px">
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="primary" dark class="mb-2" v-on="on">ADD NEW</v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                        <span class="headline">{{ payment_scheme_form_title }}</span>
                                        </v-card-title>

                                        <v-card-text>
                                        <v-container>
                                            <v-row>
                                            <v-col cols="12" sm="6" md="4">

                                                <p class=" body-1 mb-0 text-capitalize">Name</p>
                                                <v-text-field  
                                                    v-model="payment_scheme.name" 
                                                    :rules="[v => !!v || 'Name is required']"
                                                    required
                                                >
                                                    <template #label>
                                                                <span class="red--text"><strong>* </strong></span>
                                                    </template>
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">

                                                <p class=" body-1 mb-0 text-capitalize">Formular</p>
                                                <v-text-field  
                                                    v-model="payment_scheme.formular" 
                                                    :rules="[v => !!v || 'Formular is required']"
                                                    required
                                                >
                                                    <template #label>
                                                                <span class="red--text"><strong>* </strong></span>
                                                    </template>
                                                </v-text-field>
                                            </v-col>
                                            <!--<v-col cols="12" sm="6" md="4">
                                                <v-text-field  label="Fat (g)"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field  label="Carbs (g)"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field  label="Protein (g)"></v-text-field>
                                            </v-col>-->
                                            </v-row>
                                        </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="closePaymentSchemeDialog">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text :disabled="paymentSchemeValidation" @click="savePaymentScheme">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>

                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editPaymentScheme(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <!--<v-icon
                                    small
                                    @click="deletePaymentScheme(item)"
                                >
                                    mdi-delete
                                </v-icon>-->
                            </template>

                        </v-data-table>
                        
                    </div>
                </v-row>

            </v-row>

            <v-row class="ml-5 mt-8">
                <v-row class="">
                    <div class="table">

                        <v-data-table
                            :headers="classification_headers"
                            :items="classifications"
                            :disable-pagination="true"
                            :disable-sort="true"
                            :hide-default-footer="true"
                        >
                            <template v-slot:top>
                                <v-toolbar flat color="#f5f9ff">
                                    <v-toolbar-title>Classification</v-toolbar-title>
                                    <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                    ></v-divider>
                                    <v-spacer></v-spacer>
                                    <v-dialog v-model="classification_dialog" max-width="500px">
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="primary" dark class="mb-2" v-on="on">ADD NEW</v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                        <span class="headline">{{ classification_form_title}}</span>
                                        </v-card-title>

                                        <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">

                                                    <p class=" body-1 mb-0 text-capitalize">Name</p>
                                                    <v-text-field  
                                                        v-model="classification.name" 
                                                        :rules="[v => !!v || 'Name is required']"
                                                        required
                                                    >
                                                        <template #label>
                                                            <span class="red--text"><strong>* </strong></span>
                                                        </template>

                                                    </v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="closeClassificationDialog">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text :disabled="classificationValidation" @click="saveClassification">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>

                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editClassification(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <!--<v-icon
                                    small
                                    @click="deleteClassification(item)"
                                >
                                    mdi-delete
                                </v-icon>-->
                            </template>

                        </v-data-table>
                        
                    </div>
                </v-row>

            </v-row>

        </v-container>
    </center>
</template>
<script>
    import axios from 'axios'
    import Alert from '@/components/Alert.vue'
    import Message from '@/components/Message.vue'
    export default {
        
        data(){
            return {
                payment_settings_headers:[
                    {
                        text: 'Setting Name',
                        align: 'start',
                        value: 'setting_name',
                        class:'primary--text blue lighten-5 body-1 font-weight-bold', 
                    },
                    { text: 'Setting Value', class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'setting_value' },
                    { text: 'Group ID',  class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'group_ID' },
                    { text: 'Actions',  class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'actions' },
                   
                ],

                payment_scheme_headers:[

                    {
                        text: 'Name',
                        align: 'start',
                        value: 'name',
                        class:'primary--text blue lighten-5 body-1 font-weight-bold', 
                    },

                    { text: 'Formula', class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'formular' },
                    { text: 'Scheme ID',  class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'scheme_ID' },
                    { text: 'Actions',  class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'actions' },

                ],

                classification_headers:[

                    {
                        text: 'Group ID',
                        align: 'start',
                        value: 'group_ID',
                        class:'primary--text blue lighten-5 body-1 font-weight-bold', 
                    },

                    { text: 'Name', class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'name' },
                    { text: 'Actions',  class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'actions' },
                ],

                payment_settings:[],
                classifications:[],
                payment_schemes:[],

                payment_setting_dialog:false,
                payment_scheme_dialog:false,
                classification_dialog:false,

                payment_scheme_edited:false,
                payment_setting_edited:false,
                classification_edited:false,

                payment_setting:{
                    id:'',
                    setting_name:'',
                    setting_value:'',
                    group_ID:'',
                },

                payment_scheme:{
                    id:'',
                    name:'',
                    formular:''
                },

                classification:{
                    id:'',
                    group_ID:'',
                    name:''
                },

                payment_scheme_names:[],
                classification_names:[],

                alert: false,
                message:'',
                type:'',
                overlay:false,

            }
        },

        components:{Alert,Message},

        methods:{
            
            setAlert(message,type){

                this.alert = true;
                this.message = message;
                this.type = type;
            },

            saveClassification(){

                if(this.classification_edited)
                {
                     //editing

                    this.classification_dialog = false;
                    this.classification_edited = false;

                    const edit_classification_url = 'http://207.180.215.239:8002/api/settinggroup/update/'+this.classification.id

                    let formData = new FormData();

                    formData.append('name',this.classification.name);
                   
                    axios.post(edit_classification_url,formData,
                                {
                                    headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).
                    
                            then((response) => {

                            if(response.data.genralErrorCode === 8000){

                                this.alert = false;

                                setTimeout(()=>{

                                    this.setAlert(response.data.message,"success");

                                    this.$router.push('/admin/payment-settings');
                                    this.$router.go('/admin/payment-settings');
                                },1000)

                            } else if(response.data.genralErrorCode === 8004){

                                this.alert = false;

                                    setTimeout(()=>{

                                        this.setAlert(response.data.message,"error");
                                },1000)
                            }

                        }).catch(()=>{

                            setTimeout(()=>{

                                this.setAlert("There is internal server error","error");

                            },1000)

                        });
                }
                else {

                    this.classification_dialog = false;

                    const add_classification_url = 'http://207.180.215.239:8002/api/settinggroup/create'

                    axios.post(add_classification_url,this.classification).

                        then((response) => {

                            if(response.data.genralErrorCode === 8000){

                                this.alert = false;

                                setTimeout(()=>{

                                    this.setAlert(response.data.message,"success");

                                    this.$router.push('/admin/payment-settings');
                                    this.$router.go('/admin/payment-settings');
                                },1000)

                            } else if(response.data.genralErrorCode === 8004){

                                this.alert = false;

                                    setTimeout(()=>{

                                        this.setAlert(response.data.message,"error");
                                },1000)
                            }

                        }).catch(()=>{

                            setTimeout(()=>{

                                this.setAlert("There is internal server error","error");

                            },1000)

                        });
                }
            },

            closeClassificationDialog()
            {
                this.classification_dialog = false;

                this.classification_edited = false;
            },
            
            editClassification(item){

                console.log("classfication" + item.name);
                
                 console.log("classfication GID" + item.group_ID);
                this.classification_edited = true;

                this.classification_dialog = true;

                this.classification = item;

                
            
            },

            savePaymentSetting(){

                if(this.payment_setting_edited){

                    //editing

                    this.payment_setting_dialog = false;
                    this.payment_setting_edited = false;

                    const edit_payment_url = 'http://207.180.215.239:8002/api/paymentsetting/update/'+this.payment_setting.id

                    let formData = new FormData();

                    formData.append('setting_name',this.payment_setting.setting_name);
                    formData.append('setting_value',this.payment_setting.setting_value);
                    formData.append('group_ID',this.payment_setting.group_ID);

                    axios.post(edit_payment_url,formData,
                                {
                                    headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).
                    
                            then((response) => {

                            if(response.data.genralErrorCode === 8000){

                                this.alert = false;

                                setTimeout(()=>{

                                    this.setAlert(response.data.message,"success");

                                    this.$router.push('/admin/payment-settings');
                                    this.$router.go('/admin/payment-settings');
                                },1000)

                            } else if(response.data.genralErrorCode === 8004){

                                this.alert = false;

                                    setTimeout(()=>{

                                        this.setAlert(response.data.message,"error");
                                },1000)
                            }

                        }).catch(()=>{

                            setTimeout(()=>{

                                this.setAlert("There is internal server error","error");

                            },1000)

                        });


                } else {

                    //creating

                    this.payment_setting_dialog = false;

                    const add_payment_url = 'http://207.180.215.239:8002/api/paymentsetting/create'

                    axios.post(add_payment_url,this.payment_setting).

                        then((response) => {

                            if(response.data.genralErrorCode === 8000){

                                this.alert = false;

                                setTimeout(()=>{

                                    this.setAlert(response.data.message,"success");

                                    this.$router.push('/admin/payment-settings');
                                    this.$router.go('/admin/payment-settings');
                                },1000)

                            } else if(response.data.genralErrorCode === 8004){

                                this.alert = false;

                                    setTimeout(()=>{

                                        this.setAlert(response.data.message,"error");
                                },1000)
                            }

                        }).catch(()=>{

                            setTimeout(()=>{

                                this.setAlert("There is internal server error","error");

                            },1000)

                        });
                }

            },

            closePaymentSettingDialog(){

                this.payment_setting_dialog = false;

                this.payment_setting_edited = false;
            },

            editPaymentSetting(item){


                this.payment_setting_edited = true;

                this.payment_setting_dialog = true;

                this.payment_setting = item;

                this.getPaymentScheme();
                this.getClassification();

            },

            getPaymentScheme(){
                //getting all payment settings
                const payment_scheme_url = "http://207.180.215.239:8002/api/paymentscheme/scheme_by_ID/"+this.payment_setting.setting_value

                axios.get(payment_scheme_url).then((response) => 
                    {
                                        
                        //eslint-disable-next-line no-console
                        //console.log(response.data.objects[i].industry_name);

                    if(response.data.genralErrorCode === 8000)
                    {
                        this.payment_setting.setting_value = response.data.objects.name;

                       
                        //eslint-disable-next-line no-console
                        //console.log(this.payment_settings);

                    } else if(response.data.genralErrorCode === 8004){

                        this.alert = false;

                       setTimeout(()=>{

                            this.setAlert(response.data.message,"error");
                        },1000)
                    }

                    }).catch(()=>
                
                    {
                        setTimeout(()=>{

                            this.setAlert("There is an internal error","error","error");
                        },1000)
                    });
            },

            getClassification(){
                //getting all payment settings
                const classification_url = "http://207.180.215.239:8002/api/settinggroup/group_by_ID/"+this.payment_setting.group_ID

                axios.get(classification_url).then((response) => 
                    {
                                        
                        //eslint-disable-next-line no-console
                        //console.log(response.data.objects[i].industry_name);

                    if(response.data.genralErrorCode === 8000)
                    {
                        this.payment_setting.group_ID = response.data.objects.name;

                       
                        //eslint-disable-next-line no-console
                        //console.log(this.payment_settings);

                    } else if(response.data.genralErrorCode === 8004){

                        this.alert = false;

                       setTimeout(()=>{

                            this.setAlert(response.data.message,"error");
                        },1000)
                    }

                    }).catch(()=>
                
                    {
                        setTimeout(()=>{

                            this.setAlert("There is an internal error","error","error");
                        },1000)
                    });
            },

            savePaymentScheme(){

                //adding payment scheme

                if(this.payment_scheme_edited){
                    
                    //editing

                    this.payment_scheme_dialog = false;
                    this.payment_scheme_edited = false;

                    const edit_scheme_url = 'http://207.180.215.239:8002/api/paymentscheme/update/'+this.payment_scheme.id

                    let formData = new FormData();

                    formData.append('name',this.payment_scheme.name);
                    formData.append('formular',this.payment_scheme.formular);

                    axios.post(edit_scheme_url,formData,
                                {
                                    headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).
                    
                            then((response) => {

                            if(response.data.genralErrorCode === 8000){

                                this.alert = false;

                                setTimeout(()=>{

                                    this.setAlert(response.data.message,"success");

                                    this.$router.push('/admin/payment-settings');
                                    this.$router.go('/admin/payment-settings');
                                },1000)

                            } else if(response.data.genralErrorCode === 8004){

                                this.alert = false;

                                    setTimeout(()=>{

                                        this.setAlert(response.data.message,"error");
                                },1000)
                            }

                        }).catch(()=>{

                            setTimeout(()=>{

                                this.setAlert("There is internal server error","error");

                            },1000)

                        });

                } else {

                    //creating

                this.payment_scheme_dialog = false;

                const add_scheme_url = 'http://207.180.215.239:8002/api/paymentscheme/create'

                axios.post(add_scheme_url,this.payment_scheme).

                    then((response) => {

                        if(response.data.genralErrorCode === 8000){

                            this.alert = false;

                            setTimeout(()=>{

                                this.setAlert(response.data.message,"success");

                                this.$router.push('/admin/payment-settings');
                                this.$router.go('/admin/payment-settings');
                            },1000)

                        } else if(response.data.genralErrorCode === 8004){

                            this.alert = false;

                                setTimeout(()=>{

                                    this.setAlert(response.data.message,"error");
                            },1000)
                        }

                    }).catch(()=>{

                        setTimeout(()=>{

                            this.setAlert("There is internal server error","error");

                        },1000)

                    });
                }

                

            },

            editPaymentScheme(item){

                this.payment_scheme_edited = true;

                this.payment_scheme_dialog = true;

                this.payment_scheme = item;

            },

            closePaymentSchemeDialog()
            {
                this.payment_scheme_dialog = false;
                this.payment_scheme_edited = false;
            },

            fetchPaymentSettings(){

                //getting all payment settings
                const payment_settings_url = "http://207.180.215.239:8002/api/paymentsetting/index"

                axios.get(payment_settings_url).then((response) => 
                    {
                                        
                        //eslint-disable-next-line no-console
                        //console.log(response.data.objects[i].industry_name);

                    if(response.data.genralErrorCode === 8000)
                    {
                        this.payment_settings = response.data.objects;

                       
                        //eslint-disable-next-line no-console
                        //console.log(this.payment_settings);

                    } else if(response.data.genralErrorCode === 8004){

                        this.alert = false;

                       setTimeout(()=>{

                            this.setAlert(response.data.message,"error");
                        },1000)
                    }

                    }).catch(()=>
                
                    {
                        setTimeout(()=>{

                            this.setAlert("There is an internal error","error","error");
                        },1000)
                    });
            },

            fetchPaymentScheme(){

                //getting all payment settings
                const payment_schemes_url = "http://207.180.215.239:8002/api/paymentscheme/index"

                axios.get(payment_schemes_url).then((response) => 
                    {
                                        
                        //eslint-disable-next-line no-console
                        //console.log(response.data.objects[i].industry_name);

                    if(response.data.genralErrorCode === 8000)
                    {

                        //console.log("SCHEMES");
                        //console.log(response.data.objects);

                        this.payment_schemes = response.data.objects;

                        if(this.payment_schemes.length > 0)
                        {
                             for(let i=0; i< this.payment_schemes.length; i++)
                                this.payment_scheme_names.push(this.payment_schemes[i].name);
                        }

                        //eslint-disable-next-line no-console
                        //console.log(this.payment_settings);

                    } else if(response.data.genralErrorCode === 8004){

                        this.alert = false;

                        setTimeout(()=>{

                            this.setAlert(response.data.message,"error");

                        },1000)
                    }

                    }).catch(()=>
                
                    {
                        setTimeout(()=>{

                         this.setAlert("There is an internal error","error");
                        },1000)                    
                    });
            },

            fetchClassification(){

                //getting all payment settings
                const classification_url = "http://207.180.215.239:8002/api/settinggroup/index"

                axios.get(classification_url).then((response) => 
                    {
                                        
                        //eslint-disable-next-line no-console
                        //console.log(response.data.objects[i].industry_name);

                    if(response.data.genralErrorCode === 8000)
                    {

                        this.classifications = response.data.objects;

                        if(this.classifications.length > 0)
                        {
                             for(let i=0; i< this.classifications.length; i++)
                                this.classification_names.push(this.classifications[i].name);
                        }

                        //eslint-disable-next-line no-console
                        //console.log(this.payment_settings);

                    } else if(response.data.genralErrorCode === 8004){

                        this.alert = false;

                        setTimeout(()=>{

                            this.setAlert(response.data.message,"error");
                        },1000)
                    }

                    }).catch(()=>
                
                    {
                         setTimeout(()=>{

                            this.setAlert("There is an internal error","error");
                        },1000)
                    });
            },

        },

        created(){
            this.fetchPaymentSettings();
            this.fetchPaymentScheme();
            this.fetchClassification();
        },

        computed:{

            payment_scheme_form_title(){

                return this.payment_scheme_edited? 'Edit Payment Scheme':'New Payment Scheme';
            },

            payment_settings_form_title(){

                return this.payment_setting_edited? 'Edit Payment Setting':'New Payment Setting';
            },

            classification_form_title(){

                return this.classification_edited? 'Edit Classification':'New Classification';
            },

            paymentSettingValidation()
            {
                if(this.payment_setting.setting_name == '' || this.payment_setting.setting_value == '' || this.payment_setting.setting_group == '')
                    return true
                else 
                    return false;
            },

            paymentSchemeValidation()
            {
                if(this.payment_scheme.name == '' || this.payment_scheme.formular == '')
                    return true
                else 
                    return false;
            },

            classificationValidation()
            {
                if(this.classification.name == '')
                    return true
                else 
                    return false;
            },
        }
    }
</script>
<style scoped>

.table{
    position:relative;
    left:20%;
    width: 60%;
}
</style>