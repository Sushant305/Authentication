// this line is use for the import the express module
const express = require("express");
// importing the env
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const workOutRoutes = require("./routes/workout");

dotenv.config();

// Express app
const app = express();

// middleware
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes (http://localhost:4000/)
app.get("/", (req, res) => {
  res.status(200).json({
    messgae: "Welcome to the application",
  });
});

// port no.
const PORT = process.env.PORT || 4000;


app.use("/api/workouts/", workOutRoutes);

// connect to the database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listen for the requests
    app.listen(PORT, () => {
      console.log(
        `Server is up and listening on port : http://localhost:${PORT} & connected to our database`,
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });



