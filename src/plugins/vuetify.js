import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont:'md',  
        
    },
    theme:{
        themes:{
            light:{
            primary:'#4169E1',
            mainorange:'#FF8C00',
            text:'#394361',
            white:'#FFFFFF ',
            red:'#DC493A',
            green:'#4CB944',
            awarded:'#4CB944',
            'Not awarded':'#FF8C00',
            lblue:'#F5FAFF',
            lgray0:'#BCBCCB',
            lgray1:'#E9E9F0',
            darkblue:'#3F51B5',
            paleblack:'#37474F',
            try:'#7486e8'
            },
            
        }
        

   }
    
});
