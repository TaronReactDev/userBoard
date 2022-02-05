import React, {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {Link, useHistory} from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {validation} from "./validation"
import "./style.scss"
import {Context} from "../App"

const Registration = (props) => {

  const {users, setUsers}= useContext(Context)
  const [registrationUser, setRegistrationUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",

  })

  const [registrationError, setRegistrationError] = useState({
    firstNameError: false,
    lastNameError: false,
    userNameError: false,
    genderError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,

  })
 const history = useHistory()

  const handleChangeRegistrationInfo = (type) => (e) => {
    switch (type) {
      case "firstName" :
        setRegistrationUser({...registrationUser, firstName: e.target.value});

        validation(registrationUser["firstName"], "firstName") ?
        setRegistrationError({...registrationError, firstNameError:false})
        :
        setRegistrationError({...registrationError, firstNameError: true}) ;
        break;

      case "lastName" :
        setRegistrationUser({...registrationUser, lastName: e.target.value});

        validation(registrationUser["lastName"], "lastName") ?
          setRegistrationError({...registrationError, lastNameError:false})
          :
          setRegistrationError({...registrationError, lastNameError: true}) ;
        break;

      case "userName" :
        setRegistrationUser({...registrationUser, userName: e.target.value});

        validation(registrationUser["userName"], "userName") ?
          setRegistrationError({...registrationError, userNameError:false})
          :
          setRegistrationError({...registrationError, userNameError: true}) ;
        break;


      case "gender" :
        setRegistrationUser({...registrationUser, gender: e.target.value});

        validation(registrationUser["gender"], "gender") ?
          setRegistrationError({...registrationError, genderError:false})
          :
          setRegistrationError({...registrationError, genderError: true}) ;
        break;

      case "email" :
        setRegistrationUser({...registrationUser, email: e.target.value});

        validation(registrationUser["email"], "email") ?
          setRegistrationError({...registrationError, emailError:false})
          :
          setRegistrationError({...registrationError, emailError: true}) ;
        break;

      case "password" :
        setRegistrationUser({...registrationUser, password: e.target.value});

        validation(registrationUser["password"], "password") ?
          setRegistrationError({...registrationError, passwordError:false})
          :
          setRegistrationError({...registrationError, passwordError: true}) ;
        break;

      case "confirmPassword" :
        setRegistrationUser({...registrationUser, confirmPassword: e.target.value});

        validation(registrationUser["confirmPassword"], "confirmPassword") ?
          setRegistrationError({...registrationError, confirmPasswordError:false})
          :
          setRegistrationError({...registrationError, confirmPasswordError: true}) ;
        break;
      default:
        break;

    }
  }
  const handleRegistration = () =>{
    for(let key in registrationUser ){
   if(registrationUser[key]){
     for(let key in registrationError ){
       if(!registrationError[key]){
         let usersHistory = [...users, registrationUser]
         setUsers(usersHistory)
         history.push("/")
       }
     }
   }
 }
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div className="registrationContainer">

        <TextField error={registrationError.firstNameError} id="standard-basic" label="First name" variant="standard"
                   onChange={handleChangeRegistrationInfo("firstName")}
                   helperText={registrationError.firstNameError ? "first name can't be empty." : ""}
        />
        <TextField error={registrationError.lastNameError} id="standard-basic" label="Last name" variant="standard"
                   onChange={handleChangeRegistrationInfo("lastName")}
                   helperText={registrationError.lastNameError ? "last name can't be empty." : ""}
        />
        <TextField error={registrationError.userNameError} id="standard-basic" label="User name" variant="standard"
                   onChange={handleChangeRegistrationInfo("userName")}
                   helperText={registrationError.userNameError ? "User name user name must be 3 or more characters" :""}
        />

        <FormControl component="fieldset" error={registrationError.genderError}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={handleChangeRegistrationInfo("gender")}>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
          </RadioGroup>
        </FormControl>

        <TextField error={registrationError.emailError} id="standard-basic" label="Email" variant="standard"
                   onChange={handleChangeRegistrationInfo("email")}
                   helperText={registrationError.emailError ? "invalid email address" : ""}
        />
        <TextField error={registrationError.passwordError} id="standard-basic" type="password"  label="Password" variant="standard"
                   onChange={handleChangeRegistrationInfo("password")}
                   helperText={registrationError.passwordError ? "password must be at least 8 characters with 1 upper case letter and 1 number" : ""}
        />

        <TextField error={registrationError.confirmPasswordError} id="standard-basic" type="password"  label="Confirm password" variant="standard"
                   onChange={handleChangeRegistrationInfo("confirmPassword")}
                   helperText={registrationError.confirmPasswordError ? "password must be at least 8 characters with 1 upper case letter and 1 number" : ""}
        />

        <Stack spacing={2} direction="column" style={{marginTop:"15px"}}>
          <Button variant="text" onClick={handleRegistration}> REGISTR </Button>
          <Button variant="text"> <Link to="/" style={{textDecoration:"none"}}>LOGIN</Link>   </Button>
        </Stack>

      </div>
    </Box>

  );
}

export default Registration;
