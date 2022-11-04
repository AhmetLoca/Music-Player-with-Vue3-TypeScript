<!-- Ses islemlerini burada yapacagiz
bu sayfamizda görünecek bir component degil
rendersess component. 
Herhangi bir şey derlemeyecek.

AudioView TEMPLATE'TE HİÇBİR ŞEY GÖSTERMEYECEK. SO,
teleport ile bunu body'inin sonuna yollayacagim
!-->

<!-- AudioView'de ne yapiyoruz?
    Audio'da biz DEGİSİKLİKLERİ İZLEYECEGİZ.
    Audio ile ilgili tüm ayarlarimizi burada yapalim.
    
    !-->
<template>
  <teleport to="body">
    <!-- d-none : display:none !-->
    <span class="d-none"></span>
  </teleport>
</template>

<script lang="ts">
/* watch: Kendisine verilen degeri izliyorken
   watchEffect : İçindeki her değeri izliyor. */
import { defineComponent } from "vue";

import store from "@/store";

export default defineComponent({
  name: "Audio",
  setup() {
    store.state.audio.onplay(() => {
      store.commit("setPlaying", true);
    });

    store.state.audio.onpause(() => {
      store.commit("setPlaying", false);
    });

    store.state.audio.ontimeupdate(() => {
      store.commit("setCurrentTime", store.state.audio.currentTime);
      store.commit("setDuration", store.state.audio.duration);
    });
    store.state.audio.ontimeupdate(() => {
      store.commit("setCurrentTime", store.state.audio.currentTime);
      store.commit("setDuration", store.state.audio.duration);
    });
    store.state.audio.onended(() => {
      store.dispatch("PlayNext");
    });
  },
});
</script>

<style scoped>
.player {
  background-color: rgb(124, 27, 220);
}
</style>
