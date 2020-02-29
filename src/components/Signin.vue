<template>
    <v-app style="background-color:transparent; ">
      <v-card 
        class="my-auto mx-4"
        width="500" 
        flat=""
        color="#F5FAFF" >
            <v-card-title  class="justify-center">
                <h1 class="primary--text text-center py-2 font-weight-medium  " >UBALORI</h1>
            </v-card-title>
            <v-card-text>
                <p class="text-center font-weight-regular body-1 mb-0">Welcome, please register to create your account</p>
            </v-card-text>
            <v-form class="px-7">

<!--         alerts ------------  -->
                <v-alert
                :value="error"
                color="error"
                icon="error_outline"
                >
                {{LOAD_RESPONSE}}
                </v-alert>

                <!-- <v-alert
                :value="invalid"
                color="error"
                icon="error_outline"
                >
                make sure all filsds are filled correctly
                </v-alert> -->
                    

                  <v-flex class="">
                   
                  <v-flex column class="">
                    
                    <v-flex column xs12 sm12 md12 lg12  class="px-1 mb-6">
                      <p class="font-weight-regular subtitle-2 grey--text mb-0" >EMAIL</p>
                    <v-hover>
                    <template v-slot="{ hover }">
                    <v-card color="transparent" height="55" :elevation="hover ? 6 : 0">
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
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>
                    <!-- <v-flex row>
                    <v-spacer></v-spacer>
                    <v-alert
                      xs6 sm6 md6 lg6
                      class=""
                      :value="invalidemail"
                      color="error"
                      icon="error_outline"
                      >
                      Invalid email
                      </v-alert>
                      </v-flex> -->
                             
                    
                        
                    <!-- <v-flex column xs12 sm12 md12 lg12  class="">
                    <p class="font-weight-regular body-1 grey--text  mb-0" >EMAIL</p>
                    <v-text-field 
                    light
                    solo 
                    outlined
                    class="mt-1 " 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable 
                    v-model="email" 
                    :rules="[rules.required, rules.email]" 
                    > 
                    </v-text-field>
                    </v-flex> -->

                    
                    <v-flex column class="px-1">
                    <p class="font-weight-regular subtitle-2 grey--text mb-0" >PASSWORD</p>
                    <v-hover class="mb-2">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="55" 
                    :elevation="hover ? 6 : 0">
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
                    :type="show ? 'text' : 'password'"
                    > 
                    </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>                 
                    
                    <v-flex row class=" justify-center ml-1 mb-2">
                    <v-checkbox 
                    v-ripple
                    color="#4169E1"
                    class="mb-0" 
                    label="remember me">
                    </v-checkbox>
                    <v-spacer></v-spacer>
                    <v-btn 
                    elevation="false" 
                    color="transparent" 
                    class="mt-4 font-weight-regular body-1 text-capitalize" 
                    style="color:#4169E1;"> Forgot password
                    </v-btn>
                    </v-flex >

                    <v-flex class="px-5 justify-center ">
                    <v-hover>
                    <template v-slot="{ hover }">
                    <v-card 
                    color="#4169E1" 
                    height="47" 
                    width="500" 
                    :elevation="hover ? 8 : 0">
                    <v-btn color="#4169E1" height="47" block>
                    <span class="white--text">Login</span>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>

                    <v-flex class="row mt-4 justify-center">
                    <p class="text-center ">Don't have an account ? </p>
                    <v-btn 
                    elevation="flat" 
                    color="transparent" 
                    height="30"
                    class="ml-2 ">
                    <p class=" text-uppercase mt-1" 
                    style="color:#4169E1;">
                    Sign up 
                    </p>
                    </v-btn>
                    </v-flex>

                    <!-- <v-flex class="py-2 ">
                    <v-btn color="#4169E1" height="45" block>
                    <span class="white--text">Signup</span>
                    </v-btn>
                    </v-flex> -->                                        
                    </v-flex>
                    </v-flex>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
/* eslint-disable no-console */

export default {
  
  data (){
      return{
          
         //match: false,                // used to chcek if passwords match, 
         invalid: false,             // togle fields
         //invalidemail : false,      // check if email is valid
         //valid: false,             // check if fields are empty
          error: false,
          abouterror:'',
          show:false,
          category: 2,
          email:'',
          secret:'',
          rules: {
            required: value => !!value || "Required",
            //number:value => {},
            email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "Invalid e-mail.";
            }
           }
      }
  },

methods:{

    Login() {
          if (this.validate()) {
          this.$store.dispatch('LOGIN', {
          name: this.name,
          email: this.email,
          password: this.secret,
          password_confirmation:this.confirm_secret,
          phone: this.phone_number,
          category: this.category
        })
        .then(({ data, status }) => {
          this.$router.push('/signin')
          //return data;
          data = this.LOAD_RESPONSE;
          console.log('success');
          
          console.log(data);
          console.log(status);
          
          
        })
        .catch (error => {
          this.userExists = true;
          if (error.email) {
            this.abouterror = 'User Already exist. Please try other datails or log in with appropriate credentials'
          } else {
            this.abouterror = 'registration failed, please check your internet and try again'
          }
         //  ======================== continue from here
          
        });
      }else {
          return this.invalid = true;
       }   
    },

    validate() {
           return true;
    },

    clear_alert() {
      return this.invalid = false
    }, 
   
  },
 computed: {
      ...mapGetters([
          'LOAD_RESPONSE'
          //'LOAD_DIBTENDERS'
      ]),
      
  }
    
}
</script>
