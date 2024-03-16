import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/login/Login.tsx';
import RouterKeys from './routerKeys.ts';
import Register from '../components/login/Register.tsx';
import UserManager from '../context/user-manager/UserManager.tsx';
import { Layout } from '../components/layout/Layout.tsx';
import LoginLayout from '../components/login/LoginLayout.tsx';
import { HomePage } from '../components/home-page/HomePage.tsx';
import { AccountPage } from '../components/account/AccountPage.tsx';
import SearchResultsPage from '../components/search-results/SearchResultsPage.tsx';

const router = createBrowserRouter([
    {
        path: '/', element: <UserManager><Layout/></UserManager>, children: [
            { path: '/', element: <HomePage/> },
            { path: RouterKeys.Account, element: <AccountPage/> },
            { path: RouterKeys.SearchResults, element: <SearchResultsPage/> },
        ],
    },
    { path: RouterKeys.Login, element: <LoginLayout><Login/></LoginLayout> },
    { path: RouterKeys.Register, element: <LoginLayout><Register/></LoginLayout> },
]);

export default router;