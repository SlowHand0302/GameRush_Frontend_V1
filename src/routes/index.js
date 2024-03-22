import Layout from '../components/Layout';
import HomePage from '../pages/Client/HomePage';
import ProductsPage from '../pages/Client/ProductsPage';
import ProductDetailPage from '../pages/Client/ProductDetailPage';
import CartPage from '../pages/Client/CartPage';

import Dashboard from '../pages/Admin/Dashboard';
import ManageProductsPage from '../pages/Admin/ManageProductsPage';
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
        path: '/admin/:slug/:slug',
        component: Dashboard,
        layout: Layout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
