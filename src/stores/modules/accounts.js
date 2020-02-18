import axios from "axios"


export default {
state:{},

getters:{},

mutations: {},

actions: {
    LOGIN: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
          axios
            .post(``, payload)
            .then(({ data, status }) => {
              if (status === 200) {
                resolve(true);
                commit('peter',data)       // fix the commit
                return data;
              }
            })
            .catch(error => {
              reject(error);
            });
        });
      },

      REGISTER: ({ commit }, { username, email, password }) => {
        return new Promise((resolve, reject) => {
          axios
            .post(``, {
              username,
              email,
              password
            })
            .then(({ data, status }) => {
              if (status === 201) {
                resolve(true);
                commit('peter',data)       // fix the commit
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