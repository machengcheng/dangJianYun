<template>
    <div class="e-home-news">
        <h3 style="margin-top: 0" class="ac">新闻标题</h3>
        <hr/>
        新闻详情{{id}}
    </div>
</template>

<script>
    export default {
        name: "",
        components: {},
        data() {
            return {
                id:'',
            }
        },
        methods: {},
        mounted: function () {
            this.id=this.$route.query.id
        }
    }
</script>

<style lang="scss">
.e-home-news{
    background: #fff;
    padding: 0 20px;
}
</style>
