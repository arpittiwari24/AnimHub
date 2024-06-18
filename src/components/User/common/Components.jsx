import React, { useState, useEffect } from "react";
import { ComponentCard } from "../../common";
import { LuTextCursorInput } from "react-icons/lu";
import { RxButton } from "react-icons/rx";
import { TbLoader3 } from "react-icons/tb";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { auth } from "../../../firebase/auth";

const Components = ({ userInfo }) => {
  // console.log(userInfo);
  // console.log(userInfo.components[0]);
  const [info, setInfo] = useState(userInfo);
  useEffect(() => {
    setInfo(userInfo);
  }, [info, userInfo]);
  return (
    <>
      <div className="w-full flex justify-between items-start">
        <div className="w-[70%] flex flex-col justify-between items-start">
          {auth?.currentUser?.email === userInfo?.email ? (
             <div className="flex flex-col justify-between items-start">
             <div className="w-full h-auto flex flex-wrap gap-4 my-10 justify-between max-sm:justify-center items-center">
               <h1 className="text-3xl max-sm:text-2xl w-full text-left max-sm:text-center font-semibold">
                 Unverified Components
               </h1>
 
               {/* cards */}
 
               {info?.components &&
                 info?.components.map((card, index) => {
                   if (!card.verified) {
                     return <ComponentCard key={index} data={card} />;
                   } else {
                     return <>🍆</>;
                   }
                 })}
               {info?.components?.length === 0 && (
                 <h1 className="text-[25px]">No Components</h1>
               )}
             </div>
           </div>
          ) : (
            <div className="flex flex-col justify-between items-start">
            
          </div>
          )}

          <div className="flex flex-col justify-between items-start">
            <div className="w-full h-auto flex flex-wrap gap-4 my-10 items-center">
              <h1 className="text-3xl max-sm:text-2xl w-full text-left font-semibold max-sm:text-center">
                Components
              </h1>
              {/* cards */}
              {info?.components &&
                info?.components.map((card, index) => {
                  if (card.verified) {
                    return <ComponentCard key={index} data={card} />;
                  } else {
                    return <></>;
                  }
                })}
              {info?.components?.length === 0 && (
                <h1 className="text-[25px]">No Unverified Components</h1>
              )}
            </div>
          </div>
        </div>
        <div className="w-[30%] my-10 px-10 flex flex-col justify-center items-start max-sm:hidden">
          <h2 className="w-full bg-[#292929] px-10 py-2 font-[500] text-[20px]">
            Categories
          </h2>
          <ul className="w-full flex flex-col bg-[#111] px-10 py-5">
            <li className="py-2 flex items-center gap-2 cursor-pointer border-b-2 border-secondary">
              Input <LuTextCursorInput className="scale-125 text-primary" />{" "}
            </li>
            <li className="py-2 flex items-center gap-2 cursor-pointer border-b-2 border-secondary">
              Button <RxButton className="scale-125 text-primary" />{" "}
            </li>
            <li className="py-2 flex items-center gap-2 cursor-pointer border-b-2 border-secondary">
              Slider{" "}
              <PiSlidersHorizontalBold className="scale-125 text-primary" />{" "}
            </li>
            <li className="py-2 flex items-center gap-2 cursor-pointer border-b-2 border-secondary">
              Loader <TbLoader3 className="scale-125 text-primary" />{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Components;
