import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/Home.jsx'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail/ProductDetail.jsx'));
const SearchPage = lazy(() => import('@/pages/Search/SearchPage.jsx'));
const Cart = lazy(() => import('@/pages/Cart/Cart.jsx'));
const Payment = lazy(() => import('@/pages/Payment/Payment.jsx'));
const Login = lazy(() => import('@/pages/Login/Login.jsx'));
const Register = lazy(() => import('@/pages/Register/Register.jsx'));

export {
    Home,
    ProductDetail,
    SearchPage,
    Cart,
    Payment,
    Login,
    Register
}