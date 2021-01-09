// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/admin/Desktop/mrhhblogv1.0.0/mrhhblog2/mrhhblog/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.jsx').default
  },
  {
    "path": "/myblog/BlogMain",
    "exact": true,
    "component": require('@/pages/myblog/BlogMain/index.js').default
  },
  {
    "path": "/myblog/Header",
    "exact": true,
    "component": require('@/pages/myblog/Header/index.js').default
  },
  {
    "path": "/myblog",
    "exact": true,
    "component": require('@/pages/myblog/index.jsx').default
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
