<template>
  <div>
    <router-view></router-view>
    <Navigation></Navigation>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation/Navigation.vue";
export default {
  components: {
    Navigation
  },
};
</script>
