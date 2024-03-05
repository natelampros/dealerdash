import styled from "styled-components";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Progressbar } from "../components/Progressbar";
import { useState, useEffect } from "react";
import Dropdown from "../components/DropDownButton";
import "./styles.css";
import MTDProgess from "../components/MTDProgress";
// import Chart from 'chart.js/auto';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Notification } from '../components/Notification';

const DashBoardView = () => {
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

  return (
    <div className="container">
      <div class="flexbox-container">
        <div class="flexbox-item flexbox-item-1"></div>
        <div class="flexbox-item flexbox-item-2"></div>
        <div class="flexbox-item flexbox-item-3"></div>
        <div class="flexbox-item flexbox-item-4"></div>
        <div class="flexbox-item flexbox-item-5"></div>
        <div class="flexbox-item flexbox-item-6"></div>
        <div class="flexbox-item flexbox-item-7"></div>

      </div>
    </div>
  );
};

export default DashBoardView;
