 <template>
 <v-app style="background-color:#F5FAFF;">
   <v-content>
    <Navigation/>
   
      
        <router-view> </router-view>
      
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
