import { getCurrentUser } from '../../context/user-manager/UserManager.tsx';
import { Button } from '../../shadcn/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';
import { getUniqueID } from '../../helpers/getUniquerID.helper.ts';
import Paths from '../../routes/paths.ts';

const menu = [
    { label: '🦄 Unicraft 🛠', path: '/' },
];

export function Header () {
    const user = getCurrentUser();
    
    const navigate = useNavigate();
    
    const handleNavigate = (path: string) => {
        navigate(path);
    };
    
    return (
        <div className="flex justify-between h-20 main-container container-shadow mt-2">
            <ul>
                {menu.map((item, index) => (
                    <li key={getUniqueID(item.path, index)} className="h-full">
                        <Button variant="ghost"
                                className="py-1 px-5 m-0 h-full text-2xl"
                                onClick={() => handleNavigate(item.path)}>{item.label}</Button>
                    </li>
                ))}
            </ul>
            <Button onClick={() => handleNavigate(Paths.Account)}
                    variant="ghost"
                    className="py-1 px-2 m-0 h-full text-lg flex gap-3"
            >
                {user?.email}
                <span className="h-10 w-10 bg-red-300 rounded-full flex justify-center items-center text-white">{user?.firstName[0]}{user?.lastName[0]}</span>
            </Button>
        </div>
    );
}