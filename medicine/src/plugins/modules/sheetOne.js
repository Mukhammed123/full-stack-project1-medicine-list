import PostService from '@/PostService';

const state = {
    items: [],
};

const getters = {
    allItemsSheetOne: (state) => state.items
}

const actions = { 
    async fetchItemsOne({ commit }) {
        try {
            commit('setItemsOne', await PostService.getSheetOne());
        } catch(err) {
            console.log(err)
        }
    },
    async insertItemOne({ commit }, data ) {
        PostService.insertItem(data).then(() => {
            commit('addItemOne', data);
        });
    } 
}

const mutations = {
    setItemsOne: (state, items) => (state.items = items),
    addItemOne: (state, item) => (state.items.unshift(item)),
}

export default {
    state,
    getters,
    actions,
    mutations,
  };