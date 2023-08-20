
<script lang="ts" setup>
/**
 * 一：依赖部分
 */
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus' // 表单实例类型
import { useCommon } from '@/stores/common'

/**
 * 二：定义部分
 */
// 表单实例
const ruleFormRef = ref<FormInstance>()

// 公共数据
const common = useCommon()

// 表单数据
const ruleForm = reactive({
  /**
   * 数据库配置
   */
  hostname: '127.0.0.1',
  username: 'root',
  password: '',
  hostport: '3306',
  database: '',
  prefix: 'ta_',
  /**
   * 管理员配置
   */
  adminname: 'admin',
  adminpassword: '',
  repeatadminpassword: '',
  /**
   * 站点配置
   */
  sitename: 'Tp8Admin',
})

// 表单验证规则
const rules = reactive({
  /**
   * 一：数据库部分
   */
  // MySQL数据库地址
  hostname: [
    { required: true, message: '请输入MySQL数据库地址', trigger: 'blur' },
  ],
  // MySQL数据库用户名
  username: [
    { required: true, message: '请输入MySQL数据库用户名', trigger: 'blur' },
  ],
  // MySQL数据库密码
  password: [
    { required: true, message: '请输入MySQL数据库密码', trigger: 'blur' },
  ],
  // MySQL数据库端口
  hostport: [
    { required: true, message: '请输入MySQL数据库端口', trigger: 'blur' },
  ],
  // MySQL数据库名称
  database: [
    { required: true, message: '请输入MySQL数据库名称', trigger: 'blur' },
  ],
  // MySQL数据库表前缀
  prefix: [
    { required: true, message: '请输入MySQL数据库表前缀', trigger: 'blur' },
  ],
  /**
   * 二：管理员部分
   */
  // 管理员用户名
  adminname: [
    { required: true, message: '请输入管理员用户名', trigger: 'blur' },
  ],
  // 管理员密码
  adminpassword: [
    { required: true, message: '请输入管理员密码', trigger: 'blur' },
  ],
  // 重复管理员密码
  repeatadminpassword: [
    { required: true, message: '请重复管理员密码', trigger: 'blur' },
  ],
  /**
   * 三：站点部分
   */
  // 站点名称
  sitename: [
    { required: true, message: '请输入站点名称', trigger: 'blur' },
  ],
})


/**
 * 三：方法部分
 */
// 上一步
const prevStep = () => {
  common.setStep('check')
}
// 提交表单
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="container">

    <div class="table-title">第二步 站点配置</div>

    <div class="table">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="180px">
        <!-- MySQL数据库地址 -->
        <el-form-item label="MySQL数据库地址" prop="hostname">
          <el-input v-model="ruleForm.hostname" />
        </el-form-item>
        <!-- MySQL数据库用户名 -->
        <el-form-item label="MySQL数据库用户名" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <!-- MySQL数据库密码 -->
        <el-form-item label="MySQL数据库密码" prop="password">
          <el-input v-model="ruleForm.password" />
        </el-form-item>
        <!-- MySQL数据库端口 -->
        <el-form-item label="MySQL数据库端口" prop="hostport">
          <el-input v-model="ruleForm.hostport" />
        </el-form-item>
        <!-- MySQL数据库名称 -->
        <el-form-item label="MySQL数据库名称" prop="database">
          <el-input v-model="ruleForm.database" />
        </el-form-item>
        <!-- MySQL数据库表前缀 -->
        <el-form-item label="MySQL数据库表前缀" prop="prefix">
          <el-input v-model="ruleForm.prefix" />
        </el-form-item>
        <!-- 管理员账号 -->
        <el-form-item label="管理员账号" prop="adminname">
          <el-input v-model="ruleForm.adminname" />
        </el-form-item>
        <!-- 管理员密码 -->
        <el-form-item label="管理员密码" prop="adminpassword">
          <el-input v-model="ruleForm.adminpassword" />
        </el-form-item>
        <!-- 重复管理员密码 -->
        <el-form-item label="重复管理员密码" prop="repeatadminpassword">
          <el-input v-model="ruleForm.repeatadminpassword" />
        </el-form-item>
        <!-- 站点名称 -->
        <el-form-item label="站点名称" prop="sitename">
          <el-input v-model="ruleForm.sitename" />
        </el-form-item>
        <!-- 提交按钮 -->
        <el-form-item>
          <!-- 上一步 -->
          <el-button @click="prevStep">上一步</el-button>
          <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.container {
  width: 500px;
  margin: 0 auto;

  .table-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .table {
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 5px;
  }
}
</style>
```