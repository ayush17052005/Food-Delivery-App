// src/services/auth.js
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);