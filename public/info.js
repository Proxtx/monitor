import os from "os";
import osUtils from "os-utils";
import { config } from "../private/config.js";

export const ram = (pwd) => {
  if (pwd != config.pwd) return;
  return Math.floor((os.totalmem() - os.freemem()) / 100000000) / 10 + "mb";
};

export const cpu = async (pwd) => {
  if (pwd != config.pwd) return;
  let usage = Math.floor(
    (await new Promise((resolve) => osUtils.cpuUsage(resolve))) * 100
  );
  return usage + "%";
};

export const cores = (pwd) => {
  if (pwd != config.pwd) return;
  return os.cpus().length;
};

export const uptime = (pwd) => {
  if (pwd != config.pwd) return;
  return Math.floor(os.uptime() / 60) + "m";
};

export const osName = (pwd) => {
  if (pwd != config.pwd) return;
  return os.platform();
};

export const userName = (pwd) => {
  if (pwd != config.pwd) return;
  return os.userInfo().username;
};

export const serviceLink = config.serviceManagement;
