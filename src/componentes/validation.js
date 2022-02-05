export let validation = (value, type) => {
  let patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;


  switch (type) {
    case "firstName" :
      return value.length >= 3;
      break ;

    case "lastName" :
      return value.length >= 3;
      break;

    case "userName" :
      return value.length >= 3;
      break;


    case "gender" :
      return value.length > 0;
      break;

    case "email" :
      return patternEmail.test(value);
      break;

    case "password" :
      return patternPassword.test(value);
      break;

    case "confirmPassword" :
      return patternPassword.test(value);
      break;

    default: break;
  }
}
