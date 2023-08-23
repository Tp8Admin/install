import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir: string): any => {
    return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
    '/@': pathResolve('./src/'),
}

// https://vitejs.cn/config/
const viteConfig: UserConfig = {
    plugins: [vue()],
    resolve: { alias },
}

export default viteConfig