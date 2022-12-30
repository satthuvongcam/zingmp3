import React from 'react';
import { Search } from '../';
import icons from '../../ultis/icons';

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons;
function Header() {
    return (
        <div className="flex items-center justify-between w-full h-[70px] items-center">
            <div className="flex gap-6 w-full items-center">
                <div className="flex gap-6 text-gray-400">
                    <span>
                        <HiArrowNarrowLeft size={24} />
                    </span>
                    <span>
                        <HiArrowNarrowRight size={24} />
                    </span>
                </div>
                <div className="w-1/2">
                    <Search />
                </div>
            </div>
            <div>Login</div>
        </div>
    );
}

export default Header;
