import './App.css';
import  {useEffect} from 'react';
import Registration from "./componentes/registration";
import UserDashboard from "./componentes/Dashboard/index";
import Login from "./componentes/login";
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import {createContext,  useState} from "react";


export const Context = createContext(null);

function App() {

 const [users, setUsers] =useState([])
  const [token, setToken] = useState()

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);


  return (
    <Router>
      <Switch>
        <Context.Provider value={{users, setToken, setUsers,token,}}>
          {
            token ? <Route exact path="/dashboard" component={UserDashboard}/>
              :  <Route exact path="/registration" component={Registration}/>

          }
        <Route exact path="/"> <Login/> </Route>
        <Route path="/registration"> <Registration/> </Route>


        </Context.Provider>

      </Switch>

    </Router>
  );
}

export default App;
