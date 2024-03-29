export const metricsDefinitions = [
  {
    MetricID: 1,
    MetricName: "Total Number Sales Reps",
    Category: "Productivity",
    Subcategory: "Sales Reps",
    Description: "Total number of sales professionals",
    ManualAdd: true,
  },
  {
    MetricID: 2,
    MetricName: "Number Sales Reps Working",
    Category: "Productivity",
    Subcategory: "Sales Reps",
    Description: "Reps working today",
    ManualAdd: true,
  },
  {
    MetricID: 3,
    MetricName: "Outbound Calls",
    Category: "Productivity",
    Subcategory: "Outbound",
    Description: "OB calls made",
    ManualAdd: true,
  },
  {
    MetricID: 4,
    MetricName: "Outbound Emails",
    Category: "Productivity",
    Subcategory: "Outbound",
    Description: "OB sent emails",
    ManualAdd: true,
  },
  {
    MetricID: 5,
    MetricName: "Outbound Texts",
    Category: "Productivity",
    Subcategory: "Outbound",
    Description: "OB sent texts",
    ManualAdd: true,
  },
  {
    MetricID: 6,
    MetricName: "Outbound Videos",
    Category: "Productivity",
    Subcategory: "Outbound",
    Description: "OB videos sent",
    ManualAdd: true,
  },
  {
    MetricID: 7,
    MetricName: "Appointments Set",
    Category: "Productivity",
    Subcategory: "Appointments",
    Description: "# Apts set",
    ManualAdd: true,
  },
  {
    MetricID: 8,
    MetricName: "Appointments Shown",
    Category: "Productivity",
    Subcategory: "Appointments",
    Description: "# Apts shown",
    ManualAdd: true,
  },
  {
    // calculated by all outbound activity divided by appointments shown
    MetricID: 9,
    MetricName: "Moneyball Number",
    Category: "Productivity",
    Subcategory: "",
    Description: "Number related to sales probability",
    ManualAdd: false,
  },
  {
    MetricID: 10,
    MetricName: "Inbound Phone",
    Category: "Productivity",
    Subcategory: "Inbound",
    Description: "IB phone recieved",
    ManualAdd: true,
  },
  {
    MetricID: 11,
    MetricName: "Inbound E-Comm",
    Category: "Productivity",
    Subcategory: "Inbound",
    Description: "E-commerce leads recieved",
    ManualAdd: true,
  },
  {
    MetricID: 12,
    MetricName: "Inbound Walk-Ins",
    Category: "Productivity",
    Subcategory: "Inbound",
    Description: "# Walk-in customers",
    ManualAdd: true,
  },
  {
    MetricID: 13,
    MetricName: "Write-Ups",
    Category: "Productivity",
    Subcategory: "Deals",
    Description: "# Written sales agreements",
    ManualAdd: true,
  },
  {
    MetricID: 14,
    MetricName: "Deposits Taken",
    Category: "Productivity",
    Subcategory: "Deals",
    Description: "# Deposits taken",
    ManualAdd: true,
  },
  {
    MetricID: 15,
    MetricName: "Units Sold",
    Category: "Productivity",
    Subcategory: "Deals",
    Description: "# Units delivered",
    ManualAdd: true,
  },
  {
    //calculated by number of Units Sold divided by (Deposits Taken + Write-Ups + Inbound Walk-Ins)
    MetricID: 16,
    MetricName: "Close Rate",
    Category: "Productivity",
    Subcategory: "DO NOT DISPLAY",
    Description: "Closing rate percentage",
    ManualAdd: false,
  },
  // Financial Metrics
  {
    MetricID: 17,
    MetricName: "Sales Gross",
    Category: "Financial",
    Description: "Total sales gross",
    Subcategory: "Gross",
    ManualAdd: true,
  },
  {
    MetricID: 18,
    MetricName: "F&I Gross",
    Category: "Financial",
    Subcategory: "Gross",
    Description: "Finance and insurance gross",
    ManualAdd: true,
  },
  {
    MetricID: 19,
    MetricName: "Total Gross",
    Category: "Financial",
    Subcategory: "Gross",
    Description: "Total gross revenue",
    ManualAdd: true,
  },
  {
    MetricID: 20,
    MetricName: "Total Sales",
    Category: "Financial",
    Subcategory: "Sales",
    Description: "Total number of sales",
    ManualAdd: true,
  },
  {
    MetricID: 21,
    MetricName: "Gross Percentage",
    Category: "Financial",
    Subcategory: "Gross",
    Description: "Gross as a percentage of sales",
    ManualAdd: true,
  },
  {
    MetricID: 22,
    MetricName: "Sales PVR",
    Category: "Financial",
    Subcategory: "PVR",
    Description: "Profit per vehicle retailed in sales",
    ManualAdd: true,
  },
  {
    MetricID: 23,
    MetricName: "F&I PVR",
    Category: "Financial",
    Subcategory: "PVR",
    Description: "Profit per vehicle retailed in finance and insurance",
    ManualAdd: true,
  },
  {
    MetricID: 24,
    MetricName: "Total PVR",
    Category: "Financial",
    Subcategory: "PVR",
    Description: "Total profit per vehicle retailed",
    ManualAdd: true,
  },
  //SALES LEADERSHIP
  {
    MetricID: 25,
    MetricName: "Units Sold",
    Category: "Sales Leadership",
    Subcategory: "Manager #1",
    Description: "Managerial unit metrics",
    ManualAdd: true,
  },
  {
    MetricID: 26,
    MetricName: "Sales Gross",
    Category: "Sales Leadership",
    Subcategory: "Manager #1",
    Description: "Managerial variable sales gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 27,
    MetricName: "F&I Gross",
    Category: "Sales Leadership",
    Subcategory: "Manager #1",
    Description: "Managerial variable finance gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 28,
    MetricName: "Total Gross",
    Category: "Sales Leadership",
    Subcategory: "Manager #1",
    Description: "Total gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 29,
    MetricName: "Sales PVR",
    Category: "Sales Leadership",
    Subcategory: "Manager #1",
    Description: "Sales per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 30,
    MetricName: "F%I PVR",
    Category: "Sales Leadership",
    Subcategory: "Manager #1",
    Description: "Finance per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 31,
    MetricName: "Total. PVR",
    Category: "Sales Leadership",
    Subcategory: "Manager #1",
    Description: "Total per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 32,
    MetricName: "Units Sold",
    Category: "Sales Leadership",
    Subcategory: "Manager #2",
    Description: "Managerial unit metrics",
    ManualAdd: true,
  },
  {
    MetricID: 33,
    MetricName: "Sales Gross",
    Category: "Sales Leadership",
    Subcategory: "Manager #2",
    Description: "Managerial variable sales gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 34,
    MetricName: "F&I Gross",
    Category: "Sales Leadership",
    Subcategory: "Manager #2",
    Description: "Managerial variable finance gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 35,
    MetricName: "Total Gross",
    Category: "Sales Leadership",
    Subcategory: "Manager #2",
    Description: "Total gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 36,
    MetricName: "Sales PVR",
    Category: "Sales Leadership",
    Subcategory: "Manager #2",
    Description: "Sales per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 37,
    MetricName: "F%I PVR",
    Category: "Sales Leadership",
    Subcategory: "Manager #2",
    Description: "Finance per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 38,
    MetricName: "Total. PVR",
    Category: "Sales Leadership",
    Subcategory: "Manager #2",
    Description: "Total per visit ratio",
    ManualAdd: true,
  },

  //F&I Leadership
  {
    MetricID: 39,
    MetricName: "Units Sold",
    Category: "F&I Leadership",
    Subcategory: "Manager #1",
    Description: "Managerial unit metrics",
    ManualAdd: true,
  },
  {
    MetricID: 40,
    MetricName: "Sales Gross",
    Category: "F&I Leadership",
    Subcategory: "Manager #1",
    Description: "Managerial variable sales gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 41,
    MetricName: "F&I Gross",
    Category: "F&I Leadership",
    Subcategory: "Manager #1",
    Description: "Managerial variable finance gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 42,
    MetricName: "Total Gross",
    Category: "F&I Leadership",
    Subcategory: "Manager #1",
    Description: "Total gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 43,
    MetricName: "Sales PVR",
    Category: "F&I Leadership",
    Subcategory: "Manager #1",
    Description: "Sales per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 44,
    MetricName: "F%I PVR",
    Category: "F&I Leadership",
    Subcategory: "Manager #1",
    Description: "Finance per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 45,
    MetricName: "Total. PVR",
    Category: "F&I Leadership",
    Subcategory: "Manager #1",
    Description: "Total per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 46,
    MetricName: "Units Sold",
    Category: "F&I Leadership",
    Subcategory: "Manager #2",
    Description: "Managerial unit metrics",
    ManualAdd: true,
  },
  {
    MetricID: 47,
    MetricName: "Sales Gross",
    Category: "F&I Leadership",
    Subcategory: "Manager #2",
    Description: "Managerial variable sales gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 48,
    MetricName: "F&I Gross",
    Category: "F&I Leadership",
    Subcategory: "Manager #2",
    Description: "Managerial variable finance gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 49,
    MetricName: "Total Gross",
    Category: "F&I Leadership",
    Subcategory: "Manager #2",
    Description: "Total gross metrics",
    ManualAdd: true,
  },
  {
    MetricID: 50,
    MetricName: "Sales PVR",
    Category: "F&I Leadership",
    Subcategory: "Manager #2",
    Description: "Sales per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 51,
    MetricName: "F%I PVR",
    Category: "F&I Leadership",
    Subcategory: "Manager #2",
    Description: "Finance per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 52,
    MetricName: "Total. PVR",
    Category: "F&I Leadership",
    Subcategory: "Manager #2",
    Description: "Total per visit ratio",
    ManualAdd: true,
  },
  {
    MetricID: 53,
    MetricName: "Total. PVR",
    Category: "F&I Leadership",
    Subcategory: "Manager #2",
    Description: "Total per visit ratio",
    ManualAdd: true,
  },

  //Recievables

  {
    MetricID: 54,
    MetricName: "CIT",
    Category: "Receivables",
    Subcategory: "Deals",
    Description: "Tot $ not Financed",
    ManualAdd: true,
  },
  {
    MetricID: 55,
    MetricName: "# OF DEALS",
    Category: "Receivables",
    Subcategory: "Deals",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 56,
    MetricName: "AVG. CIT",
    Category: "Receivables",
    Subcategory: "Deals",
    Description: "Avg $ per deal",
    ManualAdd: true,
  },
  {
    MetricID: 57,
    MetricName: "AVG DAYS",
    Category: "Receivables",
    Subcategory: "Deals",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 58,
    MetricName: "CHARGE BACKS",
    Category: "Receivables",
    Subcategory: "Adjusments",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 59,
    MetricName: "GROSS Adjusments",
    Category: "Receivables",
    Subcategory: "Adjusments",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 60,
    MetricName: "Total Vehicles",
    Category: "Receivables",
    Subcategory: "Inventory",
    Description: "Vehicles in Inventory",
    ManualAdd: true,
  },
  {
    MetricID: 61,
    MetricName: "BAD DEBT.",
    Category: "Receivables",
    Subcategory: "Money Out",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 62,
    MetricName: "REBATES",
    Category: "Receivables",
    Subcategory: "Money Out",
    Description: "",
    ManualAdd: true,
  },

  //Fixed Operations
  {
    MetricID: 63,
    MetricName: "SVC GROSS",
    Category: "Fixed Operations",
    Subcategory: "Gross",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 64,
    MetricName: "PARTS GROSS",
    Category: "Fixed Operations",
    Subcategory: "Gross",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 65,
    MetricName: "TOTAL GROSS",
    Category: "Fixed Operations",
    Subcategory: "Gross",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 66,
    MetricName: "TOT. SVC RO",
    Category: "Fixed Operations",
    Subcategory: "RO",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 67,
    MetricName: "HRS SOLD",
    Category: "Fixed Operations",
    Subcategory: "RO",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 68,
    MetricName: "HRS PER RO",
    Category: "Fixed Operations",
    Subcategory: "RO",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 69,
    MetricName: "LABOR SOLD",
    Category: "Fixed Operations",
    Subcategory: "Labor",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 70,
    MetricName: "EFF. LABOR RATE",
    Category: "Fixed Operations",
    Subcategory: "Labor",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 71,
    MetricName: "DOOR RATE",
    Category: "Fixed Operations",
    Subcategory: "Labor",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 72,
    MetricName: "VARIANCE",
    Category: "Fixed Operations",
    Subcategory: "",
    Description: "",
    ManualAdd: false,
  },
  {
    MetricID: 73,
    MetricName: "RO OVER 90DY",
    Category: "Fixed Receivables",
    Subcategory: "Missing $",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 74,
    MetricName: "BAD DEBT.",
    Category: "Fixed Receivables",
    Subcategory: "Missing $",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 75,
    MetricName: "POLICY",
    Category: "Fixed Receivables",
    Subcategory: "Missing $",
    Description: "",
    ManualAdd: true,
  },
  {
    MetricID: 76,
    MetricName: "DISCOUNTS",
    Category: "Fixed Receivables",
    Subcategory: "Missing $",
    Description: "",
    ManualAdd: true,
  },
];

