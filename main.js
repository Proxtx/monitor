import { config } from "./private/config.js";
import { listen } from "@proxtx/framework";

listen(config.port);

console.log("Server started!");
