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

                    <v-flex row class="row justify-center ">
                        <v-checkbox color="#4169E1" label="remember me"> </v-checkbox>
                        <v-spacer></v-spacer>
                        <v-btn elevation="false" color="transparent" 
                        class="mt-4 font-weight-regular body-1 text-capitalize" style="color:#4169E1;"> Forgot password
                        </v-btn>
                    </v-flex >
                
                <v-flex class="pa-2">
                 <v-btn color="#4169E1" height="45" block>
                     <span class="white--text">Login</span>
                 </v-btn>
                </v-flex>

                 <v-flex class="row my-5 justify-center">
                        <p class="text-center">Dont have an account ? 
                        <a  class="ml-2" style="color:#4169E1;" >Sign up </a>
                        </p>
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

    Register(){
        if (this.valid()) {
        this.$store.dispatch('REGISTER', {
          username: this.name,
          email: this.email,
          secret: this.secret,
          phone: this.phone_number
        })
        .then(({ status }) => {
          this.$router.push('/signin')
          console.log(status);
          
        })
        .catch (error => {
          this.userExists = true;
          console.log(error);
          
        })
      }else {
          return this.match = true;
      }

    },

    valid() {
      return this.secret === this.confirm_secret;
    },

    matchsecret(){
                  return this.match = false;
        }
  }
    
}
</script>