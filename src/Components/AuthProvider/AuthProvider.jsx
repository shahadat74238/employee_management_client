/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true);
   const axiosPublic = useAxiosPublic()

   useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         if (currentUser) {
            const userInfo = { email: currentUser.email };
            axiosPublic.post("/token", userInfo).then((res) => {
              if (res.data) {
                localStorage.setItem("access_token", res?.data?.token);
                setLoading(false);
              }
            });
          } else {
            localStorage.removeItem("access_token");
            setLoading(false);
          }
      })

      return () => {
         return unSubscribe();
      }
   }, [axiosPublic])

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   const updateUser = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
        })
  }

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }


   const authInfo = {
      user,
      loading,
      createUser,
      loginUser,
      updateUser,
      logOut
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;