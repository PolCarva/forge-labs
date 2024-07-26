import React, { useContext, useEffect, useState } from "react";
import ModalContext from "../../context/ModalContext";
import axios from "axios";
import Image from "next/image";

const Modal = () => {
  const { isModalOpen, modalContent, closeModal } = useContext(ModalContext);
  const [componentData, setComponentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isModalOpen && modalContent.endpoint) {
      setIsLoading(true);
      axios
        .get(`/api/${modalContent.endpoint}`)
        .then((response) => {
          setComponentData(
            response.data.filter((item) => !item.IMG.includes("base64"))
          );
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [isModalOpen, modalContent.endpoint]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50">
      <div className="bg-white text-black max-h-[60svh] overflow-y-scroll scrollbar p-5 rounded-t-lg over w-1/2">
        <h2 className="text-2xl mb-4">{modalContent.title}</h2>
        {isLoading ? (
          <div className="w-full h-full grid place-content-center text-center min-h-[50svh]">Loading...</div>
        ) : (
          <ul>
            {componentData.map((component) => (
              <li
                key={component.id}
                className={`mb-2 hover:bg-gray-200 transition duration-75 p-2 rounded-lg cursor-pointer`}
                onClick={() => {
                  modalContent.updateSelection(component);
                  closeModal();
                }}
              >
                <div className="flex items-center w-full">
                  <Image
                    width={300}
                    height={300}
                    src={component.IMG}
                    alt={component.Titulo}
                    className="size-16 bg-white object-contain rounded inline-block mr-2"
                  />
                  <p>
                    {component.Titulo} -{" "}
                    <span className="font-bold">${component.Precio}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={closeModal}
        className="bg-primary font-bold rounded-b-xl w-1/2 text-black hover:bg-primary-hover py-3 px-6"
      >
        Cancelar
      </button>
    </div>
  );
};

export default Modal;
