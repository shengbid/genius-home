<template>
  <div class="identity-container bg-white">
    <div class="id-title">
      <span class="el-icon-s-custom"></span>
      完善身份信息
    </div>
    <el-form 
      :model="ruleForm" 
      :inline="true"
      :rules="rules" 
      ref="ruleForm" 
      label-width="110px" 
      class="demo-ruleForm">
      <el-form-item label="商汇名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="经验年限" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证号码" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="广告网址" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="是否开放动态" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="是否开放相册" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="允许牛人联手" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="简历公开" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <div>
        <el-form-item label="个人介绍" prop="desc">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </div>
      <div class="submit">
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Identity',
     data() {
      return {
        ruleForm: {
          name: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入商汇名称', trigger: 'blur' },
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style lang='less'>
.identity-container {
  margin-top: 10px;
  padding: 20px;
  .id-title {
    font-size: 16px;
    color: #666;
    line-height: 40px;
    font-weight: bold;
    padding-bottom: 20px;
  }
  .el-input {
    width: 275px;
  }
  .el-textarea {
    width: 900px;
  }
  .submit {
    margin-top: 20px;
    padding-left: 102px;
  }
}
</style>