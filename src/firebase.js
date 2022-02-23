import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export  const app = firebase.initializeApp({
    apiKey: "AIzaSyDNM7KjVDVj6c2RFDPbUtW54zlgGA0YXlI",
    authDomain:  "userdashboard-a3f13.firebaseapp.com",
    projectId: "userdashboard-a3f13",
    storageBucket: "userdashboard-a3f13.appspot.com",
    messagingSenderId: "962799030363",
    appId: "1:962799030363:web:526e1818aac93c9db42f7e",
    measurementId: "G-C1DMP4TPH2",
})


// apiKey: process.env.RAECT_APP_APIKEY ,
//     authDomain: process.env.RAECT_APP_AUTHDOMAIN,
//     projectId: process.env.RAECT_APP_PROJECTID,
//     storageBucket: process.env.RAECT_APP_STORAGEBUCKET,
//     messagingSenderId: process.env.RAECT_APP_MESSAGINGSENDERID,
//     appId: process.env.RAECT_APP_APPID,
//     measurementId: process.env.RAECT_APP_MEASUREMENTID,

// RAECT_APP_APIKEY = "AIzaSyDNM7KjVDVj6c2RFDPbUtW54zlgGA0YXlI"
 
// RAECT_APP_AUTHDOMAIN = "userdashboard-a3f13.firebaseapp.com"

// RAECT_APP_PROJECTID  = "userdashboard-a3f13"
 
// RAECT_APP_STORAGEBUCKET = "userdashboard-a3f13.appspot.com"

// RAECT_APP_MESSAGINGSENDERID  = "962799030363"
 
// RAECT_APP_APPID = "1:962799030363:web:526e1818aac93c9db42f7e"
 
// RAECT_APP_MEASUREMENTID = "G-C1DMP4TPH2"