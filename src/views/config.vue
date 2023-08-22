<template>
  <div class="container">

    <div class="table-title">站点配置</div>

    <div class="table">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="180px">
        <!-- MySQL数据库地址 -->
        <div class="table-column table-item">
          <el-form-item label="MySQL数据库地址" prop="hostname" class="table-label">
            <el-input v-model="ruleForm.hostname" class="table-input" />
          </el-form-item>
        </div>
        <!-- MySQL数据库用户名 -->
        <div class="table-column table-item">
          <el-form-item label="MySQL数据库用户名" prop="username" class="table-label">
            <el-input v-model="ruleForm.username" />
          </el-form-item>
        </div>
        <!-- MySQL数据库密码 -->
        <div class="table-column table-item">
          <el-form-item label="MySQL数据库密码" prop="password" class="table-label">
            <el-input v-model="ruleForm.password" />
          </el-form-item>
        </div>
        <!-- MySQL数据库端口 -->
        <div class="table-column table-item">
          <el-form-item label="MySQL数据库端口" prop="hostport" class="table-label">
            <el-input v-model="ruleForm.hostport" />
          </el-form-item>
        </div>
        <!-- MySQL数据库名称 -->
        <div class="table-column table-item">
          <el-form-item label="MySQL数据库名称" prop="database" class="table-label">
            <el-input v-model="ruleForm.database" />
          </el-form-item>
        </div>
        <!-- MySQL数据库表前缀 -->
        <div class="table-column table-item">
          <el-form-item label="MySQL数据库表前缀" prop="prefix" class="table-label">
            <el-input v-model="ruleForm.prefix" />
          </el-form-item>
        </div>
        <div class="table-item-br"></div>

        <!-- 管理员账号 -->
        <div class="table-column table-item">
          <el-form-item label="管理员账号" prop="adminname" class="table-label">
            <el-input v-model="ruleForm.adminname" />
          </el-form-item>
        </div>
        <!-- 管理员密码 -->
        <div class="table-column table-item">
          <el-form-item label="管理员密码" prop="adminpassword" class="table-label">
            <el-input v-model="ruleForm.adminpassword" />
          </el-form-item>
        </div>
        <!-- 重复管理员密码 -->
        <div class="table-column table-item">
          <el-form-item label="重复管理员密码" prop="repeatadminpassword" class="table-label">
            <el-input v-model="ruleForm.repeatadminpassword" />
          </el-form-item>
        </div>
        <div class="table-item-br"></div>

        <!-- 站点名称 -->
        <div class="table-column table-item">
          <el-form-item label="站点名称" prop="sitename" class="table-label">
            <el-input v-model="ruleForm.sitename" />
          </el-form-item>
        </div>

        <!-- 提交按钮 -->
        <div class="footer-buttons">
          <el-button class="button" @click="prevStep">上一步</el-button>
          <el-button class="button" type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
        </div>
      </el-form>
    </div>

  </div>
</template>

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
      common.setStep('done')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 10px;

  // 表头
  .table-title {
    display: block;
    text-align: center;
    font-size: 20px;
    color: #303133;
  }

  // 表格
  .table {
    max-width: 560px;
    padding: 20px;
    margin: 0 auto;

    // 换行
    .table-item-br {
      height: 20px;
    }

    // 表格明细
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
      transition: all .3s ease-in-out;
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
      }
    }
  }

  // 底部按钮
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

  // 使用deep更改输入框样式
  :deep(.el-input__wrapper) {
    box-shadow: none;
  }

  :deep(.el-input__wrapper.is-focus) {
    box-shadow: none;
  }

  // 输入杠报错标红修改
  :deep(.el-form-item.is-error .el-input__wrapper) {
    box-shadow: none;
  }

  :deep(.el-form-item__error) {
    left: 11px;
    margin-top: -6px;
  }
}
</style>
