import React from "react";

import { useParams } from "react-router-dom";

const ComponentPage = () => {
  const { id } = useParams();
  return <>{id}</>;
};

export default ComponentPage;
