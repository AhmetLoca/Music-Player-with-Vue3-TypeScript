const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        /* Tüm css'ler calismadan once bu calisacak her css içerisine 
      bu eklenecek. @ src'u gösterir.. */
        prependData: `
          @import '@/scss/mixins.scss';
          @import '@/scss/variables.scss';
        `,
      },
    },
  },
});
