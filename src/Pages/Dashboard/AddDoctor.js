import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   const{data:doctorServices,isLoading}=useQuery('doctorServices',()=>fetch('http://localhost:5000/service').then(res=>res.json()))   

   const imageStorage_key="6a52efbcb14ac6f1541aa5d999317e73"
    const onSubmit=async data=>{
     const image=data.image[0]
     const formData=new FormData()
     formData.append('image',image)
     const url=`https://api.imgbb.com/1/upload?&key=${imageStorage_key}`
     fetch(url,{
         method:'POST',
         body:formData
     })
     .then(res=>res.json())
     .then(result=>{
        //  console.log(result);
        if(result.success){
            const img=result.data.url
            const doctor={
                name:data.name,
                email:data.email,
                specialty:data.specialty,
                img:img
            }
            // console.log(doctor);
            fetch('http://localhost:5000/doctor',{
                method:"POST",
                headers: {
                    'content-type': 'application/json',
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(inserted=>{
                // console.log(inserted);
                if(inserted.insertedId){
                    toast.success('Doctor added successfully')
                }
                else{
                    toast.error('Failed to add the doctor');
                }
            })
        }
     })
    }


    if(isLoading){
        return <Loading/>
    }
    return (
        <div >
            <Toaster/>
        <h2 className="text-2xl text-center">Add a New Doctor</h2>
     <div className='flex items-center justify-center'>
     <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Email</span>
    </label>
    <input
        type="email"
        placeholder="Your Email"
        className="input input-bordered w-full max-w-xs"
        {...register("email", {
            required: {
                value: true,
                message: 'Email is Required'
            },
            pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email'
            }
        })}
    />
    <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Specialty</span>
    </label>
    <select  {...register('specialty')} class="select w-full max-w-xs">
        {
            doctorServices.map(service=><option key={service._id} value={service.name}>{service.name}</option>)
        }
  {/* <option >Pick your favorite Simpson</option>
  
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option> */}
</select>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Photo</span>
    </label>
    <input
        type="file"
        className="input input-bordered w-full max-w-xs"
        {...register("image", {
            required: {
                value: true,
                message: 'Image is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

<input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
</form>
     </div>
    </div>
    );
};

export default AddDoctor;