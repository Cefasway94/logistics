import Vue from 'vue';
import Vuex from 'vuex';

// imported modules
import tender from './modules/tenders';


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        tenders:tender,
        

    }
});

export default store 