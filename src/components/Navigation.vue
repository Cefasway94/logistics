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

         <v-btn 
         depressed elevation="flat" 
         class="white black--text mx-3 mt-2 hidden-md-and-down"
         @click.prevent="logout()">
         Log out
         </v-btn>
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
          :to="{name:this.items[0].router.name, 
            params:{id: this.items[0].router.params.id} }"
          link
          @click="tenders()">
          <v-list-item-icon>
            <v-icon>{{items[0].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title  >{{items[0].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

<!-- dashboard -->
        <v-list-item
          router 
          :to="{name: this.items[1].router.name, 
          params: {id:this.items[1].router.params.id}}"
          link
          >
          <v-list-item-icon>
            <v-icon>{{items[1].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title  >{{items[1].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

<!-- payment -->
        <v-list-item
         router 
          :to="{name: this.items[2].router.name, 
          params: {id:this.items[2].router.params.id}}"
          link
          >

          <v-list-item-icon>
            <v-icon>{{items[2].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title  >{{items[2].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- ---------------------------------------------------------------------- to be continued -->


        <div class="px-2 pt-12">
          <v-btn 
          color="#4169E1" 
          elevation="false" 
          block 
          @click.prevent="logout()">Logout</v-btn>
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
/* eslint-disable no-console */
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
      category:'',
      items:'',
         
      }
      
    },

    created(){
      const type = localStorage.category;
      console.log('navigatio');
      
      if (type == 3){
        return this.client() 
      }else if (type == 2) {
        return this.transporter() 
      }else if (type == 1) {
        console.log('navigatio3');
          this.items = this.agent();
          console.log(this.items[0].router.params.id) 
          console.log(this.items[0].router.name)             

      }
      
      
    },

    methods:{
      ...mapActions([
          'GET_TENDERS','GET_DASHBOARD'
          //'GET_TENDERSDETAIL'
          
      ]),
       
      client(){
         const client = [
                      {title: 'CTenders', icon: 'dashboard', router:{name:'Client', params: {id:'users'}}},
                      {title: 'CDashboard', icon: 'account_box', router:{name:'agent', params:{id:'todos'}}},
                      {title: 'CPayments', icon: 'gavel', router:{name:'Payment', params:{id:'null'}}}
                      ]
              return client
        
      },

      agent(){
           const agent = [
                      {title: 'ATenders', icon: 'dashboard', router:{name:'AgentTenders', params: {id:'users'}}},
                      {title: 'ADashboard', icon: 'account_box', router:{name:'Agent', params:{id:'todos'}}},
                      {title: 'APayments', icon: 'gavel', router:{name:'Payment', params:{id:'null'}}}
                      ]
              return agent
      },

      transporter(){
         const transporter = [
                      {title: 'TTenders', icon: 'dashboard', router:{name:'tenders', params: {id: 'users'}}},
                      {title: 'TDashboard', icon: 'account_box', router:{name:'agent', params:{id:'todos'}}},
                      {title: 'TPayments', icon: 'gavel', router:{name:'Payment', params:{id:'null'}}}
                      ]
              return transporter

      },
      
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
      },

      logout(){
        localStorage.removeItem("category");
        localStorage.removeItem("secret");
        this.$router.go('/signin')
      }
  },

}
</script>
