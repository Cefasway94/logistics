<template>
  <v-alert 
    type="success"
    dismissible
    color="cyan darken-3"
    border="left"
    elevation="3"
    @input="onClickAlert">

    {{ message }}

    

    </v-alert>
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
      }
    }
}
</script>

<style>

</style>