<template >
    <div class=" pa-auto" >

            <v-container  class=" mt-10 mx-auto">
                <h3 style="color:#394361;" class="title mt-10 px-2">Dashboard</h3>
          
            <v-tabs
            right
             background-color="transparent"
             color="#394361"
             left >

             <v-tab>Option</v-tab>
             <v-tab>Option</v-tab>
             <v-tab>Option</v-tab>

             <v-tab-item >

                <v-divider class="mx-auto " ></v-divider>

    <v-container fluid class="" style="background-color:#F5FAFF;"> 

        <v-row >
             <v-layout xs12 sm4 md4 lg4 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small color="primary white--text" class="">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-layout>

              <v-layout xs12 sm4 md4 lg4 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small color="primary white--text" class="">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-layout>

            <v-layout xs12 sm4 md4 lg4 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small color="primary white--text" class="">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-layout>

        </v-row>
             </v-container> 
             </v-tab-item>     
           </v-tabs>    
        </v-container>
    </div>
</template>

<script>
export default {
  
  data () {
      return{
          project : [
              {title: '', project:'', project1:'', project2:'', project3:'' },
              {title: '', project:'', project1:'', project2:'', project3:'' },
              {title: '', project:'', project1:'', project2:'', project3:'' },
              {title: '', project:'', project1:'', project2:'', project3:'' }
          ]
      }
  }
    
}
</script>