<template>
    <section class="ren-cai-su-qiu-section">
        <h4 style="margin-top: 0">人才诉求</h4>
        <hr style="color: #979797;margin-bottom: 30px" />
        <el-row>
            <el-form :model="formData" class="demo-form-inline">
                <el-input
                    type="textarea"
                    :rows="6"
                    placeholder="请输入你想说的话"
                    v-model="formData.question">
                </el-input>
                <el-form-item class="mt20 ar">
                    <el-button type="primary" style="width: 160px" @click="onSubmitFrom2">发送</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <h4 style="margin-top: 120px">人才诉求记录</h4>
        <hr style="color: #979797;margin-bottom: 30px" />
        <el-row>
            一个人才诉求记录....
        </el-row>
    </section>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
        name: "",
        components: {ElRow},
        data() {
            return {
                formData:{
                    question:'',
                },
            }
        },
        methods: {
            onSubmitFrom2(){
                if(this.formData.question===""){
                    this.$message({
                        message: '请输入您想提的问题',
                        type: 'warning'
                    });
                }else {
                    this.$message({
                        message: this.formData.question+"提交成功",
                        type: 'success'
                    });
                }
            },
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .ren-cai-su-qiu-section{
        background: #fff;
        padding: 0 20px;
    }
    hr{
        margin-top:7px;
        *margin: 0;
        border: 0;
        color: #979797;
        background-color: #979797;
        height: 1px;
        opacity: 0.5;
    }
</style>
