<template>
  <div style="display:inline-block;">
    <el-button  type="mini"
                :icon="item.icon"
                @click="item.event"
                v-for="(item,index) in items"
                :disabled="item.isDisabled"
                plain
                :key="index">{{item.name}}</el-button>
  </div>
</template>
<script>
export default {
  name:'buttons',

  data() {
    return {
    }
  },
  props:["items"]
  
}
</script>
