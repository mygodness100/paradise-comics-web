<template>
  <div class="user">
    <el-divider class="divider">登录</el-divider>
    <el-form class="login-form" :model="formData" :rules="rules" ref="formData">
      <el-form-item prop="username"><el-input v-model="formData.username" placeholder="请输入用户名/手机号/邮箱"></el-input></el-form-item>
      <el-form-item prop="password">
        <el-input :type="passwordType" v-model="formData.password" placeholder="请输入密码" @keyup.enter.native="login" />
        <span class="show-pwd" @click="showPwd"><!-- <svg-icon icon-class="eye"/> --></span>
      </el-form-item>
      <!-- <div class="login-rem">
        <el-checkbox label="记住我" v-model="rememberMe"></el-checkbox>
        <span class="login-notice">不是自己的电脑上不要勾选此项</span> -->
      <!--        <router-link class="tip-right" :to="{ path: '/forget' }">忘记密码?</router-link>-->
      <!-- </div> -->
      <el-form-item>
        <el-row :gutter="10">
          <el-col :span="12"><el-button style="width: 100%;" :loading="loading" type="primary" @click.native.prevent="login">登录</el-button></el-col>
          <el-col :span="12"><el-button style="width: 100%;" @click="register">注册</el-button></el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Crypto from "../../utils/crypto";

export default {
  data() {
    return {
      // 密码类型
      passwordType: "password",
      // 是否加载遮罩层
      loading: false,
      // 是否记住密码
      rememberMe: false,
      // 是否需要登录成功后退回到院目录

      formData: {
        username: null,
        password: null
      },
      rules: {
        username: [{ required: true, message: "用户名/邮箱/手机号不能为空", trigger: "blur" }, { max: "16", message: "用户名长度不能超过16", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { max: 12, message: "密码不得超过12位", trigger: "blur" },
          { min: 6, message: "密码不得少于6位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 显示或隐藏密码
    showPwd() {
      this.passwordType = this.passwordType === "password" ? "" : "password";
    },
    // 登录
    login() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("LOGIN", {
              username: this.formData.username,
              password: Crypto.AESEncode(this.formData.password)
            })
            .then(
              resp => {
                if (resp === 1) {
                  this.$nextTick(() => {
                    if (this.$route.query.redirect) {
                      this.$router.push(this.$route.query.redirect);
                    } else {
                      this.$router.push("/");
                    }
                    this.loading = false;
                  });
                } else {
                  this.$message(resp.msg);
                }
              },
              () => {
                this.loading = false;
              }
            );
        } else {
          this.loading = false;
          return false;
        }
      });
    },
    // 跳转注册页面
    register() {
      this.$router.push({ path: "register" });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/user.scss";
</style>
