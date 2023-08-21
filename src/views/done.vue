<template>
    <div>
        <div class="container">
            <div class="table-title">✨ 感谢使用 ✨</div>
            <div class="done-box">
                <div>后台地址</div>
                <div class="admin-url">http://127.0.0.1/index.html/#/admin</div>
                <div class="reload-tips">
                    需重新安装系统？<span class="reload">请点击我</span>
                </div>
            </div>
            <div class="text-warning">
                <el-alert
                    closable="false"
                    center
                    title="建议删除: 根目录/public/install 文件夹；本页仅在您的设备上可见。"
                    type="error"
                />
            </div>
            <div class="done-button">
                <el-button type="primary" plain size="large">隐藏 index.html？</el-button>
                <el-button type="primary" plain size="large">访问前台</el-button>
                <el-button type="primary" size="large">访问后台</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    margin-top: 20px;
    padding: 20px;
    .table-title {
        display: block;
        text-align: center;
        font-size: 20px;
        color: #67c23a;
    }
    .text-warning {
        max-width: 500px;
        margin: 20px auto;
    }
    .done-box {
        display: block;
        max-width: 500px;
        margin: 20px auto;
        background-color: #ffcdcd;
        padding: 20px;
        border-radius: 6px;
        text-align: center;
        color: #d9534f;
        font-size: 15px;
        .reload-tips {
            font-size: 13px;
            color: #909399;
            .reload {
                cursor: pointer;
                color: #409eff;
            }
        }
    }
    .admin-url {
        background-color: #fcfcfc;
        font-size: 16px;
        text-align: center;
        padding: 5px;
        border-radius: 4px;
        margin: 10px 0;
        cursor: pointer;
        word-wrap: break-word;
        white-space: normal;
        word-break: break-all;
        &:hover {
            text-decoration: underline;
        }
    }
    .done-button {
        display: flex;
        justify-content: space-around;
        max-width: 500px;
        margin: 0 auto;
        button {
            width: 130px;
        }
    }
}
</style>
