 <template>
 <v-app>
   <v-content>
    <Navigation/>
   
<div>
<router-view> </router-view>
   <div class="my-10">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore, libero debitis fugiat, assumenda optio deserunt laudantium dolorem saepe quidem odio? Sapiente nulla, aperiam doloremque temporibus commodi corrupti corporis quo.

   </div>
   <div class="my-auto">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore, libero debitis fugiat, assumenda optio deserunt laudantium dolorem saepe quidem odio? Sapiente nulla, aperiam doloremque temporibus commodi corrupti corporis quo.

   </div>
   <div class="my-auto">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore, libero debitis fugiat, assumenda optio deserunt laudantium dolorem saepe quidem odio? Sapiente nulla, aperiam doloremque temporibus commodi corrupti corporis quo.

   </div>
   <div class="my-auto">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore, libero debitis fugiat, assumenda optio deserunt laudantium dolorem saepe quidem odio? Sapiente nulla, aperiam doloremque temporibus commodi corrupti corporis quo.

   </div>
   <div class="my-10">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore, libero debitis fugiat, assumenda optio deserunt laudantium dolorem saepe quidem odio? Sapiente nulla, aperiam doloremque temporibus commodi corrupti corporis quo.
   </div>
</div>
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
