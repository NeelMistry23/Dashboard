const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/DashboardPage.vue') },
      { path: '/users', component: () => import('src/pages/ChartPage.vue') },
      { path: '/analytics', component: () => import('src/pages/AnalyticsPage.vue') },
      
      { path: '/tables', component: () => import('src/pages/TablePage.vue') },
      { path: '/forms', component: () => import('src/pages/FormsPage.vue') },
      { path: '/footer', component: () => import('src/pages/FooterPage.vue') },
      { path: '/checkout', component: () => import('src/pages/CheckOutPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
