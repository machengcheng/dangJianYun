<template>
    <section class="label-view-section">
        <div class="label-view-content">
            <el-row>
                <el-col :span="5" class="pt10">
                    <div class="tree-block">
                        <el-input
                            placeholder="请输入内容"
                            clearable
                            size="mini"
                            icon="el-icon-search"
                            class="search-input"
                        >
                        </el-input>
                        <div style="margin: 10px 0;text-align: center;">
                            <el-button size="mini">所有标签</el-button>
                            <el-button size="mini">我的收藏</el-button>
                        </div>
                        <el-tree
                            class="mt10"
                            ref="tree"
                            :data="newNodeList"
                            empty-text="节点为空"
                            default-expand-all
                            :current-node-key="0"
                            :highlight-current="true"
                            :expand-on-click-node="false"
                            :props="defaultProps"
                            :render-content="renderContent"
                            @node-click="nodeClick"
                        >
                        </el-tree>
                    </div>
                </el-col>
                <el-col :span="19" class="pt20">
                    <div class="label-detail">
                        <div class="content">
                            <div class="item-split">
                                <span class="item-title">基本信息</span>
                            </div>
                            <el-col :span="8" class="mb10">
                                <span>标签名称: 页面游戏偏好度</span>
                            </el-col>
                            <el-col :span="8" class="mb10">
                                <span>最新数据日期: 2018-08-08</span>
                            </el-col>
                            <el-col :span="8" class="mb10">
                                <span>覆盖客户量: 2018</span>
                            </el-col>
                            <el-col :span="8" class="mb10">
                                <span>营销次数: 218</span>
                            </el-col>
                            <el-col :span="16" class="mb10">
                                <span>自助查询次数: 18</span>
                            </el-col>
                            <el-col :span="24" class="mb10">
                                <span>数据定义/描述: </span>
                                <div style="width: 86%;position: relative;left: 100px;top: -20px;">
                                    利用固网DPI数据，分析家庭宽带用户上网产生的页面游戏类URL行为的天数、次数、流量情况,计算家庭宽带用户的页面游戏偏好度
                                </div>
                            </el-col>
                            <div class="item-split">
                                <span class="item-title">基础属性分析</span>
                            </div>
                            <el-col :span="24">
                                <el-select
                                    id="assets-select"
                                    v-model="searchDate"
                                    placeholder="请选择时间"
                                    @change="timeChange"
                                    size="small"
                                >
                                    <el-option
                                        v-for="item in searchDateList"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="24">
                                <div id="chartBaseAttrBar" ref="chartBaseAttrBar" class="chartBaseAttrBar"></div>
                            </el-col>
                            <el-col :span="8">
                                <div style="height: 180px;">
                                    <div id="chartPie" ref="chartPie" class="chartPie"></div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div style="height: 180px;">
                                    <div id="chartArea" ref="chartArea" class="chartArea"></div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div style="height: 180px;">
                                    <div id="chartLine" ref="chartLine" class="chartLine"></div>
                                </div>
                            </el-col>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
    import echarts from 'echarts';
	export default {
		name: "label-view",
		components: {

        },
		data() {
			return {
                chartBaseAttrBarData: null,
                chartPieData: null,
                chartAreaData: null,
                chartLineData: null,
                nodeList: [
                    {
                        "id": "2",
                        "key":"0:8:0",
                        "value":"手机上网偏好",
                        "parent":"8",
                        "assets_amount":2
                    },
                    {
                        "id": "0",
                        "key": "0",
                        "value": "社会特征",
                        "parent": "0",
                        "assets_amount": 2
                    },
                    {
                        "id": "1",
                        "key": "0:8:1",
                        "value": "流量使用偏好",
                        "parent": "8",
                        "assets_amount": 0
                    },
                    {
                        "id": "3",
                        "key": "0:8:3",
                        "value": "通话偏好",
                        "parent": "8",
                        "assets_amount": 0
                    },
                    {
                        "id": "4",
                        "key": "0:8:4",
                        "value": "用户生活轨迹",
                        "parent": "8",
                        "assets_amount": 0
                    },
                    {
                        "id": "5",
                        "key": "0:8:5",
                        "value": "社会分群",
                        "parent": "8",
                        "assets_amount": 0
                    },
                    {
                        "id": "6",
                        "key": "0:8:6",
                        "value": "终端偏好",
                        "parent": "8",
                        "assets_amount": 0
                    },
                    {
                        "id": "7",
                        "key": "0:8:7",
                        "value": "终端轨迹",
                        "parent": "8",
                        "assets_amount": 0
                    },
                    {
                        "id": "8",
                        "key": "0:8",
                        "value": "行为偏好",
                        "parent": "0",
                        "assets_amount": 0
                    },
                    {
                        "id": "9",
                        "key": "0:9",
                        "value": "生命周期",
                        "parent": "0",
                        "assets_amount": 21
                    },
                    {
                        "id": "10",
                        "key": "0:9",
                        "value": "特征分类",
                        "parent": "0",
                        "assets_amount": 12
                    },
                    {
                        "id": "11",
                        "key": "0:9",
                        "value": "位置偏好",
                        "parent": "0",
                        "assets_amount": 10
                    }
                ],
                newNodeList: [],
                currentNode: [],
                currentNodeId: '',
                defaultProps: {
                    id: 'id',
                    label: 'label',
                    key: 'key',
                    children: 'children',
                    parent: 'parent',
                    assets_amount: 'assets_amount'
                },
                resultNodes: [],
                searchDateList: [
                    {
                        value: '201802',
                        label: '2018年2月'
                    },
                    {
                        value: '201803',
                        label: '2018年3月'
                    },
                    {
                        value: '201804',
                        label: '2018年4月'
                    }
                ],
                searchDate: '201802'
            }
		},
		methods: {
            timeChange: function (val, e) {
                console.info(val);
            },
            nodeClick: function (nodeObj, node, obj) {
                let that = this;
                that.currentNode = nodeObj;
                that.currentNodeId = nodeObj.id;
            },
            renderContent(h, {node, data, store}) {
                let that = this;
                let nodeItem =
                    <span class="nodeItem">
                        <span>
                            <span class="button ico_docu"></span>
                            <span>{node.label}</span>
                        </span>
                    </span>;

                if (node.data.id === that.currentNode.id) {
                    nodeItem =
                        <span class="nodeItem">
                            <span class="curSelectedNode">
                                <span class="button ico_docu"></span>
                                <span>{node.label}</span>
                            </span>
                        </span>;
                }

                return nodeItem;

            },
            toTreeData: function (data, attributes) {
                let resData = data;
                let tree = [];

                for (let i = 0; i < resData.length; i++) {
                    if (resData[i].parent === attributes.rootId && resData[i].id !== attributes.rootId) {
                        let obj = {
                            id: resData[i][attributes.id],
                            label: resData[i][attributes.label],
                            parent: resData[i][attributes.parent],
                            key: resData[i][attributes.key],
                            assets_amount: resData[i][attributes.assets_amount],
                            children: []
                        };
                        tree.push(obj);
                        resData.splice(i, 1);
                        i--;
                    }
                }

                run(tree);

                function run(chiArr) {
                    if (resData.length !== 0) {
                        for (let i = 0; i < chiArr.length; i++) {
                            for (let j = 0; j < resData.length; j++) {
                                if (resData[j][attributes.parent] === chiArr[i].id) {
                                    let obj = {
                                        id: resData[j][attributes.id],
                                        label: resData[j][attributes.label],
                                        parent: resData[j][attributes.parent],
                                        key: resData[j][attributes.key],
                                        assets_amount: resData[j][attributes.assets_amount],
                                        children: []
                                    };
                                    chiArr[i].children.push(obj);
                                    resData.splice(j, 1);
                                    j--;
                                }
                            }
                            run(chiArr[i].children);
                        }
                    }
                }

                return tree;
            },
            getNodeList: function () {
                let that = this;
                if (that.nodeList.length > 0) {
                    // 属性配置信息
                    let attributes = {
                        id: 'id',
                        parent: 'parent',
                        key: 'key',
                        label: 'value',
                        assets_amount: 'assets_amount',
                        rootId: ''
                    };

                    that.nodeList.forEach(function (item) {
                        if (item.key === "0") {
                            attributes.rootId = item.id;
                        }
                    });

                    let datas = that.nodeList;

                    let tempData = that.nodeList.concat();

                    let treeData = that.toTreeData(datas, attributes);

                    tempData.forEach(function (item) {
                        if (item.key === "0") {
                            let obj = {
                                id: item.id,
                                label: item.value,
                                parent: item.parent,
                                key: item.key,
                                assets_amount: item.assets_amount,
                                children: []
                            };

                            that.currentNodeId = item.id;
                            that.currentNode = item;

                            if (treeData.length !== 0) {
                                obj.children = treeData;
                            }

                            that.newNodeList.push(obj);
                        }
                    });

                    console.info(JSON.stringify(that.newNodeList));

                    that.newNodeList = JSON.parse(JSON.stringify(that.newNodeList));
                }
            },
            drawChartBaseAttrBar() {
                this.chartBaseAttrBarData = echarts.init(this.$refs.chartBaseAttrBar);
                this.chartBaseAttrBarData.setOption({
                    color: ['#83A0B8'],
                    title : {
                        text: '上网时长分析',
                        x:'left',
                        left: '0%',
                        top: '5%',
                        textStyle: {
                            fontSize: 13
                        }
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                            splitLine:{show: false}, //去除网格线
                            splitArea : {show : false}, //保留网格区域
                            // axisLine: {
                            //     show: false,
                            //     symbol: 'none',
                            //     lineStyle: {
                            //         color: '#232425',
                            //         width: 4,
                            //         type: 'solid'
                            //     }
                            // },
                            axisTick: {
                                show: false,
                                inside: true,
                                lineStyle: {
                                    width: 4,
                                    color: '#232425'
                                }
                            },
                            axisLabel: {
                                show: true,
                                color: '#232425',
                                inside: false,
                                rotate: 0
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            splitLine:{show: false}, //去除网格线
                            splitArea : {show : false}, //保留网格区域
                            axisLine: {
                                show: false,
                                symbol: 'none',
                                lineStyle: {
                                    color: '#232425',
                                    width: 4,
                                    type: 'solid'
                                }
                            },
                            axisTick: {
                                show: false,
                                inside: true,
                                lineStyle: {
                                    width: 4,
                                    color: '#232425'
                                }
                            },
                            axisLabel: {
                                show: true,
                                color: '#232425',
                                inside: false,
                                rotate: 0
                            }
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '60%',
                            data:[10, 52, 200, 334, 390, 330, 220, 77, 129, 99]
                        }
                    ]
                });
            },
            drawChartPie() {
                this.chartPieData = echarts.init(this.$refs.chartPie);
                this.chartPieData.setOption({
                    color: ['#FCCE10','#E87C25','#27727B'],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    grid: {
                        show: false,
                        left: '10%',
                        right: '10%',
                        bottom: '-55%',
                        containLabel: true
                    },
                    calculable: true,
                    series: [
                        {
                            type:'pie',
                            radius: [0, 60],
                            center: ['55%', '60%'],
                            //roseType: 'area',
                            data: [
                                {
                                    value: 78,
                                    name: '城市'
                                },
                                {
                                    value: 269,
                                    name: '农村'
                                },
                                {
                                    value: 190,
                                    name: '县城'
                                }
                            ]
                        }
                    ]
                });
            },
            drawChartArea() {
                this.chartAreaData = echarts.init(this.$refs.chartArea);
                this.chartAreaData.setOption({
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1', '2', '3', '4', '5', '6', '7'],
                        splitLine:{show: false}, //去除网格线
                        splitArea : {show : false}, //保留网格区域
                        axisLine: {
                            show: true,
                            symbol: 'none',
                            lineStyle: {
                                color: '#232425',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false,
                            inside: true,
                            lineStyle: {
                                width: 4,
                                color: '#232425'
                            }
                        },
                        axisLabel: {
                            show: true,
                            color: '#232425',
                            inside: false,
                            rotate: 0
                        }
                    },
                    yAxis: {
                        type: 'value',
                        splitLine:{show: false}, //去除网格线
                        splitArea : {show : false}, //保留网格区域
                        axisLine: {
                            show: true,
                            symbol: 'none',
                            lineStyle: {
                                color: '#232425',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false,
                            inside: true,
                            lineStyle: {
                                width: 4,
                                color: '#232425'
                            }
                        },
                        axisLabel: {
                            show: true,
                            color: '#232425',
                            inside: false,
                            rotate: 0
                        }
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    }]
                });
            },
            drawChartLine() {
                this.chartLineData = echarts.init(this.$refs.chartLine);
                this.chartLineData.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
                        splitLine:{show: false}, //去除网格线
                        splitArea : {show : false}, //保留网格区域
                        axisLine: {
                            show: true,
                            symbol: 'none',
                            lineStyle: {
                                color: '#232425',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false,
                            inside: true,
                            lineStyle: {
                                width: 4,
                                color: '#232425'
                            }
                        },
                        axisLabel: {
                            show: true,
                            color: '#232425',
                            inside: false,
                            rotate: 0
                        }
                    },
                    yAxis: {
                        type: 'value',
                        splitLine:{show: false}, //去除网格线
                        splitArea : {show : false}, //保留网格区域
                        axisLine: {
                            show: true,
                            symbol: 'none',
                            lineStyle: {
                                color: '#232425',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false,
                            inside: true,
                            lineStyle: {
                                width: 4,
                                color: '#232425'
                            }
                        },
                        axisLabel: {
                            show: true,
                            color: '#232425',
                            inside: false,
                            rotate: 0
                        }
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                });
            },
            drawCharts() {
                this.drawChartBaseAttrBar();
                this.drawChartPie();
                this.drawChartArea();
                this.drawChartLine();
            }
        },
        mounted: function () {
            let that = this;
            that.getNodeList();
            that.drawCharts();
        }
	}
