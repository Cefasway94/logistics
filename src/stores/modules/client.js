import axios from 'axios'

export default {
    state:{

        AllTenders:[],
        BidedTenders:[],
        TendersOnProgress:[],
        tender:[],
        tenderCreated:false,
        Alert:''

    },

    getters:{
        
        AllTenders: (state) => state.AllTenders,
        BidedTenders: (state) => state.BidedTenders,
        TendersOnProgress: (state) => state.TendersOnProgress,
        getTender: (state) => state.tender,
        tenderCreaed: (state) => state.tenderCreated,

        getAlert:(state) => state.Alert,

        fetchTenderById: (state)=>(id)=>{
            return state.AllTenders.find(tender=>tender.id === id);
        }  
    },

    mutations:{
       
        setAllTenders: (state,tenders) => state.AllTenders = tenders,
        setBidedTenders: (state,tenders) => state.BidedTenders = tenders,
        setOnProgressTenders: (state,tenders) => state.TendersOnProgress = tenders,
        AddTender: (state,tender) => state.AllTenders.unshift(tender),
        TestMutation:(state) => state.AllTenders,
        tenderCreated:(state,status) => state.tenderCreated = status,

        setAlert:(state,message) => state.Alert = message,

        setTender: (state,id) => {

            state.tender = state.AllTenders.find(tender=>tender.id === id);
        },
    },

    actions: {

        setAlert({commit},message){
            commit('setAlert',message)
        },

        fetchAllTenders: async ({commit},customer_id) => {

            const url = `http://192.168.1.44:8000/api/v1/tenders/list/${customer_id}`;
            //const url = `http://192.168.43.27:8000/api/v1/tenders/list/${customer_id}`;

            await axios.get(url).
                            then((response) => {

                                commit('setAllTenders',response.data.objects)

                            }).catch(()=>{

                                const response = null;
                                commit('setAllTenders',response)
                            });
        },

        setTender: async ({commit},tender_id) => {

            //const url = `http://192.168.1.44:8000/api/v1/tenders/list/${customer_id}`;
            //const url2 = `http://192.168.43.27:8000/api/v1/tenders/list/${customer_id}`

            commit('setTender',tender_id)
        },

        fetchBidedTenders: async ({commit},customer_id) => {

            const url = `http://192.168.1.44:8000/api/v1/tenders/bided/${customer_id}`;
            //const url2 = `http://192.168.43.27:8000/api/v1/tenders/bided/${customer_id}`;

            await axios.get(url).
                            then((response) => {

                                commit('setBidedTenders',response.data.objects)

                            }).catch(()=>{

                                const response = null;
                                commit('setBidedTenders',response)
                            });
        },

        fetchOnProgressTenders: async ({commit},customer_id) => {

            const url = `http://192.168.1.44:8000/api/v1/tenders/on-progress/${customer_id}`;
            //const url = `http://192.168.43.27:8000/api/v1/tenders/on-progress/${customer_id}`;

            await axios.get(url).
                            then((response) => {

                                commit('setOnProgressTenders',response.data.objects)

                            }).catch(()=>{

                                const response = null;
                                commit('setOnProgressTenders',response)
                            });
        },

        /*AddTender: async ({commit},tender)=>{

            const url = "http://192.168.1.44:8000/api/v1/tenders?customer_id=10";
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
        }
    }
}