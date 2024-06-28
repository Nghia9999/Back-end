import express from "express";
const routerHistoryTransfer = express.Router();

import { 
  createHistoryTransfer, 
  getAllHistoryTransfers, 
} from "../controllers/historytransferController.js";

// Định tuyến cho các hành động với historyTransfer
routerHistoryTransfer.route("/asset/transfer/:id").post(createHistoryTransfer);
routerHistoryTransfer.route("/history-transfer").get(getAllHistoryTransfers);

export default routerHistoryTransfer;
