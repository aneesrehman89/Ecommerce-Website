// src/app/login/page.js or page.tsx

"use client";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "@/slices/userSlice";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AuthPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, loading, error } = useSelector((state) => state.user);

  const [authType, setAuthType] = useState("login"); // 'login' or 'register'

  const handleAuth = (data) => {
    if (authType === "login") {
      dispatch(loginUser(data));
    } else {
      dispatch(registerUser(data));
    }
  };

  useEffect(() => {
    if (userInfo) router.push("/");
  }, [userInfo]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/asset/brandLogo"
            alt="Logo"
            width={320}
            height={96}
            className="mx-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-1">
          {authType === "login" ? "Sign in" : "Create account"}
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          {authType === "login"
            ? "Enter your email and we'll send you a verification code"
            : "Please provide your details to register"}
        </p>

        {/* AuthForm shared for login and register */}
        <AuthForm
          type={authType}
          onSubmit={handleAuth}
          loading={loading}
          error={error}
          hidePassword={authType === "login"} // hide password for login form
        />

        {/* Switcher buttons */}
        <div className="mt-4">
          {authType === "login" ? (
            <p className="text-sm">
              Don’t have an account?{" "}
              <button
                onClick={() => setAuthType("register")}
                className="text-blue-600 hover:underline"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p className="text-sm">
              Already have an account?{" "}
              <button
                onClick={() => setAuthType("login")}
                className="text-blue-600 hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-sm text-gray-500 space-x-4">
          <a href="#" className="text-blue-600 hover:underline">
            Privacy policy
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Terms of service
          </a>
        </div>
      </div>
    </div>
  );
}
