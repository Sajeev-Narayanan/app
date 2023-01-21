import React, { useRef, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsImages } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";



const AddImage = ({ visible, onClose }) => {


  const [image, SetImage] = useState("");
  const imageInput = useRef(null);

  const imageHalndler=()=>{}

  const resetShare = () => {
    SetImage(null);
  };

    const handleOnClose = (e) => {
       if(e.target.id ==="container") onClose()
    };

    if (!visible) return null;
  return (
      <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
          
              <div className='bg-white w-[500px]  rounded-3xl flex flex-col m-2'>
                  <div className='flex flex-row-reverse border-b-2 border-black text-4xl p-4'>
                      <button onClick={onClose} ><AiFillCloseCircle/></button>
              </div>
              <div className='h-full w-full flex items-center justify-center flex-col'>
                  <h1 className='text-3xl font-medium mb-8'>Add Image</h1>
                  
                  
                   <div className="w-[400px] h-[350px] flex  border-zinc-300 border-2 rounded-2xl items-center justify-center">
            {image ? (
              <div
                className="previewImage w-[370px] h-[320px] bg-contain bg-center bg-no-repeat "
                style={{
                  backgroundImage: `url(${URL.createObjectURL(image)})`,
                }}
              >
                <FaTimes onClick={resetShare} />
              </div>
            ) : (
              <div
                className="w-[370px] h-[320px] flex flex-col bg-[#f6f6f6] cursor-pointer rounded-2xl items-center justify-center"
                onClick={() => imageInput.current.click()}
              >
                <BsImages className="text-[30px]" />
                <h1>Add photos</h1>
              </div>
            )}
          </div>
          <input
            onChange={(e) => {
              SetImage(e.target.files[0]);
              // console.log(image);
            }}
            type="file"
            id="file"
            ref={imageInput}
            style={{ display: "none" }}
            accept="image/x-png,image/gif,image/jpeg"
            
          />

          
           
            <button onClick={imageHalndler} className='bg-green-500 hover:bg-green-600 mb-7 rounded-3xl h-16 w-[60%] text-lg font-medium mt-6 p-4 uppercase'>save</button>
        
              </div>
              </div>
          
      
    </div>
  )
}

export default AddImage
