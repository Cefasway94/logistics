<template >
    <v-app class=" pa-auto"  style="background-color:#F5FAFF;">

            <v-container  class=" mt-10 mx-auto" style="background-color:#F5FAFF;">
                <v-card flat width="1300" class=" mx-auto mt-12" color="#F5FAFF">
                <h3 style="color:#394361;" class="title px-2">Dashboard</h3>
                </v-card>
                
            
            

<!-- ----------------------------------------------------------------------------------------------
     ---------------------------------------------------------------------------------------------- 
-->
    <v-card flat width="1300" class=" mx-auto mb-5" color="#F5FAFF">
    <v-tabs
      background-color="#F5FAFF"
      color="deep-purple accent-4"
      right
      :key="componemtkey"
    >
      <v-tab @contextmenu="load()" @click="GET_DASHBOARD('todos')"  class="">All</v-tab>
             <v-tab @click="GET_DASHBOARD('null')"  v-model="tab">Biding</v-tab>
             <v-tab @click="GET_DASHBOARD('users')" v-model="tab">Progress</v-tab>


      <v-tab-item v-for="n in 3" :key="n"  style="background-color:#F5FAFF;">
          
      <v-divider class="mx-auto " ></v-divider>
      
       <v-container row fluid class="pt-5" style="background-color:#F5FAFF;" >
            
             <v-flex xs12 sm6 md4 lg4 xl4 class="py-3 px-1 justify-center" 
             v-for="tender in LOAD_DASHBOARDS" :key="tender.id" v-model="LOAD_DASHBOARDS.completed" >

                <v-card column width="350"  elevation="3" class="px-3 pb-3 mx-auto">
                    <v-row justify="end" class="py-1" @click="true">
                        <v-icon color="#E9E9F0" class="pr-1" @click="true">clear</v-icon>
                        </v-row>
                    <v-row  row class="pl-3 pt-1 mb-1">
                        <v-flex xs9 sm9 >
                        <h4  class="">{{tender.id}}</h4>
                        </v-flex>
                        <v-flex xs3 sm3 justify="end" class="mx-0">
                        <v-chip 
                        small class="light-green white--text caption font-weight-light" >
                        Pending
                        </v-chip>
                        </v-flex>
                    </v-row>
                   
                        <p class=" body-2 grey--text mb-1">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">{{tender.completed}}</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3 mb-1">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat"  @click="theid(tender.id)" color="#4169E1" class="white--text" to="/agent/abouttender">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-flex>               
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
<!-- ---------------------------------------------------------------------------- 
     -----------------------------------------------------------------------------
-->
        </v-container>
    </v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
        
  
  data () {
      return{
          tab: this.$route.params.id,
          componemtkey: 0,
          
      }
  },

  created (tab){
             tab = this.tab
      this.GET_DASHBOARD(tab);

  },
  
  methods:{
      ...mapActions([
          'GET_DASHBOARD',
          //'GET_BIDTENDERS'
      ]),

      
      theid(id){
          // eslint-disable-next-line no-console
          console.log(id);
      },
      
  },
  computed: {
      ...mapGetters([
          'LOAD_DASHBOARDS',
          //'LOAD_DIBTENDERS'
      ])
  }

    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>