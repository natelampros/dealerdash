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
    <div className="container-fluid" style={{backgroundColor: "black"}}>
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
      <div className="row">
        
      </div>
    </div>
  )
}

export default Dashboard;