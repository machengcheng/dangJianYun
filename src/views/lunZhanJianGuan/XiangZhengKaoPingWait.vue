<template>
    <section class="xiang-zheng-kao-ping-wait">
        <h4 class="mt20">待评分标题</h4>
        <hr style="color: #979797"/>
        <el-table
            :data="tableData5"
            style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <div class="wait-t">
                        <el-row class="wait-content">
                            <el-col :span="12" class="wait-content-l">
                                <p>信息上报<span class="fr" style="margin-right: 22px">打分</span></p>
                                <ul>
                                    <li>
                                        <p>县城东村马占祥非法转卖耕地为宅基地获利近百万</p>
                                        <div class="wait-content-l-input">
                                            <el-input v-model="props.row.score" size="mini"></el-input>
                                        </div>
                                    </li>
                                    <li>
                                        <p>县城东村马占祥非法转卖耕地为宅基地获利近百万</p>
                                        <div class="wait-content-l-input">
                                            <el-input v-model="props.row.score" size="mini"></el-input>
                                        </div>
                                    </li>
                                </ul>
                            </el-col>
                            <el-col :span="8" :offset="4" class="wait-content-r">
                                <p>考勤<span class="fr" style="margin-right: 22px">打分</span></p>
                                <ul>
                                    <li>
                                        <p>22天 请假4天</p>
                                        <div class="wait-content-r-input">
                                            <el-input v-model="props.row.score" size="mini"></el-input>
                                        </div>
                                    </li>
                                </ul>
                            </el-col>
                        </el-row>
                        <el-row class="ar">
                            <el-button type="primary" style="width: 94px;margin-right: 27px" class="mb20">保存</el-button>
                        </el-row>
                    </div>
                    <div class="wait-b">
                        <p>考评结果</p>
                        <div class="wait-b-c">
                            <div class="wait-b-c-t">
                                信息上报<span>60分</span>
                            </div>
                            <div class="wait-b-c-b">
                                考勤<span>80分</span>
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column
                label="姓名"
                prop="name">
            </el-table-column>
            <el-table-column
                label="所属党组织"
                prop="desc">
            </el-table-column>
            <el-table-column
                label="上报时间"
                prop="date">
            </el-table-column>
            <el-table-column
                label="信息类别"
                prop="messageType">
            </el-table-column>
            <el-table-column
                label="信息上报内容"
                prop="content">
            </el-table-column>
            <el-table-column
                label="进展"
                prop="status">
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input.vue";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        name: "",
        components: {
            ElButton,
            ElInput,
            ElCol,
            ElRow},
        data() {
            return {
                tableData5: [{
                    id: '张三',
                    name: '张三',
                    category: '江浙小吃、小吃零食',
                    desc: 'xx党支部',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    date:'2013-12-15',
                    messageType:'经验交流',
                    content:'发展养殖产业经验......',
                    status:'正在考评',
                    score:50
                },{
                    id: '张三',
                    name: '张三',
                    category: '江浙小吃、小吃零食',
                    desc: 'xx党支部',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    date:'2013-12-15',
                    messageType:'经验交流',
                    content:'发展养殖产业经验......',
                    status:'正在考评',
                    score:50
                },{
                    id: '张三',
                    name: '张三',
                    category: '江浙小吃、小吃零食',
                    desc: 'xx党支部',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    date:'2013-12-15',
                    messageType:'经验交流',
                    content:'发展养殖产业经验......',
                    status:'正在考评',
                    score:50
                }]
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .xiang-zheng-kao-ping-wait{
        background: #fff;
        padding: 0 20px 30px 20px;
        .wait-t{
            background: rgba(249,249,250,1); border-right: 1px solid #D8E5EE;
            .wait-content{
                padding: 14px 27px;
                .wait-content-l{
                    ul{
                        li{
                            display: flex;justify-content: space-between;margin-bottom: 12px;
                            p{flex: 1;margin: 0;padding: 0 50px 0 0;color: rgba(74,74,74,1);font-size: 13px}
                            .wait-content-l-input{
                                width: 70px;
                            }
                        }
                    }

                }
                .wait-content-r{
                    ul{
                        li{
                            display: flex;justify-content: space-between;margin-bottom: 12px;
                            p{flex: 1;margin: 0;padding: 0 50px 0 0;color: rgba(74,74,74,1);font-size: 13px}
                            .wait-content-r-input{
                                width: 70px;
                            }
                        }
                    }

                }
            }
        }
        .wait-b{
            padding: 12px 26px;
            border-right: 1px solid #D8E5EE;
            P{margin-bottom: 15px}
            .wait-b-c{
                width: 170px;margin-bottom: 20px;
                .wait-b-c-t{
                    margin-bottom: 18px;
                    span{float: right;color: #E30000}
                }
                .wait-b-c-b{
                    span{float: right;color: #E30000}
                }
            }

        }
    }
    .el-table__expanded-cell{padding: 0!important;border: 1px solid #D8E5EE;box-sizing: border-box}
    hr{
        margin-top:7px;
        *margin: 0;
        border: 0;
        color: #979797;
        background-color: #979797;
        height: 1px;
        opacity: 0.5;
    }
</style>
