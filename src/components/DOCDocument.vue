<template>
     <v-overlay :value="docOverlay">
         <div class="doc-document">
            <VueDocPreview :value="docValue" :type="docType" />
         
                <div id="buttons">
                    <v-row>
                    <v-btn
                        small
                        elevation="flat" 
                        color="#4169E1" 
                        class="white--text"
                        @click="onClickCloseButton()"
                    >
                    close
                    
                        <v-icon small>mdi-close</v-icon>
                    </v-btn>
                    </v-row>
                </div>
              </div>
     </v-overlay>
</template>

<script>
import VueDocPreview from 'vue-doc-preview';
export default {
    props: {
    docValue: {
      type: String,
      required: true,
    },

    docType: {
      type: String,
      required: true,
    },
    
    docOverlay:{
      type: Boolean,
      required: true
    }
  },
  components:{VueDocPreview},

  methods: {
      onClickCloseButton () {
      this.$emit('clicked')
    }
  }
}
</script>
<style scoped>
    .doc-document{
        position: fixed;
        top:50%;
        left: 50%;
        width: 50%;
        height: 90%;
        transform: translate(-50%, -50%);
        z-index:2;
        background-color: white;
        overflow: scroll;
    }
</style>