import { createContext, useState } from "react";

export const AllUsersContext = createContext();

export const AllUsersProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState('');

    return (
        <AllUsersContext.Provider value={{allUsers, setAllUsers}}>
            {children}
        </AllUsersContext.Provider>
    )
}