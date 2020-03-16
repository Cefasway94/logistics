<template>
    <v-container class="mt-12 px-5">
        <v-card flat width="900" class="mt-12 mx-auto mb-5" color="#F5FAFF">
            <v-flex row class="px-3 ">
                <h1 class=" font-weight-regular headline ">Profile info</h1>
                <v-spacer></v-spacer>
                <v-btn color="#4169E1" class="white--text" width="100">edit</v-btn>
                </v-flex>
        </v-card>

        <v-card flat width="900" class="mt-12 mx-auto " color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="mr-5">person_outline</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Agent/transporter details</h1>
            </v-flex>
        </v-card>

        <v-card width="900" class="mt-5 mx-auto mb-5 pa-3">
            <v-flex column>
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5">ABOUT AGENT</h1>
            </v-flex>

            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Name</p>
                    <v-text-field outlined class="" clearable color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex column sm6 mb6>
                    <p class="bondy-2 mb-0">Category</p>
                    <v-select
                    outlined
                    class=""
                    style="color:#4169E1;"
                    :items="service_type"
                    color="#4169E1"
                    clearable
                    ></v-select>
                </v-flex>
                <v-flex column sm6 mb6 class="px-3">
                    <p class="bondy-2 mb-0">Tin No</p>
                    <v-text-field outlined color="#4169E1" clearable sm3 md3></v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            </v-flex>

            <v-flex column>
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5">CONTACTS</h1>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Phone number</p>
                    <v-text-field outlined class="" clearable color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">Fax</p>
                    <v-text-field outlined color="#4169E1" clearable ></v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Email</p>
                    <v-text-field outlined class="" clearable color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">P.O.Box</p>
                    <v-text-field outlined color="#4169E1" clearable ></v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            </v-flex>

            <v-flex column>
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5">LOCATION</h1>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Country</p>
                    <v-text-field outlined class="" clearable color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">City</p>
                    <v-text-field outlined color="#4169E1" clearable ></v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Region</p>
                    <v-text-field outlined class="" clearable color="#4169E1"></v-text-field>
                </v-flex>
                
            </v-flex>
            </v-flex>
        </v-card>
    
        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="">attachments</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Attachments</h1>
            </v-flex>
        </v-card>

    
        <v-card width="900" class="mt-5 mx-auto mb-5 pa-3">
            <v-row>
                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-0">Certificate</p>
                     <v-card flat color="#F5FAFF" width="200" height="150" outlined class="mx-3">
                         <v-flex class="" >
                            <v-file-input flat dropzone class="mb-0 pb-0" height="150" width="100" 
                            outlined prepend-icon="" 
                            ></v-file-input>
                         </v-flex>
                    </v-card>
                </v-col>

                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-0">Insurance</p>
                     <v-card flat color="#F5FAFF" width="200" height="150" outlined class="mx-3">
                         <v-flex class="" >
                            <v-file-input flat dropzone class="mb-0 pb-0" height="150" width="100" 
                            outlined prepend-icon="" 
                            ></v-file-input>
                         </v-flex>
                    </v-card>
                </v-col>

                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-0">Other</p>
                     <v-card flat color="#F5FAFF" width="200" height="150" outlined class="mx-3">
                         <v-flex class="" >
                            <v-file-input flat dropzone class="mb-0 pb-0" height="150" width="100" 
                            outlined prepend-icon="" 
                            ></v-file-input>
                         </v-flex>
                    </v-card>
                </v-col>         
            </v-row>
        </v-card>

        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="mr-5">announcement</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Bid terms</h1>
            </v-flex>
        </v-card>

        <v-card  width="900" class="mt-5 mx-auto px-3 pt-4" >
            <v-flex column class="pa-3 mx-12">
            <p class="bondy-2 mb-0  mb-0">Payment terms</p>
            <v-select
                class=""
                style="color:#4169E1;"
              :items="payment_terms"
              color="#4169E1"
              clearable
            >
            </v-select>
            </v-flex>
        </v-card>

        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="mr-5">account_balance</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Bank account details</h1>
            </v-flex>
        </v-card>

        <v-card  width="900" class="mt-5 mx-auto px-3 pt-4" >
            <v-flex column class="px-3 pt-3">
            <p class="bondy-2 mb-0 mb-0">Bank name</p>
            <v-text-field outlined class="" clearable color="#4169E1"></v-text-field>
            </v-flex>
            <v-flex column class="px-3">
            <p class="bondy-2 mb-0 mb-0">Account name</p>
            <v-text-field outlined class="" clearable color="#4169E1"></v-text-field>
            </v-flex>
            <v-flex column class="px-3">
            <p class="bondy-2 mb-0 mb-0">Acount number</p>
            <v-text-field outlined class="" clearable color="#4169E1"></v-text-field>
            </v-flex>
        </v-card>
    </v-container>
</template>
<script>
export default {
   data() {
       return{
       payment_terms:['Full payment', 'Pay by installments (30%, 40%, 30%)'],
       service_type:['Agent', 'Transporter', 'Both'],
    }
   },
}
</script>