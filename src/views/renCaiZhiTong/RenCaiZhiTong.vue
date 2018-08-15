<template>
    <section class="ren-cai-zhi-tong-section">
        <div class="ren-cai-zhi-tong-content">
            <el-row>
                <el-col :span="5" class="pt10">
                    <div class="tree-block">
                        <left-menu></left-menu>
                    </div>
                </el-col>
                <el-col :span="19">
                    <router-view></router-view>
                </el-col>
                <div class="clear"></div>
            </el-row>
        </div>
    </section>
</template>

<script>
    import LeftMenu from './LeftMenu';
    export default {
        name: "ren-cai-zhi-dao",
        components: {
            LeftMenu
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
    .ren-cai-zhi-tong-section {
        /*height: 100%;*/
        min-height: 500px;
        .ren-cai-zhi-tong-content {
            width: 1100px;
            margin: 0 auto;
            /*height: 100%;*/
            background: #fff;
            padding: 20px;
            .tree-block {
                height: 500px;
                padding: 0;
                overflow-x: hidden;
                overflow-y: auto;
            }
        }
    }
</style>

