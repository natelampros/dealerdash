const express = require("express");
const router = express.Router();
const pool = require("../dealerdashdb");

// Gets all metric definitions
// GET http://localhost:4000/api/metrics-definitions
router.get("/", async (req, res) => {
  try {
    const allMetricDefinitions = await pool.query(
      "SELECT * FROM MetricsDefinitions"
    );
    res.json(allMetricDefinitions.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Adds a new metric definition
// POST http://localhost:4000/api/metrics-definitions
router.post("/", async (req, res) => {
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

// Updates an existing metric definition by ID
// PUT http://localhost:4000/api/metrics-definitions/:metricId
router.put("/:metricId", async (req, res) => {
  try {
    const { metricId } = req.params;
    const { metricName, category, subcategory, description, manualAdd } =
      req.body;

    const updateMetricDefinition = await pool.query(
      "UPDATE MetricsDefinitions SET metricName = $1, category = $2, subcategory = $3, description = $4, manualAdd = $5 WHERE metricId = $6 RETURNING *",
      [metricName, category, subcategory, description, manualAdd, metricId]
    );

    if (updateMetricDefinition.rows.length > 0) {
      res.json(updateMetricDefinition.rows[0]);
    } else {
      res.status(404).send("Metric definition not found.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Deletes a metric definition by ID
// DELETE http://localhost:4000/api/metrics-definitions/:metricId
router.delete("/:metricId", async (req, res) => {
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

module.exports = router;
