import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const User = () => {

    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch('https://thawing-cove-68066.herokuapp.com/user',{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    // const[users,setUsers]=useState([])
    // useEffect(()=>{
    //     fetch('https://thawing-cove-68066.herokuapp.com/user')
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data))
    // },[])
    return (
        <div>
            <h2 className='text-2xl'>All Users:{users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user=><UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;