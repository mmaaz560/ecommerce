import {  createContext, useContext, useState } from "react";

export const Appcontext = createContext()

export const AppProvider =({ children })=>{
    const [showsidebar , setshowsidebar] = useState(false)
    return <Appcontext.Provider value={{showsidebar , setshowsidebar}}>
        {children}
    </Appcontext.Provider>
}

export const useGlobal=() =>{
    return useContext(Appcontext)
}


export default AppProvider;