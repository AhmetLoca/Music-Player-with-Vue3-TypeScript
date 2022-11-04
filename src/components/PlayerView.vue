<!-- sag tarafda duran player olacak!-->
<template>
  <div class="w-100 player d-flex align-items-center justify-content-center">
    <div class="d-block text-center">
      <div class="py-3">{{ $store.state.name }}</div>
      <div class="py-3">{{ $store.state.duration }}</div>
      <div class="py-3">{{ $store.state.currentTime }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PlayerView",
  components: {},
});
</script>

<style scoped>
.player {
  background-color: rgb(124, 27, 220);
}
</style>
