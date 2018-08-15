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
            <el-menu-item index="/renCaiGongGao" key="/renCaiGongGao">
                <span slot="title">人才公告</span>
            </el-menu-item>
            <el-menu-item index="/home/renCaiZhiTong/zhengCe" key="/home/renCaiZhiTong/zhengCe">
                <span slot="title">人才政策</span>
            </el-menu-item>
            <el-menu-item index="/home/renCaiZhiTong/suQiu" key="/home/renCaiZhiTong/suQiu">
                <span slot="title">人才诉求</span>
            </el-menu-item>
            <el-menu-item index="/home/renCaiZhiTong/xiangMuShengBao" key="/home/renCaiZhiTong/xiangMuShengBao">
                <span slot="title">项目申报</span>
            </el-menu-item>
            <el-menu-item index="/home/renCaiZhiTong/guaZhiGanBu" key="/home/renCaiZhiTong/guaZhiGanBu">
                <span slot="title">挂职干部信息</span>
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
