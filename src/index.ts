import { config } from "./config";
import { app } from "./libs/server";

const { PORT } = config;

app.listen(PORT, () => {
  console.log(
    `🚀 Server is up and running! Access it at: http://localhost:${PORT}/api/health-check`,
  );
});