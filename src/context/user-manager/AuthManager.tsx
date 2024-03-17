import Paths from '../../routes/paths.ts';
import { IGetMe } from '../../services/nswag-generated-file.ts';
import { USER_KEY } from '../../constants/constants.ts';
import { AuthService } from '../../services/services/UsersServices.ts';
import { useUserContext } from './UserContext.tsx';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useUserContext

interface Props {
    children: ReactNode;
}

export default function AuthManager ({ children }: Readonly<Props>) {
    const { setUser } = useUserContext(); // Get setUser from UserContext
    const [user, setLocalUser] = useState<IGetMe>(getCurrentUser());
    
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    
    useEffect(() => {
        if (user) return;
        
        new AuthService(true).me()
        .then((res) => {
            if (!res.result) return;
            setLocalUser(res.result);
            setUser(res.result); // Update user state in UserContext
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

export async function getMe (forceLogin = false) {
    await new AuthService(true).me()
    .then((res) => {
        if (!res.result) return;
        sessionStorage.setItem(USER_KEY, JSON.stringify(res.result));
    })
    .catch(() => forceLogin ? navigate(`/${Paths.Login}`) : null);
}