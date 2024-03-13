const express = require("express");
const router = express.Router();
const pool = require("../dealerdashdb");

//AddDealership
router.post("/", async (req, res) => {
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

//PUT
//
//UpdateDealership
router.put("/:dealershipId", async (req, res) => {
  try {
    const { dealershipId } = req.params;
    const { name, address, city, zip, state, contactInfo } = req.body;

    const updateDealership = await pool.query(
      "UPDATE dealerships SET name = $1, address = $2, city = $3, zip = $4, state = $5, contactInfo = $6 WHERE dealershipId = $7 RETURNING *",
      [name, address, city, zip, state, contactInfo, dealershipId]
    );

    if (updateDealership.rows.length > 0) {
      res.json(updateDealership.rows[0]);
    } else {
      res.status(404).send("Dealership not found.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// GET
// http://localhost:4000/api/dealerships/{dealershipId}
// GetDealershipById
router.get("/:dealershipId", async (req, res) => {
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
router.get("/", async (req, res) => {
  // WORKING
  try {
    const allDealerships = await pool.query("SELECT * FROM dealerships");
    res.json(allDealerships.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
