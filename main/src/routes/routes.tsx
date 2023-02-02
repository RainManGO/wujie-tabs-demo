import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '../layout';
import DashBoard from 'pages/DashBoard';

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
    ],
  },
];

export default routes;
