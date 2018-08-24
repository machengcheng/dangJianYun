export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: '首页',
        component: resolve => require (['views/home/PageHome.vue'], resolve),
        meta: {
          title: '首页'
        },
        redirect: '/pageHomeDefault',
        hidden: true,
        children: [
            {
                path: 'pageHomeDefault',
                name: '默认首页',
                component: resolve => require(['views/home/PageHomeDefault.vue'], resolve),
                meta: {
                    title: '默认首页'
                }
            },
            // {
            //     path: 'worktable',
            //     name: '工作台',
            //     component: resolve => require(['views/home/Worktable.vue'], resolve),
            //     meta: {
            //         title: '工作台'
            //     },
            //     redirect: '/worktableDefault',
            //     hidden: true,
            //     children: [
            //         {
            //             path: '/worktableDefault',
            //             name: '工作台-默认页面',
            //             component: resolve => require(['views/home/WorktableDefault.vue'], resolve),
            //             meta: {
            //                 title: '工作台-默认页面'
            //             }
            //         }
            //     ]
            // },
            {
                path: 'lunZhanJianGuan',
                name: '轮战监管',
                component: resolve => require(['views/lunZhanJianGuan/LunZhanJianGuan.vue'], resolve),
                meta: {
                    title: '轮战监管'
                },
                redirect: '/attendanceRecord',
                hidden: true,
                children: [
                    {
                        path: '/attendanceRecord',
                        name: '轮战监管-考勤管理 ',
                        component: resolve => require(['views/lunZhanJianGuan/AttendanceRecord.vue'], resolve),
                        meta: {
                            title: '我的工作-考勤管理'
                        }
                    },
                    {
                        path: 'acceptTask',
                        name: '轮战监管-(任务调度-接收任务)',
                        component: resolve => require(['views/lunZhanJianGuan/AcceptTask.vue'], resolve),
                        meta: {
                            title: '轮战监管-(任务调度-接收任务)'
                        }
                    },
                    {
                        path: 'issueTask',
                        name: '轮战监管-(任务调度-下发任务)',
                        component: resolve => require(['views/lunZhanJianGuan/IssueTask.vue'], resolve),
                        meta: {
                            title: '轮战监管-(任务调度-下发任务)'
                        }
                    },
                    {
                        path: 'taskRelease',
                        name: '轮战监管-(任务调度-任务发布)',
                        component: resolve => require(['views/lunZhanJianGuan/TaskRelease.vue'], resolve),
                        meta: {
                            title: '轮战监管-(任务调度-任务发布)'
                        }
                    },
                    {
                        path: 'lunZhanJianGuanDefault',
                        name: '轮战监管-默认页面',
                        component: resolve => require(['views/lunZhanJianGuan/LunZhanJianGuanDefault.vue'], resolve),
                        meta: {
                            title: '轮战监管-默认页面'
                        }
                    },
                    {
                        path: 'xiangZhengKaoPin',
                        name: '轮战监管-乡镇考评打分 ',
                        component: resolve => require(['views/lunZhanJianGuan/XiangZhengKaoPin.vue'], resolve),
                        meta: {
                            title: '我的工作-乡镇考评打分'
                        },
                        redirect: '/home/lunZhanJianGuan/xiangZhengKaoPin/currentCheck',
                        children:[
                            {
                                path: 'currentCheck',
                                name: '轮战监管-本月考评 ',
                                component: resolve => require(['views/lunZhanJianGuan/XiangZhengKaoPingCurrent.vue'], resolve),
                                meta: {
                                    title: '我的工作-本月考评'
                                },
                            },
                            {
                                path: 'waitCheck',
                                name: '轮战监管-待评分标题 ',
                                component: resolve => require(['views/lunZhanJianGuan/XiangZhengKaoPingWait.vue'], resolve),
                                meta: {
                                    title: '我的工作-待评分标题'
                                },
                            },
                        ]
                    },
                    {
                        path: 'xieZuoHuzhu',
                        name: '轮战监管-协作互助 ',
                        component: resolve => require(['views/lunZhanJianGuan/XieZuoHuZhu.vue'], resolve),
                        meta: {
                            title: '我的工作-协作互助'
                        }
                    },
                    {
                        path: 'zhuCunZhiDao',
                        name: '轮战监管-驻村指导 ',
                        component: resolve => require(['views/lunZhanJianGuan/ZhuCunZhiDao.vue'], resolve),
                        meta: {
                            title: '我的工作-驻村指导'
                        }
                    }
                ]
            },
            {
                path: 'renCaiZhiTong',
                name: '人才直通车',
                component: resolve => require(['views/renCaiZhiTong/RenCaiZhiTong.vue'], resolve),
                meta: {
                    title: '人才直通车'
                },
                redirect: '/renCaiGongGao',
                hidden: true,
                children: [
                    {
                        path: '/renCaiGongGao',
                        name: '人才直通-公告 ',
                        component: resolve => require(['views/renCaiZhiTong/RenCaiGongGao.vue'], resolve),
                        meta: {
                            title: '人才直通-公告'
                        }
                    },
                    {
                        path: 'zhengCe',
                        name: '人才直通-政策 ',
                        component: resolve => require(['views/renCaiZhiTong/RenCaiZhengCe.vue'], resolve),
                        meta: {
                            title: '人才直通-政策'
                        }
                    },
                    {
                        path: 'suQiu',
                        name: '人才直通-诉求 ',
                        component: resolve => require(['views/renCaiZhiTong/RenCaiSuQiu.vue'], resolve),
                        meta: {
                            title: '人才直通-诉求'
                        }
                    },
                    {
                        path: 'xiangMuShengBao',
                        name: '人才直通-项目申报 ',
                        component: resolve => require(['views/renCaiZhiTong/XiangMuShengBao.vue'], resolve),
                        meta: {
                            title: '人才直通-项目申报'
                        }
                    },
                    {
                        path: 'guaZhiGanBu',
                        name: '人才直通-挂职信息 ',
                        component: resolve => require(['views/renCaiZhiTong/GuaZhiGanBu.vue'], resolve),
                        meta: {
                            title: '人才直通-挂职信息'
                        }
                    },
                ]
            },
            {
                path: 'eHome',
                name: '党群E家',
                component: resolve => require(['views/dangQunEjia/Index.vue'], resolve),
                meta: {
                    title: '党群E家'
                },
                redirect: '/policyFile',
                hidden: true,
                children: [
                    {
                        path: '/policyFile',
                        name: '党群E家-政策文件 ',
                        component: resolve => require(['views/dangQunEjia/ZhengCeWenJian.vue'], resolve),
                        meta: {
                            title: '党群E家-政策文件'
                        }
                    },
                    {
                        path: 'groupDemand',
                        name: '党群E家-群众需求 ',
                        component: resolve => require(['views/dangQunEjia/QunZhongXuQiu.vue'], resolve),
                        meta: {
                            title: '党群E家-群众需求'
                        }
                    },
                    {
                        path: 'suggest',
                        name: '党群E家-意见建议 ',
                        component: resolve => require(['views/dangQunEjia/YiJianJianYi.vue'], resolve),
                        meta: {
                            title: '党群E家-意见建议'
                        }
                    },
                    {
                        path: 'report',
                        name: '党群E家-12380举报 ',
                        component: resolve => require(['views/dangQunEjia/Jubao.vue'], resolve),
                        meta: {
                            title: '党群E家-12380举报'
                        }
                    },
                    {
                        path: 'voteManger',
                        name: '党群E家-投票管理 ',
                        component: resolve => require(['views/dangQunEjia/TouPiaoGuanLi.vue'], resolve),
                        meta: {
                            title: '党群E家-投票管理'
                        }
                    },
                    {
                        path: 'pageSurver',
                        name: '党群E家-问卷调查 ',
                        component: resolve => require(['views/dangQunEjia/WenJuanDiaoCha.vue'], resolve),
                        meta: {
                            title: '党群E家-问卷调查'
                        }
                    },
                    {
                        path: 'peopleCamera',
                        name: '党群E家-党员随手拍 ',
                        component: resolve => require(['views/dangQunEjia/DangYuanSuiPai.vue'], resolve),
                        meta: {
                            title: '党群E家-党员随手拍'
                        }
                    },
                    {
                        path: 'liveAnswer',
                        name: '党群E家-在线答疑',
                        component: resolve => require(['views/dangQunEjia/ZaiXianDaYi.vue'], resolve),
                        meta: {
                            title: '党群E家-在线答疑'
                        }
                    },
                    {
                        path: 'proplePipe',
                        name: '党群E家-民生通道',
                        component: resolve => require(['views/dangQunEjia/MingShengTongDao.vue'], resolve),
                        meta: {
                            title: '党群E家-民生通道'
                        }
                    },
                    {
                        path: 'groupLife',
                        name: '党群E家-三会一课',
                        component: resolve => require(['views/dangQunEjia/ZuZhiShengHuo.vue'], resolve),
                        meta: {
                            title: '党群E家-三会一课'
                        }
                    },
                    {
                        path: 'activeZuZhi',
                        name: '党群E家-活动组织',
                        component: resolve => require(['views/dangQunEjia/HuoDongZuZhi.vue'], resolve),
                        meta: {
                            title: '党群E家-活动组织'
                        }
                    },
                    {
                        path: 'activeFaQi',
                        name: '党群E家-活动发起',
                        component: resolve => require(['views/dangQunEjia/HuoDongFaQi.vue'], resolve),
                        meta: {
                            title: '党群E家-活动发起'
                        }
                    },
                    {
                        path: 'activeTiJiao',
                        name: '党群E家-活动提交',
                        component: resolve => require(['views/dangQunEjia/HuoDongTiJiao.vue'], resolve),
                        meta: {
                            title: '党群E家-活动提交'
                        }
                    },
                    {
                        path: 'remoteSupervise',
                        name: '党群E家-远程监督',
                        component: resolve => require(['views/dangQunEjia/YuanChengJianDu.vue'], resolve),
                        meta: {
                            title: '党群E家-远程监督'
                        }
                    },
                    {
                        path: 'news',
                        name: '党群E家-详情',
                        component: resolve => require(['views/dangQunEjia/EHomeNews.vue'], resolve),
                        meta: {
                            title: '党群E家-详情'
                        }
                    },
                ]
            },
            {
                path: 'zhiNeng',
                name: '智能调度台',
                component: resolve => require(['views/zhiNengDiaoDu/Index.vue'], resolve),
                meta: {
                    title: '智能调度台'
                },
                redirect: '/gongZuoDiaoDu',
                hidden: true,
                children: [
                    {
                        path: '/gongZuoDiaoDu',
                        name: '智能调度台-工作调度 ',
                        component: resolve => require(['views/zhiNengDiaoDu/GongZuoDiaoDu.vue'], resolve),
                        meta: {
                            title: '智能调度台-工作调度'
                        }
                    },
                    {
                        path: 'GongWenJieShou',
                        name: '智能调度台-公文接收 ',
                        component: resolve => require(['views/zhiNengDiaoDu/GongWenJieShou.vue'], resolve),
                        meta: {
                            title: '智能调度台-公文接收'
                        }
                    },
                    {
                        path: 'GongWenXiaFa',
                        name: '智能调度台-公文下发 ',
                        component: resolve => require(['views/zhiNengDiaoDu/GongWenXiaFa.vue'], resolve),
                        meta: {
                            title: '智能调度台-公文下发'
                        }
                    },
                    {
                        path: 'XiaFaGongWen',
                        name: '智能调度台-下发公文 ',
                        component: resolve => require(['views/zhiNengDiaoDu/XiaFaGongWen.vue'], resolve),
                        meta: {
                            title: '智能调度台-下发公文'
                        }
                    },
                    {
                        path: 'baoBiaoJieShou',
                        name: '智能调度台-报表接收 ',
                        component: resolve => require(['views/zhiNengDiaoDu/BaoBiaoJieShou.vue'], resolve),
                        meta: {
                            title: '智能调度台-报表接收'
                        }
                    },
                    {
                        path: 'baoBiaoXiaFa',
                        name: '智能调度台-报表下发 ',
                        component: resolve => require(['views/zhiNengDiaoDu/BaoBiaoXiaFa.vue'], resolve),
                        meta: {
                            title: '智能调度台-报表下发'
                        }
                    },
                    {
                        path: 'xiaFaBaoBiao',
                        name: '智能调度台-下发报表',
                        component: resolve => require(['views/zhiNengDiaoDu/XiaFaBaoBiao.vue'], resolve),
                        meta: {
                            title: '智能调度台-下发报表'
                        }
                    },
                    {
                        path: 'huiYiFaQi',
                        name: '智能调度台-会议发起 ',
                        component: resolve => require(['views/zhiNengDiaoDu/HuiYiFaQi.vue'], resolve),
                        meta: {
                            title: '智能调度台-会议发起'
                        }
                    },
                    {
                        path: 'huiYiJiaRu',
                        name: '智能调度台-会议加入 ',
                        component: resolve => require(['views/zhiNengDiaoDu/huiYiJiaRu.vue'], resolve),
                        meta: {
                            title: '智能调度台-会议加入'
                        }
                    },
                ]
            }
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: resolve => require (['views/login/Login.vue'], resolve),
	    meta: {
		    title: '上海电信标签平台-登录页面'
	    }
    },
    {
        path: '*',
        redirect: '/'
    }
]
