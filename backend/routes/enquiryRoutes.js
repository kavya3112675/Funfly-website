const express = require("express");
const router = express.Router();

const {
  createEnquiry,
  getEnquiries,
  updateEnquiryStatus,
} = require("../controllers/enquiryController");

const protectAdmin = require("../middleware/authMiddleware");

// Public route - Customer enquiry submit
router.post("/", createEnquiry);

// Admin protected routes
router.get("/", protectAdmin, getEnquiries);
router.put("/:id/status", protectAdmin, updateEnquiryStatus);

module.exports = router;