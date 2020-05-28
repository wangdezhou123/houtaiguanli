<template>
  <div>
    <div class="fudong1">
      <div class="fudong2">
        <el-card class="box-card">
          <div class="zitidaxiao1">待完成</div>
          <div class="zitidaxiao2">
            <strong>9</strong>
          </div>
        </el-card>
        <el-card class="box-card">
          <div class="zitidaxiao1">已完成</div>
          <div class="zitidaxiao2">
            <strong>0</strong>
          </div>
        </el-card>
        <el-card class="box-card">
          <div class="zitidaxiao1">意向客户数量</div>
          <div class="zitidaxiao2">
            <strong>0</strong>
          </div>
        </el-card>
        <el-card class="box-card">
          <div class="zitidaxiao1">1对1用户数量</div>
          <div class="zitidaxiao2">
            <strong>9</strong>
          </div>
        </el-card>
      </div>
      <div>
        <el-card class="youce">
          <div class="yidong2">
            <span class="zitidaxiao6">学业成（北京）科技有限公司</span>
            <span class="zitiyanse1">正式版</span>
          </div>
          <div>
            <span class="zitidaxiao7">服务地区：</span>
            <span class="zitidaxiao8">山东/河南/四川</span>
          </div>
          <div>
            <span class="zitidaxiao7">购买版本：</span>
            <span class="zitidaxiao8">正式版</span>
          </div>
          <div>
            <span class="zitidaxiao7">有效期至：</span>
            <span class="zitidaxiao8">2021-04-28 23:59:59</span>
          </div>
        </el-card>
      </div>
    </div>
    <!-- 第二个模块 -->
    <!-- <el-card class="box-card2">
      <div class="zitidaxiao3">常用功能</div>
      <div class="fudong1">
        <div class="fenge2">
          <a href="#">
            <span class="el-icon-circle-plus-outline zitidaxiao4"></span>
            <div class="zitidaxiao5">添加学生</div>
          </a>
        </div>
        <div class="fenge1">
          <a href="#">
            <span class="el-icon-circle-plus-outline zitidaxiao4"></span>
            <div class="zitidaxiao5">志愿填报</div>
          </a>
        </div>
        <div class="fenge2">
          <a href="#">
            <span class="el-icon-circle-plus-outline zitidaxiao4"></span>
            <div class="zitidaxiao5">卡管理</div>
          </a>
        </div>
        <div class="fenge1">
          <a href="#">
            <span class="el-icon-circle-plus-outline zitidaxiao4"></span>
            <div class="zitidaxiao5">高招大本</div>
          </a>
        </div>
        <div class="fenge2">
          <a href="#">
            <span class="el-icon-circle-plus-outline zitidaxiao4"></span>
            <div class="zitidaxiao5">找院校</div>
          </a>
        </div>
        <div class="fenge1">
          <a href="#">
            <span class="el-icon-circle-plus-outline zitidaxiao4"></span>
            <div class="zitidaxiao5">找专业</div>
          </a>
        </div>
        <div class="fenge2">
          <a href="#">
            <span class="el-icon-circle-plus-outline zitidaxiao4"></span>
            <div class="zitidaxiao5">排行榜</div>
          </a>
        </div>
      </div>
    </el-card>-->
    <!-- 第三个模板 -->
    <el-card class="yidong1">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="1V1用户" name="first">
          <el-table :data="tableData" style="width: 100%" class="juzhong1">
            <el-table-column prop="time" label="建档时间"></el-table-column>
            <el-table-column prop="shouji" label="注册手机"></el-table-column>
            <el-table-column prop="xingming" label="学生姓名"></el-table-column>
            <el-table-column prop="shengfen" label="高考省份"></el-table-column>
            <el-table-column prop="nianfen" label="高考年份"></el-table-column>
            <el-table-column prop="jindu" label="任务进度"></el-table-column>
            <el-table-column prop="caozuo" label="操作" width="240">
              <span>
                <el-link type="success" :underline="false">个人资料</el-link>
              </span>
              <span>
                <el-link type="success" :underline="false" class="zhongjian1">评测分析</el-link>
              </span>
              <span>
                <el-link type="success" :underline="false">任务管理</el-link>
              </span>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="意向用户" name="second">意向用户</el-tab-pane>
      </el-tabs>
      <div class="fudong4">
        <span>总计6条</span>
        <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      tableData: [
        {
          time: '2020-05-24',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen: '2020',
          jindu: '进行中(0/4)',
          caozuo: ''
        },
        {
          time: '2020-05-24',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen: '2020',
          jindu: '进行中(0/4)',
          caozuo: ''
        },
        {
          time: '2020-05-24',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen: '2020',
          jindu: '进行中(0/4)',
          caozuo: ''
        },
        {
          time: '2020-05-24',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen: '2020',
          jindu: '进行中(0/4)',
          caozuo: ''
        },
        {
          time: '2020-05-24',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen: '2020',
          jindu: '进行中(0/4)',
          caozuo: ''
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less" scoped>
.fudong1 {
  display: flex;
  margin-left: 10px;
  justify-content: space-between;
  .youce {
    width: 390px;
    height: 148px;
  }
  .fudong2 {
    display: flex;
  }
}
.box-card {
  width: 160px;
  height: 150px;
  margin-right: 15px;
  .zitidaxiao1 {
    font-size: 20px;
  }
  .zitidaxiao2 {
    font-size: 40px;
  }
}
.box-card2 {
  width: 690px;
  height: 200px;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  .zitidaxiao3 {
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 25px;
  }
  .zitidaxiao4 {
    width: 40px;
    height: 40px;
    font-size: 40px;
    color: #44b979;
    margin-bottom: 20px;
  }
  .zitidaxiao5 {
    color: #1e1e1e;
  }
  .fudong1 {
    display: flex;
    a:hover {
      color: red;
    }
  }
  .fenge1 {
    width: 115px;
    height: 90px;
    text-align: center;
  }
  .fenge2 {
    width: 80px;
    height: 90px;
    text-align: center;
  }
}
.juzhong1 {
  // text-align: center;
  a {
    padding: 0 7px;
    color: #69c891;
  }
  .zhongjian1 {
    border-left: 2px solid #e8e8e8;
    border-right: 2px solid #e8e8e8;
  }
}
.fudong4 {
  display: flex;
  justify-content: flex-end;
  line-height: 30px;
}
.yidong1 {
  margin-left: 10px;
  margin-top: 20px;
}
.zitidaxiao6 {
  font-size: 20px;
}
.yidong2 {
  margin: 0 auto 20px;
}
.zitiyanse1 {
  font-size: 14px;
  color: #bf6700;
  background-color: #ffecd6;
  margin-left: 15px;
}
.zitidaxiao7 {
  font-size: 14px;
  color: #939393;
}
.zitidaxiao8 {
  font-size: 14px;
}
</style>
