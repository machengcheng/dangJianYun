<template>
    <section class="collect-section">
        <div class="collect-content">
            <div class="collect-condition">
                <el-button  type="primary" size="small" @click="search" class="danger-button fr">查询</el-button>
                <el-input v-model="searchKey" size="small" @click="search" class="searchKey wat fr mr10" placeholder="搜索项目"></el-input>
                <div class="clear"></div>
            </div>
            <div class="box-content">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    v-loading="isLoading"
                    style="width: 70%;margin: 0 auto;"
                >
                    <el-table-column
                        type="selection"
                        width="55"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="名称"
                    >
                    </el-table-column>
                    <el-table-column
                        label="评价"
                        width="440"
                    >
                        <template slot-scope="scope">
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
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        align="center"
                        width="160"
                    >
                        <template slot-scope="scope">
                            <el-button
                                type="danger"
                                size="mini"
                                class="default-button"
                                plain
                            >
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-col :span="24" class="toolbar">
                    <el-pagination layout="total, prev, pager, next" background :current-page="page" @current-change="handleCurrentChange" :page-size="pageSize" :total="total" style="margin: 15px 0;float:right;">
                    </el-pagination>
                </el-col>
                <el-col :span="24" align="center">
                    <el-button type="primary" size="mini">清空标签</el-button>
                    <el-button type="primary" size="mini" @click="createProject">创建项目</el-button>
                </el-col>
                <div class="clear"></div>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "collect",
		components: {

        },
		data() {
			return {
                goodEvaluate: 70,
                relateEvaluate: 55,
                searchKey: '',
                tableData: [
                    {
                        id: 1,
                        name: '标签一'
                    },
                    {
                        id: 2,
                        name: '标签二'
                    },
                    {
                        id: 3,
                        name: '标签三'
                    },
                    {
                        id: 4,
                        name: '标签四'
                    }
                ],
                isLoading: false,
                total: 4,
                pageSize: 10,
                page: 1
            }
		},
		methods: {
            search: function () {

            },
            handleCurrentChange: function (val) {
                this.page = val;
            },
            createProject: function () {
                this.$router.push({ path: '/home/worktable/addProject' });
            }
        }
	}
</script>

<style lang="scss">
    .collect-section {
        height: 100%;
        background: #f5f5f5;
        .collect-content {
            width: 1100px;
            height: 100%;
            min-height: 500px;
            margin: 0 auto;
            background: #fff;
            .collect-condition {
                padding: 20px;
            }
            .box-content {
                padding: 0 0 20px 15px;
                .evaluate-result {
                    line-height: 0;
                    font-size: 13px;
                    display: inline-block;
                    .goodEvaluate, .relate {
                        display: block;
                        height: 20px;
                        line-height: 20px;
                        position: relative;
                        .percentNum {
                            position: absolute;
                            right: -90px;
                            top: 0;
                        }
                        .el-slider {
                            width: 330px;
                            position: relative;
                            top: -28px;
                            left: 50px;
                            .el-slider__button-wrapper {
                                display: none;
                            }
                        }
                    }
                }
            }
            .box-footer {
                padding: 50px 0;
                text-align: center;
            }
        }
    }
</style>
