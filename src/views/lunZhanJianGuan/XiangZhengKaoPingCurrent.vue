<template>
    <section class="xiang-zheng-kao-ping-current">
        <h4 class="mt20">本月考评</h4>
        <hr style="color: #979797"/>
        <el-row>
            <el-col :span="12" v-for="(o, index) in 5" :key="o" style="padding: 20px 15px">
                <el-card :body-style="{ padding: '0px' }">
                    <div style="padding: 15px 25px;">
                        <p class="current-t clear1">
                           张红本月考核
                            <router-link to="/home/lunZhanJianGuan/xiangZhengKaoPin/waitCheck"> <span class="fr"><i class="el-icon-more"></i></span></router-link>

                        </p>
                        <ul class="current-c clear1">
                            <li><i class="current-status"></i>教育</li>
                            <li><i class="current-status"></i>农技</li>
                            <li><i class="current-status"></i>法律</li>
                            <li><i class="current-status"></i>政治</li>
                        </ul>
                        <ul class="current-b">
                            <li>
                                <span class="current-b-l">L1</span>
                                <el-progress class="current-b-c" :percentage="80" :show-text="false" color="#76DDFB"></el-progress>
                                <span class="current-b-r">80分</span>
                            </li>
                            <li>
                                <span class="current-b-l">L2</span>
                                <el-progress class="current-b-c" :percentage="60" :show-text="false" color="#53A8E2"></el-progress>
                                <span class="current-b-r">60分</span>
                            </li>
                            <li>
                                <span class="current-b-l">L3</span>
                                <el-progress class="current-b-c" :percentage="90" :show-text="false" color="#CFE3F0"></el-progress>
                                <span class="current-b-r">90分</span>
                            </li>
                            <li>
                                <span class="current-b-l">L4</span>
                                <el-progress class="current-b-c" :percentage="70" :show-text="false" color="#2C82BE"></el-progress>
                                <span class="current-b-r">70分</span>
                            </li>
                        </ul>
                    </div>
                </el-card>
            </el-col>
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
    .xiang-zheng-kao-ping-current{
        background: #fff;
        .current-t{
            span{cursor: pointer}
        }
        .current-c{
            justify-content: flex-start;
            display: flex;
            margin-bottom: 33px;
            li{
                justify-content: flex-start;
                display: flex;
                margin-right: 25px;
                .current-status{
                    width:9px;
                    height:9px;
                    display: block;
                    margin: auto 6px;
                    border-radius: 50%;
                }
                &:nth-child(1) .current-status{background:#76DDFB;}
                &:nth-child(2) .current-status{background:#53A8E2;}
                &:nth-child(3) .current-status{background:#CFE3F0;}
                &:nth-child(4) .current-status{background:#2C82BE;}
            }
        }
        .current-b{
            li{
                justify-content: flex-start;display: flex;font-size: 12px;padding: 18px 0;border-top: 1px solid #E7EBEF;
              .current-b-l{width: 18px}
              .current-b-c{flex: 1;margin: auto}
              .current-b-r{width: 50px;padding-left: 10px}
               &:nth-child(4){border-bottom: 1px solid #E7EBEF;}
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
