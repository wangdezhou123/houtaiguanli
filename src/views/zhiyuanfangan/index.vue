<template>
  <div class="daxiao1">
    <el-card class="daxiao2">
      <div class="fudong1">
        <el-form ref="sousuoFormRef" :model="sousuoForm" label-width="80px" :inline="true" >
          <el-form-item label="学生姓名"  size="mini">
            <el-input v-model="sousuoForm.name" class="kuandu1" placeholder="请输入学生名称" width="180px"></el-input>
          </el-form-item>
          <el-form-item label="手机号"  size="mini" class="yidong1">
            <el-input v-model="sousuoForm.shoujihao" class="kuandu1" placeholder="请输入完整手机号"></el-input>
          </el-form-item>
          <el-form-item label="省份"  width="180px" size="mini" class="yidong1">
             <el-select
              v-model="sousuoForm.shengfen"
              placeholder="请选择"
              clearable
            >
              <el-option
                v-for="item in shengfenList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年份"  size="mini" class="yidong1">
             <el-select
              v-model="sousuoForm.nianfen"
              placeholder="请选择"
              clearable
            >
              <el-option
                v-for="item in nianfenList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-button type="success" size="mini">搜索</el-button>
        </el-form>
      </div>
      <div class="fudong2">
        <el-button type="success" size="mini">添加学生</el-button>
      </div>
      <div>
        <el-table :data="tableData" style="width: 100%" class="juzhong1">
            <el-table-column prop="time" label="建档时间" width="180px"></el-table-column>
            <el-table-column prop="shouji" label="注册手机号"></el-table-column>
            <el-table-column prop="xingming" label="学生姓名"></el-table-column>
            <el-table-column prop="shengfen" label="高考省份"></el-table-column>
            <el-table-column prop="nianfen1" label="高考年份"></el-table-column>
            <el-table-column prop="wenlike" label="文理科"></el-table-column>
            <el-table-column prop="kefenshu" label="本/专科分数"></el-table-column>
            <el-table-column prop="fangan" label="已有方案数"></el-table-column>
            <el-table-column prop="laoshi" label="负责老师"></el-table-column>
            <el-table-column prop="caozuo" label="操作">
              <span>
                <el-link type="success" :underline="false">填报</el-link>
              </span>
            </el-table-column>
          </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      tableData: [
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        },
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        },
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        },
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        },
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        },
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        },
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        },
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        },
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        },
        {
          time: '2020-05-24 18:11:10',
          shouji: '13233333333',
          xingming: '张超越',
          shengfen: '山东',
          nianfen1: '2020',
          wenlike: '-',
          kefenshu: '276',
          fangan: '-',
          laoshi: '张老师',
          caozuo: ''
        }
      ],
      nianfenList: [{
        name: '2015',
        id: '1'
      }, {
        name: '2016',
        id: '2'
      }, {
        name: '2017',
        id: '3'
      }
      ],
      shengfenList: [{
        name: '北京',
        id: '1'
      }, {
        name: '天津',
        id: '2'
      }, {
        name: '河北',
        id: '3'
      }
      ],
      sousuoForm: {
        name: '',
        shoujihao: '',
        shengfen: '',
        nianfen: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.daxiao1 {
  height: 100%;
  .daxiao2 {
    // height: 100%;
    margin-right: -20px;
    .kuandu1 {
      width: 180px;
    }
  }
}
.yidong1 {
  margin-left: -30px;
}
.fudong2 {
  display: flex;
  flex-direction:row-reverse;
}
</style>
