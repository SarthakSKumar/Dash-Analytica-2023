import React, { useState } from "react";
import withAuth from "../utils/withAuth";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
function Campaign() {
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
              Campaigning and Reach /
            </span>
            {/* Welcome banner */}
            <img src="/assets/image/banner2.jpg" className="my-4" />
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Add view button */}
              </div>
            </div>
            {/* Table (Top Channels) */}
            <DashboardCard07 />
            <hr className="mb-6" />
            <span className="text-xl text-gray-800 font-semibold">
              Targeted Campaigning
            </span>
            <p className="text-sm text-gray-600 mb-6">
              Cost Approximation, Reach Analysis and Target Strategies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div className="col-span-1 row-span-1 aspect-w-16 aspect-h-9">
                <DashboardCard01 src={"/assets/image/1.png"} />
              </div>

              <div className="col-span-1 row-span-1 aspect-w-16 aspect-h-9">
                <DashboardCard01 src={"/assets/image/2.png"} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
              <div className="col-span-1 row-span-1 aspect-w-16 aspect-h-9">
                <DashboardCard01 src={"/assets/image/reach.png"} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default withAuth(Campaign);
