import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const allProduct = [
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
    ];
    return (
        <div>
            <h2 className="text-2xl font-bold text-blue-700 mt-10">All Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    allProduct.map(product =>
                        <div className="card w-96 max-h-[600px] bg-base-100 shadow-xl m-10">
                            <figure><img className="h-full w-full" src={product.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p className="text-lg text-left font-medium">Price: {product.price}</p>
                                <p className="text-lg text-left font-medium">Brand: {product.brand}</p>
                                <p className="text-lg text-left font-medium flex items-center ">Rating: {product.rating}
                                    <FaStar className="text-yellow-600 ml-2"></FaStar>
                                </p>
                                <p className="text-lg text-left font-medium">Total Sold: {product.totalSale}</p>
                                <div className="card-actions justify-end">
                                    <Link className="btn btn-primary rounded-full">View Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;