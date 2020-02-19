<template>
    <v-app style="background-color:transparent; ">
        <v-card 
        class="my-auto py-3"
        width="560" 
        flat
        color="transparent" >
            <v-card-title  class="justify-center">
                <h2 class="primary--text text-center " >UBALORI</h2>
            </v-card-title>
            <v-card-text>
                <p class="text-center font-weight-regular body-1 mb-0">Welcome, please register to create your account</p>
            </v-card-text>
            <v-form class="px-7">

                <v-alert
                :value="userExists"
                color="error"
                icon="error_outline"
                >
                This user already exists, try a different set of data.
                </v-alert>
                    
<!-- <v-flex column xs4 sm4 lg4 class="px-2">
                            <v-btn append-icon="account" small>click</v-btn>
                        </v-flex>
                        <v-flex column xs4 sm4 lg4 class="px-2">
                            <v-btn append-icon="account" small>click</v-btn>
                        </v-flex>
                        <v-flex column xs4 sm4 lg4 class="px-2">
                            <v-btn append-icon="account" small>click</v-btn>
                        </v-flex> -->

                  <v-flex>
                   
                    
                    <v-flex row class="px-1 mb-5 mt-3">
                    <v-flex column xs12 sm4 lg4 class="px-2">
                    <v-btn 
                    disabled="" 
                    append-icon="account" 
                    small 
                    color="#4169E1"
                    class="white--text">
                    click
                    </v-btn>
                    </v-flex>
                    <v-flex column xs12 sm4 lg4 class="px-2">
                    <v-btn 
                    append-icon="account" 
                    small 
                    color="#4169E1"
                    class="white--text">
                    <v-icon>
                      <v-icon src="https://img.icons8.com/cotton/64/000000/truck.png">
                      </v-icon>

                    </v-icon>
                    click
                    </v-btn>
                    </v-flex>
                    <v-flex column xs12 sm4 lg4 class="px-2">
                    <v-btn 
                    append-icon="account" 
                    small 
                    color="#4169E1"
                    class="white--text">
                    click
                    </v-btn>
                    </v-flex>
                    </v-flex>            
                    

                    <v-flex row class="" >
                    <v-flex column xs12 sm12 md12 lg12  class="px-1">
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

                    <v-flex row class="" >
                    <v-flex column xs12 sm12 md6 lg6  class="px-1">
                    <p class="font-weight-regular body-1 grey--text  mb-0" >NAME</p>
                    <v-text-field 
                    light
                    solo 
                    outlined
                    class="mt-1 text-center" 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable 
                    v-model="name" 
                    :rules="[rules.required]" 
                    > 
                    </v-text-field>
                    </v-flex>

                    
                    <v-flex column xs12 sm12 md6 lg6 class="px-1">
                    <p class="font-weight-regular body-1 grey--text  mb-0" >PHONE NUMBER</p>
                    <v-text-field 
                    light
                    solo 
                    outlined
                    class="mt-1 text-center" 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable 
                    v-model="phone_number" 
                    :rules="[rules.required]" 
                    > 
                    </v-text-field>
                    </v-flex>
                    </v-flex>

                    <v-flex row class="">
                    <v-flex column xs12 sm12 md6 lg6 class="px-1">
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
                    :type="show ? 'text' : 'password'"
                    > 
                    </v-text-field>
                    </v-flex>

                    <v-flex column xs12 sm12 md6 lg6 class="px-1">
                    <p class="font-weight-regular body-1 grey--text mb-0" >REPEAT PASSWORD</p>
                    <v-text-field 
                    solo
                    outlined
                    class="mt-1" 
                    color="#4169E1" 
                    background-color="transparent" 
                    v-model="confirm_secret" 
                    :rules="[rules.required]"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    @input=" matchsecret()"
                    :type="show ? 'text' : 'password'">
                    </v-text-field>
                    <v-alert
                    :value="match"
                    color="error"
                    icon="error_outline"
                    >
                    password don't match.
                    </v-alert>
                    </v-flex>
                    </v-flex>

                    <!-- <v-flex class="py-2 ">
                    <v-btn color="#4169E1" height="45" block>
                    <span class="white--text">Signup</span>
                    </v-btn>
                    </v-flex> -->
                                        
                    <v-flex row class="px-5" >
                    <v-btn color="#4169E1" 
                    height="45" 
                    block 
                    @click.prevent="Register()">
                    <span class="white--text">Signup</span>
                    </v-btn>         
                    </v-flex>

                    </v-flex>
                               

                 <v-flex class="row mt-4 justify-center">
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
/* eslint-disable no-console */

export default {
  
  data (){
      return{
          match: false,
          userExists: false,
          show:false,
          name:'',
          phone_number:'',
          email:'',
          secret:'',
          confirm_secret:'',
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
