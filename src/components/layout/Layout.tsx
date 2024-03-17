import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';

export function Layout () {
    return (
        <div className="flex flex-col h-screen bg-gray-100 overflow-y-hidden">
            <Header/>
            <div className="mt-5 h-full">
                <Outlet/>
            </div>
        </div>
    );
}