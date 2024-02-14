import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import GoogleFormComponent from './GoogleFormComponent';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
          <div style={{ height: '700px', overflowY: 'scroll' }}> {/* Adjust the height as needed */}
            <GoogleFormComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
