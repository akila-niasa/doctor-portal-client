import React from 'react';

const InfoCard = ({cardTitle,bgClass,img,cardDetails}) => {
    return (
       <div className={`card lg:card-side  shadow-xl mx-3 p-2 ${bgClass}`}>
  <figure><img className='w-25 m-2 p-2' src={img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-white">{cardTitle}</h2>
    <p className='text-white'>{cardDetails}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div> */}
  </div>
</div>
   
    );
};

export default InfoCard;