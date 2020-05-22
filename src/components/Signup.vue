<template>
    <v-app style="background-color:transparent; ">
      
      <v-card 
        class="my-auto mx-4"
        width="560" 
        flat=""
        color="#F5FAFF" >
            

            <v-card-title  class="justify-center">
                <h1 class="primary--text text-center pt-2 pb-1 font-weight-medium  " >UBALORI</h1>
            </v-card-title>
            <v-card-text>
                <p class="text-center font-weight-regular body-1 mb-0">Welcome, please register to create your account</p>
            </v-card-text>

<!-- signup success dialogues ---------------------------->
            
              <template>
                <v-row justify="center" >
                  <v-dialog
                    v-model="signedup_successively"
                    max-width="300"
                    color="#f5faff">
                    <v-card 
                    class="pt-5 px-3"
                    color="#f5faff">

                      <v-card 
                      flat=""
                      class="mx-auto "
                      color="transparent" 
                      height="75"
                      width="75">
                      <v-btn 
                      fab
                      append-icon="account" 
                      height="70"
                      width="70"
                      elevation="10"
                      color="green"
                      class="white--text pa-2">
                      <v-icon size="70">
                        done
                      </v-icon>
                      </v-btn>
                      </v-card>

                      <p class=" font-weight-regular text--text text-center pt-3 mb-1 body-1">
                         Account Sign Up Successful.
                      </p>
                      
                      <p class="mb-2 text-center text--text body-1">
                        Kindly check your <a style="color:blue;"> Email </a> to verify your account
                        </p>

                      <v-card-actions>
                
                        <v-btn
                          color="primary darken-1"
                          width="100"
                          text
                          elevation="flat"
                          class="mx-auto"
                          @click.prevent="signin()">
                          close
                        </v-btn>

                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </template>
            <!--  -------------------------------------------------->

