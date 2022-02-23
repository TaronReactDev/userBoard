import React, { useContext } from 'react'
import {Route, Redirect} from "react-router-dom"
import AuthContext from "../Auth/auth"


export default function ProtecredRout({component:RouteComponent, ...rest}) {
 
  
    return (
   <Route
   {...rest}
   render = {
       routeProps =>
       !! true ? (
           <RouteComponent {...routeProps} />
        
       ): <Redirect to = {"/"}/>
   }
   
   />
  )
}
