"use client";

import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import WelcomeCard from "../components/WelcomeCard";
import ActionCard from "../components/ActionCard";
import ToolsIcon from "../components/icons/ToolsIcon";
import ChartIcon from "../components/icons/ChartIcon";
import UsersIcon from "../components/icons/UsersIcon";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear any auth state here
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Sticky Navbar */}
        <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="flex items-center justify-end px-8 py-4">
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Logout
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="p-8">
          {/* Welcome Card */}
          <WelcomeCard />

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ActionCard
              title="Add New Items"
              icon={<ToolsIcon width={48} height={48} />}
              onClick={() => router.push("/dashboard/add-item")}
            />
            <ActionCard
              title="View Item List"
              icon={<ChartIcon width={48} height={48} />}
              onClick={() => router.push("/dashboard/list-item")}
            />
            {/* <ActionCard
              title="Manage Orders"
              icon={<UsersIcon width={48} height={48} />}
              onClick={() => router.push("/dashboard/orders")}
            /> */}
          </div>
        </main>
      </div>
    </div>
  );
}