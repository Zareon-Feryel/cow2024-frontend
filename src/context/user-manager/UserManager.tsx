import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RouterKeys from '../../routes/routerKeys.ts';
import { IGetMe, UsersRepository } from '../../services/nswag-generated-file.ts';

interface Props {
    children: ReactNode;
}

export default function UserManager ({ children }: Readonly<Props>) {
    const [user, setUser] = useState<IGetMe>(getCurrentUser());
    
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    
    useEffect(() => {
        if (user) return;
        
        new UsersRepository().me()
        .then((res) => {
            if (!res.result) return;
            setUser(res.result);
        });
    }, [pathname]);
    
    if (user || pathname === `/${RouterKeys.Login}` || pathname === `/${RouterKeys.Register}`) return children;
    
    if (window.location.pathname !== `/${RouterKeys.Login}`) navigate(`/${RouterKeys.Login}`);
}

export function getCurrentUser () {
    // const sessionUser = sessionStorage.getItem(USER_KEY);
    // const user: IGetMe = sessionUser ? JSON.parse(sessionUser) : null;
    const user: IGetMe = {
        email: 'jane_doe@gmail.com',
        firstName: 'Jane',
        lastName: 'Doe',
        role: 0,
    };
    
    return user;
}