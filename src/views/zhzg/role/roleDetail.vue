<template>
  <el-form :model="item"
           ref="ruleForm"
           :rules="rules"
           label-width="140px">
    <el-form-item label="角色名称："
                  prop="roleName">
      <el-input v-model="item.roleName"
                maxlength="50"
                show-word-limit
                placeholder="请输入角色名称"></el-input>
    </el-form-item>
    <el-form-item label="描述：">
      <el-input v-model="item.description"
                type="textarea"
                :rows="3"
                maxlength="100"
                show-word-limit
                placeholder="请输入描述"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import "@/assets/css/common.css"
export default {
  name: 'roleDetail',
  data() {
    return {
      rules: {
        roleName: [{
          required: true,
          message: '请输入角色名称',
          trigger: ['change', 'blur']
        }],
      }
    }
  },
  methods: {
    validate() {
      let flag = false;
      let self = this;
      self.$refs.ruleForm.validate((valid) => {
        if (valid) {
          flag = true;
        } else {
          flag = false;
        }
      });
      return flag;
    }
  },
  props: ["item"]
}
</script>