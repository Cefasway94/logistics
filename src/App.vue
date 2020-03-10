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
export default {
  name: 'App',
  components: {
         Home, 
         Login
  },

  data: () => ({
    login:true,
    //
  }),

    created(){
      if (localStorage.length == 3) {    
          this.login = false
    }else{
      this.login = true;
    }
    }

  // methods : {
  //   success (){
  //      if(localStorage.length == 2){
  //    this.login = true    
  //    this.$router.push('/agents')       // to be removed remove
  //    this.$router.go('/agents')  
  //    console.log('bbbbb') 
  //    }else{
  //      this.$router.push('/signin')
  //    }      // to be removed remove
 
  // },
  // },

  // created(){
  //          console.log('sdfsdfsdfsdf')
           
  //         // to be removed remove
  //        // return this.success()
 
     
  // }
           
  //  //   if(localStorage.length === 2){
  //  //     this.login = false
        
  //   //     this.$router.push('/agents')       // to be removed remove
  //   //     this.$router.go('/agents')         // to be removed remove
  //   // }else{
      
  //   //   this.$router.push('/signin')
  // }
    

  

}
</script>
