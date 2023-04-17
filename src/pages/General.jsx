import React, { useState } from "react";
import withAuth from "../utils/withAuth";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import { getCookie } from "../utils/cookies";
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
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <img
                  src="/assets/image/user-36-09.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="Avatar"
                />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm">
                  Welcome back, {getCookie("username")}
                </p>
                <p className="text-gray-400 font-medium text-xs">
                  Last login: 1 hour ago
                </p>
              </div>
            </div>
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
                <button className="btn-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plus"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  <span>Add View</span>
                </button>
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
