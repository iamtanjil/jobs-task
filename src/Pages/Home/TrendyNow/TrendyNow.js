import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";
const trendyProduct = [
    {
        id: 1,
        name: 'Samsung Galaxy S22 Ultra',
        price: 154000,
        brand: 'Samsung',
        rating: 4,
        photo: 'https://content.eros.ae/landing/samsungS22/images/main-kv.jpg',
        totalSale: 1022
    },
    {
        id: 2,
        name: 'Samsung Galaxy S20+ ',
        price: 134000,
        brand: 'Samsung',
        rating: 5,
        photo: 'https://www.mobiledokan.co/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Ultra-Cosmic-Grey.jpg',
        totalSale: 1020
    },
    {
        id: 3,
        name: 'Iphone 14 Pro Max',
        price: 150000,
        brand: 'Apple',
        rating: 5,
        photo: 'https://www.mobiledokan.co/wp-content/uploads/2021/09/Apple-iPhone-14-Pro-Max-Deep-Purple.jpg',
        totalSale: 1010
    },
    {
        id: 4,
        name: 'Iphone 14 Pro',
        price: 140000,
        brand: 'Apple',
        rating: 4,
        photo: 'https://admin.sumashtech.com/media/image/main/iPhone-14-Pro-Deep-Purple-2099.jpg',
        totalSale: 1008
    },
    {
        id: 5,
        name: 'Iphone 13 Pro Max',
        price: 134000,
        brand: 'Apple',
        rating: 4,
        photo: 'https://adminapi.applegadgetsbd.com/storage/media/large/3678-98878.jpg',
        totalSale: 1000
    },
    {
        id: 6,
        name: 'Iphone 13 Pro',
        price: 120000,
        brand: 'Apple',
        rating: 5,
        photo: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg',
        totalSale: 992
    },
    {
        id: 7,
        name: 'Realme 10pro',
        price: 40000,
        brand: 'Realme',
        rating: 4,
        photo: 'https://www.bdmobiles.co/wp-content/uploads/2022/11/Realme-10-Pro-1-500x500.jpg',
        totalSale: 884
    },
    {
        id: 8,
        name: 'Huawei P40 Pro+',
        price: 150000,
        brand: 'Huawei',
        rating: 4,
        photo: 'https://i0.wp.com/www.mobilebd.co/wp-content/uploads/2021/01/Huawei-P40-Pro-Plus-Official-Image--500x500.png',
        totalSale: 864
    },
    {
        id: 9,
        name: 'Redmi Note 10pro',
        price: 24000,
        brand: 'Xiaomi',
        rating: 4,
        photo: 'https://i02.appmifile.com/979_operator_in/12/08/2021/6e2a99cf7decf70d9e58a2871c1f19c0.png',
        totalSale: 805
    },
]

export default function TrendyNow() {
    return (
        <>
        <h2 className="text-2xl font-bold text-blue-700">Trendy Now</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    trendyProduct.map(product =>
                        <SwiperSlide>
                            <div className="card w-96 h-72 bg-base-100 shadow-xl m-10">
                                <figure><img className="h-full w-full" src={product.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name}</h2>
                                    <div className="card-actions justify-end">
                                        <Link className="btn btn-primary rounded-full">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}