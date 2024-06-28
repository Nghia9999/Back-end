import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import "express-async-errors";
import bodyParser from "body-parser";
import cors from "cors"; // Thêm cors
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import router from "./routes/authRoutes.js";
import routerAsset from "./routes/assetRoutes.js";
import routerAssetType from "./routes/assettypeRoutes.js";
import routerAdmin from "./routes/adminRoutes.js";
import routerDepartment from "./routes/departmentRoutes.js";
import routerFaculty from "./routes/facultyRoutes.js";
import routerLiquidation from "./routes/liquidationRoutes.js";
import routerPass from "./routes/passRoutes.js";
import routerStaff from "./routes/staffRoutes.js";
import routerUser from "./routes/userRoutes.js";
import routerHistoryLiquidate from "./routes/historyliquidateRoutes.js";
import routerHistoryTransfer from "./routes/historytransferRoutes.js";
import routerFigures from "./routes/figuresRoutes.js";
const port = 5003;
const app = express();

dotenv.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connect"))
  .catch((err) => console.log(err));

// Thêm cấu hình CORS ở đây
app.use(
  cors({
    origin: "http://localhost:3000", // Cho phép tất cả các yêu cầu từ domain http://localhost:3000
  })
);

app.use(router);
app.use(routerAsset);
app.use(routerAssetType);
app.use(routerAdmin);
app.use(routerDepartment);
app.use(routerFaculty);
app.use(routerLiquidation);
app.use(routerPass);
app.use(routerStaff);
app.use(routerUser);
app.use(routerHistoryLiquidate);
app.use(routerHistoryTransfer);
app.use(routerFigures)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on ${process.env.PORT || port}!`);
});
