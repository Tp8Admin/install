<script setup lang="ts">
/**
 * 一：依赖部分
 */
import { useI18n } from 'vue-i18n'
import { useCommon } from '/@/stores/common' // 引用公共store
import Check from '/@/views/check.vue'
import Config from '/@/views/config.vue'
import Done from '/@/views/done.vue'

/**
 * 二：定义部分
 */
const { locale } = useI18n()

var langValue = window.localStorage.getItem('ta-lang') || 'zh-cn'
locale.value = langValue

const common = useCommon() // 公共store
</script>

<template>
    <!-- 检测页面 -->
    <Check v-if="common.step == 'check'" />
    <!-- 配置页面 -->
    <Config v-if="common.step == 'config'" />
    <!-- 安装完成页面 -->
    <Done v-if="common.step == 'done'" />
</template>

<style lang="scss">
body {
    background-color: #f5f5f5;
}
</style>
