<template>
    <v-container class=" mt-12 px-5">   
        
        <v-card
                color="transparent"
                flat=""
                class="mb-4 mx-auto mt-12 pa-1"
                max-width="1050" >
<!-- Header  -->
        <v-card
                color="transparent"
                flat=""
                class="mb-4">
         <v-layout row wrap  class=" px-2 ">
               <v-layout sm11 md11  class=" pt-5 " >       
                   <v-flex wrap xs12 sm4 md4 lg4  class="" >
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;"   >Transaction ID</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Date</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center " style="color:#4169E1;" >Client</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Description</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class=" ">
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Amount</h4>
                   </v-flex>
                   
                    <v-flex wrap xs12 sm4 md4 lg4 class=" justify-center"  >
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Status</h4>                                             
                    </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class="">
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Client</h4>                        
                   </v-flex>

                </v-layout>
                
          </v-layout >
        </v-card>

<!-- Content card -->
        <v-card
                elevation="1"
                class="mb-4 px-3">
          <v-layout row wrap  class=" px-2 ">
               <v-layout sm11 md11  class=" pt-5 pb-3 " >       
                   <v-flex wrap xs12 sm4 md4 lg4  class="" >
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center"  >Cargo details</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center">Destination</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center ">Destination</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center">Destination</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class=" ">
                        <h4 class="subtitle-1 font-weight-regular mb-1 text-center">Client</h4>
                   </v-flex>
                   
                    <v-flex wrap xs12 sm4 md4 lg4 class=" justify-center"   >
                         <v-chip small class="light-green white--text  font-weight-light caption text-center"  >2000 usd</v-chip>                    
                    </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class="">
                        <h4  class="body-1 font-weight-bold mb-1 text-center" style="color:#4169E1;">View Invoice</h4>
                   </v-flex>

                </v-layout>
                
          </v-layout >
        </v-card>
        </v-card>


    </v-container>
</template>