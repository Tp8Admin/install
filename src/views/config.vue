<template>
    <div class="container">
        <div class="table-title">站点配置</div>
        <div class="table">
           
            <el-form ref="formRef" label-width="150px" :rules="rules" :model="state.formItem">
                <!-- 表单 -->
                <transition-group name="slide-bottom">
                    <div v-for="(item, idx) in state.formItem" :key="idx">
                        <div v-if="item.type == 'br'" class="table-item-br"></div>
                        <div v-else class="table-column table-item">
                            <el-form-item :prop="item.name" class="table-label" :label="item.label">
                                <el-input
                                    :placeholder="item.placeholder ? item.placeholder : ''"
                                    v-model="item.value"
                                    class="table-input"
                                    :type="item.type"
                                ></el-input>
                                <div class="block-help" v-if="item.blockHelp">{{ item.blockHelp }}</div>
                            </el-form-item>
                        </div>
                    </div>
                </transition-group>

                <!-- 按钮 -->
                <transition name="slide-bottom">
                   
                    <div class="footer-buttons">
                        <el-button class="button">{{ t('Previous step') }}</el-button>
                        <el-button type="primary" class="button">
                            {{ t('Install now') }}
                        </el-button>
                    </div>
                </transition>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * 一：依赖部分
 */
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n' // 引用国际化

/**
 * 二：定义部分
 */
const { t } = useI18n() // 国际化

const state = reactive({
    formItem: {
        /**
         * 第一部分：数据库信息
         */
        // 数据库地址
        hostname: {
            label: t('Mysql database address'),
            value: '127.0.0.1',
            name: 'hostname',
            type: 'text',
        },
        // 用户名
        username: {
            label: t('MySQL connection user name'),
            value: 'root',
            name: 'username',
            type: 'text',
        },
        // 密码
        password: {
            label: t('MySQL connection password'),
            value: '',
            name: 'password',
            type: 'password',
        },
        // 数据库名
        database: {
            label: t('Mysql database name'),
            value: '',
            name: 'database',
            type: 'text',
            blockHelp: '',
        },
        // 数据表前缀
        prefix: {
            label: t('MySQL data table prefix'),
            value: 'ta_',
            name: 'prefix',
            type: 'text',
        },
        
        /**
         * 第二部分：管理员信息
         */
        // 管理员用户名
        adminname: {
            label: t('Administrator user name'),
            value: 'admin',
            name: 'adminname',
            type: 'text',
        },
        // 管理员密码
        adminpassword: {
            label: t('Administrator password'),
            value: '',
            name: 'adminpassword',
            type: 'password',
            placeholder: t('Backend login password'),
        },
        // 管理员密码
        repeatadminpassword: {
            label: t('Duplicate administrator password'),
            value: '',
            name: 'repeatadminpassword',
            type: 'password',
        },
        
        /**
         * 第三部分：站点信息
         */
        // 站点名称
        sitename: {
            label: t('Site name'),
            value: 'Tp8Admin',
            name: 'sitename',
            type: 'text',
        },
    },
})

</script>



<style scoped lang="scss">
.phinx-fail-box {
    display: block;
    margin-top: 20px;
    padding: 15px;
    margin: 15px auto;
    background-color: #fff;
    border-radius: 4px;
    .content-item {
        line-height: 1.3;
        border-radius: 4px;
        padding: 10px;
        background-color: #f5f5f5;
        word-break: break-all;
        font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
        margin: 15px 0;
        .command {
            line-height: 2;
            font-weight: bold;
        }
        .block-help {
            display: inline-block;
            line-height: 2;
            font-size: 13px;
            color: #909399;
        }
        .text {
            padding: 6px 0;
            font-size: 14px;
        }
        .output-box {
            position: relative;
            border-radius: 5px;
            box-shadow: #0005 0 2px 2px;
            padding: 5px;
            font-size: 13px;
            background-color: #282c34;
        }
        .output {
            color: #a9b7c6;
        }
        .mt10 {
            margin-top: 10px;
        }
    }
}
.phinx-fail-footer-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container {
    margin-top: 10px;
    .table-title {
        display: block;
        text-align: center;
        font-size: 20px;
        color: #303133;
    }
    .table {
        max-width: 560px;
        padding: 20px;
        margin: 0 auto;
        .table-item-br {
            height: 20px;
        }
        .table-item:focus-within {
            .table-input {
                color: #303133;
            }
            border: 2px solid #4e73df;
        }
        .table-column {
            padding: 12px;
            border-radius: 3px;
            border: 2px solid #fff;
            transition: all 0.3s ease;
        }
        .table-error {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            background-color: #f56c6c;
            color: #fff;
        }
        .table-item {
            display: flex;
            align-items: center;
            margin-bottom: 2px;
            background-color: #fff;
            color: #909399;
            .table-label {
                flex: 1;
                font-size: 15px;
                margin-bottom: 0;
                .block-help {
                    display: block;
                    width: 100%;
                    color: #909399;
                    font-size: 13px;
                    line-height: 16px;
                    padding: 0 11px;
                }
            }
        }
    }
    .footer-buttons {
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .button {
            width: 50%;
            height: 42px;
        }
    }
    .connecting-prompt {
        position: fixed;
        top: 60px;
        right: 100px;
        font-size: 14px;
        margin-top: 20px;
        text-align: right;
        color: #606266;
    }
    :deep(.el-input__wrapper) {
        box-shadow: none;
    }
    :deep(.el-input__wrapper.is-focus) {
        box-shadow: none;
    }
    :deep(.el-form-item.is-error .el-input__wrapper) {
        box-shadow: none;
    }
    :deep(.el-form-item__error) {
        left: 11px;
        margin-top: -6px;
    }
    :deep(.el-input__inner) {
        line-height: 29px;
    }
}
.install-tips-box {
    padding: 0 20px;
    .install-tips-close {
        position: absolute;
        width: 22px;
        height: 22px;
        top: -11px;
        right: -11px;
        border: 1px solid #d50600;
        border-radius: 50%;
    }
    .install-tips {
        position: relative;
        padding: 10px;
        background-color: #ffcdcd;
        color: #d50600;
        max-width: 570px;
        margin: 20px auto 0 auto;
        border-radius: 4px;
        font-size: 14px;
        .install-tips-title,
        .install-tips-item {
            text-indent: 1em;
            background-color: #ffe5e5;
            padding: 8px;
            border-radius: 4px;
            margin-bottom: 5px;
        }
        .install-tips-item:last-child {
            margin-bottom: 0;
        }
    }
    .change-route {
        cursor: pointer;
        color: #3f6ad8;
    }
}
</style>
