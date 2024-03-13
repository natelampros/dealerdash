const express = require("express");
const router = express.Router();
const pool = require("../dealerdashdb");

// GetMetricsDataById - Fetches a specific metrics data record by its ID
// http://localhost:4000/api/metrics-data/:dataId
router.get("/:dataId", async (req, res) => {
  try {
    const { dataId } = req.params;

    const metricData = await pool.query(
      "SELECT * FROM metricsData WHERE dataId = $1",
      [dataId]
    );

    if (metricData.rows.length > 0) {
      res.json(metricData.rows[0]);
    } else {
      res.status(404).send("Metrics data not found.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// GetDealershipMetricDataByDate - Gets the actual data if a date is provided or defaults to the most recent day
// http://localhost:4000/api/metrics-data/dealerships/:dealershipId/daily?date=2024-03-10
router.get("/dealerships/:dealershipId/daily", async (req, res) => {
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

// AddMetricsData - Adds the actual numbers with a foreign key to the associated metric def
// http://localhost:4000/api/metrics-data
router.post("/", async (req, res) => {
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

// UpdateMetricsData - Updates the actual data
// http://localhost:4000/api/metrics-data/:dataId
router.put("/:dataId", async (req, res) => {
  // WORKING
  try {
    const { dataId } = req.params;
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

    const updateMetricData = await pool.query(
      "UPDATE metricsData SET metricId = $1, dealershipId = $2, date = $3, mtdValue = $4, paceValue = $5, projectionValue = $6, actualValue = $7, variance = $8 WHERE dataId = $9 RETURNING *",
      [
        metricId,
        dealershipId,
        date,
        mtdValue,
        paceValue,
        projectionValue,
        actualValue,
        variance,
        dataId,
      ]
    );

    if (updateMetricData.rows.length > 0) {
      res.json(updateMetricData.rows[0]);
    } else {
      res.status(404).send("Metrics data not found.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// DeleteMetricDataById - Deletes the actual data
// http://localhost:4000/api/metrics-data/:dataId
router.delete("/:dataId", async (req, res) => {
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

module.exports = router;
