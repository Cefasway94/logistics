 <template>
  <nav>
    <!-- nav bar -->
    <v-app-bar absolute color="white"  >
      <v-app-bar-nav-icon  @click="drawer = !drawer" color="#394361"></v-app-bar-nav-icon>

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

      
   <!-- <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        
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
        
      </template>
      <v-list>
        <v-list-item v-for="n in 100" :key="n" link>
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->

    
      <v-divider class="mx-5 hidden-sm-and-down" vertical></v-divider>

 
      <!-- Agent and transporter  --------------------------------------------------------->
      <v-menu v-if="user == 1 " transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        
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
                <v-list-item-title class="title" >{{company_name}}</v-list-item-title>
                <v-list-item-subtitle>{{email}}</v-list-item-subtitle>
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
            <v-list-item-group
             v-model="item" color="primary">
              <v-list-item
                v-for="(item, i) in itemes"
                :key="i"
                :to="{name: items[3] && items[3].router.name }">


<!--  {
          title: "My profile",  
          icon: "mdi-account-multiple",
          router: { name: "AgentProfile" }
        } -->


                <v-list-item-icon>
                  <v-icon v-text="item && item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list> 
             <!--  -->
             
        <div class="pt-3">
         <v-btn 
         color="white" 
         elevation="flat" 
         class=""
         large
         block 
         @click.prevent="logout()">
         <p  class="my-auto body-1 font-weight-regular text--text text-capitalize">
         Logout
         </p>
         </v-btn>
        </div>
             

      </v-card>

  </v-menu>
     <!--  ------------------------------------->

     <!-- --------------------- Client ----------------------->
     <v-menu v-else transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        
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
                <v-list-item-title class="title" >{{company_name}}</v-list-item-title>
                <v-list-item-subtitle>{{email}}</v-list-item-subtitle>
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
            <v-list-item-group
             v-model="item" color="primary">
              <v-list-item
                v-for="(item, i) in itemes"
                :key="i"
                @click="clienteditprofile()">
                <v-list-item-icon>
                  <v-icon v-text="item && item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list> 
             <!--  -->
             
        <div class="pt-3">
         <v-btn 
         color="white" 
         elevation="flat" 
         class=""
         large
         block 
         @click.prevent="logout()">
         <p  class="my-auto body-1 font-weight-regular text--text text-capitalize">
         Logout
         </p>
         </v-btn>
        </div>
             
      </v-card>
     </v-menu>
     <!--  ------------------------------>


    </v-app-bar>

    <!-- Navbar -->
    <!-- ----------------------------------------Agent and Transporter -->
    <v-navigation-drawer
      app
      v-model="drawer"
      expand-on-hover
      class="accent-4"
      style="background-color:#4169E1;"
      dark
      fixed
      width="200"
      v-if="user == 1"
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
              <v-list-item-subtitle >{{category}}</v-list-item-subtitle>
              <!-- <v-list-item-subtitle >OXOAfrica.co.tz</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
      <!--  -->


        <!-- tender -->
        <v-list-item
          :to="{name:this.items[0] && this.items[0].router.name, 
            params:{id: this.items[0] && this.items[0].router.params.id} }"
          link
          @click="tenders()"
        >
          <v-list-item-icon>
            <v-icon>{{items[0] && items[0].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{items[0] && items[0].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- dashboard -->
        <v-list-item
          :to="{name: this.items[1] && this.items[1].router.name, 
          params: {id:this.LOAD_AGENT.objects && this.LOAD_AGENT.objects.agent_id}}"
          link
        >
          <v-list-item-icon>
            <v-icon>{{items[1] && items[1].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{items[1] && items[1].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- payment -->
        <v-list-item
          :to="{name: this.items[2] && this.items[2].router.name}"
          link
        >
          <v-list-item-icon>
            <v-icon>{{items[2] && items[2].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{items[2] && items[2].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- ---------------------------------------------------------------------- to be continued -->

      <v-flex class="px-2 pt-12">
        
      </v-flex>

<template v-slot:append>
        <div class="py-2 px-1">
         <v-btn 
         color="paleblack" 
         elevation="20" 
         class=""
         block 
         @click.prevent="logout()">
         <p class="my-auto body-1 font-weight-regular text-capitalize">
         Logout
         </p>
         </v-btn>
        </div>
      </template>

    </v-navigation-drawer>
    <!-- --------------------------------------------------------------- -->

    <!-- -----------------------------------------------------Cutomer -->
    <v-navigation-drawer
      app
      v-model="drawer"
      expand-on-hover
      class="accent-4"
      style="background-color:#4169E1;"
      dark
      fixed
      width="200"
      v-else
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
              <v-list-item-subtitle >{{category}}</v-list-item-subtitle>
              <!-- <v-list-item-subtitle >OXOAfrica.co.tz</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
      <!--  -->


        <!-- tender -->
        <v-list-item
          :to="{name:this.items[0] && this.items[0].router.name, 
            params:{id: this.items[0] && this.items[0].router.params.id} }"
          link
          @click="tenders()"
        >
          <v-list-item-icon>
            <v-icon>{{items[0] && items[0].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{items[0] && items[0].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- dashboard -->
        <!-- <v-list-item
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
        </v-list-item> -->

        <!-- payment history -->
        <v-list-item
          :to="{name: this.items[1] && this.items[1].router.name}"
          link
        >
          <v-list-item-icon>
            <v-icon>{{items[1] && items[1].icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{items[1] && items[1].title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- ---------------------------------------------------------------------- to be continued -->

      <v-flex class="px-2 pt-12">
        
      </v-flex>

<template v-slot:append>
        <div class="py-2 px-1">
         <v-btn 
         color="paleblack" 
         elevation="20" 
         class=""
         block 
         @click.prevent="logout()">
         <p class="my-auto body-1 font-weight-regular text-capitalize">
         Logout
         </p>
         </v-btn>
        </div>
      </template>

    </v-navigation-drawer>
    <!-- ------------------------------------------------------------- -->

    

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

 <!--  customer--------------------------------------------------------------------------------->
 <!--  --------------------------------------------------------------------------------->
  

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
      
      user:'',
      company_name:'',
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
        { text: 'My profile', icon: 'mdi-account-multiple',  }

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

    const type = localStorage.category;

    if (type == 3) {
      //this.category = 'Client'
      console.log("client");
      this.GET_CUSTOMER(localStorage.client).then(() => {
      console.log('get client------');
      console.log(this.LOAD_AGENT)
      this.email = this.LOAD_AGENT.objects.email 
      this.company_name = this.LOAD_AGENT.objects.company_name
      this.category = 'Customer'      
      this.items = this.client();
     return this.client();
     })

    } else if (type == 2) {
      this.user = 1
      console.log("transporter");
      this.T_GET_AGENT(localStorage.client).then(() => {
      console.log('get transporter------');
      console.log(this.LOAD_AGENT)
      this.email = this.LOAD_AGENT.objects.email 
      this.company_name = this.LOAD_AGENT.objects.company_name
      this.category = 'Transporter'
      this.items = this.transporter();
      return this.transporter();
    })

    } else if (type == 1) {
      this.user = 1
      console.log("Agennt");
      this.GET_AGENT(localStorage.client).then(() => {
      console.log('get agent------');
      console.log(this.LOAD_AGENT)
      this.email = this.LOAD_AGENT.objects.email 
      this.company_name = this.LOAD_AGENT.objects.company_name
      this.category = 'Agent'     
      this.items = this.agent();
      return this.agent();
    })
    }
  },

  methods: {
    ...mapActions([
      "GET_TENDERS","T_GET_TENDERS",
      "GET_DASHBOARD","T_GET_DASHBOARD",
      "GET_AGENT","T_GET_AGENT","GET_CUSTOMER"
      //'GET_TENDERSDETAIL'
    ]),

    // Client edit profile ---------------------
    clienteditprofile(){
          this.verify = false
          this.$router.push('/Client/editprofile/'+localStorage.client)
          this.$router.go('/Client/editprofile/'+localStorage.client)
      }, 



    client() {
      const client = [
        {
          title: "Dashboard",
          icon: "dashboard",
          router: { name: "Client", params: { id: "users"} }
        },
        {
          title: "Payments",
          icon: "gavel",
          router: { name: "Clientpaymenthistory" }
        },
        
       ];
      return client;
    },

    agent() {
      const agent = [
        {
          title: "Tenders",
          icon: "dashboard",
          router: { name: "AgentTenders", params: { id: "open" } }
        },
        {
          title: "Dashboard",
          icon: "account_box",
          router: { name: "Agent" }
        },
        {
          title: "Payments",
          icon: "gavel",
          router: { name: "Paymenthistory" }
        },
        {
          title: "My profile",  
          icon: "mdi-account-multiple",
          router: { name: "AgentProfile" }
        }
      ];
      return agent;
    },

    transporter() {
      const transporter = [
        {
          title: "Tenders",
          icon: "dashboard",
          router: { name: "Ttenders", params: { id: "open" } }
        },
        {
          title: "Dashboard",
          icon: "account_box",
          router: { name: "Transporter"}
        },
        {
          title: "Payments",
          icon: "gavel",
          router: { name: "Paymenthistory" }
        },
        {
          title: "My profile",  
          icon: "mdi-account-multiple",
          router: { name: "Teditprofile" }
        }
      ];
      return transporter;
    },

    tenders(tend) {
      tend = this.$route.params.id;
      // eslint-disable-next-line no-console
      console.log(tend);

      const type = localStorage.category;
    if (type == 2) {
      console.log("transporter");
      this.T_GET_TENDERS(tend);
      
    } else if (type == 1) {
      console.log("Agennt");
      this.GET_TENDERS(tend);
    }
            
    },

    dashboard(tend) {
      tend = this.$route.params.id;
      // eslint-disable-next-line no-console
      console.log(tend);
      // 
       const type = localStorage.category;
    if (type == 3) {
      console.log("client");
      // --------------------------------- add client directory to get client dashboard

    } else if (type == 2) {
      console.log("transporter");
      this.T_GET_DASHBOARD(tend);

    } else if (type == 1) {
      console.log("Agennt");
      this.GET_DASHBOARD(tend);
    }
      // 
    },

    logout() {
      localStorage.removeItem("category");
      localStorage.removeItem("secret");
      localStorage.removeItem("client");
      this.$router.push("/");
      this.$router.go("/");
    }
  },

  computed: {
    ...mapGetters([
      "LOAD_LOGIN",'LOAD_AGENT'
      ])
  }
};
</script>

