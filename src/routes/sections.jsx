import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));

export default function Router() {
    const routes = useRoutes([ 
        {
            element: (
                <DashboardLayout>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </DashboardLayout>
            ),
            children: [
                { path: '/', element: <IndexPage />, index: true  },
            ]
        },
    ]);

    return routes;
}