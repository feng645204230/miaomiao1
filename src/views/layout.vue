<template>
<el-container style="height:100%">
    <el-header height="90px">
      <div style="padding-left:260px;">
        <div class="bg left"
             style="height:74px;width:260px;text-align:center;padding-top:16px;margin-left:-260px">
             <!-- <img src="@/assets/image/logo.png" width="230" /> -->
             </div>
               <!-- 这是头部div -->
        <div style="background-color:#f7f7f7;width:100%;border-bottom:5px solid #e9e9e9;height:85px;"
             class="left">
          <div class="left">
            <!-- 项目文件图标 -->
            <!-- <el-card :body-style="{ padding: '0px',cursor:'pointer'}"
                     class="inline projectname" -->
                     <!-- > -->
              <!-- <div><i class="iconfont iconxiangmuwenjian"
                   style="font-size:20px;margin-right:7px;vertical-align:middle"></i></div> -->
            <!-- </el-card> -->
            <!-- 切换回项目 -->
            <!-- <el-card :body-style="{ padding: '0px'}"
                     style="vertical-align:top;margin-left:13px;height:50px;margin-top:18px;width:50px;text-align:center;line-height:50px;font-size:20px;color:#a7b0c1;cursor:pointer"
                     class="inline"
                     >
              <div><i class="iconfont iconqiehuan"></i></div>
            </el-card> -->
          </div>
          <div class="right"
               style="margin-top:20px">
            <div class="inline"
                 style="margin-right:25px;vertical-align:middle">
              <a  @click="toHome" >
                <i class="iconfont iconshouye info"
                   style="font-size:28px;"></i>
              </a>
            </div>
            <div class="inline"
                 style="margin-right:35px;vertical-align:middle">
              <a>
                <el-badge :value="12">
                  <i class="iconfont iconxinxi info"></i>
                </el-badge>
              </a>
            </div>
            <div class="inline"
                 style="margin-right:15px;vertical-align:middle">
              <el-avatar :size="50"
                         :src="require('@/assets/image/user.png')"></el-avatar>
            </div>
            <div class="inline"
                 style="margin-right:20px">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link username">
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="password">修改密码</el-dropdown-item>
                  <el-dropdown-item command="loginout">退出系统</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
    </el-header>
    <el-main class="main">
      <!-- 引入左边导航组件 -->
      <el-container style="height:100%;">
        <el-aside width="260px"
                  class="leftcontent">
          <LeftNav></LeftNav> 
          
        </el-aside>
    <el-main style="padding:20px;background-color:#f7f7f7;">
          <router-view />
        </el-main>
      </el-container>
    </el-main>
    <contentDialog title="修改密码"
                   
                   v-on:dialogComfirmed="dialogComfirmedForPasswod"
                   v-on:dialogClosed="dialogClosedForPasswod">
      <changePassword ref="changePassword"></changePassword>
    </contentDialog>
</el-container>
</template>

<script>
import LeftNav from "@/components/table/leftnav.vue"
import ContentDialog from"@/components/dialog/contentDialog.vue"
import ChangePassword from"@/views/zhzg/project/changePassword.vue"
export default {
components:{LeftNav,ContentDialog,ChangePassword},
methods:{
  toHome(){
    this.$router.push({path:'/main'})
  },
  handleCommand(command){
    
  },
  dialogComfirmedForPasswod() {
      let self = this;
      if (self.$refs.changePassword.validate() == true) {
        self.$store.state.Project.self = self;
        self.$store.dispatch('changePassword', self.$refs.changePassword.item);
      }
    },
    dialogClosedForPasswod() {
      
      
    },

}
}

</script>
<style scoped>
.projectname {
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  background-color: #ffffff;
  color: #0051a0;
  font-size: 16px;
  padding: 0px 15px;
  margin-left: 30px;
  margin-top: 18px;
}
.main {
  padding: 0px;
  height: calc(100% - 90px);
}
.el-container.is-vertical {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0px;
}
.bg {
  background-color: #0059af;
}
.left {
  float: left;
}
.right {
  float: right;
}
.clear {
  clear: both;
}
.toolscontent {
  width: 100px;
  background-color: #00376d;
  text-align: center;
  padding-top: 35px;
  height: 70px;
}
.tools,
.info {
  color: #a7b0c1;
  font-size: 32px;
  cursor: pointer;
}
.inline {
  display: inline-block;
}
.username {
  color: #333333;
  font-size: 20px;
}
.el-dropdown-link {
  cursor: pointer;
}
</style>