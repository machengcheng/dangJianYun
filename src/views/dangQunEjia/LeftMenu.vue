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
            <el-menu-item index="/policyFile" key="/policyFile">
                <span slot="title">政策文件</span>
            </el-menu-item>
            <el-menu-item index="/home/eHome/groupDemand" key="/home/eHome/groupDemand">
                <span slot="title">群众需求</span>
            </el-menu-item>
            <el-menu-item index="/home/eHome/suggest" key="/home/eHome/suggest">
                <span slot="title">意见建议</span>
            </el-menu-item>
            <el-menu-item index="/home/eHome/report" key="/home/eHome/report">
                <span slot="title">12380举报</span>
            </el-menu-item>
            <el-menu-item index="/home/eHome/voteManger" key="/home/eHome/voteManger">
                <span slot="title">投票管理</span>
            </el-menu-item>
            <el-menu-item index="/home/eHome/pageSurver" key="/home/eHome/pageSurver">
                <span slot="title">问卷调查</span>
            </el-menu-item>
            <el-menu-item index="/home/eHome/peopleCamera" key="/home/eHome/peopleCamera">
                <span slot="title">党员随手拍</span>
            </el-menu-item>
            <el-menu-item index="/home/eHome/liveAnswer" key="/home/eHome/liveAnswer">
                <span slot="title">在线答疑</span>
            </el-menu-item>
            <el-menu-item index="/home/eHome/proplePipe" key="/home/eHome/proplePipe">
                <span slot="title">民生通道</span>
            </el-menu-item>
            <el-submenu index="1m">
                <template slot="title">
                    <i class="fa fa-list-alt fa-lg"></i>
                    <span>组织生活</span>
                </template>
                <el-menu-item index="/home/eHome/groupLife" key="/home/eHome/groupLife">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">三会一课</span>
                </el-menu-item>
                <el-menu-item index="/home/eHome/activeZuZhi" key="/home/eHome/activeZuZhi">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">活动组织</span>
                </el-menu-item>
                <el-menu-item index="/home/eHome/activeFaQi" key="/home/eHome/activeFaQi">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">活动发起</span>
                </el-menu-item>
                <el-menu-item index="/home/eHome/activeTiJiao" key="/home/eHome/activeTiJiao">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">活动提交</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="/home/eHome/remoteSupervise" key="/home/eHome/remoteSupervise">
                <span slot="title">远程监督</span>
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
