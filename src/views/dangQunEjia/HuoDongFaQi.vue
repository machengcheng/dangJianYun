
<template>
    <section class="fa-qi-huo-dong-section">
        <h4 style="margin-top: 0">发起活动</h4>
        <hr/>
        <el-row style="margin-top: 30px">
            <el-table
                :data="tableData2"
                class="fa-qi-table"
                stripe
                style="width: 100%">
                <el-table-column
                    label="召开时间"
                    prop="date1"
                    width="170px"
                >
                </el-table-column>
                <el-table-column
                    label="召开地点"
                    prop="location"
                >
                </el-table-column>
                <el-table-column
                    label="主持人"
                    prop="usermain"
                >
                </el-table-column>
                <el-table-column
                    label="应到人数"
                    prop="num1"
                >
                </el-table-column>
                <el-table-column
                    label="实到人数"
                    prop="num2"
                >
                </el-table-column>
                <el-table-column
                    label="操作"
                >
                    <template slot-scope="scope">
                        <i class="el-icon-edit-outline icon" title="编辑" @click="handleEdit(scope.row.location)"></i>
                        <i class="el-icon-upload2 icon" title="上传" @click="upLoad(scope.row.location)"></i>
                        <el-button
                            type="text"
                            @click="handleOpen(scope.$index)">发起</el-button>
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
                        status:0,
                        msg:'***的内涵',
                        date1:'2018-12-15',
                        usermain:'李明',
                        num1:50,
                        num2:29,
                    },{
                        location:'六盘水党支部XX地点 ',
                        status:0,
                        msg:'***的内涵',
                        date1:'2018-12-15',
                        usermain:'李明',
                        num1:50,
                        num2:29,
                    },
                ]
            }
        },
        methods: {
            handleEdit(cb){
                this.$message({
                    'message':cb,
                    'type':"info"
                })
            },
            upLoad(cb){
                this.$message({
                    'message':cb,
                    'type':"info"
                })
            },
            handleOpen(cb){
                this.$message({
                    'message':cb,
                    'type':"info"
                })
            }
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .fa-qi-huo-dong-section{
        background: #fff;
        padding: 0 20px;
        .fa-qi-table{
            thead tr th{padding: 8px 0;background: #F0F1F4}
            .el-icon-edit-outline,.el-icon-upload2{font-size: 16px;cursor: pointer;margin-right: 5px}
        }
    }
</style>
