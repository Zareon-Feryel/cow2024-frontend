import { USER_KEY } from '../../constants/constants.ts';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import RouterKeys from '../../routes/routerKeys.ts';

interface Props {
    children: ReactNode;
}

export default function UserManager ({ children }: Readonly<Props>) {
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    
    const sessionUser = sessionStorage.getItem(USER_KEY);
    const user = sessionUser ? JSON.parse(sessionUser) : null;
    
    if (user || pathname === `/${RouterKeys.Login}` || pathname === `/${RouterKeys.Register}`) return children;
    
    if (window.location.pathname !== `/${RouterKeys.Login}`) navigate(`/${RouterKeys.Login}`);
}