import styled from "styled-components";

const DashboardContainer = styled.div`
  display: block;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 20px 0 20px;
`;

const DashboardHeader = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 20px 0px;
  font-size: 40px;
  gap: 10px;
  width: 100%;
`;

const DashboardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

const DashboardOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: white;
`

const DashboardBoard = styled.div`
  background-color: #21242c;
  color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  min-height: 175px;
  justify-content: flex-start;
  align-items: start;
  margin: 0 0 0 0;
  padding: 20px 20px 20px 20px;
  
`

const DashboardLongBoard = styled.div`
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
  width: auto;
  height: auto;
  justify-content: flex-start;
  align-items: start;
  margin: 0 0 0 0;
  padding: 20px
`;

export {
  DashboardContainer,
  DashboardHeader,
  DashboardTitle,
  DashboardOptions,
  DashboardBoard,
  DashboardLongBoard,
}