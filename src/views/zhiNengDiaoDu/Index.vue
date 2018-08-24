<template>
    <section class="zhi-neng-diao-du-section">
        <div class="zhi-neng-diao-du-content">
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
        name: "zhi-neng-diao-du",
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
    .zhi-neng-diao-du-section {
        /*height: 100%;*/
        min-height: 500px;
        .zhi-neng-diao-du-content {
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


