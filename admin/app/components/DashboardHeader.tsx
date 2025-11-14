"use client";

interface DashboardHeaderProps {
  onLogout: () => void;
}

export default function DashboardHeader({ onLogout }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-end">
      <button
        onClick={onLogout}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
      >
        Logout
      </button>
    </header>
  );
}