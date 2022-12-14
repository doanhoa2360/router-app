import { createApp } from 'vue'
import App from './App.vue'
import  router from './router'
// import { createPinia } from 'pinia'

// const pinia = createPinia()
// app.use(pinia)
const app=createApp(App)
app.use(router)

app.mount('#app')
