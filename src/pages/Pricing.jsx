/* eslint-disable react/prop-types */

import { Button } from "../components/common";
import { FaCircleCheck } from "react-icons/fa6";
import { usePremiumContext } from "../context/IsPremiumContextProvider";

const Pricing = () => {

  const {plan} = usePremiumContext()
  console.log(plan);
  const yearlyPrice = "415056"
  const monthlyPrice = "415054"
  const dailyPrice = "415019"
  const apiUrl = import.meta.env.VITE_REACT_APP_PROD_API_URL

  let payload

  return (
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-4 text-center">Choose Your Plan</h1>
    <p className="text-gray-500 mb-8">Select the plan that suits you the best.</p>
    
    <div className="flex max-sm:flex-col justify-center gap-4 max-sm:px-2">
      {/* Daily Plan */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-md">
      <div className="flex flex-row gap-5 justify-center items-center">
       <h2 className="text-xl text-white font-bold mb-4">Daily Pass</h2>
       {plan === dailyPrice ? (
        <h2 className="text-xl text-white bg-yellow-700 font-bold mb-4">Active</h2>
       ) : (
        <div></div>
       )}
       </div>
        <ul className="text-white">
          <li className="flex items-center mb-2">
            <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
            Unlimited Downloads Per Day
          </li>
          <li className="flex items-center mb-2">
            <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
            Access to all UI components
          </li>
          <li className="flex items-center mb-2">
            <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
            Access to all new Releases
          </li>
        </ul>
        <div className="mt-4 text-center">
        <a href="https://animhub.lemonsqueezy.com/buy/2b70e640-80f2-4d5a-8f5d-3a8b36a37876?embed=1">
           <Button
              id="daily-plan-button"
              type="submit"
              label={"Buy now"}
              px={"8"}
              py={"4"}
              fontSize={"16px"}
              variant="primary"
            />
           </a>
        </div>
      </div>
  
      {/* Monthly Plan */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-md">
      <div className="flex flex-row gap-5 justify-center items-center">
       <h2 className="text-xl text-white font-bold mb-4">Monthly Pass</h2>
       {plan === monthlyPrice ? (
        <h2 className="text-xl text-white bg-yellow-700 font-bold mb-4">Active</h2>
       ) : (
        <div></div>
       )}
       </div>
        <ul className="text-white">
          <li className="flex items-center mb-2">
            <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
            Unlimited Downloads Per Day
          </li>
          <li className="flex items-center mb-2">
            <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
            Access to all UI components
          </li>
          <li className="flex items-center mb-2">
            <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
            Access to all new Releases
          </li>
        </ul>
        <div className="mt-4 text-center">
        <a href="https://animhub.lemonsqueezy.com/buy/802e0dc9-6658-4479-8b92-6ab522f74e2e?embed=1">
           <Button
              id="monthly-plan-button"
              type="submit"
              label={"Buy now"}
              px={"8"}
              py={"4"}
              fontSize={"16px"}
              variant="primary"
            />
           </a>
        </div>
      </div>
  
      {/* Yearly Plan */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-md">
       <div className="flex flex-row gap-5 justify-center items-center">
       <h2 className="text-xl text-white font-bold mb-4">Yearly Pass</h2>
       {plan === yearlyPrice ? (
        <h2 className="text-xl text-white bg-yellow-700 font-bold mb-4">Active</h2>
       ) : (
        <div></div>
       )}
       </div>
        <ul className="text-gray-white">
          <li className="flex items-center mb-2">
            <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
            Unlimited Downloads Per Day
          </li>
          <li className="flex items-center mb-2">
            <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
            Access to all UI components
          </li>
          <li className="flex items-center mb-2">
            <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
            Access to all new Releases
          </li>
        </ul>
        <div className="mt-4 text-center">
           <a href="https://animhub.lemonsqueezy.com/buy/8a66ea49-03b1-4651-8916-73f511d70e61?embed=1">
           <Button
              id="yearly-plan-button"
              type="submit"
              label={"Buy now"}
              px={"8"}
              py={"4"}
              fontSize={"16px"}
              variant="primary"
            />
           </a>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};

export default Pricing



