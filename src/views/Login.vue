<template>
<!-- :src="require('../assets/newasset/truck.svg')" -->
<v-content >
    <v-parallax 
    height="auto"
    src="../assets/newasset/truck.svg">            
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


    created(){
      
                 if (localStorage.length >= 3){
                       
                       if (this.$route.fullPath == '/' && localStorage.category === "1") {
                             
                         this.$router.push('/agent/tenders/open')
    
                       }else if(this.$route.fullPath == '/' && localStorage.category === "2"){

                          this.$router.push('/transporter/tenders/open')

                       }else if(this.$route.fullPath == '/' && localStorage.category === "3"){

                          this.$router.push('/client')

                       }


                      this.login = false
                       
                    }


    },
 
}

</script>


