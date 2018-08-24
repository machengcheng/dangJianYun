<template>
    <section class="hui-yi-fa-qi-section">
        <h4 class="mt20">视频会议</h4>
        <hr style="color: #979797"/>
        <el-row style="margin-top: 30px">
            <el-col :span="6" style="margin-right: 40px">
                <el-dropdown placement="bottom-start">
                    <span class="el-dropdown-link" style="cursor: pointer;color: #4887D0">
                    视频会议列表<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>xxxxx会议 <el-button type="text" style="margin-left: 30px">申请加入</el-button></el-dropdown-item>
                        <el-dropdown-item>xxxxx会议 <el-button type="text" style="margin-left: 30px">申请加入</el-button></el-dropdown-item>
                        <el-dropdown-item>xxxxx会议 <el-button type="text" style="margin-left: 30px">申请加入</el-button></el-dropdown-item>
                        <el-dropdown-item>xxxxx会议 <el-button type="text" style="margin-left: 30px">申请加入</el-button></el-dropdown-item>
                        <el-dropdown-item>xxxxx会议 <el-button type="text" style="margin-left: 30px">申请加入</el-button></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
            <el-col :span="15">
                <div class="hui-yi-shiping">
                    <div class="shiping-center">

                    </div>
                    <p class="shiping-center-b ac" style="margin-bottom: 0">
                        <span class="fl">党章党规会议</span>
                        <span style="color: rgba(94,105,119,1)">主持人：张磊</span>
                        <span class="fr" style="color: #E30000">未开播</span>
                    </p>
                </div>
            </el-col>
        </el-row>
        <h4 class="mt20">历史视频会议列表</h4>
        <hr style="color: #979797"/>
        <el-row class="mb20">
            <el-table
                :data="tableData2"
                class="hui-yi"
                stripe
                style="width: 100%">
                <el-table-column
                    label="历史视频会议"
                >
                    <template slot-scope="scope">
                        {{scope.row.msg}}
                        <el-tag
                            type="success"
                            size="small"
                            v-if="scope.row.status === 0"
                            disable-transitions>已参加</el-tag>
                        <el-tag
                            type="info"
                            size="small"
                            v-else-if="scope.row.status === 1"
                            disable-transitions>未参加</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200px"
                >
                    <template slot-scope="scope">
                        <el-button type="text" class="p0">发起会议</el-button>
                        <el-button type="text" class="p0"npm>党组织架构</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </section>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        name: "",
        components: {
            ElButton,
            ElCol,
            ElRow},
        data() {
            return {
                tableData2:[
                    {msg:'县城东村马占祥非法转卖耕地为宅基地获利近百万 ',status:0,date:'2018/7/22'},
                    {msg:'县城东村马占祥非法转卖耕地为宅基地获利近百万 ',status:1,date:'2018/7/22'},
                    {msg:'县城东村马占祥非法转卖耕地为宅基地获利近百万 ',status:0,date:'2018/7/22'},
                ]
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .hui-yi-fa-qi-section {
        background: #fff;
        padding: 0 20px;
        .hui-yi-shiping{
             background: #D8D8D8;margin-top: 30px;padding: 38px;padding-bottom: 20px;
            .shiping-center{
                width:100%;
                height:280px;
                background:rgba(74,74,74,1);
                opacity:0.8744;
            }
        }
        .hui-yi{
            thead tr th{padding: 8px 0;background: #F0F1F4}
            .el-tag{margin-left: 15px}
        }
    }
</style>
