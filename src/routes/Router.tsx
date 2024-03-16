import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/login/Login.tsx';
import RouterKeys from './routerKeys.ts';
import Register from '../components/login/Register.tsx';
import UserManager from '../context/user-manager/UserManager.tsx';
import { Layout } from '../components/Layout.tsx';
import LoginLayout from '../components/login/LoginLayout.tsx';

const router = createBrowserRouter([
    {
        path: '/', element: <UserManager><Layout/></UserManager>, children: [
            { path: RouterKeys.Login, element: <LoginLayout><Login/></LoginLayout> },
            { path: RouterKeys.Register, element: <LoginLayout><Register/></LoginLayout> },
        ],
    },
]);

export default router;