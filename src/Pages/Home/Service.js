import React from 'react';

const Service = ({servicedetail}) => {
    const{name,description,img}=servicedetail
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>
        </div>
    );
};

export default Service;