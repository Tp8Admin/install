<template>
  <!-- dialog组件/start -->
  <el-dialog
    v-model="dialogVisible"
    :title="t('Ready to start')"
    center
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <!-- 表单内容/start -->
    <el-form label-width="120px" label-position="left">
      <!-- 语言 -->
      <el-form-item :label="t('language')">
        <el-select
          @change="changeLang"
          class="w100"
          v-model="state.startForm.lang"
        >
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
          <el-option
            :label="t('I want to execute the command manually')"
            value="none"
          ></el-option>
        </el-select>
      </el-form-item>

      <!-- 设置NPM源 -->
      <el-form-item
        :label="t('Set NPM source')"
        v-model="state.startForm.setNpmRegistery"
      >
        <el-radio-group v-model="state.startForm.setNpmRegistery">
          <el-radio label="none">{{ t("Use current source") }}</el-radio>
          <el-radio label="taobao">{{ t("TaoBao") }}</el-radio>
          <el-radio label="npm">NPM</el-radio>
          <el-radio label="rednpm">RedNPM</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <!-- 表单内容/end -->

    <!-- 底部 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" size="large" round>
          <el-icon>
            <Promotion />
          </el-icon>
          <span class="start-install">{{ t("Start installation") }}</span>
        </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- dialog组件/end -->
</template>
  
<script lang="ts" setup>
import { ref, reactive } from "vue"; // 引用vue3
import { Promotion } from "@element-plus/icons-vue"; // 引用图标库
import { useI18n } from "vue-i18n"; // 引用国际化

// dialog组件自动弹出
const dialogVisible = ref(true);

const { t, locale } = useI18n(); // 国际化

// 语言切换
const changeLang = (val: string) => {
    window.localStorage.setItem("ba-lang", val);
    location.reload();
};

// 状态设置
const state = reactive({
    startForm: {
        lang: locale.value, // 语言：默认中文简体
        packageManager: "pnpm" + t("Recommand"), // NPM包管理器：默认pnpm
        setNpmRegistery: "taobao", // 设置NPM源：默认淘宝
    },
});
</script>
  
<style scoped lang="scss">
.w100 {
  width: 100%;
}

.start-install {
  margin-left: 10px;
}
</style>
  