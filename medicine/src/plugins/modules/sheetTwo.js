import PostService from '@/PostService';

const state = {
    items: [],
};

const getters = {
    allItemsSheetTwo: (state) => state.items
}

const actions = {
    async fetchItemsTwo({ commit }) {
        try {
            commit('setItems', await PostService.getSheetTwo());
        } catch(err) {
            console.log(err);
        }
    },
    async insertItemTwo({ commit }, data ) {
        PostService.insertItem2(data).then(() => {
            commit('addItem', data);
        });
    }  
}

const mutations = {
    setItems: (state, items) => (state.items = items),
    addItem: (state, item) => (state.items.unshift(item)),
}

export default {
    state,
    getters,
    actions,
    mutations,
  };