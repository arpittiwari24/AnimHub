import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getComponentById } from "../apis/components.api";

const ComponentPage = () => {
  const { id } = useParams();
  const [component, setComponent] = useState(null);
  const getComponentData = async () => {
    const fetchedComponent = await getComponentById(id);
    setComponent(fetchedComponent);
  };

  useEffect(() => {
    getComponentData();
  }, []);
  return <>{id}</>;
};

export default ComponentPage;
