import { defineStore } from "pinia";

export const userTerminalStore = defineStore("terminal", {
    state: () => {
        return {
            show: false, // 不显示对话框
        }
    },
    actions: {
        toggle() {
            this.show = !this.show; // 切换 show 的值为相反的布尔值
        }
    },
    persist: {
        key: 'storeTerminal',
    },
});
