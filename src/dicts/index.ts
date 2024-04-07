export const routerList = [
  {
    path: '/',
    name: 'Layout',
    component: 'Layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: 'home/index.vue',
        meta: { hidden: false, title: '首页', icon: 'FileTextOutlined' }
      },
      {
        path: '/about',
        name: 'about',
        component: 'about/aboutList/index.vue',
        meta: { hidden: false, title: 'about页', icon: '' },
        children: [
          {
            path: '/one',
            name: 'aboutOne',
            component: 'about/aboutOne/index.vue',
            meta: { hidden: false, title: 'aboutOne页', icon: '' }
          },
          {
            path: '/tow',
            name: 'aboutTow',
            component: 'about/aboutTow/index.vue',
            meta: { hidden: false, title: 'aboutTow页', icon: '' },
            children: [
              {
                path: '/sss',
                name: 'sss',
                component: 'about/aboutsss/index.vue',
                meta: { hidden: false, title: 'aboutsss页', icon: '' }
              },
            ]
          }
        ]
      }
    ]
  }
];
