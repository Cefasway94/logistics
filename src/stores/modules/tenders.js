import axios from "axios"


export default {
    state:{
        tenders: [],
        tenderdetails:[],
        dashboard: [],
        dashboarddetails: []
    },

getters:{
    // Tender getter =======================================>>>>
        LOAD_TENDERS: state => {
             const tenders = state.tenders;
             //eslint-disable-next-line no-console
             console.log(tenders);
             return tenders             
                        
        },
        LOAD_TENDER: state => {
            const tenderdetails = state.tenderdetails;
            //eslint-disable-next-line no-console
            console.log(tenderdetails);
            return tenderdetails;
        },

    // Dashboard getter ==================================>>>>
        LOAD_DASHBOARDS: state => {
             const dashboard = state.dashboard;
             //eslint-disable-next-line no-console
             //console.log(dashboard);
             return dashboard             
                        
        },
        LOAD_DASHBOARD: state => {
            const dashboarddetails = state.dashboarddetails
            return dashboarddetails;
        }

    },

mutations: {
        // Tender section mutation  ========================>>>
        SET_TENDERS: (state, payload) => {
            state.tenders = payload;
            //eslint-disable-next-line no-console
            //console.log(state.tenders);
        },
    
        SET_TENDER: (state, payload) => {
            state.tenderdetails = payload;
        },

        // dashboard section mutation =======================>>>>>>
        SET_DASHBOARDS: (state, payload) => {
            state.dashboard = payload;
        },
        SET_DASHBOARD: (state, payload) => {
            state.dashboarddetails = payload;
        },


    },

actions: {
        // Tender actions =========================================>>>>
        GET_TENDERS: async ({commit},payload) => {
            const url= 'http://test-clearing.oxoafrica.co.tz/api/v1/tenders/list/'+payload;
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
            // axios.get('http://192.168.10.219:5000/api/v1/tenders/list/open')
            // .then(data =>{
            //     console.log(data)
            //     let tenders = data.data
            //     commit ("SET_TENDERS",tenders);
            // }).catch(error =>{
            //     console.log(error)
            // })=========================================
        // const url= 'https://jsonplaceholder.typicode.com/'+payload;
        //     await axios.get(url).then((res)=>{
        //         // eslint-disable-next-line no-console
        //         //console.log(res.data);
        //         commit('SET_TENDERS', res.data);
        //     }).catch((error)=>{
        //         //eslint-disable-next-line no-console
        //         console.log(error);
        //         const res=null;
        //         commit('SET_TENDERS', res);
        //     });                   
        },

        GET_TENDERSDETAILs: async ({commit},payload) => {
            //const url= 'http://test-clearing.oxoafrica.co.tz/api/v1/tenders/'+payload;

            const url = 'http://192.168.43.27:8000/api/v1/tenders/'+payload;
            await axios.get(url).then((res)=>{
                // res.data.map(data=>{
                //     commit('SET_TENDER', data);
                //     // eslint-disable-next-line no-console
                //    console.log(res.data);
                // });===
                
                // eslint-disable-next-line no-console
                   console.log(res.data);
                commit('SET_TENDER', res.data.objects);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDER', res);
            }); 
            // axios.get('http://192.168.10.219:5000/api/v1/tenders/list/open')
            // .then(data =>{
                // eslint-disable-next-line no-console
                console.log(payload)
            //     let tenders = data.data
            //     commit ("SET_TENDERS",tenders);
            // }).catch(error =>{
            //     console.log(error)
            // })=================================================================>>>
        // const url= 'https://jsonplaceholder.typicode.com/users';
        //     await axios.get(url,{
        //         params:{
        //             id:payload,
        //         }
        //     }).then((res)=>{
        //         res.data.map(data=>{
        //             commit('SET_TENDER', data);
        //             // eslint-disable-next-line no-console
        //            console.log(res.data);
        //         });
        //     }).catch((error)=>{
        //         //eslint-disable-next-line no-console
        //         console.log(error);
        //         const res=null;
        //         commit('SET_TENDER', res);
        //     });                   
        },

// Dashboard actions ==================================================>>>>>>
        GET_DASHBOARD: async ({commit},payload) => {
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
                commit('SET_DASHBOARDS', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_DASHBOARDS', res);
            });                   
        },

        GET_DASHBOARDDETAILs: async ({commit},payload) => {
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
                commit('SET_DASHBOARD', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_DASHBOARD', res);
            });                   
        },

    }
}