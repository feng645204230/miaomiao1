<template>
  <el-container style="height:100%;">
      <el-aside width="220px">
          <div style="height:50px;line-height:50px;background-color:#0051a0;color:#ffffff;text-align:center"><i class="iconzidianbiaoguanli iconfont"
           style="font-size:20px;"></i>数据字典></div>
        <div style="margin-top:13px;height: calc(100% - 65px);">
            <el-card style="height: calc(100% - 2px);overflow:auto">

            </el-card>

        </div>
      </el-aside>
      <el-main style="padding:0px 0px 0px 20px;">
          <div style="height:45px">
              <Buttons :items="buttons"></Buttons>
          </div>
          <div style="margin-top:15px;height: calc(100% - 65px);">
              <el-card style="height: calc(100% - 2px);overflow:auto"
                 :body-style="{ padding: '30px 40px 10px 40px'}">
                 </el-card>

          </div>

      </el-main>

  </el-container>
</template>

<script>
import Buttons from"@/components/buttons.vue"
export default {
name:'datadict',
data(){
    return{
        buttons: [
        { icon: "iconfont icontianjia1", name: "添加", event: this.addChildTask, isDisabled: !this.$per("Datadict", "添加") },
        { icon: "iconfont iconbianji", name: "编辑", event: this.editChildTask, isDisabled: !this.$per("Datadict", "编辑") },
        { icon: "iconfont iconshanchu1", name: "删除", event: this.delChildTask, isDisabled: !this.$per("Datadict", "删除") }
      ],
    }
},
components:{Buttons},
methods:{
    addChildTask(){},
    editChildTask(){},
    delChildTask(){}
}
}
</script>

<style>

</style>