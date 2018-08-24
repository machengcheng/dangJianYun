
<template>
    <section class="zu-zhi-huo-dong-section">
        <h4 style="margin-top: 0">即将开始的活动</h4>
        <hr/>
        <el-row style="margin-top: 30px">
            <el-table
                :data="tableData2"
                class="zu-zhi-table"
                stripe
                style="width: 100%">
                <el-table-column
                    label="部门"
                    prop="deparment"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    label="记录"
                    prop="msg"
                >
                </el-table-column>
            </el-table>
        </el-row>
        <h4 style="margin-top: 50px">正在进行的组织活动列表</h4>
        <hr/>
        <el-row style="margin-top: 30px">
            <el-table
                :data="tableData2"
                class="zu-zhi-table"
                stripe
                style="width: 100%">
                <el-table-column
                    label="部门"
                    prop="deparment"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    label="记录"
                    prop="msg"
                >
                </el-table-column>
            </el-table>
        </el-row>
        <h4 style="margin-top: 50px">党员组织历史活动列表</h4>
        <hr/>
        <el-row style="margin-top: 30px">
            <el-table
                :data="tableData2"
                class="zu-zhi-table"
                stripe
                style="width: 100%">
                <el-table-column
                    label="部门"
                    prop="deparment"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    label="记录"
                    prop="msg"
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
                tableData2:[
                    {deparment:'行政部门 ',status:0,msg:'***的内涵'},
                    {deparment:'行政部门 ',status:0,msg:'***的内涵'},
                    {deparment:'行政部门 ',status:0,msg:'***的内涵'},
                ]
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .zu-zhi-huo-dong-section{
        background: #fff;
        padding: 0 20px;
        .zu-zhi-table{
            thead tr th{padding: 8px 0;background: #F0F1F4}
        }
    }
</style>
