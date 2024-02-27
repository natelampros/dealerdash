import styled from "styled-components";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Progressbar } from "../components/Progressbar";
import { useState } from "react";
import Dropdown from "../components/DropdownButton";
import "./styles.css";
import MTDProgess from "../components/MTDProgress";
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import Doughnut from 'chart.js';
import { Notification } from '../components/Notification';

const notifications = [
  {},
  {},
  {},
]

const colors = [
  { purple: '#464DC2' }
]

const salesproData = [
  { key: "1", name: "John Davis", actual: "18", goal: "22" },
  { key: "2", name: "Steve Lacy", actual: "15", goal: "25" },
  { key: "3", name: "Jordan Lee", actual: "6", goal: "18" },
  { key: "4", name: "Chris Parker", actual: "10", goal: "22" }
]

const srvcPartsData = [
  { key: "1", name: "John Davis", actual: "23", goal: "22" },
  { key: "2", name: "Steve Lacy", actual: "24", goal: "25" },
  { key: "3", name: "Jordan Lee", actual: "16", goal: "18" },
  { key: "4", name: "Chris Parker", actual: "22", goal: "22" },
  { key: "5", name: "Sasm Kelley", actual: "26", goal: "25" }
]

const salesFinData = [
  { key: "1", name: "John Davis", actual: "23", goal: "22" },
  { key: "2", name: "Steve Lacy", actual: "24", goal: "25" },
  { key: "3", name: "Jordan Lee", actual: "16", goal: "18" },
  { key: "4", name: "Chris Parker", actual: "22", goal: "22" },
  { key: "5", name: "Sasm Kelley", actual: "26", goal: "25" }
]

const fixedopData = [
  { key: "1", name: "Service Gross", actual: 125340, goal: 120000 },
  { key: "2", name: "Parts Gross", actual: 105340, goal: 120000 },
  { key: "3", name: "Total RO", actual: 1234, goal: 1250 },
  { key: "4", name: "Total Hours", actual: 1234, goal: 1250 },
  { key: "5", name: "Hours Per RO", actual: 22, goal: 25 }
]

const options = [
  { label: "1", value: "TOTAL"},
  { label: "2", value: "GROSS"},
  { label: "3", value: "NET"},
];

const salesproOptions = [
  { label: "1", value: "CARS SOLD"},
]

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
    legend: {
      display: true,
      position: 'top',
      align: 'start',
      labels: {
        usePointStyle: 'true',
        boxWidth: 20,
        padding: 12,
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
  width: 350px;
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
          <DashboardSalesProsBoard>
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
          </DashboardSalesProsBoard>
          <DashboardOutreachBoard>
            <div className="dashboard-board-title">
              <p className="boardTitle">Outreach</p>
              <Dropdown options={salesproOptions}/>
            </div>
            <div className="progress-container">
              
            </div>
          </DashboardOutreachBoard>
          <DashboardSalesFinManagementBoard>
            <div className="dashboard-board-title">
              <p className="boardTitle">Sales/Fin. Managers</p>
              <Dropdown options={salesproOptions}/>
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
          </DashboardSalesFinManagementBoard>
          <DashboardFixedOperationBoard>
            <div className="dashboard-board-title">
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
          </DashboardFixedOperationBoard>
          <DashboardNotificationBoard>
            <div className="dashboard-board-title">
              <p className="boardTitle">Notifications</p>
            </div>
            <div className="notification-list">
              {
                notifications.map((notification) => {
                  return (
                    <Notification notificationData={notification} />
                  )
                })
              }
            </div>
          </DashboardNotificationBoard>
          <DashboardServicePartsManagementBoard>
            <div className="dashboard-board-title">
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
          </DashboardServicePartsManagementBoard>
        </DashboardBody>
      </DashboardContainer>
    </div>
  );
};

export default DashBoardView;
