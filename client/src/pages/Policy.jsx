import React, { useState } from "react";
import { Disclaimer, PrivacyPolicy } from "../components/Policies";

const Policy = () => {
  const [policy, setPolicy] = useState(0);
  return (
    <>
      <button
        className="flex justify-center items-center rounded-sm px-6 py-3 font-semibold text-black bg-primary disabled:bg-[#2f2f2f] disabled:text-[#969696] mt-4 disabled:cursor-not-allowed"
        onClick={() => setPolicy(0)}
      >
        Privacy Policy
      </button>
      <button
        className="flex justify-center items-center rounded-sm px-6 py-3 font-semibold text-black bg-primary disabled:bg-[#2f2f2f] disabled:text-[#969696] mt-4 disabled:cursor-not-allowed"
        onClick={() => setPolicy(1)}
      >
        Disclaimer
      </button>
      {policy === 0 && <PrivacyPolicy />}
      {policy === 1 && <Disclaimer />}
    </>
  );
};

export default Policy;
