import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {Link, Redirect, useHistory} from "react-router-dom";

import {validation} from "./validation"
import "./style.scss"

import {app} from "../firebase"
import AuthContext from "../Auth/auth"

const Login = (props) => {

  const history2 =useHistory()

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",

  })

  const [loginError, setLoginError] = useState({
    emailError: false,
    passwordError: false,
  })


  const handleChangeRegistrationInfo = (type) => (e) => {
    switch (type) {

      case "email" :
        setLoginUser({...loginUser, email: e.target.value});

        validation(loginUser["email"], "email") ?
          setLoginError({...loginError, emailError: false})
          :
          setLoginError({...loginError, emailError: true});
        break;

      case "password" :
        setLoginUser({...loginUser, password: e.target.value});

        validation(loginUser["password"], "password") ?
          setLoginError({...loginError, passwordError: false})
          :
          setLoginError({...loginError, passwordError: true});
        break;

      default:
        break;

    }
  }


  const handleLogin = async()=>{

    if(loginUser.email && loginUser.password){
      try{
         await app.auth().signInWithEmailAndPassword(loginUser.email.trim(), loginUser.password)
             
         history2.push("/dashboard")
         return true
      }catch(err){
       console.error(err)
      }
       
    
   }
   
  }

  // const {user} = useContext(AuthContext)
  // if(user){
  //   return <Redirect to = "/dashboard"/>
  // }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div className="registrationContainer">


        <TextField error={loginError.userNameError} id="standard-basic" label="Email" variant="standard"
                   onChange={handleChangeRegistrationInfo("email")}
                   helperText={loginError.userNameError ? "invalid email address" :""}

        />

        <TextField error={loginError.passwordError} id="standard-basic" label="Password"  type="password" variant="standard"
                   onChange={handleChangeRegistrationInfo("password")}
                   helperText={loginError.passwordError ? "password must be at least 8 characters with 1 upper case letter and 1 number" : ""}
        />

        <Stack spacing={2} direction="column" style={{marginTop: "15px"}}>
          <Button variant="text" onClick={handleLogin}> LOGIN </Button>
          <Button variant="text"><Link to="/registration" style={{textDecoration:"none"}}>REGISTR</Link> </Button>

        </Stack>

      </div>
    </Box>

  );
}

export default Login;
