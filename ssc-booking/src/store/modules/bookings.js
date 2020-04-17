import axios from "axios";

const state = {
  bookings: []
};
const getters = {
  allBookings: state => state.bookings
};
const actions = {
  async fetchBookings({ commit }) {
    const response = await axios.get("http://demo1356085.mockable.io/booking");
    commit("setBookings", response.data);
  },
  async addBooking({ commit }, data) {
    /*  const response = await axios.post(
      "https://sscbooking.free.beeceptor.com/booking",
      { data }
    ); */

    commit("newBooking", data);
  }
};
const mutations = {
  setBookings: (state, bookings) => (state.bookings = bookings),
  newBooking: (state, booking) => state.bookings.push(booking)
};

export default {
  state,
  getters,
  actions,
  mutations
};
