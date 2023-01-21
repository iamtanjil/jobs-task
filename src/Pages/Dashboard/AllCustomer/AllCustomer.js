import React from 'react';
import person1 from '../../../assests/people1.png';
import person2 from '../../../assests/people2.png';
import person3 from '../../../assests/people3.png';

const AllCustomer = () => {
    const userData = [
        {
            id: 1,
            userName: 'Tanjil Ahmed',
            email: 'tanjil@gmail.com',
            photo: person1,
            location: 'Dhaka',
            phone: "+8801800000000",
            university: 'International University'
        },
        {
            id: 2,
            userName: 'Rubel Ahmed',
            email: 'rubel@gmail.com',
            photo: person2,
            location: 'Dhaka',
            phone: "+8801800000000",
            university: 'International University'
        },
        {
            id: 3,
            userName: 'Durjoy Ahmed',
            email: 'durjoy@gmail.com',
            photo: person3,
            location: 'Dhaka',
            phone: "+8801800000000",
            university: 'International University'
        },
    ]
    return (
        <div className="overflow-x-auto w-full">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">All Customer</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map(user =>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar rounded-full ring ring-primary">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img  src={user.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.userName}</div>
                                            <div className="text-sm opacity-50">{user.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.phone}</td>
                                <th>
                                    <button className="btn btn-primary btn-xs">More Info</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllCustomer;