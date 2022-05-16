import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppionmentBanner from './AppionmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const[date,setDate]=useState(new Date())
    return (
        <div >
            <AppionmentBanner date={date} setDate={setDate}/>
            <AvailableAppoinment date={date}/>
            <Footer/>
        </div>
    );
};

export default Appoinment;