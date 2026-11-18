const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/enquiries", enquiryRoutes);

// Test API
app.get("/", (req, res) => {
  res.send("FunFly Holidays Backend is Running!");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`FunFly Holidays server running on port ${PORT}`);
  });
};

startServer();