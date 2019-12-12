<template>
  <el-container style="height:100%">
      <el-aside width="220px">
          <div style="height:50px;line-height:50px;background-color:#0051a0;color:#ffffff;text-align:center"><i class="iconyonghuguanli iconfont"
           style="font-size:20px"></i>用户管理</div>
           <div style="margin-top:15px;height: calc(100% - 65px);">
               <el-card style="height: calc(100% - 2px);overflow:auto"
               :body-style="{ padding: '15px 0px 0px 0px'}">
               </el-card>
            </div>

      </el-aside>
      <el-main style="padding:0px 0px 0px 20px;">
          <div style="height:50px;">
              <Buttons :items="buttons"></Buttons>
              <el-input placeholder="请输入姓名、用户名、邮件、电话"
              style="width:350px;margin-right:15px;margin-left:10px;vertical-align:middle"
              clearable>
              <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>

          </div>
          <div style="margin-top:15px;height: calc(100% - 65px);">
              <el-card style="height: calc(100% - 2px);overflow:auto"
              :body-style="{ padding: '25px 40px 10px 40px'}">
              </el-card>
          </div>
    </el-main>
  </el-container>
</template>

<script>
import Buttons from"@/components/buttons.vue"
export default {
name:'user',
data(){
    return{
        buttons:[
        { icon: "iconfont icontianjia1", name: "添加", event: this.addUser, isDisabled: !this.$per("User", "添加") },
        { icon: "iconfont iconbianji", name: "编辑", event: this.editUser, isDisabled: !this.$per("User", "编辑") },
        { icon: "iconfont iconshanchu1", name: "删除", event: this.delUser, isDisabled: !this.$per("User", "删除") },
        { icon: "iconfont iconzhongzhimima", name: "重置密码", event: this.resetUser, isDisabled: !this.$per("User", "重置密码") }
      ],
      }
    
},
components:{Buttons},
methods:{
    addUser(){

    },
    editUser(){

    },
    delUser(){

    },
    resetUser(){
        
    }
}
}
</script>

<style>

</style>