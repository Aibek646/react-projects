import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSibebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: "", links: [] });

    const openSidebar = () => {
        setIsSibebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSibebarOpen(false);
    };

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSibebarOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSubmenuOpen,
                isSidebarOpen,
                openSubmenu,
                closeSubmenu,
                openSidebar,
                closeSidebar,
                location,
                page
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
