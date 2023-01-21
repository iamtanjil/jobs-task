import React from 'react';

const AllOrders = () => {
    const ordersData = [
        {
            customerName: 'Tanjil Ahmed',
            customerEmail: 'tanjil@gmail.com',
            customerPhone: '01800000000',
            productName: 'Samsung Galaxy s22',
            band: 'Samsung',
            productPrice: 154000,
            deliveryLocation: 'Dhaka',
            orderDate: '01/01/2023',
            orderStatus: 'Completed'
        },
        {
            customerName: 'Rubel Ahmed',
            customerEmail: 'rubel@gmail.com',
            customerPhone: '01800000000',
            productName: 'IPhone 12',
            band: 'Apple',
            productPrice: 140000,
            deliveryLocation: 'Dhaka',
            orderDate: '01/01/2023',
            orderStatus: 'Pending'
        },
        {
            customerName: 'Durjoy Ahmed',
            customerEmail: 'durjoy@gmail.com',
            customerPhone: '01800000000',
            productName: 'Iphone 13 Pro',
            band: 'Apple',
            productPrice: 143000,
            deliveryLocation: 'Dhaka',
            orderDate: '01/01/2023',
            orderStatus: 'Completed'
        },
    ]
    return (
        <div className="overflow-x-auto w-full">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">All Orders</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Brand</th>
                        <th>Delivery Location</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordersData.map((orders, i) =>
                            <tr>
                                <td>
                                    <div className="font-bold">{i + 1}</div>
                                </td>
                                <td>
                                    <div className="font-bold">{orders.customerName}</div>
                                </td>
                                <td>
                                    {orders.customerEmail}
                                </td>
                                <td>{orders.productName}</td>
                                <td>{orders.productPrice}</td>
                                <td>{orders.band}</td>
                                <td>{orders.deliveryLocation}</td>
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

export default AllOrders;