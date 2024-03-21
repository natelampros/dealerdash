import {
  DashboardContainer,
  DashboardHeader,
  DashboardTitle,
  DashboardOptions,
  DashboardBoard,
  DashboardLongBoard,
} from "../components/DashboardComponents";
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
  ops
} from '../mockData';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Progressbar } from "../components/Progressbar";
import { useState, useEffect } from "react";
import Dropdown from "../components/DropDownButton";
import MTDProgess from "../components/MTDProgress";
import Chart from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Notification } from '../components/Notification';
import "./styles.css";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [pace, setPace] = useState(840100);
  const [goal, setGoal] = useState(950000);
  const [salegoal, setSaleGoal] = useState(200);
  const [ actual, setActual] = useState(207);
  const [isActual, setIsActual] = useState(true);

  useEffect(() => {

  })

  // formatted numbers
  const progress = pace / goal;
  const p = pace.toLocaleString();
  const g = goal.toLocaleString();

  const showVariance = true; // Set this based on your requirements

  console.log(salesproData);

  return (
    <div className="dashboard-body" style={{backgroundColor: "black"}}>
      <DashboardHeader>
        <div className="title">
          Dashboard
          <CalendarTodayIcon fontSize="large"/>
        </div>
        {
          isActual ? ( 
          <div className="main-options">
            <p style={{ color: "#6A6B6D" }}>Actual</p>
            <p>Projection</p>
          </div>
          ) : (
            <div className="main-options">
              <p>Actual</p>
              <p style={{ color: "#6A6B6D" }}>Projection</p>
            </div>
          )
        }
      </DashboardHeader>
      <div className="container-fluid">
        <div className="dashboard-container d-flex flex-row flex-md-col flex-wrap align-items-center justify-content-start">
          <div className="flex-item flex-fill small-card p-4">
            <div className="dashboard-title">
              <p className="boardTitle">Total gross</p>
              <Dropdown options={options}/>
            </div>
            <div className="board-info">
              <p className="boardTitleNumber">{`$${p}`}</p>
              <p className="progressText">{`Pacing: $${p} / Goal: $${g}`}</p>
              <Progressbar
                actual={pace}
                goal={goal}
                showVariance={showVariance}
                />
            </div>
          </div>
          <div className="flex-item small-card p-4">
            <div className="dashboard-title">
              <p className="boardTitle">Total sold</p>
              <Dropdown options={options}/>
            </div>
            <div className="board-info">
              <p className="boardTitleNumber">{`${actual}`}</p>
              <p className="progressText">{`${actual} / ${salegoal} `}</p>
              <Progressbar
                actual={actual}
                goal={salegoal}
                showVariance={showVariance}
                />
            </div>
          </div>
          <div className="flex-item small-card p-4">
            <div className="dashboard-title">
              <p className="boardTitle">Sales Pros</p>
              <Dropdown options={salesproOptions}/>
            </div>
            <div className="sales-pro-container">
              {
                salesproData.map((data) => {
                  return (
                    <div className="progress-bar-container">
                      <div className="progress-bar-header">
                        <p className="progress-bar-name">
                          {`${data.name}`}
                        </p>
                        <p className="progress-bar-number">
                          {`${data.actual} / ${data.goal}`}
                        </p>
                      </div>
                      <Progressbar
                        actual={data.actual}
                        goal={data.goal}
                        showVariance={false}
                        />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="flex-item small-card p-4">
            <div className="dashboard-title">
              <p className="boardTitle">Outreach</p>
              <Dropdown options={outreachOptions}/>
            </div>
            <div className="progress-container">
              <Doughnut data={outreachData} options={outreachConfig}/>
            </div>
          </div>
          <div className="flex-item big-card p-4">
            <div className="col yearly board">
              <div className="dashboard-title">
                <p className="boardTitle">12 Month History</p>
                <Dropdown options={yearlyOptions}/>
              </div>
              <div className="col yearly-calendar">
                <Bar data={chartData} options={ops} />
              </div>
            </div>
          </div>
          <div className="flex-item p-4 big-card align-items-center">
            <MTDProgess/>
          </div>
          <div className="flex-item small-card p-4">
            <div className="col notifications board">
              <div className="dashboard-title">
                <p className="boardTitle">Notifications</p>
              </div>
              <div className="notification-list">
                {
                  notifications.map((notification, index) => {
                    return (
                      <>
                        <Notification notificationData={notification} />
                        {
                          index < notifications.length - 1 ? (<hr className="dark-divider"/>) : null
                        }
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="flex-item small-card p-4">
            <div className="dashboard-title">
              <p className="boardTitle">Fixed Operations</p>
            </div>
            <div className="sales-pro-container">
              {
                fixedopData.map((data) => {
                  return (
                    <div className="progress-bar-container">
                      <div className="progress-bar-header">
                        <p className="progress-bar-name">
                          {`${data.name}`}
                        </p>
                      </div>
                      <Progressbar
                        actual={data.actual}
                        goal={data.goal}
                        showVariance={true}
                        showPace={true}
                        fixedColor={colors.purple}
                        />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="flex-item small-card p-4">
            <div className="dashboard-title">
              <p className="boardTitle">Sales/Fin. Managers</p>
              <Dropdown options={salesFinOptions}/>
            </div>
            <div className="sales-pro-container">
              {
                salesFinData.map((data) => {
                  return (
                    <div className="progress-bar-container">
                      <div className="progress-bar-header">
                        <p className="progress-bar-name">
                          {`${data.name}`}
                        </p>
                        <p className="progress-bar-number">
                          {`${data.actual} / ${data.goal}`}
                        </p>
                      </div>
                      <Progressbar
                        actual={data.actual}
                        goal={data.goal}
                        showVariance={false}
                        />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="flex-item small-card p-4">
            <div className="dashboard-title">
              <p className="boardTitle">Srvc/Parts Managers</p>
              <Dropdown options={salesproOptions}/>
            </div>
            <div className="sales-pro-container">
              {
                srvcPartsData.map((data) => {
                  return (
                    <div className="progress-bar-container">
                      <div className="progress-bar-header">
                          <p className="progress-bar-name">
                            {`${data.name}`}
                          </p>
                          <p className="progress-bar-number">
                            {`${data.actual} / ${data.goal}`}
                          </p>
                        </div>
                        <Progressbar
                          actual={data.actual}
                          goal={data.goal}
                          showVariance={false}
                        />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;