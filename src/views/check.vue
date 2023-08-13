<template>
    <!-- 列表页面/start -->
    <div class="container">
        <div class="table-title">{{ t('Environmental inspection') }}</div>
        <div class="table">

            <div class="table-item">
                <div class="table-label">
                    <span>PHP</span>
                </div>
                <div class="table-value">
                    8.0.26<img title="图片" class="data-state" src="@/assets/install/ok.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">
                    <span>配置目录是否可写</span>
                </div>
                <div class="table-value">
                    可写<img title="图片" class="data-state" src="@/assets/install/ok.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">
                    <span>public目录是否可写</span>
                </div>
                <div class="table-value">
                    可写<img title="图片" class="data-state" src="@/assets/install/ok.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">
                    <span>PHP PDO扩展</span>
                </div>
                <div class="table-value">
                    已安装<img title="图片" class="data-state" src="@/assets/install/ok.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">
                    <span>PHP gd2或freeType</span>
                </div>
                <div class="table-value">
                    已安装<img title="图片" class="data-state" src="@/assets/install/ok.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">
                    <span>PHP 程序执行函数(proc)</span>
                </div>
                <div class="table-value">
                    允许执行<img title="图片" class="data-state" src="@/assets/install/ok.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">
                    <span>NPM版本</span>
                </div>
                <div class="table-value">
                    9.3.1<img title="图片" class="data-state" src="@/assets/install/ok.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">
                    <span>node.js版本</span>
                </div>
                <div class="table-value">
                    v18.14.0<img title="图片" class="data-state" src="@/assets/install/ok.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">
                    <span>包管理器 pnpm</span>
                </div>
                <div class="table-value">
                    8.6.7<img title="图片" class="data-state" src="@/assets/install/ok.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">
                    <span>是否测试命令执行？</span>
                </div>
                <div class="table-value">
                    <img title="图片" class="data-state" src="@/assets/install/warn.png" />
                </div>
            </div>

            <div class="table-item">
                <div class="table-label">{{ t('Checking installation environment') }}</div>
                <div class="table-value">
                    <img title="正在检测" class="data-state" alt="正在检测" src="@/assets/install/loading.gif"/>
                </div>
            </div>

            <div class="check-done ok">恭喜，安装可以继续</div>
            <div class="button">第二点：站点配置</div>
        </div>
    </div>
    <!-- 列表页面/end -->

    <!-- 显示dialog组件/start -->
    <el-dialog v-model="common.showStartDialog" :title="t('Ready to start')" center :show-close="false"
        :close-on-click-modal="false" :close-on-press-escape="false">
        <!-- 表单内容/start -->
        <el-form label-width="120px" label-position="left" :model="state.startForm" @click="startInstall">
            <!-- 语言 -->
            <el-form-item :label="t('language')">
                <el-select @change="changeLang" class="w100" v-model="state.startForm.lang">
                    <el-option label="中文简体" value="zh-cn"></el-option>
                    <el-option label="English" value="en"></el-option>
                </el-select>
            </el-form-item>

            <!-- NPM包管理器 -->
            <el-form-item :label="t('NPM package manager')">
                <el-select class="w100" v-model="state.startForm.packageManager">
                    <el-option label="npm" value="npm"></el-option>
                    <el-option label="cnpm" value="cnpm"></el-option>
                    <el-option :label="'pnpm' + t('Recommand')" value="pnpm"></el-option>
                    <el-option :label="'yarn' + t('Recommand')" value="yarn"></el-option>
                    <el-option label="ni" value="ni"></el-option>
                    <el-option :label="t('I want to execute the command manually')" value="none"></el-option>
                </el-select>
            </el-form-item>

            <!-- 设置NPM源 -->
            <el-form-item :label="t('Set NPM source')" v-model="state.startForm.setNpmRegistery">
                <el-radio-group v-model="state.startForm.setNpmRegistery">
                    <el-radio label="none">{{ t('Use current source') }}</el-radio>
                    <el-radio label="taobao">{{ t('TaoBao') }}</el-radio>
                    <el-radio label="npm">NPM</el-radio>
                    <el-radio label="rednpm">RedNPM</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <!-- 表单内容/end -->

        <!-- 底部 -->
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" size="large" round @click="startInstall">
                    <el-icon>
                        <Promotion />
                    </el-icon>
                    <span class="start-install">{{ t('Start installation') }}</span>
                </el-button>
            </span>
        </template>
    </el-dialog>
    <!-- 显示dialog组件/end -->
