import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const AddServiceModal = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
       if(e.target.id ==="container") onClose()
    };

    if (!visible) return null;
  return (
      <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
          
              <div className='bg-white w-[500px] h-[500px] flex flex-col rounded-3xl m-2'>
                  <div className='flex flex-row-reverse text-4xl p-4 border-b-2 border-black'>
                      <button onClick={onClose} ><AiFillCloseCircle/></button>
              </div>
              <div className='h-full w-full flex items-center justify-center flex-col'>
                  <h1 className='text-3xl font-medium mb-8'>Add Service</h1>
                  <input type="text" className='border-2 border-gray-400 rounded-3xl h-16 w-[85%] text-lg font-medium p-4' />
                  <button className='bg-green-500 hover:bg-green-600 rounded-3xl h-16 w-[60%] text-lg font-medium mt-6 p-4 uppercase'>save</button>
              </div>
              </div>
          
      
    </div>
  )
}

export default AddServiceModal
