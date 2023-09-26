import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ComponentCard from "../components/common/ComponentCard";
import { Pagination } from "../components/common";

const Home = () => {
  // function handle() {
  //   alert("Are you sure you want to leave the page?");
  //   return;
  // }
  // useEffect(() => {
  //   window.addEventListener("beforeunload", handle);
  // }, []);

  // // return () => {
  // // window.removeEventListener("beforeunload", (e) => {
  // // e.preventDefault();
  // // return "Are you sure you want to leave the page?";
  // // });
  // // };
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 100; // Replace with the actual total number of pages

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //   // You can also load data for the selected page here
  // };
  // // Reference to the ul container
  // const ulContainerRef = useRef(null);

  // // State to track whether the arrows should be visible
  // const [showLeftArrow, setShowLeftArrow] = useState(false);
  // const [showRightArrow, setShowRightArrow] = useState(false);

  // // Function to scroll the ul container left
  // const scrollLeft = () => {
  //   ulContainerRef.current.scrollTo({
  //     left: ulContainerRef.current.scrollLeft - 500, // Adjust the scroll distance as needed
  //     behavior: "smooth", // Add smooth scrolling
  //   });
  // };

  // // Function to scroll the ul container right
  // const scrollRight = () => {
  //   ulContainerRef.current.scrollTo({
  //     left: ulContainerRef.current.scrollLeft + 500, // Adjust the scroll distance as needed
  //     behavior: "smooth", // Add smooth scrolling
  //   });
  // };

  // // Check if there's content to scroll on mount and when the scroll position changes
  // useEffect(() => {
  //   const container = ulContainerRef.current;

  //   const handleScroll = () => {
  //     setShowLeftArrow(container.scrollLeft > 0);
  //     setShowRightArrow(
  //       container.scrollLeft < container.scrollWidth - container.clientWidth
  //     );
  //   };

  //   container.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Check on mount

  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // // Function to temporarily disable the scrollbar during scrolling
  // const disableScrollbar = () => {
  //   ulContainerRef.current.style.overflow = "hidden";
  //   setTimeout(() => {
  //     ulContainerRef.current.style.overflow = "scroll";
  //   }, 1000); // Adjust the delay as needed
  // };

  return (
    <>
      {/* <div className="w-full flex flex-col justify-start items-start px-12">
        <div className="w-full auto flex flex-col justify-start items-start ">
          <h1 className="text-xl font-bold">Explore all the components</h1>
          <div
            className="relative hide-scrollbar mt-2"
            onScroll={disableScrollbar}
          >
            {showLeftArrow && (
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full bg-[#1a1a1a] hover:bg-[#343434] backdrop-blur-md shadow-arrow p-3"
                onClick={scrollLeft}
              >
                <FaChevronLeft />
              </button>
            )}
            <ul
              ref={ulContainerRef}
              className="flex items-center space-x-2 no-scrollbar" // Removed justify-center
              style={{
                width: "90vw",
                scrollBehavior: "smooth", // Add smooth scrolling to the ul container
                overflowX: "scroll", // Enable horizontal scrolling
              }}
            >
              {Array.from({ length: 30 }, (_, index) => (
                <li
                  key={index}
                  className="bg-[#151515] hover:bg-[#2b2b2b] border-2 border-[#212121] px-6 py-2 rounded-full"
                >
                  Tags{index + 1}
                </li>
              ))}
            </ul>
            {showRightArrow && (
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-[#1a1a1a] hover:bg-[#343434] backdrop-blur-md shadow-arrow p-3"
                onClick={scrollRight}
              >
                <FaChevronRight />
              </button>
            )}
          </div>
        </div>
        <div className="w-full h-auto flex flex-wrap gap-8 my-10 justify-between items-center">

          {Array.from({ length: 12 }, (_, index) => (
            <ComponentCard />
          ))}
        </div>
        <div className="w-full px-12 mt-2 flex justify-center items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div> */}
    </>
  );
};

export default Home;
