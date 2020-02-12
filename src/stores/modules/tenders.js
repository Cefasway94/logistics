import axios from "axios"


export default {
    state:{
        tenders: [],
        tenderdetails:[],
    },
    getters:{
        LOAD_TENDERS: state => {
             const tenders = state.tenders;
             //eslint-disable-next-line no-console
             console.log(tenders);
             return tenders             
                        
        },
        LOAD_TENDER: state => {
            const tenderdetails = state.tenderdetails
            return tenderdetails;
        }
    //     LOAD_TENDERDETAILS: state => {
    //         const tenderdetails = state.tenderdetails;
    //         //return tenderdetails
    //           //eslint-disable-next-line no-console
    //         console.log(tenderdetails);
                       
    //    },
    },
    mutations: {
        SET_TENDERS: (state, payload) => {
            state.tenders = payload;
            //eslint-disable-next-line no-console
            //console.log(state.tenders);
        },
        // SET_TENDERDETAILS: (state, payload) => {
        //     state.tenders = payload;
        //     //eslint-disable-next-line no-console
        //     //console.log(state.tenders);
            
        // },
        SET_TENDER: (state, payload) => {
            state.tenderdetails = payload;
        }

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
                //console.log(res.data);
                commit('SET_TENDERS', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDERS', res);
            });                   
        },

        GET_TENDERSDETAILs: async ({commit},payload) => {
            // axios.get('http://192.168.10.219:5000/api/v1/tenders/list/open')
            // .then(data =>{
                // eslint-disable-next-line no-console
                console.log(payload)
            //     let tenders = data.data
            //     commit ("SET_TENDERS",tenders);
            // }).catch(error =>{
            //     console.log(error)
            // })
        const url= 'https://jsonplaceholder.typicode.com/users';
            await axios.get(url,{
                params:{
                    id:payload,
                }
            }).then((res)=>{
                res.data.map(data=>{
                    commit('SET_TENDER', data);
                    // eslint-disable-next-line no-console
                   console.log(res.data);
                });
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDER', res);
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