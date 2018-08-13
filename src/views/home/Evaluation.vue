<template>
    <section class="evaluation-section">
        <div class="evaluation-content">
            <div class="evaluation-search-condition">
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
                        prop="name"
                        label="名称"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        align="center"
                        width="160"
                    >
                        <template slot-scope="scope">
                            <el-button
                                v-if="scope.row.id === 1"
                                type="primary"
                                size="mini"
                                class="default-button"
                                plain
                            >
                                查看评价
                            </el-button>
                            <el-button
                                v-if="scope.row.id !== 1"
                                type="primary"
                                size="mini"
                                class="default-button"
                                plain
                            >
                                评价
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-col :span="24" class="toolbar">
                    <el-pagination layout="total, prev, pager, next" background :current-page="page" @current-change="handleCurrentChange" :page-size="pageSize" :total="total" style="margin: 15px 0;float:right;">
                    </el-pagination>
                </el-col>
                <div class="clear"></div>
            </div>
            <div class="box-footer">
                <el-button @click="backWorktable">返回工作台</el-button>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "evaluation",
		components: {

        },
		data() {
			return {
                searchKey: '',
                tableData: [
                    {
                        id: 1,
                        name: '华为P20营销活动'
                    },
                    {
                        id: 2,
                        name: '华为P20营销活动'
                    },
                    {
                        id: 3,
                        name: '华为P20营销活动'
                    },
                    {
                        id: 4,
                        name: '华为P20营销活动'
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
            backWorktable: function () {
                this.$router.push({ path: '/home/worktable' });
            }
        }
	}
</script>

<style lang="scss" scoped>
    .evaluation-section {
        height: 100%;
        background: #f5f5f5;
        .evaluation-content {
            width: 1100px;
            height: 100%;
            margin: 0 auto;
            background: #fff;
            .evaluation-search-condition {
                padding: 20px;
            }
            .box-content {
                padding: 0 0 20px 15px;
                .default-button {
                    width: 80px!important;
                }
            }
            .box-footer {
                padding: 50px 0;
                text-align: center;
            }
        }
    }
</style>
