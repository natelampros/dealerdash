import { DashboardHeader } from "../components/DashboardComponents";
import * as mockData from "../mockData";
import * as mockData2 from "../mockData2";
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
import { useDataSource } from "../DataSourceContext";

const Dashboard = () => {
  const { isProjection, toggleProjection } = useDataSource();

  // Use the provided data based on the current state
  const data = isProjection ? mockData2 : mockData;

  useEffect(() => {});

  // formatted numbers
  const progress = data.dashboardData.pace / data.dashboardData.goal;
  const p = data.dashboardData.pace.toLocaleString();
  const g = data.dashboardData.goal.toLocaleString();

  const showVariance = true; // Set this based on your requirements

  console.log(data.salesproData);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-header-items">
          <div className="title">
            Dashboard
            <CalendarTodayIcon fontSize="large" />
          </div>
          <div className="main-options">
            <p
              style={{
                color: isProjection ? "#6A6B6D" : "white",
                fontWeight: isProjection ? "normal" : "bold", // Make "Actual" bold when isProjection is false
              }}
              onClick={() => toggleProjection(false)}
            >
              Actual
            </p>
            <p
              style={{
                color: isProjection ? "white" : "#6A6B6D",
                fontWeight: isProjection ? "bold" : "normal", // Make "Projection" bold when isProjection is true
              }}
              onClick={() => toggleProjection(true)}
            >
              Projection
            </p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card-row">
          <div className="card half">
            {/* Gross 1 */}
            <GrossCard
              pace={p}
              goal={g}
              options={data.options}
              showVariance={true}
            />
          </div>
          <div className="card half">
            {" "}
            {/* Sold 2 */}
            <SoldCard
              actual={data.dashboardData.actual}
              salegoal={data.dashboardData.salegoal}
              options={data.options}
              showVariance={showVariance}
            />
          </div>
        </div>
        <div className="card-row">
          <div className="card stretch">
            {/* History Card */}
            <HistoryCard
              yearlyOptions={data.yearlyOptions}
              chartData={data.chartData}
              ops={data.ops}
            />
          </div>
        </div>
        <div className="card-row">
          <div className="card half">
            {/* Notifications */}
            <NotificationsCard notifications={data.notifications} />
          </div>
          <div className="card half">
            {" "}
            {/* Fixed Operations */}
            <FixedOpsCard fixedopData={data.fixedopData} colors={data.colors} />
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card-row">
          <div className="card half">
            {/* Gross 1 */}
            <SalesRepsCard
              salesproData={data.salesproData}
              salesproOptions={data.salesproOptions}
            />
          </div>
          <div className="card half">
            {" "}
            {/* Sold 2 */}
            <OutreachCard
              outreachData={data.outreachData}
              outreachOptions={data.outreachOptions}
              outreachConfig={data.outreachConfig}
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
              salesFinData={data.salesFinData}
              salesFinOptions={data.salesFinOptions}
            />
          </div>
          <div className="card half">
            {" "}
            {/* Fixed Operations */}
            <ServicePartsLeadershipCard
              srvcPartsData={data.srvcPartsData}
              servicePartsOptions={data.salesproOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
