import {
  ramUsed,
  cpuUsage,
  add,
  osName,
  uptime,
  userName,
} from "../modules/info.js";
import { Router } from "express";

export const router = Router();

router.post("/info", async (req, res) => {
  res.status(200).send({
    ramUsed: ramUsed(),
    cpuUsage: await cpuUsage(),
    add: add(),
    osName: osName(),
    uptime: uptime(),
    userName: userName(),
  });
});
