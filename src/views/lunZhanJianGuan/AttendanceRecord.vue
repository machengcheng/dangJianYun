<template>
    <section class="attendance-record-section">
        <div class="content">
            <div class="item-split">
                <span class="item-title">历史打卡记录</span>
            </div>
            <div class="recordMap">

            </div>
            <div class="applyOnline">
                <el-button type="primary" size="small">在线请假</el-button>
            </div>
            <div class="tableTemplate">

            </div>
            <el-collapse @change="handleChange">
                <el-collapse-item title="查看审批情况" name="1">
                    <div class="approval-block">
                        <el-row class="approval-item">
                            <el-col :span="8">
                                <span>村支部书记或村主任意见</span>
                            </el-col>
                            <el-col :span="8">
                                <span>
                                    <el-checkbox v-model="agree">同意</el-checkbox>
                                </span>
                                <span>报乡镇审批</span>
                            </el-col>
                            <el-col :span="8">
                                <el-checkbox v-model="disagree">不同意</el-checkbox>
                            </el-col>
                        </el-row>
                        <el-row class="approval-item">
                            <el-col :span="8">
                                <span>乡镇分管领导意见</span>
                            </el-col>
                            <el-col :span="8">
                                <span>
                                    <el-checkbox v-model="agree">同意</el-checkbox>
                                </span>
                                <span>报派出单位审批</span>
                            </el-col>
                            <el-col :span="8">
                                <el-checkbox v-model="disagree">不同意</el-checkbox>
                            </el-col>
                        </el-row>
                        <el-row class="approval-item">
                            <el-col :span="8">
                                <span>单位分管领导意见</span>
                            </el-col>
                            <el-col :span="8">
                                <span>
                                    <el-checkbox v-model="agree">同意</el-checkbox>
                                </span>
                                <span>报县区组织部审批</span>
                            </el-col>
                            <el-col :span="8">
                                <el-checkbox v-model="disagree">不同意</el-checkbox>
                            </el-col>
                        </el-row>
                        <el-row class="approval-item">
                            <el-col :span="8">
                                <span>县区组织部意见</span>
                            </el-col>
                            <el-col :span="8">
                                <span>
                                    <el-checkbox v-model="agree">同意</el-checkbox>
                                </span>
                                <span>报市委组织部审批</span>
                            </el-col>
                            <el-col :span="8">
                                <el-checkbox v-model="disagree">不同意</el-checkbox>
                            </el-col>
                        </el-row>
                        <el-row class="approval-item">
                            <el-col :span="8">
                                <span>市委组织部意见</span>
                            </el-col>
                            <el-col :span="8">
                                <span>
                                    <el-checkbox v-model="agree">同意</el-checkbox>
                                </span>
                                <span>报省委委组织部备案</span>
                            </el-col>
                            <el-col :span="8">
                                <el-checkbox v-model="disagree">不同意</el-checkbox>
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <div class="item-split">
                <span class="item-title">考勤统计</span>
            </div>
            <div id="chartAttendance" ref="chartAttendance" class="mt20 mb20 chartAttendance"></div>
        </div>
    </section>
</template>

<script>
    import echarts from 'echarts';
	export default {
		name: "attendance-record",
		components: {

        },
		data() {
			return {
                agree: true,
                disagree: false,
                chartAttendanceData: null
            }
		},
		methods: {
            handleChange(val) {
                console.log(val);
            },
            drawChartAttendanceUser() {
                this.chartAttendanceData = echarts.init(this.$refs.chartAttendance);
                this.chartAttendanceData.setOption({
                    title: {
                        text: '7月份考勤统计',
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
                        data: ['请假', '外出', '病假'],
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
                                    name: '请假',
                                    value: 235,
                                    //单个拐点标志的样式设置
                                    itemStyle: {
                                        fontSize: 12,
                                        color: '#DBECF7'   //图形的颜色
                                    }
                                },
                                {
                                    name: '外出',
                                    value: 80,
                                    //单个拐点标志的样式设置
                                    itemStyle: {
                                        color: '#3183BC'   //图形的颜色
                                    }
                                },
                                {
                                    name: '病假',
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
            let that = this;
            that.drawCharts();
        }
	}
</script>

<style lang="scss">
    .attendance-record-section {
        background: #fff;
        padding: 0 20px;
        .content {
            font-size: 13px;
            .item-split {
                border-bottom: 1px solid #eee;
                margin-bottom: 20px;
                .item-title {
                    display: inline-block;
                    border-bottom: 2px solid #409eff;
                }
            }
            .recordMap {
                height: 300px;
                background: #f5f5f5;
            }
            .applyOnline {
                margin: 10px 0;
            }
            .tableTemplate {
                height: 200px;
                background: #FAFBFC;
                border: 1px solid #D8E5ED;
            }
            .el-collapse-item__header {
                text-align: center!important;
            }
            .el-collapse-item__arrow {
                float: none!important;
            }
            .el-collapse-item__header, .el-collapse-item__wrap {
                border-bottom: 0!important;
            }
            .approval-block {
                background: #fff;
                .approval-item {
                    padding: 10px 15px;
                    margin: 5px 0;
                    border: 1px solid #D9E5ED;
                    background: #F6F8F9;
                }
            }
            .chartAttendance {
                width: 300px;
                height: 300px;
                border: 1px solid #D9E5ED;
                margin: 0 auto;
            }
        }
    }
</style>
