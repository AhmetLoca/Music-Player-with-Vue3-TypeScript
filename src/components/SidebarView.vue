<!-- sol tarafta duracak.!-->
<template>
  <div class="sidebar">
    <div class="py-2">
      <button @click="$store.dispatch('SelectFolder')">Select Folder</button>
      <ul class="px-2">
        <li
          @click="$store.dispatch('playFile', index)"
          class="py-3"
          v-for="(value, index) in $store.state.files"
          :key="value.name"
        >
          {{ value.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SidebarView",
  components: {},
});
</script>

<style scoped>
.sidebar {
  width: 100%;
  max-width: 300px;
  background-color: rgb(161, 5, 94);
}
</style>
