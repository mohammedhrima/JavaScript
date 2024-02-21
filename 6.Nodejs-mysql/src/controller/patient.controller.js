import database from "../config/mysql.config.js";
import Response from "../domain/response.js";
import logger from "../util/logger.js";
import QUERY from "../query/patient.query.js";

const httpStatus = {
    OK: {
        code: 200,
        status: "OK",
    },
    CREATED: {
        code: 201,
        status: "CREATED",
    },
    NO_CONTENT: {
        code: 204,
        status: "NO_CONTENT",
    },
    BAD_REQUEST: {
        code: 400,
        status: "BAD_REQUEST",
    },
    NOT_FOUND: {
        code: 404,
        status: "NOT_FOUND",
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        status: "INTERNAL_SERVER_ERROR",
    },
};

export const getPatients = (req, res) => {
    logger.info(`${req.method} ${req.originalurl}, fetching patients`);
    database.query(QUERY.SELECT_PATIENTS, (error, result) => {
        if (!result) res.status(httpStatus.OK.code).send(new Response(httpStatus.OK.code, httpStatus.OK.status, "No patients found"));
        else {
            res.status(httpStatus.OK.code).send(new Response(httpStatus.OK.code, httpStatus.OK.status, "patient retrieved", { patients: result }));
        }
    });
};

export const createPatient = (req, res) => {
    logger.info(`${req.method} ${req.originalurl}, creating patient`);
    database.query(QUERY.CREATE_PATIENT, Object.values(req.body), (error, result) => {
        if (!result) {
            logger.error(error.message);
            res.status(httpStatus.INTERNAL_SERVER_ERROR.code).send(new Response(httpStatus.INTERNAL_SERVER_ERROR.code, httpStatus.INTERNAL_SERVER_ERROR.status, "Error occurred"));
        } else {
            const patient = { id: result.insertId, ...req.body, created_at: new Date() };
            res.status(httpStatus.CREATED.code).send(new Response(httpStatus.CREATED.code, httpStatus.CREATED.status, "patient created", { patient }));
        }
    });
};

export const getPatient = (req, res) => {
    logger.info(`${req.method} ${req.originalurl}, fetching patient`);
    database.query(QUERY.SELECT_PATIENT, [req.params.id], (error, result) => {
        if (!result || !result[0]) {
            res.status(httpStatus.NOT_FOUND.code).send(new Response(httpStatus.NOT_FOUND.code, httpStatus.NOT_FOUND.status, `Patient by id ${req.params.id} not found`));
        } else {
            res.status(httpStatus.OK.code).send(new Response(httpStatus.OK.code, httpStatus.OK.status, "patient retrieved", result[0]));
        }
    });
};

export const updatePatient = (req, res) => {
    logger.info(`${req.method} ${req.originalurl}, fetching patient`);
    database.query(QUERY.SELECT_PATIENT, [req.params.id], (error, result) => {
        if (!result || !result[0]) {
            res.status(httpStatus.NOT_FOUND.code).send(new Response(httpStatus.NOT_FOUND.code, httpStatus.NOT_FOUND.status, `Patient by id ${req.params.id} not found`));
        } else {
            logger.info(`${req.method} ${req.originalurl}, updating patient`);
            database.query(QUERY.UPDATE_PATIENT, [...Object.values(req.body), req.params.id], (error, result) => {
                if (!error) {
                    res.status(httpStatus.OK.code).send(new Response(httpStatus.OK.code, httpStatus.OK.status, "patient updated", { id: req.params.id, ...req.body }));
                } else {
                    logger.error(error.message);
                    res.status(httpStatus.INTERNAL_SERVER_ERROR.code).send(new Response(httpStatus.INTERNAL_SERVER_ERROR.code, httpStatus.INTERNAL_SERVER_ERROR.status, "Error occurred"));
                }
            });
        }
    });
};

export const deletePatient = (req, res) => {
    logger.info(`${req.method} ${req.originalurl}, deleting patient`);
    database.query(QUERY.DELETE_PATIENT, [req.params.id], (error, result) => {
        if (result.affectedRows > 0) {
            // that means that rows get edited
            res.status(httpStatus.OK.code).send(new Response(httpStatus.OK.code, httpStatus.OK.status, "patient deleted", result[0]));
        } else res.status(httpStatus.NOT_FOUND.code).send(new Response(httpStatus.NOT_FOUND.code, httpStatus.NOT_FOUND.status, `Patient by id ${req.params.id} not found`));
    });
};

export default httpStatus;
