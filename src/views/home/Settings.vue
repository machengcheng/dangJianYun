<template>
    <section class="settings-section">
        <div class="settings-content">
            <div class="box-title mb20">账号设置</div>
            <div class="box-content">
                <div class="box-item">
                    <span class="name">密码</span>
                    <span class="tips">已设置</span>
                    <el-button size="mini" class="edit">编辑</el-button>
                </div>
                <div class="box-item">
                    <span class="name">绑定手机</span>
                    <span class="tips">131****7135</span>
                    <el-button size="mini" class="edit">编辑</el-button>
                </div>
                <div class="box-item">
                    <span class="name">绑定邮箱</span>
                    <span class="tips">未绑定</span>
                    <el-button size="mini" class="edit">编辑</el-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "settings",
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
    .settings-section {
        height: 100%;
        background: #f5f5f5;
        .settings-content {
            width: 1100px;
            height: 100%;
            min-height: 500px;
            margin: 0 auto;
            background: #fff;
            .box-title {
                height: 48px;
                line-height: 48px;
                padding-left: 15px;
                /*margin: 2px 0;*/
                color: #606266;
                /*border: 1px solid #e4e7ed;*/
                background-color: #f5f7fa;
            }
            .box-content {
                width: 60%;
                margin: 0 auto;
                .box-item {
                    width: 100%;
                    height: 60px;
                    border-bottom: 1px solid #ddd;
                    position: relative;
                    .name {
                        position: absolute;
                        top: 10px;
                        left: 20px;
                        color: #333;
                        font-size: 14px;
                    }
                    .tips {
                        position: absolute;
                        top: 36px;
                        left: 20px;
                        color: #999;
                        font-size: 12px;
                    }
                    .edit {
                        position: absolute;
                        top: 24px;
                        right: 0;
                    }
                }
            }
        }
    }
</style>
