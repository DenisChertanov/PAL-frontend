import React from "react";

import "./css/PageBox.css";

function PageBox({ page, ...props }) {
  const pagesButtons = page.pagesStub
    .filter((pageStub) => {
      if (page.totalPages <= 5) {
        return true;
      }

      let leftBorder = page.pageNumber - 2;
      let rightBorder = page.pageNumber + 2;

      if (leftBorder < 1) {
        rightBorder += 1 - leftBorder;
        leftBorder = 1;
      }
      if (rightBorder > page.totalPages) {
        leftBorder -= rightBorder - page.totalPages;
        rightBorder = page.totalPages;
      }

      return pageStub >= leftBorder && pageStub <= rightBorder;
    })
    .map((pageStub) => {
      return (
        <button
          key={pageStub}
          className="page-button"
          style={
            page.pageNumber === pageStub
              ? { color: "#d72323", cursor: "pointer" }
              : { cursor: "pointer" }
          }
          onClick={() => props.setPageNumber(pageStub)}
        >
          {pageStub}
        </button>
      );
    });

  const pageContent = (
    <div className="page-box">
      <button
        className="page-button"
        style={{ color: "#d72323", fontSize: "16px", cursor: "pointer" }}
        onClick={() => props.setPageNumber(page.pageNumber - 1)}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>

      {pagesButtons}

      <button
        className="page-button"
        style={{ color: "#d72323", fontSize: "16px", cursor: "pointer" }}
        onClick={() => props.setPageNumber(page.pageNumber + 1)}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );

  return page.totalPages != 0 && pageContent;
}

export default PageBox;
