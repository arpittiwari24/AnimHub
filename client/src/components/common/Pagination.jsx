import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5; // Maximum number of visible page links
  const pageNumbers = [];

  // Calculate the range of visible page numbers
  let startPage, endPage;

  if (totalPages <= maxVisiblePages) {
    // If there are fewer pages than the maximum visible pages, show all
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
    // If the current page is near the beginning
    startPage = 1;
    endPage = maxVisiblePages;
  } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
    // If the current page is near the end
    startPage = totalPages - maxVisiblePages + 1;
    endPage = totalPages;
  } else {
    // Otherwise, show a range around the current page
    startPage = currentPage - Math.floor(maxVisiblePages / 2);
    endPage = currentPage + Math.floor(maxVisiblePages / 2);
  }

  // Generate the array of page numbers for the visible range
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="w-full flex justify-center items-center my-4">
      <ul className="flex justify-center items-center pagination">
        <li
          className={`${
            currentPage === 1
              ? "bg-[##0e0e0e] cursor-not-allowed text-[#2f2f2f]"
              : "bg-primary hover:bg-[#ffb647] text-black"
          }  text-2xl font-semibold rounded-md px-8 py-2 flex justify-center items-center mx-1`}
          onClick={() => {
            if (currentPage !== 1) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          Prev
        </li>
        {startPage > 1 && (
          <li
            className="bg-gray-200 text-white rounded-full h-10 w-10 flex justify-center items-center mx-1 cursor-pointer"
            onClick={() => onPageChange(1)}
          >
            1
          </li>
        )}
        {startPage > 2 && (
          <li className="bg-gray-200 text-white rounded-full h-10 w-10 flex justify-center items-center mx-1 cursor-pointer">
            ...
          </li>
        )}
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } hover:bg-blue-500 hover:text-white cursor-pointer rounded-full h-10 w-10 flex justify-center items-center mx-1`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
        {endPage < totalPages - 1 && (
          <li className="bg-gray-200 text-white rounded-full h-10 w-10 flex justify-center items-center mx-1 cursor-pointer">
            ...
          </li>
        )}
        {endPage < totalPages && (
          <li
            className="bg-gray-200 text-white rounded-full h-10 w-10 flex justify-center items-center mx-1 cursor-pointer"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </li>
        )}
        <li
          className={`${
            currentPage === totalPages
              ? "bg-[##0e0e0e] cursor-not-allowed text-[#2f2f2f]"
              : "bg-primary hover:bg-[#ffb647] text-black"
          }  text-2xl font-semibold rounded-md px-8 py-2 flex justify-center items-center mx-1`}
          onClick={() => {
            if (currentPage !== totalPages) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          Next
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
