<template>
    <div class="pdf-document">

      <canvas id="canvas">

      </canvas>

    </div>
</template>

<script>

export default {
  props: {
    url: {
      type: String,
      required: true,
    },
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
     
    }
  },
  created() {
    this.fetchPDF();
  },
};
</script>
<style>

.pdf-document {
  /*position: fixed;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  
  overflow: scroll;
  width: 100%;
  height: 100%;
}
</style>