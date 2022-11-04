<template>
  <div id="nav">
    <!-- <router-view> bize views/HomeView'u veriyor. !-->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css");
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}
</style>
