<template>
    <section class="xia-fa-gong-wen-section">
        <h4 class="mt20">最新任务</h4>
        <hr style="color: #979797"/>
        <el-row style="margin-top: 30px">
            <el-table
                :data="tableData2"
                class="xia-fa-table"
                stripe
                style="width: 100%">
                <el-table-column
                    label="任务"
                    prop="date1"
                    width="170px"
                >
                </el-table-column>
                <el-table-column
                    label="操作"
                >
                    <template slot-scope="scope">
                        <i class="el-icon-edit-outline icon" title="编辑" @click="handleEdit(scope.row.location)"></i>
                        <i class="el-icon-upload2 icon" title="上传" @click="upLoad(scope.row.location)"></i>
                        <el-button type="text">下发组织</el-button>
                        <el-button type="text">发布公文</el-button>
                        <!--<el-progress :percentage="70" v-if="isUpLoad"></el-progress>-->
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </section>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import echarts from 'echarts';
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        name: "",
        components: {
            ElButton,
            ElRow},
        data() {
            return {
                isUpLoad:false,
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
        methods: {
            handleEdit(cb){
                alert(cb)
            },
            upLoad(cb){
                this.isUpLoad=true
            },
        },
        mounted: function () {
        }
    }
</script>

<style lang="scss">
    .xia-fa-gong-wen-section {
        background: #fff;
        padding: 0 20px;
        .xia-fa-table{
            thead tr th{padding: 8px 0;background: #F0F1F4}
            .el-icon-edit-outline,.el-icon-upload2{font-size: 16px;cursor: pointer;margin-right: 30px}
        }
    }
</style>
