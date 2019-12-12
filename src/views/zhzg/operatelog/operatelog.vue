<template>
  <el-container style="height:100%;">
      <el-header height="50px"
      style="padding:0px"> 
          
              <el-container>
                  <el-aside width="220px">
                      <div style="height:50px;
                      width:220px;
                      margin-top:0px;
                      line-height:50px;
                      background-color:#0051a0;
                      color:#ffffff;
                      text-align:center"
                      >
                    <i class="iconrizhiguanli iconfont"
                    style="font-size:20px"></i>日志管理</div>

                  </el-aside>
        <el-main style="padding:0px 0px 0px 20px;">
          <el-row type="flex"
                  align="middle">
            <el-col :span="24">
              <div style="vertical-align:top;display:inline-block;padding:10px 5px 0px 0px">开始时间</div>
              <el-date-picker type="date"
                              style="width:170px;vertical-align:top;"
                              value-format="yyyy-MM-dd HH:mm:ss"
                              placeholder="请选择开始时间">
              </el-date-picker>
              <div style="vertical-align:top;display:inline-block;padding:10px 5px 0px 5px">到</div>
              <el-date-picker type="date"
                              style="width:170px"
                              value-format="yyyy-MM-dd HH:mm:ss;"
                              placeholder="请选择结束时间">
              </el-date-picker>

              <el-input placeholder="用户"
                        style="width:170px;margin-left:15px;vertical-align:top;"
                        class="selfinput"></el-input>

              <!-- icon="el-icon-search" -->
              <el-button type="primary"
                         plain
                         style="margin-left:15px;cursor:pointer;vertical-align:top;">查询</el-button>

              <el-button type="primary"
                         plain
                         style="cursor:pointer;vertical-align:top;">清空查询</el-button>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
   </el-header>
   <el-main style="padding:0px;">
      <div style="margin-top:15px;height: calc(100% - 15px);">
        <el-card style="height: calc(100% - 2px);overflow:auto"
                 :body-style="{ padding: '25px 40px 10px 40px'}">
          
        </el-card>
      </div>
    </el-main>
  </el-container>
  
  
</template>

<script>
export default {
name: 'operateLog'

}
</script>

<style>
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  padding: 30px;
}
</style>