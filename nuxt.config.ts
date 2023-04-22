// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
      '@nuxtjs/tailwindcss'
    ],
    
    css: ["@/assets/css/styles.css"],
    app:{
      head:{
        title:'Nuxt E-commerce',
        meta:[
          {name:'description',content:'Nuxt 3 application from stratch'}
        ]
      }
    }
})
