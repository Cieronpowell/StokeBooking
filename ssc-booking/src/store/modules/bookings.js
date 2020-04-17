import axios from "axios";

const state = {
  bookings: []
};
const getters = {
  allBookings: state => state.bookings
};
const actions = {
  async fetchdata({ commit }) {
    console.log("run");
    const response = await axios.get(
      "https://sscbooking.free.beeceptor.com/booking"
    );
    console.log(response);
  }
};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
