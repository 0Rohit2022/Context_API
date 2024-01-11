import React, { useState } from "react";
import PasswordContext from './PasswordContext';

const PasswordContextProvider = ({children}) => 
{
    const [Password , SetPassword] = useState(null);
    return(
       <PasswordContext.Provider value={{Password ,SetPassword}}>
            {children}
       </PasswordContext.Provider>
    )
}

export default PasswordContextProvider;