import React from 'react';
import doctor from "../../assets/images/doctor.png"
import appoinment from "../../assets/images/appointment.png"
import Button from '../Shared/Button';
const MakeAppoinment = () => {
    return (
        <div>
            <section style={{
            background: `url(${appoinment})`
        }} 
        className='flex justify-center items-center'>
          <div className='flex-1 hidden lg:block'>
              <img className='mt-[-100px]'  src={doctor} alt="" />
          </div>
          <div className='m-3 flex-1'>
              <h3 className='text-primary text-xl'>Appointment</h3>
              <h1 className='text-white text-3xl'>Make an appointment Today</h1>
              <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
              <Button/>
          </div>
        </section>
        </div>
    );
};

export default MakeAppoinment;