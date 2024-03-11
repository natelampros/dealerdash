const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dealerdashdb");

//middleware
app.use(cors());
app.use(express.json());

app.listen(4000, () => {
  console.log("server started on port 4000");
});

//ROUTES//

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

//AddDealership
app.post("/api/dealerships", async (req, res) => {
  // WORKING
  try {
    // Extracting information from request body
    const { name, address, city, zip, state, contactInfo } = req.body;

    // Query to insert a new dealership into the database
    const newDealership = await pool.query(
      "INSERT INTO dealerships (name, address, city, zip, state, contactInfo) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, address, city, zip, state, contactInfo]
    );

    // Sending back the inserted dealership information as a response
    res.json(newDealership.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// GET
// http://localhost:4000/api/dealerships/{dealershipId}
// GetDealershipById
app.get("/api/dealerships/:dealershipId", async (req, res) => {
  // WORKING
  try {
    const { dealershipId } = req.params;
    const dealershipInfo = await pool.query(
      "SELECT * FROM dealerships WHERE dealershipId = $1",
      [dealershipId]
    );
    res.json(dealershipInfo.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// GET
// http://localhost:4000/api/dealerships
// GetAllDealerships
app.get("/api/dealerships", async (req, res) => {
  // WORKING
  try {
    const allDealerships = await pool.query("SELECT * FROM dealerships");
    res.json(allDealerships.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// POST
// http://localhost:4000/api/metrics-definitions
// AddMetricsDefinitions
app.post("/api/metrics-definitions", async (req, res) => {
  //WORKING
  try {
    const { metricName, category, subcategory, description, manualAdd } =
      req.body;
    const newMetricDefinition = await pool.query(
      "INSERT INTO MetricsDefinitions (metricName, category, subcategory, description, manualAdd) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [metricName, category, subcategory, description, manualAdd]
    );
    res.json(newMetricDefinition.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// POST
// http://localhost:4000/api/metrics-data
// AddMetricsData
app.post("/api/metrics-data", async (req, res) => {
  //WORKING WITH DEFINITION FIRST
  try {
    const {
      metricId,
      dealershipId,
      date,
      mtdValue,
      paceValue,
      projectionValue,
      actualValue,
      variance,
    } = req.body;
    const newMetricData = await pool.query(
      "INSERT INTO metricsData (metricId, dealershipId, date, mtdValue, paceValue, projectionValue, actualValue, variance) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        metricId,
        dealershipId,
        date,
        mtdValue,
        paceValue,
        projectionValue,
        actualValue,
        variance,
      ]
    );
    res.json(newMetricData.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// GET
// http://localhost:4000/api/dealerships/{:dealershipId}/metrics
// ListDealershipMetrics
app.get("/api/dealerships/:dealershipId/metrics", async (req, res) => {
  //WORKING
  try {
    const { dealershipId } = req.params;
    const metricsList = await pool.query(
      `SELECT dm.metricId, m.metricName, m.category, dm.isActive 
      FROM dealershipMetrics dm 
      JOIN metricsDefinitions m ON dm.metricId = m.metricId 
      WHERE dealershipId = $1 AND dm.isActive = true`,
      [dealershipId]
    );
    res.json(metricsList.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// GET
// http://localhost:4000/api/dealerships/1/metrics/daily?date=2023-03-10
// GetDealershipMetricsByDate
app.get("/api/dealerships/:dealershipId/metrics/daily", async (req, res) => {
  try {
    const { dealershipId } = req.params;
    const { date } = req.query; // Use the date query parameter directly

    if (date) {
      // Retrieve all metric data entries for the specified date
      const dailyMetricsData = await pool.query(
        "SELECT * FROM metricsData WHERE dealershipId = $1 AND date::date = $2::date",
        [dealershipId, date] // Use the date directly without conversion
      );

      if (dailyMetricsData.rows.length > 0) {
        res.json(dailyMetricsData.rows);
      } else {
        res
          .status(404)
          .send("No metrics data found for the specified dealership and date.");
      }
    } else {
      // If no date is provided, find and use the most recent date
      const mostRecentDateQuery = await pool.query(
        "SELECT MAX(date) as recentDate FROM metricsData WHERE dealershipId = $1",
        [dealershipId]
      );
      const queryDate = mostRecentDateQuery.rows[0].recentdate;

      if (queryDate) {
        const dailyMetricsData = await pool.query(
          "SELECT * FROM metricsData WHERE dealershipId = $1 AND date::date = $2::date",
          [dealershipId, queryDate]
        );
        res.json(dailyMetricsData.rows);
      } else {
        res
          .status(404)
          .send("No metrics data found for the specified dealership.");
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// DELETE
// http://localhost:4000/api/metrics-data/{metricDataId}
// DeleteMetricDataById
app.delete("/api/metrics-data/:dataId", async (req, res) => {
  // WORKING
  try {
    const { dataId } = req.params;
    const deleteMetricsData = await pool.query(
      "DELETE FROM MetricsData WHERE dataId = $1 RETURNING *",
      [dataId]
    );
    if (deleteMetricsData.rowCount > 0) {
      res.json({ message: "Metrics data deleted successfully." });
    } else {
      res.status(404).send("Metrics data not found.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// DELETE
// http://localhost:4000/api/metrics-definitions/{metricDefinitionId}
// DeleteMetricDefitionsById
app.delete("/api/metrics-definitions/:metricId", async (req, res) => {
  // WORKING
  try {
    const { metricId } = req.params;
    const deleteMetricDefinition = await pool.query(
      "DELETE FROM MetricsDefinitions WHERE metricId = $1 RETURNING *",
      [metricId]
    );
    if (deleteMetricDefinition.rowCount > 0) {
      res.json({ message: "Metric definition deleted successfully." });
    } else {
      res.status(404).send("Metric definition not found.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
