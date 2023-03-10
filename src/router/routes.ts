import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },

      // {
      //   path: 'posts',
      //   component: () => import('pages/PostsPage.vue'),
      //   children: [
      //     {
      //       path: ':id',
      //       component: () => import('pages/PostPage.vue'),
      //     },
      //   ],
      // },

      {
        path: 'posts',
        component: () => import('pages/PostsPage.vue'),
      },
      {
        path: 'posts/:id',
        component: () => import('pages/PostPage.vue'),
      },

      {
        path: 'photos',
        component: () => import('pages/PhotosPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
