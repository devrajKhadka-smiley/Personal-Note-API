// 

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const logger = require("./middleware/logger"); // Import logging middleware
const validateNote = require("./middleware/validateNote"); // Import validation middleware

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(logger);

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}/`);
});
