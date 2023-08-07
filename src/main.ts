import { createApp } from 'vue' // 引入createApp
import App from './App.vue' // 引入App.vue
import { i18n } from '@/plugins/i18n' // 引入i18n
import ElementPlus from 'element-plus' // 引入ElementPlus
import 'element-plus/dist/index.css' // 引入ElementPlus样式


// 创建应用实例
async function bootstrap() {
    const app = createApp(App)
    app.use(i18n) // 注册i18n实例
    app.use(ElementPlus) // 注册ElementPlus
    app.mount('#app')
}

bootstrap() // 启动应用