import React from "react";
import { FaTimes } from "react-icons/fa";
export const ModalComponent = () => {
  return (
    <div className={`modal-overlay show-modal`}>
      <h2>Soy el modal component</h2>
      <button className="btn">
        <FaTimes />
      </button>
    </div>
  );
};
