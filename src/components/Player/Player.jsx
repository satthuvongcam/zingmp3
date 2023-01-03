import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as apis from '../../apis';
import icons from '../../ultis/icons';

const {
    AiOutlineHeart,
    AiFillHeart,
    BsThreeDots,
    BiPlay,
    BiPause,
    CiRepeat,
    CiShuffle,
    MdSkipNext,
    MdSkipPrevious,
} = icons;

function Player() {
    const [songInfo, setSongInfo] = useState(null);
    const [source, setSource] = useState(null);
    const { currentSongId, isPlaying } = useSelector((state) => state.music);
    const audioEl = new Audio(
        'https://mp3-s1-zmp3.zmdcdn.me/bac9858bd7cb3e9567da/1811407081239082985?authen=exp=1672837980~acl=/bac9858bd7cb3e9567da/*~hmac=7b16e9318ec3fc5d0381814a0487272e&fs=MTY3MjY2NTE4MDQwNHx3ZWJWNnwxMDExNjgyMTMyfDQyLjExNi4yMDgdUngMTgz'
    );

    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.getDetailSong(currentSongId),
                apis.getSong(currentSongId),
            ]);
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data);
            }
            if (res2.data.err === 0) {
                setSource(res2.data.data['128']);
            }
        };
        fetchDetailSong();
    }, [currentSongId]);

    useEffect(() => {
        // audioEl.play();
    }, [currentSongId]);

    const handleTogglePlayMusic = () => {
        // setIsPlaying((prev) => !prev);
    };

    return (
        <div className="px-5 flex items-center w-full h-full">
            <div className="w-[30%] flex items-center">
                <img
                    src={songInfo?.thumbnail}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col ml-[10px] flex-auto">
                    <span className="font-semibold text-gray-700 text-sm">{songInfo?.title}</span>
                    <span className="text-xs text-gray-500 mt-[1px]">{songInfo?.artistsNames}</span>
                </div>
                <div className="flex gap-4 flex-1">
                    <span title="Thêm vào thư viện" className="cursor-pointer">
                        <AiOutlineHeart size={16} />
                    </span>
                    <span title="Xem thêm" className="cursor-pointer">
                        <BsThreeDots size={16} />
                    </span>
                </div>
            </div>
            <div className="flex-auto flex flex-col items-center justify-center">
                <div className="flex justify-center items-center gap-8 mb-1">
                    <span title="Bật phát ngẫu nhiên" className="cursor-pointer">
                        <CiShuffle size={24} />
                    </span>
                    <span className="cursor-pointer">
                        <MdSkipPrevious size={24} />
                    </span>
                    <span
                        onClick={handleTogglePlayMusic}
                        className="p-1 border border-gray-700 hover:text-main-500 hover:border-main-500 rounded-full cursor-pointer"
                    >
                        {isPlaying ? <BiPause size={30} /> : <BiPlay size={30} />}
                    </span>
                    <span className="cursor-pointer">
                        <MdSkipNext size={24} />
                    </span>
                    <span title="Bật phát lại tất cả" className="cursor-pointer">
                        <CiRepeat size={24} />
                    </span>
                </div>
                <div>2</div>
            </div>
            <div className="w-[30%]">Setting</div>
        </div>
    );
}

export default Player;
