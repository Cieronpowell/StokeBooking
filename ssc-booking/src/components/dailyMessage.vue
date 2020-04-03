<template>
  <div class="card">
    <div class="title">
      <h1>Daily Messages</h1>
      <h2 class="options">...</h2>
    </div>
    <div class="split-bar"></div>
    <div class="msg">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dailyMessage",
  props: ["message"]
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
  height: 5vw;
  min-height: 40px;
  max-height: 70px;
  width: auto;
}
.msg {
  margin-top: 1vh;
}
</style>
