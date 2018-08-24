
<template>
    <section class="ju-bao-section">
        <h4 style="margin-top: 0">12380举报</h4>
        <hr/>
        <el-row class="ju-bao-t-1 ac mt15" style="width: 100%;height: 385px;background: #FAFBFC;border:1px solid rgba(216,229,238,1);">
            表模板
        </el-row>
        <el-row class="ju-bao-t-2">
            <span>编号：94938-489686-595</span>
            <span>唯一编号可用于查询需求办理情况</span>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-input
                    placeholder="搜索编号或个人身份证"
                    size="small"
                    v-model="input23">
                    <i slot="prefix" style="cursor: pointer" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-col>
        </el-row>
        <el-row class="ju-bao--c ac mt15" style="width: 100%;height: 385px;background: #FAFBFC;border:1px solid rgba(216,229,238,1);">
            表模板
        </el-row>
    </section>
</template>


<script>
    export default {
        name: "",
        components: {},
        data() {
            return {
                input23:'',
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .ju-bao-section{
        background: #fff;
        padding: 0 20px;
        .ju-bao-t-2{
            height: 30px;
            line-height: 30px;
            width: 100%;
            background: #FAFBFC;
            border:1px solid rgba(216,229,238,1);
            padding: 0 21px;
            span:nth-child(1){float: left;color: #4887D0}
            span:nth-child(2){float: right;color: #E30000}
            margin: 20px 0 30px 0;
        }
    }
</style>
