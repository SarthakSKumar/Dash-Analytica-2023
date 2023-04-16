import React from "react";

function DashboardCard13() {
  return (
    <div className="col-span-5 xl:col-span-5 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Election Activities</h2>
      </header>
      <div className="p-3">
        <div>
          <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">
            Today
          </header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-blue-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-blue-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      Polling Station 1
                    </a>{" "}
                    opened
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-blue-500">7:00 AM</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-green-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      Candidate A
                    </a>{" "}
                    campaign event
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">10:00 AM</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-red-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-red-50"
                  viewBox="0
0 36 36"
                >
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      Candidate B
                    </a>{" "}
                    debate event
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-red-500">2:00 PM</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-purple-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-purple-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      Voter Registration
                    </a>{" "}
                    deadline
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-purple-500">5:00 PM</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-yellow-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-yellow-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      Election Officer
                    </a>{" "}
                    meeting
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-yellow-500">6:00 PM</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
