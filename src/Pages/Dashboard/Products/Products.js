import React from 'react';

const Products = () => {
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
        <div className="overflow-x-auto w-full">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">All Product</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProduct.map(product =>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product.price}
                                </td>
                                <td>{product.brand}</td>
                                <th>
                                    <button className="btn btn-primary btn-xs">Details</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Products;