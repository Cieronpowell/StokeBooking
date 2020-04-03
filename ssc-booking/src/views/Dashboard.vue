<template>
  <main>
    <dailyMessage :message="message" class="dailyMessage" />
    <staffCard :staffList="staffList" class="staffCard" />
    <overview class="overview" />
  </main>
</template>

<script>
// @ is an alias to /src
import staffCard from "@/components/staffCard";
import dailyMessage from "@/components/dailyMessage";
import overview from "@/components/overview";
export default {
  name: "Dashboard",
  components: {
    staffCard,
    dailyMessage,
    overview
  },
  data() {
    return {
      staffList: [
        {
          id: 1,
          name: "Cieron Powell",
          start: "08:00",
          end: "16:00",
          role: "Ski / Reception",
          img: "https://randomuser.me/api/portraits/men/31.jpg"
        },
        {
          id: 2,
          name: "Test Name",
          start: "08:00",
          end: "16:00",
          role: "Ski",
          img: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          id: 3,
          name: "Test Long very long name",
          start: "08:00",
          end: "16:00",
          role: "Tube",
          img: "https://randomuser.me/api/portraits/men/15.jpg"
        }
      ],
      message:
        "The new system is still under constructions please report any issues at ssc@cieron.me"
    };
  }
};
</script>
<style scoped>
.dailyMessage {
  grid-area: 1 / 1 / 2 / 9;
}
.staffCard {
  grid-area: 1 / 9 / 10 / 11;
}
.overview {
  grid-area: 2 / 1 / 11 / 9;
}
.div4 {
  grid-area: 10 / 9 / 11 / 11;
}
</style>
