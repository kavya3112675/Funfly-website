const express = require("express");
const router = express.Router();

const { loginAdmin } = require("../controllers/adminController");
const protectAdmin = require("../middleware/authMiddleware");

router.post("/login", loginAdmin);

// Protected Dashboard API
router.get("/dashboard", protectAdmin, (req, res) => {
  res.status(200).json({
    message: "Welcome to FunFly Holidays Admin Dashboard!",
    admin: req.admin,
  });
});

module.exports = router;