const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: '8081'
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `, // Importa o arquivo variables.scss globalmente
      }
    }
  }
})
