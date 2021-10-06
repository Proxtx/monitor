import os from "os";
import osUtils from "os-utils";

export const ramUsed = () => {
  return Math.floor((os.totalmem() - os.freemem()) / 100000000) / 10;
};

export const cpuUsage = async () => {
  let usage = Math.floor(
    (await new Promise((resolve) => osUtils.cpuUsage(resolve))) * 100
  );
  return usage;
};

export const add = () => {
  const interfaces = os.networkInterfaces();
  return os.networkInterfaces()[Object.keys(interfaces)[0]][0].cidr;
};

export const uptime = () => {
  return Math.floor(os.uptime() / 60);
};

export const osName = () => {
  return os.platform();
};

export const userName = () => {
  return os.userInfo().username;
};
