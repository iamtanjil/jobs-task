import React from 'react';
import img1 from '../../../assests/img-1.jpg';
import img2 from '../../../assests/img-2.jpg';
import img3 from '../../../assests/img-3.jpg';
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            id:1,
            img: img1,
            next: 2,
            prev: 3
        },
        {
            id:2,
            img: img2,
            next: 3,
            prev: 1
        },
        {
            id:3,
            img: img3,
            next: 1,
            prev: 2
        },
    ]
    return (
        <div className="carousel w-full py-10 lg:h-[700px]">
            {
                bannerData.map(banner => <BannerItem
                key={banner.id}
                banner={banner}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;