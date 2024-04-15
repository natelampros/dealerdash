import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GridViewIcon from "@mui/icons-material/GridView";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";

export const dashboardData = {
  pace: 955900,
  goal: 950000,
  salegoal: 200,
  actual: 207,
  isActual: true,
};

const notifications = [
  {
    key: "1",
    icon: (
      <ReceiptLongIcon
        style={{
          backgroundColor: "#131523",
          color: "#8B8C8F",
          padding: "8px",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
        }}
      />
    ),
    title: "CIT",
    description: "Collected money from the Collins deal!",
    cost: 2030,
  },
  {
    key: "2",
    icon: (
      <PaidOutlinedIcon
        style={{
          backgroundColor: "#131523",
          color: "#8B8C8F",
          padding: "8px",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
        }}
      />
    ),
    title: "Bad Money Alert",
    description: "Bad check from the Jeffery's deal",
    cost: -1850,
  },
  {
    key: "3",
    icon: (
      <ReceiptLongIcon
        style={{
          backgroundColor: "#131523",
          color: "#8B8C8F",
          padding: "8px",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
        }}
      />
    ),
    title: "CIT",
    description: "Brief notification description of CIT and its cost",
    cost: -1850,
  },
  {
    key: "4",
    icon: (
      <ReceiptLongIcon
        style={{
          backgroundColor: "#131523",
          color: "#8B8C8F",
          padding: "8px",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
        }}
      />
    ),
    title: "CIT",
    description: "Brief notification description of CIT and its cost",
    cost: 2000,
  },
];

const colors = [{ purple: "#464DC2" }];

const salesproData = [
  { key: "1", name: "Alex Johnson", actual: "22", goal: "22" },
  { key: "2", name: "Sam Smith", actual: "15", goal: "25" },
  { key: "3", name: "Emily Davis", actual: "19", goal: "18" },
  { key: "4", name: "Jordan Brown", actual: "22", goal: "22" },
  { key: "5", name: "Casey Lee", actual: "16", goal: "18" },
  { key: "6", name: "Taylor Morgan", actual: "25", goal: "25" },
];

const srvcPartsData = [
  { key: "1", name: "Casey Jordan", actual: "24", goal: "22" },
  { key: "2", name: "Jamie White", actual: "25", goal: "25" },
  { key: "3", name: "Jay Hopkins", actual: "16", goal: "18" },
  { key: "4", name: "Morgan Kim", actual: "22", goal: "22" },
  { key: "5", name: "Riley Brooks", actual: "26", goal: "25" },
];

const salesFinData = [
  { key: "1", name: "John Davis", actual: "23", goal: "22" },
  { key: "2", name: "Steve Lacy", actual: "24", goal: "25" },
  { key: "3", name: "Jordan Lee", actual: "16", goal: "18" },
  { key: "4", name: "Chris Parker", actual: "22", goal: "22" },
  { key: "5", name: "Sasm Kelley", actual: "26", goal: "25" },
];

const fixedopData = [
  { key: "1", name: "Service Gross", actual: 125340, goal: 120000 },
  { key: "2", name: "Parts Gross", actual: 120030, goal: 120000 },
  { key: "3", name: "Total RO", actual: 1260, goal: 1250 },
  { key: "4", name: "Total Hours", actual: 1234, goal: 1250 },
  { key: "5", name: "Hours Per RO", actual: 26, goal: 25 },
];

const options = [
  { label: "1", value: "TOTAL" },
  { label: "2", value: "GROSS" },
  { label: "3", value: "NET" },
];

const outreachOptions = [{ label: "1", value: "TOTAL" }];

const salesFinOptions = [{ label: "1", value: "UNITS SOLD" }];

const salesproOptions = [{ label: "1", value: "CARS SOLD" }];

const yearlyOptions = [
  { label: "1", value: "GROSS" },
  { label: "2", value: "NET" },
];

const outreachData = {
  labels: ["Blue", "Green", "Pink", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 50],
      backgroundColor: ["#4249B3", "#5DA95E", "#A856B4", "#E1B752"],
      borderColor: ["#4249B3", "#5DA95E", "#A856B4", "#E1B752"],
      borderRadius: 50,
      cutout: 95,
      hoverOffset: 4,
    },
  ],
};

const outreachConfig = {
  options: {
    aspectRatio: 0.7,
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
  },
  title: {
    display: true,
    text: "",
    color: "white",
    font: {
      size: 20,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "right",
      align: "start",
      labels: {
        usePointStyle: "true",
        boxWidth: 20,
        padding: 12,
      },
    },
  },
};

const chartData = {
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "Actual",
      data: [900, 1000, 500, 300, 800, 700, 200, 500, 800, 400, 900, 700],
      backgroundColor: "#464DC2",
      borderColor: "",
      borderWidth: 1,
      borderRadius: 25,
      pointStyle: "circle",
    },
    {
      label: "Goal",
      data: [800, 1000, 700, 200, 900, 900, 300, 300, 600, 500, 800, 700],
      backgroundColor: "#B75CC3",
      borderColor: "",
      borderWidth: 1,
      borderRadius: 50,
    },
  ],
};

const ops = {
  plugins: {
    legend: {
      display: true,
      position: "top",
      align: "start",
      labels: {
        usePointStyle: "true",
        boxWidth: 20,
        padding: 12,
      },
    },
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

const sidebarUpperMenuList = [
  {
    title: "Dashboard",
    icon: <GridViewIcon />,
  },
  {
    title: "Daily",
    icon: <CalendarMonthIcon />,
  },
  {
    title: "Report",
    icon: <ContentPasteOutlinedIcon />,
  },
  {
    title: "History",
    icon: <ContentCopyOutlinedIcon />,
  },
];

const sidebarLowerMenuList = [
  {
    title: "Settings",
    icon: <SettingsIcon />,
  },
  {
    title: "Notifications",
    icon: <NotificationsNoneIcon />,
  },
  {
    title: "Sign Out",
    icon: <LogoutIcon />,
  },
];

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
  ops,
  sidebarLowerMenuList,
  sidebarUpperMenuList,
};
