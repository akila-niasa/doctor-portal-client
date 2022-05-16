import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppoinment = () => {
    const navigate=useNavigate()
    const[user]=useAuthState(auth)
 
    const [appointment,setAppointment]=useState([])
    useEffect(()=>{
        if(user){
            fetch(`https://thawing-cove-68066.herokuapp.com/mybooking?patient=${user.email}`,{
                method:"GET",
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>{
                console.log('res',res);
                if(res.status===401||res.status===403){
                   navigate('/')
                   signOut(auth);
                   localStorage.removeItem('accessToken')
                }
               
               return res.json()
            })
            .then(data=>{
                setAppointment(data)
            console.log(data)
            })
        }
    },[user])
    return (
        <div>
            <h2>My Appointments: {appointment.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           appointment.map((singleAppoiment,index)=>
                               <tr>
                                   <th>{index + 1}</th>
                                   <td>{singleAppoiment.patientName}</td>
                                   <td>{singleAppoiment.date}</td>
                                   <td>{singleAppoiment.slot}</td>
                                   <td>{singleAppoiment.treatment}</td>
                               </tr>
                           )
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;