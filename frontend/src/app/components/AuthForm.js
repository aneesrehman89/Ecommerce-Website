"use client";
import { useForm } from "react-hook-form";

export default function AuthForm({ type, onSubmit, loading, error }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-4"
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
      <div>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" },
            validate: (v) =>
              /[A-Z]/.test(v) || "Must contain at least one uppercase letter",
          })}
          placeholder="Password"
          type="password"
          className="border w-full p-2 rounded-md"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Server / API Error */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-md text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Processing..." : type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
