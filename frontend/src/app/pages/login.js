"use client";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/slices/userSlice";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { useEffect } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, loading, error } = useSelector((state) => state.user);

  const handleLogin = (data) => dispatch(loginUser(data));

  useEffect(() => {
    if (userInfo) router.push("/");
  }, [userInfo]);

  return <AuthForm type="login" onSubmit={handleLogin} loading={loading} error={error} />;
}
