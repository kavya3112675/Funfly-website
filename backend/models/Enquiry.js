const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      trim: true,
    },

    packageName: {
      type: String,
      trim: true,
    },

    travelDate: {
      type: String,
    },

    travelers: {
      type: Number,
      default: 1,
    },

    message: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Contacted", "Completed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Enquiry", enquirySchema);