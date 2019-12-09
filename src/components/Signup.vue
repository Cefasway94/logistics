<template>
    <v-app>
        <v-card 
        elevation="20"
        class="my-auto mx-8 pa-7 "
        width="500">
            <v-card-title >
                <h2 class="primary--text ">UBALORI</h2>
            </v-card-title>
            <v-card-text>
                <p class=" text-center ">Welcome, please regester to create account</p> 
            </v-card-text>
            <v-form class="px-7">
                <v-container>
                    <v-text-field class="mb-2" label="E-mail" 
                    v-model="email" prepend-icon="email" required> 
                    </v-text-field>

                    
                    <v-text-field class="my-2" type="password" label="Confirm password" 
                    v-model="Confirmpassword" prepend-icon="lock" required>
                    </v-text-field>
                    <!-- <v-btn class="" fab elevation="false">
                    <v-icon>remove_red_eye</v-icon>
                    </v-btn> -->
                    

                    
                    <v-text-field class="my-2" type="password" label="Confirm password" 
                    v-model="Confirmpassword" prepend-icon="lock" required>
                    </v-text-field>
                    <!-- <v-btn class="" fab elevation="false">
                    <v-icon>remove_red_eye</v-icon>
                    </v-btn> -->
                    

                <div class="pa-2 " >
                 <v-btn class="my-4" color="primary" height="45" width="350" >
                     Login
                 </v-btn>
                </div>
            
                <div class="row my-5 ">
                        <p class="text-center">Already have an account ? 
                        <a  class="ml-2" >Sign in </a>
                        </p>
                </div>
                

                </v-container>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
export default {
  
    
}
</script>