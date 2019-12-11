 <template>
  <nav>
<!-- nav bar -->
      <v-app-bar 
        absolute
        dark
        scroll-target="#playground-example"
        :color="color"
        elevate>

          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>Route placeholder </v-toolbar-title>

         <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
         </v-btn>
         <v-btn icon>
            <v-icon>mdi-bell</v-icon>
         </v-btn>
      </v-app-bar >

<!-- Navbar -->
<v-navigation-drawer 
      app 
      v-model="drawer"
      class="accent-4"
      dark
      width="200"
      :color="color">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

        <div class="pa-2">
          <v-btn color="primary" elevation="false" block>Logout</v-btn>
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
      color: 'primary',
      colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
      drawer: true,
      items:[
        {title: 'Dashboard', icon: 'dashboard'},
        {title: 'Account', icon: 'account_box'},
        {title: 'Admin', icon: 'gavel'}
      ]
      }
      
    }

}
</script>
