import React from 'react';
import { FaStar } from 'react-icons/fa';

const DetailsProduct = () => {
    const phoneData =
    {
        id: 9,
        name: 'Redmi Note 10pro',
        price: 24000,
        brand: 'Xiaomi',
        rating: 4,
        photo: 'https://i02.appmifile.com/979_operator_in/12/08/2021/6e2a99cf7decf70d9e58a2871c1f19c0.png',
        totalSale: 805
    };

    return (
        <div className='rounded-md shadow-md mt-5 w-full mb-5'>
            <div className='flex bg-base-200 rounded-t-md items-center justify-center p-3 '>
                <div className='p-3'>
                    <img className='w-full lg:max-h-[300px] rounded-md ' src={phoneData.photo} alt="" />
                </div>
            </div>
            <div className='bg-base-100 p-3'>
                <p className='text-2xl p-3'>{phoneData.name}</p>
                <p className='text-xl p-3'>Price: {phoneData.price} TK</p>
                <p className='text-xl p-3'>Brand:{phoneData.brand}</p>
                <p className='text-xl p-3'>Total Sale: {phoneData.totalSale}</p>
                <p className='text-xl p-3 flex items-center'>Rating: {phoneData.rating}
                    <FaStar className='text-yellow-500 ml-2'></FaStar>
                </p>
            </div>
            <div className='bg-base-200 p-3'>
                <h2 className='text-xl font-medium'>Write a Review</h2>
                <div className='flex items-center justify-center mt-3'>
                    <textarea className="textarea textarea-info w-full h-32" placeholder="Your comment here"></textarea>
                    <button className='btn btn-primary ml-2'>Write a Review</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;