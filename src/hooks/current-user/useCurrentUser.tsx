import { getCurrentUser } from '../../context/user-manager/AuthManager.tsx';
import { IGetMe } from '../../services/nswag-generated-file.ts';
import { useEffect, useState } from 'react';

export function useCurrentUser () {
    const [user, setUser] = useState<IGetMe>(getCurrentUser());
    const pathname = window.location.pathname;
    
    useEffect(() => {
        setUser(getCurrentUser());
    }, [pathname]);
    
    return user;
}