<!-- confirmation dialogues ---------------------------->           
              <template>
                <v-row justify="center" >
                  <v-dialog
                    v-model="dialog1"
                    max-width="360">
                    <v-card>
                      <p class="title font-weight-regular text-center pt-3 mb-3">
                        You are about to signup as
                      </p>

                      <v-card 
                      class="mx-auto mb-2"
                      color="primary" 
                      height="60"
                      width="70">
                      <v-btn 
                      append-icon="account" 
                      height="60"
                      width="70"
                      elevation="10"
                      color="primary"
                      class="white--text pb-2">
                      <v-img
                      :src="require('../assets/box.png')"
                      class="mt-2"
                      contain
                      width=""
                      height="43">
                      </v-img>
                      </v-btn>
                      </v-card>
                      
                      <p class="mb-3 text-center grey--text body-1">Agent</p>

                      <v-flex row class="pl-9 " >
                      <v-flex xs3 sm3 md3 lg3  >
                      <p class="grey--text mb-0"  > Email :  </p>
                      </v-flex>
                      <v-flex xs9 sm9 md9 >
                      <p class=" text--text" >
                       {{email}}
                      </p>
                      </v-flex>
                      </v-flex>

                      <v-flex row class="pl-9 " >
                      <v-flex xs3 sm3 md3 lg3  >
                      <p class="grey--text mb-0"  > Country :  </p>
                      </v-flex>
                      <v-flex xs9 sm9 md9 >
                      <p class=" text--text" >
                       {{country}}
                      </p>
                      </v-flex>
                      </v-flex>

                     <v-flex row class="pl-9 " >
                      <v-flex xs3 sm3 md3 lg3  >
                      <p class="grey--text mb-0"  > Name :  </p>
                      </v-flex>
                      <v-flex xs9 sm9 md9 >
                      <p class=" text--text" >
                       {{name}}
                      </p>
                      </v-flex>
                      </v-flex>

                      <v-flex row class="pl-9 " >
                      <v-flex xs5 sm5 md5 lg5  >
                      <p class="grey--text mb-0"  > Phone number :  </p>
                      </v-flex>
                      <v-flex xs6 sm6 md6 >
                      <p class=" text--text" >
                       {{phone_number}}
                      </p>
                      </v-flex>
                      </v-flex>

                       <v-card flat width="400"  class="pl-2 pa-1 mb-5">
              
                        <v-flex row class="pl-5">
                          
                          <v-flex xs11 sm11 md11 class="pl-1" style="background-color:;">
                            <center>
                          <p class="mb-0 body-1 primary--text">
                            Agent deals with Clearing and forwarding 
                          </p>
                          </center>
                          </v-flex>
                        </v-flex>
                        </v-card> 
                      
                      <v-card-actions class="mt-2" style="background-color:#4069e2;">
                        <v-spacer></v-spacer>

                        <v-btn
                          color="white "
                          text
                          @click="dialog1 = false">
                          Disagree
                        </v-btn>
                                            
                        <v-spacer></v-spacer>

                        <v-btn
                          color="white darken-1"
                          text
                          @click.prevent=" Register()">
                          Agree
                        </v-btn>

                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </template>
            <!--  -------------------------------------------------->

            <!-- confirmation dialogues Transporter---------------------------->
            
              <template>
                <v-row justify="center" >
                  <v-dialog
                    v-model="dialog2"
                    max-width="360">
                    <v-card>
                      <p class="title font-weight-regular text-center pt-3 mb-3">
                        You are about to signup as
                      </p>

                      <v-card 
                      class="mx-auto mb-2"
                      color="primary" 
                      height="60"
                      width="70">
                      <v-btn 
                      append-icon="account" 
                      height="60"
                      width="70"
                      elevation="10"
                      color="primary"
                      class="white--text pb-2">
                      <v-img
                      :src="require('../assets/truck.png')"
                      class="mt-2"
                      contain
                      width=""
                      height="43">
                      </v-img>
                      </v-btn>
                      </v-card>
                      
                      <p class="mb-3 text-center grey--text body-1">Transporter</p>

                      <v-flex row class="pl-9 " >
                      <v-flex xs3 sm3 md3 lg3  >
                      <p class="grey--text mb-0"  > Email :  </p>
                      </v-flex>
                      <v-flex xs9 sm9 md9 >
                      <p class=" text--text" >
                       {{email}}
                      </p>
                      </v-flex>
                      </v-flex>

                      <v-flex row class="pl-9 " >
                      <v-flex xs3 sm3 md3 lg3  >
                      <p class="grey--text mb-0"  > Country :  </p>
                      </v-flex>
                      <v-flex xs9 sm9 md9 >
                      <p class=" text--text" >
                       {{country}}
                      </p>
                      </v-flex>
                      </v-flex>

                     <v-flex row class="pl-9 " >
                      <v-flex xs3 sm3 md3 lg3  >
                      <p class="grey--text mb-0"  > Name :  </p>
                      </v-flex>
                      <v-flex xs9 sm9 md9 >
                      <p class=" text--text" >
                       {{name}}
                      </p>
                      </v-flex>
                      </v-flex>

                      <v-flex row class="pl-9 " >
                      <v-flex xs5 sm5 md5 lg5  >
                      <p class="grey--text mb-0"  > Phone number :  </p>
                      </v-flex>
                      <v-flex xs6 sm6 md6 >
                      <p class=" text--text" >
                       {{phone_number}}
                      </p>
                      </v-flex>
                      </v-flex>

                      <v-card flat width="400"  class="pl-2 pa-1 mb-5">
                        <v-flex row class="pl-5">
                          <v-flex xs11 sm11 md11 class="pl-1" style="background-color:;">
                            <center>
                          <p class="mb-0 body-1 primary--text">
                            Transporter deals with transportation 
                          </p>
                          </center>
                          </v-flex>
                        </v-flex>
                        </v-card> 
                      
                      <v-card-actions class="mt-2" style="background-color:#4069e2;">
                          <v-spacer></v-spacer>

                            <v-btn
                              color="white "
                              text
                              @click="dialog1 = false">
                              Disagree
                            </v-btn>
                                                
                            <v-spacer></v-spacer>

                            <v-btn
                              color="white darken-1"
                              text
                              @click.prevent=" Register()">
                              Agree
                            </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </template>
            <!--  -------------------------------------------------->

               <!-- confirmation dialogues ---------------------------->
            
              <template>
                <v-row justify="center" >
                  <v-dialog
                    v-model="dialog3"
                    max-width="350">
                    <v-card>
                      <p class="title font-weight-regular text-center pt-3 mb-3">
                        You are about to signup as
                      </p>

                      <v-card 
                      class="mx-auto mb-2"
                      color="primary" 
                      height="60"
                      width="70">
                      <v-btn 
                      append-icon="account" 
                      height="60"
                      width="70"
                      elevation="10"
                      color="primary"
                      class="white--text pb-2">
                      <v-img
                      :src="require('../assets/list.png')"
                      class="mt-2"
                      contain
                      width=""
                      height="43">
                      </v-img>
                      </v-btn>
                      </v-card>
                      
                      <p class="mb-3 text-center grey--text body-1">Client</p>

                     <v-flex row class="pl-9 " >
                      <v-flex xs3 sm3 md3 lg3  >
                      <p class="grey--text mb-0"  > Email :  </p>
                      </v-flex>
                      <v-flex xs9 sm9 md9 >
                      <p class=" text--text" >
                       {{email}}
                      </p>
                      </v-flex>
                      </v-flex>

                      <v-flex row class="pl-9 " >
                      <v-flex xs3 sm3 md3 lg3  >
                      <p class="grey--text mb-0"  > Country :  </p>
                      </v-flex>
                      <v-flex xs9 sm9 md9 >
                      <p class=" text--text" >
                       {{country}}
                      </p>
                      </v-flex>
                      </v-flex>

                     <v-flex row class="pl-9 " >
                      <v-flex xs3 sm3 md3 lg3  >
                      <p class="grey--text mb-0"  > Name :  </p>
                      </v-flex>
                      <v-flex xs9 sm9 md9 >
                      <p class=" text--text" >
                       {{name}}
                      </p>
                      </v-flex>
                      </v-flex>

                      <v-flex row class="pl-9 " >
                      <v-flex xs5 sm5 md5 lg5  >
                      <p class="grey--text mb-0"  > Phone number :  </p>
                      </v-flex>
                      <v-flex xs6 sm6 md6 >
                      <p class=" text--text" >
                       {{phone_number}}
                      </p>
                      </v-flex>
                      </v-flex>

                      <v-card flat width="400"  class="pl-2 pa-1 mb-5">
                        <v-flex row class="pl-5">
                          <v-flex xs11 sm11 md11 class="pl-1" style="background-color:;">
                            <center>
                          <p class="mb-0 body-1 primary--text">
                            Client is a regular customer  
                          </p>
                          </center>
                          </v-flex>
                        </v-flex>
                        </v-card> 
                      
                      <v-card-actions class="mt-2" style="background-color:#4069e2;">
                         <v-spacer></v-spacer>

                            <v-btn
                              color="white "
                              text
                              @click="dialog1 = false">
                              Disagree
                            </v-btn>
                                                
                            <v-spacer></v-spacer>

                            <v-btn
                              color="white darken-1"
                              text
                              @click.prevent=" Register()">
                              Agree
                            </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </template>
            <!--  -------------------------------------------------->


            
            <v-form class="px-7">
              
