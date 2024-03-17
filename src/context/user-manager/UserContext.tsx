import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { IGetMe } from '../../services/nswag-generated-file.ts';
import { useLocation } from 'react-router-dom';

interface UserContext {
    user: IGetMe;
    setUser: (user: IGetMe) => void;
}

const context: UserContext = createContext({
    user: {},
    setUser: () => {},
});

const ContextProvider = context.Provider;
context.displayName = 'UserContext';

export const useUserContext = () => useContext(context);

interface Props {
    children: ReactNode;
}

export function UserContext ({ children }: Readonly<Props>) {
    const [user, setUser] = useState<IGetMe>();
    
    const location = useLocation();
    
    useEffect(() => {
        const sessionUser = sessionStorage.getItem('user');
        const user: IGetMe = sessionUser ? JSON.parse(sessionUser) : null;
        
        setUser(user);
    }, [location]);
    
    const ctx: UserContext = {
        user,
        setUser,
    };
    
    return (
        <ContextProvider value={ctx}>
            {children}
        </ContextProvider>
    );
}