export interface CheckState {
    // 开始表单
    startForm: {
        lang: string, // 语言：默认中文简体
        packageManager: string, // NPM包管理器：默认pnpm
        setNpmRegistery: string, // 设置NPM源：默认淘宝
    },

    // 环境检测数据
    envCheckPhpData: {  // PHP环境检测数据
        name: string
        describe: string
    }[],
    envCheckNpmData: {  // NPM环境检测数据
        name: string
        describe: string
    }[],

    // 是否显示环境检测
    checkDoneIndex: 'ok' | 'fail' | 'executing', // 三种状态：执行 executing 、成功 ok 、失败 fail
}
