<template>
    <div class="login-body">
        <el-row class="common-top">
            <el-col :span="24" align="left">
                <div class="common-label">
                    <img src="../../assets/logo_right.png" />
                </div>
            </el-col>
        </el-row>
        <el-row class="login-container">
            <el-col :span="12" align="center">
                <div class="login-banner">
                    <el-carousel :interval="5000" arrow="always" height="336px">
                        <el-carousel-item v-for="item in profiles" :key="item">
                            <img :src="item" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
            <el-col :span="12" align="center">
                <div class="login-box">
                    <div class="login-box-inner">
                        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="loginForm">
                            <h3 class="title">登录</h3>
                            <el-form-item
                                prop="account"
                            >
                                <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="输入电话/工号"></el-input>
                            </el-form-item>
                            <el-form-item
                                prop="checkPass"
                            >
                                <el-input type="password" v-model="loginForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="login" class="login-btn" :loading="isLogin">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import profile1 from '../../assets/imgs/profile1.jpg';
    import profile2 from '../../assets/imgs/profile2.jpg';
    import profile3 from '../../assets/imgs/profile3.jpg';
    import profile4 from '../../assets/imgs/profile4.jpg';
	export default {
		name: "login",
		components: {

        },
		data() {
			return {
                profiles: [
                    profile1,
                    profile2,
                    profile3,
                    profile4
                ],
                isLogin: false,
                loginForm: {
                    account: '',
                    checkPass: ''
                },
                loginRules: {
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                    ],
                    checkPass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                },
                checked: true
            }
		},
		methods: {
            login: function(){
                var that = this;
                that.isLogin = true;
                setTimeout(function () {
                    that.isLogin = false;
                    that.$router.push({ path: '/home/pageHomeDefault' });
                }, 3000);
            }
        }
	}
</script>

<style lang="scss">
    @import '../../assets/styles/login.scss';
</style>
