<template>
    <v-app style="background-color:#F5FAFF;">
        <v-card 
        class="my-auto pa-3"
        width="480" flat
        color="transparent" >
            <v-card-title  class="justify-center">
                <h2 class="primary--text text-center " >UBALORI</h2>
            </v-card-title>
            <v-card-text>
                <p class="text-center font-weight-regular body-2">Welcome back, please login to your account</p>
            </v-card-text>
            <v-form class="px-8">
                <v-flex column>
                   <v-flex row class="" >
                    <v-flex column class="">
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
                    </v-flex>

                    <v-flex row class="" >
                    <v-flex column class="">
                    <p class="font-weight-regular body-1 grey--text mb-0" >PASSWORD</p>
                    <v-text-field 
                    solo 
                    outlined
                    class="mt-1" 
                    color="#4169E1" 
                    background-color="transparent" 
                    v-model="secret" 
                    :rules="[rules.required]"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    :type="show ? 'text' : 'password'"> 
                    </v-text-field>
                    </v-flex>           
                    </v-flex>

                    <v-flex row class=" justify-center ml-1">
                        <v-checkbox color="#4169E1" 
                        label="remember me"> </v-checkbox>
                        <v-spacer></v-spacer>
                        <v-btn elevation="false" 
                        color="transparent" 
                        class="mt-4 font-weight-regular body-1 text-capitalize" 
                        style="color:#4169E1;"> Forgot password
                        </v-btn>
                    </v-flex >
                
                <v-flex class="px-2 justify-center">
                 <v-btn color="#4169E1" height="47" block>
                     <span class="white--text">Login</span>
                 </v-btn>
                </v-flex>

                 <v-flex class="row my-5 justify-center">
                        <p class="text-center">Dont have an account ? 
                        <a  class="ml-4" style="color:#4169E1;" >Sign up </a>
                        </p>
                </v-flex>
              </v-flex>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
//import {mapActions} from 'vuex';
/* eslint-disable no-console */

export default {
  
  data (){
      return{
          email:'',
          secret:'',
          rules: {
            required: value => !!value || "Required",
            email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "Invalid e-mail.";
            }
           }
      }
  },

methods:{

    Login(){},

    valid() {
      return this.secret === this.confirm_secret;
    },

    matchsecret(){
                  return this.match = false;
        }
  }
    
}
</script>