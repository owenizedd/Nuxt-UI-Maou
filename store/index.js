const initialState = {
  isAdmin: false,
  username: '',
}

const getters = {
  getAdminStatus: (state) => state.isAdmin,
  getUsername: (state) => state.username,
}

const actions = {
  fetchData({ commit, dispatch }, data){
    
  },
}

const mutations = {
  setAdminStatus(state, status){
    state.isAdmin = status;
  },
  setUsername(state, username){
    state.username = username;
  },
  
}


export default {
  state: () => initialState,
  getters,
  actions,
  mutations,
}


