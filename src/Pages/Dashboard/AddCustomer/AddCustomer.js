import React from 'react';

const AddCustomer = () => {

    return (
        <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">Add Customer</h2>
            <div className='shadow-lg rounded-lg p-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">University</span>
                        </label>
                        <input type="text" placeholder="University" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Phone" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Address" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered input-primary" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full" />
                </div>
                <div className='flex justify-end items-center mt-16'>
                    <button className='btn btn-primary'>Add Customer</button>
                </div>
            </div>
        </div>
    );
};

export default AddCustomer;