 <template>
  <nav>
    <!-- nav bar -->
    <v-app-bar absolute scroll-target color="white" elevate>
      <v-app-bar-nav-icon @click="drawer = !drawer" color="#394361"></v-app-bar-nav-icon>

      <v-toolbar-title class="grey--text hidden-md-and-down">Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-col cols="8" sm="4" md="4" xl="6" class>
        <v-text-field
          class="body-1 font-weight-regular"
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
      

      <!-- ----------------------------------------- -->
   <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <!--  -->
        <v-badge 
        v-ripple
        class=" mr-5 pt-1" 
        :content="messages" 
        :value="messages" 
        color="blue" 
        overlap
        >
        <p class="caption" small slot="badge">{{messages}}</p>
        <v-icon @click="messages++" v-on="on">mdi-bell</v-icon>
      </v-badge>
        <!--  -->
      </template>
      <v-list>
        <v-list-item v-for="n in 100" :key="n" link>
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- ----------------------------------------- -->

      <v-divider class="mx-5 hidden-sm-and-down" vertical></v-divider>

      <!-- <v-btn
        depressed
        elevation="flat"
        class="white black--text mx-3 mt-2 hidden-md-and-down"
        @click.prevent="logout()"
      >Log out
      </v-btn> -->
      <!--  -->
      
           
      <!--  -->

      <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <!--  -->
        <v-btn  
        fab 
        elevation="flat" 
        v-on="on"
        color="transparent hidden-sm-and-down">
        <v-avatar >
        <v-icon 
        size="35" 
        color="grey" >
        mdi-account-circle
        </v-icon>
        </v-avatar>
        </v-btn> 
        <!--  -->
      </template>
      
        <v-card
        class="mx-auto"
        width="256"
        tile >
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="../assets/newasset/truck.svg"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title" >{{LOAD_AGENT.objects.company_name}}</v-list-item-title>
                <v-list-item-subtitle>{{LOAD_AGENT.objects.email}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list
            nav
            dense >
            <v-list-item-group v-model="item" color="primary">
              <v-list-item
                v-for="(item, i) in itemes"
                :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>       
      </v-card>
     </v-menu>


    </v-app-bar>

    <!-- Navbar -->
    <v-navigation-drawer
      app
      v-model="drawer"
      expand-on-hover
      class="accent-4"
      style="background-color:#4169E1;"
      dark
      width="200"
    >
      <v-list
      nav
      >

      <!--  -->
      <v-list-item two-line >
            <v-list-item-avatar>
              <img src="../assets/logo.svg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>UBALORI</v-list-item-title>
              <v-list-item-subtitle >OXOAfrica.co.tz</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
      <!--  -->


        <!-- tender -->
        <v-list-item
          router
          :to="{name:this.items[0].router.name, 
            params:{id: this.items[0].router.params.id} }"
          link
          @click="tenders()"
        >
          <v-list-item-icon>
            <v-icon>{{items[0].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{items[0].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- dashboard -->
        <v-list-item
          router
          :to="{name: this.items[1].router.name, 
          params: {id:this.LOAD_AGENT.objects.agent_id}}"
          link
        >
          <v-list-item-icon>
            <v-icon>{{items[1].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{items[1].title}}</v-list-item-title>
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
            <v-list-item-title>{{items[2].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- ---------------------------------------------------------------------- to be continued -->

      <v-flex class="px-2 pt-12">
        
      </v-flex>

<template v-slot:append>
        <div>
         <v-btn 
         x-large 
         color="transparent" 
         elevation="15" 
         block @click.prevent="logout()">Logout</v-btn>
        </div>
      </template>

    </v-navigation-drawer>

    

    <!-- Conponents -->
    <!-- <v-sheet
        id="playground-example"
        class="overflow-y-auto"
        max-height="600">

        <v-container style="height: 1500px;">

        </v-container>
    </v-sheet>-->
  </nav>
  
</template>

<script>
/* eslint-disable no-console */
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  data() {
    return {
      activator:'',
      email:'',
      name:'',
      messages: 0,
      color: "#394361",
      colors: ["primary", "accent", "warning lighten-2", "teal", "orange"],
      drawer: true,
      category: "",
      items: "",
      // items for added Navigation profile list
      item: 0,
      itemes: [
        { text: 'My profile', icon: 'mdi-account-multiple' },
        // { text: 'My Files', icon: 'mdi-folder' },
        // { text: 'Starred', icon: 'mdi-star' },
        // { text: 'Recent', icon: 'mdi-history' },
        // { text: 'Offline', icon: 'mdi-check-circle' },
        // { text: 'Uploads', icon: 'mdi-upload' },
        // { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    };
  },

  created() {
    this.GET_AGENT(localStorage.client).then(() => {
      console.log('get agent------');
      console.log(this.LOAD_AGENT)      
    })
    
    const type = localStorage.category;
    if (type == 3) {
      console.log("client");
      this.items = this.client();
      return this.client();
    } else if (type == 2) {
      console.log("transporter");
      this.items = this.agent(); // =========================================== to be changed to transpoorter componetns
      return this.transporter();
    } else if (type == 1) {
      console.log("Agennt");
      this.items = this.agent();
    }
  },

  methods: {
    ...mapActions([
      "GET_TENDERS",
      "GET_DASHBOARD",
      "GET_AGENT",
      //'GET_TENDERSDETAIL'
    ]),

    client() {
      const client = [
        {
          title: "CTenders",
          icon: "dashboard",
          router: { name: "Client", params: { id: "users" } }
        },
        {
          title: "CDashboard",
          icon: "account_box",
          router: { name: "agent", params: { id: "todos" } }
        },
        {
          title: "CPayments",
          icon: "gavel",
          router: { name: "Paymenthistory", params: { id: "null" } }
        }
      ];
      return client;
    },

    agent() {
      const agent = [
        {
          title: "ATenders",
          icon: "dashboard",
          router: { name: "AgentTenders", params: { id: "open" } }
        },
        {
          title: "ADashboard",
          icon: "account_box",
          router: { name: "Agent" }
        },
        {
          title: "APayments",
          icon: "gavel",
          router: { name: "Paymenthistory", params: { id: "null" } }
        }
      ];
      return agent;
    },

    transporter() {
      const transporter = [
        {
          title: "TTenders",
          icon: "dashboard",
          router: { name: "tenders", params: { id: "users" } }
        },
        {
          title: "TDashboard",
          icon: "account_box",
          router: { name: "agent", params: { id: "todos" } }
        },
        {
          title: "TPayments",
          icon: "gavel",
          router: { name: "Paymenthistory", params: { id: "null" } }
        }
      ];
      return transporter;
    },

    tenders(tend) {
      tend = this.$route.params.id;
      // eslint-disable-next-line no-console
      console.log(tend);

      this.GET_TENDERS(tend);
    },

    dashboard(tend) {
      tend = this.$route.params.id;
      // eslint-disable-next-line no-console
      console.log(tend);

      this.GET_DASHBOARD(tend);
    },

    logout() {
      localStorage.removeItem("category");
      localStorage.removeItem("secret");
      localStorage.removeItem("client");
      this.$router.push("/signin");
      this.$router.go("/signin");
    }
  },

  computed: {
    ...mapGetters([
      "LOAD_LOGIN",'LOAD_AGENT'
      ])
  }
};
</script>
