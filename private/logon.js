import { config } from "./config.js";

export const server = (document, req, res) => {
  if (req.cookies.pwd != config.pwd) {
    document.body.removeChild(document.getElementById("main"));
    document.body.removeChild(document.getElementById("mainScript"));
  } else {
    document.body.removeChild(document.getElementById("logonScript"));
    document.body.removeChild(document.getElementById("logon"));
  }
};
