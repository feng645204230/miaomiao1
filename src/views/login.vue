<template>
  <div class="loginbg">
    <div style="position:absolute;top:30px;left:75px;">
      <!-- <img src="/static/image/login_logo.png" /> -->
    </div>
    <el-card
      :body-style="{ padding: '33px 50px 0px 50px'}"
      style="width:520px;height:520px;background-color:#FFFFFF;right:205px;top:calc(50% - 291px);position:absolute;"
    >
      <div style="font-size:30px;color:#0051a0">欢迎登录</div>
      <div style="font-size:30px;color:#0051a0;margin-top:5px;">ZHZG系统</div>
      <div style="margin-top:30px"></div>
      <el-form ref="loginForm" :model="loginData" :rules="rules" class="selflogin">
        <el-row>
          <el-col :span="24">
            <el-form-item prop="username">
              <el-input v-model="loginData.username" placeholder="请输入用户名">
                <template slot="prepend">
                  <i class="iconfont iconyonghuming"></i>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item prop="password">
              <el-input v-model="loginData.password" placeholder="请输入用户密码" show-password>
                <template slot="prepend">
                  <i class="iconfont iconmima"></i>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="color: #666666;font-size:20px;margin-bottom:40px;margin-top:10px">
          <div style="float:left">
            <el-checkbox label="记住我"></el-checkbox>
          </div>
          <div style="float:right">忘记密码请联系管理员</div>
          <div style="clear:both"></div>
        </div>
        <el-row>
          <el-col :span="11">
            <el-button
              type="danger"
              @click.prevent="submitForm()"
              style="width:100%;height:60px;font-size:26px;"
            >登录</el-button>
          </el-col>
          <el-col :span="11" :offset="2">
            <el-button type="info" @click.prevent="resetForm()" style="width:100%;height:60px;font-size:26px;">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      checked: false,
      loginData: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: "请输入用户密码",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  created() {
    this.loginData.username = localStorage.getItem("login_username")
      ? localStorage.getItem("login_username"): "";
    this.loginData.password = localStorage.getItem("login_password")
      ? localStorage.getItem("login_password"): "";
    this.$store.state.Login.self = this;
  },
  destroyed() {
    this.$store.state.Login.loading.close();
  },
  methods: {
    resetForm() {
      let self = this;
      self.loginData.username = "";
      self.loginData.password = "";
    },
    submitForm() {
      let self = this;
      self.$refs.loginForm.validate(valid => {
        if (valid) {
          self.loginData.checked = self.checked;
          self.$store.dispatch("Login", self.loginData);
          return true;
        }
      });
    }
  }
};
</script>

<style scoped>
.loginbg {
  /* background: url(/static/image/loginbg.png) no-repeat; */
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  min-height: 584px;
  position: relative;
}
</style>
<style>
.selflogin .el-input-group__append,
.el-input-group__prepend {
  background-color: #0051a0 !important;
  color: #ffffff !important;
}
.selflogin .el-input-group__append .iconfont,
.el-input-group__prepend .iconfont {
  font-size: 28px;
}
.selflogin .el-input__inner {
  height: 58px !important;
  line-height: 58px !important;
  border-color: #0051a0 !important;
}
.selflogin .el-input__icon {
  line-height: 58px;
}
.selflogin .el-checkbox__inner {
  width: 25px;
  height: 24px;
  border-color: #6a707e;
}
.selflogin .el-checkbox__label {
  font-size: 18px;
}
.selflogin .el-checkbox__inner::after {
  height: 12px;
  left: 9px;
  top: 3px;
}
</style>