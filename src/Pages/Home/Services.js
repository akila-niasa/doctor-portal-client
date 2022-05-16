import React from 'react';
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import Service from './Service';

const Services = () => {
    const services=[
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
]
    return (
        <div className='mt-5'>
            <h3 className='text-primary font-bold text-center mt-6'>OUR SERVICES</h3>
            <h1 className='text-accent text-center text-4xl font-bold m-4'>Services We Provide</h1>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service=><Service key={service._id} servicedetail={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;