import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subDomain, setSubDomain] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [constituency, setConstituency] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    if (constituency) {
      switch (constituency) {
        case "Malleswaram":
          setIframeUrl("url6");
          break;
        case "Jayanagar":
          setIframeUrl("url7");
          break;
        case "RR Nagar":
          setIframeUrl("url8");
          break;
        case "Bengaluru South":
          setIframeUrl("url9");
          break;
        default:
          break;
      }
    } else if (district) {
      switch (district) {
        case "Bengaluru North":
          setIframeUrl("url2");
          break;
        case "Bengaluru South":
          setIframeUrl("url3");
          break;
        case "Bengaluru Central":
          setIframeUrl("url4");
          break;
        case "Bengaluru Urban":
          setIframeUrl("url5");
          break;
        default:
          break;
      }
    } else if (state) {
      setIframeUrl("url1");
    } else {
      setIframeUrl("");
    }
  }, [state, district, constituency]);

  const getConstituencies = (district) => {
    switch (district) {
      case "Bengaluru North":
        return ["Malleswaram"];
      case "Bengaluru South":
        return ["Jayanagar"];
      case "Bengaluru Central":
        return ["RR Nagar"];
      case "Bengaluru Urban":
        return ["Bengaluru South"];
      default:
        return [];
    }
  };
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
              Maps and Visualisations /
            </span>

            <span className="text-gray-800 text-3xl font-semibold">
              {subDomain}
            </span>
            {/* Welcome banner */}
            <img src="src\images\banner2.jpg" className="my-4" />
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Add view button */}
              </div>
            </div>
            {/* Cards */}
            <div className="w-full">
              <div className="w-full flex justify-between">
                <div className="col-span-8">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <select
                    id="state"
                    className="mt-1 block w-full py-2 pr-16 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base font-inter"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      setDistrict("");
                      setConstituency("");
                    }}
                  >
                    <option value="">Select State</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                </div>
                <div className="col-span-8">
                  <label
                    htmlFor="district"
                    className="block text-sm font-medium text-gray-700"
                  >
                    District
                  </label>
                  <select
                    id="district"
                    className="mt-1 block w-full py-2 pr-16 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base font-inter"
                    value={district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                      setConstituency("");
                    }}
                    disabled={!state}
                  >
                    <option value="">Select District</option>
                    {state && (
                      <>
                        <option value="Bengaluru North">Bengaluru North</option>
                        <option value="Bengaluru South">Bengaluru South</option>
                        <option value="Bengaluru Central">
                          Bengaluru Central
                        </option>
                        <option value="Bengaluru Urban">Bengaluru Urban</option>
                      </>
                    )}
                  </select>
                </div>{" "}
                <div className="col-span-8">
                  <label
                    htmlFor="constituency"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Constituency
                  </label>
                  <select
                    id="constituency"
                    className="mt-1 block w-full py-2 pr-16 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base font-inter"
                    value={constituency}
                    onChange={(e) => setConstituency(e.target.value)}
                    disabled={!district}
                  >
                    <option value="">Select Constituency</option>
                    {getConstituencies(district).map((constituency) => (
                      <option key={constituency} value={constituency}>
                        {constituency}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-12">
                  {iframeUrl && (
                    <iframe
                      title="My iframe"
                      src={
                        "https://earth.google.com/web/@0,0,0a,22251752.77375655d,35y,0h,0t,0r"
                      }
                      width="100%"
                      height="500px"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
