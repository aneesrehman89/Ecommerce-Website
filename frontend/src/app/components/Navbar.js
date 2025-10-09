"use client";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-900 text-white">
      <Link href="/" className="font-bold text-xl">
        MyShop
      </Link>

      <div className="flex items-center gap-4">
        {!userInfo ? (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/register" className="hover:underline">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <span className="text-sm">Hi, {userInfo.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
