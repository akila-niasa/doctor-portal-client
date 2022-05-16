import React from 'react';
import chair from "../../assets/images/chair.png"
import bg from "../../assets/images/bg.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import format from 'date-fns/format';
const AppionmentBanner = ({date,setDate}) => {
    return (
        <div>
                    <div style={{
            background:`url(${bg})`, backgroundSize: 'cover'        }} className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='w-70 h-60' src={chair} />
    <div className='m-7 '>
    <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}     
                    />
    </div>
    {/* <p>You picked {format(date, 'PP')}.</p> */}
  </div>
</div>
        </div>
    );
};

export default AppionmentBanner;