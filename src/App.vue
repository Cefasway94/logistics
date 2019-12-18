<template>
  <v-app style="background-color:#F5FAFF;">
      <div v-if="login">
        <Dashboard/>
      </div>
      <div v-if="!login">
        <Login/>
      </div>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Login from './views/Login';

export default {
  name: 'App',
  components: {
         Dashboard, 
         Login
  },

  data: () => ({
    login:true,
    //
  }),
};
</script>
