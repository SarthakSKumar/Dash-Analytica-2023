import React from "react";

function DashboardCard07() {
  return (
    <div className="my-4 col-span-7 xl:col-span-7 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Channels</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Visitors</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Revenues</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sales</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Conversion</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    {/* Icon for Facebook */}
                    {/* ... */}
                    <div className="text-slate-800">Facebook</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">3.5K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$5,120</div>
                </td>
                <td className="p-2">
                  <div className="text-center">320</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.9%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    {/* Icon for Instagram */}
                    {/* ... */}
                    <div className="text-slate-800">Instagram</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.8K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$4,250</div>
                </td>
                <td className="p-2">
                  <div className="text-center">295</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.6%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    {/* Icon for Twitter */}
                    {/* ... */}
                    <div className="text-slate-800">Twitter</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.1K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$3,400</div>
                </td>
                <td className="p-2">
                  <div className="text-center">210</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.3%</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">TikTok</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.7K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$2,850</div>
                </td>
                <td className="p-2">
                  <div className="text-center">185</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.1%</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">LinkedIn</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.3K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$2,150</div>
                </td>
                <td className="p-2">
                  <div className="text-center">120</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">3.9%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
