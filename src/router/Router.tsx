import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Paths } from './paths';
import { MainLayout } from '@/shared/layout/Main';

const LazyHome = lazy(
    () => import(/*webpackChunkName: "LazyHome"  */ '@/features/home')
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