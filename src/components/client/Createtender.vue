<template>
    <v-container class="pa-3 mt-10 mx-auto">

        <v-layout class="pa-3 mt-10">
            <v-card row flat class="mx-auto" width="1300" color="#F5FAFF" >
                <v-row>
                <h3 class="headline mt-1 font-weight-regular">Create new tender</h3>
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
                            v-model="details">
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0">ORIGIN</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="origin">
                            </v-text-field>
                        </v-col>

                        <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0">DESTINATION</p>
                            <v-text-field 
                            outlined 
                            clearable
                            v-model="destination">
                            </v-text-field>
                        </v-col>
                        </v-row>

                        <v-row class="px-3">
                            <v-row >
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> DELIVERY TIMELINE </p>
                                <v-text-field 
                                outlined 
                                clearable
                                v-model="timeline">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> CARGO SIZE </p>
                                <v-text-field 
                                outlined 
                                clearable
                                v-model="size">
                                </v-text-field>
                            </v-col>
                            </v-row>

                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> CURRENCY</p>
                                <v-text-field 
                                outlined 
                                clearable
                                v-model="currency">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <p class="primary--text body-2 text-uppercase mb-0"> OFFER AMOUNT </p>
                                <v-text-field 
                                outlined 
                                clearable
                                v-model="offer_amount">
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
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
                            <v-col>
                            <p class="primary--text body-2 text-uppercase mb-0"> TERMS AND CONDITION </p>
                            <v-textarea
                            outlined 
                            clearable
                            :auto-grow = "true"
                            v-model="terms">
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
                    <v-row class="pa-3">
                        <v-col class="">
                        <p class="primary--text body-2 text-uppercase mb-0"> CARGO PHOTO </p>
                        <v-card flat width="200" height="150" outlined>

                            <v-file-input multiple label="File input"></v-file-input>
                            
                        </v-card>
                        </v-col>  
                                      
                    </v-row>
                </v-card>
            </v-card>

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
                    <v-btn outlined color="primary" class="mx-4">Cancel</v-btn>
                    <v-btn color="primary white--text" type="submit" @click="publishTender">Publish tender</v-btn>
                </v-row>
            </v-card>

        </v-layout>

    </v-container>
    
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "createtender",

    data: ()=>({
        details:'',
        origin:'',
        destination:'',
        timeline:'',
        size:'',
        currency:'',
        offer_amount:'',
        description:'',
        file:{},
        terms:''
    }),

    methods: {

        ...mapActions(['AddTender']),

        publishTender(){

            const tender = {
                cargo_details: this.details,
                cargo_photo: this.file,
                description: this.description,
                customer_offer_amount : this.offer_amount,
                customer_terms_and_conditions: this.terms,
                customer_delivery_timeline: this.timeline,
                origin: this.origin,
                destination: this.destination,
                currency: this.currency
            }

            this.AddTender(tender);

            this.$router.push('/client');
        
            //alert("Publish tender");
        }
    }
}
</script>