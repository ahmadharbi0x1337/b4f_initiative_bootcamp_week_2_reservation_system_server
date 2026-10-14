import Service from "../models/service.model.js";

// 1. GET ALL SERVICES
export const getServicesController = async (req, res) => {
  try {
    const services = await Service.find();
    return res.status(200).json(services);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// 2. GET SERVICE BY ID
export const getServiceByIdController = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.status(200).json(service);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// 3. CREATE SERVICE
export const createServiceController = async (req, res) => {
  try {
    const { name, duration, price } = req.body;
    if (!name || !duration || !price) {
      return res
        .status(400)
        .json({ message: "name, duration and price are required" });
    }
    const newService = await Service.create({ name, duration, price });

    return res.status(201).json({
      message: "Service created successfully",
      data: newService,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// 4. UPDATE SERVICE
export const updateOneServiceController = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const { name, duration, price } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { name, duration, price },
      { new: true },
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found to update" });
    }

    return res.status(200).json({
      message: "Service updated successfully",
      data: updatedService,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// 5. DELETE SERVICE
export const deleteOneServiceController = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const deletedService = await Service.findByIdAndDelete(serviceId);

    if (!deletedService) {
      return res.status(404).json({ message: "Service not found to delete" });
    }

    return res.status(200).json({
      message: "Service deleted successfully",
      data: deletedService,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
