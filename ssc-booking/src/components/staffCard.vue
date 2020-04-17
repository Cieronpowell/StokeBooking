<template>
  <div class="card">
    <div class="title">
      <h1>Todays Staff</h1>
      <h2 class="options">...</h2>
    </div>
    <div class="split-bar"></div>
    <div v-for="staff in todaysStaff" :key="staff.id">
      <figure>
        <img class="avatar" v-bind:src="staff.img" />
        <figcaption>
          <div class="wrap">
            <h4>{{ staff.name }}</h4>
            <div class="times">
              <h4>{{ staff.start }}</h4>
              <h4>-</h4>
              <h4>{{ staff.end }}</h4>
            </div>
          </div>
          <p>{{ staff.role }}</p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "staffCard",
  computed: mapGetters(["todaysStaff"]),
  methods: mapActions(["fetchStaff"]),
  created() {
    this.fetchStaff();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
figure {
  display: flex;
  align-items: center;
  padding: 1.5vh;
}
.avatar {
  border-radius: 50%;
  border: solid 1px black;
  height: 3vw;
  min-height: 40px;
  max-height: 70px;
  width: auto;
}
</style>
