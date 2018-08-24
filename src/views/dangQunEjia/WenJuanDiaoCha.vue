
<template>
    <section class="wen-juan-diao-cha-section">
        <h4 style="margin-top: 0">问卷调查</h4>
        <hr/>
        <el-row class="mb20">
            <el-table
                :data="tableData2"
                class="wen-juan"
                stripe
                style="width: 100%">
                <el-table-column
                    label="问卷内容"
                >
                    <template slot-scope="scope">
                        {{scope.row.msg}}
                        <el-tag
                            type="success"
                            size="small"
                            v-if="scope.row.status === 0"
                            disable-transitions>已调查</el-tag>
                        <el-tag
                            type="info"
                            size="small"
                            v-else-if="scope.row.status === 1"
                            disable-transitions>未调查</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200px"
                >
                    <template slot-scope="scope">
                        <el-button type="text" class="p0" @click="showDetail(scope.row.msg)">查看详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <h4 style="margin-top: 0;margin-top: 30px">问卷结果</h4>
        <hr/>
        <el-row class="qun-zhong-t-1 ac mt15" style="width: 100%;height: 385px;background: #FAFBFC;border:1px solid rgba(216,229,238,1);">
            表模板
        </el-row>
    </section>
</template>


<script>
    export default {
        name: "",
        components: {},
        data() {
            return {
                tableData2:[
                    {msg:'***的内涵 ',status:0,date:'2018/7/22'},
                    {msg:'***的内涵 ',status:1,date:'2018/7/22'},
                    {msg:'***的内涵 ',status:0,date:'2018/7/22'},
                ]
            }
        },
        methods: {
            showDetail(cb){
                this.$message({
                    message: cb,
                    type: 'success'
                })
            }
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .wen-juan-diao-cha-section{
        background: #fff;
        padding: 0 20px;
        .wen-juan{
            thead tr th{padding: 8px 0;background: #F0F1F4}
            .el-tag{margin-left: 15px}
        }
    }
</style>
