import express from "express";
const routerAdmin = express.Router();

import { createAdmin } from "../controllers/adminController.js";

routerAdmin.post('/admin/',createAdmin)

export default routerAdmin;