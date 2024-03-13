const express = require("express");
const router = express.Router();
const pool = require("../dealerdashdb");

// http://localhost:4000/api/dealerships/:dealershipId/metrics
// Lists all the metrics definitions a dealership will use
router.get("/:dealershipId/metrics", async (req, res) => {
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

// http://localhost:4000/api/dealerships/metrics/:dealershipMetricId
// Gets a specific metric definition for a dealership by the dealership metric ID
router.get("/metrics/:dealershipMetricId", async (req, res) => {
  // Working
  try {
    const { dealershipMetricId } = req.params;

    const dealershipMetric = await pool.query(
      "SELECT * FROM DealershipMetrics WHERE DealershipMetricID = $1",
      [dealershipMetricId]
    );

    if (dealershipMetric.rows.length > 0) {
      res.json(dealershipMetric.rows[0]);
    } else {
      res.status(404).send("Dealership metric not found.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// http://localhost:4000/api/dealerships/:dealershipId/metrics
// Adds a metric definition to a dealership
router.post("/:dealershipId/metrics", async (req, res) => {
  try {
    const { dealershipId } = req.params;
    const { metricId, isActive } = req.body;

    const newDealershipMetric = await pool.query(
      "INSERT INTO DealershipMetrics (DealershipID, MetricID, IsActive) VALUES ($1, $2, $3) RETURNING *",
      [dealershipId, metricId, isActive]
    );

    res.json({
      message: "Dealership metric added successfully.",
      dealershipMetric: newDealershipMetric.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// http://localhost:4000/api/dealerships/:dealershipId/metrics/:dealershipMetricId
// Updates whether a metric definition is active for a dealership
router.put("/:dealershipId/metrics/:dealershipMetricId", async (req, res) => {
  try {
    const { dealershipMetricId } = req.params;
    const { isActive } = req.body;

    const updateDealershipMetric = await pool.query(
      "UPDATE DealershipMetrics SET IsActive = $1 WHERE DealershipMetricID = $2 RETURNING *",
      [isActive, dealershipMetricId]
    );

    if (updateDealershipMetric.rows.length > 0) {
      res.json({
        message: "Dealership metric updated successfully.",
        dealershipMetric: updateDealershipMetric.rows[0],
      });
    } else {
      res.status(404).send("Dealership metric not found.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
