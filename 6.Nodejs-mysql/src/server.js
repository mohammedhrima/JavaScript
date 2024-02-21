import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response.js";
import logger from "./util/logger.js";
import httpStatus from "./controller/patient.controller.js";
import patientRoutes from "./route/patient.route.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/patients", patientRoutes);

app.get("/", (req, res) => {
    res.status(200).send(new Response(httpStatus.OK.code, httpStatus.OK.status, "Hello World"));
});

// handle  unknown methods
app.all("*", (req, res) => {
    res.status(httpStatus.NOT_FOUND.code).send(new Response(httpStatus.NOT_FOUND.code, httpStatus.NOT_FOUND.status, "Route does not exists"));
});

app.listen(PORT, () => {
    logger.info("listening on port " + PORT);
});
