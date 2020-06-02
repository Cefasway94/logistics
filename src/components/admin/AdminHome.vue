<template>
  <v-container>

      <v-card class="mx-auto mt-12" color="#F5FAFF">

          <Alert v-if="alert" v-bind="{message,type}"/> 

          <Message/>

          <v-tabs
              right
              background-color="transparent"
              color="#394361"
              class="mt-2"
              v-model="tab"
          >
            <v-tab v-for="tab in tabs" :key="tab.title" @change="fetch(tab.title)">
              {{ tab.title}}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">

            <v-tab-item v-for="tab in tabs" :key="tab.title">

              <v-divider class="mx-auto " ></v-divider>

              <v-container fluid class="" style="background-color:#F5FAFF;">

                <template v-if="tab.title == 'Customers'">

                  <v-data-table :items="customers" :headers="customer_headers">

                    <template v-slot:item.actions="{ item }">
                                
                                

                        <v-btn
                          x-small 
                          elevation="flat" 
                          color="#4169E1" 
                          class="white--text mr-3"
                          :to="'/admin/verify/'+item.id"
                          :disabled="item.is_verified == 1"
                        >
                          verify
                        </v-btn>

                        <v-dialog              
                              v-model="dialog"
                              :retain-focus="false"
                              width="600"
                            >
                              <template v-slot:activator="{ on }">
                                  <v-btn
                                    small 
                                    elevation="flat" 
                                    color="#4169E1" 
                                    class="white--text"
                                    v-on="on"
                                    :disabled="item.is_verified == 0"
                                  >
                                    deny
                                  </v-btn>
                              </template>

                              <v-card>
                                <v-card-title
                                  class="body-3 grey lighten-2"
                              
                                  >
                                  Are you want to cancel verification for this Customer?
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="dialog = false"
                                    >
                                    No
                                  </v-btn>
                                  <v-btn
                                      color="primary"
                                      text
                                      @click="denyCustomerVerification(item.email)"
                                    >
                                    Yes
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                      </template>
                    
                  </v-data-table>

                </template>

                <template v-if="tab.title == 'Agents'">

                  <v-data-table :items="agents" :headers="agent_headers">

                    <template v-slot:item.actions="{ item }">
                                
                                
                        <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text mr-3"
                              :to="'/admin/verify/Clearing/'+item.id"
                              :disabled="item.is_verified == 1"
                            >
                              Verify
                        </v-btn>

                        <v-dialog              
                              v-model="dialogAgent"
                              :retain-focus="false"
                              width="600"
                            >
                              <template v-slot:activator="{ on }">
                                <v-btn
                                  small 
                                  elevation="flat" 
                                  color="#4169E1" 
                                  class="white--text"
                                  :disabled="item.is_verified == 0"

                                  v-on="on"
                                >
                                  Deny
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title
                                  class="body-3 grey lighten-2"
                              
                                  >
                                  Are you want to cancel verification for this Agent?
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="dialogAgent = false"
                                    >
                                    No
                                  </v-btn>
                                  <v-btn
                                      color="primary"
                                      text
                                      @click="denyAgentVerification(item.email)"
                                    >
                                    Yes
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                        
                    </template>

                  </v-data-table>

                </template>

                <template v-if="tab.title == 'Transporters'">

                  <v-data-table :items="transporters" :headers="transporter_headers">

                    <template v-slot:item.actions="{ item }">
                                
                                
                        <v-btn
                          small 
                          elevation="flat" 
                          color="#4169E1" 
                          class="white--text mr-3"
                          :to="'/admin/verify/Transporting/'+item.id"
                          :disabled="item.is_verified == 1"
                          
                        >
                          Verify
                        </v-btn>

                          <v-dialog              
                            v-model="dialogTransporter"
                            :retain-focus="false"
                            width="600"
                          >
                            <template v-slot:activator="{ on }">
                              <v-btn
                                small 
                                elevation="flat" 
                                color="#4169E1" 
                                class="white--text"
                                :disabled="item.is_verified == 0"
                                v-on="on"
                              >
                                Deny
                              </v-btn>
                              
                            </template>

                            <v-card>
                              <v-card-title
                                class="body-3 grey lighten-2"
                            
                                >
                                Are you want to cancel verification for this Transporter?
                              </v-card-title>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                  <v-btn
                                    color="primary"
                                    text
                                    @click="dialogTransporter = false"
                                  >
                                  No
                                </v-btn>
                                <v-btn
                                    color="primary"
                                    text
                                    @click="denyVerification(item.email)"
                                  >
                                  Yes
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                        </v-dialog>
                        
                      </template>

                  </v-data-table>

                  <!--<v-simple-table v-slot:default>

                    <template>
                       <thead>
                        <tr>
                          <th class="text-left">Email</th>
                          <th class="text-left">Country</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr v-for="transporter in transporters" :key="transporter.agent_id">
                          <td>{{ transporter.email }}</td>
                          <td>{{ transporter.country }}</td>
                          <td>
                            <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text"
                              :to="'/admin/verify/Transporting/'+transporter.id"
                              :disabled="transporter.is_verified == 1"
                            >
                              Verify
                            </v-btn>
                          </td>

                          <td>
                           
                            <v-dialog              
                              v-model="dialogTransporter"
                              :retain-focus="false"
                              width="600"
                            >
                              <template v-slot:activator="{ on }">
                                <v-btn
                                  small 
                                  elevation="flat" 
                                  color="#4169E1" 
                                  class="white--text"
                                  :disabled="transporter.is_verified == 0"
                                  @click="setEmail(transporter.email)"
                                  v-on="on"
                                >
                                  Deny
                                </v-btn>
                                
                              </template>

                              <v-card>
                                <v-card-title
                                  class="body-3 grey lighten-2"
                              
                                  >
                                  Are you want to cancel verification for this Transporter?
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="dialogTransporter = false"
                                    >
                                    No
                                  </v-btn>
                                  <v-btn
                                      color="primary"
                                      text
                                      @click="denyVerification()"
                                    >
                                    Yes
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </td>
                          
                          <td>
                            <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text"   
                            >
                              <v-icon small color="white" v-show="transporter.is_verified">
                                  mdi-check-outline
                              </v-icon>

                              <v-icon small color="white" v-show="!transporter.is_verified">
                                  mdi-reload
                              </v-icon>

                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>

                  </v-simple-table>-->
                </template>

              </v-container>

            </v-tab-item>

          </v-tabs-items>

      </v-card>
     
  </v-container>
