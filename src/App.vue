<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/utils/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  }
};
</script>