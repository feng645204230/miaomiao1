<template>
  <el-container style="height:100%">
    <el-aside width="220px">
      <div style="height:50px;line-height:50px;background-color:#0051a0;color:#ffffff;text-align:center"><i class="iconxiangmuwenjian iconfont"
           style="font-size:20px;"></i>文件管理</div>
        <div style="margin-top:15px;height: calc(100% - 65px);">
          <el-card style="height: calc(100% - 2px);overflow:auto"
                 :body-style="{ padding: '15px 0px 0px 0px'}">
            <div class="block">
                <el-tree 
                :data="data5" 
                node-key="id" 
                default-expand-all 
                :expand-on-click-node="false"
                @node-contextmenu="rihgtClick"
                >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span> <i :class="node.icon"></i>{{ node.label }}</span>
        <span>
          <el-button type="text" size="mini" @click="() => append(data)">
            
          </el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">
            
          </el-button>
        </span>
      </span>
    </el-tree> 
        <div v-show = "menuVisible" >
          <ul id = "menu">
            <li tabindex="-1" class="menu__item" id="menu-4994-1-0">Axure Components</li>
            <li tabindex="-1" class="menu__item" id="menu-4994-1-1">Sketch Templates</li>
            <li tabindex="-1" class="menu__item" id="menu-4994-1-2">组件交互文档</li>
          </ul>
        </div>  
      </div>
          </el-card>
      </div>
    </el-aside>

    <el-main style="padding:0px 0px 0px 20px;">
        <div style="height:50px"></div>

        <div style="margin-top:15px;height: calc(100% - 65px);">
            <el-card style="height: calc(100% - 2px);overflow:auto"
                    :body-style="{ padding: '25px 40px 10px 40px'}">
            </el-card>
        </div>
    </el-main>
  </el-container>
</template>
<script>
let id=1000;
export default {
name:'fileManage',
data() {
    
      const data = [{
        id: 1,
        icon:"el-icon-delete",
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            icon:'el-icon-info',
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data5: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        console.log("当前data为：",data);
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      rihgtClick(event,object,value,element){
        this.menuVisible=false
        if(value.level == 1){
          this.menuVisible = true;
          let menu = document.querySelector("#menu");
        /* 菜单定位基于鼠标点击位置 */
          menu.style.left = event.clientX + 20 + "px" ;
          menu.style.top = event.clientY -10 + "px";
        };
        
        

        console.log("右键被点击的event:",event);
        console.log("右键被点击的object:",object);
        console.log("右键被点击的value:",value);
        console.log("右键被点击的element:",element);

      },
      menuVisible(){
        this.menuVisible=true
      },

    }
   
    
}
</script>
<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }

</style>