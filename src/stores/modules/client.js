import axios from 'axios'

export default {
    state:{

        AllTenders:[],
        BidedTenders:[],
        TendersOnProgress:[]

    },

    getters:{
        AllTenders: (state) => state.AllTenders,
        BidedTenders: (state) => state.BidedTenders,
        TendersOnProgress: (state) => state.TendersOnProgress
    },

    mutations:{
       
        setAllTenders: (state,tenders) => state.AllTenders = tenders,
        setBidedTenders: (state,tenders) => state.BidedTenders = tenders,
        setOnProgressTenders: (state,tenders) => state.TendersOnProgress = tenders,
        AddTender: (state,tender) => state.AllTenders.unshift(tender)

    },

    actions: {

        fetchAllTenders: async ({commit},customer_id) => {

            const url = `http://192.168.1.44:8000/api/v1/tenders/list/${customer_id}`;

            await axios.get(url).
                            then((response) => {

                                commit('setAllTenders',response.data.objects)

                            }).catch(()=>{

                                const response = null;
                                commit('setAllTenders',response)
                            });
        },

        fetchBidedTenders: async ({commit},customer_id) => {

            const url = `http://192.168.1.44:8000/api/v1/tenders/bided/${customer_id}`;

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

            await axios.get(url).
                            then((response) => {

                                commit('setOnProgressTenders',response.data.objects)

                            }).catch(()=>{

                                const response = null;
                                commit('setOnProgressTenders',response)
                            });
        },

        AddTender: async ({commit},tender)=>{

            const url = "http://192.168.1.44:8000/api/v1/tenders?customer_id=10";

            await axios.post(url,tender).
                            then((response) => {

                                commit('AddTender',response.data.objects)

                            }).catch(()=>{

                                //const response = null;
                                //commit('AddTender',response)
                            });
        }

    }
}