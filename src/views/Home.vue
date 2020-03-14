 <template>
 <v-app style="background-color:#F5FAFF;">
   <v-content>
    <Navigation/>
   
      <transition>
  <keep-alive>
    <router-view name="Createtender"></router-view>
    <router-view name="Agent"></router-view>
    <router-view name="Tenders"></router-view>
    <router-view name="Abouttender"></router-view>
    <router-view name="Clienteditprofile"></router-view>
    <router-view name="Biding"></router-view>
    <router-view name="Tenderprogressclient"></router-view>
    <router-view name="Payment"></router-view>
    <router-view name="Client"></router-view>
    <router-view name="AgentTenderprogress"></router-view>
  </keep-alive>
</transition>
      
  </v-content>
 </v-app>
</template>

<script>
// @ is an alias to /src
 import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components:{Navigation},
  data () {
    return {
      drawer: false,
      items:[
        {title: 'Dashboard', icon: 'dashboard'},
        {title: 'Account', icon: 'account_box'},
        {title: 'Admin', icon: 'gavel'}
      ]
      }
      
    }

}
</script>
