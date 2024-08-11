"use client"

import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useAuth } from "@/context/AuthContext";
import { auth, googleProvider } from "@/lib/firebase/config";

const GoogleLogin = () => {
  const { user } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  if (user) {
    return <div>Welcome, {user.displayName}</div>;
  }

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      
    </div>
  );
};

export default GoogleLogin;
