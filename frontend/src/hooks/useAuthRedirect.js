"use client";
// protected route hook
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthRedirect = () => {
  const { userInfo } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/login"); // redirect if not logged in
    }
  }, [userInfo, router]);
};
