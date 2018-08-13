<template>
    <section class="accept-task-section">
        <div class="content">
            <div class="item-split">
                <span class="item-title">最新任务</span>
                <el-button type="primary" size="mini" class="fr">接收任务</el-button>
            </div>
            <div class="box-content">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    v-loading="isLoading"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column
                        prop="task"
                        label="任务"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="taskStatus"
                        label="任务状态"
                        width="80"
                    >
                        <template slot-scope="scope">
                            <el-tag
                                v-if="scope.row.taskStatus === 0"
                                disable-transitions
                                >
                                未开始
                            </el-tag>
                            <el-tag
                                v-if="scope.row.taskStatus === 1"
                                disable-transitions
                            >
                                进行中
                            </el-tag>
                            <el-tag
                                v-if="scope.row.taskStatus === 2"
                                disable-transitions
                            >
                                完成
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="situation"
                        label="情况说明"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="130"
                        align="center"
                        >
                        <template slot-scope="scope">
                            <el-button
                                type="text"
                                size="medium"
                                icon="el-icon-edit-outline"
                                >
                            </el-button>
                            <el-button
                                type="text"
                                size="medium"
                                icon="el-icon-upload2"
                            >
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="clear"></div>
            </div>
            <div class="item-split mt15">
                <span class="item-title">任务统计</span>
            </div>
            <div id="chartTask" ref="chartTask" class="mt20 mb20 chartTask"></div>
            <div class="item-split">
                <span class="item-title">历史完成任务</span>
            </div>
            <div class="box-content">
                <el-table
                    ref="multipleTable"
                    :data="tableData1"
                    tooltip-effect="dark"
                    v-loading="isLoading"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column
                        prop="task"
                        label="任务"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="taskStatus"
                        label="任务状态"
                        width="80"
                    >
                        <template slot-scope="scope">
                            <el-tag
                                v-if="scope.row.taskStatus === 0"
                                disable-transitions
                            >
                                未开始
                            </el-tag>
                            <el-tag
                                v-if="scope.row.taskStatus === 1"
                                disable-transitions
                            >
                                进行中
                            </el-tag>
                            <el-tag
                                v-if="scope.row.taskStatus === 2"
                                disable-transitions
                            >
                                完成
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="任务下发权限"
                        width="130"
                        align="center"
                    >
                        <template slot-scope="scope">
                            <el-button
                                type="text"
                                size="medium"
                            >
                                下发任务
                            </el-button>
                            <el-button
                                type="text"
                                size="medium"
                            >
                                撤回
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="clear"></div>
            </div>
            <div class="item-split mt20">
                <span class="item-title">下发任务完成情况统计</span>
            </div>
            <div class="box-content">
                <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    v-loading="isLoading"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column
                        prop="num"
                        label="序号"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="organization"
                        label="所属党组织"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="period"
                        label="时间段"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="taskType"
                        label="任务类型"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="finishedNum"
                        label="已完成总数"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="taskingNum"
                        label="进行中总数"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="unfinishedNum"
                        label="未完成总数"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                </el-table>
                <div class="clear"></div>
            </div>
            <div class="item-split mt20">
                <span class="item-title">下发任务历史列表</span>
            </div>
            <div class="box-content">
                <el-table
                    ref="multipleTable"
                    :data="tableData4"
                    tooltip-effect="dark"
                    v-loading="isLoading"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column
                        prop="task"
                        label="任务"
                        show-overflow-tooltips
                    >
                    </el-table-column>
                    <el-table-column
                        prop="taskStatus"
                        label="任务状态"
                        width="80"
                    >
                        <template slot-scope="scope">
                            <el-tag
                                v-if="scope.row.taskStatus === 0"
                                disable-transitions
                            >
                                未开始
                            </el-tag>
                            <el-tag
                                v-if="scope.row.taskStatus === 1"
                                disable-transitions
                            >
                                进行中
                            </el-tag>
                            <el-tag
                                v-if="scope.row.taskStatus === 2"
                                disable-transitions
                            >
                                完成
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="任务下发权限"
                        width="130"
                        align="center"
                    >
                        <template slot-scope="scope">
                            <el-button
                                type="text"
                                size="medium"
                                icon="el-icon-edit-outline"
                            >
                            </el-button>
                            <el-button
                                type="text"
                                size="medium"
                            >
                                撤回
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="clear"></div>
            </div>
        </div>
    </section>
