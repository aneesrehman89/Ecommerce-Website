"use client";

import { useRouter } from "next/navigation";
import WelcomeCard from "../components/WelcomeCard";
import ActionCard from "../components/ActionCard";
import ToolsIcon from "../components/icons/ToolsIcon";
import ChartIcon from "../components/icons/ChartIcon";
import UsersIcon from "../components/icons/UsersIcon";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <>
      {/* Main Content */}
      <div>
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
      </div>
    </>
  );
}