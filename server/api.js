//this is for me to keep track of API routes

// Get Daily Metrics Data
app.get("/api/dealerships/:dealershipId/metrics/daily", async (req, res) => {
  try {
    const { dealershipId } = req.params;
    const metricsData = await pool.query(
      "SELECT * FROM metrics_data WHERE dealershipid = $1 ORDER BY date DESC", // Assuming you want the latest data
      [dealershipId]
    );
    res.json(metricsData.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Add Daily Metrics Data
app.post("/api/dealerships/:dealershipId/metrics/daily", async (req, res) => {
  try {
    const { dealershipId } = req.params;
    const {
      metricId,
      mtdValue,
      paceValue,
      projectionValue,
      actualValue,
      variance,
    } = req.body;
    const newMetricData = await pool.query(
      "INSERT INTO metrics_data (metricid, dealershipid, mtdvalue, pacevalue, projectionvalue, actualvalue, variance) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        metricId,
        dealershipId,
        mtdValue,
        paceValue,
        projectionValue,
        actualValue,
        variance,
      ]
    );
    res.json({
      message: "Data added successfully",
      data: newMetricData.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Update Daily Metrics Data
app.put(
  "/api/dealerships/:dealershipId/metrics/daily/:dataId",
  async (req, res) => {
    try {
      const { dataId } = req.params;
      const { mtdValue, paceValue, projectionValue, actualValue, variance } =
        req.body;
      const updateMetricData = await pool.query(
        "UPDATE metrics_data SET mtdvalue = $1, pacevalue = $2, projectionvalue = $3, actualvalue = $4, variance = $5 WHERE dataid = $6 RETURNING *",
        [mtdValue, paceValue, projectionValue, actualValue, variance, dataId]
      );
      res.json({
        message: "Data updated successfully",
        data: updateMetricData.rows[0],
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// Get Monthly Metrics Summary
app.get(
  "/api/dealerships/:dealershipId/metrics/monthly-summary",
  async (req, res) => {
    try {
      const { dealershipId } = req.params;
      // This assumes you have a way to calculate the aggregated values for the current month
      const monthlySummary = await pool.query(
        "SELECT metricid, SUM(mtdvalue) AS mtdvalue, SUM(pacevalue) AS pacevalue, SUM(projectionvalue) AS projectionvalue, SUM(actualvalue) AS actualvalue, SUM(variance) AS variance FROM metrics_data WHERE dealershipid = $1 AND date >= DATE_TRUNC('month', CURRENT_DATE) GROUP BY metricid",
        [dealershipId]
      );
      res.json(monthlySummary.rows);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// Get Metrics Definition
app.get("/api/metrics-definitions", async (req, res) => {
  try {
    const metricsDefinitions = await pool.query(
      "SELECT * FROM metrics_definitions"
    );
    res.json(metricsDefinitions.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
