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
        meta: { title: '首页' }
      },
      {
        path: '/about',
        name: 'about',
        component: 'about/index.vue',
        meta: { title: 'about' }
      }
    ]
  }
];
