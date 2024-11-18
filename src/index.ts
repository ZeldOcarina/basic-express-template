import express from "express";
import morgan from "morgan";
import logger from "./utils/logger";
import { env } from "./env";
import helmet from "helmet";

const app = express();

app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

app.use(helmet());

app.listen(env.PORT, () => {
  logger.info(`server started on port ${env.PORT} in ${env.ENVIRONMENT} mode.`);
});
