<template>
  <div>
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <div>
            <el-button @click="dialogVisible = true">添加角色</el-button>
          </div>
          <!-- 这是新增角色弹出框 -->
          <el-dialog
            title="新增角色"
            :visible.sync="dialogVisible"
            width="40%"
            :before-close="handleClose"
          >
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="角色管理" prop="juese">
                <el-input v-model="ruleForm.juese" placeholder="请输入最多15个字" class="yidong1"></el-input>
              </el-form-item>
              <el-form-item label="功能配置权限" prop="quanxian">
                <el-tree
                  :data="data"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[0]"
                  :default-checked-keys="[0]"
                  :props="defaultProps"
                  v-model="ruleForm.quanxian"
                ></el-tree>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
          <!--  -->
          <!-- 表单 -->
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="mingcheng" label="角色名称" width="180"></el-table-column>
            <el-table-column prop="shijian" label="角色创建时间" width="180"></el-table-column>
            <el-table-column prop="ren" label="最近操作人"></el-table-column>
            <el-table-column prop="caozuo" label="操作">
              <el-link type="success" class="jiange1" @click="zhanshi1 = true">编辑</el-link>
              <el-link class="jiange2">删除</el-link>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>

      <el-dialog title="新增角色" :visible.sync="zhanshi1" width="40%" :before-close="handleClose">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="角色名称" prop="juese">
            <el-input v-model="ruleForm.juese" placeholder="请输入最多15个字" class="yidong1"></el-input>
          </el-form-item>
          <el-form-item label="功能配置权限" prop="quanxian">
            <el-tree
              :data="data"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[1,2,4,5]"
              :default-checked-keys="[6,7,8,11,13]"
              :props="defaultProps"
              v-model="ruleForm.quanxian"
            ></el-tree>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="zhanshi1 = false">取 消</el-button>
          <el-button type="primary" @click="zhanshi1 = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      // 表单数据
      tableData: [
        {
          mingcheng: '咨询老师',
          shijian: '2020.04.24 19:54:39',
          ren: '张老师'
        },
        {
          mingcheng: '咨询老师',
          shijian: '2020.04.24 19:54:39',
          ren: '张老师'
        },
        {
          mingcheng: '咨询老师',
          shijian: '2020.04.24 19:54:39',
          ren: '张老师'
        },
        {
          mingcheng: '咨询老师',
          shijian: '2020.04.24 19:54:39',
          ren: '张老师'
        },
        {
          mingcheng: '咨询老师',
          shijian: '2020.04.24 19:54:39',
          ren: '张老师'
        }
      ],
      ruleForm: {
        juese: '',
        quanxian: ''
      },
      rules: {
        juese: [
          {
            required: true,
            trigger: 'blur',
            message: '最多可输入15个字',
            max: 5
          }
        ],
        quanxian: [
          {
            required: true,
            trigger: 'blur'
          }
        ]
      },
      data: [
        {
          id: 1,
          label: '概况',
          children: [
            {
              id: 6,
              label: '概况总览'
            }
          ]
        },
        {
          id: 2,
          label: '咨询服务',
          children: [
            {
              id: 7,
              label: '志愿方案'
            },
            {
              id: 8,
              label: '高招大本'
            }
          ]
        },
        {
          id: 3,
          label: '营销管理',
          children: [
            {
              id: 9,
              label: '自由品牌卡'
            },
            {
              id: 10,
              label: '完美志愿卡'
            }
          ]
        },
        {
          id: 4,
          label: '用户管理',
          children: [
            {
              id: 11,
              label: '1对1用户'
            },
            {
              id: 12,
              label: '意向用户'
            }
          ]
        },
        {
          id: 5,
          label: '设置',
          children: [
            {
              id: 13,
              label: '流程管理'
            },
            {
              id: 14,
              label: '权限管理'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      zhanshi1: false,
      dialogVisible: false,
      activeName: 'second'
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less" scoped>
.yidong1 {
  margin-top: 20px;
  margin-bottom: 20px;
  // margin-left: -100px;
}
.yidong2 {
  margin-bottom: 20px;
}
.jiange1 {
  padding: 0 10px;
  border-right: 2px solid #e8e8e8;
}
.jiange2 {
  padding: 0 10px;
}
</style>
