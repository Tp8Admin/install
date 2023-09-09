/**
 * 一：依赖部分
 */
import { Axios } from '/@/utils/axios' // 引用axios

/**
 * 二：定义部分
 */
// 定义路径
const VITE_HOST = import.meta.env.VITE_HOST

// 接口部分
const envCheckPhpUrl = VITE_HOST+'/api/install/envCheckPhp'
const envCheckNpmUrl = VITE_HOST+'/api/install/envCheckNpm'


/**
 * 三：函数部分
 */
// 检测PHP环境
export const getEnvPhp =() => {
    return Axios.get(envCheckPhpUrl)
}

// 检测NPM环境
export const getEnvNpm = (packageManagerParam: string) => {
    return Axios.post(envCheckNpmUrl, {
        manager: packageManagerParam // 传递参数
    })
}