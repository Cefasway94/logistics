<template>
  <v-container>

      <v-card class="mx-auto mt-12" color="#F5FAFF">
        
          <AlertError v-if="display_alert" v-bind:message="alert"/>

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

                  <v-simple-table>

                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Email</th>
                          <th class="text-left">Country</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr v-for="customer in customers" :key="customer.customer_id">
                          <td>{{ customer.email }}</td>
                          <td>{{ customer.country }}</td>
                          <td>
                            <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text"
                              :to="'admin/verify/'+customer.id"
                              :disabled="customer.is_verified == 1"
                            >
                              Verify
                            </v-btn>
                          </td>
                          <td>
                            <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text"
                              :disabled="customer.is_verified == 0"
                            >
                              Deny
                            </v-btn>
                          </td>
                          <td>
                            <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text"   
                            >
                              <v-icon small color="white" v-show="customer.is_verified">
                                  mdi-check-outline
                              </v-icon>

                              <v-icon small color="white" v-show="!customer.is_verified">
                                  mdi-reload
                              </v-icon>

                            </v-btn>
                          </td>
                        </tr>
                      </tbody>

                    </template>

                  </v-simple-table>

                </template>

                <template v-if="tab.title == 'Agents'">

                  <v-simple-table v-slot:default>

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
                        <tr v-for="agent in agents" :key="agent.agent_id">
                          <td>{{ agent.email }}</td>
                          <td>{{ agent.country }}</td>
                          <td>
                            <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text"
                              :to="'admin/verify/Clearing/'+agent.id"
                              :disabled="agent.is_verified == 1"
                            >
                              Verify
                            </v-btn>
                          </td>
                          <td>
                            <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text"
                              :disabled="agent.is_verified == 0"
                            >
                              Deny
                            </v-btn>
                          </td>
                          <td>
                            <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text"   
                            >
                              <v-icon small color="white" v-show="agent.is_verified">
                                  mdi-check-outline
                              </v-icon>

                              <v-icon small color="white" v-show="!agent.is_verified">
                                  mdi-reload
                              </v-icon>

                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                      
                    </template>

                  </v-simple-table>

                </template>

                <template v-if="tab.title == 'Transporters'">

                  <v-simple-table v-slot:default>

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
                              :to="'admin/verify/Transporting/'+transporter.id"
                              :disabled="transporter.is_verified == 1"
                            >
                              Verify
                            </v-btn>
                          </td>

                          <td>
                            <v-btn
                              small 
                              elevation="flat" 
                              color="#4169E1" 
                              class="white--text"
                              :disabled="transporter.is_verified == 0"
                            >
                              Deny
                            </v-btn>
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

                  </v-simple-table>
                </template>

              </v-container>

            </v-tab-item>

          </v-tabs-items>

      </v-card>
     
  </v-container>
</template>

<script>
import axios from 'axios'
import AlertError from '@/components/AlertError.vue'

export default {
  name: 'AdminHome',

  data (){

    return{

      tabs:[ {title:'Customers'}, {title:'Agents'}, {title:'Transporters'} ],

      tab: null,

      customers:[],

      agents:[],

      transporters:[],

      alert:'',
      display_alert: false

    }
  },

  components: {AlertError},

  methods: {
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

            this.alert = response.data.message;

            this.display_alert = true;

            document.getElementById('app').scrollIntoView();
        }

      }).catch(()=>
      
      {

          this.alert = "Error occured. Please try again";

          this.display_alert = true;

          document.getElementById('app').scrollIntoView();                       
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

            this.alert = response.data.message;

            this.display_alert = true;

            document.getElementById('app').scrollIntoView();
        }

      }).catch(()=>
      
      {

          this.alert = "Error occured. Please try again";

          this.display_alert = true;

          document.getElementById('app').scrollIntoView();                       
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

            this.alert = response.data.message;

            this.display_alert = true;

            document.getElementById('app').scrollIntoView();
        }

      }).catch(()=>
      
      {

          this.alert = "Error occured. Please try again";

          this.display_alert = true;

          document.getElementById('app').scrollIntoView();                       
      });
  },


  },

  

  beforeRouteEnter(to, from, next){
    next(vm => {

     

      vm.fetchCustomers();

      vm.fetchAgents();

      vm.fetchTransporters();

      next();
    })

  }
}
</script>

<style>

</style>