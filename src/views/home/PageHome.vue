<template>
    <div class="root-container">
        <div class="common-top">
            <div class="common-label">
                <img class="logo_left" src="../../assets/logo_left.png" />
                <img class="logo_right" src="../../assets/logo_right.png" />
                <el-input class="search-bar" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchKey" clearable></el-input>
                <el-button
                    type="primary"
                    size="mini"
                    class="default-button fr operation-btn"
                    plain
                >
                    退出登录
                </el-button>
                <el-button
                    type="primary"
                    size="mini"
                    class="default-button fr operation-btn mr20"
                    plain
                    @click="settings"
                >
                    设置
                </el-button>
            </div>
        </div>
        <div class="container">
            <el-header class="nav-header">
                <el-menu
                    :unique-opened="isUnique"
                    :router="true"
                    :default-active="$route.matched[1].path"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    >
                    <el-menu-item index="/home/infoDynamics" key="/home/infoDynamics">信息动态</el-menu-item>
                    <el-menu-item index="/home/worktable" key="/home/worktable">网上讲习所</el-menu-item>
                    <el-menu-item index="/home/lunZhanJianGuan" key="/home/lunZhanJianGuan">轮战监管</el-menu-item>
                    <el-menu-item index="/home/labelView" key="/home/labelView">党建大数据</el-menu-item>
                    <el-menu-item index="/home/zhiNeng" key="/home/zhiNeng">智能调度台</el-menu-item>
                    <el-menu-item index="/home/eHome" key="/home/eHome">党群E家</el-menu-item>
                    <el-menu-item index="/home/renCaiZhiTong" key="/home/renCaiZhiTong">人才直通车</el-menu-item>

                </el-menu>
            </el-header>
            <router-view></router-view>
            <div class="clear"></div>
            <el-footer class="footer-copyright">
                <div>关于我们<span class="split">|</span>法律声明</div>
                <div>
                    <span>主办：中共六盘水市委组织部</span>
                    <span>备案号：黔ICP备13003751号-1</span>
                </div>
                <div>
                    功能设计：中共六盘水市委组织信息科
                </div>
                <div>
                    建议使用大于1366X768分辨率/IE10.0或以上浏览器可以获得最佳浏览效果!
                </div>
                <div>
                    <span>日访问量：3294</span>
                    <span>月访问量：495959</span>
                    <span>总访问量：8795958</span>
                </div>
            </el-footer>
        </div>
    </div>
</template>

<script>
	export default {
		name: "page-home",
		components: {

		},
		computed: {

		},
		data() {
            return {
                searchKey: '',
                isUnique: true,
                activeIndex2: '1'
            }
		},
		methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            settings: function () {
                this.$router.push({ path: '/home/settings' });
            }
		},
		mounted: function () {

		}
	}
</script>

<style lang="scss">
    .root-container {
        width: 100%;
        /*height: 100%;*/
        background: #f5f5f5;
        background-size: 100% 100%;
        .container {
            width: 100%;
            min-width: 1100px;
            height: 50%;
            margin: 0 auto;
            background: #f5f5f5;
            background-clip: padding-box;
            .nav-header {
                height: 60px!important;
                background: #f00;
                .el-menu {
                    width: 1100px;
                    margin: 0 auto;
                    background: #f00!important;
                    .el-menu-item {
                        background: #f00!important;
                        border-bottom: 0!important;
                    }
                    .el-menu-item.is-active {
                        border-bottom: 0!important;
                        color: #fff!important;
                        background: #CC0001!important;
                    }
                }
            }
            .footer-copyright {
                height: 120px!important;
                line-height: 1.8em;
                background: #f5f5f5;
                font-size: 12px;
                padding: 10px 0;
                .split {
                    margin: 0 10px;
                }
            }
        }
    }
    /*.root-container {*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*.outer-container {*/
            /*height: 100%;*/
            /*.inner-container {*/
                /*.nav-header {*/
                    /*width: 100%;*/
                    /*background-color: #fff;*/
                /*}*/
                /*.main-content {*/
                    /*width: 100%;*/
                    /*background-color: #F9F9FA;*/
                /*}*/
                /*.footer-copyright {*/

                /*}*/
            /*}*/
        /*}*/
    /*}*/
    .el-header {
        background-color: #fff;
        color: #333;
        padding: 0;
        line-height: 60px;
    }
    .el-menu--horizontal {
        border-bottom: 0!important;
    }
    .el-footer {
        width: 100%;
        background-color: #f5f5f5;
        color: #333;
        text-align: center;
        height: 60px!important;
        line-height: 60px;
        font-size: 13px;
    }
    .el-aside {
        background-color: #333743;
        color: #333;
        text-align: center;
    }
    .el-main {
        background-color: #333743;
        color: #333;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
</style>
