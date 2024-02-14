import styled from "styled-components";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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

`
const DashboardBody = styled.div`

`

const DashboardTotalGrossBoard = styled.div`

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
  return (
    <div>
      <DashboardHeader>
        Dashboard 
        <CalendarTodayIcon fontSize="large"/>
      </DashboardHeader>
    </div>
  );
}

export default DashBoardView;