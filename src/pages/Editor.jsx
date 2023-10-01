import React, { useState, useEffect } from "react";
import CodeEditor from "../components/common/Editor/CodeEditor";
import CodeOutput from "../components/common/CodeOutput";
import ReactGA from "react-ga4";
import { getData } from "../api";
import { usePopupContext } from "../context/PopupContextProvider";
import LanguagePopup from "../components/Popups/LanguagePopup";
import { RxCross2 } from "react-icons/rx";

const Editor = () => {
  const [viewers, setViewers] = useState(0)
  const { isOpen, popupContent, openPopup, closePopup } = usePopupContext()
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
  const handleOpenPopup = () => {
    const content = (
      <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen bg-[#00000070] z-20 p-6">
        <div className="relative flex justify-center items-center bg-[#151515]  h-auto w-auto flex-col gap-4 rounded-md">
          <LanguagePopup closePopup={closePopup} />
        </div>
      </div>
    )
    openPopup(content)
  }
  return (
    <div className="relative h-[100vh] py-[0px] px-[20px]">
      <button className="bg-[#292929] p-[10px] my-[10px]" onClick={handleOpenPopup}>Create New</button>
      <CodeEditor />
      {/* {"Currrent Online Members: " + viewers} */}
    </div>
  )
};

export default Editor;
