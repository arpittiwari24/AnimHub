import React, { useState, useEffect } from "react";
import { getUnVerifiedComponents } from "../../apis/components.api";
import { ComponentCard } from "../common";
const Dashboard = () => {
  const [unVerifiedComponents, setUnVerifiedComponents] = useState([]);

  useEffect(() => {
    const getComponents = async () => {
      const res = await getUnVerifiedComponents();
      setUnVerifiedComponents(res);
    };
    getComponents();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col justify-start items-start px-12">
        <div className="w-full h-auto flex flex-wrap gap-8 my-10 justify-between items-center">
          {unVerifiedComponents.map((component) => (
            <ComponentCard data={component} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
