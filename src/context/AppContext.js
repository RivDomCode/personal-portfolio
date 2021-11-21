import React, { useState, useContext } from 'react';

const AppContext = React.createContext();



const AppProvider = ({ children }) => {


    //Logic to open an close the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <AppContext.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider };


//Custom Hook to use context
export const useGlobalContext = () => {
    return useContext(AppContext)
}