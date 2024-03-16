import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paths from '../../routes/paths.ts';
import { IGetMe } from '../../services/nswag-generated-file.ts';
import { USER_KEY } from '../../constants/constants.ts';
import { AuthService } from '../../services/services/UsersServices.ts';

interface Props {
    children: ReactNode;
}

export default function UserManager ({ children }: Readonly<Props>) {
    const [user, setUser] = useState<IGetMe>(getCurrentUser());
    
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    
    useEffect(() => {
        if (user) return;
        
        new AuthService(true).me()
        .then((res) => {
            if (!res.result) return;
            setUser(res.result);
            sessionStorage.setItem(USER_KEY, JSON.stringify(res.result));
        })
        .catch(() => navigate(`/${Paths.Login}`));
    }, [pathname]);
    
    if (user || pathname === `/${Paths.Login}` || pathname === `/${Paths.Register}`) return children;
}

export function getCurrentUser () {
    const sessionUser = sessionStorage.getItem(USER_KEY);
    const user: IGetMe = sessionUser ? JSON.parse(sessionUser) : null;
    
    return user;
}