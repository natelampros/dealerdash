import styled from "styled-components";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Progressbar } from "../components/Progressbar";
import { useState } from "react";
import Dropdown from "../components/DropdownButton";
import "./styles.css";
import MTDProgess from "../components/MTDProgress";

const options = [
  { label: "1", value: "TOTAL"},
  { label: "2", value: "GROSS"},
  { label: "3", value: "NET"},
];

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

const DashboardBody = styled.div``;

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
  align-items: center;
  margin: 0 0 20px 0;
`;

const DashboardTotalSoldBoard = styled.div``;

const DashboardYearHistoryBoard = styled.div``;

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
          <DashboardMonthToDateProjectionsBoard>
            <MTDProgess/>
          </DashboardMonthToDateProjectionsBoard>
        </DashboardBody>
      </DashboardContainer>
    </div>
  );
};

export default DashBoardView;
