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
        GET_TENDERS: async ({commit},payload) => {
            // axios.get('http://192.168.10.219:5000/api/v1/tenders/list/open')
            // .then(data =>{
            //     console.log(data)
            //     let tenders = data.data
            //     commit ("SET_TENDERS",tenders);
            // }).catch(error =>{
            //     console.log(error)
            // })
        const url= 'https://jsonplaceholder.typicode.com/'+payload;
            await axios.get(url).then((res)=>{
                // eslint-disable-next-line no-console
                console.log(res.data);
                commit('SET_TENDERS', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDERS', res);
            });                   
            
            
        }

    }

}