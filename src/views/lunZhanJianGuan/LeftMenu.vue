<template>
    <section class="left-menu-section">
        <el-menu
            class="el-menu-vertical-demo"
            text-color="#1976D3"
            active-text-color="#1976D3"
            background-color="#fff"
            @select="handleSelect"
            :unique-opened="isUnique"
            :router="true"
            :default-active="$route.matched[2].path"
            >
            <el-menu-item index="/attendanceRecord" key="/attendanceRecord">
                <span slot="title">考勤管理</span>
            </el-menu-item>
            <el-submenu index="1m">
                <template slot="title">
                    <i class="fa fa-list-alt fa-lg"></i>
                    <span>任务调度</span>
                </template>
                <el-menu-item index="/home/lunZhanJianGuan/acceptTask" key="/home/lunZhanJianGuan/acceptTask">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">接收任务</span>
                </el-menu-item>
                <el-menu-item index="/home/lunZhanJianGuan/issueTask" key="/home/lunZhanJianGuan/issueTask">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">下发任务</span>
                </el-menu-item>
                <el-menu-item index="/home/lunZhanJianGuan/taskRelease" key="/home/lunZhanJianGuan/taskRelease">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">任务发布</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="/2m">
                <template slot="title">
                    <i class="fa fa-list fa-lg"></i>
                    <span>信息上报</span>
                </template>
                <el-menu-item index="/21m" key="/21m">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">日志</span>
                </el-menu-item>
                <el-menu-item index="/22m" key="/22m">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">招商引资</span>
                </el-menu-item>
                <el-menu-item index="/23m" key="/23m">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">走访贫困户</span>
                </el-menu-item>
                <el-menu-item index="/24m" key="/24m">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">贫困户需求汇总</span>
                </el-menu-item>
                <el-menu-item index="/25m" key="/21m">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">日志</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="/home/lunZhanJianGuan/xiangZhengKaoPin" key="/home/lunZhanJianGuan/xiangZhengKaoPin">
                <span slot="title">乡镇考评打分</span>
            </el-menu-item>
            <el-menu-item index="/home/lunZhanJianGuan/xieZuoHuzhu" key="/home/lunZhanJianGuan/xieZuoHuzhu">
                <span slot="title">协作互助</span>
            </el-menu-item>
            <el-menu-item index="/home/lunZhanJianGuan/zhuCunZhiDao" key="/home/lunZhanJianGuan/zhuCunZhiDao">
                <span slot="title">驻村指导</span>
            </el-menu-item>
        </el-menu>
    </section>
</template>

<script>
    export default {
        name: "left-menu",
        components: {

        },

        data() {
            return {
                isUnique: true
            }
        },
        methods: {
            handleSelect: function (index, indexPath) {

            }
        },
        mounted: function () {
            console.info("当前路由: ");
            console.info(this.$route);
        }
    }
</script>

<style lang="scss">
    .left-menu-section {
        .el-menu {
            li.is-active {
                background: #f5f5f5!important;
            }
        }
        .el-menu-item {
            height: 44px!important;
            line-height: 44px!important;
            span {
                position: relative;
                top: 2px !important;
            }
        }
        .el-menu-item,
        .el-submenu__title {
            height: 44px!important;
            line-height: 44px!important;
        }
        .el-submenu__title i {
            color: #1976D3;
            margin-right: 4px;
        }
        .el-submenu__title {
            color: #1976D3!important;
        }
        .el-icon-d-arrow-right:before {
            color: #1976D3;
        }
        .left-menu-section .el-menu li.is-active {
            background: transparent!important;
        }
        //css代码
        .el-submenu {
            .el-menu-item {
                border: 0;
                /*border-right: solid 1px #e6e6e6;*/
                /*自定义，必要时用!important*/

            }
            .el-menu-item.is-active {
                /*自定义，必要时用!important*/

            }
        }
    }
</style>
