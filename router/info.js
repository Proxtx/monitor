import {
  ramUsed,
  cpuUsage,
  cores,
  osName,
  uptime,
  userName,
} from "../modules/info.js";
import { Router } from "express";
import { config } from "../modules/config.js";

export const router = Router();

router.post("/info", async (req, res) => {
  if (!(req.body.pwd == config.pwd)) {
    res.status(200).send({ success: false });
    return;
  }
  res.status(200).send({
    success: true,
    ramUsed: ramUsed(),
    cpuUsage: await cpuUsage(),
    cores: cores(),
    osName: osName(),
    uptime: uptime(),
    userName: userName(),
  });
});

router.post("/serviceLink", (req, res) => {
  res.status(200).send({ link: config.serviceManagement });
});
