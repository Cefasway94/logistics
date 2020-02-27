<template>
<v-content >
    <v-parallax 
    height="calc(100vh - 100px)"
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">            
<v-row wrap justify="end" class="pr-5" style="background-color:transparent;">
    <v-flex xs-12 sm11 md8 lg5 >        
    <router-view ></router-view>
</v-flex>
</v-row >
</v-parallax>
</v-content>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
 
}
</script>


