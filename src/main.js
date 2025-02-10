import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

import router from './router' // Importe o router

createApp(App)
  .use(router) // Registre o router
  .mount('#app')
