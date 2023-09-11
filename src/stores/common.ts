import { defineStore } from 'pinia'

interface State {
    step: string
    showStartDialog: boolean
}


export const useCommonStore = defineStore('common', {
    state: () : State => {
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

        // 切换步骤
        setStep(val: string) {
            this.step = val
        },
    },
    persist: {
        key: 'storeCommon',
    },
})
