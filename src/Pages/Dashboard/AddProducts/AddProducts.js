import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">Add Product</h2>
            <div className='shadow-lg rounded-lg p-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder="Product Name" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input type="text" placeholder="Product Price" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <input type="text" placeholder="Phone" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Release Date</span>
                        </label>
                        <input type="text" placeholder="Release Date" className="input input-bordered input-primary" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Photo</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full" />
                </div>
                <div className='flex justify-end items-center mt-16'>
                    <button className='btn btn-primary'>Add Product</button>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;