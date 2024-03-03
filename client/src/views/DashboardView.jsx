import styled from "styled-components";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Progressbar } from "../components/Progressbar";
import { useState, useEffect } from "react";
import Dropdown from "../components/DropdownButton";
import "./styles.css";
import MTDProgess from "../components/MTDProgress";
import Chart from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Notification } from '../components/Notification';
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


const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 1000px;

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
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 100%;
  overflow: hidden;
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
  width: 200%;
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
      <DashboardHeader>
        <div className="dashboard-title">
          Dashboard
          <CalendarTodayIcon fontSize="large" color="gray" />
        </div>
        <div className="dashboard-options">
          <span className="dashboard-option">Actual</span>
          <span className="dashboard-option">Projections</span>
        </div>
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
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <DashboardOutreachBoard>
            <div className="dashboard-board-title">
              <p className="boardTitle">Outreach</p>
              <Dropdown options={outreachOptions}/>
            </div>
            <div className="progress-container">
              <Doughnut data={outreachData} options={outreachConfig}/>
            </div>
          </DashboardOutreachBoard>
        </div>
        <div>
          <DashboardYearHistoryBoard>
            <div className="dashboard-board-title">
                <p className="boardTitle">12 Month History</p>
                <Dropdown options={yearlyOptions}/>
            </div>
            <div className="yearly-calendar">
              <Bar data={chartData} options={ops} />
            </div>
          </DashboardYearHistoryBoard>
        </div>
        <div>
          <DashboardMonthToDateProjectionsBoard>
            <MTDProgess/>
          </DashboardMonthToDateProjectionsBoard>
        </div>
        
        <div>
          <DashboardSalesFinManagementBoard>
            <div className="dashboard-board-title">
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
          </DashboardSalesFinManagementBoard>
        </div>
        <div>
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
        </div>
        <div>
          <DashboardNotificationBoard>
            <div className="dashboard-board-title">
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
          </DashboardNotificationBoard>
        </div>
        <div>
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
        </div>
      </DashboardBody>
    </div>
  );
};

export default DashBoardView;
