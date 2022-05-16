import React from 'react';
import appoinment from "../../assets/images/appointment.png"
import Button from '../Shared/Button';
const Contract = () => {
    return (
        <div style={
            {
                background:`url(${appoinment})`
            }} className="bg-primary px-10 py-14">
            <div className=' pb-4 mt-11 '>
                <h3 className='text-primary text-center font-bold text-xl'>Contact Us</h3>
                <h1 className='text-2xl text-white text-center'>Stay connected with us</h1>
            </div>
            <div className=' grid grid-cols-1 justify-items-center gap-5'>
            
<input type="text" placeholder="Email Adrress" className="input input-bordered input-xs w-full max-w-xs " />

<input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs " />

<input type="text" placeholder="Your message" className="input input-bordered input-lg w-full max-w-xs " />

<Button/>
            </div>
           
        </div>
    );
};

export default Contract;