import Vue from 'vue';
import Vuex from 'vuex';

// imported modules
import tender from './modules/agent';
import accounts from './modules/accounts'
import client from './modules/client'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        tender,
        accounts,
        client
         
    }
});

export default store 