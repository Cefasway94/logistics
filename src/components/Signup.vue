<template>
    <v-app style="background-color:transparent; ">
        <v-card 
        class="my-auto pa-3"
        width="480" flat
        color="transparent" >
            <v-card-title  class="justify-center">
                <h2 class="primary--text text-center " >UBALORI</h2>
            </v-card-title>
            <v-card-text>
                <p class="text-center font-weight-regular body-2">Welcome, please register to create your account</p>
            </v-card-text>
            <v-form class="px-8">

                    <v-flex row class="jusutify-space-between ">
                        <v-flex column xs4 sm4 lg4 class="px-2">
                            <v-checkbox append-icon="account"></v-checkbox>
                        </v-flex>
                        <v-flex column xs4 sm4 lg4 class="px-2">
                            <v-checkbox append-icon="account"></v-checkbox>
                        </v-flex>
                        <v-flex column xs4 sm4 lg4 class="px-2">
                            <v-checkbox append-icon="account"></v-checkbox>
                        </v-flex>
                    </v-flex>
                
                    <v-flex column>
                    <p class="font-weight-regular body-2 grey--text mb-0" >EMAIL</p>
                    <v-text-field solo class="mt-2" color="#4169E1" background-color="" clearable 
                    v-model="email" required > 
                    </v-text-field>
                    </v-flex>

                    <v-flex column>
                    <p class="font-weight-regular body-2 grey--text mb-0" >PASSWORD</p>
                    <v-text-field solo class="mt-2" color="#4169E1" background-color="" clearable
                    v-model="email" required > 
                    </v-text-field>
                    </v-flex>

                    <v-flex column>
                    <p class="font-weight-regular body-2 grey--text mb-0" >REPEAT PASSWORD</p>
                    <v-text-field solo class="mt-2" color="#4169E1" background-color="" clearable
                    v-model="email" required > 
                    </v-text-field>
                    </v-flex>
               
                <v-flex class="pa-2 mt-2">
                 <v-btn color="#4169E1" height="45" block>
                     <span class="white--text">Signup</span>
                 </v-btn>
                </v-flex>

                 <v-flex class="row my-5 justify-center">
                        <p class="text-center">already have account ? 
                        <a  class="ml-2" style="color:#4169E1;" >Sign in </a>
                        </p>
                </v-flex>

            </v-form>
        </v-card>
    </v-app>
</template>

<script>
export default {
  
    
}
</script>
