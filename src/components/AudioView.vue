<!-- Ses islemlerini burada yapacagiz
bu sayfamizda görünecek bir component degil
rendersess component. 
Herhangi bir şey derlemeyecek.

AudioView TEMPLATE'TE HİÇBİR ŞEY GÖSTERMEYECEK. SO,
teleport ile bunu body'inin sonuna yollayacagim
!-->

<!-- AudioView'de ne yapiyoruz? !-->
<template>
  <teleport to="body">
    <!-- d-none : display:none !-->
    <span class="d-none"></span>
  </teleport>
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
