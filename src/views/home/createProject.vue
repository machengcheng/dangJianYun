<template>
    <section class="create-project-section">
        <div class="create-project-content">
            <div class="box-title">
                <span class="title">华为P20营销</span>
                <span class="fr create-time">创建时间: 2018-08-01</span>
            </div>
            <div class="project-detail-info">
                <el-row>
                    <el-col :span="24" class="mb10">
                        <span>项目名称: 华为P20营销</span>
                    </el-col>
                    <el-col :span="24" class="mb10">
                        <span>项目目标: 年轻人群体</span>
                    </el-col>
                    <el-col :span="24" class="mb10">
                        <span>项目描述: 革命性的莱卡三镜头和AI人工智能芯片，让创作变得更加简单</span>
                    </el-col>
                    <el-col :span="24" class="mb10">
                        <span>设定项目结束时间：208-09-20</span>
                    </el-col>
                    <el-col :span="24" class="mb10">
                        <span>相关标签:</span>
                    </el-col>
                    <el-col :span="24" class="mb10">
                        <div class="label-batch">
                            <ul class="label-list">
                                <li>
                                    <el-button size="medium"><span class="bt-text">标签1</span></el-button>
                                </li>
                                <li>
                                    <el-button size="medium"><span class="bt-text">标签2</span></el-button>
                                </li>
                                <li>
                                    <el-button size="medium"><span class="bt-text">标签3</span></el-button>
                                </li>
                                <li>
                                    <el-button size="medium"><span class="bt-text">标签4</span></el-button>
                                </li>
                                <li>
                                    <el-button size="medium"><span class="bt-text">标签5</span></el-button>
                                </li>
                                <li>
                                    <el-button size="medium"><span class="bt-text">标签6</span></el-button>
                                </li>
                                <li>
                                    <el-button size="medium"><span class="bt-text">标签7</span></el-button>
                                </li>
                                <li>
                                    <el-button size="medium"><span class="bt-text">标签8</span></el-button>
                                </li>
                                <li>
                                    <el-button size="medium"><span class="bt-text">标签8</span></el-button>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="24" align="center">
                        <div class="opt-block">
                            <el-button size="medium" class="mr20">SSP</el-button>
                            <el-button size="medium" class="ml20">提单</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "create-project",
		components: {

        },
		data() {
			return {

            }
		},
		methods: {

        }
	}
</script>

<style lang="scss" scoped>
    .create-project-section {
        background: #f5f5f5;
        height: 100%;
        .create-project-content {
            width: 1100px;
            height: 100%;
            min-height: 500px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            .box-title {
                width: 90%;
                margin: 0 auto;
                .title {
                    font-size: 18px;
                }
                .create-time {
                    font-size: 12px;
                    color: #848484;
                }
            }
            .project-detail-info {
                width: 90%;
                margin: 20px auto;
                font-size: 14px;
                .label-batch {
                    height: 300px;
                    margin: 10px 0 0;
                    padding: 15px 0;
                    border-top: 1px solid #ddd;
                    .label-list {
                        max-height: 200px;
                        li {
                            width: 15%;
                            float: left;
                            text-align: center;
                            margin-bottom: 20px;
                            .el-button {
                                position: relative;
                                .bt-text {
                                    display: inline-block;
                                    width: 80px;
                                    overflow: hidden;
                                    text-overflow:ellipsis;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
                .opt-block {
                    margin-top: 10px;
                }
            }
        }
    }
</style>
