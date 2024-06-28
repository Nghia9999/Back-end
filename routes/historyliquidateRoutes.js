import express from "express";
const routerHistoryLiquidate = express.Router();

import { 
  createHistoryLiquidate, 
  getAllHistoryLiquidates, 
  
} from "../controllers/historyliquidateController.js";

// Định tuyến cho các hành động với historyLiquidate
routerHistoryLiquidate.route('/asset/liquidate/:id').post(createHistoryLiquidate);
routerHistoryLiquidate.route("/historyLiquidate").get(getAllHistoryLiquidates);


export default routerHistoryLiquidate;