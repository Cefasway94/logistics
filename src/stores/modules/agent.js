import axios from "axios"
/* eslint-disable no-console */


export default {
    state:{
        tenders: [],
        tenderdetails:[],
        dashboard: [],
        dashboarddetails: [],
        post_bid:[],
        logins:[],
        agent:[],
        profile:[],
    },

getters:{

// Tender getter =======================================>>>>
        LOAD_TENDERS: state => {
             const tenders = state.tenders;
             //eslint-disable-next-line no-console
             //console.log(tenders);
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
        },

// posted bid getter ========================================>>>>>>
        LOAD_POST_BID: state => {
            const posted_bid = state.post_bid;
            return posted_bid;
        },

// called agent ========================================>>>>>>
        LOAD_AGENT: state=>{
            const agent = state.agent;
            return agent
        },

// call profile ===================================>>>>>
        LOAD_PROFILE: state=>{
            const profile = state.profile;
            return profile
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

// agent bid on tender  mutation ================================>>>>>
        SET_POST_BID : (state,payload) =>{
            state.post_bid = payload;
        },

// called agent mutation ================================>>>>>
        SET_AGENT : (state,payload) =>{
            state.agent = payload;
            console.log('here agent');
            
        },

// edit profile mutation ================================>>>>>
        SET_PROFILE: (state,payload)=>{
            state.profile = payload;
            console.log('ediprofile');
        },


    },

actions: {
        // Tender actions =========================================>>>>
        GET_TENDERS: async ({commit},payload) => {
            const url= 'http://192.168.1.44:8000/api/v1/tenders/list/'+payload;
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

        GET_TENDERSDETAILs: async ({commit},payload) => {
             // eslint-disable-next-line no-console
            //console.log(payload);
            
            const url= 'http://192.168.1.44:8000/api/v1/tenders/'+payload;
            await axios.get(url).then((res)=>{
                // res.data.map(data=>{
                //     commit('SET_TENDER', data);
                //     // eslint-disable-next-line no-console
                //    console.log(res.data);
                // });===
                
                // eslint-disable-next-line no-console
                  //console.log(res.data.objects);
                commit('SET_TENDER', res.data.objects);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDER', res);
            }); 
        },

// Dashboard actions ==================================================>>>>>>
        GET_DASHBOARD: async ({commit},payload) => {
            
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
                
//Agent biding on tender ======================================================================= 
        BID_TENDER: ({ commit }, { agent_id, tender_id, bid_terms_and_conditions, bid_amount, bid_delivery_timeline}) => {
            return new Promise((resolve, reject) => {

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : localStorage.secret
                    }
                }
            axios
                .post(`http://192.168.1.44:8000/api/v1/bids`, {
                 agent_id,
                 tender_id,
                 bid_terms_and_conditions,
                 bid_amount, 
                 bid_delivery_timeline,
                },
                config
                )
                .then(({ data, status }) => {
                    console.log('posted');
                if (status === 200) {
                    resolve(true);
                    //console.log(data);
                    commit('SET_POST_BID',data);
                    
                        // commit doesn't point to the mutation
                }
                })
                .catch(error => {
                    console.log('not posted');
                reject (error);
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
                console.log('her');
                
                commit('SET_POST_BID', error);          
                //console.log(error);
                //console.log(data);
                
                });
            });
        },
        
        GET_AGENT: async ({commit},payload) => {
            const url= 'http://192.168.1.44:8000/api/v1/agents/show/'+payload;
            await axios.get(url).then((res)=>{
                // eslint-disable-next-line no-console
                console.log(res.data);
                commit('SET_AGENT', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_AGENT', res);
            }); 
                            
        },

// agent edit profile ====================================================================>>>>>>        
        EDIT_PROFILE: async ({ commit }, {company_name, tin_number, phone_number, address, email, pobox, country, city, region, terms_of_payment, bank_name, account_name, account_number,}) => {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : localStorage.secret
                    }
                }
         await axios.put(`http://192.168.1.44:8000/api/v1/agents/`+email, 
         {
                    company_name,
                    tin_number,
                    phone_number,
                    address,
                    pobox,
                    country,
                    city,
                    region,
                    terms_of_payment,
                    bank_name,
                    account_name,
                    account_number,
                },
                config
                )
                .then(({ data, status }) => {
                    console.log('profile edit');
                if ((status == 200 && data.errorCount == 0) && (data.genralErrorCode == 8000)) {
                    console.log(data);
                    commit('SET_PROFILE',data);
                    
                        // commit doesn't point to the mutation
                }
                })
                .catch(error => {
                    console.log('not posted');
                
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
                console.log('here');
                
                commit('SET_PROFILE', error);          
                //console.log(error);
                //console.log(data);
                
                });
            }
        },

}