</script>

<style lang="scss">
    .label-view-section {
        /*height: 100%;*/
        background: #f5f5f5;
        .label-view-content {
            width: 1100px;
            /*height: 100%;*/
            min-height: 500px;
            margin: 0 auto;
            background: #fff;
            .tree-block {
                border-right: 1px solid #ddd;
                height: 100%;
                min-height: 500px;
                padding: 15px;
                position: relative;
            }
            .label-detail {
                width: 96%;
                margin: 0 auto;
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
                    .el-input .el-input__inner {
                        width: 50%!important;
                    }
                    .el-date-editor .el-input__inner {
                        width: 100%!important;
                        min-width: 300px;
                    }
                    .el-select .el-input__inner {
                        width: 70%!important;
                        min-width: 200px;
                    }
                    [class*=el-col-12] {
                        float: left;
                    }
                    .chartBaseAttrBar {
                        width: 100%;
                        height: 300px;
                    }
                    .chartPie {
                        height: 180px;
                    }
                    .chartArea,
                    .chartLine {
                        height: 180px;
                    }
                }
            }
        }
        .nodeItem {
            width: 100%;
            font-size: 13px;
            font-weight: 400;
        }
        .nodeItem:hover .nodeOpt {
            display: inline-block!important;
        }
        .curSelectedNode {
            color: #409eff;
            font-weight: bold;
        }
        .nodeOpt {
            display: none!important;
            margin-left: 10px;
        }
        //css代码
        .el-tree-node__expand-icon {
            border:0;
            padding: 0;
            /*background: url("../../assets/imgs/node.png") no-repeat;*/
            /*自定义，必要时用!important*/
        }
        .el-tree-node__expand-icon.expanded {
            /*cursor: pointer;*/
            /*自定义，必要时用!important*/
        }
        .el-tree-node__expand-icon.is-leaf {
            /*cursor: pointer;*/
            /*自定义，必要时用!important*/
        }
        span.button {
            line-height: 0;
            margin: -4px 2px 0 0;
            padding: 0;
            width: 20px;
            height: 20px;
            display: inline-block;
            vertical-align: top;
            border: 0 solid;
            cursor: pointer;
            outline: none;
            background-repeat: no-repeat;
            background-image: url("../../assets/imgs/node.png");
            background-attachment: scroll;
        }
        span.button.ico_docu::before {
            background: url("../../assets/imgs/node.png") no-repeat;
            padding-top: 9px;
            padding-left: 0;
            display: inline-block;
        }
    }
</style>
