const initialState = {
  isAdmin: true,
}

const getters = {
  getAdminStatus: (state) => state.isAdmin,

}

const actions = {
  fetchData({ commit, dispatch }, data){
    
  },
}

const mutations = {
  setAdminStatus(state, status){
    state.isAdmin = status;
  },
  
}


export default {
  state: () => initialState,
  getters,
  actions,
  mutations,
}


