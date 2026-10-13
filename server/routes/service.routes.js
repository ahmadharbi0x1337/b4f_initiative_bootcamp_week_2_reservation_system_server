import { Router } from "express";
import {
  getServicesController,
  getServiceByIdController,
  createServiceController,
  deleteOneServiceController,
  updateOneServiceController,
} from "../controllers/service.controller.js";
const serviceRouter = Router();

serviceRouter.get("/", getServicesController);
serviceRouter.get("/:id", getServiceByIdController);
serviceRouter.post("/", createServiceController);
serviceRouter.delete("/:id", deleteOneServiceController);
serviceRouter.patch("/:id", updateOneServiceController);

export default serviceRouter;
