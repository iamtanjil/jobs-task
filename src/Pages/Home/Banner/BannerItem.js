import React from 'react';
import './BannerItem.css';

const BannerItem = ({ banner }) => {
    const { id, img, next, prev } = banner;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='banner-img '>
                <img src={img} alt="" className="w-[1440px] h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='mt-16 lg:mt-0 lg:block text-6xl font-bold text-white'>
                    Get Best <br />
                    Clothing Items <br />
                    Form Us
                </h1>
            </div>
            <div className="hidden  absolute lg:flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white mt-12'>This is a leading eccomerce application science 2020. You can find various product from us. All of those product are 100% original and authentic.</p>
            </div>
            <div className="hidden absolute lg:flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn btn-primary">Shop Now</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;