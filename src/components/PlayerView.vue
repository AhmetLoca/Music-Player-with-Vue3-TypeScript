<!-- sag tarafda duran player olacak!-->
<template>
  <div class="w-100 player">player component</div>
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
