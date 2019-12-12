<template>
  <el-form label-width="140px">
      <el-row >
          <el-col :span="24">
              <el-form-item label="用户名："
                      prop="username">

              </el-form-item>
          </el-col>
          <el-col :span="24">
                  <el-form-item label="旧密码:"
                  prop="oldpassword">
                  <el-input placeholder="请输入旧密码"
                            show-password
                            auto-complete="new-password"></el-input>
                  </el-form-item>
          </el-col>
          <el-col :span="24">
              <el-form-item label="确认密码："
                      prop="comfirmpassword">
                  <el-input placeholder="请输入确认密码"
                            show-password
                            auto-complete="new-password"></el-input>
              </el-form-item>

          </el-col>
      </el-row>
  </el-form>
</template>

<script>
let validateNewPass = (rule, value, callback) => {
  let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~$@$!%*#?&])[A-Za-z\d~$@$!%*#?&]{8,18}$/
  if (!reg.test(value)) {
    callback(new Error('密码应该为8-18位字母、数字、特殊字符组合'))
  } else {
    callback()
  }
}
export default {
   name:'changePassword',
   data(){
       return{
           item: { username: sessionStorage.getItem("username"), oldpassword: "", newpassword: "", comfirmpassword: "" },
      rules: {
        oldpassword: [{
          required: true,
          message: '请输入旧密码',
          trigger: ['change', 'blur']
        }],
        newpassword: [{
          required: true,
          validator: validateNewPass,
          trigger: ['change', 'blur']
        }],
        comfirmpassword: [{
          required: true,
          validator: validateNewPass,
          trigger: ['change', 'blur']
        }]
      }
           
       }
   },
   methods:{
       clearPassword() {
      let self = this;
      self.item = { username: sessionStorage.getItem("username"), oldpassword: "", newpassword: "", comfirmpassword: "" };
      self.$nextTick(() => {
        if (self.$refs && self.$refs.ruleForm) {
          self.$refs.ruleForm.clearValidate();
        }
      });
    },
    validate() {
      let flag = false;
      let self = this;
      self.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (self.item.newpassword == self.item.comfirmpassword) {
            if (self.item.newpassword.indexOf(" ") > -1) {
              self.$message({
                showClose: true,
                message: '新密码中不能有空格',
                type: 'warning'
              })
              flag = false;
            } else {
              flag = true;
            }
          } else {
            self.$message({
              showClose: true,
              message: '新密码与确认密码不一致',
              type: 'warning'
            })
            flag = false;
          }
        } else {
          flag = false;
        }
      });
      return flag;
    }
  }
}
</script>

<style>

</style>