</template>

<script>
import axios from 'axios'
import Alert from '@/components/Alert.vue'
import Message from '@/components/Message.vue'
import{mapActions,mapGetters} from 'vuex'

export default {
  name: 'AdminHome',

  data (){

    return{

      tabs:[ {title:'Customers'}, {title:'Agents'}, {title:'Transporters'} ],

      tab: null,

      customers:[],

      agents:[],

      transporters:[],

      dialog: false,

      dialogAgent: false,

      dialogTransporter: false,

      alert: false,
      message:'',
      type:'',

      email:'',

      customer_headers:[

       {
          text: 'Email',
          align: 'start',
          value: 'email',
          class:'primary--text blue lighten-5 body-1 font-weight-bold', 
       },

      { text: 'Country', class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'country' },
      { text: 'Actions',  class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'actions' },

      ],

      agent_headers:[

       {
          text: 'Email',
          align: 'start',
          value: 'email',
          class:'primary--text blue lighten-5 body-1 font-weight-bold', 
       },

      { text: 'Country', class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'country' },
      { text: 'Actions',  class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'actions' },

      ],

      transporter_headers:[

       {
          text: 'Email',
          align: 'start',
          value: 'email',
          class:'primary--text blue lighten-5 body-1 font-weight-bold', 
       },

      { text: 'Country', class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'country' },
      { text: 'Actions',  class:'primary--text blue lighten-5 body-1 font-weight-bold', value: 'actions' },

      ]
     

    }
  },

  //components: {Message},

  components: {Message,Alert},

  computed:{

    ...mapGetters(['getAdminAlert'])
  },

  methods: {

    ...mapActions(['setAdminAlert','setSnackbar']),

    setAlert(message,type){

      this.alert = true;
      this.message = message;
      this.type = type;
    },

    fetch(title)
    {
      switch(title)
      {
        case 'Customers':

          this.fetchCustomers();

          break;

        case 'Agents':

          this.fetchAgents();
        
          break;

        case 'Transporters':

          this.fetchTransporters();
           
          break;

        default:
          break;
      }
    },

    fetchCustomers(){
     //getting all customers
      const customers = " http://207.180.215.239:8181/api/v1/customers/profiles";

      axios.get(customers).then((response) => 
      {
                               
          //eslint-disable-next-line no-console
          //console.log(response.data.objects[i].industry_name);

        if(response.data.genralErrorCode === 8000)
        {
          this.customers = response.data.objects;

        } else if(response.data.genralErrorCode === 8004){

            this.alert = false;

            setTimeout(()=>{

                this.setAlert(response.data.message,"error");
            },1000)

            
        }

      }).catch(()=>
      
      {

        setTimeout(()=>{

          this.setAlert("There is internal server error","error");

        },1000)                     
      });
  },

  fetchAgents(){

    //getting all agents
      const agents = "http://207.180.215.239:8000/api/v1/agents/profiles";

      axios.get(agents).then((response) => 
      {
                               
          //eslint-disable-next-line no-console
          //console.log(response.data.objects[i].industry_name);

        if(response.data.genralErrorCode === 8000)
        {
          this.agents = response.data.objects;

        } else if(response.data.genralErrorCode === 8004){

            this.alert = false;

            setTimeout(()=>{

                this.setAlert(response.data.message,"error");
            },1000)
        }

      }).catch(()=>
      
      {

        setTimeout(()=>{

            this.setAlert("There is internal server error","error");

        },1000)   

      });
  },

  fetchTransporters(){
       //getting all transporters
      const transporters = "http://207.180.215.239:9000/api/v1/transporters/profiles"

       axios.get(transporters).then((response) => 
      {
                               
          //eslint-disable-next-line no-console
          //console.log(response.data.objects[i].industry_name);

        if(response.data.genralErrorCode === 8000)
        {
          this.transporters = response.data.objects;

        } else if(response.data.genralErrorCode === 8004){

          this.alert = false;

          setTimeout(()=>{

              this.setAlert(response.data.message,"error");
          },1000)
        }

      }).catch(()=>
      {

          setTimeout(()=>{

            this.setAlert("There is internal server error","error");

          },1000)                     
      });
  },

  setEmail(email){
    this.email = email;

     //eslint-disable-next-line no-console
        console.log(this.email);
  },

  denyVerification(email){

    this.dialogTransporter = false;

    console.log("email is "+email);

  
    const url = `http://207.180.215.239:9000/api/v1/transporters/deny/${email}`;

              
    axios.post(url).then((response) => 
      {
                               
        if(response.data.genralErrorCode === 8000)
          {

            this.dialogTransporter = false;

            this.alert = false;

            console.log("transporter........"+response.data.objects);

             setTimeout(()=>{

                    this.setAlert(response.data.message,"success");

                    //this.$router.push('/admin');
                    //this.$router.go('/admin');
             },1000)
           
          } else if(response.data.genralErrorCode === 8004){

             this.alert = false;

              setTimeout(()=>{

                    this.setAlert(response.data.message,"error");
              },1000)
          }

          }).catch(()=>
      
          {

              setTimeout(()=>{

                this.setAlert("There is internal server error","error");

              },1000)                    
          });
        },
    
    denyAgentVerification(email){
      
        this.dialogAgent = false;

        const url = `http://207.180.215.239:8000/api/v1/agents/deny/${email}`;

        axios.post(url).then((response) => 
          {
                               
            //eslint-disable-next-line no-console
            //console.log(response.data.objects[i].industry_name);

            if(response.data.genralErrorCode === 8000)
              {
                this.alert = false;

                 setTimeout(()=>{

                    this.setAlert("The agent verification has been deleted","success");

                    this.$router.push('/admin');
                    this.$router.go('/admin');
                },1000)

              } else if(response.data.genralErrorCode === 8004){

                  this.alert = false;

                  setTimeout(()=>{

                        this.setAlert(response.data.message,"error");
                  },1000)
              }

              }).catch(()=>
      
              {

                setTimeout(()=>{

                    this.setAlert("There is internal server error","error");

                },1000) 

              });     
    },
    

    denyCustomerVerification(email){

        this.dialog = false;
      
        const url = `http://207.180.215.239:8181/api/v1/customers/deny/${email}`;

        axios.post(url).then((response) => 
          {
                               
            //eslint-disable-next-line no-console
            //console.log(response.data.objects[i].industry_name);

            if(response.data.genralErrorCode === 8000)
              {
                

                this.alert = false;

                 setTimeout(()=>{

                    this.setAlert("Customer verification has been deleted","success");

                    this.$router.push('/admin');
                    this.$router.go('/admin');
                },1000)

              } else if(response.data.genralErrorCode === 8004){

                
                this.alert = false;

                    setTimeout(()=>{

                        this.setAlert(response.data.message,"error");
                },1000)
              }

              }).catch(()=>
      
              {

                setTimeout(()=>{

                    this.setAlert("There is internal server error","error");

                },1000)               
              });     
    },


  },

  beforeRouteEnter(to, from, next){
    next(vm => {

  
      vm.fetchCustomers();

      vm.fetchAgents();

      vm.fetchTransporters();

      vm.alert = vm.$store.getters.getAdminAlert;

      next();
    })

  }
}
</script>

<style>

</style>