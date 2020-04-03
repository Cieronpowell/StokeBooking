<template>
  <div class="bookingTypes">
    <div
      class="booking"
      v-for="type in bookingTypes"
      :key="type.id"
      :style="{ 'background-color': type.color }"
    >
      <p>{{ type.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "calendarKey",
  props: ["bookingTypes"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bookingTypes {
  width: 20%;
  padding-top: 2vh;
}
p {
  font-family: arial;
  color: black;
  font-weight: bold;
  vertical-align: middle;
  line-height: 0;
}
.booking {
  filter: grayscale(5%) opacity(0.85);
  width: 80%;
  margin: 1vh auto;
  height: 4vh;
  display: block;
  text-align: center;
}
</style>
