<template>
    <section class="gua-zhi-gan-bu-section">
        <h4 style="margin-top: 0">挂职干部信息</h4>
        <hr style="color: #979797;margin-bottom: 30px" />
        <el-row>
            <el-card shadow="never" class="box-card-t">
                <div class="xingmu-t">
                    挂职信息
                </div>
                <ul>
                    <li>xxx部门-职位<el-button type="text">申请</el-button></li>
                    <li>xxx部门-职位<el-button type="text">申请</el-button></li>
                    <li>xxx部门-职位<el-button type="text">申请</el-button></li>
                    <li>xxx部门-职位<el-button type="text">申请</el-button></li>
                </ul>
            </el-card>
        </el-row>
        <h4 style="margin-top: 70px">已挂职干部</h4>
        <hr style="color: #979797;margin-bottom: 30px" />
        <el-row>
            <el-card shadow="never" class="box-card-b">
                <div class="xingmu-t">
                    姓名<span style="margin-left: 60px">职位</span>
                </div>
                <ul>
                    <li>张子洁<span>xxx部门-职位</span></li>
                    <li>张子洁<span>xxx部门-职位</span></li>
                    <li>张子洁<span>xxx部门-职位</span></li>
                    <li>张子洁<span>xxx部门-职位</span></li>
                </ul>
            </el-card>
        </el-row>
    </section>
</template>

<script>
    export default {
        name: "",
        components: {},
        data() {
            return {}
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .gua-zhi-gan-bu-section{
        background: #fff;
        padding: 0 20px;
        .box-card-t{
            .el-card__body{
                padding: 0;
                .xingmu-t{
                    height: 53px;
                    background: #F0F1F4;
                    padding: 0 36px;
                    line-height: 53px;
                    font-size: 15px;
                }
                ul{
                    li{
                        padding: 20px 36px;
                        .el-button{margin-left: 50px;padding: 0}
                        &:nth-child(even){
                            background: #F0F1F4;
                        }
                    }

                }
            }
        }
        .box-card-b{
            .el-card__body{
                padding: 0;
                .xingmu-t{
                    height: 53px;
                    background: #F0F1F4;
                    padding: 0 36px;
                    line-height: 53px;
                    font-size: 15px;
                }
                ul{
                    li{
                        padding: 20px 36px;
                        span{margin-left: 50px;}
                        &:nth-child(even){
                            background: #F0F1F4;
                        }
                    }

                }
            }
        }
    }
    hr{
        margin-top:7px;
        *margin: 0;
        border: 0;
        color: #979797;
        background-color: #979797;
        height: 1px;
        opacity: 0.5;
    }
</style>
