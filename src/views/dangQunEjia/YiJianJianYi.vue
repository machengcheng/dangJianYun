
<template>
    <section class="yi-jian-jian-yi-section">
        <h4 style="margin-top: 0">意见建议</h4>
        <hr/>
        <el-row class="yi-jian-t-1 ac mt15" style="width: 100%;height: 385px;background: #FAFBFC;border:1px solid rgba(216,229,238,1);">
            表模板
        </el-row>
        <el-row class="yi-jian-t-2">
            <span>编号：94938-489686-595</span>
            <span>唯一编号可用于查询需求办理情况</span>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-input
                    placeholder="搜索编号或个人身份证"
                    size="small"
                    v-model="input23">
                    <i slot="prefix" style="cursor: pointer" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-col>
        </el-row>
        <el-row class="yi-jian-c ac mt15" style="width: 100%;height: 385px;background: #FAFBFC;border:1px solid rgba(216,229,238,1);">
            表模板
        </el-row>
        <h4 style="margin-top: 0;margin-top: 30px">意见建议列表</h4>
        <hr/>
        <el-row class="mt15">
            <el-table
                :data="tableData"
                class="yi-jian-b"
                border
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="已领取的需求"
                >

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
                input23:'',
                tableData:[
                    {date:'县城东村马占祥非法转卖耕地为宅基地获利近百万 '},
                    {date:'县城东村马占祥非法转卖耕地为宅基地获利近百万 '},
                    {date:'县城东村马占祥非法转卖耕地为宅基地获利近百万 '},
                ],
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .yi-jian-jian-yi-section{
        background: #fff;
        padding: 0 20px;
        .yi-jian-t-2{
            height: 30px;
            line-height: 30px;
            width: 100%;
            background: #FAFBFC;
            border:1px solid rgba(216,229,238,1);
            padding: 0 21px;
            span:nth-child(1){float: left;color: #4887D0}
            span:nth-child(2){float: right;color: #E30000}
            margin: 20px 0 30px 0;
        }
        .yi-jian-b thead tr th{padding: 8px 0;background: #F0F1F4}
    }
</style>
