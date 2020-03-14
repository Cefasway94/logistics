<template >
    <div class=" pa-auto" >

            <v-container  class=" mt-12">
                <v-card flat width="1300" class=" mx-auto mt-12" color="#F5FAFF">
                <h3 style="color:#394361;" class="title mt-10 px-2">All new tenders</h3>
                </v-card>
<!-- v-for="tender in LOAD_TENDERS" :key="tender.id" v-model="LOAD_TENDERS.completed" -->
    <v-card flat width="1300" class=" mx-auto" color="#F5FAFF" row>
    <v-container row fluid class="pt-5" style="background-color:#F5FAFF;" >
            
             <v-flex xs12 sm6 md4 lg4 xl4 class="py-3 px-1 justify-center" 
             v-for="tender in LOAD_TENDERS.objects" :key="tender.id"  >

             <!-- 
                 <v-hover class="">
                <template v-slot="{ hover }">
                <v-card 
                column width="350"
                class="px-3 pb-3 mx-auto" 
                :elevation="hover ? 15 : 3"> ========================= HOVER EFFECT
              -->

                <v-card column width="350"  elevation="3" class="px-4 pb-3 pt-1 mx-auto">
                   
                    <v-row  row class="pl-3 pt-1 mb-1 justify-space-between">
                        <v-flex wrap xs9 sm9>
                        <h4  class="subtitle-1 font-weight-bold">{{tender.cargo_details}}</h4>
                        </v-flex>
                        
                        <v-flex xs1 sm1 justify="end">
                            <v-spacer></v-spacer>
                        <v-icon color="#E9E9F0" class="" @click="true">clear</v-icon>
                        </v-flex>
                    </v-row>
                   
                        <p class=" body-2 grey--text mb-1">{{tender.customer_id}}</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3 mb-1">
                        <h4  class=" title ">{{tender.customer_offer_amount}} USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" 
                        color="#4169E1" class="white--text" @click="gettenderdetails(tender.id)" :to="{name:'AgentAbouttender', 
                        params: {id:tender.id}}" >View Details</v-btn>
                    </v-row>
                    
                </v-card>
            </v-flex>               
        </v-container>
             
    </v-card>    
        </v-container>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
/* eslint-disable no-console */
export default {
        
  
  data () {
      return{
          tab:  this.$route.params.id,
      }
  },

  created (tab){
             tab = this.tab
             console.log(tab);
             
            //const tend = this.$route.params.tid;
      this.GET_TENDERS(tab);
  },
  
  methods:{
      ...mapActions([
          'GET_TENDERS','GET_TENDERSDETAILs'
          //'GET_TENDERSDETAIL'
          
      ]),
      
      gettenderdetails(tend){
          this.GET_TENDERSDETAILs(tend);
      }
      
  },
  computed: {
      ...mapGetters([
          'LOAD_TENDERS', 'LOAD_TENDER'
          //'LOAD_DIBTENDERS'
      ]),
      
  }

    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>