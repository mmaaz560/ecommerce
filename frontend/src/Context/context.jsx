import {  createContext, useContext, useState } from "react";

export const Appcontext = createContext()

export const AppProvider =({ children })=>{
    const [showsidebar , setshowsidebar] = useState(false)
    const [showlogin , setshowlogin] =useState(false)
    const [showsignup , setshowsignup] =useState(false)
    return <Appcontext.Provider value={{showsidebar , setshowsidebar , showlogin , setshowlogin ,showsignup , setshowsignup}}>
        {children}
    </Appcontext.Provider>
}

export const useGlobal=() =>{
    return useContext(Appcontext)
}


export default AppProvider;