// Mock data for DealershipMetrics Table
export const dealershipMetrics = [
  { DealershipMetricID: 1, DealershipID: 100, MetricID: 1, IsActive: true },
  { DealershipMetricID: 2, DealershipID: 100, MetricID: 2, IsActive: true },
  { DealershipMetricID: 3, DealershipID: 100, MetricID: 3, IsActive: true },
  { DealershipMetricID: 4, DealershipID: 100, MetricID: 4, IsActive: true },
  { DealershipMetricID: 5, DealershipID: 100, MetricID: 5, IsActive: true },
  { DealershipMetricID: 6, DealershipID: 100, MetricID: 6, IsActive: true },
  { DealershipMetricID: 7, DealershipID: 100, MetricID: 7, IsActive: true },
  { DealershipMetricID: 8, DealershipID: 100, MetricID: 8, IsActive: true },
  { DealershipMetricID: 9, DealershipID: 100, MetricID: 9, IsActive: true },
  { DealershipMetricID: 10, DealershipID: 100, MetricID: 10, IsActive: true },
  { DealershipMetricID: 11, DealershipID: 100, MetricID: 11, IsActive: true },
  { DealershipMetricID: 12, DealershipID: 100, MetricID: 12, IsActive: true },
  { DealershipMetricID: 13, DealershipID: 100, MetricID: 13, IsActive: true },
  { DealershipMetricID: 14, DealershipID: 100, MetricID: 14, IsActive: true },
  { DealershipMetricID: 15, DealershipID: 100, MetricID: 15, IsActive: true },
  { DealershipMetricID: 16, DealershipID: 100, MetricID: 16, IsActive: true },
  // Financial Metrics
  { DealershipMetricID: 17, DealershipID: 100, MetricID: 17, IsActive: true },
  { DealershipMetricID: 18, DealershipID: 100, MetricID: 18, IsActive: true },
  { DealershipMetricID: 19, DealershipID: 100, MetricID: 19, IsActive: true },
  { DealershipMetricID: 20, DealershipID: 100, MetricID: 20, IsActive: true },
  { DealershipMetricID: 21, DealershipID: 100, MetricID: 21, IsActive: true },
  { DealershipMetricID: 22, DealershipID: 100, MetricID: 22, IsActive: true },
  { DealershipMetricID: 23, DealershipID: 100, MetricID: 23, IsActive: true },
  { DealershipMetricID: 24, DealershipID: 100, MetricID: 24, IsActive: true },
];
