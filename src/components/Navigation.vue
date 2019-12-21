 <template>
  <nav>
<!-- nav bar -->
      <v-app-bar 
        absolute
        scroll-target="#playground-example"
        color="white"
        elevate
        >

          <v-app-bar-nav-icon @click="drawer = !drawer" color="#394361" ></v-app-bar-nav-icon>

          <v-toolbar-title class="grey--text" >
           Dashboard
          </v-toolbar-title>

         
  <v-spacer></v-spacer>
          <v-col cols="8" sm="3" md="3" class="mt-8">
          <v-text-field
          color="#394361"
            label="Search"
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>

         <v-btn icon color="grey" class="mx-2 mt-2">
            <v-icon>mdi-bell</v-icon>
         </v-btn>

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
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.router"
          link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

        <div class="pa-2">
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      color: '#394361',
      colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
      drawer: true,
      items:[
        {title: 'Tenders', icon: 'dashboard', router:'/tenders'},
        {title: 'Dashboard', icon: 'account_box', router:'/agent'},
        {title: 'Payments', icon: 'gavel', router:'/pament'}
      ]
      }
      
    }

}
</script>
