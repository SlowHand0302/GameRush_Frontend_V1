import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/Client/HomePage';
import ProductPages from '../pages/Client/ProductsPage';

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: Layout,
    },
    {
        path: '/search/featured',
        component: ProductPages,
        layout: Layout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
