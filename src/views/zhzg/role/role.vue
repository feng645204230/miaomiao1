<template>
  <el-container style="height:100%;">

      <el-aside width="220px">
          <div style="height:50px;line-height:50px;background-color:#0051a0;color:#ffffff;text-align:center"><i class="iconjiaosequanxianguanli iconfont"
           style="font-size:20px;"></i>角色权限管理</div>
           <div style="margin-top:15px;height: calc(100% - 65px);">
               <el-card style="height: calc(100% - 2px);overflow:auto"
                 :body-style="{ padding: '15px 0px 0px 0px'}">
                   <a ></a>
                       <div></div>
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

            </el-card>
        </div>
    </el-main>
    
    <contentDialog>
      <roleDetail :item="addOrUpdate"
                  ref="addOrUpdate"></roleDetail>
    </contentDialog>
  </el-container>
</template>

<script>
import Buttons from "@/components/buttons.vue"
import roleDetail from "./roleDetail.vue"
import contentDialog from "@/components/dialog/contentDialog.vue"
export default {
name:'role',
created(){
  
},
mounted(){

},
data(){
  return{
    searchfx: "",
      buttons: [
        { icon: "iconfont icontianjia1", name: "添加", event: this.addRole, isDisabled: !this.$per("Role", "添加")  },
        { icon: "iconfont iconbianji", name: "编辑", event: this.editRole, isDisabled: !this.$per("Role", "编辑")  },
        { icon: "iconfont iconshanchu1", name: "删除", event: this.delRole , isDisabled: !this.$per("Role", "删除")},
        { icon: "iconfont iconrenyuanpeizhi", name: "人员配置", event: this.personConfig, isDisabled: !this.$per("Role", "人员配置") },
        { icon: "iconfont iconjiaosequanxian", name: "授权", event: this.savePermission, isDisabled: !this.$per("Role", "授权") }
      ],
      isShow: false,
      isShowForPermission: false,
      IsShowAddUser: false,
      title: "",
      selectNode: {},
      currentIndex: -1,
      initObject: { roleName: "", description: "" },
      addOrUpdate: {},
      multiple: true,
      permissions: []
  }
},
components:{Buttons,roleDetail ,contentDialog},
methods:{
    addRole(){
   
    },
    editRole() {
      
    },
    delRole() {
      
    },
    personConfig() {
      
    },
    dialogComfirmed() {
      
    },
    savePermission() {

    }
}
}
</script>

<style scoped>
.item {
  line-height: 30px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  color: #0051a0;
  font-size: 14px;
}
a:hover .item,
a .item.active {
  background-color: #e8f1fa;
}
.overflow {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>