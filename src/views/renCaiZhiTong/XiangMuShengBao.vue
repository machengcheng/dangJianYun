<template>
    <section class="xiang-mu-sheng-bao-section">
        <h4 style="margin-top: 0">项目申报</h4>
        <hr style="color: #979797;margin-bottom: 30px" />
        <el-row>
            <el-card shadow="never" class="box-card">
                <div class="xingmu-t">
                    项目
                </div>
                <ul>
                    <li>县城东村马占祥非法转卖耕地为宅基地项目<i class="el-icon-upload2"></i></li>
                    <li>县城东村马占祥非法转卖耕地为宅基地项目<i class="el-icon-upload2"></i></li>
                    <li>县城东村马占祥非法转卖耕地为宅基地项目<i class="el-icon-upload2"></i></li>
                    <li>县城东村马占祥非法转卖耕地为宅基地项目<i class="el-icon-upload2"></i></li>
                    <li>县城东村马占祥非法转卖耕地为宅基地项目<i class="el-icon-upload2"></i></li>
                </ul>
            </el-card>
        </el-row>
    </section>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
        name: "",
        components: {ElRow},
        data() {
            return {
                tableData: [{
                    id: '2016-05-02',
                    title: '县城东村马占祥非法转卖耕地为宅基地项目'
                },{
                    id: '2016-05-02',
                    title: '县城东村马占祥非法转卖耕地为宅基地项目'
                },{
                    id: '2016-05-02',
                    title: '县城东村马占祥非法转卖耕地为宅基地项目'
                },{
                    id: '2016-05-02',
                    title: '县城东村马占祥非法转卖耕地为宅基地项目'
                },]
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .xiang-mu-sheng-bao-section{
        background: #fff;
        padding: 0 20px;
        .box-card{
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
                        i{margin-left: 50px;font-size: 20px}
                        &:nth-child(even){
                            background: #F0F1F4;
                        }
                        i:hover {color: #3FA5F1;cursor: pointer}
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
