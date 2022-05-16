import React from 'react';
import people1 from "../../assets/images/people1.png"
import people2 from "../../assets/images/people2.png"
import people3 from "../../assets/images/people3.png"
import Review from './Review';
import quote from "../../assets/icons/quote.svg"

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            reviewed: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            reviewed: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
            img: people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            reviewed: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'california',
            img: people3
        },
    ];
    return (
        <div >
           <div className='flex justify-between m-4 pt-8'>
           <div >
           <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
            <h1 className='text-3xl'>What Our Patients Says</h1>
           </div>
           <div>
               <img className='w-24 lg:w-56' src={quote} alt="" />
           </div>
           </div>
            <div className='grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review=><Review key={review._id}review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;