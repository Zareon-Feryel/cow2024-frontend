import { getCurrentUser } from '../../context/user-manager/UserManager.tsx';

export function Header () {
    const user = getCurrentUser();
    
    return (
        <div className="flex justify-between h-10 main-container container-shadow mt-2">
            <ul>
                <li>Accueil</li>
            </ul>
            <div>{user.firstName} {user.lastName}</div>
        </div>
    );
}