<!-------------  alerts ------------  -->
                <v-alert
                :value="error"
                color="error"
                icon="error_outline"
                >
                error
                </v-alert>

                <v-alert
                :value="emptyfilds"
                color="error"
                icon="error_outline"
                >
                All fields are required
                </v-alert>
                
                <v-alert
                :value="timeout"
                color="error"
                icon="error_outline"
                >
                Connection is taking too long, Please check your internet connetction or try again.
                </v-alert>

               
                <v-alert
                :value="invalid"
                color="error"
                icon="error_outline"
                >
                {{abouterror}}
                </v-alert> 
                    

                  <v-flex class="">
            
                    <v-flex row class="mx-2 mb-4 mt-3" >

                    <v-flex column xs4 sm4 lg4 class="px-2">
                    <center>
                    <v-hover class="">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="60"
                    width="70" 
                    :elevation="hover ? 8 : 0">
                    <v-btn 
                    height="60"
                    width="70"
                    :elevation="be1"
                    :color="btn1"
                    class="white--text pb-2"
                    @click="button1()">
                    <v-img
                    :src="require('../assets/truck.png')"
                    class=""
                    contain
                    width=""
                    height="50">
                    </v-img>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>
                    <p class="mt-1 mb-0 caption">Transporter</p>
                    </center>
                    </v-flex>
                    
                    <v-flex column xs4 sm4 md4 lg4 class="px-2">
                    <center>
                    <v-hover class="">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="60"
                    width="70" 
                    :elevation="hover ? 8 : 0">
                    <v-btn 
                    append-icon="account" 
                    height="60"
                    width="70"
                    :elevation="be2"
                    background-color="red"
                    :color="btn2"
                    class="white--text pb-2"
                    @click="button2()">
                    <v-img
                    :src="require('../assets/box.png')"
                    class="mt-1"
                    contain
                    width=""
                    height="45">
                    </v-img>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>
                    <v-flex class="pl justify-center">
                    <p class="mt-1  mb-0 caption">Agent</p>
                    </v-flex>
                    </center>
                    </v-flex>

                    <v-flex column xs4 sm4 md4 lg4 class="px-2">
                    <center>
                    <v-hover class="">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="60"
                    width="70" 
                    :elevation="hover ? 8 : 0">
                    <v-btn 
                    append-icon="account" 
                    height="60"
                    width="70"
                    :elevation="be3"
                    :color="btn3"
                    class="white--text pb-2"
                    @click="button3()">
                    <v-img
                    :src="require('../assets/list.png')"
                    class="mt-2"
                    contain
                    width=""
                    height="43">
                    </v-img>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>
                    <v-flex class=" ">
                    <p class="mt-1  mb-0 caption">Client</p>
                    </v-flex>
                    </center>
                    </v-flex>

                    </v-flex>      


                    <v-card width="150" class="mb-5 mx-auto">
            <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            height="6"
            color="#4169E1">
            </v-progress-linear>
            </v-card>     

                               
                  <v-flex column class="pl-4">

                    <v-flex row class="mb-4 ">
                    <v-flex column xs12 sm12 md12 lg12  class="">
                      <p class="font-weight-regular subtitle-2 grey--text mb-0" >EMAIL</p>
                    <v-hover>
                    <template v-slot="{ hover }">
                    <v-card 
                    color="transparent" 
                    height="40" 
                    :elevation="hover ? 6 : 0">
                        <v-text-field
                        dense 
                        light
                        solo 
                        outlined
                        class="mt-1 text-center" 
                        color="#4169E1" 
                        background-color="transparent" 
                        clearable
                        @input="clear_alert()" 
                        v-model="email" 
                        :rules="[rules.required, rules.email]" 
                        > 
                        </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    <v-alert
                    :value="invalidemail"
                    xsmall
                    text
                    class="my-1 py-0"
                    color="red"
                    icon="null">
                    <v-row>
                    <v-icon color="red" small class="mx-2">
                      error
                    </v-icon>
                    <p class="body-2 mb-0">
                    invalid e-mail
                    </p>
                    </v-row>
                    </v-alert>
                    <v-alert
                    :value="requiredemail"
                    xsmall
                    text
                    class="my-1 py-0"
                    color="red"
                    icon="null">
                    <p class="body-2 mb-0">
                    <v-row>
                    <v-icon color="red" small class="mx-2">
                      error
                    </v-icon>
                    <p class="body-2 mb-0">
                    e-mail is required
                    </p>
                    </v-row>
                    </p>
                    </v-alert>
                    </v-flex>
                    </v-flex>    

                    <!-- <v-flex row class="mb-4 ">
                    <v-flex column xs12 sm12 md12 lg12  class="">
                      <p class="font-weight-regular subtitle-2 grey--text mb-0" >COUNTRY</p>
                    <v-hover>
                    <template v-slot="{ hover }">
                    <v-card 
                    color="transparent" 
                    height="40" 
                    :elevation="hover ? 6 : 0">
                        <v-text-field
                        dense 
                        light
                        solo 
                        outlined
                        class="mt-1 text-center" 
                        color="#4169E1" 
                        background-color="transparent" 
                        clearable
                        @input="clear_alert()" 
                        v-model="country" 
                        :rules="[rules.required]" 
                        > 
                        </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>
                    </v-flex>     -->
                    
                    <v-flex row class="mb-4 ">
                    <v-flex column xs12 sm12 md12 lg12  class="">
                      <p class="font-weight-regular subtitle-2 grey--text mb-0" >SELECT COUNTRY</p>
                    <v-hover>
                    <template v-slot="{ hover }">
                    <v-card
                    outlined
                    color="#f5faff" 
                    height="40" 
                    :elevation="hover ? 6 : 2"
                    class="card mt-1"
                    style="border-color:#babdc2;">
                    
                      <country-select 
                      v-model="country" 
                      :country="country" 
                      topCountry="Tanzania, United Republic of" 
                      height="40"
                      :countryName="true"
                      :removePlaceholder="true"
                      class="selectcountry"/>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>
                    </v-flex>
                    

                    <v-flex row class="" >
                      
                    <v-flex column xs12 sm12 md6 lg6  class="px-1 ">
                    <p class="font-weight-regular subtitle-2 grey--text  mb-0" >NAME</p>
                    <v-hover class="mb-4">
                    <template v-slot="{ hover }">
                    <v-card 
                    color="transparent" 
                    height="40" 
                    :elevation="hover ? 6 : 0">
                        <v-text-field
                        dense 
                        light
                        solo 
                        outlined
                        class="mt-1 text-center" 
                        color="#4169E1" 
                        background-color="transparent" 
                        clearable 
                        @input="clear_alert()"
                        v-model="name" 
                        :rules="[rules.required, rules.min]"
                        > 
                        </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>

                    
                    <v-flex column xs12 sm12 md6 lg6 class="px-1">
                    <p class="font-weight-regular subtitle-2 grey--text  mb-0" >PHONE NUMBER</p>
                    <v-hover class="mb-4">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="40" 
                    :elevation="hover ? 6 : 0">
                        <v-text-field 
                        dense
                        light
                        solo 
                        outlined
                        class="mt-1 text-center" 
                        color="#4169E1" 
                        background-color="transparent" 
                        clearable 
                        @input="clear_alert()"
                        v-model="phone_number"
                        :rules="[rules.required, rules.number, rules.min]" 
                        > 
                        </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>
                    </v-flex>

                    <v-flex row class="">

                    <v-flex column xs6 sm6 md6 lg6 class="px-1">
                    <p class="font-weight-regular subtitle-2 grey--text mb-0" >PASSWORD</p>
                    <v-hover class="mb-7">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="40" 
                    :elevation="hover ? 6 : 0">
                        <v-text-field 
                        dense
                        solo 
                        outlined
                        class="mt-1" 
                        color="#4169E1" 
                        background-color="transparent" 
                        v-model="secret"
                        @input="clear_alert()" 
                        :rules="[rules.required, rules.min, rules.mixed]"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show = !show"
                        :type="show ? 'text' : 'password'"
                        > 
                        </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>

                    <v-flex column xs6 sm6 md6 lg6 class="px-1">
                    <p class="font-weight-regular subtitle-2 grey--text mb-0" >REPEAT PASSWORD</p>
                    <v-hover class="mb-7">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="40" 
                    :elevation="hover ? 6 : 0">
                        <v-text-field 
                        dense
                        solo
                        outlined
                        class="mt-1" 
                        color="#4169E1" 
                        background-color="transparent" 
                        v-model="confirm_secret" 
                        :rules="[rules.required, rules.match]"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show = !show"
                        @input="clear_alert()"
                        :type="show ? 'text' : 'password'"
                        v-on:keyup.enter="confirm()">
                        </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>

                    <v-alert
                    :value="dontmatch"
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
                    <v-hover>
                    <template v-slot="{ hover }">
                    <v-card 
                    color="#4169E1" 
                    height="47" 
                    width="500" 
                    :elevation="hover ? 8 : 0">
                    <v-btn color="#4169E1" 
                    height="47" 
                    block 
                    @click.stop="confirm()">
                    <span class="white--text">Signup</span>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>         
                    </v-flex>

                    </v-flex>
                    </v-flex>
                               

                 <v-flex class="row mt-4 justify-center">
                 <p class="text-center">already have account ? </p>
                 <v-btn 
                 elevation="flat" 
                 color="transparent" 
                 height="25"
                 class="ml-2"
                 @click.prevent="signin()">
                 <p class="mt-1" 
                 style="color:#4169E1;">
                 Sign in 
                 </p>
                 </v-btn>
                </v-flex>

            </v-form>
        </v-card>
    </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
