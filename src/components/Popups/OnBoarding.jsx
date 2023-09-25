import React, { useContext, useEffect } from 'react'
import { Button } from '../common'
import countries from './Countries'
import { useState } from 'react'
import { sendData } from '../../api'
import { AuthContext } from '../../context/AuthContextProviders'
import {useNavigate} from 'react-router-dom'

const OnBoarding = () => {

    const navigate = useNavigate()
    const currentUser = useContext(AuthContext).user;
    const [form, setForm] = useState({
        profilePicUrl: currentUser.photoURL || "https://wallpapers.com/images/featured/dark-profile-pictures-gvfjo9dys52qj75q.jpg",
        gradientBg: "gradient Colors",
        country: "India",
        email: currentUser.email || "",
        name: currentUser.displayName || "",
        bio: "",
        github: "",
        linkedin: "",
        insta: "",
        username: ""
    })
    const [errorMsg, setErrorMsg] = useState('')
    const halfStyle = 'w-[48%] py-[10px] px-[10px] bg-[#252525] text-[#fff] rounded-md'
    const socialStyle = "w-full px-[10px] py-[10px] rounded-md bg-[#252525] text-[#fff]"
    const submitData = async () => {
        console.log(form);
        console.log("The Current Log");
        if (!form.name) {
            setErrorMsg("Please Enter a Name")
            return
        }
        if (!form.username) {
            setErrorMsg("Please Enter a Username")
            return
        }
        console.log(form);
        const dataRes = await sendData("/api/v1/auth/signup", form)
            .then((res) => {
                console.log(res);
                navigate("/dashboard")
                return
                // setIsOnboardingOpen(false)
            })
            .catch((error) => {
                console.log(error);
                setErrorMsg(`${error.response.data.message} - Please try Github Username`)
            })
    }
    const changeHandler = (e) => {
        setErrorMsg("")
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="w-[50vw] h-full flex justify-center items-end rounded-md">
            <div className="w-[full] h-full bg-[#1a1a1a] flex flex-col justify-start items-center gap-2 px-2 pt-6 py-4">
                {/* <div className='w-1/3 p-[50px] flex flex-col bg-[#1a1a1a] items-center justify-around'> */}
                <h1 className='font-[800] text-[30px]'>Create Your <span className="px-[20px] py-[5px] text-black bg-primary rounded-sm"> Profile</span>
                </h1>
                <form className='flex flex-col w-full items-center gap-[10px] mt-[20px] mb-[50px]'>
                    <img src={form.profilePicUrl} alt="Image" className='w-[150px] h-[150px] border border-6 rounded-full mb-[20px]' />
                    <p className="font-[600] text-[#ff6961]">{errorMsg}</p>
                    <div className='w-full flex justify-between'>
                        <input type="text" placeholder="Name" name="name" defaultValue={form.name} className={`${halfStyle}`} onChange={changeHandler} />
                        <input type='text' placeholder='userName' name="username" className={`${halfStyle}`} onChange={changeHandler} />
                    </div>
                    <div className='w-full flex justify-between'>
                        <select placeholder='Country' defaultValue="India" name='country' defaultChecked="false" className={`${halfStyle} pr-4`} onChange={changeHandler}>
                            {countries.map((country, idx) => <option key={idx}>{country}</option>)}
                        </select>
                        <input type='email' placeholder='Email' value={form.email} name='email' disabled={true} title="Email Once set cannot be changed" className={`${halfStyle}`} />
                    </div>
                    <input type='text' placeholder='Github' name="github" className={`${socialStyle}`} onChange={changeHandler} />
                    <input type='text' placeholder='LinkedIn' name="linkedin" className={`${socialStyle}`} onChange={changeHandler} />
                    <input type='text' placeholder='Instagram' name="insta" className={`${socialStyle}`} onChange={changeHandler} />
                    <textarea placeholder='About You' name="bio" className={`${socialStyle} h-[100px] resize-none`} onChange={changeHandler}></textarea>
                    {/* <input type='submit' value='Submit' className='w-[100px] py-[10px] px-[10px] bg-primary text-[#fff] rounded-md' /> */}
                </form>
                <Button onClick={submitData} label={"Save"} padx={"40px"} pady={"7.5px"} fontSize={"20px"} className="mt-[100px]" />
                {/* </div> */}
            </div>
        </div>
    )
}


export default OnBoarding