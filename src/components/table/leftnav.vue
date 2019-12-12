<template>
  <div style="height:100%;background-color:#014e99">
    <el-menu
      :default-active="activeIndex"
      mode="vertical"
      background-color="#0059af"
      text-color="#fff"
      active-text-color="#ff9800"
      class="selfnav"
      unique-opened
      router
    >
      <el-menu-item index="/main" style="font-size:16px">
        <i class="iconfont iconxitongmenhu" style="font-size:22px;margin-right:10px;"></i>系统门户
      </el-menu-item>
      <el-submenu :index="index+''" v-for="(item,index) in getList" :key="index">
        <template slot="title" v-if="item.isShow">
          <i :class="item.action" style="font-size:22px;margin-right:10px;"></i>
          <span style="font-size:16px">{{item.title}}</span>
        </template>
        <el-menu-item
          :index="child.toLink"
          v-for="(child,childindex) in item.items"
          v-show="child.isShow"
          :key="childindex"
        >{{child.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "leftnav",
  data() {
    return {
      activeIndex: "",
      items: [
        {
          action: "iconfont iconWBSguanli",
          title: "模型文件管理",
          isShow: true,
          items: [
            { title: "文件管理", toLink: "/fileManage", isShow: true },
            
          ]
        },
        {
          action: "iconfont iconliuchengguanli",
          title: "流程管理",
          isShow: true,
          items: [
            { title: "自定义表单", toLink: "/customForm", isShow: true },
            { title: "流程", toLink: "/process", isShow: true },
            { title: "流程模型", toLink: "/processModel", isShow: true },
            { title: "待办任务", toLink: "/processTask", isShow: true },
            { title: "已办任务", toLink: "/processOverTask", isShow: true },
            {
              title: "我发起的",
              toLink: "/processLaunchTaskForMe",
              isShow: true
            }
          ]
        },
        {
          action: "el-icon-s-tools",
          title: "系统管理",
          isShow: true,
          items: [
            { title: "角色权限管理", toLink: "/role", isShow: true },
            { title: "日志管理", toLink: "/operateLog", isShow: true },
            { title: "数据字典", toLink: "/datadict", isShow: true },
            { title: "用户管理", toLink: "/user", isShow: true },
            { title: "组织管理", toLink: "/organization", isShow: true }
          ]
        }
      ]
    };
  },
  mounted() {
    this.activeIndex = this.$route.path;
  },
  computed: {
    getList() {
      return this.items;
    }
  }
};
</script>
<style scoped>
.main {
  padding: 20px;
  height: calc(100% - 70px);
}
.el-container.is-vertical {
  width: 100%;
  height: 100%;
}
.selfnav {
  border: none;
}
</style>
<style>
.selfnav .el-menu-item i {
  color: #ffffff !important;
}
.selfnav .el-menu-item.is-active i {
  color: #ff9800 !important;
}
.selfnav .el-submenu__title i {
  color: #ffffff !important;
}
</style>