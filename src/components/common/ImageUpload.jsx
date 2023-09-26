import React, { useState,useRef } from 'react'
// import {AiFillEdit} from 'react-icons/ai'
// import {BiEditAlt} from 'react-icons/bi'
import { MdOutlineModeEdit } from 'react-icons/md'
const ImageUpload = ({ src, form, setForm }) => {

  const [edit, setEdit] = useState(false)
  const [fileUrl, setFileUrl] = useState(null)
  const fileRef = useRef(null)

  const handleFileChange = async (e) => {
    console.log("sfdgd");
    const MAX_FILE_SIZE = 1024 * 256
    if (e.target.files[0]) {
      setFileUrl(URL.createObjectURL(e.target.files[0]))
      if (e.target.files[0].size > MAX_FILE_SIZE) {
        alert('File is too big')

        return
      }
      const newUrl = await toBase64(e.target.files[0])
      setForm({
        ...form,
        profilePicUrl: newUrl
      })
      // console.log(await toBase64(e.target.files[0]))
      // console.log(e.target.files[0]);
    }
    // console.log(e.target.files[0])
  }

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  return (
    <div className='relative h-[150px] aspect-square rounded-full border border-6 border-[#f00] overflow-hidden'>
      {/* {src} */}
      <img src={ fileUrl || src} alt='Image'
        className="h-full hover:opacity-50 cursor-pointer object-cover object-center"
        onMouseOver={() => setEdit(true)}
        onMouseLeave={() => setEdit(false)}
        onClick={() => fileRef.current.click()}
      />
      <input 
      type="file" 
      name="file" id="file" 
      className="inputfile" 
      ref={fileRef} 
      accept='image/*'
      onChange={handleFileChange}
      hidden={true} 
      
      />
      {edit &&
        <button className='absolute text-[#fff] scale-[2] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[90%]'>
          <MdOutlineModeEdit />
        </button>
      }
    </div>
  )
}

export default ImageUpload