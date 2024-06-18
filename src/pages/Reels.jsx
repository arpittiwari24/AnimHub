/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react";
import { getVerifiedComponents } from "../apis/components.api";
import { usePremiumContext } from "../context/IsPremiumContextProvider";
import { useUserContext } from "../context/UserContextProvider";
import { ComponentCard, Loader } from "../components/common";
import ReactGA from "react-ga4";
import "./Reels.css"

export default function Reels() {

  const [componentsData, setComponentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {premium} = usePremiumContext()
  const {userData} = useUserContext()

  const handleData = async () => {
    const data = await getVerifiedComponents();
    setComponentsData(data);
    setLoading(false)
  }

  function handle() {
    alert("Are you sure you want to leave the page?");
    return;
  }

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    window.addEventListener("beforeunload", handle);
    handleData();
  }, []);

  const vidRef = useRef()

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);


  return (
    <div className="App">
      <center>
          <div
            className="video-container w-full"
          >
            <div className="reels py-10 bg-black">
            {componentsData
              .filter((component) => !component.premium || premium)
              .map((card, index) => (
                  <div key={index} className="py-20 flex gap-10 items-center justify-center">
                    <ComponentCard ref={vidRef} key={Math.floor(Math.random(index) * componentsData.length)} data={card} loop/>
                  </div>
              ))}
            {premium &&
              userData?.email !== undefined &&
              componentsData
                .filter((component) => component.premium)
                .map((card, index) => (
                  <div key={index} className="hidden" /> // Empty container for hidden content
                ))}
            </div>
            {loading && (
              <div className="flex justify-center items-center w-full">
                <Loader />
              </div>
            )}
            {/* <div ref={loaderRef}></div> */}
          </div>
      </center>
    </div>
  );
}