/* eslint-disable no-console */

export default {
  
  data (){
      return{

        //confirmation dialogue
          dialog1: false,
          dialog2: false,
          dialog3: false,
          signedup_successively:false,

        //-------------
          be1: '5',
          be2: '0',
          be3: '0',
          btn1:"#4169E1", 
          btn2:"transparent", 
          btn3:"transparent",

          // invalid email field
          invalidemail:false,
          requiredemail: false,

         //match: false,                // used to chcek if passwords match, 
         invalid: false,             // togle fields
         //invalidemail : false,      // check if email is valid
          emptyfilds:false,         // Check fields   
          dontmatch : false,   
          error: false,
          abouterror:'',
          show:false,
          loading:false,
          success: false,
          timeout:false,
          category: 2,
          name:'',
          phone_number:'',
          email:'',
          country:'',
          secret:'',
          confirm_secret:'',
          rules: {
            required: value => !!value || "Required",
            number: value => {
              const pattern = /^\d+$/;
              return pattern.test(value) || "Number only required"
            },

            min: v => v.length >= 8 || 'Min 8 characters',

            mixed: value =>{   if (value.length < 8) {
                                    return("password too short");
                                } else if (value.length > 12) {
                                    return("password too long");
                                } else if (value.search(/\d/) == -1) {
                                    return("atleast one number required");
                                } else if (value.search(/[a-zA-Z]/) == -1) {
                                    return("atleast one letter required");
                                }  
                                return true
                            },

            match: value =>{   if ( value !== this.secret) {
                                    return("password dont amtch");
                                } 
                                return true
                            },
                            
            email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "invalid email";
            }
           }
      }
  },

