import { Router } from "express";
import {
  getAppointmentsController,
  getAppointmentByIdController,
  createAppointmentController,
  deleteOneAppointmentController,
  updateOneAppointmentController,
} from "../controllers/appointment.controller.js";
const appointmentRouter = Router();

appointmentRouter.get("/", getAppointmentsController);
appointmentRouter.get("/:id", getAppointmentByIdController);
appointmentRouter.post("/", createAppointmentController);
appointmentRouter.delete("/:id", deleteOneAppointmentController);
appointmentRouter.patch("/:id", updateOneAppointmentController);

export default appointmentRouter;
