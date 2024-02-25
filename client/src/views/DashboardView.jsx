import styled from "styled-components";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Progressbar } from "../components/Progressbar";
import { useState } from "react";
import Dropdown from "../components/DropdownButton";
import "./styles.css";
import MTDProgess from "../components/MTDProgress";
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const options = [
  { label: "1", value: "TOTAL"},
  { label: "2", value: "GROSS"},
  { label: "3", value: "NET"},
];

const yearlyOptions = [
  { label: "1", value: "GROSS"},
  { label: "2", value: "NET"},
]

const chartkey = [
  { name: "actual", color: "#696FF2" },
  { name: "goal", color: "#D672E3" },
]

const chartData = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  datasets: [
    {
      label: 'Actual',
      data: [1200, 900, 600, 300, 50, 100, 200, 400, 600, 800, 1000, 1100],
      backgroundColor: '#464DC2',
      borderColor: '',
      borderWidth: 1,
      borderRadius: 25,
      pointStyle: 'circle',
    },
    {
      label: 'Goal',
      data: [1200, 900, 600, 300, 50, 100, 200, 400, 600, 800, 1000, 1100],
      backgroundColor: '#B75CC3',
      borderColor: '',
      borderWidth: 1,
      borderRadius: 25,
    },
  ],
}

const ops = {
  plugins: {
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 50;
      };
    },
    legend: {
      display: true,
      position: 'top',
      align: 'start',
      labels: {
        usePointStyle: 'true',
        boxWidth: 6,
      }
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

Chart.Legend.prototype.afterFit = function() {
  this.height = this.height + 50;
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: inherit;
  flex-wrap: wrap;
  gap: 20px;
`;

const DashboardHeader = styled.div`
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0 20px 20px;
  font-size: 40px;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const DashboardBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
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
  background-color: #21242c;
  color: white;
  padding: 20px 20px 20px 20px;
  border-radius: 25px;
  display: flex;
  float: left;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 840px;
  height: auto;
  justify-content: flex-start;
  align-items: start;
  margin: 0 0 0 0;
  padding: 20px
`;

const DashboardNotificationBoard = styled.div``;

const DashboardFixedOperationBoard = styled.div``;

const DashboardSalesProsBoard = styled.div``;

const DashboardOutreachBoard = styled.div``;

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
`;

const DashboardSalesFinManagementBoard = styled.div``;

const DashboardServicePartsManagementBoard = styled.div``;

const DashBoardView = () => {
  const [pace, setPace] = useState(840100);
  const [goal, setGoal] = useState(950000);
  const [salegoal, setSaleGoal] = useState(200);
  const [ actual, setActual] = useState(207);

  // formatted numbers
  const progress = pace / goal;
  const p = pace.toLocaleString();
  const g = goal.toLocaleString();

  const showVariance = true; // Set this based on your requirements

  return (
    <div className="container">
      <DashboardContainer>
        <DashboardHeader>
          Dashboard
          <CalendarTodayIcon fontSize="large" color="gray" />
        </DashboardHeader>
        <DashboardBody>
          <DashboardTotalGrossBoard>
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
          </DashboardTotalGrossBoard>
          <DashboardTotalSoldBoard>
            <div className="dashboard-board-title">
                <p className="boardTitle">Total sold</p>
                <Dropdown options={options}/>
            </div>
            <p className="progressText">{`${actual} / ${salegoal} `}</p>
            <Progressbar
              actual={actual}
              goal={salegoal}
              showVariance={showVariance}
            />
          </DashboardTotalSoldBoard>
          <DashboardYearHistoryBoard>
            <div className="dashboard-board-title">
                <p className="boardTitle">12 Month History</p>
                <Dropdown options={yearlyOptions}/>
            </div>
            <div className="yearly-calendar">
              <Bar data={chartData} options={ops} />
            </div>
          </DashboardYearHistoryBoard>
          <DashboardMonthToDateProjectionsBoard>
            <MTDProgess/>
          </DashboardMonthToDateProjectionsBoard>
        </DashboardBody>
      </DashboardContainer>
    </div>
  );
};

export default DashBoardView;
