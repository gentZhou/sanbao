<template>
  <div class="login-container">
    <div class="login-content">
      <h1 class="title">
        门前三包后台管理系统
      </h1>
      <div class="login-bg">
        <h3 class="title3">
          用户登录
        </h3>
        <el-form :model="formLogin">
          <el-form-item label="">
            <i class="iconfont iconuseL"></i>
            <el-input v-model="formLogin.username"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="formLogin.password"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formLogin: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.login-container {
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/images/loginbg.e516cd0c.png");
  background-size: 100% 100%;
  position: relative;
  .login-content {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    width: 720px;
    .title {
      font-size: 36px;
      color: #fff;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
      background-image: -webkit-linear-gradient(bottom, #1797f4, #80f2ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .login-bg {
      height: 360px;
      width: 100%;
      background-image: url("../../assets/images/login.5850c640.png");
      background-size: 100% 100%;
      padding: 5px 140px;
      box-sizing: border-box;
      .title3 {
        background-image: -webkit-linear-gradient(bottom, #4fecfc, #defcfe);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 28px;
        text-align: center;
      }
      .el-form {
        .el-form-item{
          margin-top:60px;
          .el-input{
          height:52px;
        }
        }
      }
    }
  }
}
</style>
