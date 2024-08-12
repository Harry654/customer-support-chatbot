"use client";

import React, { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
// import { useAuth } from "@/context/AuthContext";
import { auth, googleProvider } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";

const GoogleLogin = () => {
//   const { user } = useAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  //   useEffect(() => {
  //     if (user) router.push("/");
  //     else alert("Google Sign-In is currently the only availabe login option");
  //   }, [user]);

  //   if (user) {
  //     return <div>Welcome, {user.displayName}</div>;
  //   }
  return (
    <div id="login_box" className="w-screen min-h-screen bg-black">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="border">
        <h3>Login Here</h3>

        <label htmlFor="username" className="opacity-30">
          Username
        </label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          disabled={true}
          className="opacity-30"
        />

        <label htmlFor="password" className="opacity-30">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          disabled={true}
          className="opacity-30"
        />

        <button
          disabled={true}
          className="bg-gray-50 opacity-30 mt-5 cursor-not-allowed"
        >
          Log In
        </button>
        <div className="social">
          <button
            className="bg-white mt-3"
            onClick={handleGoogleSignIn}
            type="button"
          >
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default GoogleLogin;
