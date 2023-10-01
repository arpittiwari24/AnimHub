import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import dummyProfileImg from '../../assets/dummyImage.jpg'

const UserInfo = () => {
    return (
        <div className='w-full flex border-[#f00] gap-[20px] items-center'>
            <div className='rounded-full w-[50px]'>
                <img src={dummyProfileImg} alt='ProfileImg' className='w-full rounded-full' />
            </div>
            <div className='flex-grow'>
                <h1 className='font-[600] text-[20px]'>Om Gawande</h1>
                <a href='#' className='font-[400] text-[14px] text-[#FFA31A]'>
                    <h2>@spider.dev</h2>
                </a>
            </div>
            <AiFillGithub className='w-auto scale-150 hover:cursor-pointer' onClick={() => window.open("https://www.github.com/onkar58", "_blank")}/>
        </div>
    )
}

export default UserInfo