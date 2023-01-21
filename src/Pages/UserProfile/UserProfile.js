import React from 'react';
import person1 from '../../assests/people1.png';

const UserProfile = () => {
    return (
        <div className='shadow-md rounded-md p-4'>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col justify-center items-center'>
                    <div className="avatar">
                        <div className="w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={person1} alt='' />
                        </div>
                    </div>
                    <form  className='flex flex-col items-center justify-center'>
                        <input type="file" name='updatedPhoto' className="file-input file-input-bordered file-input-primary w-full max-w-xs mt-5" />
                        <input type='submit' value='Change Photo' className='btn btn-primary mt-3' />
                    </form>
                </div>
                <div className="bg-blue-600 w-[3px] ml-4 h-96 hidden lg:block"> </div>
                <div className="bg-blue-600 w-full h-[2px] block lg:hidden mt-5"> </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-3 p-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input defaultValue={'User Name'} readOnly type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input readOnly defaultValue={'user@email.com'} type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input readOnly defaultValue={'User Address'} type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input readOnly defaultValue={'User Phone'} type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">College</span>
                        </label>
                        <input readOnly defaultValue={'User College'} type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">University</span>
                        </label>
                        <input readOnly defaultValue={'User University'} type="text" placeholder="University" className="input input-bordered" />
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                
            </div>
        </div>
    );
};

export default UserProfile;