import { createStore } from 'vuex'

export default createStore({
  state: {
    //player'i sustur.
    muted:false,
    //oynuyor mu oynamiyor mu?
    playing : false,
    //herhangi bir sarki secildi mi?
    selected: false,
    //suan ki suresi ne?
    currentTime : 0,
    //duration: mp3'un tamamen uzunlugu ne kadar?
    duration:0,
    //sarki surekli döngüde mi olacak?
    loop:false,
    //mp3 için calinacak url
    url: '',
    //o anki calan sarkinin ismi
    name:'',
    //files : mp3 dosyalarinin hepsi.
    files:[] as FileSystemHandle[], /* burasi bir filesystemHandle dizisi olacak. */    // Şimdi type'lari tanimlayabilriiz.

    /* tüm ayarlarimiz buradan yapilacak. Biz bunu window'a da yapabiliriz. window.asdasAudio new Audio*/
    audio : new Audio(),
  },
  getters: {
  },
  mutations: {
    /* herbir işlem için mutation yapmamiz lazim. */
    
    /* player'i open / close */
    toggleMuted(state) {
      state.muted = !state.muted;
      if(state.muted){
        state.audio.muted =true;
      }else{
        state.audio.muted =false;
      }
    },
    /* oynuyor mu oynamiyor mu? Set it. */
    setPlaying(state, payload:boolean) {
      state.playing = payload;
      if(payload){
        state.audio.play();
      }else{
        state.audio.pause();
      }
    },
    /* oynatmayi ac veya kapat */
    togglePlaying(state) {
      state.playing = !state.playing;
    },

    /* herhangi bir sarki secildi mi? Set it */
    setSelected(state, payload:boolean) {
      state.selected = payload;
    },

    /* What is current time? Set it. */

    /* Neden number, type falan yapiyorum ?? Çünkü TypeScript. */
    setCurrentTime(state,payload:number) {
      state.currentTime = payload;
    },

    /* What is totally duration at mp3? Set it */
    setDuration(state,payload:number) {
      state.duration = payload;
    },

    /* Will the music be loop constant? Set it */
    toggleLoop(state) {
      state.loop= !state.loop;
    },

    /* 
    mp3 için calinan url. 
   
    set url'de object url'de bir url oluşturacagiz.
    Seçme kisminda biz diyecegiz ki dosyamiz file olsun

    URL.createObjectURL(file); // Bu bize bir blog url'i oluşturacak.
    Sekme kapanmadigi sürece bu hafizada kaliyor. Bunun için url degisirken
    ilk basta URL.revokeObjectURL(payload) diyip önceki URL'i kapatmamiz lazim.
    Sildikten sonra state.url = URL.createObjectURL(payload) diyip bize gelen
    payload'u verecegiz.
    */
    setUrl(state, payload:string) {
      URL.revokeObjectURL(state.url);
      state.audio.src=payload;
      state.url = payload;
    },

    /* What is the name? Set it. */
    setName(state,payload:string) {
      state.name = payload;
    },
    /* 
    it is mp3 files all. 
    Burasi ana yer. 
    FileSystemHandle bizim api'imizin ÖZELLİĞİ.
    İçinde bir sürü dosya saklayan bir şey.
    FileSystemHandle dememizin nedeni ise herbir dosya için getFile metodu calistirmamiz.
    */

    setFiles(state,payload:FileSystemHandle[]) {
      state.files = payload;
      /* files, FileSystemHandle dizisi. */
    },
    /* reset fonksiyoun. Her şeyi resetler */
   
  },
  actions: {
  /* 
    sideBar'a bastigimizda selectFiles action'i calistirmamiz lazim.
  */
  async SelectFolder({commit, state}){
    //bu bir promise'dir. Bekler.
   const folder = await window.showDirectoryPicker();
   // peki biz bunu aldik diyelim. Dosyalara nasil erişecegiz? 
   // console.log(await folder.values());
    const files : FileSystemHandle[] = [];
    for await(const file of folder.values()){
      /* her dosya için  */
      files.push(file);
    }
    /* commit ile setFiles'i aldim ve files'e verdim. */
    commit('setFiles',files);
    /* commit ile tekrardan sarkiyi durdurmamiz lazim */
    commit('setPlaying',false)
  },
    Reset({commit}){
      commit('setPlaying', false);
      commit('setSelected', false);
      commit('setCurrentTime', 0);
      commit('setDuration', 0);
      commit('setUrl', '');
      commit('setName', '');
      commit('setFiles', []);
},
  /* tikladigimizda calismasi icin playFile diye bir özellik yapalim */
  /*Burada bize state'i vuex geliyor. Payload bize bir index verecek. */
  async playFile({commit, state},index:number) {
    const fileHandle = state.files[index];
    if(fileHandle.kind === 'file'){
      const file = await fileHandle.getFile();
      const url = URL.createObjectURL(file);
      commit('setUrl',url); 
      commit('setPlaying',true)
      commit('setName',file.name);
      commit('setCurrentTime',0);
      commit('setDuration',0);
    }
  }
  }
})
