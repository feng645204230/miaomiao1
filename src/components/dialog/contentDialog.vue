<template>
  <el-dialog :title="title"
             :visible.sync="IsShowDialog"
             :width="width?width:'1100px'"
             @close="dialogClosed"
             :close-on-click-modal="false"
             class="abow_dialog"
             append-to-body>
    <div>
      <slot></slot>
    </div>
    <span slot="footer"
          class="dialog-footer"
          v-if="isSee==true">
      <el-button type="primary"
                 @click="dialogClosed">关闭</el-button>
    </span>
    <span slot="footer"
          class="dialog-footer"
          v-else>
      <el-button type="primary"
                 @click="processEnd"
                 v-if="isEnd">结束流程</el-button>
      <el-button type="primary"
                 @click="dialogComfirmed"
                 v-if="isProcess">下一步</el-button>
      <el-button type="primary"
                 @click="dialogComfirmed"
                 v-else>{{isTask?"提交":"确定"}}</el-button>
      <el-button @click="dialogClosed">{{isTask?"关闭":"取消"}}</el-button>
    </span>
  </el-dialog>
</template>
<script>
import "@/assets/css/common.css"
export default {
  name: "contentDialog",
  data() {
    return {
      IsShowDialog: false
    }
  },
  watch: {
    IsShow: {
      handler(nv) {
        if (nv) {
          this.IsShowDialog = true;
        } else {
          this.IsShowDialog = false;
        }
      },
      deep: true
    }
  },
  methods: {
    dialogClosed() {
      this.$emit("dialogClosed");
    },
    dialogComfirmed() {
      this.$emit("dialogComfirmed");
    },
    processEnd() {
      this.$emit("processEnd");
    }
  },

  props: ['title', 'IsShow', "width", "isSee", "isProcess", "isEnd", "isTask"]
}
</script>
