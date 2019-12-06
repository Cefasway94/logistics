 <template>
 <v-app>
   <Navigation/>
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
      color: 'primary',
      colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
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
