import React from 'react';
import logo from './logo.png';
import './App.css';

import GoogleFormComponent from './GoogleFormComponent';
import Sidebar from './sidebar';

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
