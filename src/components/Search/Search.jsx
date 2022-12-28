import React from 'react';
import icons from '../../ultis/icons';

const { AiOutlineSearch } = icons;

function Search() {
    return (
        <div className="w-full flex items-center">
            <span className="h-10 pl-2 bg-[#DDE4E4] flex justify-center items-center rounded-l-[20px] text-gray-500">
                <AiOutlineSearch size={24} />
            </span>
            <input
                type="text"
                className="outline-none bg-[#DDE4E4] px-2 py-2 w-full rounded-r-[20px] h-10 text-gray-500"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
        </div>
    );
}

export default Search;
