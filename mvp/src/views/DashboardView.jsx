import styled from "styled-components";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Progressbar } from "../components/Progressbar";
import { useState } from "react";
import './styles.css';

const DashboardHeader = styled.div`
  color: white;
  display: flex;
  justify-content: flex-start;
  padding: 20px 0 20px 20px;
  font-size: 40px;
  align-items: center;
  gap: 10px;
`
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`
const DashboardBody = styled.div`

`

const DashboardTotalGrossBoard = styled.div`
  background-color: #21242C;
  color: white;
  padding: all 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 250px;
  justify-content: flex-start;
  align-items: center;
`

const DashboardTotalSoldBoard = styled.div`

`

const DashboardYearHistoryBoard = styled.div`

`

const DashboardNotificationBoard = styled.div`

`

const DashboardFixedOperationBoard = styled.div`

`

const DashboardSalesProsBoard = styled.div`

`

const DashboardOutreachBoard = styled.div`

`

const DashboardMonthToDateProjectionsBoard = styled.div`

`

const DashboardSalesFinManagementBoard = styled.div`

`

const DashboardServicePartsManagementBoard = styled.div`

`

const DashBoardView = () => {
  const [pace, setPace] = useState("");
  const [goal, setGoal] = useState("");
  const [diff, setDiff] = useState("");

  return (
    <div>
      <DashboardContainer>
        <DashboardBody>
          <DashboardHeader>
            Dashboard 
            <CalendarTodayIcon fontSize="large" color="gray"/>
          </DashboardHeader>
          <DashboardTotalGrossBoard>
            <h3 className="boardTitle">Total gross</h3>
            <p className="boardTitleNumber">$873,850</p>
            <Progressbar props={{pace, goal, diff}}/>
          </DashboardTotalGrossBoard>
        </DashboardBody>
      </DashboardContainer>
    </div>
  );
}

export default DashBoardView;