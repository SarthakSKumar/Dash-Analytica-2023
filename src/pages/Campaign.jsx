import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
function Dashboard() {
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
            <blockquote class="twitter-tweet">
              <p lang="kn" dir="ltr">
                ಧರ್ಮನ ವೋಟ್ ಮಾಡುವ ನಿರ್ಧಾರಕ್ಕೆ ಚಾರ್ಲಿ ಪ್ರೀತಿಯ ಅಪ್ಪುಗೆ ನೀಡಿದೆ.ನಿಮ್ಮ
                ಮತಗಳು ನಿಮ್ಮ ಪ್ರೀತಿಪಾತ್ರರಿಗೆ ಪ್ರಿಯವಾಗಿರತ್ತೆ.ನಿಮ್ಮ ಸುತ್ತಲಿನ
                ಜನ,ಪ್ರಾಣಿ-ಪಕ್ಷಿ,ವನ್ಯಸಂಪತ್ತನ್ನೊಳಗೊಂಡ ಪ್ರಪಂಚವನ್ನು
                ಸುಂದರವಾಗಿ,ಸುರಕ್ಷಿತವಾಗಿ ನೋಡಿಕೊಳ್ಳಲು ತಪ್ಪದೇ ಮತ ನೀಡಿ.
                <a href="https://twitter.com/ECISVEEP?ref_src=twsrc%5Etfw">
                  @ECISVEEP
                </a>{" "}
                <a href="https://twitter.com/rakshitshetty?ref_src=twsrc%5Etfw">
                  @rakshitshetty
                </a>{" "}
                <a href="https://twitter.com/hashtag/KarnatakaAssemblyElection2023?src=hash&amp;ref_src=twsrc%5Etfw">
                  #KarnatakaAssemblyElection2023
                </a>{" "}
                <a href="https://t.co/5TbfCbJ9kl">pic.twitter.com/5TbfCbJ9kl</a>
              </p>
              &mdash; Chief Electoral Officer, Karnataka (@ceo_karnataka){" "}
              <a href="https://twitter.com/ceo_karnataka/status/1642040521622446081?ref_src=twsrc%5Etfw">
                April 1, 2023
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
            <blockquote class="twitter-tweet">
              <p lang="kn" dir="ltr">
                ನಮ್ಮ ಕರ್ನಾಟಕದ ವನ್ಯ ಸಂಪತ್ತು, ಕಲೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ತಮ್ಮ
                ಚಲನಚಿತ್ರದ ಮೂಲಕ ಜಗತ್ತಿಗೇ ಪರಿಚಯಿಸಿದ ಕಾಂತಾರ ಖ್ಯಾತಿಯ ಶ್ರೀ.
                <a href="https://twitter.com/shetty_rishab?ref_src=twsrc%5Etfw">
                  @shetty_rishab
                </a>{" "}
                ರಾಜ್ಯದ ಜನೆತೆಗೆ ಮೇ 10 ರಂದು ನಡೆಯಲಿರುವ ವಿಧಾನ ಸಭಾ ಚುನಾವಣೆಯಲ್ಲಿ ಮತ
                ನೀಡುವಂತೆ ಕರೆ ನೀಡುತ್ತಿದ್ದಾರೆ.{" "}
                <a href="https://twitter.com/ECISVEEP?ref_src=twsrc%5Etfw">
                  @ECISVEEP
                </a>{" "}
                <a href="https://twitter.com/SpokespersonECI?ref_src=twsrc%5Etfw">
                  @SpokespersonECI
                </a>{" "}
                <a href="https://twitter.com/hashtag/karnatakassemblyelections2023?src=hash&amp;ref_src=twsrc%5Etfw">
                  #karnatakassemblyelections2023
                </a>{" "}
                <a href="https://t.co/mHCloOtUL1">pic.twitter.com/mHCloOtUL1</a>
              </p>
              &mdash; Chief Electoral Officer, Karnataka (@ceo_karnataka){" "}
              <a href="https://twitter.com/ceo_karnataka/status/1641438254766657536?ref_src=twsrc%5Etfw">
                March 30, 2023
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
            <blockquote class="twitter-tweet">
              <p lang="kn" dir="ltr">
                ಕನ್ನಡಿಗರ ಪ್ರೀತಿಯ ಡಾಲಿ{" "}
                <a href="https://twitter.com/Dhananjayaka?ref_src=twsrc%5Etfw">
                  @Dhananjayaka
                </a>{" "}
                , ತಮ್ಮ ವೈವಿಧ್ಯಮಯ ಶೈಲಿಯ ನಟನೆಯಿಂದ ನಟ ರಾಕ್ಷಸನೆಂದು ಖ್ಯಾತಿ ಪಡೆದ ಶ್ರೀ.
                ಡಾಲಿ ಧನಂಜಯ್ ಅವರು ರಾಜ್ಯದ ಜನತೆಯನ್ನು ಮತ ಚಲಾಯಿಸುವಂತೆ ಮನವಿ
                ಮಾಡಿದ್ದಾರೆ.
                <a href="https://twitter.com/ECISVEEP?ref_src=twsrc%5Etfw">
                  @ECISVEEP
                </a>{" "}
                <a href="https://twitter.com/SpokespersonECI?ref_src=twsrc%5Etfw">
                  @SpokespersonECI
                </a>{" "}
                <a href="https://twitter.com/hashtag/karnatakassemblyelections2023?src=hash&amp;ref_src=twsrc%5Etfw">
                  #karnatakassemblyelections2023
                </a>{" "}
                <a href="https://twitter.com/hashtag/vote?src=hash&amp;ref_src=twsrc%5Etfw">
                  #vote
                </a>{" "}
                <a href="https://twitter.com/hashtag/Karnataka?src=hash&amp;ref_src=twsrc%5Etfw">
                  #Karnataka
                </a>{" "}
                <a href="https://t.co/rwWvadrt1o">pic.twitter.com/rwWvadrt1o</a>
              </p>
              &mdash; Chief Electoral Officer, Karnataka (@ceo_karnataka){" "}
              <a href="https://twitter.com/ceo_karnataka/status/1642840541464498177?ref_src=twsrc%5Etfw">
                April 3, 2023
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
            <DashboardCard06 />
            {/* Table (Top Channels) */}
            <DashboardCard07 />
            {/* Line chart (Sales Over Time) */}
            <hr className="mb-6" />
            <span className="text-xl text-gray-800 font-semibold">Heading</span>
            <p className="text-sm text-gray-600 mb-6">description</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div className="col-span-1 row-span-1 aspect-w-16 aspect-h-9">
                <DashboardCard01 src={"../src/campaign/1.png"} />
              </div>

              <div className="col-span-1 row-span-1 aspect-w-16 aspect-h-9">
                <DashboardCard01 src={"../src/campaign/2.png"} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
              <div className="col-span-1 row-span-1 aspect-w-16 aspect-h-9">
                <DashboardCard01 src={"../src/campaign/reach.png"} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
