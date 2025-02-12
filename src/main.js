import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // Se estiver usando Vue Router

const app = createApp(App);
const pinia = createPinia();

app.use(pinia); // Registra o Pinia globalmente
app.use(router); // Registra o Vue Router, se estiver usando
app.mount("#app");
