import Layout from '../components/Layout';
import HomePage from '../pages/Client/HomePage';
import ProductsPage from '../pages/Client/ProductsPage';
import ProductDetailPage from '../pages/Client/ProductDetailPage';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
