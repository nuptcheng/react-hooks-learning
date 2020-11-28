// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/becomebamboo/source/my-front-study/react-hooks-learning/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "login",
            "icon": "smile",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/user/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/index.html",
            "redirect": "/dashboard/analysis",
            "exact": true
          },
          {
            "path": "/",
            "redirect": "/dashboard/analysis",
            "exact": true
          },
          {
            "path": "/react/hooks/useState",
            "name": "useState学习",
            "icon": "dashboard",
            "routes": [
              {
                "path": "/react/hooks/useState/demo01",
                "name": "useState用法1",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__UseStateDemos__demo01__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/UseStateDemos/demo01/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useState/demo02",
                "name": "useState用法2",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__UseStateDemos__demo02__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/UseStateDemos/demo02/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useState/demo03",
                "name": "useState用法3",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__UseStateDemos__demo03__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/UseStateDemos/demo03/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useState/demo04",
                "name": "useState用法4",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__UseStateDemos__demo04__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/UseStateDemos/demo04/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useState/demo05",
                "name": "useState用法5",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__UseStateDemos__demo05__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/UseStateDemos/demo05/App'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/react/hooks/useEffect",
            "name": "useEffect学习",
            "icon": "dashboard",
            "routes": [
              {
                "path": "/react/hooks/useEffect/demo01",
                "name": "useEffect用法1",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__useEffectDemos__demo01__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/useEffectDemos/demo01/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useEffect/demo02",
                "name": "useEffect用法2",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__useEffectDemos__demo02__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/useEffectDemos/demo02/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useEffect/demo03",
                "name": "useEffect用法3",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__useEffectDemos__demo03__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/useEffectDemos/demo03/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useEffect/demo04",
                "name": "useEffect用法4",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__useEffectDemos__demo04__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/useEffectDemos/demo04/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useEffect/demo05",
                "name": "useEffect用法5",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__useEffectDemos__demo05__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/useEffectDemos/demo05/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useEffect/demo06",
                "name": "useEffect用法6",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__useEffectDemos__demo06__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/useEffectDemos/demo06/App'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/react/hooks/useEffect/demo76",
                "name": "useEffect用法7",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ReactHooks__useEffectDemos__demo07__App' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/ReactHooks/useEffectDemos/demo07/App'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
