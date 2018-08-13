<template>
    <section class="worktable-default-section">
        <!--<div class="worktable-banner">-->
            <!--<el-carousel :interval="5000" arrow="always" height="360px">-->
                <!--<el-carousel-item v-for="item in profiles" :key="item">-->
                    <!--<img :src="item" />-->
                <!--</el-carousel-item>-->
            <!--</el-carousel>-->
        <!--</div>-->
        <div class="worktable-content">
            <div class="content">
                <div class="item-split">
                    <span class="item-bar"></span>
                    <span class="item-title">我的工作</span>
                </div>
                <div class="item-detail">
                    <span class="el-icon-star-off" @click="underway">
                        进行中
                    </span>
                    <span class="el-icon-star-off" @click="finished">
                        已完成
                    </span>
                    <span class="el-icon-star-off" @click="evaluation">
                        待评价
                    </span>
                </div>
                <div class="item-split">
                    <span class="item-bar"></span>
                    <span class="item-title">自助查询</span>
                </div>
                <div class="item-detail">
                    <span class="el-icon-search" @click="labelSearch">
                        标签查询
                    </span>
                    <span class="el-icon-star-on" @click="collect">
                        我的收藏
                    </span>
                </div>
                <div class="add-new-project-block">
                    <div class="add-new-project" @click="createProject">
                        <span class="add-icon">+</span>
                        <span class="add-icon-text">新建项目</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import profile1 from '../../assets/imgs/profile1.jpg';
    import profile2 from '../../assets/imgs/profile2.jpg';
    import profile3 from '../../assets/imgs/profile3.jpg';
    import profile4 from '../../assets/imgs/profile4.jpg';
	export default {
		name: "worktable-default",
		components: {

        },
		data() {
			return {
                profiles: [
                    profile1,
                    profile2,
                    profile3,
                    profile4
                ]
            }
		},
		methods: {
            underway: function () {
                this.$router.push({ path: '/home/worktable/underway' });
            },
            finished: function () {
                this.$router.push({ path: '/home/worktable/finished' });
            },
            evaluation: function () {
                this.$router.push({ path: '/home/worktable/evaluation' });
            },
            labelSearch: function () {
                this.$router.push({ path: '/home/worktable/labelSearch' });
            },
            createProject: function () {
                this.$router.push({ path: '/home/worktable/addProject' });
            },
            collect: function () {
                this.$router.push({ path: '/home/worktable/collect' });
            }
        }
	}
</script>

<style lang="scss" scoped>
    .worktable-default-section {
        background: #f5f5f5;
        .worktable-banner {
            img {
                width: 100%;
                height: 360px;
                margin: 1px 0;
            }
        }
        .worktable-content {
            width: 1100px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            img {
                width: 100%;
                height: 360px;
                margin: 1px 0;
            }
            .content {
                margin: 10px 0 0;
                .item-split {
                    .item-bar {
                        display: inline-block;
                        width: 4px;
                        height: 20px;
                        position: relative;
                        top: 3px;
                        background: #E96373;
                    }
                    .item-title {
                        display: inline-block;
                        padding-left: 10px;
                    }
                }
                .item-detail {
                    padding: 30px 0 30px 20px;
                    span {
                        display: inline-block;
                        width: 220px;
                        height: 120px;
                        line-height: 120px;
                        text-align: center;
                        margin-right: 30px;
                        -webkit-border-radius: 4px;
                        -moz-border-radius: 4px;
                        border-radius: 4px;
                        border: 1px solid #e7eaec;
                        cursor: pointer;
                        -webkit-box-shadow: rgb(222, 235, 250) 0 1px 4px 0;
                        -moz-box-shadow: rgb(222, 235, 250) 0 1px 4px 0;
                        -o-box-shadow: rgb(222, 235, 250) 0 1px 4px 0;
                    }
                    span:last-of-type {
                        margin-right: 0;
                    }
                }
                .add-new-project-block {
                    height: 200px;
                    text-align: center;
                    background: #fff;
                    .add-new-project {
                        display: inline-block;
                        width: 100px;
                        height: 100px;
                        margin: 50px 0;
                        -webkit-border-radius: 100%;
                        -moz-border-radius: 100%;
                        border-radius: 100%;
                        background: #83A0B8;
                        position: relative;
                        text-align: center;
                        cursor: pointer;
                        .add-icon, .add-icon-text {
                            display: inline-block;
                            color: #fff;
                        }
                        .add-icon {
                            margin-top: 6px;
                            font-size: 38px;
                        }
                        .add-icon-text {
                            position: absolute;
                            left: 23px;
                            top: 56px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
</style>
