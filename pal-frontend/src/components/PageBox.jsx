import React from "react";

import "./css/PageBox.css";

function PageBox({ page, ...props }) {
  const pagesButtons = page.pagesStub.map((pageStub) => {
    return (
      <button
        key={pageStub}
        className="page-button"
        style={page.pageNumber === pageStub ? { color: "#d72323" } : {}}
      >
        {pageStub}
      </button>
    );
  });

  return (
    <div className="page-box">
      <button
        className="page-button"
        style={{ color: "#d72323", fontSize: "16px" }}
        onClick={() => props.setPageNumber(page.pageNumber - 1)}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>

      {pagesButtons}

      <button
        className="page-button"
        style={{ color: "#d72323", fontSize: "16px" }}
        onClick={() => props.setPageNumber(page.pageNumber + 1)}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}

export default PageBox;
