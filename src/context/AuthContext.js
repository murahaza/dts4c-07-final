import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //   return authFirebase.createUserWithEmailAndPassword(email, password)
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    register
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}