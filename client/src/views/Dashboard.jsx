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
import "./styles.css";
import MTDProgess from "../components/MTDProgress";
import Chart from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Notification } from '../components/Notification';
import "./styles.css";

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
    <>
      <div className="dashboard-container">
        <DashboardHeader>
          <DashboardTitle>
            Dashboard
            <CalendarTodayIcon fontSize="large"/>
          </DashboardTitle>
        </DashboardHeader>
        <div className="dashboard-body">
          <div className="total-gross board">
            <div className="dashboard-board-title">
              <p className="boardTitle">Total gross</p>
              <Dropdown options={options}/>
            </div>
            <p className="boardTitleNumber">${p}</p>
            <p className="progressText">{`Pacing: $${p} / Goal: $${g}`}</p>
            <Progressbar
              actual={pace}
              goal={goal}
              showVariance={showVariance}
              />
          </div>
          <div className="total-sold board">
            <div className="dashboard-board-title">
              <p className="boardTitle">Total sold</p>
              <Dropdown options={options}/>
            </div>
            <div className="board-progress">
              <p className="boardTitleNumber">${actual}</p>
              <p className="progressText">{`${actual} / ${salegoal} `}</p>
              <Progressbar
                actual={actual}
                goal={salegoal}
                showVariance={showVariance}
              />
            </div>
          </div>
          <div className="sales-pro board dynamic-height">
            <div className="dashboard-board-title">
              <p className="boardTitle">Sales Pros</p>
              <Dropdown options={salesproOptions}/>
            </div>
            <div className="sales-pro-container">
              {
                salesproData.map((data) => {
                  return (
                    <div className="progress-bar-container">
                      <div className="progress-bar-header">
                        <div className="progress-bar-name">
                          {`${data.name}`}
                        </div>
                        <div className="progress-bar-number">
                          {`${data.actual} / ${data.goal}`}
                        </div>
                        <div></div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="outreach board">
            Total gross
          </div>
          <div className="yearly board">
            Total gross
          </div>
          <div className="month-to-date-proj board">
            Total gross
          </div>
          <div className="notifications board">
            Total gross
          </div>
          <div className="fixed-operations board">
            Total gross
          </div>
          <div className="sales-fin-managers board">
            Total gross
          </div>
          <div className="service-parts-managers board">
            Total gross
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;