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
                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0">CARGO DETAILS</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.cargo_details"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0">ORIGIN</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.origin">
                            </v-text-field>
                        </v-col>

                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0">DESTINATION</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="tender.destination">
                            </v-text-field>
                        </v-col>
                        </v-row>

                        <v-row class="px-3">
                            <v-row wrap>
                                <v-col xs12 sm6 md4 lg4 xl4>
                                    <p class="primary--text body-2 text-uppercase mb-0"> DELIVERY TIMELINE </p>
                                    <v-text-field 
                                        outlined 
                                        clearable
                                        v-model="tender.customer_delivery_timeline">
                                    </v-text-field>
                                </v-col>

                                <v-col xs12 sm6 md4 lg4 xl4>
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
        tender:[]
    }),

    computed:{
        ...mapGetters(['getTender']),
 
    },

    methods:{
        ...mapActions(['updateTender','fetchAllTenders']),

        setCustomerDetails(){
            this.tender = this.getTender;
        },

        editTender(){

            let updatedTender = {           

                cargo_details: this.tender.cargo_details,
                currency: this.tender.currency,
                cargo_size: this.tender.cargo_size,
                destination: this.tender.destination,
                description: this.tender.description,
                customer_offer_amount: this.tender.customer_offer_amount,
                customer_terms_and_conditions: this.tender.customer_terms_and_conditions,
                customer_delivery_timeline: this.tender.customer_delivery_timeline,
                origin: this.tender.origin,
                customer_id:10,

            }

            
            axios.put(`http://192.168.1.44:8000/api/v1/tenders/${this.tender.id}`,updatedTender).
                    then((response)=>{
                  
                        //eslint-disable-next-line no-console
                        //console.log(res.data);

                        //this.$router.push('/client');
                        
                        //this.$router.push({path:'/client',query:{alert:'Customer has been edited'}});//then(window.location.load);

                        this.$router.push({path:'/client',query:{alert:response.data.message}});

                    }).catch(()=>{

                        //eslint-disable-next-line no-console
                        console.log("Error occured");
                    });
                    
        }
   },

   mounted(){
       this.setCustomerDetails();
   },

    beforeRouteEnter (to, from, next) { 
        next(vm => { 

        //access to component's instance using `vm` .
        //this is done because this navigation guard is called before the component is created.           
        vm.setCustomerDetails();
        next();
  }) 
} 

}
</script>