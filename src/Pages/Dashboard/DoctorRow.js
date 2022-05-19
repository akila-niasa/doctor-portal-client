import React from 'react';
import toast from 'react-hot-toast';

const DoctorRow = ({doctor,index,refetch,setDeletingDoctor}) => {
    const { name, specialty, img, email } = doctor;

 
    return (
        <tr>
        <th>{index + 1}</th>
        <td><div class="avatar">
            <div class="w-8 rounded">
                <img src={img} alt={name} />
            </div>
        </div></td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td>
        <label onClick={()=>setDeletingDoctor(doctor)} for="delete-modal" class="btn btn-xs btn-error">Delete</label>
            {/* <label onClick={()=>setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn ">Delete</label> */}
        </td>
    </tr>
    );
};

export default DoctorRow;