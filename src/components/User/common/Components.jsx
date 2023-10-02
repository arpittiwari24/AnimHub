import React,{useState,useEffect} from "react";
import { ComponentCard } from "../../common";
import {LuTextCursorInput} from "react-icons/lu"
import {RxButton} from "react-icons/rx"
import {TbLoader3} from "react-icons/tb"
import {PiSlidersHorizontalBold} from "react-icons/pi"


const Components = ({userInfo}) => {
  console.log(userInfo);
  // console.log(userInfo.components[0]);
  const [info,setInfo] = useState(userInfo);
  useEffect(() => {
    setInfo(userInfo);
  }, [info, userInfo]);
  return (
    <>
      <h1 className="text-3xl w-full text-left font-bold">Components</h1>
      <div className="w-full flex justify-between items-start">
        <div className="w-[70%] h-auto flex flex-wrap gap-4 my-10 justify-between items-center">
          {/* cards */}
          {info.components && info.components.map((card, index) => (
            <ComponentCard key={index}/>
          ))}
        </div>
        <div className="w-[30%] my-10 px-10 flex flex-col justify-center items-start ">
          <h2 className="w-full bg-[#292929] px-10 py-2 font-[500] text-[20px]">Categories</h2>
          <ul className="w-full flex flex-col bg-[#111] px-10 py-5">
            <li className="py-2 flex items-center gap-2 cursor-pointer border-b-2 border-secondary">Input <LuTextCursorInput className="scale-125 text-primary"/> </li>
            <li className="py-2 flex items-center gap-2 cursor-pointer border-b-2 border-secondary">Button <RxButton className="scale-125 text-primary"/> </li>
            <li className="py-2 flex items-center gap-2 cursor-pointer border-b-2 border-secondary">Slider <PiSlidersHorizontalBold className="scale-125 text-primary"/> </li>
            <li className="py-2 flex items-center gap-2 cursor-pointer border-b-2 border-secondary">Loader <TbLoader3 className="scale-125 text-primary"/> </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Components;
