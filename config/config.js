// https://umijs.org/config/
import {defineConfig} from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const {REACT_APP_ENV} = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/dashboard/analysis',
            },
            // React Hooks学习
            {
              path: '/react/hooks/useState',
              name: 'useState学习',
              icon: 'dashboard',
              routes: [
                {
                  path: '/react/hooks/useState/demo01',
                  name: 'useState用法1',
                  component: './ReactHooks/UseStateDemos/demo01/App',
                },
                {
                  path: '/react/hooks/useState/demo02',
                  name: 'useState用法2',
                  component: './ReactHooks/UseStateDemos/demo02/App',
                },
                {
                  path: '/react/hooks/useState/demo03',
                  name: 'useState用法3',
                  component: './ReactHooks/UseStateDemos/demo03/App',
                },
                {
                  path: '/react/hooks/useState/demo04',
                  name: 'useState用法4',
                  component: './ReactHooks/UseStateDemos/demo04/App',
                },
                {
                  path: '/react/hooks/useState/demo05',
                  name: 'useState用法5',
                  component: './ReactHooks/UseStateDemos/demo05/App',
                },
              ],
            },
            {
              path: '/react/hooks/useEffect',
              name: 'useEffect学习',
              icon: 'dashboard',
              routes: [
                {
                  path: '/react/hooks/useEffect/demo01',
                  name: 'useEffect用法1',
                  component: './ReactHooks/useEffectDemos/demo01/App',
                },
                {
                  path: '/react/hooks/useEffect/demo02',
                  name: 'useEffect用法2',
                  component: './ReactHooks/useEffectDemos/demo02/App',
                },
                {
                  path: '/react/hooks/useEffect/demo03',
                  name: 'useEffect用法3',
                  component: './ReactHooks/useEffectDemos/demo03/App',
                },
                {
                  path: '/react/hooks/useEffect/demo04',
                  name: 'useEffect用法4',
                  component: './ReactHooks/useEffectDemos/demo04/App',
                },
                {
                  path: '/react/hooks/useEffect/demo05',
                  name: 'useEffect用法5',
                  component: './ReactHooks/useEffectDemos/demo05/App',
                },
                {
                  path: '/react/hooks/useEffect/demo06',
                  name: 'useEffect用法6',
                  component: './ReactHooks/useEffectDemos/demo06/App',
                },
                {
                  path: '/react/hooks/useEffect/demo76',
                  name: 'useEffect用法7',
                  component: './ReactHooks/useEffectDemos/demo07/App',
                },
              ],
            },
            // {
            //   path: '/dashboard',
            //   name: 'dashboard',
            //   icon: 'dashboard',
            //   routes: [
            //     {
            //       path: '/',
            //       redirect: '/dashboard/analysis',
            //     },
            //     {
            //       name: 'analysis',
            //       icon: 'smile',
            //       path: '/dashboard/analysis',
            //       component: './dashboard/analysis',
            //     },
            //     {
            //       name: 'monitor',
            //       icon: 'smile',
            //       path: '/dashboard/monitor',
            //       component: './dashboard/monitor',
            //     },
            //     {
            //       name: 'workplace',
            //       icon: 'smile',
            //       path: '/dashboard/workplace',
            //       component: './dashboard/workplace',
            //     },
            //   ],
            // },
            // {
            //   path: '/form',
            //   icon: 'form',
            //   name: 'form',
            //   routes: [
            //     {
            //       path: '/',
            //       redirect: '/form/basic-form',
            //     },
            //     {
            //       name: 'basic-form',
            //       icon: 'smile',
            //       path: '/form/basic-form',
            //       component: './form/basic-form',
            //     },
            //     {
            //       name: 'step-form',
            //       icon: 'smile',
            //       path: '/form/step-form',
            //       component: './form/step-form',
            //     },
            //     {
            //       name: 'advanced-form',
            //       icon: 'smile',
            //       path: '/form/advanced-form',
            //       component: './form/advanced-form',
            //     },
            //   ],
            // },
            // {
            //   path: '/list',
            //   icon: 'table',
            //   name: 'list',
            //   routes: [
            //     {
            //       path: '/list/search',
            //       name: 'search-list',
            //       component: './list/search',
            //       routes: [
            //         {
            //           path: '/list/search',
            //           redirect: '/list/search/articles',
            //         },
            //         {
            //           name: 'articles',
            //           icon: 'smile',
            //           path: '/list/search/articles',
            //           component: './list/search/articles',
            //         },
            //         {
            //           name: 'projects',
            //           icon: 'smile',
            //           path: '/list/search/projects',
            //           component: './list/search/projects',
            //         },
            //         {
            //           name: 'applications',
            //           icon: 'smile',
            //           path: '/list/search/applications',
            //           component: './list/search/applications',
            //         },
            //       ],
            //     },
            //     {
            //       path: '/',
            //       redirect: '/list/table-list',
            //     },
            //     {
            //       name: 'table-list',
            //       icon: 'smile',
            //       path: '/list/table-list',
            //       component: './list/table-list',
            //     },
            //     {
            //       name: 'basic-list',
            //       icon: 'smile',
            //       path: '/list/basic-list',
            //       component: './list/basic-list',
            //     },
            //     {
            //       name: 'card-list',
            //       icon: 'smile',
            //       path: '/list/card-list',
            //       component: './list/card-list',
            //     },
            //   ],
            // },
            // {
            //   path: '/profile',
            //   name: 'profile',
            //   icon: 'profile',
            //   routes: [
            //     {
            //       path: '/',
            //       redirect: '/profile/basic',
            //     },
            //     {
            //       name: 'basic',
            //       icon: 'smile',
            //       path: '/profile/basic',
            //       component: './profile/basic',
            //     },
            //     {
            //       name: 'advanced',
            //       icon: 'smile',
            //       path: '/profile/advanced',
            //       component: './profile/advanced',
            //     },
            //   ],
            // },
            // {
            //   name: 'result',
            //   icon: 'CheckCircleOutlined',
            //   path: '/result',
            //   routes: [
            //     {
            //       path: '/',
            //       redirect: '/result/success',
            //     },
            //     {
            //       name: 'success',
            //       icon: 'smile',
            //       path: '/result/success',
            //       component: './result/success',
            //     },
            //     {
            //       name: 'fail',
            //       icon: 'smile',
            //       path: '/result/fail',
            //       component: './result/fail',
            //     },
            //   ],
            // },
            // {
            //   name: 'exception',
            //   icon: 'warning',
            //   path: '/exception',
            //   routes: [
            //     {
            //       path: '/',
            //       redirect: '/exception/403',
            //     },
            //     {
            //       name: '403',
            //       icon: 'smile',
            //       path: '/exception/403',
            //       component: './exception/403',
            //     },
            //     {
            //       name: '404',
            //       icon: 'smile',
            //       path: '/exception/404',
            //       component: './exception/404',
            //     },
            //     {
            //       name: '500',
            //       icon: 'smile',
            //       path: '/exception/500',
            //       component: './exception/500',
            //     },
            //   ],
            // },
            // {
            //   name: 'account',
            //   icon: 'user',
            //   path: '/account',
            //   routes: [
            //     {
            //       path: '/',
            //       redirect: '/account/center',
            //     },
            //     {
            //       name: 'center',
            //       icon: 'smile',
            //       path: '/account/center',
            //       component: './account/center',
            //     },
            //     {
            //       name: 'settings',
            //       icon: 'smile',
            //       path: '/account/settings',
            //       component: './account/settings',
            //     },
            //   ],
            // },
            // {
            //   name: 'editor',
            //   icon: 'highlight',
            //   path: '/editor',
            //   routes: [
            //     {
            //       path: '/',
            //       redirect: '/editor/flow',
            //     },
            //     {
            //       name: 'flow',
            //       icon: 'smile',
            //       path: '/editor/flow',
            //       component: './editor/flow',
            //     },
            //     {
            //       name: 'mind',
            //       icon: 'smile',
            //       path: '/editor/mind',
            //       component: './editor/mind',
            //     },
            //     {
            //       name: 'koni',
            //       icon: 'smile',
            //       path: '/editor/koni',
            //       component: './editor/koni',
            //     },
            //   ],
            // },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  exportStatic: {},
  esbuild: {},
});
