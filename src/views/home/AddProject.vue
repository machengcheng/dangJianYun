<template>
    <section class="add-project-section">
        <div class="add-project-content">
            <div class="box-title mb20">创建项目</div>
            <el-form :model="addProjectForm" :rules="rules" ref="addProjectForm" class="demo-form-inline" label-width="150px">
                <div class="content">
                    <el-col :span="24">
                        <el-form-item
                            label="项目名称: "
                            prop="projectName"
                        >
                            <el-input
                                v-model="addProjectForm.projectName"
                                size="medium"
                            >
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item
                            label="项目目标: "
                            prop="projectTarget"
                        >
                            <el-input
                                v-model="addProjectForm.projectTarget"
                                size="medium"
                            >
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item
                            label="项目描述: "
                            prop="description"
                        >
                            <el-input
                                type="textarea"
                                :rows="4"
                                style="width: 500px;"
                                size="medium"
                                resize="none"
                                placeholder="请输入项目描述信息"
                                v-model="addProjectForm.description">
                            </el-input><br/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item
                            prop="deadline"
                            label="设定项目结束时间: "
                        >
                            <el-date-picker
                                v-model="addProjectForm.deadline"
                                type="date"
                                placeholder="选择日期"
                            >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <div class="label-block">
                            <div class="label-title">已添加标签</div>
                            <el-tag
                                :key="label"
                                v-for="label in labels"
                                closable
                                :disable-transitions="false"
                                @close="handleClose(label)">
                                {{label}}
                            </el-tag>
                        </div>
                    </el-col>
                    <el-col :span="24" align="center">
                        <el-button type="primary" size="medium" :loading="isLoading" @click="submitForm('addProjectForm')">保存</el-button>
                        <el-button type="primary" size="medium" @click="addLabel">添加标签</el-button>
                    </el-col>
                    <div class="clear"></div>
                </div>
            </el-form>
        </div>
    </section>
</template>

<script>
	export default {
		name: "add-project",
		components: {

        },
		data() {
			return {
                labels: ['标签一', '金融', '标签', '标签', '标签', '标签', '标签', '标签', '标签', '标签', '标签', '标签', '标签', '标签', '标签'],
                isLoading: false,
                addProjectForm: {
                    projectName: '',
                    projectTarget: '',
                    description: '',
                    deadline: ''
                },
                rules: {
                    projectName: [
                        {required: true, message: '项目名称不能为空', trigger: 'blur,change'},
                        {min: 1, max: 128, message: '最大长度为128个字符', trigger: 'blur change'}
                    ],
                    projectTarget: [
                        {required: true, message: '项目目标不能为空', trigger: 'blur,change'},
                        {min: 1, max: 128, message: '最大长度为128个字符', trigger: 'blur change'}
                    ],
                    systemUser: [
                        {required: true, message: '系统用户不能为空', trigger: 'blur,change'}
                    ]
                }
            }
		},
		methods: {
            handleClose(label) {
                this.labels.splice(this.labels.indexOf(label), 1);
            },
            submitForm(formName) {
                let that = this;
                that.$refs[formName].validate((valid) => {
                    if (valid) {
                        that.add();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            addLabel: function () {
                this.$router.push({ path: '/home/worktable/addLabel' });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            add: function () {

            }
        }
	}
</script>

<style lang="scss">
    .add-project-section {
        height: 100%;
        background: #f5f5f5;
        .add-project-content {
            width: 1100px;
            height: 100%;
            min-height: 500px;
            margin: 0 auto;
            background: #fff;
            .box-title {
                height: 48px;
                line-height: 48px;
                padding-left: 15px;
                /*margin: 2px 0;*/
                color: #606266;
                /*border: 1px solid #e4e7ed;*/
                background-color: #f5f7fa;
            }
            .content {
                width: 90%;
                margin: 20px auto 0;
                padding: 10px;
                .item-split {
                    border-bottom: 1px solid #eee;
                    margin-bottom: 20px;
                    .item-title {
                        display: inline-block;
                        border-bottom: 2px solid #409eff;
                    }
                }
                .el-input .el-input__inner {
                    width: 50%!important;
                }
                .el-date-editor .el-input__inner {
                    width: 100%!important;
                    min-width: 300px;
                }
                .el-select .el-input__inner {
                    width: 100%!important;
                    min-width: 300px;
                }
                [class*=el-col-12] {
                    float: left;
                }
                .label-block {
                    width: 90%;
                    min-height: 100px;
                    margin: 0 auto 20px;
                    .label-title {
                        font-size: 13px;
                        border-top: 1px solid #ddd;
                        padding-top: 15px;
                    }
                    .el-tag {
                        display: inline-block;
                        margin: 10px 10px 2px 0;
                        .el-icon-close {

                        }
                    }
                }
            }
        }
    }
</style>
