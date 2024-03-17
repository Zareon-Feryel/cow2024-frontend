import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from '../components/login/Login.tsx';
import Paths from './paths.ts';
import Register from '../components/login/Register.tsx';
import AuthManager from '../context/user-manager/AuthManager.tsx';
import { Layout } from '../components/layout/Layout.tsx';
import LoginLayout from '../components/login/LoginLayout.tsx';
import { HomePage } from '../components/home-page/HomePage.tsx';
import { AccountPage } from '../components/account/AccountPage.tsx';
import SearchResultsPage from '../components/search-results/SearchResultsPage.tsx';
import { MakerPage } from '../components/maker-page/MakerPage.tsx';
import RouterKeys from './router-keys.ts';
import { Chat } from '../components/chat/Chat.tsx';
import { UserContext } from '../context/user-manager/UserContext.tsx';

const router = createBrowserRouter([
    {
        path: '/', element: <UserContext><Outlet/></UserContext>, children: [
            {
                path: '/', element: <Layout/>, children: [
                    { path: '/', element: <HomePage/> },
                    { path: Paths.Account, element: <AuthManager><AccountPage/></AuthManager> },
                    { path: Paths.SearchResults, element: <SearchResultsPage/> },
                    { path: `${Paths.Maker}/:${RouterKeys.MakerId}`, element: <MakerPage/> },
                    {
                        path: `${Paths.Maker}/:${RouterKeys.MakerId}/${Paths.Chat}`,
                        element: <AuthManager><Chat/></AuthManager>,
                    },
                ],
            }],
    },
    { path: Paths.Login, element: <LoginLayout><Login/></LoginLayout> },
    { path: Paths.Register, element: <LoginLayout><Register/></LoginLayout> },
]);

export default router;