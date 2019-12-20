<template >
    <div class=" pa-auto" >

            <v-container  class=" mt-10 mx-auto">
                <h2 class="subheading grey--text my-10">List of all new tenders</h2>
          
             
        


             <v-container fluid
             class=""
             >
                 
          <v-card
                elevation="3"
                class="mb-4 mx-auto"
                max-width="1050">

          <v-layout row wrap  class=" px-2 ">
              
     
               <v-layout sm10 md10  class=" pt-4 px-3" >       
                   <v-flex xs12 sm4 md4 lg4  class=" pl-3 pr-2">
                        <h4 class=" subtitle-2 font-weight-regular mb-1" >CARGO DETAILS</h4>
                        <p class=" body-2 grey--text">Details tile </p>
                   </v-flex>

                    <v-flex xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" subtitle-2 font-weight-regular mb-1">DESTINATION</h4>
                        <p class=" body-2 grey--text">Democratic republic of congo </p>
                   </v-flex>

                    <v-flex xs12 sm4 md4 lg4 class=" pl-3 pr-2">
                        <h4 class="subtitle-2 font-weight-regular mb-1">CLIENT</h4>
                        <p class="body-2 grey--text">fdsfiusdfh Lorem  dkjsnf .</p>
                   </v-flex>
                </v-layout>
                
                
                      <v-chip color="" class="light-green font-weight-light caption my-5  mx-2" >2000 usd</v-chip>
                            
                              
                <v-flex xs12 sm12 md2  class="px-6 py-5 my-auto">
                           <v-btn  elevation="flat"  class=" primary subtitle-2 white--text font-weight-regular" block >view details</v-btn>
                </v-flex >
                
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