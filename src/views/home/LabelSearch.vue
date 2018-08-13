<template>
    <section class="label-search-section">
        <div class="label-search-content">
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
                <el-col :span="3" class="pt20">
                    <div class="condition-block" @dragover="dragover" @drop="drop">
                        <div class="title">添加筛选条件</div>
                        <el-tag
                            v-if="resultNodes.length > 0"
                            :key="tag.label"
                            v-for="tag in resultNodes"
                            closable
                            :disable-transitions="false"
                            @close="handleClose(tag)">
                            {{tag.label}}
                        </el-tag>
                        <div class="condition-empty-text" v-if="resultNodes.length <= 0">标签拖到此处添加</div>
                    </div>
                </el-col>
                <el-col :span="16" class="pt20">
                    <div class="list-block">
                        <div class="list-title">筛选结果</div>
                        <div class="list-data">
                            <div v-for="city in cities" class="list-cycle">
                                <div class="result-item">
                                    <el-checkbox :label="city" :key="city">{{city}}</el-checkbox>
                                    <el-tag class="item-tag">{{city}}</el-tag>
                                    <div class="evaluate-result">
                                        <div class="goodEvaluate">
                                            <span>好评度: </span>
                                            <el-slider v-model="goodEvaluate" disabled></el-slider>
                                            <span class="percentNum">{{goodEvaluate}}%</span>
                                        </div>
                                        <div class="relate">
                                            <span>关联度: </span>
                                            <el-slider v-model="relateEvaluate" disabled></el-slider>
                                            <span class="percentNum">{{relateEvaluate}}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="operation-block">
                            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        </div>
                        <div style="text-align: center;">
                            <el-button size="mini">添加到收藏夹</el-button>
                            <el-button size="mini" @click="createProject">创建项目</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
    const cityOptions = ['上海', '北京', '广州', '深圳', '西安'];
    export default {
        name: "label-search",
        components: {

        },
        data() {
            return {
                checkAll: false,
                checkedCities: ['上海', '北京'],
                cities: cityOptions,
                isIndeterminate: true,
                isUnique: true,
                goodEvaluate: 70,
                relateEvaluate: 55,
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
                resultNodes: []
            }
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            dragstart: function (node, data, e) {
                console.info('======dragstart');
                let that = this;
                console.info(node);
                let tempCount = 0;
                if (node.childNodes.length === 0 && node.isLeaf) {
                    tempCount = 1;
                }
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("node", data.id + ":" + data.label + ":" + tempCount);
            },
            dragover: function (e) {
                e.preventDefault();
                console.info('dragover');
            },
            drop: function (e) {
                let that = this;
                e.preventDefault();
                let data = e.dataTransfer.getData("node");
                let id = parseInt(data.split(':')[0]);
                let label = data.split(':')[1];
                let count = data.split(':')[2];
                let tempData = {};
                if (count != 1) {
                    this.$message({
                        type: 'warning',
                        message: '不能拖动该节点',
                        duration: 1500
                    });
                    return;
                }
                for (let i = 0; i < that.resultNodes.length; i++) {
                    let tempId = parseInt(that.resultNodes[i].id);
                    if (id === tempId) {
                        this.$message({
                            type: 'warning',
                            message: '不能重复拖动节点',
                            duration: 1500
                        });
                        return;
                    }
                }
                tempData.id = id;
                tempData.label = label;
                console.info('drop00');
                console.info(tempData);
                console.info('drop11');
                that.resultNodes.push(tempData);
            },
            handleClose(tag) {
                this.resultNodes.splice(this.resultNodes.indexOf(tag), 1);
            },
            nodeClick: function (nodeObj, node, obj) {
                let that = this;
                that.currentNode = nodeObj;
                that.currentNodeId = nodeObj.id;
            },
            renderContent(h, {node, data, store}) {
                let that = this;
                let nodeItem =
                    <span draggable class="nodeItem" on-dragstart={ (e) => that.dragstart(node, data, e) }>
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
            createProject: function () {
                this.$router.push({ path: '/home/worktable/addProject' });
            }
        },
        mounted: function () {
            let that = this;
            that.getNodeList();
        }
    }
</script>

<style lang="scss">
    .label-search-section {
        height: 100%;
        background: #f5f5f5;
        .label-search-content {
            width: 1100px;
            height: 100%;
            min-height: 500px;
            margin: 0 auto;
            background: #fff;
            .tree-block {
                padding: 0 10px;
                .search-input {
                    width: 90%;
                    display: block;
                    margin: 0 auto;
                }
            }
            .tree-block,
            .condition-block,
            .list-block {
                height: 100%;
                min-height: 500px;
                padding: 15px;
                position: relative;
                .list-title {
                    font-size: 13px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #ddd;
                }
                .operation-block {
                    position: absolute;
                    bottom: 80px;
                    left: 20px;
                }
                .list-data {
                    min-height: 400px;
                    .list-cycle {
                        padding: 5px;
                        .result-item {
                            height: 60px;
                            line-height: 60px;
                            border-bottom: 1px solid #ddd;
                            position: relative;
                            .item-tag {
                                margin-left: 50px;
                            }
                            .evaluate-result {
                                line-height: 0;
                                font-size: 13px;
                                display: inline-block;
                                position: absolute;
                                left: 200px;
                                .goodEvaluate, .relate {
                                    display: inline-block;
                                    height: 30px;
                                    line-height: 30px;
                                    position: relative;
                                    .percentNum {
                                        position: absolute;
                                        right: -100px;
                                        top: 0;
                                    }
                                    .el-slider {
                                        width: 330px;
                                        position: relative;
                                        top: -36px;
                                        left: 50px;
                                        .el-slider__button-wrapper {
                                            display: none;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .condition-block {
                text-align: center;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
                position: relative;
                .title {
                    font-size: 13px;
                    margin-bottom: 10px;
                }
                .el-tag {
                    display: inline-block;
                    margin: 4px 0;
                    .el-icon-close {

                    }
                }
                .condition-empty-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    text-align: center;
                    font-size: 13px;
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
