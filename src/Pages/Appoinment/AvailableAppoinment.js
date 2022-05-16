import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
const AvailableAppoinment = ({date}) => {
    // const[services,setServices]=useState([])
    const[treatment,setTreatment]=useState(null)
    const formattedDate=format(date,'PP')
    const { isLoading, error, data:services,refetch } = useQuery(['available',formattedDate], () =>
    fetch(`https://thawing-cove-68066.herokuapp.com/available?date=${formattedDate}`)
        .then(res=>res.json())
    )
  

    if(isLoading){
        return <Loading/>
    }
    // useEffect(()=>{
    //     fetch(`https://thawing-cove-68066.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate])
    return (
        <div>
            <h3 className='text-xl text-secondary text-center my-12'>Available Appointments on  {format(date, 'PPP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(service=><Service key={service._id} service={service} setTreatment={setTreatment} ></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment} refetch={refetch} />}
        </div>
    );
};

export default AvailableAppoinment;