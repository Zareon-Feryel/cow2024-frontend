import { Button } from '../../shadcn/components/ui/button.tsx';
import { BEARER_KEY, USER_KEY } from '../../constants/constants.ts';
import { useNavigate } from 'react-router-dom';
import Paths from '../../routes/paths.ts';
import { AuthService } from '../../services/services/UsersServices.ts';
import GithubButton from './GithubButton.tsx';

export function AccountPage () {
    
    const navigate = useNavigate();
    
    const handleDisconnect = () => {
        new AuthService(true).logout().then(() => {
            sessionStorage.removeItem(BEARER_KEY);
            sessionStorage.removeItem(USER_KEY);
            navigate(`/${Paths.Login}`);
        });
    };
    
    return (
        <div className="main-container h-full relative flex flex-col gap-4">
            <GithubButton/>
            <Button onClick={handleDisconnect}
                    className="py-2 px-4 max-w-md flex justify-center items-center text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    variant="destructive">Déconnexion</Button>
        </div>
    );
}