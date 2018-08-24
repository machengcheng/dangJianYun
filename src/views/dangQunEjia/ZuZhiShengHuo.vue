
<template>
    <section class="zu-zhi-sheng-huo-section">
        <h4 style="margin-top: 0">三会一课</h4>
        <hr/>
        <el-row class="zu-zhi-t mt20">
            <el-col :span="6" v-for="(item, index) in cardData" :key="index" style="padding-right: 30px">
                <el-card class="box-card">
                    <div slot="header" class="box-card-t" :style="{ background: item.color}">
                        <span style="padding: 0 10px">{{item.title}}</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="box-card-b" >
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <h4 style="margin-top: 30px">历史三会一课开展记录</h4>
        <hr/>
        <el-row style="margin-top: 30px">
            <el-table
                :data="tableData2"
                class="zu-zhi-table"
                stripe
                style="width: 100%">
                <el-table-column
                    label="部门"
                    prop="deparment"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    label="记录"
                    prop="msg"
                >
                </el-table-column>
            </el-table>
        </el-row>
    </section>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";

    export default {
        name: "",
        components: {
            ElCol,
            ElRow},
        data() {
            return {
                cardData:[
                    {title:'开展预警情况',color:'#E96373'},
                    {title:'开展预警情况',color:'#F5A623'},
                    {title:'开展预警情况',color:'#26B9C0'},
                ],
                tableData2:[
                    {deparment:'行政部门 ',status:0,msg:'***的内涵'},
                    {deparment:'行政部门 ',status:0,msg:'***的内涵'},
                    {deparment:'行政部门 ',status:0,msg:'***的内涵'},
                ]
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .zu-zhi-sheng-huo-section{
        background: #fff;
        padding: 0 20px;
        .zu-zhi-t{
            .box-card{
                .el-card__header{
                    height: 25px;
                    line-height: 25px;
                    padding: 0;
                    color: #ffffff;
                }
                .el-card__body{
                    padding: 10px;
                }
                border-radius: 0;
            }
        }
        .zu-zhi-table{
            thead tr th{padding: 8px 0;background: #F0F1F4}
        }
    }
</style>
