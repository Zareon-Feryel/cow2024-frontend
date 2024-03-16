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
        <div className="main-container h-full relative">
            <GithubButton/>
            <Button onClick={handleDisconnect}
                    className="absolute bottom-5 right-0"
                    variant="destructive">Déconnexion</Button>
        </div>
    );
}