"use client";
import { useForm } from "react-hook-form";
import EyeIcon from "@/components/icons/EyeIcon";
import { useState } from "react";



export default function AuthForm({
  type,
  onSubmit,
  loading,
  error,
  hidePassword = false,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      {/* Full Name field only for Register */}
      {type === "register" && (
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Full Name"
            className="border w-full p-2 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
      )}

      {/* Email field */}
      <div>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
          type="email"
          className="border w-full p-2 rounded-md"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password field */}
      <div className="relative">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          className="border w-full p-2 rounded-md pr-10"
        />

        {/* Toggle button */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <EyeIcon isVisible={showPassword} width={20} height={20} />
        </button>

        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      {/* Server / API Error */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-md text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Processing..." : type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
