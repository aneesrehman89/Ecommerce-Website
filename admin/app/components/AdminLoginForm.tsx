"use client";

import { useState } from "react";
import type { AdminLoginFormData } from "../types/admin";
import EyeIcon from "./icons/EyeIcon";

interface AdminLoginFormProps {
  onSubmit: (credentials: AdminLoginFormData) => void;
  loading: boolean;
  error: string | null;
}

export default function AdminLoginForm({
  onSubmit,
  loading,
  error,
}: AdminLoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value: string): boolean => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (value: string): boolean => {
    if (!value) {
      setPasswordError("Password is required");
      return false;
    }
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      onSubmit({ email, password });
    }
  };

  const isFormValid = email && password && !emailError && !passwordError;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email Field */}
      <div>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) validateEmail(e.target.value);
          }}
          onBlur={(e) => validateEmail(e.target.value)}
          placeholder="Yasir.amboutique@gmail.com"
          className={`border w-full p-2 rounded-md ${
            emailError ? "border-red-500" : ""
          }`}
          disabled={loading}
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (passwordError) validatePassword(e.target.value);
          }}
          onBlur={(e) => validatePassword(e.target.value)}
          placeholder="yasir@123"
          className={`border w-full p-2 rounded-md pr-10 ${
            passwordError ? "border-red-500" : ""
          }`}
          disabled={loading}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
          aria-label={showPassword ? "Hide password" : "Show password"}
          disabled={loading}
        >
          <EyeIcon isVisible={showPassword} width={20} height={20} />
        </button>
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}
      </div>

      {/* Server Error */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || !isFormValid}
        className={`w-full py-2 rounded-md text-white ${
          loading || !isFormValid
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Processing..." : "Login"}
      </button>
    </form>
  );
}