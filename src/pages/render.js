import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/Home.jsx'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail/ProductDetail.jsx'));
const SearchPage = lazy(() => import('@/pages/Search/SearchPage.jsx'));
const Cart = lazy(() => import('@/pages/Cart/Cart.jsx'));
<<<<<<< Updated upstream
const Test = lazy(() => import('@/pages/Test/Test.jsx'));
=======
const Payment = lazy(() => import('@/pages/Payment/Payment.jsx'));
>>>>>>> Stashed changes

export {
    Home,
    ProductDetail,
    SearchPage,
    Cart,
<<<<<<< Updated upstream
    Test
=======
	Payment
>>>>>>> Stashed changes
}