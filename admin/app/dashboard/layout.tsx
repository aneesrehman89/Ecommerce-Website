"use client";

import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

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
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar onLogout={handleLogout} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-4 sm:p-6 lg:p-8 min-w-0">
          <div className="max-w-full overflow-x-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}