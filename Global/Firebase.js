// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "******************************",
  authDomain: "**************************",
  projectId: "*******************************",
  storageBucket: "******************************",
  messagingSenderId: "***************************",
  appId: "************************************"
};

// Initialize Firebase
let app
if(firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth(app);
export const firestore = firebase.firestore(app)
