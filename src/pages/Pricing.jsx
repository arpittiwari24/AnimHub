import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/common";
import { FaCircleCheck } from "react-icons/fa6";

const Pricing = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Payment logic

    // navigate back to home
    navigate("/");
  };
  return (
    <div className="relative h-[70vh]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vh] w-5/6 flex flex-col justify-around items-center 
    bg-[#151515] rounded-lg"
      >
        <h1 className="font-[800] text-[40px]">
          Get Full{" "}
          <span className="px-[10px] py-[5px] text-black bg-primary rounded-sm">
            Access
          </span>
        </h1>
        <h3 className="text-center font-[500] text-[18px] text-[#a1a1a1]">
          Unlock instant access to all UI components and daily new releases.
        </h3>
        <div className="w-[750px] h-[220px] flex justify-center items-center">
          <div className="w-1/3 h-full  bg-primary flex flex-col justify-between items-start py-4 px-4 rounded-l-sm rounded-r-2xl">
            <h3 className="text-black text-xl font-bold ">Hub Pass</h3>
            <div>
              <h2 className="text-black text-5xl font-bold ">$100</h2>
              <span className="bg-black text-primary rounded-sm text-sm font-bold p-1">
                Paid every month
              </span>
            </div>
            <div></div>
          </div>
          <div className="w-2/3 h-full bg-black flex justify-between items-start py-4 px-8 rounded-r-sm rounded-l-2xl">
            <div className="flex flex-col justify-center items-start gap-4">
              <h3 className="text-[#61E3FF] font-bold text-xl">
                All premium features:
              </h3>
              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="flex justify-start items-center gap-2 text-sm font-bold">
                  <FaCircleCheck className="w-4 h-4 text-[#61E3FF]" />
                  Unlimited Downloads Per Day
                </li>
                <li className="flex justify-start items-center gap-2 text-sm font-bold">
                  <FaCircleCheck className="w-4 h-4 text-[#61E3FF]" />
                  Access to all UI components
                </li>
                <li className="flex justify-start items-center gap-2 text-sm font-bold">
                  <FaCircleCheck className="w-4 h-4 text-[#61E3FF]" />
                  Access to all new Releases
                </li>
                <li className="flex justify-start items-center gap-2 text-sm font-bold">
                  <FaCircleCheck className="w-4 h-4 text-[#61E3FF]" />
                  Get a PRO badge on profile
                </li>
                <li className="flex justify-start items-center gap-2 text-sm font-bold">
                  <FaCircleCheck className="w-4 h-4 text-[#61E3FF]" />
                  Lorem epsum torem korem
                </li>
              </ul>
            </div>
            <div></div>
            <Button
              label={"Buy now"}
              padx={"35px"}
              pady={"15px"}
              fontSize={"20px"}
              onClick={() => {
                handlePayment();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
