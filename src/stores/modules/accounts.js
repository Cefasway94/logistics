/* eslint-disable no-console */
import axios from "axios"


export default {
//   state:{
//     Login: [],
//     Register:[],
// },

// getters:{
// // Tender getter =======================================>>>>
//     LOAD_TENDERS: state => {
//          const tenders = state.tenders;
//          //eslint-disable-next-line no-console
//          console.log(tenders);
//          return tenders                           
//     }

// },

// mutations: {
//     // Tender section mutation  ========================>>>
//     SET_TENDERS: (state, payload) => {
//         state.tenders = payload;
//         //eslint-disable-next-line no-console
//         //console.log(state.tenders);
//     }
// },

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

      REGISTER: ({ commit }, { username, email, password, secret, category }) => {
        return new Promise((resolve, reject) => {
          axios
            .post(`http://192.168.1.66/api/v1/profiles/register`, {
              username,
              email,
              password,
              secret,
              category
            })
            .then(({ data, status }) => {
              if (status === 201) {
                resolve(true);
                console.log(data);
                commit(data);       // commit doesn't point to the mutation
                return data;
              }
            })
            .catch(error => {
              reject(error);
            });
        });
      },
}
}