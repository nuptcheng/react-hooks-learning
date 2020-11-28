// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/becomebamboo/source/my-front-study/react-hooks-learning/node_modules/umi-plugin-antd-icon-config/lib/app.js';
import * as Plugin_1 from '/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/.umi/plugin-dva/runtime.tsx';
import * as Plugin_2 from '../plugin-initial-state/runtime';
import * as Plugin_3 from '/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/.umi/plugin-locale/runtime.tsx';
import * as Plugin_4 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/becomebamboo/source/my-front-study/react-hooks-learning/node_modules/umi-plugin-antd-icon-config/lib/app.js',
  });
  plugin.register({
    apply: Plugin_1,
    path: '/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/.umi/plugin-dva/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_2,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_3,
    path: '/Users/becomebamboo/source/my-front-study/react-hooks-learning/src/.umi/plugin-locale/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_4,
    path: '../plugin-model/runtime',
  });
