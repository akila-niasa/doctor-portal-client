import React from 'react';

const Review = ({review}) => {
    const{name,reviewed,location,img}=review
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    {/* <h2 className="card-title">Card title!</h2> */}
    <p>{reviewed}</p>
  <div className='flex items-center p-2 mt-2'>
    <div>  
        
        <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <img src={img} alt="" />
  </div>
</div>
        </div>
      <div className='p-6'>
          <h3>{name}</h3>
          <p>{location}</p>
      </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Review;