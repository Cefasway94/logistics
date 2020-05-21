<template>

   <v-overlay :value="overlay">
     <v-alert 
        type="success"
        dismissible
        color="cyan darken-3"
        border="left"
        elevation="3"
        @input="onClickAlert"
      >

      {{ message }}

    

      </v-alert>
   </v-overlay>
  
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'alert',

    props: ['message'],

    methods: {
      ...mapActions(['setAlert']),

      onClickAlert(){
        this.setAlert('');
        this.overlay = false
      }
    },
    data(){
      return {
        overlay: true,
      }
    }
}
</script>

<style>

</style>