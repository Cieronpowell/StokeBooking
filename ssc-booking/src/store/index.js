import Vue from "vue";
import Vuex from "vuex";
import bookings from "./modules/bookings";
import staff from "./modules/staff";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bookings,
    staff
  }
});
