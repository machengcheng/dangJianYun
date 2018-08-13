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
            :default-active="$route.matched[0].path"
            >
            <el-menu-item index="/home/pageHomeDefault/oaOffice" key="/home/pageHomeDefault/oaOffice">
                <span slot="title">考勤管理</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="fa fa-list-alt fa-lg"></i>
                    <span>任务调度</span>
                </template>
                <el-menu-item index="/home/pageHomeDefault/shuJuZongLan" key="/home/pageHomeDefault/shuJuZongLan">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">数据总览</span>
                </el-menu-item>
                <el-menu-item index="12" key="12">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">精准比对</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="fa fa-list fa-lg"></i>
                    <span>信息上报</span>
                </template>
                <el-menu-item index="21" key="21">
                    <i class="el-icon-d-arrow-right"></i>
                    <span slot="title">河长台账</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="/home/pageHomeDefault/oaOffice" key="/home/pageHomeDefault/oaOffice">
                <span slot="title">乡镇考评打分</span>
            </el-menu-item>
            <el-menu-item index="/home/pageHomeDefault/oaOffice" key="/home/pageHomeDefault/oaOffice">
                <span slot="title">协作互助</span>
            </el-menu-item>
            <el-menu-item index="/home/pageHomeDefault/oaOffice" key="/home/pageHomeDefault/oaOffice">
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
            this.getTabs();
        }
    }
</script>

<style lang="scss" scoped>
    .left-menu-section {
        .el-menu {
            li.is-active {
                background: transparent!important;
            }
        }
        .el-menu-item {
            span {
                position: relative;
                top: 2px !important;
            }
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
                border-right: solid 1px #e6e6e6;
                /*自定义，必要时用!important*/

            }
            .el-menu-item.is-active {
                /*自定义，必要时用!important*/

            }
        }
    }
</style>
