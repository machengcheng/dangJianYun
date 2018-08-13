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
                        path: 'zhuCunZhiDao',
                        name: '轮战监管-驻村指导 ',
                        component: resolve => require(['views/lunZhanJianGuan/ZhuCunZhiDao.vue'], resolve),
                        meta: {
                            title: '我的工作-驻村指导'
                        }
                    }
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
