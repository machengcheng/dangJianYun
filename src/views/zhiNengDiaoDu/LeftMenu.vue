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
            <el-menu-item index="/gongZuoDiaoDu" key="/gongZuoDiaoDu">
                <span slot="title">工作调度</span>
            </el-menu-item>
            <el-submenu index="1m">
                <template slot="title">
                    <i class="fa fa-list-alt fa-lg"></i>
                    <span>公文下发</span>
                </template>
                <el-menu-item index="/home/zhiNeng/GongWenJieShou" key="/home/zhiNeng/GongWenJieShou">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">公文接收</span>
                </el-menu-item>
                <el-menu-item index="/home/zhiNeng/GongWenXiaFa" key="/home/zhiNeng/GongWenXiaFa">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">公文下发</span>
                </el-menu-item>
                <el-menu-item index="/home/zhiNeng/XiaFaGongWen" key="/home/zhiNeng/XiaFaGongWen">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">下发公文</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="/2m">
                <template slot="title">
                    <i class="fa fa-list fa-lg"></i>
                    <span>报表统计</span>
                </template>
                <el-menu-item index="/home/zhiNeng/baoBiaoJieShou" key="/home/zhiNeng/baoBiaoJieShou">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">报表接收</span>
                </el-menu-item>
                <el-menu-item index="/home/zhiNeng/baoBiaoXiaFa" key="/home/zhiNeng/baoBiaoXiaFa">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">报表下发</span>
                </el-menu-item>
                <el-menu-item index="/home/zhiNeng/xiaFaBaoBiao" key="/home/zhiNeng/xiaFaBaoBiao">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">下发报表</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="/3m">
                <template slot="title">
                    <i class="fa fa-list fa-lg"></i>
                    <span>视频会议</span>
                </template>
                <el-menu-item index="/home/zhiNeng/HuiYiFaQi" key="/home/zhiNeng/HuiYiFaQi">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">会议发起</span>
                </el-menu-item>
                <el-menu-item index="/home/zhiNeng/huiYiJiaRu" key="/home/zhiNeng/huiYiJiaRu">
                    <i class="el-icon-arrow-right"></i>
                    <span slot="title">会议加入</span>
                </el-menu-item>
            </el-submenu>
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
