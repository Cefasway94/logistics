<template>

     <v-overlay :value="pdfOverlay">
       <div class="pdf-document">

        <div id="progress">

        <v-progress-circular
          indeterminate
          :size=50
          color="primary"
        ></v-progress-circular>
      
        </div>


        <div id="preview">

          <canvas id="canvas">

          </canvas>

          <div id="buttons">
            <v-row>
              <v-btn
                large
                elevation="flat" 
                color="#4169E1" 
                class="white--text"
                @click="onClickCloseButton()"
              >
              close
            
                <v-icon small>mdi-close</v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn
                large
                elevation="flat" 
                color="#4169E1" 
                class="white--text"
                @click="downloadPdf()">
                Download
                 <v-icon small>mdi-download</v-icon>
                </v-btn>
            </v-row>
          </div>
        </div>
     
      </div>
     </v-overlay>
    
</template>

<script>
import axios from 'axios'
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    
    pdfOverlay:{
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      pdf: undefined,
      pages: {},
    };
  },
 
  methods: {
   
    fetchPDF() {
    
    if(this.url !==''){
        import('pdfjs-dist/webpack').then(pdfjs=>{

        pdfjs.getDocument(this.url).then(doc=>{
          doc.getPage(1).then(page=>{

            var viewport = page.getViewport(1);
          
            const canvas =document.getElementById('canvas');
            canvas.height = viewport.height
            canvas.width = viewport.width

            const context = canvas.getContext('2d');

            page.render({
                canvasContext: context,
                viewport: viewport
              });

    });
  }

  );
});
    }
     
    },

    onClickCloseButton () {
      this.$emit('clicked')
    },

     getFileName(url){

        let position = url.lastIndexOf('/');

        let extracted_string = url.slice(position + 1, url.length + 1);

        return extracted_string;

     },

     forceFileDownload(response){

        let filename = this.getFileName(this.url);

        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', filename) //or any other extension
        document.body.appendChild(link)
        link.click()
      },

     downloadPdf(){
       axios({
            //url: this.agent.profile_image[0],
            url: this.url,
            method: 'GET',
            responseType: 'blob' // important

        }).then((response) => {

            this.forceFileDownload(response);
            this.$emit('clicked')
        });
     }
  },
  created() {
    this.fetchPDF();
  },
};
</script>
<style>

.pdf-document {
  position: fixed;
  top:50%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  /*position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);*/
  z-index:2;
  background-color: bisque;
  overflow: scroll;

}

#progress{
  position:fixed;
  top:50%;
  left:50%;
  z-index: -1;
}

#buttons{
  position: relative;
  bottom:0;
  z-index:3;
}
#preview{
  z-index:2;
}
</style>