<template>
    <section class="bao-biao-jie-shou-section">
        <h4 class="mt20">报表接收</h4>
        <hr style="color: #979797"/>
        <el-row style="margin-top: 30px">
            <el-table
                :data="tableData2"
                class="bao-biao-table"
                stripe
                style="width: 100%">
                <el-table-column
                    label="报表"
                    prop="date1"
                    width="170px"
                >
                </el-table-column>
                <el-table-column
                    label="操作"
                >
                    <template slot-scope="scope">
                        <el-button type="text">电子签章</el-button>
                        <el-button type="text">转发报表</el-button>
                        <el-button type="text">下发报表</el-button>
                        <el-button type="text">发布公文</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
                    {
                        location:'六盘水党支部XX地点 ',
                        status:0,
                        msg:'***的内涵',
                        date1:'2018-12-15',
                        usermain:'李明',
                        num1:50,
                        num2:29,
                    },
                    {
                        location:'六盘水党支部XX地点 ',
                        status:1,
                        msg:'***的内涵',
                        date1:'2018-12-15',
                        usermain:'李明',
                        num1:50,
                        num2:29,
                    },{
                        location:'六盘水党支部XX地点 ',
                        status:2,
                        msg:'***的内涵',
                        date1:'2018-12-15',
                        usermain:'李明',
                        num1:50,
                        num2:29,
                    },
                ]
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .bao-biao-jie-shou-section {
        background: #fff;
        padding: 0 20px;
        .bao-biao-table{
            thead tr th{padding: 8px 0;background: #F0F1F4}
            .el-button{padding: 0;margin-right: 30px}
        }
    }
</style>
