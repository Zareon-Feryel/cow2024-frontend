import { Outlet } from 'react-router-dom';

export function Layout () {
    return (
        <div className="flex h-screen bg-gray-100 justify-center items-center">
            <Outlet/>
        </div>
    );
}