import pino from "pino";
import { config } from "../config";

const { ENV } = config;

export const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  level: ENV === "production" ? "info" : "debug",
});