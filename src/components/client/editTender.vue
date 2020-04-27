<template>
    <v-container class="pa-3 mt-10 mx-auto">

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
                        <v-col xs12 sm6 md4 lg4 xl4>
                            <p class="primary--text body-2 text-uppercase mb-0">CARGO DETAILS</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.cargo_details"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col xs12 sm6 md4 lg4 xl4 v-show="tender.tender_type == 'Transporting'">
                            <p class="primary--text body-2 text-uppercase mb-0">ORIGIN</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.origin">
                            </v-text-field>
                        </v-col>

                        <v-col xs12 sm6 md4 lg4 xl4 v-show="tender.tender_type == 'Transporting'">
                            <p class="primary--text body-2 text-uppercase mb-0">DESTINATION</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.destination">
                            </v-text-field>
                        </v-col>

                        <v-col xs12 sm6 md4 lg4 xl4 v-show="tender.tender_type == 'Clearing'">
                                    <p class="primary--text body-2 text-uppercase mb-0"> CARGO SIZE </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.cargo_size">
                                    </v-text-field>
                                </v-col>
                        </v-row>

                        <v-row class="px-3">
                            
                            <v-row wrap>
                                <v-col xs12 sm6 md4 lg4 xl4 v-show="tender.tender_type == 'Clearing'">
                                    <p class="primary--text body-2 text-uppercase mb-0"> CARGO SIZE </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.cargo_size">
                                    </v-text-field>
                                </v-col>
                            

                                <v-col xs12 sm6 md4 lg4 xl4>
                                    <p class="primary--text body-2 text-uppercase mb-0"> CURRENCY</p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.currency">
                                    </v-text-field>
                                </v-col>

                                <v-col xs12 sm6 md4 lg4 xl4>
                                    <p class="primary--text body-2 text-uppercase mb-0"> OFFER AMOUNT </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.customer_offer_amount">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>

                        <v-row>
                            <v-col
                                offset="2"
                                align-self="center"
                                cols='2'  
                            >
                                <p class="primary--text body-2 text-uppercase mb-0"> DELIVERY TIMELINE </p>
                            </v-col>
                            <v-col
                                col="9"  
                            >
                                <v-date-picker 
                                    v-model="tender.customer_delivery_timeline"
                                    full-width>
                                </v-date-picker>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col xs12>
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
                            <v-col xs12>
                                <p class="primary--text body-2 text-uppercase mb-0"> TERMS AND CONDITION </p>
                                <v-textarea
                                    outlined 
                                    clearable
                                    :auto-grow = "true"
                                    v-model="tender.customer_terms_and_conditions">
                                </v-textarea>
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
                    <v-spacer></v-spacer>
                    <v-btn outlined color="primary" class="mx-4" router to="/client">Cancel</v-btn>
                    <v-btn color="primary white--text" type="submit" @click="editTender">Edit tender</v-btn>
                </v-row>
            </v-card>

        </v-layout>

    </v-container>
    
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import axios from 'axios'

export default {
    name: "createtender",

    data: ()=>({

        tender:[],

        customer:[]
       
    }),

    computed:{
        ...mapGetters(['getTender','getAlert']),
 
    },

    methods:{
        ...mapActions(['updateTender','fetchAllTenders','setAlert']),

        setCustomerDetails(){
            //this.tender = this.getTender;
        },

        //allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,

        editTender(){

            if(this.$route.params.tender_type == "Transporting") {

                let formData = new FormData();

                formData.append('cargo_details',this.tender.cargo_details);
                formData.append('currency',this.tender.currency);
                formData.append('cargo_size',this.tender.cargo_size);
                formData.append('description',this.tender.description);
                formData.append('customer_offer_amount',this.tender.customer_offer_amount);
                formData.append('customer_terms_and_conditions',this.tender.customer_terms_and_conditions);
                formData.append('customer_delivery_timeline',this.tender.customer_delivery_timeline);
                formData.append('origin',this.tender.origin);
                formData.append('destination',this.tender.destination);
                formData.append('customer_id',this.customer.id);


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

                        this.setAlert(response.data.message);

                        this.$router.push('/client');

                    }).catch(()=>{

                        //eslint-disable-next-line no-console
                        console.log("Error occured");
                    });

            } else if(this.$route.params.tender_type == "Clearing"){

                let formData = new FormData();

                formData.append('cargo_details',this.tender.cargo_details);
                formData.append('currency',this.tender.currency);
                formData.append('cargo_size',this.tender.cargo_size);
                formData.append('description',this.tender.description);
                formData.append('customer_offer_amount',this.tender.customer_offer_amount);
                formData.append('customer_terms_and_conditions',this.tender.customer_terms_and_conditions);
                formData.append('customer_delivery_timeline',this.tender.customer_delivery_timeline);
                formData.append('customer_id',this.customer.id);


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

                        this.setAlert(response.data.message);

                        this.$router.push('/client');

                    }).catch(()=>{

                        //eslint-disable-next-line no-console
                        console.log("Error occured");
                    });
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
                               
                //eslint-disable-next-line no-console
                //console.log(response.data.objects[i].industry_name);

                vm.customer = response.data.objects;

            }).catch(()=>{

                 // response = null;
                //commit('setOnProgressTenders',response)
            });

        

        if(vm.$route.params.tender_type == "Transporting"){

             //eslint-disable-next-line no-console
                        console.log("Tender type is 1");
                        
            axios.get(`http://207.180.215.239:9000/api/v1/tenders/${vm.$route.params.id}`).
                    then((response)=>{
                  
                         //eslint-disable-next-line no-console
                        //console.log(response.data.objects);

                        //this.$router.push('/client');
                        
                        //this.$router.push({path:'/client',query:{alert:'Customer has been edited'}});//then(window.location.load);

                        //this.$router.push({path:'/client',query:{alert:response.data.message}});

                        //this.setAlert(response.data.message);

                        //this.$router.push('/client');
                        vm.tender = response.data.objects;

                     

                    }).catch(()=>{

                        //eslint-disable-next-line no-console
                        console.log("Error occured");
                    });
        } else if(vm.$route.params.tender_type == "Clearing" ){

                    //eslint-disable-next-line no-console
                        console.log("CLEARING::::::::::");

            axios.get(`http://207.180.215.239:8000/api/v1/tenders/${vm.$route.params.id}`).
                    then((response)=>{
                  
                       
                        //this.$router.push('/client');
                        
                        //this.$router.push({path:'/client',query:{alert:'Customer has been edited'}});//then(window.location.load);

                        //this.$router.push({path:'/client',query:{alert:response.data.message}});

                        //this.setAlert(response.data.message);

                        //this.$router.push('/client');

                         //eslint-disable-next-line no-console
                        console.log(response.data.objects);

                         vm.tender = response.data.objects;

                         

                    }).catch(()=>{

                        //eslint-disable-next-line no-console
                        console.log("Error occured");
                    });
        }

        next();
  }) 
} 

}
</script>