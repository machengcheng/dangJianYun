<template>
    <section class="gong-wen-xia-fa-section">
        <h4 class="mt20">公文下发</h4>
        <hr style="color: #979797"/>
        <el-row class="mt20">
            <el-table
                :data="tableData1"
                class="gong-wen-table"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="公文"
                >
                </el-table-column>
                <el-table-column
                    label="状态"
                >
                    <template slot-scope="scope">
                        {{scope.row.msg}}
                        <el-tag
                            type="success"
                            size="small"
                            v-if="scope.row.status === 0"
                            disable-transitions>已下发</el-tag>
                        <el-tag
                            type="info"
                            size="small"
                            v-else-if="scope.row.status === 1"
                            disable-transitions>未下发</el-tag>
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
                tableData1:[
                    {date:'县城东村马占祥非法转卖耕地为宅基地获利近百万 ',status:0},
                    {date:'县城东村马占祥非法转卖耕地为宅基地获利近百万 ',status:1},
                    {date:'县城东村马占祥非法转卖耕地为宅基地获利近百万 ',status:0},
                ],
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .gong-wen-xia-fa-section {
        background: #fff;
        padding: 0 20px;
        .gong-wen-table{
            thead tr th{padding: 8px 0;background: #F0F1F4}
        }
    }
</style>
