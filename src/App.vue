<template>
  <v-app src="require('./assets/truck.png')" style="background-color:#F5FAFF;">
    
      <div v-if="!login">
        <Home/>
      </div>
      <div v-if="login">
      <Login/>
      </div>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
// import HelloWorld from './components/HelloWorld';
// import Login from './views/Login'; #f1f3f4, #F5FAFF
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import {mapGetters} from 'vuex';
export default {
  name: 'App',
  components: {
         Home, 
         Login,
  },

  data (){
    return{
      login:true,
    }
    //
  },

    created(){
      
      if (localStorage.length == 3) {    
          this.login = false
          
    }else{
      this.login = true;
            console.log('ddntlog in');
            
      
     }
    },
    
    computed: {
      ...mapGetters([
        'LOAD_LOGIN'
      ]),
    }
}
</script>
