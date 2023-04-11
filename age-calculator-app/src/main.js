import { createApp } from 'vue'
import App from './App.vue'
import VeeValidatePlugin from './includes/validation'

//import './assets/main.css'
import './assets/style.css'
const app = createApp(App)
app.use(VeeValidatePlugin)
app.mount('#app')
