import axios from 'axios'

export default {
    state:{

        AllClearingTenders:[],
        ClearingBidedTenders:[],
        ClearingTendersOnProgress:[],

        tender:[],
        tenderCreated:false,
        Alert:'',
        currencies:[],

        AllTransportingTenders:[],
        TransportingBidedTenders:[],
        TransportingOnProgressTenders:[],

        Tenders:[],
        BidedTenders:[],
        OnProgressTenders:[],
    },

    getters:{
        
        AllClearingTenders: (state) => state.AllClearingTenders,
        ClearingBidedTenders: (state) => state.ClearingBidedTenders,
        ClearingTendersOnProgress: (state) => state.ClearingTendersOnProgress,
        
        getTender: (state) => state.tender,

        tenderCreaed: (state) => state.tenderCreated,
        
        getCurrencies: (state) => state.currencies,

        getAlert:(state) => state.Alert,

        fetchTenderById: (state)=>(id)=>{
            return state.AllClearingTenders.find(tender=>tender.id === id);
        }, 


        AllTransportingTenders: (state) => state.AllTransportingTenders,
        TransportingBidedTenders: (state) => state.TransportingBidedTenders,
        TransportingOnProgressTenders: (state) => state.TransportingOnProgressTenders,

        Tenders: (state) => state.Tenders,
        BidedTenders: (state) => state.BidedTenders,
        OnProgressTenders: (state) => state.OnProgressTenders
    },

    mutations:{
       
        setAllClearingTenders: (state,tenders) => state.AllClearingTenders = tenders,
        setClearingBidedTenders: (state,tenders) => state.ClearingBidedTenders = tenders,
        setClearingTendersOnProgress: (state,tenders) => state.ClearingTendersOnProgress = tenders,

        //AddTender: (state,tender) => state.AllClearingTenders.unshift(tender),
        TestMutation:(state) => state.AllClearingTenders,
        tenderCreated:(state,status) => state.tenderCreated = status,

        setAlert:(state,message) => state.Alert = message,

        setTender: (state,tender) => {

            state.tender = tender;
        },

        setCurrencies: (state,currencies) => state.currencies = currencies,

        setAllTransportingTenders: (state,tenders) => state.AllTransportingTenders = tenders,
        setTransportingBidedTenders: (state, tenders) => state.TransportingBidedTenders = tenders,
        setTransportingOnProgressTenders: (state, tenders) => state.TransportingOnProgressTenders = tenders,

        setTenders: (state) => state.Tenders = state.AllClearingTenders.concat(state.AllTransportingTenders),
        setBidedTenders: (state) => state.BidedTenders = state.ClearingBidedTenders.concat(state.TransportingBidedTenders),
        setOnProgressTenders: (state) => state.OnProgressTenders = state.ClearingTendersOnProgress.concat(state.TransportingOnProgressTenders)

    },

    actions: {

        setAlert({commit},message){
            commit('setAlert',message)
        },

        fetchAllClearingTenders: async ({commit},customer_id) => {

            const url = `http://207.180.215.239:8000/api/v1/tenders/list/${customer_id}`;
            //const url = `http://192.168.43.27:8000/api/v1/tenders/list/${customer_id}`;

            await axios.get(url).
                            then((response) => {

                                commit('setAllClearingTenders',response.data.objects)

                            }).catch(()=>{

                                const response = null;
                                commit('setAllClearingTenders',response)
                            });
        },



        setTender: ({commit},tender) => {

            commit('setTender',tender)
        },

        fetchClearingBidedTenders: async ({commit},customer_id) => {

            const url = `http://207.180.215.239:8000/api/v1/tenders/bided/${customer_id}`;
            //const url2 = `http://192.168.43.27:8000/api/v1/tenders/bided/${customer_id}`;

            await axios.get(url).
                            then((response) => {

                                commit('setClearingBidedTenders',response.data.objects)

                            }).catch(()=>{

                                const response = null;
                                commit('setClearingBidedTenders',response)
                            });
        },

        fetchCurrencies: async ({commit}) => {

            const url = "http://207.180.215.239:8000/api/v1/configurations/currency";

            await axios.get(url).
                            then((response) => {

                                commit('setCurrencies',response.data.objects)

                            }).catch(()=>{

                                //const response = null;
                               // commit('setBidedTenders',response)

                                //eslint-disable-next-line no-console
                                console.log("there is an error");
                            });
        },

        fetchClearingTendersOnProgress: async ({commit},customer_id) => {

            const url = `http://207.180.215.239:8000/api/v1/tenders/on-progress/${customer_id}`;
            //const url = `http://192.168.43.27:8000/api/v1/tenders/on-progress/${customer_id}`;

            await axios.get(url).
                            then((response) => {

                                commit('setClearingTendersOnProgress',response.data.objects)

                            }).catch(()=>{

                                const response = null;
                                commit('setClearingTendersOnProgress',response)
                            });
        },

        fetchAllBidsOnTender: async ({commit},tender_id) => {
            const url = `http://207.180.215.239:8000/api/v1/bids/${tender_id}`;
            //const url = `http://192.168.43.27:8000/api/v1/tenders/on-progress/${customer_id}`;

            await axios.get(url).
                            then((response) => {

                                commit('setClearingTendersOnProgress',response.data.objects)

                            }).catch(()=>{

                                const response = null;
                                commit('setClearingTendersOnProgress',response)
                            });
        },

        fetchAllTransportingTenders: async ({commit},customer_id) => {

            const url = `http://207.180.215.239:9000/api/v1/tenders/list/${customer_id}`;
  
            await axios.get(url).
                              then((response) => {


                                //eslint-disable-next-line no-console
                                //console.log(response.data.objects);
                                  commit('setAllTransportingTenders',response.data.objects)
                                 
  
                              }).catch(()=>{
  
                                  //const response = null;
                                  //commit('setAllTenders',response)
                              });
        },
  
        fetchTransportingBidedTenders: async ({commit},customer_id) => {

        
            const url = `http://207.180.215.239:9000/api/v1/tenders/bided/${customer_id}`;
  
            await axios.get(url).
                                then((response) => {

                                       //eslint-disable-next-line no-console
                                        //console.log(response.data.objects);

                                    commit('setTransportingBidedTenders',response.data.objects)

                            }).catch(()=>{

                                //const response = null;
                                //commit('setClearingBidedTenders',response)
                                //eslint-disable-next-line no-console
                                        console.log("There is an error");

            });
        },
  
        fetchTransportingOnProgressTenders: async ({commit},customer_id) => {
  
            const url = `http://207.180.215.239:9000/api/v1/tenders/on-progress/${customer_id}`;
  
            await axios.get(url).
                              then((response) => {
  
                                  commit('setTransportingOnProgressTenders',response.data.objects)
                                   
                              }).catch(()=>{
  
                                  //const response = null;
                                  //commit('setAllTenders',response)
                              });
  
        },

        /*AddTender: async ({commit},tender)=>{

            const url = "http://207.180.215.239:8000/api/v1/tenders?customer_id=10";
            //const url = "http://192.168.43.27:8000/api/v1/tenders?customer_id=10";

            commit('tenderCreated',false);

            await axios.post(url,
                            tender,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).
                            then((response) => {

                                //eslint-disable-next-line no-console
                                //console.log(response.data);*

                                commit('AddTender',response.data.objects)
                                commit('tenderCreated',true);

                                //eslint-disable-next-line no-console
                                //console.log(response.data);

                            }).catch(()=>{

                                //eslint-disable-next-line no-console
                                console.log("error occured");
                                //const response = null;
                                //commit('AddTender',response)
                            });
        },*/

        AddTender: ({commit},tender)=>{

            commit('AddTender',tender)
        },


        setTenders: ({commit}) =>{

            commit('setTenders')
        },

        setOnProgressTenders: ({commit}) =>{
            commit('setOnProgressTenders')
        },

        setBidedTenders: ({commit}) => {
            commit('setBidedTenders')
        }
        
    }
}