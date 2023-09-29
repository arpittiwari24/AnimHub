import React, { useState, useEffect } from "react";
import CodeEditor from "../components/common/Editor/CodeEditor";
import CodeOutput from "../components/common/CodeOutput";
import ReactGA from "react-ga4";
import { getData } from "../api";

const Editor = () => {
  const [viewers, setViewers] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const resData = await getData("/api/v1/data/viewersData")
      console.log(resData.data[0].metricValues[0].value);
      setViewers(resData.data[0].metricValues[0].value)
    }
    // fetchData()
    ReactGA.send({ 
      hitType: "pageview", 
      page: window.location.pathname 
    })
  }, [])
  return (
  <div className="h-[100vh]">
    <CodeEditor />
    {"Currrent Online Members: " + viewers}
  </div>
  )
};

export default Editor;
