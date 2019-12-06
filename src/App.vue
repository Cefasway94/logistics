<template>
  <v-app>
    <v-content>
      <div v-if="!login">
        <Home/>
      </div>
      <div>
        <Login/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Login from './views/Login';
import Home from './views/Home';
import Login from './views/Login';

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
