import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const notifications = [
  {key: "1", icon: <ReceiptLongIcon style={{ 
          backgroundColor: '#131523', 
          color:'#8B8C8F',
          padding: '8px',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          }}
        />, title: "CIT", description: "Brief notification description of CIT and its cost", cost: -1850},
  {key: "2", icon: <PaidOutlinedIcon style={{
          backgroundColor: '#131523', 
          color:'#8B8C8F',
          padding: '8px',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          }}
        />, title: "Bad Money Alert", description: "Brief notification description of CIT and its cost", cost: -1850},
  {key: "3", icon: <ReceiptLongIcon style={{ 
          backgroundColor: '#131523', 
          color:'#8B8C8F',
          padding: '8px',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          }}
        />, title: "CIT", description: "Brief notification description of CIT and its cost", cost: 1850},
  {key: "4", icon: <ReceiptLongIcon style={{ 
          backgroundColor: '#131523', 
          color:'#8B8C8F',
          padding: '8px',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          }}
        />, title: "CIT", description: "Brief notification description of CIT and its cost", cost: -1850},
]

const colors = [
  { purple: '#464DC2' }
]

const salesproData = [
  { key: "1", name: "John Davis", actual: "18", goal: "22" },
  { key: "2", name: "Steve Lacy", actual: "15", goal: "25" },
  { key: "3", name: "Jordan Lee", actual: "6", goal: "18" },
  { key: "4", name: "Chris Parker", actual: "10", goal: "22" }
]

const srvcPartsData = [
  { key: "1", name: "John Davis", actual: "23", goal: "22" },
  { key: "2", name: "Steve Lacy", actual: "24", goal: "25" },
  { key: "3", name: "Jordan Lee", actual: "16", goal: "18" },
  { key: "4", name: "Chris Parker", actual: "22", goal: "22" },
  { key: "5", name: "Sasm Kelley", actual: "26", goal: "25" }
]

const salesFinData = [
  { key: "1", name: "John Davis", actual: "23", goal: "22" },
  { key: "2", name: "Steve Lacy", actual: "24", goal: "25" },
  { key: "3", name: "Jordan Lee", actual: "16", goal: "18" },
  { key: "4", name: "Chris Parker", actual: "22", goal: "22" },
  { key: "5", name: "Sasm Kelley", actual: "26", goal: "25" }
]

const fixedopData = [
  { key: "1", name: "Service Gross", actual: 125340, goal: 120000 },
  { key: "2", name: "Parts Gross", actual: 105340, goal: 120000 },
  { key: "3", name: "Total RO", actual: 1234, goal: 1250 },
  { key: "4", name: "Total Hours", actual: 1234, goal: 1250 },
  { key: "5", name: "Hours Per RO", actual: 22, goal: 25 }
]

const options = [
  { label: "1", value: "TOTAL"},
  { label: "2", value: "GROSS"},
  { label: "3", value: "NET"},
];

const outreachOptions = [
  { label: "1", value: "TOTAL"},
]

const salesFinOptions = [
  { label: "1", value: "UNITS SOLD"},
]

const salesproOptions = [
  { label: "1", value: "CARS SOLD"},
]

const yearlyOptions = [
  { label: "1", value: "GROSS"},
  { label: "2", value: "NET"},
]

const outreachData = {
  labels: [
    'Blue',
    'Green',
    'Pink',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100, 50],
    backgroundColor: [
      '#4249B3',
      '#5DA95E',
      '#A856B4',
      '#E1B752'
    ],
    borderColor: [
      '#4249B3',
      '#5DA95E',
      '#A856B4',
      '#E1B752'
    ],
    borderRadius: 50,
    cutout: 95,
    hoverOffset: 4
  }], 
};

const outreachConfig = {
  options: {
    aspectRatio: 0.7,
    responsive: true,
  },
  title: {
    display: true,
    text: '',
    color: 'white',
    font: {
      size: 20,
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'right',
      align: 'start',
      labels: {
        usePointStyle: 'true',
        boxWidth: 20,
        padding: 12,
      }
    }
  },
};


const chartData = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  datasets: [
    {
      label: 'Actual',
      data: [1200, 900, 600, 300, 50, 100, 200, 400, 600, 800, 1000, 1100],
      backgroundColor: '#464DC2',
      borderColor: '',
      borderWidth: 1,
      borderRadius: 25,
      pointStyle: 'circle',
    },
    {
      label: 'Goal',
      data: [1200, 900, 600, 300, 50, 100, 200, 400, 600, 800, 1000, 1100],
      backgroundColor: '#B75CC3',
      borderColor: '',
      borderWidth: 1,
      borderRadius: 50,
    },
  ],
}

const ops = {
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'start',
      labels: {
        usePointStyle: 'true',
        boxWidth: 20,
        padding: 12,
      }
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export {
  notifications,
  salesproData,
  srvcPartsData,
  salesFinData,
  fixedopData,
  options,
  outreachOptions,
  salesFinOptions,
  salesproOptions,
  yearlyOptions,
  outreachData,
  outreachConfig,
  chartData,
  colors,
  ops
}