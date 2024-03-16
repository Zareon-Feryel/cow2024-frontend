import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';

export function Layout () {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Header/>
            <Outlet/>
        </div>
    );
}