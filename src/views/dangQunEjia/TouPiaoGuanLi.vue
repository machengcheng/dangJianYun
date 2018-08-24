
<template>
    <section class="tou-piao-guan-li-section">
        <h4 style="margin-top: 0">投票管理</h4>
        <hr/>
        <el-row class="mt20">
            <el-table
                :data="tableData2"
                class="tou-piao"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="投票时间"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    prop="msg"
                    label="内容"
                >
                </el-table-column>
                <el-table-column
                    label="投票"
                    width="200px"
                >
                    <template slot-scope="scope">
                       <el-button type="text" class="p0"  v-if="scope.row.status === 0" @click="touPiao(scope.row.date)">投票</el-button>
                       <el-button type="text" class="p0"  v-if="scope.row.status === 1" disabled>已投</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <h4 style="margin-top: 0;margin-top: 30px">投票结果</h4>
        <hr/>
        <el-row class="mb20">
            <el-table
                :data="tableData2"
                class="tou-piao"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="投票时间"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    prop="msg"
                    label="内容"
                >
                </el-table-column>
                <el-table-column
                    label="投票"
                    width="200px"
                >
                    <template slot-scope="scope">
                        <el-button type="text" class="p0"  v-if="scope.row.status === 0">10</el-button>
                        <el-button type="text" class="p0"  v-if="scope.row.status === 1">14</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
                    {msg:'县城东村马占祥非法转卖耕地为宅基地获利近百万 ',status:0,date:'2018/7/22'},
                    {msg:'县城东村马占祥非法转卖耕地为宅基地获利近百万 ',status:1,date:'2018/7/22'},
                    {msg:'县城东村马占祥非法转卖耕地为宅基地获利近百万 ',status:0,date:'2018/7/22'},

                ]
            }
        },
        methods: {
            touPiao(cb){
                this.$message({
                    message: '投票',
                    type: 'success'
                })
            }
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .tou-piao-guan-li-section{
        background: #fff;
        padding: 0 20px;
        .tou-piao thead tr th{padding: 8px 0;background: #F0F1F4}

    }
</style>
