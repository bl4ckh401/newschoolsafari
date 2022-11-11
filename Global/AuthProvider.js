import React, { createContext, useState } from 'react'
export const AuthContext = createContext({});
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from './Firebase';

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const endpoint = 'http://192.168.1.4:19000/users/google'

  const googleLogin = async (accessToken) => {
    try {
      const DataRes = await fetch(endpoint, 'POST',
        {
        accessToken,
      })
      if (DataRes) return DataRes
      return null
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // ..
    }
  }

  const handleEmailLogin = async () => {
    await auth.signInWithEmailAndPassword(email, password).then(userCredential => {
      setUser(userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // ..
    });
  }


  const Logout = async () => {
    auth.signOut().then(setUser(null)).then(console.log("SUCCESSFULLY LOGGED OUT"))
    
  }

  const handleEmailSignup = async () => {
      await auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // ..
      });
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    
  return (
    <AuthContext.Provider value={{
      user, setUser,
      name,setName,
      email,setEmail,
      password,setPassword,
      handleEmailSignup,
      handleEmailLogin,
      Logout,googleLogin
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider