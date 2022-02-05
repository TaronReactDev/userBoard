import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {Link, useHistory} from "react-router-dom";

import {validation} from "./validation"
import "./style.scss"
import {Context} from "../App";

const Login = (props) => {

  const history2 =useHistory()

  const { setToken,}= useContext(Context)

  const [loginUser, setLoginUser] = useState({
    userName: "",
    password: "",

  })

  const [loginError, setLoginError] = useState({
    userNameError: false,
    passwordError: false,
  })

  const handleChangeRegistrationInfo = (type) => (e) => {
    switch (type) {

      case "userName" :
        setLoginUser({...loginUser, userName: e.target.value});

        validation(loginUser["userName"], "userName") ?
          setLoginError({...loginError, userNameError: false})
          :
          setLoginError({...loginError, userNameError: true});
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


  const handleLogin =()=>{

  if(  JSON.parse(localStorage.getItem("users")).findIndex(el =>{
    return( el.userName == loginUser.userName && el.password == loginUser.password)
  })+1){
    setToken(true);
    history2.push("/dashboard")
  }
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div className="registrationContainer">


        <TextField error={loginError.userNameError} id="standard-basic" label="User name" variant="standard"
                   onChange={handleChangeRegistrationInfo("userName")}
                   helperText={loginError.userNameError ? "User name user name must be 3 or more characters" :""}

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
