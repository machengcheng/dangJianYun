
<template>
    <section class="ti-jiao-huo-dong-section">
        <h4 style="margin-top: 0">提交活动信息</h4>
        <hr/>
        <el-row style="margin-top: 20px">
            <el-table
                :data="tableData2"
                class="ti-jiao"
                stripe
                style="width: 100%">
                <el-table-column
                    label="活动时间"
                    prop="date"
                    width="170px"
                >
                </el-table-column>
                <el-table-column
                    label="活动内容"
                    prop="msg"
                >
                </el-table-column>
                <el-table-column
                    label="状态"
                >
                    <template slot-scope="scope">
                        <el-tag
                            type="success"
                            size="small"
                            v-if="scope.row.status === 0"
                            disable-transitions>已完成</el-tag>
                        <el-tag
                            type="danger"
                            size="small"
                            v-else-if="scope.row.status === 1"
                            disable-transitions>已预警</el-tag>
                        <el-tag
                            type="info"
                            size="small"
                            v-else-if="scope.row.status === 2"
                            disable-transitions>已超时</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200px"
                >
                    <template slot-scope="scope">
                        <el-button type="text" class="p0" @click="handleWarn(scope.row.msg)">提醒</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <h4 style="margin-top: 30px">已完成记录</h4>
        <hr/>
        <el-row style="margin-top: 20px">
            <el-table
                :data="tableData2"
                class="ti-jiao"
                stripe
                style="width: 100%">
                <el-table-column
                    label="活动时间"
                    prop="date"
                    width="170px"
                >
                </el-table-column>
                <el-table-column
                    label="活动内容"
                    prop="msg"
                >
                </el-table-column>
            </el-table>
        </el-row>
        <h4 style="margin-top: 30px">统计结果</h4>
        <hr/>
        <el-row class="qun-zhong-t-1 ac mt20" style="width: 100%;height: 385px;background: #FAFBFC;border:1px solid rgba(216,229,238,1);">
            表模板
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
                tableData2:[
                    {
                        msg:'***的内涵 ',
                        status:0,
                        date:'2018/7/22'},
                    {
                        msg:'***的内涵 ',
                        status:2,
                        date:'2018/7/22'},
                    {
                        msg:'***的内涵 ',
                        status:1,
                        date:'2018/7/22'},
                ]
            }
        },
        methods: {
            handleWarn(cb){
                this.$message({
                    "message":cb,
                    'type':'success'
                })
            }
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .ti-jiao-huo-dong-section{
        background: #fff;
        padding: 0 20px;
        .ti-jiao{
            thead tr th{padding: 8px 0;background: #F0F1F4}
        }
    }
</style>
