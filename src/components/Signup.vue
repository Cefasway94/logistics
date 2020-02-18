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
                <p class="text-center font-weight-regular body-1">Welcome, please register to create your account</p>
            </v-card-text>
            <v-form class="px-8">

                <v-alert
                :value="userExists"
                color="error"
                icon="warning"
              >This user already exists, try a different set of data.</v-alert>


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
                    <p class="font-weight-regular body-1 grey--text  mb-0" >EMAIL</p>
                    <v-text-field 
                    light
                    solo 
                    outlined
                    class="mt-1 text-center" 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable 
                    v-model="email" 
                    :rules="[rules.required, rules.email]" 
                    > 
                    </v-text-field>
                    </v-flex>

                    <v-flex column class="">
                    <p class="font-weight-regular body-1 grey--text mb-0" >PASSWORD</p>
                    <v-text-field 
                    solo 
                    outlined
                    class="mt-1" 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable
                    v-model="secret" 
                    :rules="[rules.required]"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    :type="show ? 'text' : 'password'"
                    > 
                    </v-text-field>
                    </v-flex>

                    <v-flex column>
                    <p class="font-weight-regular body-1 grey--text mb-0" >REPEAT PASSWORD</p>
                    <v-text-field 
                    solo
                    outlined
                    class="mt-1" 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable
                    v-model="confirm_esecret" 
                    :rules="[rules.required]"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    :type="show ? 'text' : 'password'"
                    
                    >
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
//import {mapActions} from 'vuex';

export default {
  
  data (){
      return{
          userExists: false,
          show:false,
          email:'',
          secret:'',
          confirm_esecret:'',
          rules: {
            required: value => !!value || "Required",
            email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "Invalid e-mail.";
            }
           }
      }
  },

method:{
    valid() {
      return this.password === this.confirm_password;
    }
  }
    
}
</script>
