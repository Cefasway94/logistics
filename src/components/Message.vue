<template>

   <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar.showing"
      :timeout = 4000
      :top="true"
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <v-btn
        color="white"
        text
        @click="snackbar.showing = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
  
</template>


<script>
import { mapGetters} from 'vuex'

export default {
    name: 'Message',
    data(){
      return {
       
       snackbar:{}
       }
    },

    computed:{
      ...mapGetters(['getSnackbar'])
    },

    created:function(){

      this.snackbar = this.getSnackbar;

    }
  }

</script>

<style scoped>
.snackbar{
  position: relative;
  top:50%;
}
</style>