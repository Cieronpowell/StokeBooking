<template>
  <main>
    <bookingModal v-show="bookingModal" @close="closeModal" />
    <div class="calendar-container card">
      <div class="title">
        <h1>Bookings</h1>
        <h2 class="options">...</h2>
      </div>
      <div class="split-bar"></div>
      <FullCalendar
        ref="fullCalendar"
        class="calendar"
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        height="auto"
        editable="true"
        :slotEventOverlap="false"
        selectable="true"
        minTime="08:00:00"
        maxTime="23:00:00"
        @eventReceive="bookingAdded"
        @eventClick="openBooking"
        slotDuration="00:30:00"
        :slotLabelInterval="slotLabelInterval"
        :plugins="calendarPlugins"
        :header="{ left: '', center: 'title', right: '' }"
        defaultView="resourceTimeGridDay"
        :allDaySlot="allDaySlot"
        :events="allBookings"
        :resources="[
          { id: '1', title: 'Main Slope' },
          { id: '2', title: 'Intermidiate Slope' },
          { id: '3', title: 'Small Slope 1' },
          { id: '4', title: 'Small Slope 2' }
        ]"
        :businessHours="businessHours"
      />
    </div>
    <div id="booking-options" class="booking-options card">
      <div class="title">
        <h1>Booking Options</h1>
        <h2 class="options">...</h2>
      </div>
      <div class="split-bar"></div>
      <calendarKey :bookingTypes="bookingTypes" />
    </div>
    <div class="date-selector card">
      <div class="title">
        <h1>Date Selection</h1>
        <h2 class="options">...</h2>
      </div>
      <div class="split-bar"></div>
      <datepicker
        :selected="changeCalendarDate"
        :value="state.date"
        :inline="true"
        @selected="changeCalendarDate"
      ></datepicker>
    </div>
  </main>
</template>
<script>
// @ is an alias to /src
import FullCalendar from "@fullcalendar/vue";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import calendarKey from "@/components/calendarKey";
import bookingModal from "@/components/bookingModal.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "overview",
  components: {
    FullCalendar,
    Datepicker,
    calendarKey,
    bookingModal
  },
  computed: mapGetters(["allBookings"]),
  created() {
    this.fetchBookings();
  },
  data() {
    return {
      bookingModal: false,
      state: { date: new Date() },
      calendarPlugins: [resourceTimeGridPlugin, interactionPlugin],
      allDaySlot: false,
      droppable: true,
      slotLabelInterval: { hours: 1 },
      businessHours: [
        {
          daysOfWeek: [0, 1, 2, 3, 4],
          startTime: "10:00",
          endTime: "21:00"
        },
        {
          daysOfWeek: [5, 6],
          startTime: "09:00",
          endTime: "18:00"
        }
      ],
      bookingTypes: [
        {
          id: 1,
          name: "Group Booking (Ski)",
          color: "green"
        },
        {
          id: 2,
          name: "Adult Ski Lesson",
          color: "red"
        }
      ]
    };
  },
  mounted() {
    this.setupDraggable();
  },
  methods: {
    showModal() {
      this.bookingModal = true;
    },
    closeModal() {
      this.bookingModal = false;
    },
    setupDraggable() {
      new Draggable(document.getElementById("booking-options"), {
        itemSelector: ".booking",
        eventData: function(eventEl) {
          let event = {
            title: eventEl.innerText,
            color: eventEl.getAttribute("data-color"),
            duration: "01:00",
            create: true
          };
          return event;
        }
      });
    },
    changeCalendarDate(date) {
      let calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.gotoDate(date);
    },
    bookingAdded(info) {
      console.dir(info.event);
      this.showModal();
      let event = {
        title: info.event.title,
        start: info.event.start,
        end: info.event.end,
        color: info.event.backgroundColor,
        resourceIds: info.event._def.resourceIds
      };
      this.addBooking(event);
    },
    openBooking(data) {
      console.log(data.event.extendedProps);
      this.showModal();
    },
    ...mapActions(["fetchBookings", "addBooking"])
  }
};
</script>
<style scoped>
.calendar-container {
  grid-area: 1 / 1 / 11 / 9;
}
.booking-options {
  grid-area: 1 / 9 / 8 / 11;
}
.date-selector {
  grid-area: 8 / 9 / 11 / 11;
}
</style>
<style>
.fc-center h2 {
  padding: 0;
}
.fc-button-primary {
  color: grey;
  background: none;
  border: none;
}
</style>
