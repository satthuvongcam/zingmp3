import React, { useEffect } from 'react';
import { Header, Slider } from '../../components';
import * as apis from '../../apis';

function Home() {
    // useEffect(() => {
    //     const getData = () =>
    //         new Promise(async (res, rej) => {
    //             try {
    //                 const response = await apis.getHome();
    //                 console.log(response);
    //             } catch (error) {
    //                 rej(error);
    //             }
    //         });
    //     getData();
    // });
    return (
        <div className="overflow-y-auto px-[59px] flex-1 bg-[#d0dada]">
            <Header />
            <Slider />
        </div>
    );
}

export default Home;
