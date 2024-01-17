import React from 'react'
import { deleteComponent } from '../../apis/components.api';
import { toast } from 'react-hot-toast';

const DeletePopup = ({email, componentId, closePopup}) => {
  const deletePopup = async () => {
    console.log(email, componentId);
    const delComp = await deleteComponent({email, componentId})
    console.log("Delete Popup");
    console.log("fdnknjn", delComp);
    closePopup();
    toast.success("Component Deleted Successfully")
  }
  return (
    <>
      <h1 className='m-10 text-[20px] font-[600]'>Are you sure You want to delete this component ?</h1>
      <div>
        <button className='m-10 px-5 py-2 rounded-md bg-red-500 text-secondary font-[600]' onClick={deletePopup}>Delete</button>
        <button className='m-10 px-5 py-2 rounded-md border font-[600] hover:bg-secondary' onClick={closePopup}>Cancel</button>
      </div>
    </>
  )
}

export default DeletePopup