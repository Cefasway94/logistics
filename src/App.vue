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
};
</script>
