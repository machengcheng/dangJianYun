<template>
    <section class="gong-zuo-diao-du-section">
        <h4 class="mt20">最新任务</h4>
        <hr style="color: #979797"/>
        <el-row style="margin-top: 30px">
            <el-table
                :data="tableData2"
                class="diao-du-table"
                stripe
                style="width: 100%">
                <el-table-column
                    label="任务"
                    prop="date1"
                    width="170px"
                >
                </el-table-column>
                <el-table-column
                    label="任务状态"
                >
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            v-if="scope.row.status === 0"
                            style="color: #F5A623"
                            >进行中</el-button>
                        <el-button
                            type="text"
                            v-else-if="scope.row.status === 1"
                            style="color: #16A1A7"
                            >完成</el-button>
                        <el-button
                            type="text"
                            v-else-if="scope.row.status === 2"
                            style="color: #86939E"
                            >未开始</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    label="情况说明"
                    prop="usermain"
                >
                </el-table-column>
                <el-table-column
                    label="应到人数"
                    prop="num1"
                >
                </el-table-column>
                <el-table-column
                    label="操作"
                >
                    <template slot-scope="scope">
                        <i class="el-icon-edit-outline icon" title="编辑" @click="handleEdit(scope.row.location)"></i>
                        <i class="el-icon-upload2 icon" title="上传" v-if="!isUpLoad" @click="upLoad(scope.row.location)"></i>
                        <el-progress :percentage="70" v-if="isUpLoad"></el-progress>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <h4 class="mt20">任务统计</h4>
        <hr style="color: #979797"/>
        <el-row>
            <div id="chartAttendance" ref="chartAttendance" class="mt20 mb20 chartAttendance"></div>
        </el-row>
        <h4 class="mt20">下发任务完成情况统计</h4>
        <hr style="color: #979797"/>
        <el-row class="mt20">
            <el-table
                :data="tableData2"
                class="diao-du-table"
                stripe
                style="width: 100%">
                <el-table-column
                    type="index"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="usermain"
                    label="姓名"
                    width="80px"
                >
                </el-table-column>
                <el-table-column
                    prop="msg"
                    label="所属党组织"
                    width="150px"
                >
                </el-table-column>
                <el-table-column
                    prop="date1"
                    label="时间段"
                >
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="任务类型"
                >
                </el-table-column>
                <el-table-column
                    prop="num1"
                    label="已完成总数"
                >
                </el-table-column>
                <el-table-column
                    prop="num2"
                    label="进行中总数"
                >
                </el-table-column>
                <el-table-column
                    prop="num1"
                    label="未完成总数"
                >
                </el-table-column>
            </el-table>
        </el-row>
        <h4 class="mt20">下发任务历史列表</h4>
        <hr style="color: #979797"/>
        <el-row style="margin-top: 30px">
            <el-table
                :data="tableData2"
                class="diao-du-table"
                stripe
                style="width: 100%">
                <el-table-column
                    label="任务"
                    prop="msg"
                    width="170px"
                >
                </el-table-column>
                <el-table-column
                    label="任务状态"
                >
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            v-if="scope.row.status === 0"
                            style="color: #F5A623"
                        >进行中</el-button>
                        <el-button
                            type="text"
                            v-else-if="scope.row.status === 1"
                            style="color: #16A1A7"
                        >完成</el-button>
                        <el-button
                            type="text"
                            v-else-if="scope.row.status === 2"
                            style="color: #86939E"
                        >未开始</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                >
                    <template slot-scope="scope">
                        <i class="el-icon-edit-outline icon" title="编辑" @click="handleEdit1(scope.row.location)"></i>
                        <el-button
                            type="text"
                            @click="handleOpen1(scope.$index)">发布</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </section>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import echarts from 'echarts';

    export default {
        name: "",
        components: {ElRow},
        data() {
            return {
                isUpLoad:false,
                chartAttendanceData: null,
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
            handleEdit1(cb){
                alert(cb)
            },
            handleOpen1(cb){
                alert(cb)
            },
            drawChartAttendanceUser() {
                this.chartAttendanceData = echarts.init(this.$refs.chartAttendance);
                this.chartAttendanceData.setOption({
                    title: {
                        text: '7月份任务统计',
                        top: '2%',
                        left: '1%',
                        textStyle: {
                            fontSize: 13
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}: {c} ({d}%)"
                    },
                    legend: {
                        data: ['未开始', '完成', '进行中'],
                        selectedMode: false,  //图例选择的模式(是否可以点击)
                        top: '10%',
                        x: 'center',
                        icon: 'circle',
                        itemWidth: 10,
                        itemHeight: 10,
                        itemGap: 50,
                        borderRadius: [4, 4, 0, 0],
                        textStyle: {
                            fontSize: 10
                        }
                    },
                    grid: {
                        left: '1%',
                        right: '2%',
                        top: '3%',
                        containLabel: true //grid 区域是否包含坐标轴的刻度标签
                    },
                    series: [
                        {
                            type:'pie',
                            radius: ['30%', '50%'],
                            avoidLabelOverlap: false,
                            hoverOffset: 2,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: 14,
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {
                                    name: '未开始',
                                    value: 235,
                                    //单个拐点标志的样式设置
                                    itemStyle: {
                                        fontSize: 12,
                                        color: '#DBECF7'   //图形的颜色
                                    }
                                },
                                {
                                    name: '完成',
                                    value: 80,
                                    //单个拐点标志的样式设置
                                    itemStyle: {
                                        color: '#3183BC'   //图形的颜色
                                    }
                                },
                                {
                                    name: '进行中',
                                    value: 26,
                                    //单个拐点标志的样式设置
                                    itemStyle: {
                                        color: '#7ADDF9'   //图形的颜色
                                    }
                                }
                            ]
                        }
                    ]
                });
            },
            drawCharts() {
                this.drawChartAttendanceUser();
            }
        },
        mounted: function () {
            this.drawCharts()
        }
    }
</script>

<style lang="scss">
.gong-zuo-diao-du-section {
    background: #fff;
    padding: 0 20px;
    .diao-du-table{
        thead tr th{padding: 8px 0;background: #F0F1F4}
        .el-icon-edit-outline,.el-icon-upload2{font-size: 16px;cursor: pointer;margin-right: 5px}
    }
    #chartAttendance{
        width: 300px;
        height: 300px;
        border: 1px solid #D9E5ED;
        margin: 0 auto;
    }
}
</style>
