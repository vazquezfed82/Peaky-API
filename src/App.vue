<template>
  <div>
    <ComponenteNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import ComponenteNavbar from "./components/utils/Navbar.vue";

export default {
  name: "App",
  components: {
    ComponenteNavbar,
  }
};
</script>