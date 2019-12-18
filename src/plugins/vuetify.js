import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont:'md',  
    },
    theme:{
        primary:'#4169E1',
        mainoragne:'FF8C00',
        text:'#394361',
        white:'#FFFFFF ',
        red:'#DC493A',
        green:'#4CB944',
        lblue:'#F5FAFF',
        lgray0:'#BCBCCB',
        lgray1:'#E9E9F0'

   }
    
});
