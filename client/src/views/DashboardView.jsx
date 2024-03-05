import styled from "styled-components";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Progressbar } from "../components/Progressbar";
import { useState, useEffect } from "react";
import Dropdown from "../components/DropDownButton";
import "./styles.css";
import MTDProgess from "../components/MTDProgress";
// import Chart from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Notification } from '../components/Notification';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
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

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);




const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw; 
  overflow: hidden;
  position: absolute;
`;

const DashboardHeader = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 20px 20px;
  font-size: 40px;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const DashboardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr)); 
  grid-template-rows: repeat(3, 1fr); 
  grid-gap: 20px;
  width: 100%; 
  padding-bottom: 20px; 
`;

const DashboardTotalGrossBoard = styled.div`
  background-color: #21242c;
  color: white;
  padding: all 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 420px;
  min-height: 175px;
  justify-content: flex-start;
  align-items: start;
  margin: 0 0 0 0;
`;

const DashboardTotalSoldBoard = styled.div`
  background-color: #21242c;
  color: white;
  padding: all 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 420px;
  min-height: 175px;
  justify-content: flex-start;
  align-items: stretch;
  margin: 0 0 0 0;
`;

const DashboardYearHistoryBoard = styled.div`
  grid-area: 2 / 1 / 3 / 3; 
  background-color: #21242c;
  color: white;
  padding: 20px; 
  border-radius: 25px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 840px; 
  justify-content: flex-start;
  align-items: start;
  margin: 0;
`;

const DashboardNotificationBoard = styled.div`
  background-color: #21242c;
  color: white;
  padding: all 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: auto;
  min-height: 175px;
  width: 400px;
  justify-content: flex-start;
  align-items: center;
`;

const DashboardFixedOperationBoard = styled.div`
  background-color: #21242c;
  color: white;
  padding: all 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: auto;
  min-height: 175px;
  width: 440px;
  justify-content: flex-start;
  align-items: center;
`;

const DashboardSalesProsBoard = styled.div`
  background-color: #21242c;
  color: white;
  padding: all 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: auto;
  min-height: 175px;
  width: 350px;
  justify-content: flex-start;
  align-items: center;
`;

const DashboardOutreachBoard = styled.div`
  background-color: #21242c;
  color: white;
  padding: all 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: auto;
  min-height: 175px;
  width: 350px;
  justify-content: flex-start;
  align-items: center;
`;

const DashboardMonthToDateProjectionsBoard = styled.div`
  background-color: #21242c;
  color: white;
  padding: all 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: auto;
  min-height: 175px;
  justify-content: flex-start;
  align-items: center;
  grid-area: 2 / 3 / 3 / 5;
`;

const DashboardSalesFinManagementBoard = styled.div`
  background-color: #21242c;
  color: white;
  padding: all 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: auto;
  min-height: 175px;
  width: 370px;
  justify-content: flex-start;
  align-items: center;
`;

const DashboardServicePartsManagementBoard = styled.div`
  background-color: #21242c;
  color: white;
  padding: all 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: auto;
  min-height: 175px;
  width: 370px;
  justify-content: flex-start;
  align-items: center;
`;


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
