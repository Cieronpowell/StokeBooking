import Vue from "vue";
import Vuex from "vuex";
import bookings from "./modules/bookings";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bookings
  }
});
