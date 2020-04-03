import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Bookings from "../views/Bookings.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/Bookings",
    name: "Bookings",
    component: Bookings
  },
  {
    path: "/Snowsports",
    name: "Snowsports",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Snowsports" */ "../views/Snowsports.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