</template>

<script>
    import echarts from 'echarts';
	export default {
		name: "accept-task",
		components: {

        },
		data() {
			return {
                isLoading: false,
                tableData: [
                    {
                        task: '县城东村马占祥非法转卖耕地为宅基地获利近百万',
                        taskStatus: 1,
                        situation: '县城东村马占祥非法转卖耕地为宅基地正在进行中'
                    },
                    {
                        task: '县城东村马占祥非法转卖耕地为宅基地获利近百万',
                        taskStatus: 2,
                        situation: '县城东村马占祥非法转卖耕地为宅基地正在进行中'
                    },
                    {
                        task: '县城东村马占祥非法转卖耕地为宅基地获利近百万',
                        taskStatus: 0,
                        situation: '县城东村马占祥非法转卖耕地为宅基地正在进行中'
                    }
                ],
                tableData1: [
                    {
                        task: '县城东村马占祥非法转卖耕地为宅基地获利近百万',
                        taskStatus: 1
                    },
                    {
                        task: '县城东村马占祥非法转卖耕地为宅基地获利近百万',
                        taskStatus: 2
                    },
                    {
                        task: '县城东村马占祥非法转卖耕地为宅基地获利近百万',
                        taskStatus: 0
                    }
                ],
                tableData3: [
                    {
                        num: 1,
                        name: '张三',
                        organization: '六枝特区月亮河乡大坝村党支部',
                        period: '2017年01月01日/2017年12月31日',
                        taskType: '1',
                        finishedNum: 20,
                        taskingNum: 2,
                        unfinishedNum: 4
                    },
                    {
                        num: 2,
                        name: '刘三',
                        organization: '六枝特区月亮河乡大坝村党支部',
                        period: '2017年01月01日/2017年12月31日',
                        taskType: '1',
                        finishedNum: 20,
                        taskingNum: 2,
                        unfinishedNum: 4
                    }
                ],
                tableData4: [
                    {
                        task: '县城东村马占祥非法转卖耕地为宅基地获利近百万',
                        taskStatus: 1
                    },
                    {
                        task: '县城东村马占祥非法转卖耕地为宅基地获利近百万',
                        taskStatus: 2
                    },
                    {
                        task: '县城东村马占祥非法转卖耕地为宅基地获利近百万',
                        taskStatus: 0
                    }
                ],
                multipleSelection: [],
                chartTaskData: null
            }
		},
		methods: {
            handleSelectionChange: function (val) {
                this.multipleSelection = val;
            },
            drawChartTask: function() {
                this.chartTaskData = echarts.init(this.$refs.chartTask);
                this.chartTaskData.setOption({
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
                this.drawChartTask();
            }
        },
        mounted: function () {
            let that = this;
            that.drawCharts();
        }
	}
</script>

<style lang="scss">
    .accept-task-section {
        background: #fff;
        padding: 0 20px;
        .box-content {
            padding: 0;
            .el-table th {
                background: #f5f5f5!important;
            }
            .el-table tr td:last-of-type {
                border-left: 1px solid #ebeef5;
            }
            .el-table tr td:last-of-type {
                border-right: 1px solid #ebeef5;
            }
        }
        .content {
            font-size: 13px;
            .item-split {
                padding-bottom: 10px;
                border-bottom: 1px solid #eee;
                margin-bottom: 20px;
                .item-title {
                    display: inline-block;
                    border-bottom: 2px solid #409eff;
                }
            }
        }
        .chartTask {
            width: 300px;
            height: 300px;
            border: 1px solid #D9E5ED;
            margin: 0 auto;
        }
    }
</style>
