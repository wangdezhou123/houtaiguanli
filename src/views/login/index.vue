<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 绘制登录form表单 -->
      <el-form ref="loginFormRef" :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 复选框，单个复选框直接设置v-model即可，接收true/false的信息，表示是否选中 -->
          <el-checkbox v-model="loginForm.xieyi"></el-checkbox>
          <span>
            我已阅读并同意
            <a href="#">用户协议</a>和
            <a href="#">隐私条款</a>
          </span>
        </el-form-item>
        <el-form-item>
          <!-- 登录按钮 -->
          <el-button style="width:100%;" type="primary" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      // 表单数据对象
      loginForm: {
        mobile: '', // 手机号码
        code: '', // 验证码
        xieyi: true // 协议复选框
      }
    }
  },
  methods: {
    // 登录系统
    login () {
      // 路由编程式导航
      // this.$router.push('/home') // 路由地址 实现导航
      this.$router.push({ name: 'home' }) // name属性实现编程式导航
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: gray;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 410px;
    height: 340px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-form {
      width: 75%;
    }
  }
}
</style>
