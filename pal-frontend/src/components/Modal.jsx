import React, { useState } from "react";

import "./css/Modal.css";

function Modal({ isModalOpen, ...props }) {
  return (
    <div
      className={isModalOpen ? "modal active" : "modal"}
      onClick={() => props.setIsModalOpen(false)}
    >
      <div
        className={isModalOpen ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        {isModalOpen && props.children}
      </div>
    </div>
  );
}

export default Modal;
