<template>
  <div id="app">
    <navBar :navItems="navItems" />
    <router-view />
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "App",
  components: {
    navBar
  },
  data() {
    return {
      navItems: [
        {
          id: 1,
          name: "customers",
          icon: "fa-users",
          path: "/Customers"
        },
        {
          id: 2,
          name: "Snowsports",
          icon: "fa-ski-lift",
          path: "/Snowsports"
        },
        {
          id: 3,
          name: "Tubing",
          icon: "fa-sledding",
          path: "/Tubing"
        },
        {
          id: 4,
          name: "Booking Manager",
          icon: "fa-calendar-alt",
          path: "/Bookings"
        },
        {
          id: 5,
          name: "Parking",
          icon: "fa-cars",
          path: "/Parking"
        },
        {
          id: 6,
          name: "Administrator",
          icon: "fa-users-cog",
          path: "/Admin"
        },
        {
          id: 7,
          name: "User Settings",
          icon: "fa-user-edit",
          path: "/Settings"
        }
      ]
    };
  }
};
</script>
<style>
main {
  background: #f9f9f9;
  padding-left: 6vw;
  padding-right: 1vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
}
div {
  margin: 0;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  vertical-align: bottom;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.split-bar {
  width: 100%;
  height: 2px;
  background-color: #25a5cf;
}
.card {
  /*background-color: #f9f9f9;*/
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

.wrap {
  display: flex;
}
.options {
  margin-left: auto;
  margin-right: 1vw;
}
h1,
h2,
h4 {
  padding-left: 0.8vw;
  display: inline;
  color: #25a5cf;
  font-weight: lighter;
}
p {
  padding-left: 0.8vw;
  display: inline;
}

h1 {
  font-size: 1.5rem;
}
.title {
  display: flex;
}
</style>
<style>
/* Full Calendar overides */
.fc-today {
  background: inherit !important;
}
.fc-event {
  border-radius: 0 !important;
  filter: grayscale(10%) opacity(0.7);
  padding: 1px !important;
  margin: 1px !important;
}

/* Date Picker Overrides */
.vdp-datepicker__calendar {
  width: auto !important;
  height: 100% !important;
  max-height: 100%;
  padding: 2px;
}

.vdp-datepicker__calendar .cell .selected {
  background: #25a5cf;
}

.vdp-datepicker__calendar .cell {
  height: 30px !important;
  line-height: 30px !important ;
}
</style>
