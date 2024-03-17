import { Button } from '../../shadcn/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';
import { getUniqueID } from '../../helpers/getUniquerID.helper.ts';
import Paths from '../../routes/paths.ts';
import { useUserContext } from '../../context/user-manager/UserContext.tsx';
import { Input } from '../../shadcn/components/ui/input.tsx';
import { useEffect, useRef, useState } from 'react';
import { MakersService } from '../../services/services/MakersService.ts';
import { IGetMakersByNameResponse } from '../../services/nswag-generated-file.ts';

const menu = [
    { label: '🦄 Unicraft 🛠', path: '/' },
];

export function Header () {
    const [makerSearch, setMakerSearch] = useState('');
    const [makersResult, setMakersResult] = useState<IGetMakersByNameResponse[]>();
    const [displayMakersResult, setDisplayMakersResult] = useState(false);
    
    const userCtx = useUserContext();
    const navigate = useNavigate();
    const timeoutRef = useRef<NodeJS.Timeout>();
    
    useEffect(() => {
        if (makerSearch === '') return;
        
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            new MakersService().getMakersByName(makerSearch).then((res) => {
                setMakersResult(res);
            });
        }, 500);
        
        return () => clearTimeout(timeoutRef.current);
    }, [makerSearch, navigate]);
    
    const handleNavigate = (path: string) => {
        navigate(path);
    };
    
    const handleBlur = () => {
        setTimeout(() => {
            setDisplayMakersResult(false);
            setMakersResult([]);
        }, 100);
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
            <div className="relative w-1/5 self-center">
                <Input placeholder="Cherchez un Maker"
                       className="h-10"
                       onBlur={handleBlur}
                       onFocus={() => setDisplayMakersResult(true)}
                       onChange={(e) => setMakerSearch(e.target.value)}/>
                {displayMakersResult && makersResult && makersResult.length > 0 && (
                    <ul className="absolute top-14 w-full z-10 container-shadow">
                        {makersResult.map((maker, index) => (
                            <li key={getUniqueID(maker.id.toString(), index)}
                                className="h-12 flex justify-between border-b-2 items-center px-5 hover:bg-gray-100"
                            >
                                <Button variant="link"
                                        onClick={() => handleNavigate(`${Paths.Maker}/${maker.id}`)}>{maker.name}</Button>
                            </li>
                        ))}
                    </ul>
                
                )}
            </div>
            {
                userCtx?.user ? (
                    <div className="flex relative">
                        <Button onClick={() => window.location.replace('https://github.com/EloiStree/2024_03_16_UniCraftBuilder/releases/tag/V0')}
                                variant="link"
                                className="py-1 px-2 m-0 h-full text-xs absolute right-64 bottom-0"
                        > Télécharger Unicraft Builder
                        </Button>
                        <Button onClick={() => handleNavigate(Paths.Account)}
                                variant="ghost"
                                className="py-1 px-2 m-0 h-full text-lg flex gap-3"
                        >
                            {userCtx?.user?.email}
                            <span className="h-10 w-10 bg-red-300 rounded-full flex justify-center items-center text-white">{userCtx?.user?.firstName[0]}{userCtx?.user?.lastName[0]}</span>
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button onClick={() => handleNavigate(Paths.Login)}
                                variant="link"
                                className="py-1 px-2 m-0 h-full text-lg"
                        >
                            Connexion
                        </Button>
                        <Button onClick={() => handleNavigate(Paths.Register)}
                                variant="link"
                                className="py-1 px-2 m-0 h-full text-lg"
                        >
                            Inscription
                        </Button>
                    </div>
                )
            }
        </div>
    );
}