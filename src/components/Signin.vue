<template>
    <v-app>
        <v-card 
        elevation="20"
        class="my-auto mx-10 pa-10"
        width="700">
            <v-card-title >
                <h2>SIGN IN</h2>
            </v-card-title>
            <v-card-text>
                <span>Welcome to Ubalori</span> 
            </v-card-text>
            <v-form class="px-10">
                <v-container>
                    <v-text-field class="my-2" label="E-mail" 
                    v-model="email" prepend-icon="email" required> 
                    </v-text-field>

                    <v-text-field class="my-2" label="Passowrd" 
                    v-model="password" prepend-icon="lock" required>
                    </v-text-field>

                    <div class="row">
                        <v-checkbox label="remember me"> </v-checkbox>
                        <v-spacer></v-spacer>
                        <v-btn elevation="false" color="white" class="mt-3">Forgot password </v-btn>
                    </div>
                
                <div class="pa-2">
                 <v-btn color="primary" height="45" block>
                     <span class="white--text">Login</span>
                 </v-btn>
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