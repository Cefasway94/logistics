import axios from "axios"


export default {
    state:{
        tenders: [],
        tenderdetails:[],
    },
    getters:{
        LOAD_TENDERS: state => {
             const tenders = state.tenders;
             return tenders
               //eslint-disable-next-line no-console
            //console.log(tenders);
        },
        LOAD_TENDERDETAILS: state => {
            const tenderdetails = state.tenderdetails;
            return tenderdetails
              //eslint-disable-next-line no-console
            //console.log(tenderdetails);
           
            
       },
    },
    mutations: {
        SET_TENDERS: (state, payload) => {
            state.tenders = payload;
            
            
        },
        SET_TENDERDETAILS: (state, payload) => {
            state.tenderdetails = payload;
            //eslint-disable-next-line no-console
            //console.log(state.tenderdetails);
            
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
        },

        GET_TENDERSDETAIL: async ({commit},payload) => {
            // axios.get('http://192.168.10.219:5000/api/v1/tenders/list/open')
            // .then(data =>{
            //     console.log(data)
            //     let tenders = data.data
            //     commit ("SET_TENDERS",tenders);
            // }).catch(error =>{
            //     console.log(error)
            // })
        const url= 'https://jsonplaceholder.typicode.com/todos';
            await axios.get(url,{
                params:{
                    id:payload,
                }
            }).then((res)=>{
                // eslint-disable-next-line no-console
                //console.log(res.data);
                commit('SET_TENDERDETAILS', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDERDETAILS', res);
            });                   
        },

        // GET_BIDTENDERS: async ({commit},payload) => {
        //     // axios.get('http://192.168.10.219:5000/api/v1/tenders/list/open')
        //     // .then(data =>{
        //     //     console.log(data)
        //     //     let tenders = data.data
        //     //     commit ("SET_TENDERS",tenders);
        //     // }).catch(error =>{
        //     //     console.log(error)
        //     // })
        // const url= 'https://jsonplaceholder.typicode.com/'+payload;
        //     await axios.get(url).then((res)=>{
        //         // eslint-disable-next-line no-console
        //         console.log(res.data);
        //         commit('SET_TENDERS', res.data);
        //     }).catch((error)=>{
        //         //eslint-disable-next-line no-console
        //         console.log(error);
        //         const res=null;
        //         commit('SET_BIDTENDERS', res);
        //     });                   
        // }

    }

}