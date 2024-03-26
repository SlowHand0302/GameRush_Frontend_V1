import Layout from '../components/Layout';
import HomePage from '../pages/Client/HomePage';
import ProductsPage from '../pages/Client/ProductsPage';
import ProductDetailPage from '../pages/Client/ProductDetailPage';
import CartPage from '../pages/Client/CartPage';
import { Client404 } from '../pages/Client/Page404';

import Dashboard from '../pages/Admin/Dashboard';
import ManageProductsPage from '../pages/Admin/ManageProductsPage';
import { Admin404 } from '../pages/Admin/Page404';

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: Layout,
    },
    {
        path: '/search/featured',
        component: ProductsPage,
        layout: Layout,
    },
    {
        path: '/:product',
        component: ProductDetailPage,
        layout: Layout,
    },
    {
        path: '/cart',
        component: CartPage,
        layout: Layout,
    },
    {
        path: '/404',
        component: Client404,
        layout: Layout,
    },
    {
        path: '/admin',
        component: Dashboard,
        layout: Layout,
    },
    {
        path: '/admin/products',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/category',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/order',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/order/statistic',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/account',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/discount',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/setting/website',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/setting/payment',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/setting/employee',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/userSupport',
        component: ManageProductsPage,
        layout: Layout,
    },
    {
        path: '/admin/404',
        component: Admin404,
        layout: '',
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
