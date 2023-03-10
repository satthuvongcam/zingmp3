import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArrSlider } from '../../ultis/functions';
import * as actions from '../../store/actions';
import { useDispatch } from 'react-redux';

function Slider() {
    const { banner } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item');
        let min = 0;
        let max = 2;
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1);

            for (let i = 0; i < sliderEls.length; i++) {
                // Delete animation (css)
                sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-5');
                sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10');
                sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10');

                // Hide or show slide item
                if (list.some((item) => item === i)) {
                    sliderEls[i].style.cssText = `display: block`;
                } else {
                    sliderEls[i].style.cssText = `display: none`;
                }
            }

            // Add animation by adding classnames
            list.forEach((item) => {
                if (item === max) {
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-5');
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10');
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10');
                }
            });
            min = min === sliderEls.length - 1 ? 0 : min + 1;
            max = max === sliderEls.length - 1 ? 0 : max + 1;
        }, 3000);
        return () => {
            intervalId && clearInterval(intervalId);
        };
    }, []);

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setCurrentSongId(item.encodeId));
            dispatch(actions.setPlay(true));
        }
    };

    return (
        <div className="flex gap-[28px] overflow-hidden w-full pt-8">
            {banner?.map((item, index) => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    alt="banner-img"
                    onClick={() => handleClickBanner(item)}
                    className={`slider-item flex-1 object-cover w-[30%] rounded-lg ${
                        index <= 2 ? 'block' : 'hidden'
                    }`}
                />
            ))}
        </div>
    );
}

export default Slider;
