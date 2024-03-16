import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/login/Login.tsx';
import Paths from './paths.ts';
import Register from '../components/login/Register.tsx';
import UserManager from '../context/user-manager/UserManager.tsx';
import { Layout } from '../components/layout/Layout.tsx';
import LoginLayout from '../components/login/LoginLayout.tsx';
import { HomePage } from '../components/home-page/HomePage.tsx';
import { AccountPage } from '../components/account/AccountPage.tsx';
import SearchResultsPage from '../components/search-results/SearchResultsPage.tsx';
import { MakerPage } from '../components/maker-page/MakerPage.tsx';
import RouterKeys from './router-keys.ts';
import { Chat } from '../components/chat/Chat.tsx';

const router = createBrowserRouter([
    {
        path: '/', element: <UserManager><Layout/></UserManager>, children: [
            { path: '/', element: <HomePage/> },
            { path: Paths.Account, element: <AccountPage/> },
            { path: Paths.SearchResults, element: <SearchResultsPage/> },
            { path: `${Paths.Maker}/:${RouterKeys.MakerId}`, element: <MakerPage/> },
            { path: `${Paths.Maker}/:${RouterKeys.MakerId}/${Paths.Chat}`, element: <Chat/> },
        ],
    },
    { path: Paths.Login, element: <LoginLayout><Login/></LoginLayout> },
    { path: Paths.Register, element: <LoginLayout><Register/></LoginLayout> },
]);

export default router;