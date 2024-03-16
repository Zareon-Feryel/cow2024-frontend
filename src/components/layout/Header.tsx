import { getCurrentUser } from '../../context/user-manager/UserManager.tsx';
import { Button } from '../../shadcn/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';
import { getUniqueID } from '../../helpers/getUniquerID.helper.ts';
import Paths from '../../routes/paths.ts';

const menu = [
    { label: 'Accueil', path: '/' },
];

export function Header () {
    const user = getCurrentUser();
    
    const navigate = useNavigate();
    
    const handleNavigate = (path: string) => {
        navigate(path);
    };
    
    return (
        <div className="flex justify-between h-10 main-container container-shadow mt-2">
            <ul>
                {menu.map((item, index) => (
                    <li key={getUniqueID(item.path, index)}>
                        <Button variant="ghost"
                                className="py-1 px-2 m-0 h-full"
                                onClick={() => handleNavigate(item.path)}>{item.label}</Button>
                    </li>
                ))}
            </ul>
            <Button onClick={() => handleNavigate(Paths.Account)}
                    variant="ghost"
                    className="py-1 px-2 m-0 h-full text-lg">{user?.firstName} {user?.lastName}</Button>
        </div>
    );
}