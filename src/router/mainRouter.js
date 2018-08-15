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
