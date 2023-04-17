import React, { useState } from "react";
import withAuth from "../utils/withAuth";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";

function General() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-9xl mx-auto">
            <span className="text-gray-800 text-2xl font-semibold">
              Dashboard /
            </span>
            {/* Welcome banner */}
            <img src="/assets/image/banner1.jpg" className="my-4" />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Add view button */}
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-3">
              <DashboardCard13 />
              {/* Table (Top Channels) */}
              <DashboardCard07 />

              {/* Card (Recent Activity) */}
              <DashboardCard12 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default withAuth(General);
