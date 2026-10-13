// IMPORTS
import express from "express";
import cors from "cors";

// MIDDLEWARES
const app = express();
app.use(express.json());
app.use(
  cors({
    exposedHeaders: ["Content-Range", "X-Content-Range"],
  }),
);

// ROUTES
// TODO
