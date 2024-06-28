import express from "express";
const routerAssetType = express.Router();

import { createAssetType } from "../controllers/assettypeController.js";

routerAssetType.post('/asset-type/',createAssetType )

export default routerAssetType;