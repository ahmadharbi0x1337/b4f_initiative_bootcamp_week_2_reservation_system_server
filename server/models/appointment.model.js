import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  date: {
    type: String,
    required: true, // expects a formatted string as "YYYY-MM-DD"
  },
  time: {
    type: String,
    required: true, // expects a formatted string as "HH:mm"
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
