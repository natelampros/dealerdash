const express = require('express');
const app = express();
const cors = require('cors'); 
const pool = require("./dealerdashdb");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//POST TEST
app.post("/test", async (req, res) => {
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
app.get("/test", async(req, res) =>{
    try {
        const allTestItems = await pool.query("SELECT * FROM test");
        res.json(allTestItems.rows);
    } catch (error) {
        console.error(error);
    }
});

app.listen(4000, () => {
  console.log("server started on port 4000");
});
