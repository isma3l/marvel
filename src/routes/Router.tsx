import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Paths } from './paths';
import { MainLayout } from '@/layout';

const Home = lazy(() => import(/*webpackChunkName: "LazyHome"  */ '@/pages/home'));

const Favorites = lazy(() => import(/*webpackChunkName: "LazyHome"  */ '@/pages/favorites'));

const Details = lazy(() => import(/*webpackChunkName: "LazyHome"  */ '@/pages/details'));

export const Router = createBrowserRouter([
  {
    path: Paths.base,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        )
      },
      {
        path: Paths.favorites,
        element: (
          <Suspense>
            <Favorites />
          </Suspense>
        )
      },
      {
        path: Paths.hero,
        element: (
          <Suspense>
            <Details />
          </Suspense>
        )
      }
    ]
  }
]);
