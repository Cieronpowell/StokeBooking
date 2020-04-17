import axios from "axios";

const state = {
  todaysStaff: []
};
const getters = {
  todaysStaff: state => state.todaysStaff
};
const actions = {
  async fetchStaff({ commit }) {
    const response = await axios.get("http://demo1356085.mockable.io/staff");
    commit("setStaff", response.data);
  }
};
const mutations = {
  setStaff: (state, staff) => (state.todaysStaff = staff)
};

export default {
  state,
  getters,
  actions,
  mutations
};
