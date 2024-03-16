import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/login/Login.tsx';
import RouterKeys from './routerKeys.ts';
import Register from '../components/login/Register.tsx';

const router = createBrowserRouter([
    { path: '/', element: <div>YO</div> },
    { path: `/${RouterKeys.Login}`, element: <Login/> },
    { path: `/${RouterKeys.Register}`, element: <Register/> },
]);

export default router;