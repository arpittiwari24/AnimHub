import React from 'react'
import { Button } from '../common'
import dummyImage from '../../assets/dummyImage.jpg'
import countries from './Countries'
import { useState } from 'react'

const OnBoarding = () => {
    const [form, setForm] = useState({})
    const [errorMsg, setErrorMsg] = useState('UserName taken ')
    const halfStyle = 'w-[48%] py-[10px] px-[10px] bg-[#252525] text-[#fff] rounded-md'
    const socialStyle = "w-full px-[10px] py-[10px] rounded-md bg-[#252525] text-[#fff]"
    const submitData = () => {
        console.log('Data Submitted')
        console.log(form);
    }
    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='flex flex-col items-center justify-around'>
            <h1 className='font-[800] text-[30px]'>Create Your <span className="px-[20px] py-[5px] text-black bg-primary rounded-sm"> Profile</span>
            </h1>
            <form className='flex flex-col w-1/3 items-center gap-[10px] mt-[20px] mb-[50px]'>
                <img src={dummyImage} alt="Image" className='w-[150px] h-[150px] border border-6 rounded-full mb-[20px]' />
                <p className="font-[600] text-[#ff6961]">{errorMsg}</p>
                <div className='w-full flex justify-between'>
                    <input type="text" placeholder="Name" name="name" className={`${halfStyle}`} onChange={changeHandler}/>
                    <input type='text' placeholder='userName' name="username" className={`${halfStyle}`} onChange={changeHandler}/>
                </div>
                <div className='w-full flex justify-between'>
                    <select placeholder='Country' defaultValue="India" name='country' defaultChecked="false" className={`${halfStyle} pr-4`} onChange={changeHandler}>
                        {countries.map((country) => <option>{country}</option>)}
                    </select>
                    <input type='email' placeholder='Email' name='email' className={`${halfStyle}`} onChange={changeHandler}/>
                </div>
                <input type='text' placeholder='Github' name="github" className={`${socialStyle}`} onChange={changeHandler}/>
                <input type='text' placeholder='LinkedIn' name="linkedin" className={`${socialStyle}`} onChange={changeHandler}/>
                <input type='text' placeholder='Instagram' name="insta" className={`${socialStyle}`} onChange={changeHandler}/>
                <textarea placeholder='About You' name="bio" className={`${socialStyle} h-[100px] resize-none`} onChange={changeHandler}></textarea>
                {/* <input type='submit' value='Submit' className='w-[100px] py-[10px] px-[10px] bg-primary text-[#fff] rounded-md' /> */}
            </form>
            <Button onClick={submitData} label={"Save"} padx={"40px"} pady={"7.5px"} fontSize={"20px"} className="mt-[100px]" />
        </div>
    )
}

export default OnBoarding