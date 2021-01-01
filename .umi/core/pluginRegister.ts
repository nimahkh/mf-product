// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/home/eagle/projects/test/mf/.umi/plugin-dva/runtime.tsx';
import * as Plugin_1 from '../plugin-initial-state/runtime';
import * as Plugin_2 from '/home/eagle/projects/test/mf/.umi/plugin-locale/runtime.tsx';
import * as Plugin_3 from '../plugin-model/runtime';
import * as Plugin_4 from '/home/eagle/projects/test/mf/.umi/plugin-helmet/runtime.ts';

  plugin.register({
    apply: Plugin_0,
    path: '/home/eagle/projects/test/mf/.umi/plugin-dva/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_1,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_2,
    path: '/home/eagle/projects/test/mf/.umi/plugin-locale/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_3,
    path: '../plugin-model/runtime',
  });
  plugin.register({
    apply: Plugin_4,
    path: '/home/eagle/projects/test/mf/.umi/plugin-helmet/runtime.ts',
  });
