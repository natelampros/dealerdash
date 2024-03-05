import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './css/Calendar.css';
export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        label="YearCalendar"
        sx={{
          color: 'white',
          '& .MuiPickersDay-root': { // Target individual date elements
            color: '#fff'
          },
          '& .MuiTypography-root': { // Target day headers element
            color: '#fff', // Set text color to white
          },
          '& .MuiSvgIcon-root': { // Target day headers element
            color: '#fff', // Set text color to white
          },
          '& .MuiButtonBase-root': { // Target day headers element
            color: '#fff', // Set text color to white
          },
          '& .MuiPickersDay-today': { // Target day headers element
            color: '#fff', // Set text color to white
          },
        }}
      />
    </LocalizationProvider>
  );
}