<template>
    <Check />
</template>

<script setup lang="ts">
import Check from '@/views/check.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

var langValue = window.localStorage.getItem('ta-lang') || 'zh-cn'
locale.value = langValue
</script>

<style lang="scss">
body {
  background-color: #f5f5f5;
}
</style>