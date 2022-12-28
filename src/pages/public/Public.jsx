import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight } from '../../components';

function Public() {
    return (
        <div className="w-full flex">
            <SidebarLeft />
            <Outlet />
            <SidebarRight />
        </div>
    );
}

export default Public;
