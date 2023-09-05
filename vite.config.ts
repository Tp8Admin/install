import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dotenv from 'dotenv'

const pathResolve = (dir: string): any => {
    return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
    '/@': pathResolve('./src/'),
}

/**
 * 不同的环境使用不同的.env文件
 */
const env = process.env.NODE_ENV
const envFiles = [
    /** default file */ `.env`,
    /** mode file */ `.env.${env}`,
]

for (const file of envFiles) {
    dotenv.config({ path: pathResolve(file) })
}

// https://vitejs.cn/config/
const viteConfig: UserConfig = {
    plugins: [vue()],
    resolve: { alias }
}

export default viteConfig