<template>
    <section class="underway-section">
        <div class="underway-content">
            <div class="underway-search-condition">
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
                                type="primary"
                                size="mini"
                                class="default-button"
                                plain
                            >
                                编辑
                            </el-button>
                            <el-button
                                type="danger"
                                size="mini"
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
		name: "underway",
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
                page: 1,
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
    .underway-section {
        height: 100%;
        background: #f5f5f5;
        .underway-content {
            width: 1100px;
            height: 100%;
            margin: 0 auto;
            background: #fff;
            .underway-search-condition {
                padding: 20px;
            }
            .box-content {
                padding: 0 0 20px 15px;
            }
            .box-footer {
                padding: 50px 0;
                text-align: center;
            }
        }
    }
</style>
