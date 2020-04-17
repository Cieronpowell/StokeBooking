<template>
  <main>
    <dailyMessage :message="message" class="dailyMessage" />
    <staffCard class="staffCard" />
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
