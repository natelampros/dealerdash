import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './views/Dashboard';
// import GoogleFormComponent from './GoogleFormComponent';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Sidebar />
        {/* <div style={{ flex: 1, overflow: "auto", maxWidth: "100%"}}> */}
          <Dashboard />
        </div>
        {/* <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
          <div style={{ height: 'auto', overflowY: 'hidden' }}> {/* Adjust the height as needed 
            <GoogleFormComponent />
          </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
