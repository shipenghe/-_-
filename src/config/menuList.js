const menuList = [
  {
    title: '科室一览',
    key: '/display',
    icon: 'pie-chart'
  },
  {
    title: '预约选座',
    key: '_seat',
    icon: 'pie-chart',
    children: [
      {
        title: '楼层一',
        key: '/floor1',
        icon: 'pie-chart',
        children: [
          {
            title: '理科阅览室',
            key: '/science',
            icon: 'pie-chart'
          },
          {
            title: '工科阅览室',
            key: '/engineering',
            icon: 'pie-chart'
          },
          {
            title: '零点书房',
            key: '/zero',
            icon: 'pie-chart'
          }
        ]
      },
      {
        title: '楼层二',
        key: '/floor2',
        icon: 'pie-chart',
        children: [
          {
            title: '综合阅览室(二)',
            key: '/compre2',
            icon: 'pie-chart'
          },
          {
            title: '报刊阅览室',
            key: '/press',
            icon: 'pie-chart'
          }
        ]
      },
      {
        title: '楼层三',
        key: '/floor3',
        icon: 'pie-chart',
        children: [
          {
            title: '综合阅览室(一)',
            key: '/compre1',
            icon: 'pie-chart'
          },
          {
            title: '文史借阅室',
            key: '/literary',
            icon: 'pie-chart'
          }
        ]
      },
      {
        title: '楼层四',
        key: '/floor4',
        icon: 'pie-chart',
        children: [
          {
            title: '外文借阅室',
            key: '/foreign',
            icon: 'pie-chart'
          },
          {
            title: '社科借阅室',
            key: '/social',
            icon: 'pie-chart'
          }
        ]
      },
      {
        title: '信息共享空间',
        key: '/info',
        icon: 'pie-chart'
      },
    ]
  },
  {
    title: '我的预约',
    key: '_my',
    icon: 'pie-chart',
    children: [
      {
        title: '已预约',
        key: '/done',
        icon: 'pie-chart'
      },
      {
        title: '预约历史',
        key: '/history',
        icon: 'pie-chart'
      },
      {
        title: '违约记录',
        key: '/record',
        icon: 'pie-chart'
      }
    ]
  },
  {
    title: '预约情况',
    key: '_state',
    icon: 'pie-chart'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'pie-chart'
  },
  {
    title: '用户管理',
    key: '/user',
    icon: 'pie-chart'
  },
  {
    title: '展览管理',
    key: '_mngdisplay',
    icon: 'pie-chart',
    children: [
      {
        title: '图片展览',
        key: '/image',
        icon: 'pie-chart'
      },
      {
        title: '通知展览',
        key: '/message',
        icon: 'pie-chart'
      },
      {
        title: '名言展览',
        key: '/saying',
        icon: 'pie-chart'
      }
    ]
  },
  // {
  //   title: '消息管理',
  //   key: '_message',
  //   icon: 'pie-chart',
  //   children: [
  //     {
  //       title: '欢迎消息',
  //       key: '/welcome',
  //       icon: 'pie-chart'
  //     },
  //     {
  //       title: '名言消息',
  //       key: '/saying',
  //       icon: 'pie-chart'
  //     }
  //   ]
  // },
]
export default menuList