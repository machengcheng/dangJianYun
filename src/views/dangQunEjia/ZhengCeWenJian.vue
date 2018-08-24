
<template>
    <section class="zheng-ce-wen-jian-section">
        <h4 style="margin-top: 0">政策文件</h4>
        <hr/>
        <el-row class="news-list">
            <el-col :span="22" :key="item.id" v-for="item in newsList" >
                <i class="el-icon-caret-right" style="color: #E30000"></i>
                <span class="new-title" @click=getNews(item.id)>{{item.title}}</span>
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
                        title:'宅基地资源不处理事 ',
                        date:'[10-23]'
                    },
                    {
                        id:2,
                        title:'宅基地资源不处理事 ',
                        date:'[10-24]'
                    },
                    {
                        id:3,
                        title:'【水城县】水城县公安局人才招聘公告',
                        date:'[10-25]'
                    },
                    {
                        id:4,
                        title:'【水城县】水城县公安局人才招聘公告',
                        date:'[10-26]'
                    }
                ]
            }
        },
        methods: {
            getNews(id){
                console.log(1)
                this.$router.push({path:'/home/eHome/news',query:{'id':id}})
            }
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .zheng-ce-wen-jian-section{
        background: #fff;
        padding: 0 20px;
        .news-list{
            line-height: 45px;
            cursor: pointer;
        }
    }
</style>
