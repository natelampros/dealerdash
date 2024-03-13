import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './views/Dashboard';
import Daily from './views/Daily';
import Report from './views/Report';
import History from './views/History';
import Settings from './views/Settings';
import Notifications from './views/Notifications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewSidebar from './components/NewSidebar';
import Sidebar from "./components/Sidebar";
import DashboardView from "./views/DashboardView";
// import GoogleFormComponent from './GoogleFormComponent';

function App() {
  return (
      <NewSidebar>
        <Routes>
          <Route path="/dealerdash" element={<DashboardView/>} />
          <Route path="/daily" element={<Daily/>} />
          <Route path="/report" element={<Report/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/notifications" element={<Notifications/>} />
        </Routes>
      </NewSidebar>
  );
}

export default App;
