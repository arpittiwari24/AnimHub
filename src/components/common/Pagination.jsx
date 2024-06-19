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
            currentPage === 1 ? "" : "bg-primary hborderover:bg-[#"
          } bg-[#0e0e0e] text-[#2f2f2f] text-xl max-sm:text-sm font-bold rounded-md px-8 max-sm:px-3 py-3 max-sm:py-2 flex justify-center items-center mx-2`}
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
            className="bg-[#0e0e0e] text-[#fff] font-bold max-sm:font-normal text-xl max-sm:text-sm rounded-sm h-12 w-12 max-sm:w-6 max-sm:h-2 flex justify-center items-center mx-2 cursor-pointer"
            onClick={() => onPageChange(1)}
          >
            1
          </li>
        )}
        {startPage > 2 && (
          <li className="bg-[#0e0e0e] text-[#fff] font-bold text-xl rounded-full h-12 w-12 flex justify-center items-center mx-2 cursor-pointer">
            ...
          </li>
        )}
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`${
              pageNumber === currentPage ? "border-2 border-primary" : ""
            } bg-[#0e0e0e] text-[#fff] font-bold text-xl hover:bg-[#2f2f2f] hover:text-white cursor-pointer rounded-sm h-12 w-12 flex justify-center items-center mx-2`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
        {endPage < totalPages - 1 && (
          <li className="bg-[#0e0e0e] hover:bg-[#2f2f2f] text-[#fff] font-bold text-xl rounded-sm h-12 w-12 flex justify-center items-center mx-2 cursor-pointer">
            ...
          </li>
        )}
        {endPage < totalPages && (
          <li
            className="bg-[#0e0e0e] text-[#fff] font-bold text-xl rounded-sm h-12 w-12 flex justify-center items-center mx-2 cursor-pointer"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </li>
        )}
        <li
          className={`${
            currentPage === totalPages ? "" : "bg-primary hborderover:bg-[#"
          } bg-[#0e0e0e]  text-[#2f2f2f] text-xl max-sm:text-sm font-bold rounded-md px-8 max-sm:px-3 py-3 max-sm:py-2 flex justify-center items-center mx-2`}
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
