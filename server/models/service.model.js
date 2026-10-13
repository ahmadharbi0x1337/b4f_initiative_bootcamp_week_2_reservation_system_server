import mongoose from "mongoose";
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  price: { type: Number, required: true }, // in dollars
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
