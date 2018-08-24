<template>
    <section class="zai-xian-da-yi-section">
        <h4 style="margin-top: 0">在线答疑</h4>
        <hr/>
        <el-row class="da-yi-t mt20">
            <el-col :span="20" :offset="2">
                <el-row>
                    <el-col :span="4" class="ac">
                        <img style="width: 50px" class="help-girl"  src="../../assets/imgs/helpGirl.png"/>
                    </el-col>
                    <el-col :span="20">
                        <div class="da-yi-t-help">
                            <el-card class="box-card">
                                您好，我是在线小助手，请选择以下类别
                                <ul class="box-card-inner mt20">
                                    <li><el-button type="text">xxx法律</el-button></li>
                                    <li><el-button type="text">xxx农机</el-button></li>
                                    <li><el-button type="text">xxx民生</el-button></li>
                                    <li><el-button type="text">xxx政治</el-button></li>
                                    <li><el-button type="text">xxx科技</el-button></li>
                                </ul>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
                <p style="color: #4887D0;margin-top: 80px">没有满意的答案 ？在下方提交问题</p>
                <el-row class="qun-zhong-t-1 ac mt15" style="width: 100%;height: 300px;background: #FAFBFC;border:1px solid rgba(216,229,238,1);">
                    表模板
                </el-row>
            </el-col>
        </el-row>
        <h4 style="margin-top: 50px">提交记录</h4>
        <hr/>
        <el-row class="mt20 da-yi-b">
            <el-table
                :data="tableData2"
                class="dang-yuan-table"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="记录时间"
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
    import ElCol from "element-ui/packages/col/src/col";

    export default {
        name: "",
        components: {
            ElCol,
            ElRow},
        data() {
            return {
                tableData2:[
                    {msg:'xxxx记录 ',status:0,date:'2018/7/22',name:'李霞'},
                    {msg:'xxxx记录 ',status:1,date:'2018/7/22',name:'李霞'},
                    {msg:'xxxx记录 ',status:0,date:'2018/7/22',name:'李霞'},
                ]
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .zai-xian-da-yi-section{
        background: #fff;
        padding: 0 20px;
        .da-yi-t{
            .da-yi-t-help{
                margin-top: 35px;
                .box-card{
                    min-height: 250px;
                    .el-button{padding: 5px}
                }
            }
        }
        .da-yi-b{
            thead tr th{padding: 8px 0;background: #F0F1F4}
        }
    }
</style>
