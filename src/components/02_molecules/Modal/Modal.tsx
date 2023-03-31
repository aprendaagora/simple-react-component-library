import React from "react";
import "../../../output.css";

export interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  showModal,
  setShowModal,
  className,
}) => {
  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setShowModal(false);
  };

  return (
    <div
      onClick={(e) => handleCloseModal(e)}
      className={`z-50 fixed top-0 left-0 bg-gray-500/50 w-screen h-screen  ${
        showModal ? "flex items-center justify-center" : "hidden"
      } ${className}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-sm overflow-y-scroll max-h-[90vh] max-w-[85vw]"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
