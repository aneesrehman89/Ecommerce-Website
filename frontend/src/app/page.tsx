"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const { userInfo } = useSelector((state: any) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, [userInfo]);

  if (!userInfo) return null; // avoid flashing before redirect

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">Welcome, {userInfo.name}!</h1>
        <p className="text-gray-600">You are now logged in 🚀</p>
      </main>
    </div>
  );
}
