<template >
    <div class=" pa-auto" >

            <v-container  class=" mt-10 mx-auto">
                <h2 class="subheading grey--text my-10">Bid on tender</h2>
          
             <v-container fluid
             class=""
             >
                 
          <v-card
                elevation="3"
                class="mb-4 mx-auto"
                max-width="1300">

          <v-layout column wrap  class=" px-2">

              <v-container row class="pt-4">
              
                <h3  class="px-5 ">Tender details</h3>
                <v-chip class="font-weight-light caption px-3"> Pending</v-chip>
              </v-container>
          
          <v-layout row wrap class="px-8">
     
               <v-layout column sm12 md6  class=" pa-5" >       
                   <v-flex row class=" ">
                        <h4 class="px-2 subtitle-2 font-weight-regular mb-1" >CARGO DETAILS</h4>
                        <p class=" body-2 grey--text">Details tile </p>
                   </v-flex>

                    <v-flex row class=" ">
                        <h4 class="px-2 subtitle-2 font-weight-regular mb-1">DESTINATION</h4>
                        <p class=" body-2 grey--text">Democratic republic of congo </p>
                   </v-flex>

                    <v-flex row class=" ">
                        <h4 class="px-2 subtitle-2 font-weight-regular mb-1">CLIENT</h4>
                        <p class="body-2 grey--text">fdsfiusdfh Lorem  dkjsnf .</p>
                   </v-flex>
                </v-layout>

            <v-layout column sm12 md6 class="pa-5">
                <v-container row >
                     <v-flex sm6 md6  class="px-6 py-5 my-auto">
                            <v-btn  elevation="flat"  class=" primary subtitle-2 white--text font-weight-regular" block >view details</v-btn>
                        </v-flex >
                        <v-flex sm6 md6  class="px-6 py-5 my-auto">
                            <v-btn  elevation="flat"  class=" primary subtitle-2 white--text font-weight-regular" block >view details</v-btn>
                     </v-flex >
                </v-container>

                <v-container row >
                     <v-flex sm6 md6  class="px-6 py-5 my-auto">
                            <v-btn  elevation="flat"  class=" primary subtitle-2 white--text font-weight-regular" block >view details</v-btn>
                        </v-flex >
                        <v-flex sm6 md6  class="px-6 py-5 my-auto">
                            <v-btn  elevation="flat"  class=" primary subtitle-2 white--text font-weight-regular" block >view details</v-btn>
                     </v-flex >
                </v-container>
                
            </v-layout>
         </v-layout> 
    </v-layout >

<v-layout column wrap  class=" px-2 mt-4 ">
              
              
              <h3 class="pl-5">Bid terms</h3>

     <v-layout column wrap >
                <v-form >
                        <v-row class="px-8">
                            <v-col cols="12" md="3">
                                 <v-text-field label="Bid amount" required ></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="3">
                                <v-text-field label="Delivery time" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="6">
                                <v-text-field label="Payment terms" required>
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row class="px-8">
                            <v-col cols="12" md="12">
                                 <v-text-field label="Terms and condition" required ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row class="px-8 pb-5" justify="end">
                            <v-btn color="" class="white  mr-4" elevation="flat" router to="/tenders" > Cancel </v-btn>
                            <v-btn color="primary white--text"> Confirm Bid </v-btn>
                        </v-row>
                </v-form>

        </v-layout> 
    </v-layout >

        </v-card> 

             </v-container>
 
    
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