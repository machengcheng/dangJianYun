<template>
    <section class="gong-wen-jie-shou-section">
        <h4 class="mt20">待接收公文</h4>
        <hr style="color: #979797"/>
        <el-row class="mt20">
            <el-table
                :data="tableData1"
                class="gong-wen-table"
                border
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="公文"
                >
                </el-table-column>
            </el-table>
        </el-row>
        <h4 style="margin-top: 30px">正在进行公文列表</h4>
        <hr style="color: #979797"/>
        <el-row>
            <el-col :span="24">
                <span class="fl">办理反馈</span>
                <el-button type="text" @click="turnSend" class="p0 fr">转发</el-button>
            </el-col>
            <el-col :span="24" class="mt10">
                <el-form :model="form2" class="demo-form-inline">
                    <el-input
                        type="textarea"
                        :rows="6"
                        placeholder="请输入你想说的话"
                        v-model="form2.question">
                    </el-input>
                    <el-form-item class="mt15 clear1">
                        <el-button type="text" class="fl p5 al">电子签章</el-button>
                        <el-button type="primary" class="fr" style="width: 120px" size="small" @click="onSubmitFrom2">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <h4 class="mt20">历史公文</h4>
        <hr style="color: #979797"/>
        <el-row class="mt20">
            <el-table
                :data="tableData1"
                class="gong-wen-table"
                border
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="公文"
                >
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
                form2:{
                    question:'',
                },
                tableData1:[
                    {date:'县城东村马占祥非法转卖耕地为宅基地获利近百万 '},
                    {date:'县城东村马占祥非法转卖耕地为宅基地获利近百万 '},
                    {date:'县城东村马占祥非法转卖耕地为宅基地获利近百万 '},
                ],
            }
        },
        methods: {
            turnSend(){
                alert("转发")
            }
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .gong-wen-jie-shou-section {
        background: #fff;
        padding: 0 20px;
        .gong-wen-table{
            thead tr th{padding: 8px 0;background: #F0F1F4}
        }
    }
</style>
