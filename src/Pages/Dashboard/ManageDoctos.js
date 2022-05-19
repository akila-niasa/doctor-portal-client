import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeletConfirmModal from './DeletConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctos = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const{data:doctors,isLoading,refetch}=useQuery('doctors',()=>fetch('http://localhost:5000/doctor',{
        headers: {
           
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        },
    }
    
    ).then(res=>res.json())) 
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
             <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor,index)=><DoctorRow key={index} doctor={doctor} index={index} refetch={refetch}
                            setDeletingDoctor={setDeletingDoctor}></DoctorRow>
                           
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
          
        </div>
        {deletingDoctor && <DeletConfirmModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            ></DeletConfirmModal>}
        </div>
    );
};

export default ManageDoctos;