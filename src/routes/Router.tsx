import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Paths } from './paths';
import { MainLayout } from '@/layout';

const LazyHome = lazy(
    () => import(/*webpackChunkName: "LazyHome"  */ '@/pages/home')
);

export const Router = createBrowserRouter([
    {
        path: Paths.base,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense>
                        <LazyHome />
                    </Suspense>
                )
            }
        ]
    }
]);