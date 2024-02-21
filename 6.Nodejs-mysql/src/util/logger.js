import logger from "pino";

const log = logger({
    base: { pid: false }, // remeove process ID
    transport: {
        target: "pino-pretty",
        options: {
            colorized: true,
        },
    },
    timestamp: () => `, "time": "${new Date().toLocaleString()}"`,
});

export default log;
