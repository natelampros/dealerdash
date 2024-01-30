import React from 'react';
import logo from './logo.png';
import './App.css';
import { ContactUs } from './contact';
import GoogleFormComponent from './GoogleFormComponent';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          {/*<header className="App-header">
            <img src={logo} alt="Logo" className="App-logo"/>
            <p>Dealer Dash</p>
            </header>*/}
          <GoogleFormComponent />
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default App;
