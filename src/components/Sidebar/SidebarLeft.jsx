import React from 'react';
import logo from '../../assets/logo.svg';
import { sidebarMenu } from '../../ultis/menu';
import { NavLink } from 'react-router-dom';

const activeStyle = 'py-2 px-[25px] flex items-center text-[13px] text-[#0F7070]';
const notActiveStyle = 'py-2 px-[25px] flex items-center text-[13px] text-[#32323D]';

function SidebarLeft() {
    return (
        <div className="w-[240px] bg-[#dde4e4]">
            <div className="w-full h-[70px] pl-[28px] pr-[25px] py-[15px] flex items-center">
                <img src={logo} alt="logo" className="w-[120px] h-10" />
            </div>
            {sidebarMenu.map((sidebarItem) => (
                <NavLink
                    to={sidebarItem.path}
                    key={sidebarItem.path}
                    end={sidebarItem.end}
                    className={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
                >
                    <i className="mr-[10px]">{sidebarItem.icon}</i>
                    <span className="font-bold">{sidebarItem.text}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default SidebarLeft;
