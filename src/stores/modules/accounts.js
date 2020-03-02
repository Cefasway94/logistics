/* eslint-disable no-console */
import axios from "axios"


export default {
  state:{
    login: [],
    register:[],
},

getters:{
// Register getter =======================================>>>>
    LOAD_REGISTER: state => {
         const register = state.register;
         //eslint-disable-next-line no-console
         console.log(register);
         return register                           
    },

// Login getter =======================================>>>>
      LOAD_LOGIN: state => {
        const login = state.login;
        //eslint-disable-next-line no-console
        console.log(login);
        return login                           
      },

},

mutations: {
// Register section mutation  ========================>>>
    SET_REGISTER: (state, payload) => {
        state.register = payload;
        //eslint-disable-next-line no-console
        //console.log(state.register);
    },

// Login section mutation  ========================>>>
    SET_LOGIN: (state, payload) => {
      state.login = payload;
      //eslint-disable-next-line no-console
      //console.log(state.register);
  }
},

actions: {

// Login action =========================================>>>>>>
      REGISTER: ({ commit }, { name, email, password, password_confirmation, category, phone }) => {
        return new Promise((resolve, reject) => {
          axios
            .post(`http://192.168.8.101/api/v1/profiles/register`, {
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
                commit('SET_REGISTER',data);
                
                       // commit doesn't point to the mutation
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

// Login action =========================================>>>>>>
      LOGIN: ({commit},{email, password}) => {
        return new Promise((resolve, reject) => {
          axios
            .post(`http://192.168.8.101/api/v1/profiles/login`, {email, password})
            .then(({ data, status }) => {             
              if (status === 200) {
                
                resolve(true);
                commit('SET_LOGIN',data)
                localStorage.setItem("secret", data.objects[0]);
                localStorage.setItem("category", data.objects[1]);     // commit doesn't point to the mutation
              }
            })
            .catch(error => {
              reject(error);
            });
        });
      },
  }
}