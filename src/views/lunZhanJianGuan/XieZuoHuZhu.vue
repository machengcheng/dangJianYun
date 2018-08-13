<template>
    <section class="xie-zuo-hu-zhu-section">
        <h4>协作互助</h4>
        <hr style="color: #979797"/>
        <el-row>
            <el-col class="xie-search clear1" :span="8">
                <el-input
                    placeholder="请输入内容"
                    size="small"
                    suffix-icon="el-icon-search"
                    v-model="searchVal">
                </el-input>
            </el-col>
        </el-row>
        <el-row class="xie-search clear1">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
        </el-row>
        <h4 class="mt20">组织架构</h4>
        <hr style="color: #979797"/>
        <el-col style="border:1px solid #ddd;height: 400px" class="mb20">

        </el-col>
    </section>
</template>

<script>
    import ElCol from "element-ui/packages/col/src/col";
    import ElRow from "element-ui/packages/row/src/row";

    export default {
        name: "",
        components: {
            ElRow,
            ElCol},
        data() {
            return {
                searchVal:'',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .xie-zuo-hu-zhu-section {
        background: #fff;
        padding: 0 20px;
        hr{
            margin-top:7px;
            *margin: 0;
            border: 0;
            color: #979797;
            background-color: #979797;
            height: 1px;
            opacity: 0.5;
        }
    }
</style>