</template>

<script lang="ts" setup>
/**
 * 一：依赖部分
 */
import { ref, reactive } from 'vue' // 引用vue3
import { Promotion } from '@element-plus/icons-vue' // 引用图标库
import { useI18n } from 'vue-i18n' // 引用国际化
import { useCommon } from '@/stores/common' // 引用公共store

/**
 * 二：定义部分
 */
// dialog组件自动弹出
const dialogVisible = ref(true)

const { t, locale } = useI18n() // 国际化

const common = useCommon() // 公共store

/**
 * 三：函数部分
 */
// 语言切换
const changeLang = (val: string) => {
    window.localStorage.setItem('ta-lang', val)
    location.reload()
}

// 状态设置
const state = reactive({
    // 开始表单
    startForm: {
        lang: locale.value, // 语言：默认中文简体
        packageManager: 'pnpm' + t('Recommand'), // NPM包管理器：默认pnpm
        setNpmRegistery: 'taobao', // 设置NPM源：默认淘宝
    },
})

// 改变包管理器
const changePackageManager = () => {
    console.log('改变包管理器 且 下一步操作')
}

// 开始安装
const startInstall = () => {
    // 判断显示dialog为true时显示包管理器
    if (common.showStartDialog) {
        changePackageManager()
    }
    // 关闭dialog
    common.toggleStartDialog(false)
}


</script>

<style scoped lang="scss">
// 列表页面/start
.container {
    margin-top: 20px;

    .table-title {
        display: block;
        text-align: center;
        font-size: 20px;
        color: #303133;
    }

    .table {
        max-width: 560px;
        padding: 20px;
        margin: 10px auto;
    }

    .global-warning {
        margin-bottom: 10px;
    }

    .table-item {
        color: #303133;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        padding: 13px 15px;
        margin-bottom: 2px;
        border-radius: 5px;
        transition: all 0.2s ease;

        &:hover {
            background-color: #fcfcfc;
        }

        .table-label {
            font-size: 15px;
        }

        .label-need {
            font-size: 12px;
            color: #f56c6c;
            cursor: pointer;
            padding: 0 4px;
        }

        .label-need.faq,
        .label-need.install-cnpm {
            color: #3f6ad8;

            &:hover {
                text-decoration: underline;
            }
        }

        .label-need.text {
            cursor: text;
        }
    }

    .table-item.error {
        background-color: #f56c6c;
        color: #fff;
    }

    .table-item.success {
        background-color: #67c23a;
        color: #fff;
    }

    .table-value {
        font-size: 13px;
        display: flex;
        align-items: center;
    }

    .data-state {
        width: 20px;
        height: 20px;
        user-select: none;
        margin-left: 5px;
    }
}

// 列表页面/end

// 按钮 / start
.check-done {
    font-size: 14px;
    margin-top: 20px;
    text-align: right;
}

.check-done.ok {
    color: #67c23a;
}

.check-done.fail {
    color: #f56c6c;
}

.button {
    padding: 15px;
    text-align: center;
    font-size: 16px;
    background-color: #409eff;
    border-radius: 5px;
    color: #fff;
    margin-top: 20px;
    opacity: 0.4;
    cursor: pointer;
    transition: all 0.2s ease;
}

.button.pass {
    opacity: 1;
}

// 按钮 / end 
.w100 {
    width: 100%;
}

.start-install {
    margin-left: 10px;
}
</style>
