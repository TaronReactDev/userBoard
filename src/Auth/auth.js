import React, { useEffect, useState } from 'react'
import {app} from "../firebase"

export const AuthContext = React.createContext()

export default function Auth({children}) {

const [user, setUser] = useState(null)  

useEffect(()=>{
    app.auth().onAuthStateChanged(setUser)
},[])


return (

<AuthContext.Provider value={{user}}>

{children}

</AuthContext.Provider>

    

  )
}
