import app from "./app";
import { config } from "./config/config";
import connectDB from "./config/dbConfig";

(() => {
  connectDB()
    .then(() => {
      app.listen(config.PORT, () => {
        console.log(`Server running on port ${config.PORT}`);
      });
    })
    .catch((err) => {
      console.error(`Error connecting to database: ${(err as Error).message}`);
    });
})();
