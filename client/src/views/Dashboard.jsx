import { DashboardHeader } from "../components/DashboardComponents";
import {
  notifications,
  salesproData,
  srvcPartsData,
  salesFinData,
  fixedopData,
  options,
  outreachOptions,
  salesFinOptions,
  salesproOptions,
  yearlyOptions,
  outreachData,
  outreachConfig,
  chartData,
  colors,
  ops,
} from "../mockData";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Progressbar } from "../components/Progressbar";
import { useState, useEffect } from "react";
import Dropdown from "../components/DropDownButton";
import MTDProgess from "../components/MTDProgress";
import Chart from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import { Notification } from "../components/Notification";
import GrossCard from "../components/DashboardCards/GrossCard";
import SoldCard from "../components/DashboardCards/SoldCard";
import HistoryCard from "../components/DashboardCards/HistoryCard";
import NotificationsCard from "../components/DashboardCards/NotificationsCard";
import FixedOpsCard from "../components/DashboardCards/FixedOpsCard";
import SalesRepsCard from "../components/DashboardCards/SalesRepsCard";
import OutreachCard from "../components/DashboardCards/OutreachCard";
import MTDProgressCard from "../components/DashboardCards/MTDProgressCard";
import SaleFinLeadershipCard from "../components/DashboardCards/SaleFinLeadershipCard";
import ServicePartsLeadershipCard from "../components/DashboardCards/ServicePartsLeadershipCard";
import "./styles.css";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [pace, setPace] = useState(840100);
  const [goal, setGoal] = useState(950000);
  const [salegoal, setSaleGoal] = useState(200);
  const [actual, setActual] = useState(207);
  const [isActual, setIsActual] = useState(true);

  useEffect(() => {});

  // formatted numbers
  const progress = pace / goal;
  const p = pace.toLocaleString();
  const g = goal.toLocaleString();

  const showVariance = true; // Set this based on your requirements

  console.log(salesproData);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-header-items">
          <div className="title">
            Dashboard
            <CalendarTodayIcon fontSize="large" />
          </div>
          {isActual ? (
            <div className="main-options">
              <p style={{ color: "#6A6B6D" }}>Actual</p>
              <p>Projection</p>
            </div>
          ) : (
            <div className="main-options">
              <p>Actual</p>
              <p style={{ color: "#6A6B6D" }}>Projection</p>
            </div>
          )}
        </div>
      </div>
      <div className="column">
        <div className="card-row">
          <div className="card half">
            {/* Gross 1 */}
            <GrossCard
              pace={pace}
              goal={goal}
              options={options}
              showVariance={showVariance}
            />
          </div>
          <div className="card half">
            {" "}
            {/* Sold 2 */}
            <SoldCard
              actual={actual}
              salegoal={salegoal}
              options={options}
              showVariance={showVariance}
            />
          </div>
        </div>
        <div className="card-row">
          <div className="card stretch">
            {/* History Card */}
            <HistoryCard
              yearlyOptions={yearlyOptions}
              chartData={chartData}
              ops={ops}
            />
          </div>
        </div>
        <div className="card-row">
          <div className="card half">
            {/* Notifications */}
            <NotificationsCard notifications={notifications} />
          </div>
          <div className="card half">
            {" "}
            {/* Fixed Operations */}
            <FixedOpsCard fixedopData={fixedopData} colors={colors} />
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card-row">
          <div className="card half">
            {/* Gross 1 */}
            <SalesRepsCard
              salesproData={salesproData}
              salesproOptions={salesproOptions}
            />
          </div>
          <div className="card half">
            {" "}
            {/* Sold 2 */}
            <OutreachCard
              outreachData={outreachData}
              outreachOptions={outreachOptions}
              outreachConfig={outreachConfig}
            />
          </div>
        </div>
        <div className="card-row">
          <div className="card stretch">
            {/* History Card */}
            <MTDProgressCard />
          </div>
        </div>
        <div className="card-row">
          <div className="card half">
            {/* Notifications */}
            <SaleFinLeadershipCard
              salesFinData={salesFinData}
              salesFinOptions={salesFinOptions}
            />
          </div>
          <div className="card half">
            {" "}
            {/* Fixed Operations */}
            <ServicePartsLeadershipCard
              srvcPartsData={srvcPartsData}
              servicePartsOptions={salesproOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
