<template>
    <section class="page-home-default-section">
        <div class="page-home-default-content">
            <el-row class="banner">
                <el-col :span="24">
                    <div class="banner-content">
                        <div class="home-banner">
                            <el-carousel :interval="5000" arrow="always" height="460px">
                                <el-carousel-item v-for="item in profiles" :key="item">
                                    <img :src="item" />
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="clear"></div>
            <el-row>
                <el-col :span="24">
                    <div class="home-link-block">
                        <ul class="home-link">
                            <li>
                                网站导航: <a class="link-item" href="javascript: void(0);">12380</a>
                            </li>
                            <li>
                                <a class="link-item" href="javascript: void(0);">意见建议</a>
                            </li>
                            <li>
                                <a class="link-item" href="javascript: void(0);">群众呼声</a>
                            </li>
                            <li>
                                <a class="link-item" href="javascript: void(0);">党员随手拍</a>
                            </li>
                            <li>
                                <a class="link-item" href="javascript: void(0);">民生通道</a>
                            </li>
                            <li>
                                <a class="link-item" href="javascript: void(0);">在线答疑</a>
                            </li>
                            <li>
                                <a class="link-item" href="javascript: void(0);">问卷调查</a>
                            </li>
                        </ul>
                        <span class="fr email">lpszzbxxk@163.com</span>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
    import slide01 from '../../assets/imgs/slide01.png';
    import profile2 from '../../assets/imgs/profile2.jpg';
    import profile3 from '../../assets/imgs/profile3.jpg';
    import profile4 from '../../assets/imgs/profile4.jpg';
    import echarts from 'echarts';
	export default {
		name: "page-home-default",
		components: {

        },
		data() {
			return {
                profiles: [
                    slide01,
                    profile2,
                    profile3,
                    profile4
                ]
            }
		},
		methods: {
            createProject: function () {
                this.$router.push({ path: '/home/worktable/addProject' });
            },
            labelSearch: function () {
                this.$router.push({ path: '/home/worktable/labelSearch' });
            }
        },
        mounted: function () {

        }
	}
</script>

<style lang="scss">
    .page-home-default-section {
        height: 100%;
        background: #f5f5f5;
        .page-home-default-content {
            width: 1100px;
            height: 100%;
            margin: 0 auto;
            background: #f5f5f5;
            .banner {
                height: 460px;
                .banner-content {
                    height: 460px;
                    border-bottom: 1px solid #e7eaec;
                }
            }
            .home-banner {
                width: 100%;
                height: 70%;
                min-height: 459px;
                padding: 0;
                margin: 0 auto;
                background: #fff;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
                img {
                    width: 100%;
                    height: 70%;
                    min-height: 459px;
                }
            }
            .home-link-block {
                height: 38px;
                line-height: 38px;
                padding: 0 18px;
                border-bottom: 2px solid #CC0001;
                .home-link {
                    li {
                        float: left;
                        font-size: 13px;
                        margin-right: 10px;
                        a.link-item:link,
                        a.link-item:visited,
                        a.link-item:hover {
                            text-decoration: none;
                            font-size: 13px;
                            color: #1A1A1A;
                        }
                    }
                    li:after {
                        display: inline-block;
                        content: '';
                        width: 1px;
                        height: 12px;
                        position: relative;
                        top: 1px;
                        left: 3px;
                        border-right: 1px solid #CC0001;
                    }
                    li:last-of-type:after {
                        border-right: 0!important;
                    }
                }
                .email {
                    font-size: 13px;
                }
            }
        }
    }
</style>
