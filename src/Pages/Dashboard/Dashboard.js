import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import User from './User';
import auth from '../../firebase.init';

const Dahboard = () => {
    const[user]=useAuthState(auth)
    const[admin]=useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                    {/* <!-- Page content here --> */}
                    <Outlet />
                   

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        <li><Link to="/dashboard/review">My Reviews</Link></li>
                        <li><Link to="/dashboard/history">My History</Link></li>
                        {
                           admin && <>
                           <li><Link to="/dashboard/user">ALll Users</Link></li>
                           <li><Link to="/dashboard/doctor">Add A Doctor</Link></li>
                           <li><Link to="/dashboard/managedoctor">Manage Doctor</Link></li>
                           </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dahboard;