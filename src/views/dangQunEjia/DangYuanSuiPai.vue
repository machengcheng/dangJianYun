
<template>
    <section class="dang-yuan-sui-pai-section">
        <h4 style="margin-top: 0">党员随手拍</h4>
        <hr/>
        <el-row class="dang-yuan-publish">
            <p>消息发布</p>
            <el-form :model="form2" class="demo-form-inline">
                <el-input
                    type="textarea"
                    :rows="6"
                    placeholder="请输入你想说的话"
                    v-model="form2.question">
                </el-input>
                <el-form-item class="mt15 clear1">
                    <el-button type="text" class="fl p5 al">上传照片</el-button>
                    <el-button type="primary" class="fr" size="small" @click="onSubmitFrom2">发送</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <h4 style="margin-top: 0">党员随手拍记录</h4>
        <hr/>
        <el-row class="mt20">
            <el-table
                :data="tableData2"
                class="dang-yuan-table"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="纪录时间"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    prop="msg"
                    label="内容"
                >
                </el-table-column>
            </el-table>
        </el-row>
        <h4 style="margin-top: 30px">发布党员随手拍</h4>
        <hr/>
        <el-row class="mt20">
            <el-table
                :data="tableData2"
                class="dang-yuan-table"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="发布时间"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    prop="msg"
                    label="内容"
                >
                </el-table-column>
            </el-table>
        </el-row>
    </section>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        name: "",
        components: {
            ElButton,
            ElRow},
        data() {
            return {
                form2:{
                    question:'',
                },
                tableData2:[
                    {msg:'xxxx记录 ',status:0,date:'2018/7/22',name:'李霞'},
                    {msg:'xxxx记录 ',status:1,date:'2018/7/22',name:'李霞'},
                    {msg:'xxxx记录 ',status:0,date:'2018/7/22',name:'李霞'},
                ]
            }
        },
        methods: {
            onSubmitFrom2(){
                this.$message({
                    message: '发送成功',
                    type: 'success'
                })
            }
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .dang-yuan-sui-pai-section{
        background: #fff;
        padding: 0 20px;
        .dang-yuan-publish{
            .el-button{width: 120px}
        }
        .dang-yuan-table{
            thead tr th{padding: 8px 0;background: #F0F1F4}
        }
    }
</style>
