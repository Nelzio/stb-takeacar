
const routes = [
  {
    path: '/',
    component: () => import('layouts/home/Base.vue'),
    children: [
      { path: '', component: () => import('pages/home/Index.vue') },
      { path: 'cars', component: () => import('pages/home/ListCars.vue') },
      { path: 'nocars', component: () => import('pages/home/ErrorList.vue') },
      { path: 'addclient', component: () => import('pages/home/AddUser.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
