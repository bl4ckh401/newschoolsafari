// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM61UPAamjhlmWosElwpHeqx8R9KN_Iao",
  authDomain: "schoolsafari-254ke.firebaseapp.com",
  projectId: "schoolsafari-254ke",
  storageBucket: "schoolsafari-254ke.appspot.com",
  messagingSenderId: "371871736058",
  appId: "1:371871736058:web:6cab9eb19281f96560a943"
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