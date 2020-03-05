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
        setOnProgressTenders: (state,tenders) => state.TendersOnProgress = tenders

    },

    actions: {
        async fetchAllTenders({commit},customer_id){

        
            const tenders = await axios.get(`http://192.168.43.27:8000/api/v1/tenders/list/${customer_id}`);

            commit('setAllTenders',tenders.data.objects)
        },

        async fetchBidedTenders({commit},customer_id){

        
            const tenders = await axios.get(`http://192.168.43.27:8000/api/v1/tenders/bided/${customer_id}`);

            commit('setBidedTenders',tenders.data.objects)
        },

        async fetchOnProgressTenders({commit},customer_id){

        
            const tenders = await axios.get(`http://192.168.43.27:8000/api/v1/tenders/on-progress/${customer_id}`);

            commit('setOnProgressTenders',tenders.data.objects)
        }

    }
}