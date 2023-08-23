import { createApp } from 'vue' // 引入createApp
import App from './App.vue' // 引入App.vue
import { i18n } from '/@/plugins/i18n' // 引入i18n
import ElementPlus from 'element-plus' // 引入ElementPlus
import 'element-plus/dist/index.css' // 引入ElementPlus样式
import { createPinia } from 'pinia' // 引入Pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 引入Pinia插件

// 创建应用实例
async function bootstrap() {
    // 定义应用实例
    const app = createApp(App)

    // 定义pinia及插件
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate) // 注册Pinia插件

    // 注册应用实例
    app.use(pinia) // 注册Pinia
    app.use(i18n) // 注册i18n实例
    app.use(ElementPlus) // 注册ElementPlus
    app.mount('#app')
}

bootstrap() // 启动应用
