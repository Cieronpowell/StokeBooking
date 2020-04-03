<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <router-link to="/">
          <span class="link-text logo-text">Stoke Ski Centre</span>
          <img src="../assets/logo2.png" />
        </router-link>
      </li>
      <li class="nav-item" v-for="item in navItems" :key="item.id">
        <router-link :to="`${item.path}`" class="nav-link">
          <i class="fad fa-theme" :class="[item.icon]"></i>
          <span class="link-text">Cats</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  props: ["navItems"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #555555;
  transition: width 600ms ease;
  overflow: hidden;
  max-width: 5vw;
  min-width: 60px;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
}
.logo {
  margin-top: 1vh;
  margin-bottom: 0.8vh;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
  font-size: 2vw;
  text-align: center;
  margin-bottom: 2vh;
  vertical-align: center;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  filter: grayscale(90%) opacity(0.7);
  transition: 600ms;
}
.nav-link:hover {
  filter: grayscale(0%) opacity(1);
}

.link-text {
  display: none;
  margin-left: 1vh;
}

.nav-link {
  width: 2vw;
  min-width: 30px;
  margin: 0 1.5vh;
}
.fa-theme {
  --fa-secondary-opacity: 1;
  --fa-primary-color: #218bae;
  --fa-secondary-color: #dddddd;
}
</style>
