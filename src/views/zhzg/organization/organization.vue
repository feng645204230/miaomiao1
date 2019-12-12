<template>
  <el-container style="height:100%">
      <el-aside width="220px">
          <div style="height:50px;line-height:50px;background-color:#0051a0;color:#ffffff;text-align:center"><i class="iconzuzhiguanli iconfont"
           style="font-size:20px"></i>组织管理></div>
           <div style="margin-top:15px;height: calc(100% - 65px);">
               <el-card style="height: calc(100% - 2px);overflow:auto"
                 :body-style="{ padding: '15px 0px 0px 0px'}">
                </el-card>
            </div>
        </el-aside>
        <el-main style="padding:0px 0px 0px 20px;">
            <div style="height:50px"> 
                <Buttons :items="buttons"></Buttons>
            </div>
            <div style="margin-top:15px;height: calc(100% - 65px);">
                <el-card style="height: calc(100% - 2px);overflow:auto"
                 :body-style="{ padding: '25px 40px 10px 40px'}">
                 <el-form style="width:500px" label-width="100px">
                     <el-form-item label="父级组织：">
                         <el-input></el-input>
                     </el-form-item>
                     <el-form-item label="名称：">
                         <el-input></el-input>
                     </el-form-item>
                     <el-form-item label="描述：">
                         <el-input></el-input>
                     </el-form-item>
                </el-form>
             </el-card>
         </div>
     </el-main>
    </el-container>
</template>

<script>
import Buttons from"@/components/buttons.vue"
export default {
name:'organization',
components:{Buttons},
data(){
    return{
        title: "",
      searchfx: "",
      buttons: [
        { icon: "iconfont icontianjia1", name: "添加", event: this.addOrganization, isDisabled: !this.$per("Organization", "添加") },
        { icon: "iconfont iconbianji", name: "编辑", event: this.editOrganization, isDisabled: !this.$per("Organization", "编辑") },
        { icon: "iconfont iconshanchu1", name: "删除", event: this.delOrganization, isDisabled: !this.$per("Organization", "删除") },
        { icon: "iconfont iconrenyuanpeizhi", name: "人员配置", event: this.personConfig, isDisabled: !this.$per("Organization", "人员配置") },
      ],
    }
},
methods:{
    addOrganization(){},
    editOrganization(){},
    delOrganization(){},
    personConfig(){}
}
}
</script>

<style>

</style>