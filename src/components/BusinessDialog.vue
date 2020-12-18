<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="800px">
    <el-form 
      :model="ruleForm" 
      :rules="rules" 
      ref="ruleForm" 
      label-width="110px" 
      class="demo-ruleForm">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">
          <el-form-item label="商汇名称" prop="bussinessName">
            <el-input v-model="ruleForm.bussinessName" maxlength="50"></el-input>
          </el-form-item>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <el-form-item label="商汇名称" prop="bussinessName">
            <el-input v-model="ruleForm.bussinessName" maxlength="50"></el-input>
          </el-form-item>
        </div></el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'BusinessDialog',
  props: {
    title: {
      type: String,
      default: '发布商汇'
    },
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ruleForm: {},
      rules: {}
    }
  },
  methods: {
    submitForm() {

    }
  }
}
</script>

<style lang="less">

</style>