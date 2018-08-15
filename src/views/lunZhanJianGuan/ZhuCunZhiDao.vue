<template>
    <section class="zhu-cun-zhi-dao-section">
        <el-row class="pt20">
            <el-col :span="4" class="ac">
                <img class="help-girl"  src="../../assets/imgs/helpGirl.png"/>
            </el-col>
            <el-col :span="18">
                <div class="help-t mt15">
                    <el-card class="box-card">
                        您好，我是在线小助手，请向我提问。
                    </el-card>
                </div>
                <div class="help-c1 help clear1">
                    <el-form :model="form1" class="demo-form-inline">
                        <el-input
                            type="textarea"
                            :rows="6"
                            placeholder="请输入你想说的话"
                            v-model="form1.question">
                        </el-input>
                        <el-form-item class="mt20 ar">
                            <el-button type="primary" @click="onSubmitFrom1">发送</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <p class="help" style="color:rgba(72,135,208,1);">没有满意的答案 ？在下方提交问题</p>
                <div class="help-c2 help clear1">
                    <el-form :model="form2" class="demo-form-inline">
                        <el-input
                            type="textarea"
                            :rows="6"
                            placeholder="请输入你想说的话"
                            v-model="form2.question">
                        </el-input>
                        <el-form-item class="mt20 ar">
                            <el-button type="primary" @click="onSubmitFrom2">发送</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <p class="help" style="color:rgba(72,135,208,1);">还没满意的答案？试试向专家提问吧…</p>
                <div class="mb20 hlep-b">
                    <el-col :span="7" v-for="(o, index) in 4" :key="o" class="mb15" >
                        <el-card :body-style="{ padding: '0px' }">
                            <div style="padding: 20px;">
                               <p>刘某某<span class="fr">xx专家</span></p>
                                <p>电话：13989870986</p>
                                <div class="ac">
                                    <el-button plain @click="questionToHe()">向他提问</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
	import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
		name: "zhu-cun-zhi-dao",
		components: {
            ElButton,
            ElCol,
            ElRow

        },
		data() {
			return {
                currentDate: new Date(),
			    form1:{
                    question:'',  //问题1
                },
                form2:{
                    question:'',  //问题2
                }
            }
		},
		methods: {
            onSubmitFrom1(){
                console.log('submit1!');
            },
            onSubmitFrom2(){
                console.log('submit2!');
            },
            questionToHe(){
                console.log('向用户提问')
            }
        }
	}
</script>

<style lang="scss" scoped>
    .zhu-cun-zhi-dao-section {
        background: #fff;
        padding: 0 20px;
        .help-girl{
            width: 60px;
        }
        .help{
            margin-top: 40px;
            .el-button{
                width: 160px;
            }
        }
        .hlep-b{
            display: flex;justify-content: space-between;flex-wrap:wrap;width: 100%
        }
    }
</style>
