import axios from "axios"


export default {
    state:{
        tenders: []
    },
    getters:{
        LOAD_TENDERS: state => {
             const tenders = state.tenders;
             return tenders
        },
    },
    mutations: {
        SET_TENDERS: (state, payload) => {
            state.tenders = payload;
            
        },

    },
    actions: {
        GET_TENDERS: async ({commit}) => {
            // axios.get('http://192.168.10.219:5000/api/v1/tenders/list/open')
            // .then(data =>{
            //     console.log(data)
            //     let tenders = data.data
            //     commit ("SET_TENDERS",tenders);
            // }).catch(error =>{
            //     console.log(error)
            // })
            await axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
                // eslint-disable-next-line no-console
                console.log(res.data);
                commit('SET_TENDERS', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
            });
                      
            
            
        }

    }

}