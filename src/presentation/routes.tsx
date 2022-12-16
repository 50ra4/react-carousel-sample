import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const TopPage = lazy(() => import('src/presentation/pages/TopPage/TopPage'));
const ContentWidthPage = lazy(
  () => import('src/presentation/pages/ContentWidthPage/ContentWidthPage'),
);
const ResizeObserverPage = lazy(
  () => import('src/presentation/pages/ResizeObserverPage/ResizeObserverPage'),
);

export const ErrorPage = lazy(
  () => import('src/presentation/pages/ErrorPage/ErrorPage'),
);

export const ROUTES: RouteProps[] = [
  {
    path: '/',
    element: <TopPage />,
  },
  {
    path: '/content-width',
    element: <ContentWidthPage />,
  },
  {
    path: '/resize-observer',
    element: <ResizeObserverPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
];
