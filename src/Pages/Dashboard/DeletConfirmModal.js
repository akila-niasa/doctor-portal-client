import React from 'react';
import toast from 'react-hot-toast';

const DeletConfirmModal = ({deletingDoctor,refetch,setDeletingDoctor}) => {
    const {name,email}=deletingDoctor

    const handleDelete=()=>{
        // fetch(`http://localhost:5000/doctor/${email}`,{
        //     method:"DELETE",
        //     headers: {
           
        //         authorization:`Bearer ${localStorage.getItem('accessToken')}`
        //     },
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     
        // })
        const processed = window.confirm("are you want to delete")
        if (processed) {
            fetch(`http://localhost:5000/doctor/${email}`,{
                method:"DELETE",
                headers: {
               
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                                toast.success(`${name} is deleted`)
                                refetch()
                            }
                  
                })
        }
        
    }
    return (
        <div>
<input type="checkbox" id="delete-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete  ${name}!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
    <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-modal" class="btn btn-xs">Cancel</label>
                    </div>
    </div>
  </div>
</div> 
            

    );
};

export default DeletConfirmModal;