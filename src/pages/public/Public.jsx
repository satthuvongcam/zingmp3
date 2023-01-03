import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight, Player } from '../../components';

function Public() {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <div className="flex flex-auto">
                <SidebarLeft />
                <Outlet />
                <SidebarRight />
            </div>
            <div className="flex-none h-[90px] bg-main-400">
                <Player />
            </div>
        </div>
    );
}

export default Public;
