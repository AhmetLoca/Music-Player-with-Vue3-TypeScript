<template>
  <div class="home d-flex flex-nowrap align-items-stretch">
    <Sidebar />
    <Player />
    <Audio />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Sidebar: defineAsyncComponent(() => import("@/components/SidebarView.vue")),
    Player: defineAsyncComponent(() => import("@/components/PlayerView.vue")),
    Audio: defineAsyncComponent(() => import("@/components/AudioView.vue")),
  },
});
</script>

<style scoped>
.home {
  max-height: 100vh;
  max-width: 100vw; /* ekranin tamamini gecmeyecek. */
  height: 100vh;
  width: 100vw;
}
</style>
