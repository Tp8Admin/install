<template>
  <!-- 检测安装 -->
  {{  t('lang') }}
  <p>
      <button @click="changeLanguage">Change Language</button>
    </p>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t, locale, setLocaleMessage } = useI18n();

const changeLanguage = () => {
  const newLocale = locale.value === 'en' ? 'zh' : 'en';
  import(`@/lang/${newLocale}.ts`).then((messages) => {
    setLocaleMessage(newLocale, messages.default);
    locale.value = newLocale;
  });
};
</script>

<style scoped lang="scss">
</style>
