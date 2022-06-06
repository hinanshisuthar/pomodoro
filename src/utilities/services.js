import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { auth } from "../firebase-config";
  
  const signUp = async (signupCredentials) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signupCredentials.email,
        signupCredentials.password
      );
      console.log(user)
      localStorage.setItem("token", user.user.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  
  const logIn = async (loginCredentials) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginCredentials.email,
        loginCredentials.password
      );
      console.log(user)
      localStorage.setItem("token", user.user.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  
  const logOut = () => signOut(auth);
  
  export { signUp, logIn, logOut };
  