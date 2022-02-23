import './App.css';
import Registration from "./componentes/registration";
import UserDashboard from "./componentes/Dashboard/index";
import Login from "./componentes/login";
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import {createContext,  useState, useContext} from "react";
import Auth from "./Auth/auth"
import ProtectedRouth from "./componentes/ProtecredRout"



function App() {


  return (
    <Auth>
    <Router>
      <Switch>
        
        <ProtectedRouth exact path="/dashboard" component={UserDashboard}/>
      
       <Route exact path="/registration" component={Registration}/>
         
       <Route exact path="/"> <Login/> </Route>

      </Switch>

    </Router>
    </Auth>
  );
}

export default App;
