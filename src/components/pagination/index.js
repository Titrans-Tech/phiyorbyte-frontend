import React from "react";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const Pagination = ({ totalPages, paginate, ...rest }) => {
  const pageRange = 2;
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        previousLabel={
          <>
            <FaArrowLeft />
            <span className="mx-2">Previous</span>
          </>
        }
        nextLabel={
          <>
            <span className="mx-2">Next</span>
            <FaArrowRight />
          </>
        }
        breakLabel="..."
        breakClassName="break-me"
        pageCount={totalPages}
        marginPagesDisplayed={pageRange}
        pageRangeDisplayed={pageRange}
        onPageChange={paginate}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
        {...rest}
      />
    </div>
  );
};
