/*
 * @Author: ZY
 * @Date: 2022-12-08 15:17:18
 * @LastEditors: ZY
 * @LastEditTime: 2023-01-15 16:48:25
 * @FilePath: /wujie-apps/react18/src/routes/routes.tsx
 * @Description: 文件描述
 */
import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '../layout';
import DashBoard from 'pages/DashBoard';
import State from 'pages/State';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Navigate to="/dashboard" replace />,
      },
      {
        index: true,
        path: '/dashboard',
        element: <DashBoard />,
      },
      {
        path: '/state',
        element: <State />,
      },
    ],
  },
];

export default routes;
