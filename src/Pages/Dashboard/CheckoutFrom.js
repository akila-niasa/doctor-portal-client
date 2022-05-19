import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutFrom = ({ appointment }) => {
    const stripe = useStripe()
    const element = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('')

    const { _id, price, patient, patientName } = appointment;


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    console.log(data);
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !element) {
            return
        }
        const card = element.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || '')
        setSuccess('')
        //   if (error) {
        //     setCardError(error.message)
        //   } else {
        //       setCardError('')
        //     console.log('[PaymentMethod]', paymentMethod);
        //   }

         // confirm card payment
     const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email: patient
                },
            },
        },
    );
   if(intentError){
    setCardError(intentError?.message )
    setSuccess('')
   }
   else{
       setCardError('')
       setSuccess('Congrats! Your payment is completed.')
   }
    }
console.log(!clientSecret);
console.log(!stripe);
console.log(success);

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" 
                disabled={!stripe || !clientSecret ||success}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                   
                </div>
            }
        </>
    );
};

export default CheckoutFrom;