methods:{

          ...mapActions([
        "T_GET_AGENT"
      //'GET_TENDERSDETAIL'
    ]),

    cs(){
      console.log(this.country);
      
    },

    confirm(){

      this.clear_alert()

      if(this.rules.required(this.email) == 'Required'){
        
        console.log(11);
        this.validate()
       // this.requiredemail = true  
       // this.invalidemail = false
        return false

      }else if (this.rules.email(this.email) == 'invalid email') {
        
        this.validate()
        console.log(12);
        this.requiredemail = false
        this.invalidemail = true
        return false

      }else if (this.rules.mixed(this.secret) == 'password too short' ) {
        
        console.log(13);
        this.validate()
        return this.rules.mixed(this.secret) 

      }else if (this.rules.mixed(this.secret) == 'atleast one number required' ) {

        console.log(14);
        this.validate()
        return this.rules.mixed(this.secret)

      }else if (this.rules.mixed(this.secret) == 'atleast one letter required' ) {

        console.log(15);
        this.validate()
        return this.rules.mixed(this.secret) 

      }else if (this.rules.min(this.name) == 'Min 8 characters' ) {

        console.log(16);
        this.validate()
        return this.rules.min(this.name)

      }else if (this.rules.min(this.phone_number) == 'Min 8 characters' ) {

        console.log(17);
        this.validate()
        return this.rules.min(this.phone_number)

      }else if (this.rules.number(this.phone_number) == 'Number only required' ) {

        console.log(18);
        this.validate()
        return this.rules.number(this.phone_number)

      }

      console.log(this.rules.mixed(this.secret));
      
      // console.log(this.rules.email(this.email));
      
      
      if (this.validate()) {

        
        if (this.category == 1) {
          
          this.dialog1 = true
          console.log('agent');
          
          
        } else if(this.category == 2) {

          this.dialog2 = true
          console.log('transporter');
          
        } else if (this.category ==3 ){

          this.dialog3 = true
          console.log('client');
          
        }
      }

    },

    Register(){

      this.clear_alert()

      this.dialog1 = false
      this.dialog2 = false
      this.dialog3 = false
      
      if (this.validate()) {

        this.dialog = false

        this.loading = true

            setTimeout(()=>{
              if (this.success === false && this.invalid == true) {
                this.invalid == true
                } else if (this.success === false && this.invalid == false){
                  this.loading = false;
                 this.timeout = true;
                }
              },15000)

          console.log('here register')

          this.$store.dispatch('REGISTER', {
          name: this.name,
          email: this.email,
          password: this.secret,
          country: this.country,
          password_confirmation:this.confirm_secret,
          phone: this.phone_number,
          category: this.category
        })
        .then((data) => {
          console.log(this.LOAD_REGISTER.email);
          
          if(this.LOAD_REGISTER.email){

            this.abouterror = 'User Already exist. Please try other datails or log in with appropriate credentials'
            this.invalid = true
            this.success = false

          }          

          this.clear_alert()
          
          this.loading = false
          this.success = true
          this.signedup_successively = true
          
          //return data;
          data = this.LOAD_RESPONSE;
          console.log('success');
          
          console.log(data);
          console.log(status);
          
          
        })
        .catch (error => {

          if(error.response.status == 404){
            this.clear_alert()
            this.invalid = true
            this.abouterror = 'Connection error, Please contact admin for support'
            this.loading = false
          }
          

          // if (error.response == 'undefined') {
          //   this.clear_alert()
          // console.log(error.response)
          //  return this.timeout = true
          // }

          if (error.response.data.email) {

            this.clear_alert()
            this.abouterror = error.response.data.email[0]
            this.invalid = true
            this.success = false
            this.loading = false

          }else if (error.response.data.phone){

            this.clear_alert()
            this.abouterror = error.response.data.phone[0]
            this.invalid = true
            this.success = false
            this.loading = false

          }else if (error.response.data.name){

            this.clear_alert()
            this.abouterror = error.response.data.name[0]
            this.invalid = true
            this.success = false
            this.loading = false
            
          }
          
         //  ======================== continue from here
          
        });
      }
    },


    validate() {
      if(this.email === '' || this.email === null ) {

        console.log('how1')
         this.emptyfilds = true
         return false
      
      }else if(this.secret=='' || this.secret === null ){

        console.log('how1');
         this.emptyfilds= true;
         return false

      }else if(this.name == '' || this.name === null ){

        console.log('how1');
         this.emptyfilds= true;
         return false

      }else if( this.phone_number == '' || this.phone_number === null ){
         
         console.log('how1');
         this.emptyfilds= true;
         return false

      }else if(this.confirm_secret == '' || this.confirm_secret === null ){

        console.log('how1');
         this.emptyfilds= true;
         return false

      }else if(this.country == '' || this.country === null ){

        console.log('how1');
         this.emptyfilds= true;
         return false
      }

      if( this.secret !== this.confirm_secret){ 

           this.dontmatch = true;
          return false

      } else {       

        console.log('how');       
           return this.secret === this.confirm_secret

      }
    },

    clear_alert() {
      this.emptyfilds = false
      this.invalid = false
      this.error = false
      this.timeout = false
      this.dontmatch = false
      this.requiredemail = false
      this.invalidemail = false
    }, 
   
    // Transporter select
    button1 (){
      this.btn1 = "#4169E1";
      this.btn2 = "transparent";
      this.btn3 = "transparent";
      this.be1 ='5';
      this.be2 ='0';
      this.be3 ='0';
      this.category = 2;
      console.log(this.category);
    },

    //Agent select
    button2 (){
      this.btn2 = "#4169E1";
      this.btn1 = "transparent";
      this.btn3 = "transparent";
      this.be1 ='0';
      this.be2 ='5';
      this.be3 ='0';
      this.category = 1;
      console.log(this.category);
    },

    //Client selelct
    button3 (){
      this.btn3 = "#4169E1";
      this.btn1 = "transparent";
      this.btn2 = "transparent";
      this.be1 ='0';
      this.be2 ='0';
      this.be3 ='5';
      this.category = 3;
      console.log(this.category);


    },

    signin() {
      this.$router.push('/')
      this.signedup_successively = false
    }

  },
 computed: {
      ...mapGetters([
          'LOAD_REGISTER'
          //'LOAD_DIBTENDERS'
      ]),
      
  },

    
}
</script>
<style scoped>

.selectcountry{
          height:103%; 
          width:100%; 
          padding-left: 2%;
          border-color: black ;
          margin-bottom: 0%;
           
  }

.selectcountry:hover {
  border-color:black;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0%;
}


</style>