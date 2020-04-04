import { Router } from "express";
import validate from "express-validation";

import {
  getInventoryDetail,
  getInventoryDetailById,
  createInventoryDetail,
  updateInventoryDetail,
  removeInventoryDetail,
  getInventoryDetailByProduct,
  getInventoryDetailByBill,
  getInventoryDetailByInventory,
} from "./inventoryDetail.controllers";
import Validations from "./inventoryDetail.validations";
import { auth } from "../../service/passport";

const routes = new Router();

routes.get("/", auth, getInventoryDetail);
routes.get("/:id", auth, getInventoryDetailById);
routes.post(
  "/",
  auth,
  validate(Validations.createInventoryDetail),
  createInventoryDetail
);
routes.patch(
  "/:id",
  auth,
  validate(Validations.updateInventoryDetail),
  updateInventoryDetail
);
routes.delete("/:id", auth, removeInventoryDetail);
routes.get("/product/:id", auth, getInventoryDetailByProduct);
routes.get("/inventory/:id", auth, getInventoryDetailByInventory);

export default routes;
