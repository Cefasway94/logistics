/* eslint-disable no-console */
import axios from "axios"


export default {
  state:{
    Login: [],
    Register:[],
},

getters:{
// Tender getter =======================================>>>>
    LOAD_RESPONSE: state => {
         const tenders = state.register;
         //eslint-disable-next-line no-console
         console.log(tenders);
         return tenders                           
    }

},

mutations: {
    // Tender section mutation  ========================>>>
    RESPONSE: (state, payload) => {
        state.register = payload;
        //eslint-disable-next-line no-console
        //console.log(state.register);
    }
},

actions: {
    LOGIN: ({commit},payload) => {
        return new Promise((resolve, reject) => {
          axios
            .post(``, payload)
            .then(({ data, status }) => {
              if (status === 200) {
                resolve(true);
                commit(data)       // commit doesn't point to the mutation
                return data;
              }
            })
            .catch(error => {
              reject(error);
            });
        });
      },

      REGISTER: ({ commit }, { name, email, password, password_confirmation, category, phone }) => {
        return new Promise((resolve, reject) => {
          axios
            .post(`http://192.168.8.105/api/v1/profiles/register`, {
              name,
              email,
              password,
              password_confirmation,
              phone,
              category
            })
            .then(({ data, status }) => {
              if (status === 200) {
                resolve(true);
                //console.log(data);
                commit('RESPONSE',data);       // commit doesn't point to the mutation
              }
            })
            .catch(error => {
              reject (error);
              if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
              }
              //commit('RESPONSE',error);          
              //console.log(error);
              //console.log(data);
              
            });
        });
      },
}
}