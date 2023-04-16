import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../../charts/LineChart01";
import Icon from "../../images/icon-01.svg";
import EditMenu from "../EditMenu";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

function SocialMediaCard(props) {
  const chartData = {
    labels: [
      "Jan 2021",
      "Feb 2021",
      "Mar 2021",
      "Apr 2021",
      "May 2021",
      "Jun 2021",
      "Jul 2021",
      "Aug 2021",
      "Sep 2021",
      "Oct 2021",
      "Nov 2021",
      "Dec 2021",
    ],
    datasets: [
      // Twitter line
      {
        data: [
          10000, 11000, 12000, 11500, 13000, 14000, 15000, 16000, 17000, 18000,
          19000, 20000,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.blue[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.blue[500],
        clip: 20,
      },
      // Instagram line
      {
        data: [
          5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000,
          15000, 16000,
        ],
        borderColor: tailwindConfig().theme.colors.orange[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.orange[500],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <EditMenu className="relative inline-flex">
            <li>
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                to="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                to="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          Social Media Trends
        </h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Followers
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">45,000</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">
            +10%
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default SocialMediaCard;
