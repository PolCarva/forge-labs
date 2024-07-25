// context/ModalContext.js
import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    document.body.style.overflow = "hidden";

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setModalContent({});
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalContent, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
