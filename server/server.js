const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dealerdashdb");

//routes
const dealershipsRoutes = require("./routes/dealershipsRoutes");
const dealershipMetricsRoutes = require("./routes/dealershipMetricsRoutes");
const metricsDataRoutes = require("./routes/metricsDataRoutes");
const metricsDefinitionsRoutes = require("./routes/metricsDefinitionsRoutes");

//middleware
app.use(cors());
app.use(express.json());

app.listen(4000, () => {
  console.log("server started on port 4000");
});

app.use("/api/dealerships", dealershipsRoutes);
app.use("/api/dealerships", dealershipMetricsRoutes);
app.use("/api/metrics-data", metricsDataRoutes);
app.use("/api/metrics-definitions", metricsDefinitionsRoutes);

//ROUTES//
/*SECURITY TODO:
 * Input Validation
 * Authentication and Authorization: for posts (/api/dealerships)
 * ADD MORE SECURITY
 */

//POST TEST
app.post("/test", async (req, res) => {
  // WORKING
  try {
    const { description } = req.body;
    const newData = await pool.query(
      "INSERT INTO test (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newData.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//GET TEST
app.get("/test", async (req, res) => {
  // WORKING
  try {
    const allTestItems = await pool.query("SELECT * FROM test");
    res.json(allTestItems.rows);
  } catch (error) {
    console.error(error);
  }
});

//do i need a route to select * where dealership id = x and metricid = y (metricdef) update is active??
