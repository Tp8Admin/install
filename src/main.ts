import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

async function bootstrap() {
    const app = createApp(App)
    app.use(ElementPlus)
    await app.mount('#app')
}

bootstrap()