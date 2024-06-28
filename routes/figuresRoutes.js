import express from "express";
const routerFigures = express.Router();

import { getFigures } from "../controllers/figuresController.js";

routerFigures.route('/figures').get(getFigures)

export default routerFigures;