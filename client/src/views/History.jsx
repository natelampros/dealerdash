import Calendar from '../components/Calendar';
import Sidebar from '../components/Sidebar';
import dayjs from 'dayjs';
import "./history.css";
import "./styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import React from 'react'

const keyMetricsList = [
  {
    key: 1,
    name: 'Productivity',
    options: {
    }
  },
  {
    key: 2,
    name: 'Financial',
    options: {

    }
  },
  {
    key: 3,
    name: 'Sales Leadership',
    options: {

    }
  },
  {
    key: 4,
    name: 'F&I Leadership',
    options: {

    }
  },
  {
    key: 5,
    name: 'Service Leadership',
    options: {

    }
  },
  {
    key: 6,
    name: 'Fixed Operations',
    options: {

    }
  },
  {
    key: 7,
    name: 'Receivables',
    options: {

    }
  },
  {
    key: 8,
    name: 'Fixed Receivables',
    options: {

    }
  },
]

const handleMetricItems = (name) => {
  
}

const History = () => {
  return (
    <div className='history-container'>
      <div className="history-body">
        <div className="key-metrics-options">
          <div className='boardTitle'>
            Select Key Metrics to View:
          </div>
          {
            keyMetricsList.map((item) => {
              return (
                <div className={`key-metric ${item.name}`} onClick={handleMetricItems(item.name)}>
                  {item.name}
                  <KeyboardArrowDownIcon style={{color: "#62636A"}}/>
                </div>
              )
            })
          }
        </div>
        <div className="calendar-container" >
          <Calendar referenceDate={dayjs(new Date())}
            views={['month', 'year', 'day']}
            />
        </div>
      </div>
    </div>
  )
}

export default History
