import React, { useEffect } from "react";
import CodeEditor from "../components/common/Editor/CodeEditor";
import CodeOutput from "../components/common/CodeOutput";
import ReactGA from "react-ga4";

const Editor = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname })
  }, [])
  return (
  <div>
    <CodeEditor />
  </div>
  )
};

export default Editor;
