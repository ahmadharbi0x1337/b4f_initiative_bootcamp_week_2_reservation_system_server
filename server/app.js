// IMPORTS
import express from "express";
import cors from "cors";
import serviceRouter from "./routes/services.routes.js";
import appointmentRouter from "./routes/appointments.routes.js";

// MIDDLEWARES
const app = express();
app.use(express.json());
app.use(
  cors({
    exposedHeaders: ["Content-Range", "X-Content-Range"],
  }),
);

// ROUTES
app.use("/services", serviceRouter);
app.use("/appointments", appointmentRouter);

export default app;
