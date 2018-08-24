
<template>
    <section class="ming-sheng-tong-dao-section">
        <h4 style="margin-top: 0">民生通道</h4>
        <hr/>
        <el-row class="ming-sheng-t">
            <p style="margin-bottom: 0">政务中心与网站入口</p>
            <ul class="ming-sheng-link">
                <li>六盘水省xxxx<span @click="jumpTarget">www.baidu.com</span></li>
                <li>六盘水市xxxx<span @click="jumpTarget">www.baidu.com</span></li>
                <li>六盘水县xxxx<span @click="jumpTarget">www.baidu.com</span></li>
            </ul>
        </el-row>
        <h4 style="margin-top: 30px">工作人员列表</h4>
        <hr/>
        <el-row class="mt20 ming-sheng-b">
            <el-table
                :data="tableData2"
                class="dang-yuan-table"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="msg"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="200px"
                >
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="电话"
                >
                </el-table-column>
            </el-table>
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
                tableData2:[
                    {msg:'xxxx记录 ',status:0,date:'2018/7/22',name:'李霞'},
                    {msg:'xxxx记录 ',status:1,date:'2018/7/22',name:'李霞'},
                    {msg:'xxxx记录 ',status:0,date:'2018/7/22',name:'李霞'},
                ]
            }
        },
        methods: {
            jumpTarget(){
                window.open("https://www.baidu.com","_blank")
            }
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .ming-sheng-tong-dao-section{
        background: #fff;
        padding: 0 20px;
        .ming-sheng-link{
            line-height: 50px;color: #4887D0;
            li{
                span{margin-left: 80px;cursor: pointer}
            }
        }
        .ming-sheng-b{
            thead tr th{padding: 8px 0;background: #F0F1F4}
        }
    }
</style>
