import { ReactNode, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '../../shadcn/components/ui/tabs.tsx';
import { getUniqueID } from '../../helpers/getUniquerID.helper.ts';
import { useNavigate } from 'react-router-dom';
import Paths from '../../routes/paths.ts';
import { getPathname } from '../../helpers/url.helper.ts';
import { UserContext } from '../../context/user-manager/UserContext.tsx';

interface Props {
    children: ReactNode;
}

const loginTabs = [
    { label: 'Connexion', value: Paths.Login },
    { label: 'Inscription', value: Paths.Register },
];

export default function LoginLayout ({ children }: Readonly<Props>) {
    const [activeTab, setActiveTab] = useState(getPathname() ?? loginTabs[0].value);
    
    const navigate = useNavigate();
    
    const handleChangeTab = (value: string) => {
        setActiveTab(value);
        
        navigate(value === 'login' ? `/${Paths.Login}` : `/${Paths.Register}`);
    };
    
    return (
        <UserContext>
            <div className="flex h-screen bg-gray-100 justify-center items-center">
                <div>
                    <h1 className="w-full text-center mb-5 text-3xl font-semibold">🦄 Unicraft 🛠</h1>
                    <Tabs value={activeTab} className="w-[400px] container-shadow">
                        <TabsList className="flex">
                            {loginTabs.map((tab, index) => (
                                <TabsTrigger onClick={() => handleChangeTab(tab.value)}
                                             value={tab.value}
                                             className="flex-1"
                                             key={getUniqueID(tab.value, index)}>
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {children}
                    </Tabs>
                </div>
            </div>
        </UserContext>
    );
}