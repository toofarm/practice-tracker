import React, { useState, useEffect, useMemo, createContext } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // dispatch user to store
  } else {
    // remove user from store
  }
})

// CONFIG KEYS [Storage Keys]===================================
export const TOKEN_KEY = 'token';
export const USER_KEY = 'user';
export const keys = [TOKEN_KEY, USER_KEY];

const AuthProvider = () => {
  const auth = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  

  // Get Auth state
  const getAuthState = async () => {
    try {
        //GET TOKEN && USER
        let token = await AsyncStorage.getItem(TOKEN_KEY);
        let user = await AsyncStorage.getItem(USER_KEY);
        user = JSON.parse(user);
        
        if (token !== null && user!== null) await handleLogin({token, user});
        else await handleLogout();

        return {token, user};
    } catch (error) {
        throw new Error()
    }
}

  return auth
  
}

export default AuthProvider