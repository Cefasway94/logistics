<template>

   <v-overlay :value="overlay">
     <v-alert 
        :type="type"
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

    props: ['message','type'],

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