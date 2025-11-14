"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AdminLoginForm from "./components/AdminLoginForm";
import type { AdminLoginFormData } from "./types/admin";

export default function AdminLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (credentials: AdminLoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Check credentials
      const ADMIN_EMAIL = "Yasir.amboutique@gmail.com";
      const ADMIN_PASSWORD = "yasir@123";
      
      if (credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
        console.log("Admin login successful");
        router.push("/dashboard");
      } else {
        setError("Invalid email or password. Please try again.");
      }
      
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          {/* Logo */}
          <div className="mb-4 text-center">
            <Image
              src="/amLogo2.png"
              alt="ambotique Logo"
              width={220}
              height={66}
              className="mx-auto"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-1 text-center">
            Admin Panel Login
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter your credentials to access the admin panel
          </p>

          {/* Login Form */}
          <AdminLoginForm
            onSubmit={handleLogin}
            loading={isLoading}
            error={error}
          />
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/admin_login_image.jpg"
          alt="Admin Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}