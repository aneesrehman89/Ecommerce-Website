"use client";

import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    // Clear any auth state here
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <DashboardHeader onLogout={handleLogout} />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}