import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/AppContext";

export const ModalComponent = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      } `}
    >
      <div className="modal-container">
        <h2>Background</h2>
        <button className="btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
