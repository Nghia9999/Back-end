
import express from "express";
const routerAuth = express.Router();

import { register, login,verifyToken,getAllAccounts } from "../controllers/authController.js";

routerAuth.route("/register").post(register);
routerAuth.route("/login").post(login);
routerAuth.route("/token/verify").post(verifyToken);
routerAuth.route("/account").get(getAllAccounts);


export default routerAuth;

