 <template>
  <nav>
<!-- nav bar -->
      <v-app-bar 
        absolute
        scroll-target=""
        color="white"
        elevate
        >

          <v-app-bar-nav-icon @click="drawer = !drawer" color="#394361" ></v-app-bar-nav-icon>

          <v-toolbar-title class="grey--text hidden-md-and-down" >
           Dashboard
          </v-toolbar-title>

         
  <v-spacer></v-spacer>
          <v-col cols="8" sm="4" md="4" xl="6" class="">
          <v-text-field class="body-1 font-weight-regular"
          autofocus
          flat
          hide-details
          solo
          clearable
          clear-icon="clear"
          color="#4169E1"
          label="Search tender"
          prepend-inner-icon="mdi-magnify"
          background-color="#F5FAFF"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>

<!--  -->

<!--  -->

                
         <v-badge class="mr-5 pt-1" :content="messages" :value="messages" color="blue" overlap>
           <p class="caption" 
           small
          slot="badge"
          >{{messages}}</p>
         <v-icon @click="messages++" >mdi-bell</v-icon>
         </v-badge>

         

         <v-divider class="mx-auto" vertical></v-divider>

         <v-btn depressed elevation="flat" class="white black--text mx-3 mt-2 hidden-md-and-down">Log out</v-btn>
      </v-app-bar >

<!-- Navbar -->
<v-navigation-drawer 
      app 
      v-model="drawer"
      class="accent-4"
      style="background-color:#4169E1;"
      dark
      width="200">

      <v-list>
<!-- tender -->
        <v-list-item
          router 
          :to="{name:'tenders', 
          params: {id:'users'}}"
          link
          @click="tenders()">
          <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title  >Tenders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

<!-- dashboard -->
        <v-list-item
          router 
          :to="{name:'agent', 
          params: {id:'todos'}}"
          link
          >
          <v-list-item-icon>
            <v-icon>account_box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title  >Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

<!-- payment -->
        <v-list-item
          router 
          to="/payment"
          link
          >

          <v-list-item-icon>
            <v-icon>gavel</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title  >Payment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

        <div class="pa-2 hidden-md-and-up">
          <v-btn color="#4169E1" elevation="false" block>Logout</v-btn>
        </div>
      
    </v-navigation-drawer>

<!-- Conponents -->
      <!-- <v-sheet
        id="playground-example"
        class="overflow-y-auto"
        max-height="600">

        <v-container style="height: 1500px;">

        </v-container>
      </v-sheet> -->

  </nav>

</template>

<script>
import {mapActions} from 'vuex';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
       messages: 0,
      color: '#394361',
      colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
      drawer: true,
      items:[
            {title: 'Tenders', icon: 'dashboard', router:{name:'tenders', params: {id:'users'}}},
            {title: 'Dashboard', icon: 'account_box', router:{name:'agent', params:{id:'todos'}}},
            {title: 'Payments', icon: 'gavel', router:'/payment'}
      ],
         
      }
      
    },

    methods:{
      ...mapActions([
          'GET_TENDERS','GET_DASHBOARD'
          //'GET_TENDERSDETAIL'
          
      ]),
      
      tenders(tend){
        tend = this.$route.params.id;
      // eslint-disable-next-line no-console
        console.log(tend);
        
          this.GET_TENDERS(tend);
      },

      dashboard(tend){
        tend = this.$route.params.id;
      // eslint-disable-next-line no-console
        console.log(tend);
        
          this.GET_DASHBOARD(tend);
      }
  },

}
</script>
