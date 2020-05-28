<template>
  <el-container>
    <el-aside width="200px">
      <h1 class="zitidaxiao1">学业成(北...)</h1>
      <el-menu background-color="#001529" text-color="#a6adb4" active-text-color="#41b276" router>
        <div class="zitiyanse2">
          <span class="zitiyanse1">概况</span>
        </div>
        <el-menu-item index="/gaikuangzonglan">
          <span slot="title" class="zitiyanse2">概况总览</span>
        </el-menu-item>
        <div class="zitiyanse2">
          <span class="zitiyanse1">咨询服务</span>
        </div>

        <el-menu-item index="zhiyuanfangan">
          <span slot="title" class="zitiyanse2">志愿方案</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title" class="zitiyanse2">高考大本</span>
        </el-menu-item>
        <div class="zitiyanse2">
          <span class="zitiyanse1">营销管理</span>
        </div>

        <el-menu-item index="4">
          <span slot="title" class="zitiyanse2">自有品牌卡</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span slot="title" class="zitiyanse2">完美志愿卡</span>
        </el-menu-item>
        <div class="zitiyanse2">
          <span class="zitiyanse1">用户管理</span>
        </div>

        <el-menu-item index="6">
          <span slot="title" class="zitiyanse2">1对1用户</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span slot="title" class="zitiyanse2">意向用户</span>
        </el-menu-item>
        <div class="zitiyanse2">
          <span class="zitiyanse1">设置</span>
        </div>

        <el-menu-item index="8">
          <span slot="title" class="zitiyanse2">流程管理</span>
        </el-menu-item>
        <el-menu-item index="/quanxianguanli">
          <span slot="title" class="zitiyanse2">权限管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="lt">
          <span>
            <img src="../../assets/logo.png" alt width="20px" height="15px" />
          </span>
        </div>
        <div class="rt">
          <span>使用指引</span>
          <span class="zitidaxiao4">意见反馈</span>
          <span>
            <img src="../../assets/logo.png" alt width="20px" height="20px" />
          </span>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="../../assets/logo.png" alt width="20px" height="20px" />
              <span class="zitidaxiao3">屈总</span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>更改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-aside {
    background-color: #001529;
  }
  .el-header {
    background-color: #ffffff;
  }
  .el-main {
    background-color: #f2f3f5;
  }
}
.el-menu-item {
  height: 40px;
  line-height: 40px;
}

.zitidaxiao1 {
  color: #ffffff;
  margin-left: 65px;
}

.zitiyanse1 {
  color: #ffffff;
  margin-left: 20px;
  height: 400px;
}

.zitiyanse2 {
  margin-left: 25px;
  height: 30px;
}
.zitiyanse2 {
  height: 40px;
  line-height: 40px;
}
.el-header {
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 0;
  min-width: 950px;
  font-size: 14px;
  color: #595959;
  .lt {
    height: 100%;
    background-color: white;
    font-size: 20px;
    line-height: 60px;
  }
  .rt {
    height: 100%;
    width: 50%;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .el-dropdown {
      span {
        display: flex;
        align-items: center;
        margin: 0 10px;
      }
    }
    .zitidaxiao4 {
      margin: 0 20px;
    }
  }
}
</style>
