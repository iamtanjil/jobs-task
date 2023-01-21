import React from 'react';
import dollar from '../../../assests/dollar.png';
import cart from '../../../assests/cart.png';
import basket from '../../../assests/basket.png';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Overview = () => {
    const data = [
        {
            name: "Shirt",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Pant",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Mobile",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Laptop",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Watch",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Clock",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Desktop",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];
    return (
        <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">Overview</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className='flex items-center p-3 bg-base-100'>
                    <img className='h-20' src={dollar} alt="" />
                    <div className='ml-2'>
                        <h2 className='text-lg'>Total Sale</h2>
                        <h3 className='text-2xl font-medium'>$123000000</h3>
                    </div>
                </div>
                <div className='flex items-center p-3 bg-base-100'>
                    <img className='h-20' src={cart} alt="" />
                    <div className='ml-2'>
                        <h2 className='text-lg'>Total Orders</h2>
                        <h3 className='text-2xl font-medium'>2300</h3>
                    </div>
                </div>
                <div className='flex items-center p-3 bg-base-100'>
                    <img className='h-16' src={basket} alt="" />
                    <div className='ml-2'>
                        <h2 className='text-lg'>Total Product</h2>
                        <h3 className='text-2xl font-medium'>2300</h3>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-blue-700 mt-3">Sales Statistic</h2>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className='p-3 bg-base-100 mt-3'>
                    <LineChart
                        width={650}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div className='bg-base-100 p-6 mt-2'>
                    <h2 className='text-center text-xl mb-3'>This Month Visitor</h2>
                    <div className='flex flex-col items-center justify-center'>
                        <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div>
                        <div className='flex items-center justify-around mt-3'>
                            <p className='text-sm'>Total Visitor: 1208 | </p>
                            <p className='text-sm'>Total Sell: 108</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;