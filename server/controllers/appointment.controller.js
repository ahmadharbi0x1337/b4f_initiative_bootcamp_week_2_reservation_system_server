import Appointment from "../models/appointment.model.js";
import Service from "../models/service.model.js";

const timeToMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split(":").map((t) => Number(t));
  return hours * 60 + minutes;
};

export const getAppointmentsController = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getAppointmentByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createAppointmentController = async (req, res) => {
  try {
    const { serviceId, date, time } = req.body;

    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    const newStart = timeToMinutes(time);
    const newDuration = service.duration;
    const newEnd = newStart + newDuration;

    const existingAppointments = await Appointment.find({ serviceId, date });

    for (const existingAppointment of existingAppointments) {
      const existingStart = timeToMinutes(existingAppointment.time);
      const existingEnd = existingStart + service.duration;

      const isTooCloseOrOverlapping =
        newStart < existingEnd + 60 && newEnd > existingStart - 60;

      if (isTooCloseOrOverlapping) {
        return res.status(404).json({
          message:
            "an Appointment Conflict For Same Services Exist, can't create appointment",
        });
      }
    }

    const newAppointment = await Appointment.create(req.body);
    return res.status(200).json(newAppointment);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateOneAppointmentController = async (req, res) => {
  try {
    const id = req.params.id;
    const tmp = req.body;
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, tmp, {
      new: true,
    });
    if (!updatedAppointment) {
      return res
        .status(404)
        .json({ message: "Appointment not found to update" });
    }
    return res.status(200).json(updatedAppointment);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteOneAppointmentController = async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted = await Appointment.findByIdAndDelete(id);

    if (!isDeleted) {
      return res
        .status(404)
        .json({ message: "Can't Delete Appointment, Appointment Not Found" });
    }
    return res
      .status(200)
      .json({ message: "Appointment Deleted Successfully" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
