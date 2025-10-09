"use client";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/slices/userSlice";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { useEffect } from "react";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, loading, error } = useSelector((state) => state.user);

  const handleRegister = (data) => dispatch(registerUser(data));

  useEffect(() => {
    if (userInfo) router.push("/");
  }, [userInfo]);

  return <AuthForm type="register" onSubmit={handleRegister} loading={loading} error={error} />;
}
