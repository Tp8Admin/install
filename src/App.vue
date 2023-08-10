<template>
    <Check />
</template>

<script setup lang="ts">
import Check from '@/views/check.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

var langValue = window.localStorage.getItem('ba-lang') || 'zh-cn'
locale.value = langValue
</script>
