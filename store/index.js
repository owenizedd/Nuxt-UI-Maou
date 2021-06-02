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
  login({commit, dispatch}, {email, password}){
    if (email === 'admin@maou.com' && password === 'admin'){
      commit('setUsername', email);
      commit('setAdminStatus', true);
    }
    if (email==='user@gmail.com' && password === 'user'){
      commit('setUsername', email);
      commit('setAdminStatus', false);
    }
  },
  findBestRoute(context, data){
    fetch(`https://api-fpa.herokuapp.com/findbestroute`, {
      method: 'GET',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
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


