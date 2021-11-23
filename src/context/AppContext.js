import React, { useState, useContext } from 'react';

const AppContext = React.createContext();



const AppProvider = ({ children }) => {


    //Logic to open an close the modal
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const openAside = () => {
        setIsAsideOpen(true);
    }

    const closeAside = () => {
        setIsAsideOpen(false)
    }

    return <AppContext.Provider value={{ isAsideOpen, closeAside, openAside }}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider };


//Custom Hook to use context
export const useGlobalContext = () => {
    return useContext(AppContext)
}