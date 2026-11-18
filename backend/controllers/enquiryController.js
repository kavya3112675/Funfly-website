const Enquiry = require("../models/Enquiry");

// Create New Enquiry
const createEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);

    res.status(201).json({
      message: "Enquiry submitted successfully!",
      enquiry,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Get All Enquiries
const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({
      createdAt: -1,
    });

    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch enquiries",
    });
  }
};

// Update Enquiry Status
const updateEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Pending", "Contacted", "Completed"].includes(status)) {
      return res.status(400).json({
        message: "Invalid enquiry status",
      });
    }

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      message: "Enquiry status updated!",
      enquiry,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update enquiry",
    });
  }
};

module.exports = {
  createEnquiry,
  getEnquiries,
  updateEnquiryStatus,
};