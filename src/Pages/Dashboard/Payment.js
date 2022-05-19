import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFrom from './CheckoutFrom';



const stripePromise = loadStripe('pk_test_51L0seeLYqjpqRkhInLZ33wqAd1acWKpO6AqpypY5zM1hoAdBbvjNOSuEtabKYcRTx4vLHENlFwmKzrlDt2Obcso100tztuqwdr');
const Payment = () => {
    const {id}=useParams()
    const{ data: appointment, isLoading}=useQuery(['booking', id],()=>fetch(`http://localhost:5000/booking/${id}`,{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
        
    })
    .then(res=>res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {appointment?.patientName}</p>
                <h2 class="card-title">Please Pay for {appointment?.treatment}</h2>
                <p>Your Appointment: <span className='text-orange-700'>{appointment?.date}</span> at {appointment?.slot}</p>
                <p>Please pay: ${appointment?.price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    {/* <CheckoutForm appointment={appointment} /> */}
                    <CheckoutFrom appointment={appointment}/>
                </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;