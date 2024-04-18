import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RevenueCard2 } from "./components/RevenueCard2";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { Overview } from "./components/Overview";
import { RevenueCard1 } from "./components/RevenueCard1";

function App() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Navbar />
        <Overview />

        <div className="grid grid-cols-3 gap-4 pl-6 pr-4 pt-4 bg-white-500">
          <RevenueCard1
            title={"Next Payout"}
            amount={"2312.23"}
            orderCount={"23"}
            day={"Today"}
            time={"04:00"}
          />
          <RevenueCard2
            title={"Amount Pending"}
            amount={"92,312.20"}
            orderCount={"13"}
          />
          <RevenueCard2 title={"Amount Processed"} amount={"23,92,312.19"} />
        </div>
      </div>
    </div>
  );
}

export default App;
