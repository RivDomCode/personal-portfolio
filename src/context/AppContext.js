import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider };


//Custom Hook to use context

export const useGlobalContext = () => {
    return useContext(AppContext)
}