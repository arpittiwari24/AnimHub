/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import { Button } from "../components/common";
import { FaCircleCheck } from "react-icons/fa6";
import { useUserContext } from "../context/UserContextProvider";
import { Link } from "react-router-dom";
import { usePremiumContext } from "../context/IsPremiumContextProvider";

const Pricing = () => {

  const {plan} = usePremiumContext()
  console.log(plan);
  const yearlyPrice = import.meta.env.VITE_REACT_APP_yearly_price
  const monthlyPrice = import.meta.env.VITE_REACT_APP_monthly_price
  const dailyPrice = import.meta.env.VITE_REACT_APP_daily_price
  const apiUrl = import.meta.env.VITE_REACT_APP_PROD_API_URL

  let payload
  let value

  const handleClick = () => {
    const priceValue = document.getElementById("lookup_key")
    value = priceValue.value
  
    payload = {
      price: value
    }
  }


  return (
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
    <p className="text-gray-500 mb-8">Select the plan that suits you the best.</p>
    
    <div className="flex justify-center gap-4">
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
        <div className="mt-4">
          <form action= {`${apiUrl}/api/v1/payments/create-checkout-session`} content={payload} method="POST">
          <input
          type="hidden"
          id="lookup_key"
          name="price"
          value={dailyPrice}
        />
            <Button
              id="daily-plan-button"
              type="submit"
              label={"Buy now"}
              px={"8"}
              py={"4"}
              fontSize={"16px"}
              variant="primary"
              onClick={handleClick}
            />
          </form>
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
        <div className="mt-4">
          <form action={`${apiUrl}/api/v1/payments/create-checkout-session`} content={payload} method="POST">
          <input
          type="hidden"
          id="lookup_key"
          name="price"
          value={monthlyPrice}
        />
            <Button
              id="monthly-plan-button"
              type="submit"
              label={"Buy now"}
              px={"8"}
              py={"4"}
              fontSize={"16px"}
              variant="primary"
              onClick={handleClick}
            />
          </form>
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
        <div className="mt-4">
          <form action={`${apiUrl}/api/v1/payments/create-checkout-session`} content={payload} method="POST">
          <input
          type="hidden"
          id="lookup_key"
          name="price"
          value={yearlyPrice}
        />
            <Button
              id="yearly-plan-button"
              type="submit"
              label={"Buy now"}
              px={"8"}
              py={"4"}
              fontSize={"16px"}
              variant="primary"
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};

const SuccessDisplay =  ({ sessionId}) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_PROD_API_URL
  const {userData} = useUserContext();
  const email = userData?.email
  console.log("email:", email)

  useEffect(() => {
  const button = document.getElementById('checkout-and-portal-button');
  if (button) {
    // Add a delay if necessary
    setTimeout(() => {
      button.click();
    }, 500); // Delay of 500 milliseconds
  }
}, []);

  return (
    <section>
      <div className="product Box-root">
        <div className="description Box-root">
          <h3>Subscription successful!</h3>
        </div>
      </div>
      <form action= {`${apiUrl}/api/v1/payments/create-portal-session`}
      method="POST"
      >
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <input
          type="hidden"
          id="email"
          name="email"
          value={email}
        />
        <Button id="checkout-and-portal-button" 
        type="submit"  
        label={"Click Here to return to Main Content"}
              padx={"35px"}
              pady={"15px"}
              fontSize={"20px"} />
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
    <Button padx={"35px"}
              pady={"15px"}
              fontSize={"20px"}>
    <Link to="/">Return to home page</Link>
    </Button>
  </section>
);

export default function Subscription() {
  let [message, setMessage] = useState('');
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(false);
      setMessage(
        "Payment canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  if (!success && message === '') {
    return <Pricing />;
  } else if (success && sessionId !== '') {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
}


