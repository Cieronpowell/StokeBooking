<template>
  <div class="card">
    <div class="title">
      <h1>Todays Overview</h1>
      <h2 class="options">...</h2>
    </div>
    <div class="split-bar"></div>
    <div class="content">
      <FullCalendar
        class="calendar"
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        height="auto"
        :slotEventOverlap="false"
        selectable="true"
        minTime="08:00:00"
        maxTime="23:00:00"
        slotDuration="00:30:00"
        :slotLabelInterval="slotLabelInterval"
        :plugins="calendarPlugins"
        :header="{ left: '', center: '', right: '' }"
        defaultView="resourceTimeGridDay"
        :allDaySlot="allDaySlot"
        nowIndicator="true"
        :events="[
          {
            title: 'Stoke Sixth Form',
            start: '2020-04-02T10:00:00',
            end: '2020-04-02T12:00:00',
            color: 'green',
            resourceIds: [1, 2]
          },
          {
            title: 'Level 6',
            start: '2020-04-02T10:00:00',
            end: '2020-04-02T18:00:00',
            color: 'red',
            resourceId: '2'
          }
        ]"
        :resources="[
          { id: '1', title: 'Main Slope' },
          { id: '2', title: 'Intermidiate Slope' },
          { id: '3', title: 'Small Slope 1' },
          { id: '4', title: 'Small Slope 2' }
        ]"
        :businessHours="businessHours"
      />
      <calendarKey :bookingTypes="bookingTypes" />
    </div>
  </div>
</template>

<script>
import calendarKey from "@/components/calendarKey";
import FullCalendar from "@fullcalendar/vue";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
export default {
  name: "overview",
  components: {
    FullCalendar,
    calendarKey
  },
  data() {
    return {
      calendarPlugins: [resourceTimeGridPlugin],
      allDaySlot: false,
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/timegrid/main.css";

.calendar {
  width: 80%;
  padding: 0.5vh 0.5vw;
}
.fc-today {
  background: inherit !important;
}
.fc-event {
  border-radius: 0;
  filter: grayscale(10%) opacity(0.7);
  padding: 1px;
  margin: 1px;
}
.content {
  display: flex;
}
</style>
