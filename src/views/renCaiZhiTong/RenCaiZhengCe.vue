<template>
    <section class="ren-cai-zheng-ce-section">
        <h4 style="margin-top: 0">人才政策</h4>
        <hr style="color: #979797;margin-bottom: 30px" />
        <el-row class="news-list">
            <el-col :span="22" :key="item.id" v-for="item in newsList">
                <i class="el-icon-caret-right" style="color: #E30000"></i>
                <span class="new-title">{{item.title}}</span>
                <span class="new-date fr">{{item.date}}</span>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    export default {
        name: "",
        components: {},
        data() {
            return {
                newsList:[
                    {
                        id:1,
                        title:'【水城县】水城县人才政策最新发布',
                        date:'[10-23]'
                    },
                    {
                        id:2,
                        title:'【水城县】水城县人才政策最新发布',
                        date:'[10-24]'
                    },
                    {
                        id:3,
                        title:'【水城县】水城县人才政策最新发布',
                        date:'[10-25]'
                    },
                    {
                        id:4,
                        title:'【水城县】水城县人才政策最新发布',
                        date:'[10-26]'
                    }
                ]
            }
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
.ren-cai-zheng-ce-section{
    background: #fff;
    padding: 0 20px;
    .news-list{
        line-height: 50px;
        cursor: pointer;
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
