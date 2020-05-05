<template>
  <v-container>

      <v-card class="mx-auto mt-12" color="#F5FAFF">

          <AlertError v-if="display_alert" v-bind:message="alert"/>

          

      </v-card>
     
  </v-container>
</template>

<script>
//import axios from 'axios'
import AlertError from '@/components/AlertError.vue'

export default {
  
  name: 'PaymentVerifying',

  data (){

    return{

      dialog: false,

      alert:'',
      display_alert: false,

      email:''

    }
  },

  components: {AlertError},

  methods: {
    


  },

  

  beforeRouteEnter(to, from, next){
    next(vm => {
        
    
      next();
    })

  }
}
</script>

<style>

</style>