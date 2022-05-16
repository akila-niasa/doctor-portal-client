import React from 'react';

const Service = ({service,setTreatment}) => {
    const{name,slots}=service
    console.dir(slots);
    return (
        <div>
            <div className="card lg:mx-w-lg text-neutral-content m-6">
  <div className="card-body items-center text-center">
    <h2 className="text-xl font-bold text-secondary">{name}</h2>
    <p>{
        slots.length>0?<span>{slots[0]}</span>:<span className='text-red-500'>Try another date</span>
        }</p>
    <p>{slots.length}{
        slots.length>1?"spaces ":"space"
        }available
    </p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Deny</button>
    </div> */}
    <label htmlFor="book-modal"
    onClick={()=>setTreatment(service)}
    disabled={slots.length==0} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
  </div>
</div>
        </div>
    );
};

export default Service;