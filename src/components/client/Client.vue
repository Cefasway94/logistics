<template >
    <div class=" pa-auto" >

            <v-container  class=" mt-12 mx-auto">

                <v-card flat width="1300" class=" mx-auto mb-5" color="#F5FAFF">
                    <v-flex row class="mt-5">
                        <h3 style="color:#394361;" class="title mt-10 px-2">Dashboard</h3>
                        <v-spacer></v-spacer>
                        <v-btn class="primary mt-5" router to="/client/createtender">Add New</v-btn>
                    </v-flex>
                    
                </v-card>
          
                <v-card flat width="1300" class=" mx-auto mb-5" color="#F5FAFF">
                    <v-tabs
                        right
                        background-color="transparent"
                        color="#394361"
                        class="mt-5"
                        v-model="tab"
                    >

                        <v-tab v-for="tab in tabs" :key="tab.title">
                            {{ tab.title}}
                        </v-tab>

                    </v-tabs> 

                    <v-tabs-items v-model="tab">
                        <v-tab-item
                            v-for="tab in tabs"
                            :key="tab.title"
                        >
                            
                            <v-divider class="mx-auto " ></v-divider>

                            <v-container fluid class="" style="background-color:#F5FAFF;"> 

                                <v-row fluid>

                                    <template v-if='tab.title === "All"'>

                                    <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2" v-for="tender in AllTenders" :key="tender.id">
                                        <v-card column width="350"  elevation="3" class="px-4 py-3">
                                            <v-row  row class="px-3 pt-1">
                                                <h4  class="">{{ tender.cargo_details}}</h4>
                                                <v-chip 
                                                    small class="light-green white--text caption font-weight-light mx-3" >
                                                    Pending
                                                </v-chip>
                                                <v-spacer></v-spacer>

                                                <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                                            </v-row>
                   
                                            <p class=" body-2 grey--text">{{ tender.description}}</p>
                    
                                            <v-row class="px-3">
                                                <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                                                <v-icon small color="#4169E1" class="px-2 pb-3">
                                                    arrow_forward
                                                </v-icon>
                                                <p  class="body-2  pt-1 ">Rwanda</p>
                                            </v-row>

                                            <v-row row class="px-3">
                                                <h4  class=" title ">{{ tender.customer_offer_amount}} {{ tender.currency}}</h4>
                                                    <v-spacer></v-spacer>
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text" router to="/client/aboutbid">View Details</v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-flex>  

                                    </template>

                                     <template v-if='tab.title === "Biding"'>

                                    <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2" v-for="tender in BidedTenders" :key="tender.id">
                                        <v-card column width="350"  elevation="3" class="px-4 py-3">
                                            <v-row  row class="px-3 pt-1">
                                                <h4  class="">{{ tender.cargo_details}}</h4>
                                                <v-chip 
                                                    small class="light-green white--text caption font-weight-light mx-3" >
                                                    Pending
                                                </v-chip>
                                                <v-spacer></v-spacer>

                                                <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                                            </v-row>
                   
                                            <p class=" body-2 grey--text">{{ tender.description}}</p>
                    
                                            <v-row class="px-3">
                                                <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                                                <v-icon small color="#4169E1" class="px-2 pb-3">
                                                    arrow_forward
                                                </v-icon>
                                                <p  class="body-2  pt-1 ">Rwanda</p>
                                            </v-row>

                                            <v-row row class="px-3">
                                                <h4  class=" title ">{{ tender.customer_offer_amount}} {{ tender.currency}}</h4>
                                                    <v-spacer></v-spacer>
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text" router to="/client/aboutbid">View Details</v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-flex>  

                                    </template>

                                     <template v-if='tab.title === "Progress"'>

                                    <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2" v-for="tender in TendersOnProgress" :key="tender.id">
                                        <v-card column width="350"  elevation="3" class="px-4 py-3">
                                            <v-row  row class="px-3 pt-1">
                                                <h4  class="">{{ tender.cargo_details}}</h4>
                                                <v-chip 
                                                    small class="light-green white--text caption font-weight-light mx-3" >
                                                    Pending
                                                </v-chip>
                                                <v-spacer></v-spacer>

                                                <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                                            </v-row>
                   
                                            <p class=" body-2 grey--text">{{ tender.description}}</p>

                                           
                                            <v-row class="px-3">
                                                <p class="body-2  pt-1 ">{{ tender.origin }}</p>
                        
                                                <v-icon small color="#4169E1" class="px-2 pb-3">
                                                    arrow_forward
                                                </v-icon>
                                                <p  class="body-2  pt-1 ">{{ tender.destination }}</p>
                                            </v-row>

                                            <v-row row class="px-3">
                                                <h4  class=" title ">{{ tender.customer_offer_amount}} {{ tender.currency}}</h4>
                                                    <v-spacer></v-spacer>
                                                    <v-btn small elevation="flat" color="#4169E1" class="white--text" router to="/client/aboutbid">View Details</v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-flex>  

                                    </template>


                                   
                                </v-row>
                            </v-container> 
                        </v-tab-item>
                   </v-tabs-items>

                </v-card>
        </v-container>
    </div>
</template>

<script>

import { mapGetters, mapActions} from 'vuex'

export default {
  
  name: 'Client',

  data () {
      return{
          project : [
              {title: '', project:'', project1:'', project2:'', project3:'' },
              {title: '', project:'', project1:'', project2:'', project3:'' },
              {title: '', project:'', project1:'', project2:'', project3:'' },
              {title: '', project:'', project1:'', project2:'', project3:'' }
          ],

          tabs: [
              {title:'Biding'},
              {title:'Progress'},
              {title:'All'}
          ],

          tab: null,

          id: 10,

      }
  },

  computed:{
      ...mapGetters(['AllTenders','BidedTenders','TendersOnProgress'])
  },

  methods: {
      ...mapActions(['fetchAllTenders','fetchBidedTenders','fetchOnProgressTenders'])
  },

  created(){
      this.fetchAllTenders(this.id),
      this.fetchBidedTenders(this.id),
      this.fetchOnProgressTenders(this.id)
  }
    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>