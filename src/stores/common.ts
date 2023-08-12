import { defineStore } from 'pinia'

export const useCommon = defineStore('common', {
    state: () => {
        return {
            step: 'check', // 当前步骤
            showStartDialog: true, // 是否显示开始对话框，默认显示
        }
    },
    actions: {
        // 切换开始对话框
        toggleStartDialog(val: boolean) {
            this.showStartDialog = val
        },

    },
    persist: {
        key: 'storeCommon',
    },
})